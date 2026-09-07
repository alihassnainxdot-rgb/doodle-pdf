# ✏️ DoodlePDF - The Hand-Drawn PDF Workshop

<p align="center">
  <img src="https://img.shields.io/badge/Tools-31%20in%201-FFDFE8?style=for-the-badge&logoColor=1E1E24" alt="31 in 1 Tools" />
  <img src="https://img.shields.io/badge/Privacy-Zero%20Cloud%20Uploads-D1FAE5?style=for-the-badge&logoColor=1E1E24" alt="Zero Cloud Uploads" />
  <img src="https://img.shields.io/badge/Auto--Purge-Guaranteed-FEF08A?style=for-the-badge&logoColor=1E1E24" alt="Auto-Purge Guaranteed" />
  <img src="https://img.shields.io/badge/Deploy-Vercel%20Ready-DBEAFE?style=for-the-badge&logoColor=1E1E24" alt="Vercel Ready" />
  <img src="https://img.shields.io/badge/License-MIT-E9D5FF?style=for-the-badge&logoColor=1E1E24" alt="MIT License" />
</p>

<p align="center">
  <strong>Every PDF tool you will ever need, crafted with delightful hand-drawn aesthetics, retro cartoon mascots, paperclips, and 100% in-browser confidentiality.</strong>
</p>

---

## 🌟 Why DoodlePDF?

Traditional PDF tools online are dull, filled with aggressive subscriptions, and force you to upload confidential financial, medical, and personal documents to their remote servers.

**DoodlePDF re-imagines PDF utilities from the ground up:**
- 🎨 **Playful Hand-Drawn Aesthetic**: Inspired by retro black-and-white ink cartoons, collage scrapbooks, realistic brass and red metal paperclips, tilted marquee ribbons, and ballpoint pen annotations.
- 🛡️ **Zero Cloud Storage & Auto-Purge Guarantee**: All PDF rendering, merging, conversion, and editing execute **100% client-side in your browser's RAM** using WebAssembly and HTML5 Canvas. No file is ever transmitted to a server or stored in the cloud. All document buffers are automatically wiped clean immediately upon download or task completion.
- ⚡ **Complete 31-in-1 Suite**: Every single tool you know from iLovePDF, plus modern smart additions like an in-browser AI Summarizer, Document Translator, and PDF to Markdown!
- 🔊 **Tactile Sound Effects**: Synthesized audio feedback (pencil scratches, paper rustles, pop clicks) with a one-click mute toggle.

---

## 🐾 Meet The Doodle Crew

| Mascot | Character | Role |
|:---:|:---:|:---|
| 🕶️🐱 | **Cool Cat** | Master of Sunglasses & Chill Merging |
| ✏️ | **Penley the Pencil** | Sharp editor drawing annotations & stamps |
| ☕ | **Muggy Coffee** | Sleepy companion fueling late-night OCR |
| 🖥️ | **Byte the CRT** | Retro 90s display crunching PDF conversions |

---

## 🛠️ The Complete 31-Tool Directory

### 📑 1. Organize & Structure
| Tool | Description |
|:---|:---|
| **Merge PDF** | Combine multiple PDFs into a single document in custom sequence. |
| **Split PDF** | Extract single pages or custom ranges (`1-3, 5, 8-10`) into separate PDFs. |
| **Organize PDF** | Visual thumbnail manager to reorder pages, rotate, or delete unwanted pages. |
| **Rotate PDF** | Rotate pages 90°, 180°, or 270° clockwise or counter-clockwise. |
| **Crop PDF** | Interactive bounding box to trim margins per page or across the whole document. |
| **Page Numbers** | Stamp custom page numbers in any of 6 positions with formats like `Page {n} of {total}`. |

### 🔐 2. Optimize & Security
| Tool | Description |
|:---|:---|
| **Compress PDF** | Reduce file size while optimizing quality across 3 presets (*Recommended*, *Extreme*, *High Quality*). |
| **Unlock PDF** | Remove password restrictions and unlock document permissions. |
| **Protect PDF** | Add password protection and encryption to sensitive documents. |
| **PDF to PDF/A** | Transform PDFs into ISO 19005-1 standardized archival formats. |
| **Repair PDF** | Re-index cross-reference tables and recover salvageable streams from corrupted files. |

