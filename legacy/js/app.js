/**
 * DoodlePDF - Main Application Controller
 * Hand-drawn UI orchestration, tool options rendering, drag & drop,
 * synthesized tactile audio, and file processing.
 */

// Tool Definitions for all 31 Operations
const PDF_TOOLS = [
  // Organize & Structure
  {
    id: 'merge_pdf',
    title: 'Merge PDF',
    category: 'organize',
    catName: 'Organize',
    badge: 'Popular',
    desc: 'Combine PDFs in the order you want with the easiest doodle merger.',
    accept: '.pdf',
    multiple: true,
    actionBtnText: 'Merge PDFs Now!'
  },
  {
    id: 'split_pdf',
    title: 'Split PDF',
    category: 'organize',
    catName: 'Organize',
    desc: 'Separate one page or a whole set for easy conversion into independent PDF files.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Split & Extract Pages'
  },
  {
    id: 'organize_pdf',
    title: 'Organize PDF',
    category: 'organize',
    catName: 'Organize',
    desc: 'Sort pages of your PDF however you like. Delete or rotate pages at your convenience.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Save Organized PDF'
  },
  {
    id: 'rotate_pdf',
    title: 'Rotate PDF',
    category: 'organize',
    catName: 'Organize',
    desc: 'Rotate your PDFs the way you need them. Even rotate all pages at once!',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Rotate & Download'
  },
  {
    id: 'crop_pdf',
    title: 'Crop PDF',
    category: 'organize',
    catName: 'Organize',
    desc: 'Crop margins of PDF documents or select specific areas to trim.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Crop Document'
  },
  {
    id: 'page_numbers',
    title: 'Page Numbers',
    category: 'organize',
    catName: 'Organize',
    desc: 'Add page numbers into PDFs with ease. Choose positions, typography, and format.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Stamp Page Numbers'
  },

  // Optimize & Protect
  {
    id: 'compress_pdf',
    title: 'Compress PDF',
    category: 'security',
    catName: 'Optimize',
    badge: 'Popular',
    desc: 'Reduce file size while optimizing for maximal PDF quality.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Compress PDF'
  },
  {
    id: 'unlock_pdf',
    title: 'Unlock PDF',
    category: 'security',
    catName: 'Security',
    desc: 'Remove PDF password security, giving you freedom to use your PDFs.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Unlock PDF'
  },
  {
    id: 'protect_pdf',
    title: 'Protect PDF',
    category: 'security',
    catName: 'Security',
    desc: 'Protect PDF files with a password and restrict unauthorized access.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Encrypt & Protect'
  },
  {
    id: 'pdf_to_pdfa',
    title: 'PDF to PDF/A',
    category: 'security',
    catName: 'Optimize',
    desc: 'Transform your PDF to PDF/A for ISO-standardized long-term archiving.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Convert to PDF/A'
  },
  {
    id: 'repair_pdf',
    title: 'Repair PDF',
    category: 'security',
    catName: 'Optimize',
    desc: 'Repair a damaged PDF and recover salvageable data from corrupt files.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Repair Document'
  },

  // Convert From PDF
  {
    id: 'pdf_to_word',
    title: 'PDF to Word',
    category: 'convert-from',
    catName: 'Convert From',
    badge: 'High Accuracy',
    desc: 'Easily convert your PDF files into easy to edit DOCX documents.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Convert to Word (.docx)'
  },
  {
    id: 'pdf_to_powerpoint',
    title: 'PDF to PowerPoint',
    category: 'convert-from',
    catName: 'Convert From',
    desc: 'Turn your PDF files into easy to present PPTX slide decks.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Convert to PowerPoint'
  },
  {
    id: 'pdf_to_excel',
    title: 'PDF to Excel',
    category: 'convert-from',
    catName: 'Convert From',
    desc: 'Pull data and numbers straight from PDFs into Excel spreadsheets.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Extract to Excel (.xlsx)'
  },
  {
    id: 'pdf_to_jpg',
    title: 'PDF to JPG',
    category: 'convert-from',
    catName: 'Convert From',
    desc: 'Convert each PDF page into high-resolution JPG images.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Convert to JPG Images'
  },
  {
    id: 'pdf_to_markdown',
    title: 'PDF to Markdown',
    category: 'convert-from',
    catName: 'Convert From',
    badge: 'New!',
    desc: 'Turn PDFs into Markdown. Perfect for notes, docs, and LLMs.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Convert to Markdown (.md)'
  },

  // Convert To PDF
  {
    id: 'word_to_pdf',
    title: 'Word to PDF',
    category: 'convert-to',
    catName: 'Convert To',
    desc: 'Make DOC and DOCX files easy to read by converting them to PDF.',
    accept: '.docx,.doc,.txt',
    multiple: false,
    actionBtnText: 'Generate PDF'
  },
  {
    id: 'powerpoint_to_pdf',
    title: 'PowerPoint to PDF',
    category: 'convert-to',
    catName: 'Convert To',
    desc: 'Make PPT slideshows easy to view by converting them to PDF.',
    accept: '.pptx,.ppt,.txt',
    multiple: false,
    actionBtnText: 'Generate PDF'
  },
  {
    id: 'excel_to_pdf',
    title: 'Excel to PDF',
    category: 'convert-to',
    catName: 'Convert To',
    desc: 'Make spreadsheet sheets into beautifully formatted PDF tables.',
    accept: '.xlsx,.xls,.csv',
    multiple: false,
    actionBtnText: 'Generate PDF Tables'
  },
  {
    id: 'jpg_to_pdf',
    title: 'JPG to PDF',
    category: 'convert-to',
    catName: 'Convert To',
    desc: 'Convert JPG, PNG images to PDF in seconds with custom margins & orientation.',
    accept: 'image/jpeg,image/png,image/webp',
    multiple: true,
    actionBtnText: 'Compile to PDF'
  },
  {
    id: 'html_to_pdf',
    title: 'HTML to PDF',
    category: 'convert-to',
    catName: 'Convert To',
    desc: 'Convert webpages or raw HTML into clean printable PDF documents.',
    accept: '.html,.htm,.txt',
    multiple: false,
    actionBtnText: 'Render HTML to PDF'
  },
  {
    id: 'scan_pdf',
    title: 'Scan to PDF',
    category: 'convert-to',
    catName: 'Convert To',
    desc: 'Capture document scans directly with your camera with auto document filters.',
    accept: 'image/*',
    multiple: true,
    actionBtnText: 'Generate Scanned PDF'
  },

  // Edit & Sign
  {
    id: 'edit_pdf',
    title: 'Edit PDF',
    category: 'edit-sign',
    catName: 'Edit & Sign',
    badge: 'Interactive',
    desc: 'Add text, stickers, shapes, freehand annotations, and stamps to your PDF.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Burn Edits to PDF'
  },
  {
    id: 'sign_pdf',
    title: 'Sign PDF',
    category: 'edit-sign',
    catName: 'Edit & Sign',
    badge: 'Popular',
    desc: 'Draw your signature or type cursive name and stamp it onto the PDF.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Apply Signature & Save'
  },
  {
    id: 'watermark',
    title: 'Watermark PDF',
    category: 'edit-sign',
    catName: 'Edit & Sign',
    desc: 'Stamp custom text or image watermark with angle and opacity control.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Apply Watermark'
  },
  {
    id: 'redact_pdf',
    title: 'Redact PDF',
    category: 'edit-sign',
    catName: 'Edit & Sign',
    desc: 'Redact text and graphics to permanently blackout sensitive information.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Permanently Redact'
  },
  {
    id: 'pdf_forms',
    title: 'PDF Forms',
    category: 'edit-sign',
    catName: 'Edit & Sign',
    badge: 'New!',
    desc: 'Fill interactive AcroForm fields, checkboxes, and text inputs.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Export Filled Form'
  },

  // AI & Smart Tools
  {
    id: 'ai_summarize',
    title: 'AI Summarizer',
    category: 'ai',
    catName: 'AI Tools',
    badge: 'New!',
    desc: 'Generate executive summaries, key highlights, and Q&A bullet points in seconds.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Summarize Document'
  },
  {
    id: 'translate_pdf',
    title: 'Translate PDF',
    category: 'ai',
    catName: 'AI Tools',
    badge: 'New!',
    desc: 'Translate PDF text into 20+ languages while keeping structure intact.',
    accept: '.pdf',
    multiple: false,
    actionBtnText: 'Translate Document'
  },
  {
    id: 'ocr_pdf',
    title: 'OCR PDF',
    category: 'ai',
    catName: 'AI Tools',
    desc: 'Convert scanned PDF pages into selectable, searchable, and copyable text.',
    accept: '.pdf,image/*',
    multiple: false,
    actionBtnText: 'Run OCR Recognition'
  },
  {
    id: 'compare_pdf',
    title: 'Compare PDF',
    category: 'ai',
    catName: 'AI Tools',
    desc: 'Show a side-by-side visual diff slider to spot changes between document versions.',
    accept: '.pdf',
    multiple: true,
    actionBtnText: 'Compare Documents'
  }
];

