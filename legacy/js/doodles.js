/**
 * DoodlePDF - Hand-Drawn SVG Asset Library
 * Hand-drawn mascots, tool icons, paper clips, tape banners, and scribbles.
 * Inspired by retro inky cartoons, cut-outs, and collage aesthetics.
 */

const DoodleAssets = {
  // Mascots from Screenshot 1 & 3
  mascots: {
    coolCat: `
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="doodle-svg mascot-cat">
        <!-- Cat Body -->
        <path d="M42 142 C38 105 32 75 42 45 C44 38 48 30 54 28 C59 26 65 35 70 42 C85 36 100 37 114 43 C120 34 126 26 132 29 C138 32 136 44 137 54 C145 80 142 110 138 142 Z" 
              fill="#FFFFFF" stroke="#1E1E24" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Inner Ears -->
        <path d="M52 35 L62 43" stroke="#1E1E24" stroke-width="3" stroke-linecap="round"/>
        <path d="M130 36 L120 44" stroke="#1E1E24" stroke-width="3" stroke-linecap="round"/>
        <!-- Sunglasses (Cool Guy Style) -->
        <path d="M48 68 C50 63 60 63 68 64 C76 65 80 72 78 78 C76 84 66 86 56 84 C48 82 46 73 48 68 Z" fill="#1E1E24"/>
        <path d="M98 67 C100 62 110 62 118 63 C126 64 130 71 128 77 C126 83 116 85 106 83 C98 81 96 72 98 67 Z" fill="#1E1E24"/>
        <path d="M78 70 L98 69" stroke="#1E1E24" stroke-width="4.5" stroke-linecap="round"/>
        <!-- White lens glare reflection -->
        <path d="M52 70 L60 74" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M102 69 L110 73" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Nose & Smug Mouth -->
        <path d="M88 88 L90 89" stroke="#1E1E24" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M82 95 C86 98 90 98 92 95 C94 98 98 98 102 95" stroke="#1E1E24" stroke-width="3.5" stroke-linecap="round"/>
        <!-- Whiskers -->
        <path d="M36 78 Q22 75 14 77" stroke="#1E1E24" stroke-width="3" stroke-linecap="round"/>
        <path d="M34 88 Q20 89 12 94" stroke="#1E1E24" stroke-width="3" stroke-linecap="round"/>
        <path d="M140 76 Q150 74 158 75" stroke="#1E1E24" stroke-width="3" stroke-linecap="round"/>
        <path d="M141 86 Q152 87 160 92" stroke="#1E1E24" stroke-width="3" stroke-linecap="round"/>
        <!-- Chest Fur / Details -->
        <path d="M89 108 L89 122" stroke="#1E1E24" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M62 130 C64 122 70 122 72 130" stroke="#1E1E24" stroke-width="3.5" stroke-linecap="round"/>
        <!-- Belly Stitch Cross -->
        <path d="M58 112 L66 120 M66 112 L58 120" stroke="#1E1E24" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,

    penleyPencil: `
      <svg viewBox="0 0 140 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="doodle-svg mascot-pencil">
        <g transform="rotate(14 70 80)">
          <!-- Eraser -->
          <path d="M48 24 C48 16 92 16 92 24 L92 38 L48 38 Z" fill="#FED7E2" stroke="#1E1E24" stroke-width="4.5" stroke-linejoin="round"/>
          <!-- Ferrule Metal Band -->
          <rect x="48" y="38" width="44" height="14" fill="#E2E8F0" stroke="#1E1E24" stroke-width="4.5"/>
          <line x1="48" y1="45" x2="92" y2="45" stroke="#1E1E24" stroke-width="2.5"/>
          <!-- Wooden Hexagonal Shaft -->
          <rect x="48" y="52" width="44" height="66" fill="#FEF08A" stroke="#1E1E24" stroke-width="4.5"/>
          <line x1="62" y1="52" x2="62" y2="118" stroke="#1E1E24" stroke-width="2.5"/>
          <line x1="78" y1="52" x2="78" y2="118" stroke="#1E1E24" stroke-width="2.5"/>
          <!-- Sharpened Tip -->
          <path d="M48 118 L70 152 L92 118 Z" fill="#FDE047" stroke="#1E1E24" stroke-width="4.5" stroke-linejoin="round"/>
          <!-- Graphite Lead Point -->
          <path d="M63 141 L70 152 L77 141 Z" fill="#1E1E24"/>
          <!-- Cool Sunglasses on Pencil! -->
          <rect x="52" y="70" width="16" height="12" rx="3" fill="#1E1E24"/>
          <rect x="72" y="70" width="16" height="12" rx="3" fill="#1E1E24"/>
          <line x1="68" y1="74" x2="72" y2="74" stroke="#1E1E24" stroke-width="3"/>
          <!-- Smug Smile -->
          <path d="M64 92 Q70 96 76 92" stroke="#1E1E24" stroke-width="3.5" stroke-linecap="round"/>
        </g>
        <path d="M96 150 Q115 155 125 145 T138 152" stroke="#1E1E24" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      </svg>
    `,

    coffeeMug: `
      <svg viewBox="0 0 160 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="doodle-svg mascot-mug">
        <!-- Steam swirls -->
        <path d="M60 22 C62 14 58 8 62 2" stroke="#1E1E24" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M85 24 C88 16 84 8 88 4" stroke="#1E1E24" stroke-width="3.5" stroke-linecap="round"/>
        <!-- Mug Handle -->
        <path d="M118 52 C142 52 144 95 118 98" stroke="#1E1E24" stroke-width="5" stroke-linecap="round" fill="none"/>
        <!-- Mug Body -->
        <path d="M42 42 H120 C120 42 120 120 81 120 C42 120 42 42 42 42 Z" fill="#FFFFFF" stroke="#1E1E24" stroke-width="5" stroke-linejoin="round"/>
        <!-- Coffee Top Surface -->
        <ellipse cx="81" cy="45" rx="36" ry="7" fill="#3E2723" stroke="#1E1E24" stroke-width="3.5"/>
        <!-- Eyebrows & Droopy Sleepy Eyes -->
        <path d="M58 64 Q66 61 72 65" stroke="#1E1E24" stroke-width="3" stroke-linecap="round"/>
        <path d="M88 65 Q94 61 102 64" stroke="#1E1E24" stroke-width="3" stroke-linecap="round"/>
        <path d="M60 74 C60 68 72 68 72 74 C72 82 60 82 60 74 Z" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3"/>
        <ellipse cx="67" cy="74" rx="4" ry="5" fill="#1E1E24"/>
        <path d="M90 74 C90 68 102 68 102 74 C102 82 90 82 90 74 Z" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3"/>
        <ellipse cx="95" cy="74" rx="4" ry="5" fill="#1E1E24"/>
        <!-- Quizzical Little Mouth -->
        <path d="M78 90 Q81 93 84 90" stroke="#1E1E24" stroke-width="3.5" stroke-linecap="round"/>
      </svg>
    `,

    retroMonitor: `
      <svg viewBox="0 0 160 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="doodle-svg mascot-monitor">
        <!-- CRT Monitor Shell -->
        <path d="M28 32 C28 26 128 24 130 32 L138 102 C138 108 22 108 20 102 Z" fill="#F1F5F9" stroke="#1E1E24" stroke-width="5" stroke-linejoin="round"/>
        <path d="M128 32 L148 44 L152 92 L138 102" fill="#CBD5E1" stroke="#1E1E24" stroke-width="4.5" stroke-linejoin="round"/>
        <!-- Screen Bezel -->
        <rect x="36" y="38" width="86" height="56" rx="8" fill="#FFFFFF" stroke="#1E1E24" stroke-width="4"/>
        <!-- Sleepy cartoon face on screen -->
        <path d="M52 58 C52 52 64 52 64 58 C64 66 52 66 52 58 Z" fill="#1E1E24"/>
        <path d="M88 58 C88 52 100 52 100 58 C100 66 88 66 88 58 Z" fill="#1E1E24"/>
        <path d="M52 54 L66 57" stroke="#FFFFFF" stroke-width="2.5"/>
        <path d="M88 54 L102 57" stroke="#FFFFFF" stroke-width="2.5"/>
        <!-- Smile -->
        <path d="M72 74 Q77 78 82 74" stroke="#1E1E24" stroke-width="3.5" stroke-linecap="round"/>
        <!-- Monitor Stand -->
        <path d="M66 108 L62 120 H98 L94 108" fill="#E2E8F0" stroke="#1E1E24" stroke-width="4.5" stroke-linejoin="round"/>
        <path d="M46 120 H114 C118 120 118 126 114 126 H46 C42 126 42 120 46 120 Z" fill="#CBD5E1" stroke="#1E1E24" stroke-width="4.5"/>
      </svg>
    `,

    fluffyDog: `
      <svg viewBox="0 0 160 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="doodle-svg mascot-dog">
        <path d="M30 110 C15 90 20 60 40 55 C35 30 70 20 90 35 C115 18 145 40 135 70 C150 95 130 125 105 125 C85 135 45 130 30 110 Z" 
              fill="#FFFFFF" stroke="#1E1E24" stroke-width="5" stroke-linejoin="round"/>
        <path d="M52 62 C54 56 68 56 74 62 C74 72 52 72 52 62 Z" fill="#1E1E24"/>
        <path d="M88 62 C90 56 104 56 110 62 C110 72 88 72 88 62 Z" fill="#1E1E24"/>
        <line x1="74" y1="64" x2="88" y2="64" stroke="#1E1E24" stroke-width="4.5"/>
        <ellipse cx="81" cy="82" rx="6" ry="4" fill="#1E1E24"/>
        <path d="M81 86 L81 92 M76 92 Q81 96 86 92" stroke="#1E1E24" stroke-width="3.5" stroke-linecap="round"/>
      </svg>
    `
  },

  // Paper clips from Screenshot 4
  paperClips: {
    redClip: `
      <svg viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="doodle-paperclip paperclip-red">
        <path d="M18 92 L18 26 C18 14 32 14 32 26 L32 78 C32 86 24 86 24 78 L24 34" 
              stroke="#E11D48" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M19 92 L19 26 C19 15 31 15 31 26 L31 78 C31 85 25 85 25 78 L25 34" 
              stroke="#FDA4AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>
    `,

    brassClip: `
      <svg viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="doodle-paperclip paperclip-brass">
        <path d="M18 92 L18 26 C18 14 32 14 32 26 L32 78 C32 86 24 86 24 78 L24 34" 
              stroke="#D97706" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M19 92 L19 26 C19 15 31 15 31 26 L31 78 C31 85 25 85 25 78 L25 34" 
              stroke="#FDE68A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>
    `
  },

  decorations: {
    blueArrowDown: `
      <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="doodle-arrow-down">
        <path d="M38 12 C36 38 42 62 36 82" stroke="#2563EB" stroke-width="4" stroke-linecap="round"/>
        <path d="M22 68 C28 75 36 82 36 82 C38 78 48 70 56 65" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,

    blueScribble: `
      <svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg" class="doodle-scribble">
        <path d="M12 36 C35 15 8 58 48 32 C78 12 40 60 72 38 C92 22 75 55 92 42" 
              stroke="#2563EB" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      </svg>
    `,

    sparkleStar: `
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" class="doodle-star">
        <path d="M25 2 C25 15 15 25 2 25 C15 25 25 35 25 48 C25 35 35 25 48 25 C35 25 25 15 25 2 Z" 
              fill="#FDE047" stroke="#1E1E24" stroke-width="3"/>
      </svg>
    `,

    pinkFlower: `
      <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" class="doodle-flower">
        <path d="M35 10 C38 2 48 2 48 10 C56 5 62 14 56 20 C65 24 62 35 54 35 C62 40 58 50 48 46 C48 56 36 56 35 47 C28 55 18 48 22 40 C12 40 12 28 20 25 C14 18 22 8 28 15 C30 5 38 4 35 10 Z" 
              fill="#F472B6" stroke="#1E1E24" stroke-width="3.5"/>
        <circle cx="35" cy="28" r="7" fill="#FEF08A" stroke="#1E1E24" stroke-width="2.5"/>
      </svg>
    `
  },

  // Hand-Drawn Icons for all 31 Tools!
  toolIcons: {
    merge_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="8" y="14" width="26" height="36" rx="3" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3.5"/>
        <rect x="26" y="14" width="26" height="36" rx="3" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3.5"/>
        <circle cx="30" cy="32" r="12" fill="#FEF08A" stroke="#1E1E24" stroke-width="3"/>
        <line x1="30" y1="24" x2="30" y2="40" stroke="#1E1E24" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="22" y1="32" x2="38" y2="32" stroke="#1E1E24" stroke-width="3.5" stroke-linecap="round"/>
      </svg>
    `,

    split_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="14" y="10" width="36" height="44" rx="3" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3.5"/>
        <line x1="10" y1="32" x2="54" y2="32" stroke="#E11D48" stroke-width="3" stroke-dasharray="4 4"/>
        <circle cx="12" cy="24" r="5" fill="#FED7E2" stroke="#1E1E24" stroke-width="2.5"/>
        <circle cx="12" cy="40" r="5" fill="#FED7E2" stroke="#1E1E24" stroke-width="2.5"/>
        <line x1="16" y1="26" x2="26" y2="34" stroke="#1E1E24" stroke-width="3"/>
        <line x1="16" y1="38" x2="26" y2="30" stroke="#1E1E24" stroke-width="3"/>
      </svg>
    `,

    compress_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="14" y="12" width="36" height="40" rx="3" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3.5"/>
        <path d="M32 4 L32 20 M26 14 L32 20 L38 14" stroke="#2563EB" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M32 60 L32 44 M26 50 L32 44 L38 50" stroke="#2563EB" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="22" y1="28" x2="42" y2="28" stroke="#1E1E24" stroke-width="3" stroke-linecap="round"/>
        <line x1="22" y1="36" x2="36" y2="36" stroke="#1E1E24" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,

    pdf_to_word: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="10" y="10" width="30" height="42" rx="3" fill="#FEE2E2" stroke="#1E1E24" stroke-width="3"/>
        <rect x="24" y="14" width="30" height="42" rx="3" fill="#DBEAFE" stroke="#1E1E24" stroke-width="3"/>
        <path d="M31 26 L35 42 L40 32 L44 42 L48 26" stroke="#1D4ED8" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,

    pdf_to_powerpoint: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="10" y="12" width="44" height="34" rx="3" fill="#FED7AA" stroke="#1E1E24" stroke-width="3.5"/>
        <line x1="32" y1="46" x2="32" y2="56" stroke="#1E1E24" stroke-width="3.5"/>
        <line x1="22" y1="56" x2="42" y2="56" stroke="#1E1E24" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M26 36 V20 H34 C38 20 38 27 34 27 H26" stroke="#C2410C" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,

    pdf_to_excel: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="12" y="10" width="40" height="44" rx="3" fill="#D1FAE5" stroke="#1E1E24" stroke-width="3.5"/>
        <line x1="12" y1="24" x2="52" y2="24" stroke="#1E1E24" stroke-width="2.5"/>
        <line x1="12" y1="36" x2="52" y2="36" stroke="#1E1E24" stroke-width="2.5"/>
        <line x1="28" y1="10" x2="28" y2="54" stroke="#1E1E24" stroke-width="2.5"/>
        <circle cx="20" cy="18" r="6" fill="#059669"/>
        <path d="M17 15 L23 21 M23 15 L17 21" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `,

    word_to_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="10" y="10" width="30" height="42" rx="3" fill="#DBEAFE" stroke="#1E1E24" stroke-width="3"/>
        <rect x="24" y="14" width="30" height="42" rx="3" fill="#FEE2E2" stroke="#1E1E24" stroke-width="3"/>
        <text x="27" y="38" font-family="'Fredoka', sans-serif" font-size="11" font-weight="bold" fill="#DC2626">PDF</text>
      </svg>
    `,

    powerpoint_to_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="8" y="14" width="36" height="28" rx="3" fill="#FED7AA" stroke="#1E1E24" stroke-width="3"/>
        <path d="M38 28 L48 20 V48 L38 40 Z" fill="#FEE2E2" stroke="#1E1E24" stroke-width="3"/>
        <text x="14" y="32" font-family="'Fredoka', sans-serif" font-size="11" font-weight="bold" fill="#EA580C">PPT</text>
      </svg>
    `,

    excel_to_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="10" y="12" width="34" height="40" rx="3" fill="#D1FAE5" stroke="#1E1E24" stroke-width="3"/>
        <path d="M34 26 L50 20 V48 L34 42 Z" fill="#FEE2E2" stroke="#1E1E24" stroke-width="3"/>
        <text x="15" y="34" font-family="'Fredoka', sans-serif" font-size="10" font-weight="bold" fill="#059669">XLS</text>
      </svg>
    `,

    edit_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="10" y="10" width="38" height="44" rx="3" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3.5"/>
        <line x1="18" y1="22" x2="34" y2="22" stroke="#1E1E24" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="18" y1="30" x2="30" y2="30" stroke="#1E1E24" stroke-width="2.5" stroke-linecap="round"/>
        <g transform="rotate(-35 44 38)">
          <rect x="36" y="26" width="22" height="10" fill="#FEF08A" stroke="#1E1E24" stroke-width="2.5"/>
          <path d="M36 26 L28 31 L36 36 Z" fill="#FDE047" stroke="#1E1E24" stroke-width="2.5"/>
          <path d="M30 30 L28 31 L30 32 Z" fill="#1E1E24"/>
        </g>
      </svg>
    `,

    pdf_to_jpg: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="10" y="12" width="44" height="38" rx="4" fill="#FEF3C7" stroke="#1E1E24" stroke-width="3.5"/>
        <circle cx="22" cy="24" r="5" fill="#F59E0B" stroke="#1E1E24" stroke-width="2"/>
        <path d="M12 44 L26 30 L36 40 L44 34 L52 44 Z" fill="#34D399" stroke="#1E1E24" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>
    `,

    jpg_to_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="8" y="18" width="34" height="30" rx="3" fill="#FEF3C7" stroke="#1E1E24" stroke-width="3"/>
        <rect x="22" y="10" width="34" height="44" rx="3" fill="#FEE2E2" stroke="#1E1E24" stroke-width="3.5"/>
        <text x="27" y="36" font-family="'Fredoka', sans-serif" font-size="10" font-weight="bold" fill="#DC2626">PDF</text>
      </svg>
    `,

    sign_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="10" y="10" width="44" height="44" rx="3" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3.5"/>
        <line x1="16" y1="44" x2="48" y2="44" stroke="#1E1E24" stroke-width="2" stroke-linecap="round"/>
        <path d="M18 38 Q24 24 30 32 T42 30 T50 36" stroke="#2563EB" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <circle cx="48" cy="44" r="3" fill="#E11D48"/>
      </svg>
    `,

    watermark: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="12" y="8" width="40" height="48" rx="3" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3.5"/>
        <line x1="20" y1="18" x2="38" y2="18" stroke="#E2E8F0" stroke-width="2.5"/>
        <line x1="20" y1="24" x2="44" y2="24" stroke="#E2E8F0" stroke-width="2.5"/>
        <g transform="rotate(-30 32 32)">
          <rect x="14" y="26" width="36" height="14" rx="2" fill="none" stroke="#E11D48" stroke-width="2.5" stroke-dasharray="3 3"/>
          <text x="17" y="37" font-family="'Caveat', cursive" font-size="12" font-weight="bold" fill="#E11D48">DRAFT</text>
        </g>
      </svg>
    `,

    rotate_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="18" y="14" width="28" height="36" rx="3" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3.5"/>
        <path d="M46 16 C54 22 56 36 50 46 C44 54 30 56 20 52" stroke="#8B5CF6" stroke-width="3.5" stroke-linecap="round" fill="none"/>
        <path d="M22 45 L18 53 L27 57" stroke="#8B5CF6" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,

    html_to_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="10" y="10" width="44" height="44" rx="3" fill="#E0E7FF" stroke="#1E1E24" stroke-width="3.5"/>
        <path d="M22 24 L14 32 L22 40" stroke="#4338CA" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M42 24 L50 32 L42 40" stroke="#4338CA" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="34" y1="20" x2="30" y2="44" stroke="#4338CA" stroke-width="3.5" stroke-linecap="round"/>
      </svg>
    `,

    unlock_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <path d="M22 28 V18 C22 10 36 10 36 18 V22" stroke="#10B981" stroke-width="4" stroke-linecap="round" fill="none"/>
        <rect x="16" y="26" width="32" height="26" rx="4" fill="#A7F3D0" stroke="#1E1E24" stroke-width="3.5"/>
        <circle cx="32" cy="38" r="3" fill="#1E1E24"/>
        <line x1="32" y1="41" x2="32" y2="46" stroke="#1E1E24" stroke-width="2.5"/>
      </svg>
    `,

    protect_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <path d="M22 26 V18 C22 10 42 10 42 18 V26" stroke="#1E1E24" stroke-width="4" stroke-linecap="round" fill="none"/>
        <rect x="16" y="26" width="32" height="26" rx="4" fill="#FDE68A" stroke="#1E1E24" stroke-width="3.5"/>
        <circle cx="32" cy="38" r="3.5" fill="#1E1E24"/>
        <line x1="32" y1="41" x2="32" y2="46" stroke="#1E1E24" stroke-width="3"/>
      </svg>
    `,

    organize_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="10" y="10" width="18" height="22" rx="2" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3"/>
        <rect x="34" y="10" width="18" height="22" rx="2" fill="#FED7AA" stroke="#1E1E24" stroke-width="3"/>
        <rect x="10" y="36" width="18" height="22" rx="2" fill="#D1FAE5" stroke="#1E1E24" stroke-width="3"/>
        <rect x="34" y="36" width="18" height="22" rx="2" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3"/>
        <path d="M26 18 Q32 28 36 34" stroke="#E11D48" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `,

    pdf_to_pdfa: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="12" y="8" width="40" height="48" rx="3" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3.5"/>
        <circle cx="32" cy="32" r="12" fill="#FEF08A" stroke="#1E1E24" stroke-width="3"/>
        <text x="25" y="36" font-family="'Fredoka', sans-serif" font-size="11" font-weight="bold" fill="#B45309">/A</text>
        <path d="M26 42 L22 54 L32 50 L42 54 L38 42" fill="#F59E0B" stroke="#1E1E24" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>
    `,

    repair_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="10" y="10" width="44" height="44" rx="3" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3.5"/>
        <g transform="rotate(25 32 32)">
          <rect x="16" y="24" width="32" height="16" rx="4" fill="#FED7E2" stroke="#1E1E24" stroke-width="2.5"/>
          <circle cx="24" cy="32" r="1.5" fill="#E11D48"/>
          <circle cx="32" cy="32" r="1.5" fill="#E11D48"/>
          <circle cx="40" cy="32" r="1.5" fill="#E11D48"/>
        </g>
      </svg>
    `,

    page_numbers: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="12" y="8" width="40" height="48" rx="3" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3.5"/>
        <line x1="20" y1="18" x2="44" y2="18" stroke="#CBD5E1" stroke-width="2.5"/>
        <line x1="20" y1="26" x2="38" y2="26" stroke="#CBD5E1" stroke-width="2.5"/>
        <rect x="22" y="40" width="20" height="12" rx="3" fill="#FEF08A" stroke="#1E1E24" stroke-width="2.5"/>
        <text x="25" y="49" font-family="'Fredoka', sans-serif" font-size="9" font-weight="bold" fill="#1E1E24">1/N</text>
      </svg>
    `,

    scan_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="10" y="18" width="44" height="34" rx="5" fill="#E0F2FE" stroke="#1E1E24" stroke-width="3.5"/>
        <path d="M24 18 L27 12 H37 L40 18" stroke="#1E1E24" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="32" cy="35" r="10" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3"/>
        <circle cx="32" cy="35" r="5" fill="#0284C7"/>
        <circle cx="46" cy="24" r="2.5" fill="#E11D48"/>
      </svg>
    `,

    ocr_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="10" y="10" width="34" height="44" rx="3" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3"/>
        <line x1="16" y1="20" x2="32" y2="20" stroke="#1E1E24" stroke-width="2.5"/>
        <line x1="16" y1="28" x2="28" y2="28" stroke="#1E1E24" stroke-width="2.5"/>
        <circle cx="38" cy="34" r="12" fill="#FEF08A" stroke="#1E1E24" stroke-width="3.5"/>
        <line x1="47" y1="43" x2="56" y2="52" stroke="#1E1E24" stroke-width="4.5" stroke-linecap="round"/>
        <ellipse cx="38" cy="34" rx="7" ry="4" stroke="#1E1E24" stroke-width="2"/>
        <circle cx="38" cy="34" r="2.5" fill="#1E1E24"/>
      </svg>
    `,

    compare_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="8" y="12" width="22" height="40" rx="2" fill="#FEE2E2" stroke="#1E1E24" stroke-width="3"/>
        <rect x="34" y="12" width="22" height="40" rx="2" fill="#D1FAE5" stroke="#1E1E24" stroke-width="3"/>
        <path d="M26 32 L38 32 M35 27 L40 32 L35 37" stroke="#2563EB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,

    redact_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="12" y="8" width="40" height="48" rx="3" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3.5"/>
        <rect x="18" y="18" width="28" height="7" fill="#1E1E24"/>
        <rect x="18" y="28" width="20" height="7" fill="#1E1E24"/>
        <rect x="18" y="38" width="24" height="7" fill="#1E1E24"/>
      </svg>
    `,

    crop_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <path d="M14 24 V14 H24" stroke="#1E1E24" stroke-width="4" stroke-linecap="round"/>
        <path d="M50 24 V14 H40" stroke="#1E1E24" stroke-width="4" stroke-linecap="round"/>
        <path d="M14 40 V50 H24" stroke="#1E1E24" stroke-width="4" stroke-linecap="round"/>
        <path d="M50 40 V50 H40" stroke="#1E1E24" stroke-width="4" stroke-linecap="round"/>
        <rect x="20" y="20" width="24" height="24" fill="#FEF3C7" stroke="#D97706" stroke-width="2.5" stroke-dasharray="3 3"/>
      </svg>
    `,

    pdf_forms: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="10" y="10" width="44" height="44" rx="3" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3.5"/>
        <rect x="16" y="18" width="10" height="10" rx="2" fill="#D1FAE5" stroke="#1E1E24" stroke-width="2.5"/>
        <path d="M18 23 L21 26 L26 19" stroke="#059669" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="30" y1="23" x2="46" y2="23" stroke="#1E1E24" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="16" y="34" width="32" height="12" rx="2" fill="#F1F5F9" stroke="#1E1E24" stroke-width="2.5"/>
        <line x1="22" y1="40" x2="38" y2="40" stroke="#2563EB" stroke-width="2"/>
      </svg>
    `,

    ai_summarize: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="12" y="8" width="40" height="48" rx="3" fill="#FAF5FF" stroke="#1E1E24" stroke-width="3.5"/>
        <path d="M38 18 C38 23 34 26 29 26 C34 26 38 29 38 34 C38 29 42 26 47 26 C42 26 38 23 38 18 Z" fill="#9333EA" stroke="#1E1E24" stroke-width="2"/>
        <circle cx="24" cy="22" r="2" fill="#F59E0B"/>
        <circle cx="44" cy="38" r="2" fill="#F59E0B"/>
        <circle cx="20" cy="40" r="2.5" fill="#9333EA"/>
        <line x1="26" y1="40" x2="40" y2="40" stroke="#1E1E24" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="20" cy="47" r="2.5" fill="#9333EA"/>
        <line x1="26" y1="47" x2="36" y2="47" stroke="#1E1E24" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `,

    translate_pdf: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="10" y="12" width="28" height="24" rx="4" fill="#DBEAFE" stroke="#1E1E24" stroke-width="3"/>
        <text x="17" y="29" font-family="'Fredoka', sans-serif" font-size="14" font-weight="bold" fill="#1D4ED8">A</text>
        <rect x="26" y="26" width="28" height="24" rx="4" fill="#FEF08A" stroke="#1E1E24" stroke-width="3"/>
        <text x="34" y="43" font-family="'Fredoka', sans-serif" font-size="14" font-weight="bold" fill="#B45309">文</text>
      </svg>
    `,

    pdf_to_markdown: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="tool-icon">
        <rect x="8" y="12" width="48" height="38" rx="4" fill="#FFFFFF" stroke="#1E1E24" stroke-width="3.5"/>
        <path d="M16 38 V22 L22 30 L28 22 V38" stroke="#1E1E24" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M42 22 V36 M36 30 L42 36 L48 30" stroke="#2563EB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
  }
};