### 📤 3. Convert From PDF
| Tool | Description |
|:---|:---|
| **PDF to Word (.docx)** | Convert PDF text, headings, and paragraphs into editable Microsoft Word documents. |
| **PDF to PowerPoint (.pptx)** | Turn PDF pages into a presentation slide deck. |
| **PDF to Excel (.xlsx)** | Extract tables, columns, and numbers into clean Excel spreadsheets. |
| **PDF to JPG / PNG** | Render high-resolution images of each page and download individually or as a `.zip`. |
| **PDF to Markdown (.md)** | Convert document structure into clean GitHub-Flavored Markdown for LLMs and note-taking. |

### 📥 4. Convert To PDF
| Tool | Description |
|:---|:---|
| **Word to PDF** | Convert DOC/DOCX files into clean, readable PDFs. |
| **PowerPoint to PDF** | Turn slide presentations into portable PDFs. |
| **Excel to PDF** | Format spreadsheet tables into styled PDF pages. |
| **JPG to PDF** | Compile images into a PDF with custom orientation, margins, and paper sizes. |
| **HTML to PDF** | Render live HTML, web content, or Markdown into printable PDF pages. |
| **Scan to PDF** | Access your webcam or camera as a document scanner with high-contrast document filters. |

### ✍️ 5. Edit & Sign
| Tool | Description |
|:---|:---|
| **Edit PDF** | Canvas workspace to add hand-drawn stickers (`APPROVED`, `CONFIDENTIAL`), text notes, doodles, and shapes. |
| **Sign PDF** | Signature studio with smooth mouse/touch drawing pad or cursive typography to stamp onto pages. |
| **Watermark PDF** | Stamp text or image watermarks with custom opacity, rotation angle, and fonts. |
| **Redact PDF** | Permanently blackout sensitive private text and graphics with solid inky rectangles. |
| **PDF Forms** | Detect and fill interactive AcroForm fields, textboxes, and checkboxes. |

### 🤖 6. AI & Smart Tools
| Tool | Description |
|:---|:---|
| **AI Summarizer** | Extract document text and generate Executive Summaries, Key Highlights, and Q&A bullet points in seconds. |
| **Translate PDF** | In-browser document translator with language selector across 20+ languages. |
| **OCR PDF** | Optical character recognition to extract text from scanned images into selectable, copyable text. |
| **Compare PDF** | Side-by-side visual difference viewer with pixel diff overlay and match percentage scoring. |

---

## 🛡️ Privacy & Auto-Purge Architecture

```
[User Document] ──> [Browser RAM Only] ──> [WebAssembly / Canvas Processing] ──> [Instant Download]
                                                                                       │
                                                                                       ▼
                                                                            [Auto-Purge Routine]
                                                                        (All memory buffers wiped)
```

1. **Zero Remote Uploads**: No server endpoints exist to receive documents. Your files never leave your computer.
2. **Instant Memory Purge**: As soon as a download finishes, or when the user resets or closes a modal, all temporary `blob:` URLs are revoked and all in-memory file buffers are immediately garbage collected.

---

## 🚀 Getting Started

### 1. Run Locally
Simply open `index.html` directly in any modern web browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Or run the included local server helper:
```powershell
.\start-app.ps1
```

### 2. Deploy to Vercel (1-Click)
DoodlePDF is pre-configured with `vercel.json`:
1. Push this repository to GitHub: `https://github.com/alihassnainxdot-rgb/doodle-pdf`
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Click **Deploy**. Vercel will launch your live site instantly!

---

## 💻 Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+), HTML5 Canvas, CSS3 Custom Properties.
- **Typography**: Google Fonts (`Fredoka`, `Caveat`, `Patrick Hand`, `Plus Jakarta Sans`).
- **Core Processing Engines**:
  - `pdf-lib` (Document generation, splitting, merging, signing, forms)
  - `pdf.js` (High-fidelity canvas rendering, text stream extraction)
  - `SheetJS / xlsx` (Spreadsheet parsing and generation)
  - `JSZip` (Multi-page image archiving)
  - `Canvas Confetti` (Celebration particle animations)

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and build upon it!
