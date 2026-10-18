# DoodlePDF

DoodlePDF keeps its existing hand-drawn web interface and adds a Python PDF engine. Flask serves the page and handles server-side PDF tasks; the current UI delegates merge, split, compress, and rotate operations to it. The other tools remain available through the existing browser engine while their Python equivalents are added.

## Run locally

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements.txt
python backend/run.py
```

Open <http://localhost:5000>. Set `PORT` to change the port and `MAX_CONTENT_LENGTH` to change the upload limit (default 500 MiB).

## Run with Docker

```bash
docker compose up --build
```

The app is available at <http://localhost:5000>.

## Python API

- `GET /api/health`
- `POST /api/pdf/merge` — two or more `files` fields
- `POST /api/pdf/split` — `file` and `ranges` (for example `1-3,5` or `all`)
- `POST /api/pdf/compress` — `file`; currently applies lossless structural optimization
- `POST /api/pdf/rotate` — `file` and `degrees` (multiple of 90)
- `POST /api/pdf/render` — `file`, returns a ZIP of page images

The Python API rejects invalid page ranges, encrypted input that it cannot process, and uploads above its configured size limit. Requests are processed without a persistent upload directory.

## Project layout

```text
backend/       Flask app and PDF API
css/           Existing interface styles
js/            Existing interface and browser-side tools
index.html     Existing DoodlePDF interface
```