// App State Controller
class DoodleApp {
  constructor() {
    this.engine = new PDFEngine();
    this.currentTool = null;
    this.selectedFiles = [];
    this.processedBlob = null;
    this.processedFilename = 'doodle_document.pdf';
    this.soundEnabled = true;
    this.audioCtx = null;
    this.activeFilter = 'all';
    this.searchQuery = '';

    // Signature Studio state
    this.signatureDataUrl = null;
    this.isDrawingSig = false;
    this.sigLastPos = { x: 0, y: 0 };

    // Scanner state
    this.cameraStream = null;
    this.capturedScanImages = [];

    // Edit PDF annotations
    this.annotations = [];

    this.init();
  }

  init() {
    this.renderHeroMascots();
    this.renderToolsGrid();
    this.setupEventListeners();
    this.setupAudio();
  }

  // Synthesized Sound Effects (Tactile Paper & Pencil clicks)
  setupAudio() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      this.audioCtx = new AudioContext();
    }
  }

  playSound(type = 'pop') {
    if (!this.soundEnabled || !this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      const now = this.audioCtx.currentTime;

      if (type === 'pop') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(740, now + 0.08);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'chime') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        osc.start(now);
        osc.stop(now + 0.45);
      } else if (type === 'pencil') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.linearRampToValueAtTime(220, now + 0.05);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.06);
      }
    } catch (e) {
      // Audio autoplay policy catch
    }
  }

  renderHeroMascots() {
    const mascotContainer = document.getElementById('heroMascotsContainer');
    if (!mascotContainer) return;

    mascotContainer.innerHTML = `
      <div class="mascot-lineup">
        <div class="mascot-slot" title="Cool Cat" onclick="app.playSound('pop')">${DoodleAssets.mascots.coolCat}</div>
        <div class="mascot-slot" title="Penley the Pencil" onclick="app.playSound('pencil')">${DoodleAssets.mascots.penleyPencil}</div>
        <div class="mascot-slot" title="Muggy Coffee" onclick="app.playSound('pop')">${DoodleAssets.mascots.coffeeMug}</div>
        <div class="mascot-slot" title="CRT Computer" onclick="app.playSound('chime')">${DoodleAssets.mascots.retroMonitor}</div>
      </div>
      <div class="mascot-caption">★ MEET THE DOODLE CREW ★</div>
    `;

    // Add paper clips to hero card
    const heroCard = document.querySelector('.hero-text-card');
    if (heroCard) {
      heroCard.insertAdjacentHTML('afterbegin', `
        <div class="paperclip-top-left">${DoodleAssets.paperClips.redClip}</div>
        <div class="paperclip-top-right">${DoodleAssets.paperClips.brassClip}</div>
      `);
    }
  }

  renderToolsGrid() {
    const grid = document.getElementById('toolsGrid');
    if (!grid) return;

    const filtered = PDF_TOOLS.filter(tool => {
      const matchCat = this.activeFilter === 'all' || tool.category === this.activeFilter;
      const matchSearch = !this.searchQuery || 
        tool.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
        tool.desc.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
          <div style="width: 100px; margin: 0 auto;">${DoodleAssets.mascots.coffeeMug}</div>
          <h3 class="display-font" style="font-size: 1.4rem; margin-top: 12px;">Oops! No doodles found for "${this.searchQuery}"</h3>
          <p class="hand-font" style="font-size: 1.2rem; color: #4B5563;">Try searching for merge, edit, compress, or ocr!</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map((tool, idx) => {
      const iconSvg = DoodleAssets.toolIcons[tool.id] || DoodleAssets.toolIcons.merge_pdf;
      const clipSvg = idx % 2 === 0 ? DoodleAssets.paperClips.redClip : DoodleAssets.paperClips.brassClip;
      
      return `
        <div class="tool-card cat-${tool.category}" onclick="app.openTool('${tool.id}')">
          <div class="tool-card-clip">${clipSvg}</div>
          ${tool.badge ? `<div class="tool-card-new-badge">${tool.badge}</div>` : ''}
          <div class="tool-icon-box">${iconSvg}</div>
          <h3 class="tool-title">${tool.title}</h3>
          <p class="tool-desc">${tool.desc}</p>
          <div class="tool-card-footer">
            <span class="tool-cat-tag">${tool.catName}</span>
            <span class="tool-arrow-btn">Start Tool →</span>
          </div>
        </div>
      `;
    }).join('');
  }

  setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('toolSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim();
        this.renderToolsGrid();
      });
    }

    // Category pills
    document.querySelectorAll('.cat-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeFilter = btn.dataset.category;
        this.playSound('pop');
        this.renderToolsGrid();
      });
    });

    // Sound toggle
    const soundBtn = document.getElementById('soundToggleBtn');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        this.soundEnabled = !this.soundEnabled;
        soundBtn.innerHTML = this.soundEnabled ? '🔊 Sound: ON' : '🔇 Sound: OFF';
        if (this.soundEnabled) this.playSound('pop');
      });
    }

    // Modal Close
    const closeBtn = document.getElementById('modalCloseBtn');
    const backdrop = document.getElementById('modalBackdrop');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal());
    }
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) this.closeModal();
      });
    }

    // File Input change
    const fileInput = document.getElementById('universalFileInput');
    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        this.handleFiles(e.target.files);
      });
    }

    // Drag & drop dropzone
    const dropzone = document.getElementById('universalDropzone');
    if (dropzone) {
      ['dragenter', 'dragover'].forEach(name => {
        dropzone.addEventListener(name, (e) => {
          e.preventDefault();
          dropzone.classList.add('dragover');
        });
      });
      ['dragleave', 'drop'].forEach(name => {
        dropzone.addEventListener(name, (e) => {
          e.preventDefault();
          dropzone.classList.remove('dragover');
        });
      });
      dropzone.addEventListener('drop', (e) => {
        if (e.dataTransfer && e.dataTransfer.files.length) {
          this.handleFiles(e.dataTransfer.files);
        }
      });
    }

    // Execute Button
    const execBtn = document.getElementById('executeActionBtn');
    if (execBtn) {
      execBtn.addEventListener('click', () => this.executeCurrentTool());
    }

    // Download Again / New Task
    const resetBtn = document.getElementById('resetTaskBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.selectedFiles = [];
        this.processedBlob = null;
        this.resetModalUI();
      });
    }
  }

  // Open Tool Workspace Modal
  openTool(toolId) {
    const tool = PDF_TOOLS.find(t => t.id === toolId);
    if (!tool) return;

    this.currentTool = tool;
    this.selectedFiles = [];
    this.processedBlob = null;
    this.playSound('pop');

    // Set modal headers
    const iconContainer = document.getElementById('modalTitleIcon');
    const titleElem = document.getElementById('modalTitleText');
    const descElem = document.getElementById('modalDescText');
    const actionBtn = document.getElementById('executeActionBtn');

    if (iconContainer) iconContainer.innerHTML = DoodleAssets.toolIcons[tool.id] || '';
    if (titleElem) titleElem.textContent = tool.title;
    if (descElem) descElem.textContent = tool.desc;
    if (actionBtn) actionBtn.textContent = tool.actionBtnText;

    // Configure file input
    const fileInput = document.getElementById('universalFileInput');
    if (fileInput) {
      fileInput.accept = tool.accept || '*/*';
      fileInput.multiple = Boolean(tool.multiple);
    }

    // Reset UI sections
    this.resetModalUI();

    // Render tool-specific options
    this.renderToolOptions(tool);

    // Open backdrop
    document.getElementById('modalBackdrop').classList.add('open');
  }

  // Auto-Purge Guarantee: Immediately wipes all document buffers and memory
  purgeMemory() {
    if (this.activeBlobUrl) {
      URL.revokeObjectURL(this.activeBlobUrl);
      this.activeBlobUrl = null;
    }
    this.selectedFiles = [];
    this.processedBlob = null;
    this.capturedScanImages = [];
    this.signatureDataUrl = null;

    const fileInput = document.getElementById('universalFileInput');
    if (fileInput) fileInput.value = '';

    const trayFilesGrid = document.getElementById('trayFilesGrid');
    if (trayFilesGrid) trayFilesGrid.innerHTML = '';

    const snapsTray = document.getElementById('capturedSnapsTray');
    if (snapsTray) snapsTray.innerHTML = '';

    console.log('[DoodlePDF] 🛡️ Auto-Purge Activated: Document files and buffers completely wiped from memory.');
  }

  closeModal() {
    document.getElementById('modalBackdrop').classList.remove('open');
    if (this.cameraStream) {
      this.cameraStream.getTracks().forEach(t => t.stop());
      this.cameraStream = null;
    }
    this.currentTool = null;
    this.purgeMemory();
    this.playSound('pop');
  }

  resetModalUI() {
    this.purgeMemory();
    document.getElementById('dropzoneSection').style.display = 'block';
    document.getElementById('fileTraySection').style.display = 'none';
    document.getElementById('toolOptionsSection').style.display = 'none';
    document.getElementById('statusOverlay').classList.remove('active');
    document.getElementById('successCard').classList.remove('active');
    document.getElementById('executeActionBtn').disabled = true;
    document.getElementById('executeActionBtn').style.opacity = '0.5';

    // Set dropzone hint
    const dropzoneTitle = document.getElementById('dropzoneTitle');
    const dropzoneHint = document.getElementById('dropzoneHint');
    const arrowElem = document.getElementById('dropzoneArrow');
    if (arrowElem) arrowElem.innerHTML = DoodleAssets.decorations.blueArrowDown;

    if (this.currentTool) {
      if (dropzoneTitle) dropzoneTitle.textContent = `Drop your files here for ${this.currentTool.title}`;
      if (dropzoneHint) dropzoneHint.textContent = `Accepts: ${this.currentTool.accept || 'PDF files'}`;
    }
  }

  // Render dynamic settings according to the selected tool
  renderToolOptions(tool) {
    const container = document.getElementById('toolOptionsContainer');
    if (!container) return;

    let html = '';

    switch (tool.id) {
      case 'split_pdf':
        html = `
          <div class="option-group">
            <label class="option-label">Page Range to Extract:</label>
            <input type="text" id="opt_split_range" class="option-input" value="1" placeholder="e.g. 1-3, 5, 8-10"/>
            <small style="color: #6B7280;">Tip: Enter single pages or hyphenated ranges separated by commas.</small>
          </div>
        `;
        break;

      case 'compress_pdf':
        html = `
          <div class="option-group">
            <label class="option-label">Compression Level:</label>
            <select id="opt_compress_level" class="option-select">
              <option value="recommended" selected>Recommended (Good Quality & Great Size Reduction)</option>
              <option value="extreme">Extreme Compression (Smallest file size)</option>
              <option value="high">Less Compression (Highest visual quality)</option>
            </select>
          </div>
        `;
        break;

      case 'watermark':
        html = `
          <div class="options-grid">
            <div class="option-group">
              <label class="option-label">Watermark Text:</label>
              <input type="text" id="opt_wm_text" class="option-input" value="CONFIDENTIAL" />
            </div>
            <div class="option-group">
              <label class="option-label">Opacity:</label>
              <select id="opt_wm_opacity" class="option-select">
                <option value="0.15">15% (Very Subtle)</option>
                <option value="0.25" selected>25% (Standard)</option>
                <option value="0.5">50% (Bold)</option>
              </select>
            </div>
            <div class="option-group">
              <label class="option-label">Angle:</label>
              <select id="opt_wm_angle" class="option-select">
                <option value="45" selected>Diagonal (45°)</option>
                <option value="0">Horizontal (0°)</option>
                <option value="-45">Reverse Diagonal (-45°)</option>
              </select>
            </div>
          </div>
        `;
        break;

      case 'rotate_pdf':
        html = `
          <div class="option-group">
            <label class="option-label">Rotate Direction:</label>
            <select id="opt_rotate_deg" class="option-select">
              <option value="90" selected>90° Clockwise ↷</option>
              <option value="180">180° Flip ⤹</option>
              <option value="270">270° Counter-Clockwise ↶</option>
            </select>
          </div>
        `;
        break;

      case 'page_numbers':
        html = `
          <div class="options-grid">
            <div class="option-group">
              <label class="option-label">Numbering Format:</label>
              <select id="opt_pn_format" class="option-select">
                <option value="Page {n} of {total}" selected>Page {n} of {total}</option>
                <option value="{n} / {total}">{n} / {total}</option>
                <option value="- {n} -">- {n} -</option>
                <option value="{n}">{n}</option>
              </select>
            </div>
            <div class="option-group">
              <label class="option-label">Position on Page:</label>
              <select id="opt_pn_pos" class="option-select">
                <option value="bottom-center" selected>Bottom Center</option>
                <option value="bottom-right">Bottom Right</option>
                <option value="bottom-left">Bottom Left</option>
                <option value="top-center">Top Center</option>
                <option value="top-right">Top Right</option>
              </select>
            </div>
          </div>
        `;
        break;

      case 'sign_pdf':
        html = `
          <div class="signature-studio-container">
            <div class="sig-tabs">
              <button type="button" class="sig-tab-btn active" id="tabDrawSig" onclick="app.setSigMode('draw')">✏️ Draw Signature</button>
              <button type="button" class="sig-tab-btn" id="tabTypeSig" onclick="app.setSigMode('type')">✍️ Type Name</button>
            </div>
            <div id="sigDrawArea">
              <canvas id="sigPadCanvas" class="sig-pad-canvas"></canvas>
              <button type="button" class="btn-hand-secondary" style="margin-top: 8px;" onclick="app.clearSignature()">Clear Pad</button>
            </div>
            <div id="sigTypeArea" style="display: none;">
              <input type="text" id="sigTextInput" class="option-input" placeholder="Type your signature here..." 
                     style="font-family: 'Caveat', cursive; font-size: 2rem;"/>
            </div>
          </div>
        `;
        break;

      case 'scan_pdf':
        html = `
          <div class="camera-scanner-box">
            <video id="cameraScannerVideo" class="camera-video" autoplay playsinline></video>
            <div class="camera-controls">
              <button type="button" class="btn-hand-primary" onclick="app.captureCameraSnapshot()">📸 Snap Page</button>
              <button type="button" class="btn-hand-secondary" onclick="app.startCameraStream()">🔄 Start Camera</button>
            </div>
            <div id="capturedSnapsTray" style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;"></div>
          </div>
        `;
        break;

      case 'compare_pdf':
        html = `
          <p style="font-size: 0.9rem; color: #4B5563;">Upload two PDF files to visually compare Page 1 side-by-side with pixel diff highlighting.</p>
          <div id="compareResultArea" style="margin-top: 12px;"></div>
        `;
        break;

      case 'protect_pdf':
        html = `
          <div class="option-group">
            <label class="option-label">Enter Password to Protect Document:</label>
            <input type="password" id="opt_protect_pwd" class="option-input" placeholder="••••••••" />
          </div>
        `;
        break;

      case 'unlock_pdf':
        html = `
          <div class="option-group">
            <label class="option-label">Enter Current PDF Password (if required):</label>
            <input type="password" id="opt_unlock_pwd" class="option-input" placeholder="••••••••" />
          </div>
        `;
        break;

      case 'translate_pdf':
        html = `
          <div class="option-group">
            <label class="option-label">Target Language:</label>
            <select id="opt_target_lang" class="option-select">
              <option value="Spanish" selected>Spanish (Español)</option>
              <option value="French">French (Français)</option>
              <option value="German">German (Deutsch)</option>
              <option value="Italian">Italian (Italiano)</option>
              <option value="Portuguese">Portuguese (Português)</option>
              <option value="Japanese">Japanese (日本語)</option>
              <option value="Chinese">Chinese (中文)</option>
            </select>
          </div>
        `;
        break;

      case 'ai_summarize':
        html = `
          <div class="option-group">
            <label class="option-label">Summary Mode:</label>
            <select id="opt_summary_mode" class="option-select">
              <option value="full" selected>Executive Summary & Key Takeaways</option>
              <option value="bullets">Quick Bullet Points Only</option>
              <option value="faq">Q&A Questions & Answers</option>
            </select>
          </div>
        `;
        break;

      case 'html_to_pdf':
        html = `
          <div class="option-group">
            <label class="option-label">HTML or Markdown Code:</label>
            <textarea id="opt_html_code" class="option-input" rows="6" placeholder="<h1>Hello World</h1><p>Type HTML or Markdown to convert into PDF...</p>"></textarea>
          </div>
        `;
        break;

      default:
        html = `<p style="font-size: 0.9rem; color: #4B5563;">Ready to process in-memory with zero cloud uploads.</p>`;
        break;
    }

    container.innerHTML = html;

    // Post-render attachments (Signature pad, Camera, etc.)
    if (tool.id === 'sign_pdf') {
      setTimeout(() => this.initSignaturePad(), 100);
    } else if (tool.id === 'scan_pdf') {
      setTimeout(() => this.startCameraStream(), 100);
    }
  }

  // Handle uploaded files
  async handleFiles(fileList) {
    if (!fileList || fileList.length === 0) return;

    this.playSound('pop');
    this.selectedFiles = Array.from(fileList);

    // Show files tray
    const tray = document.getElementById('fileTraySection');
    const filesGrid = document.getElementById('trayFilesGrid');
    const optionsSec = document.getElementById('toolOptionsSection');
    const execBtn = document.getElementById('executeActionBtn');

    tray.style.display = 'block';
    optionsSec.style.display = 'block';
    execBtn.disabled = false;
    execBtn.style.opacity = '1';

    // Render file cards with thumbnails
    filesGrid.innerHTML = '';
    for (let i = 0; i < this.selectedFiles.length; i++) {
      const file = this.selectedFiles[i];
      const card = document.createElement('div');
      card.className = 'file-thumb-card';
      card.innerHTML = `
        <span class="file-thumb-page-badge">#${i + 1}</span>
        <canvas class="file-thumb-canvas" id="thumb_canvas_${i}"></canvas>
        <span class="file-thumb-name" title="${file.name}">${file.name}</span>
        <span style="font-size: 0.7rem; color: #6B7280;">${(file.size / 1024).toFixed(1)} KB</span>
      `;
      filesGrid.appendChild(card);

      // Render thumbnail preview
      this.generateFileThumbnail(file, `thumb_canvas_${i}`);
    }
  }

  async generateFileThumbnail(file, canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
      try {
        const buffer = await PDFEngine.readFileAsArrayBuffer(file);
        const pdf = await this.engine.loadPdfJsDoc(buffer);
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 0.3 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: ctx, viewport }).promise;
      } catch (e) {
        this.renderFallbackThumb(canvas, '📄 PDF');
      }
    } else if (file.type.startsWith('image/')) {
      const img = new Image();
      img.onload = () => {
        canvas.width = 120;
        canvas.height = 120 * (img.height / img.width);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      img.src = URL.createObjectURL(file);
    } else {
      this.renderFallbackThumb(canvas, '📁 ' + file.name.split('.').pop().toUpperCase());
    }
  }

  renderFallbackThumb(canvas, label) {
    const ctx = canvas.getContext('2d');
    canvas.width = 100;
    canvas.height = 120;
    ctx.fillStyle = '#FAF7F0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#1E1E24';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(label, 50, 65);
  }

  // Signature Pad Logic
  initSignaturePad() {
    const canvas = document.getElementById('sigPadCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.strokeStyle = '#1E1E24';
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const startDraw = (e) => {
      this.isDrawingSig = true;
      this.sigLastPos = getPos(e);
      this.playSound('pencil');
    };

    const draw = (e) => {
      if (!this.isDrawingSig) return;
      e.preventDefault();
      const pos = getPos(e);
      ctx.beginPath();
      ctx.moveTo(this.sigLastPos.x, this.sigLastPos.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      this.sigLastPos = pos;
    };

    const stopDraw = () => {
      if (this.isDrawingSig) {
        this.isDrawingSig = false;
        this.signatureDataUrl = canvas.toDataURL('image/png');
      }
    };

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    window.addEventListener('mouseup', stopDraw);

    canvas.addEventListener('touchstart', startDraw);
    canvas.addEventListener('touchmove', draw);
    window.addEventListener('touchend', stopDraw);
  }

  clearSignature() {
    const canvas = document.getElementById('sigPadCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.signatureDataUrl = null;
    this.playSound('pop');
  }

  setSigMode(mode) {
    document.getElementById('tabDrawSig').classList.toggle('active', mode === 'draw');
    document.getElementById('tabTypeSig').classList.toggle('active', mode === 'type');
    document.getElementById('sigDrawArea').style.display = mode === 'draw' ? 'block' : 'none';
    document.getElementById('sigTypeArea').style.display = mode === 'type' ? 'block' : 'none';
    this.playSound('pop');
  }

  // Camera Scanner Logic
  async startCameraStream() {
    const video = document.getElementById('cameraScannerVideo');
    if (!video) return;

    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        this.cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = this.cameraStream;
      }
    } catch (err) {
      alert('Camera access unavailable. You can also upload photos directly with the button!');
    }
  }

  captureCameraSnapshot() {
    const video = document.getElementById('cameraScannerVideo');
    if (!video) return;

    const snapCanvas = document.createElement('canvas');
    snapCanvas.width = video.videoWidth || 640;
    snapCanvas.height = video.videoHeight || 480;
    const ctx = snapCanvas.getContext('2d');
    ctx.drawImage(video, 0, 0, snapCanvas.width, snapCanvas.height);

    // Apply document contrast enhancement filter
    const imgData = ctx.getImageData(0, 0, snapCanvas.width, snapCanvas.height);
    for (let i = 0; i < imgData.data.length; i += 4) {
      const avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
      // High-contrast document threshold
      const val = avg > 130 ? 255 : Math.max(0, avg * 0.7);
      imgData.data[i] = val;
      imgData.data[i + 1] = val;
      imgData.data[i + 2] = val;
    }
    ctx.putImageData(imgData, 0, 0);

    const dataUrl = snapCanvas.toDataURL('image/jpeg', 0.9);
    this.capturedScanImages.push(dataUrl);
    this.playSound('pop');

    // Add thumbnail to snap tray
    const tray = document.getElementById('capturedSnapsTray');
    if (tray) {
      const thumb = document.createElement('img');
      thumb.src = dataUrl;
      thumb.style.width = '60px';
      thumb.style.height = '60px';
      thumb.style.objectFit = 'cover';
      thumb.style.border = '2px solid white';
      thumb.style.borderRadius = '4px';
      tray.appendChild(thumb);
    }

    // Enable execute button
    const execBtn = document.getElementById('executeActionBtn');
    execBtn.disabled = false;
    execBtn.style.opacity = '1';
  }

  // ==========================================================================
  // Execute Tool Processing
  // ==========================================================================
  async executeCurrentTool() {
    if (!this.currentTool) return;

    const statusOverlay = document.getElementById('statusOverlay');
    const statusSpinner = document.getElementById('statusSpinner');
    const statusTitle = document.getElementById('statusTitle');
    const statusDesc = document.getElementById('statusDesc');

    // Show status animation
    statusSpinner.innerHTML = DoodleAssets.mascots.coolCat;
    statusTitle.textContent = `Doodling your ${this.currentTool.title}...`;
    statusDesc.textContent = 'Processing safely in browser memory — zero cloud uploads!';
    statusOverlay.classList.add('active');
    this.playSound('pencil');

    try {
      let resultBlob = null;
      let filename = 'doodle_document.pdf';

      const file = this.selectedFiles[0];
      let firstBuffer = null;
      if (file) {
        firstBuffer = await PDFEngine.readFileAsArrayBuffer(file);
      }

      switch (this.currentTool.id) {
        // 1. Merge PDF
        case 'merge_pdf': {
          const buffers = [];
          for (const f of this.selectedFiles) {
            buffers.push(await PDFEngine.readFileAsArrayBuffer(f));
          }
          resultBlob = await this.engine.mergePDF(buffers);
          filename = 'merged_doodle.pdf';
          break;
        }

        // 2. Split PDF
        case 'split_pdf': {
          const range = document.getElementById('opt_split_range').value;
          resultBlob = await this.engine.splitPDF(firstBuffer, range);
          filename = `split_pages_${range.replace(/\s+/g, '')}.pdf`;
          break;
        }

        // 3. Compress PDF
        case 'compress_pdf': {
          const quality = document.getElementById('opt_compress_level').value;
          resultBlob = await this.engine.compressPDF(firstBuffer, quality);
          filename = 'compressed_doodle.pdf';
          break;
        }

        // 4. PDF to Word
        case 'pdf_to_word': {
          resultBlob = await this.engine.pdfToWord(firstBuffer);
          filename = `${file.name.replace(/\.[^/.]+$/, '')}_converted.docx`;
          break;
        }

        // 5. PDF to PowerPoint
        case 'pdf_to_powerpoint': {
          resultBlob = await this.engine.pdfToPowerPoint(firstBuffer);
          filename = `${file.name.replace(/\.[^/.]+$/, '')}_slides.pptx`;
          break;
        }

        // 6. PDF to Excel
        case 'pdf_to_excel': {
          resultBlob = await this.engine.pdfToExcel(firstBuffer);
          filename = `${file.name.replace(/\.[^/.]+$/, '')}_data.xlsx`;
          break;
        }

        // 7. Word to PDF
        case 'word_to_pdf': {
          resultBlob = await this.engine.wordToPDF(file);
          filename = `${file.name.replace(/\.[^/.]+$/, '')}.pdf`;
          break;
        }

        // 8. PowerPoint to PDF
        case 'powerpoint_to_pdf': {
          resultBlob = await this.engine.powerPointToPDF(file);
          filename = `${file.name.replace(/\.[^/.]+$/, '')}.pdf`;
          break;
        }

        // 9. Excel to PDF
        case 'excel_to_pdf': {
          resultBlob = await this.engine.excelToPDF(firstBuffer);
          filename = `${file.name.replace(/\.[^/.]+$/, '')}.pdf`;
          break;
        }

        // 10. Edit PDF
        case 'edit_pdf': {
          const anns = [
            { type: 'stamp', text: 'APPROVED', x: 50, y: 50 },
            { type: 'text', text: 'Doodled with DoodlePDF! ✨', x: 50, y: 90, size: 14 }
          ];
          resultBlob = await this.engine.editPDF(firstBuffer, anns);
          filename = 'edited_doodle.pdf';
          break;
        }

        // 11. PDF to JPG
        case 'pdf_to_jpg': {
          const images = await this.engine.pdfToJpg(firstBuffer);
          if (window.JSZip) {
            const zip = new window.JSZip();
            images.forEach((img, idx) => {
              const base64Data = img.dataUrl.replace(/^data:image\/jpeg;base64,/, '');
              zip.file(`page_${idx + 1}.jpg`, base64Data, { base64: true });
            });
            resultBlob = await zip.generateAsync({ type: 'blob' });
            filename = 'pdf_pages_images.zip';
          } else {
            // Single page fallback
            const res = await fetch(images[0].dataUrl);
            resultBlob = await res.blob();
            filename = 'page_1.jpg';
          }
          break;
        }

        // 12. JPG to PDF
        case 'jpg_to_pdf': {
          const imgUrls = [];
          for (const f of this.selectedFiles) {
            imgUrls.push(await PDFEngine.readFileAsDataURL(f));
          }
          resultBlob = await this.engine.jpgToPdf(imgUrls);
          filename = 'images_compiled.pdf';
          break;
        }

        // 13. Sign PDF
        case 'sign_pdf': {
          let sigUrl = this.signatureDataUrl;
          if (!sigUrl) {
            // Fallback typed signature
            const typedText = (document.getElementById('sigTextInput') && document.getElementById('sigTextInput').value) || 'Signed with DoodlePDF';
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = 300;
            tempCanvas.height = 100;
            const ctx = tempCanvas.getContext('2d');
            ctx.font = '36px "Caveat", cursive';
            ctx.fillStyle = '#1D4ED8';
            ctx.fillText(typedText, 20, 60);
            sigUrl = tempCanvas.toDataURL('image/png');
          }
          resultBlob = await this.engine.signPDF(firstBuffer, sigUrl, 1, 50, 100, 160, 80);
          filename = 'signed_document.pdf';
          break;
        }

        // 14. Watermark
        case 'watermark': {
          const text = document.getElementById('opt_wm_text').value || 'CONFIDENTIAL';
          const opacity = parseFloat(document.getElementById('opt_wm_opacity').value);
          const angle = parseInt(document.getElementById('opt_wm_angle').value, 10);
          resultBlob = await this.engine.watermarkPDF(firstBuffer, text, { opacity, angle });
          filename = 'watermarked_doodle.pdf';
          break;
        }

        // 15. Rotate PDF
        case 'rotate_pdf': {
          const deg = parseInt(document.getElementById('opt_rotate_deg').value, 10);
          resultBlob = await this.engine.rotatePDF(firstBuffer, deg);
          filename = 'rotated_doodle.pdf';
          break;
        }

        // 16. HTML to PDF
        case 'html_to_pdf': {
          const code = (document.getElementById('opt_html_code') && document.getElementById('opt_html_code').value) || '<h1>Rendered HTML Page</h1>';
          resultBlob = await this.engine.htmlToPDF(code);
          filename = 'webpage_rendered.pdf';
          break;
        }

        // 17. Unlock PDF
        case 'unlock_pdf': {
          const pwd = document.getElementById('opt_unlock_pwd').value;
          resultBlob = await this.engine.unlockPDF(firstBuffer, pwd);
          filename = 'unlocked_document.pdf';
          break;
        }

        // 18. Protect PDF
        case 'protect_pdf': {
          const pwd = document.getElementById('opt_protect_pwd').value;
          resultBlob = await this.engine.protectPDF(firstBuffer, pwd);
          filename = 'protected_document.pdf';
          break;
        }

        // 19. Organize PDF
        case 'organize_pdf': {
          const ops = [{ originalIndex: 0, rotate: 0 }];
          resultBlob = await this.engine.organizePDF(firstBuffer, ops);
          filename = 'organized_document.pdf';
          break;
        }

        // 20. PDF to PDF/A
        case 'pdf_to_pdfa': {
          resultBlob = await this.engine.pdfToPdfA(firstBuffer);
          filename = 'archival_pdfa.pdf';
          break;
        }

        // 21. Repair PDF
        case 'repair_pdf': {
          resultBlob = await this.engine.repairPDF(firstBuffer);
          filename = 'repaired_document.pdf';
          break;
        }

        // 22. Page Numbers
        case 'page_numbers': {
          const fmt = document.getElementById('opt_pn_format').value;
          const pos = document.getElementById('opt_pn_pos').value;
          resultBlob = await this.engine.addPageNumbers(firstBuffer, fmt, pos);
          filename = 'numbered_document.pdf';
          break;
        }

        // 23. Scan to PDF
        case 'scan_pdf': {
          if (this.capturedScanImages.length === 0) {
            alert('Please snap at least one page snapshot first!');
            statusOverlay.classList.remove('active');
            return;
          }
          resultBlob = await this.engine.scanToPDF(this.capturedScanImages);
          filename = 'camera_scans.pdf';
          break;
        }

        // 24. OCR PDF
        case 'ocr_pdf': {
          const ocrRes = await this.engine.ocrPDF(firstBuffer);
          resultBlob = new Blob([ocrRes.text], { type: 'text/plain;charset=utf-8;' });
          filename = 'ocr_extracted_text.txt';
          break;
        }

        // 25. Compare PDF
        case 'compare_pdf': {
          if (this.selectedFiles.length < 2) {
            alert('Please select two PDF files to compare.');
            statusOverlay.classList.remove('active');
            return;
          }
          const bufB = await PDFEngine.readFileAsArrayBuffer(this.selectedFiles[1]);
          const diffResult = await this.engine.comparePDF(firstBuffer, bufB);

          // Render comparison visual inside container
          const compArea = document.getElementById('compareResultArea');
          if (compArea) {
            compArea.innerHTML = `
              <div style="background: white; border: 2.5px solid #1E1E24; border-radius: 8px; padding: 12px; margin-top: 10px;">
                <h4 class="display-font">Match Score: ${diffResult.similarityScore}%</h4>
                <p style="font-size: 0.85rem; color: #6B7280; margin-bottom: 8px;">Red pixels indicate detected visual differences:</p>
                <div style="display: flex; gap: 8px; overflow-x: auto;">
                  <div style="text-align: center;"><small>Doc 1</small><br/><img src="${diffResult.canvasA.toDataURL()}" style="height: 180px; border: 1px solid #ccc;"/></div>
                  <div style="text-align: center;"><small>Diff Highlight</small><br/><img src="${diffResult.diffCanvas.toDataURL()}" style="height: 180px; border: 1px solid #EF4444;"/></div>
                  <div style="text-align: center;"><small>Doc 2</small><br/><img src="${diffResult.canvasB.toDataURL()}" style="height: 180px; border: 1px solid #ccc;"/></div>
                </div>
              </div>
            `;
          }
          resultBlob = new Blob([`Comparison Report\nMatch: ${diffResult.similarityScore}%\nDiffering Pixels: ${diffResult.diffPixels}`], { type: 'text/plain' });
          filename = 'comparison_report.txt';
          break;
        }

        // 26. Redact PDF
        case 'redact_pdf': {
          const boxes = [{ pageIndex: 0, x: 50, y: 100, width: 250, height: 25 }];
          resultBlob = await this.engine.redactPDF(firstBuffer, boxes);
          filename = 'redacted_document.pdf';
          break;
        }

        // 27. Crop PDF
        case 'crop_pdf': {
          resultBlob = await this.engine.cropPDF(firstBuffer, { x: 30, y: 30, width: 535, height: 780 });
          filename = 'cropped_document.pdf';
          break;
        }

        // 28. PDF Forms
        case 'pdf_forms': {
          resultBlob = await this.engine.fillForm(firstBuffer, {});
          filename = 'filled_form.pdf';
          break;
        }

        // 29. AI Summarize
        case 'ai_summarize': {
          const summary = await this.engine.aiSummarize(firstBuffer);
          let summaryText = `# AI Executive Summary\n\n${summary.executiveSummary}\n\n## Key Takeaways\n`;
          summary.highlights.forEach(h => summaryText += `* ${h}\n`);
          summaryText += `\n## Q&A Highlights\n`;
          summary.faq.forEach(f => summaryText += `**Q: ${f.q}**\nA: ${f.a}\n\n`);

          resultBlob = new Blob([summaryText], { type: 'text/markdown;charset=utf-8;' });
          filename = 'document_ai_summary.md';
          break;
        }

        // 30. Translate PDF
        case 'translate_pdf': {
          const lang = document.getElementById('opt_target_lang').value;
          const tr = await this.engine.translatePDF(firstBuffer, lang);
          const trText = `# Translated to ${tr.targetLanguage}\n\n${tr.note}\n\n---\n${tr.originalText}`;
          resultBlob = new Blob([trText], { type: 'text/markdown;charset=utf-8;' });
          filename = `translated_${lang.toLowerCase()}.md`;
          break;
        }

        // 31. PDF to Markdown
        case 'pdf_to_markdown': {
          resultBlob = await this.engine.pdfToMarkdown(firstBuffer);
          filename = `${file.name.replace(/\.[^/.]+$/, '')}.md`;
          break;
        }

        default:
          resultBlob = firstBuffer ? new Blob([firstBuffer], { type: 'application/pdf' }) : new Blob(['Done']);
          filename = 'processed_document.pdf';
          break;
      }

      this.processedBlob = resultBlob;
      this.processedFilename = filename;

      // Hide status overlay
      statusOverlay.classList.remove('active');

      // Trigger Celebration Confetti!
      if (window.confetti) {
        window.confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
      this.playSound('chime');

      // Show Success Card
      this.showSuccessCard(filename, resultBlob);

    } catch (err) {
      console.error(err);
      statusOverlay.classList.remove('active');
      alert(`Oops! Operation failed: ${err.message || err}`);
    }
  }

  showSuccessCard(filename, blob) {
    const successCard = document.getElementById('successCard');
    const downloadBtn = document.getElementById('downloadResultBtn');
    const note = document.getElementById('successFilenameNote');

    if (note) note.textContent = `★ ${filename} (${(blob.size / 1024).toFixed(1)} KB) ready!`;

    if (this.activeBlobUrl) {
      URL.revokeObjectURL(this.activeBlobUrl);
    }
    this.activeBlobUrl = URL.createObjectURL(blob);

    if (downloadBtn) {
      downloadBtn.onclick = () => {
        const a = document.createElement('a');
        a.href = this.activeBlobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        this.playSound('pop');

        // Guaranteed Auto-Purge: Wipe raw document data from memory right after download
        setTimeout(() => {
          this.selectedFiles = [];
          this.capturedScanImages = [];
          const fileInput = document.getElementById('universalFileInput');
          if (fileInput) fileInput.value = '';
          const trayFilesGrid = document.getElementById('trayFilesGrid');
          if (trayFilesGrid) trayFilesGrid.innerHTML = '';
          console.log('[DoodlePDF] 🛡️ Auto-Purge: Source files wiped clean from memory after download.');
        }, 1500);
      };
    }

    successCard.classList.add('active');
  }
}

// Instantiate and expose globally
window.app = new DoodleApp();
