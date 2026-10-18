"""Python PDF engine and static UI server for DoodlePDF."""
from __future__ import annotations

import io
import os
import re
import zipfile
from pathlib import Path

import pymupdf as fitz
from flask import Flask, jsonify, request, send_file, send_from_directory
from pypdf import PdfReader, PdfWriter
from dotenv import load_dotenv
from werkzeug.exceptions import RequestEntityTooLarge

ROOT = Path(__file__).resolve().parents[1]
load_dotenv(ROOT / ".env")


def create_app() -> Flask:
    app = Flask(__name__, static_folder=None)
    app.config["MAX_CONTENT_LENGTH"] = int(os.getenv("MAX_CONTENT_LENGTH", 500 * 1024 * 1024))

    @app.get("/")
    def index():
        return send_from_directory(ROOT, "index.html")

    @app.get("/<path:asset>")
    def assets(asset: str):
        # Only serve the existing frontend assets; never expose the Python source tree.
        if asset.startswith(("css/", "js/")):
            return send_from_directory(ROOT, asset)
        return jsonify(error="Not found"), 404

    @app.get("/api/health")
    def health():
        return jsonify(status="healthy", service="doodlepdf-python")

    @app.errorhandler(RequestEntityTooLarge)
    def too_large(_error):
        return jsonify(error="The uploaded file exceeds the 500 MB limit."), 413

    @app.post("/api/pdf/merge")
    def merge():
        uploads = request.files.getlist("files")
        if len(uploads) < 2:
            return jsonify(error="Choose at least two PDF files."), 400
        writer = PdfWriter()
        try:
            for upload in uploads:
                reader = PdfReader(upload.stream)
                if reader.is_encrypted:
                    return jsonify(error=f"{upload.filename or 'A PDF'} is password protected."), 400
                for page in reader.pages:
                    writer.add_page(page)
            output = io.BytesIO()
            writer.write(output)
            output.seek(0)
            return send_file(output, mimetype="application/pdf", as_attachment=True, download_name="merged.pdf")
        except Exception as exc:
            return jsonify(error=f"Could not merge the PDFs: {exc}"), 400
        finally:
            writer.close()

    @app.post("/api/pdf/split")
    def split():
        upload = request.files.get("file")
        if not upload:
            return jsonify(error="Choose a PDF file."), 400
        try:
            reader = PdfReader(upload.stream)
            if reader.is_encrypted:
                return jsonify(error="The PDF is password protected."), 400
            selected = parse_ranges(request.form.get("ranges", "all"), len(reader.pages))
            if not selected:
                return jsonify(error="The page range did not include any pages."), 400
            writer = PdfWriter()
            for page_index in selected:
                writer.add_page(reader.pages[page_index])
            output = io.BytesIO()
            writer.write(output)
            output.seek(0)
            return send_file(output, mimetype="application/pdf", as_attachment=True, download_name="split.pdf")
        except ValueError as exc:
            return jsonify(error=str(exc)), 400
        except Exception as exc:
            return jsonify(error=f"Could not split the PDF: {exc}"), 400

    @app.post("/api/pdf/compress")
    def compress():
        upload = request.files.get("file")
        if not upload:
            return jsonify(error="Choose a PDF file."), 400
        level = (request.form.get("quality") or "recommended").strip().lower()
        try:
            document = fitz.open(stream=upload.read(), filetype="pdf")
            if document.needs_pass:
                document.close()
                return jsonify(error="The PDF is password protected."), 400

            if level == "extreme":
                # Smallest result: down-sample images hard and drop unused glyphs.
                _shrink_images(document, dpi_threshold=120, dpi_target=96, quality=40)
                _subset_fonts(document)
                save_options = dict(garbage=4, deflate=True, deflate_fonts=True, clean=True)
            elif level == "high":
                # "Less compression" keeps the highest visual quality.
                save_options = dict(garbage=3, deflate=True)
            else:
                # Recommended: a balanced down-sample plus lossless stream cleanup.
                _shrink_images(document, dpi_threshold=200, dpi_target=150, quality=65)
                save_options = dict(garbage=4, deflate=True, deflate_fonts=True)

            output = io.BytesIO()
            document.save(output, **save_options)
            document.close()
            output.seek(0)
            return send_file(output, mimetype="application/pdf", as_attachment=True, download_name="compressed.pdf")
        except Exception as exc:
            return jsonify(error=f"Could not compress the PDF: {exc}"), 400

    @app.post("/api/pdf/rotate")
    def rotate():
        upload = request.files.get("file")
        if not upload:
            return jsonify(error="Choose a PDF file."), 400
        try:
            degrees = int(request.form.get("degrees", "90"))
            if degrees % 90:
                return jsonify(error="Rotation must be a multiple of 90 degrees."), 400
            document = fitz.open(stream=upload.read(), filetype="pdf")
            for page in document:
                page.set_rotation((page.rotation + degrees) % 360)
            output = io.BytesIO(document.tobytes(garbage=4, deflate=True))
            document.close()
            output.seek(0)
            return send_file(output, mimetype="application/pdf", as_attachment=True, download_name="rotated.pdf")
        except Exception as exc:
            return jsonify(error=f"Could not rotate the PDF: {exc}"), 400

    @app.post("/api/pdf/render")
    def render_pages():
        """Render pages to a ZIP of PNGs, for the existing PDF-to-image UI."""
        upload = request.files.get("file")
        if not upload:
            return jsonify(error="Choose a PDF file."), 400
        try:
            document = fitz.open(stream=upload.read(), filetype="pdf")
            archive = io.BytesIO()
            with zipfile.ZipFile(archive, "w", zipfile.ZIP_DEFLATED) as bundle:
                for index, page in enumerate(document):
                    pixmap = page.get_pixmap(matrix=fitz.Matrix(1.6, 1.6), alpha=False)
                    bundle.writestr(f"page_{index + 1}.png", pixmap.tobytes("png"))
            document.close()
            archive.seek(0)
            return send_file(archive, mimetype="application/zip", as_attachment=True, download_name="pdf_pages.zip")
        except Exception as exc:
            return jsonify(error=f"Could not render the PDF: {exc}"), 400

    return app


def _shrink_images(document, dpi_threshold: int, dpi_target: int, quality: int) -> None:
    """Re-encode embedded images at a lower resolution/quality where possible."""
    try:
        document.rewrite_images(dpi_threshold=dpi_threshold, dpi_target=dpi_target, quality=quality)
    except Exception:
        # Best effort only: a page without rewritable images must not fail the request.
        pass


def _subset_fonts(document) -> None:
    """Embed only the glyphs that are actually used, when the fonts allow it."""
    try:
        document.subset_fonts()
    except Exception:
        pass


def parse_ranges(value: str, page_count: int) -> list[int]:
    if value.strip().lower() == "all":
        return list(range(page_count))
    pages: set[int] = set()
    for part in value.split(","):
        match = re.fullmatch(r"\s*(\d+)\s*(?:-\s*(\d+)\s*)?", part)
        if not match:
            raise ValueError("Use page numbers such as 1-3,5 or all.")
        start = int(match.group(1))
        end = int(match.group(2) or start)
        if start < 1 or end < start or end > page_count:
            raise ValueError(f"Page ranges must be between 1 and {page_count}.")
        pages.update(range(start - 1, end))
    return sorted(pages)


app = create_app()
