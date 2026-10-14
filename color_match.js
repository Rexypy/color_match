const colorPalettes = [
  { top: { name: "Tropical Mint", hex: "#07F49E" }, bottom: { name: "Indigo", hex: "#42047E" } },
  { top: { name: "Lime Cream", hex: "#DDEA78" }, bottom: { name: "Vintage Grape", hex: "#433455" } },
  { top: { name: "Coral Blush", hex: "#FF6B6B" }, bottom: { name: "Deep Ocean", hex: "#0B2545" } },
  { top: { name: "Sunny Yellow", hex: "#FFD23F" }, bottom: { name: "Midnight Blue", hex: "#1B1F3B" } },
  { top: { name: "Sky Blue", hex: "#8ECAE6" }, bottom: { name: "Navy Ink", hex: "#023047" } },
  { top: { name: "Peach Fuzz", hex: "#FFBE98" }, bottom: { name: "Cocoa Brown", hex: "#4A2C2A" } },
  { top: { name: "Lavender Mist", hex: "#CDB4DB" }, bottom: { name: "Plum Wine", hex: "#3D1F4E" } },
  { top: { name: "Sage Green", hex: "#B7C9A8" }, bottom: { name: "Forest Shadow", hex: "#1F3A2B" } },
  { top: { name: "Hot Pink", hex: "#FF4D8D" }, bottom: { name: "Charcoal", hex: "#1E1E24" } },
  { top: { name: "Aqua Spark", hex: "#2EC4B6" }, bottom: { name: "Dark Teal", hex: "#0B3B3C" } },
  { top: { name: "Sand Dune", hex: "#F2E3C6" }, bottom: { name: "Terracotta", hex: "#9C4A2F" } },
  { top: { name: "Electric Orange", hex: "#FF7B00" }, bottom: { name: "Royal Blue", hex: "#12238A" } },
  { top: { name: "Ice White", hex: "#F1F7FB" }, bottom: { name: "Slate", hex: "#2F3E4E" } },
  { top: { name: "Rose Quartz", hex: "#F7CAD0" }, bottom: { name: "Burgundy", hex: "#5C1A2B" } },
  { top: { name: "Lemon Zest", hex: "#F9F871" }, bottom: { name: "Pine Green", hex: "#0D3B2E" } },
  { top: { name: "Cloud Grey", hex: "#D9DEE4" }, bottom: { name: "Rich Black", hex: "#111318" } },
  { top: { name: "Seafoam", hex: "#A8E6CF" }, bottom: { name: "Berry", hex: "#6A1B4D" } },
  { top: { name: "Amber Glow", hex: "#FFB703" }, bottom: { name: "Deep Brown", hex: "#3B2412" } },
  { top: { name: "Olive Matte", hex: "#6B7A3A" }, bottom: { name: "Oat Milk", hex: "#EFE6D2" } },
  { top: { name: "Glossy Cherry", hex: "#D90429" }, bottom: { name: "Pearl White", hex: "#F8F9FA" } },
  { top: { name: "Dusty Rose", hex: "#D4A5A5" }, bottom: { name: "Wine Stain", hex: "#4B1D3F" } },
  { top: { name: "Mustard Seed", hex: "#E1AD01" }, bottom: { name: "Aubergine", hex: "#3B1F3A" } },
  { top: { name: "Mocha Mousse", hex: "#A47864" }, bottom: { name: "Warm Ivory", hex: "#FAF3E8" } },
  { top: { name: "Cobalt Gloss", hex: "#0047AB" }, bottom: { name: "Daffodil", hex: "#FFE66D" } },
  { top: { name: "Matcha", hex: "#9DB17C" }, bottom: { name: "Espresso", hex: "#2B1D14" } },
  { top: { name: "Periwinkle", hex: "#A0A4FF" }, bottom: { name: "Ink Black", hex: "#14141F" } },
  { top: { name: "Papaya", hex: "#FF8C61" }, bottom: { name: "Deep Lagoon", hex: "#0F4C5C" } },
  { top: { name: "Mint Frost", hex: "#CFF5E7" }, bottom: { name: "Emerald Night", hex: "#0B4F3C" } },
  { top: { name: "Clay Pink", hex: "#E5989B" }, bottom: { name: "Smoky Navy", hex: "#355070" } },
  { top: { name: "Butter", hex: "#FFF3B0" }, bottom: { name: "Cranberry", hex: "#9E2A2B" } },
  { top: { name: "Steel Blue", hex: "#4682B4" }, bottom: { name: "Snow", hex: "#FFFAFA" } },
  { top: { name: "Neon Lime", hex: "#B6F500" }, bottom: { name: "Void Black", hex: "#0A0A0F" } },
  { top: { name: "Orchid", hex: "#DA70D6" }, bottom: { name: "Midnight Violet", hex: "#2A0A4A" } },
  { top: { name: "Honey", hex: "#F4B942" }, bottom: { name: "Walnut", hex: "#4F3222" } },
  { top: { name: "Glacier", hex: "#BDE0FE" }, bottom: { name: "Royal Navy", hex: "#1D2D5A" } },
  { top: { name: "Tangerine", hex: "#FF9F1C" }, bottom: { name: "Abyss Blue", hex: "#011627" } },
  { top: { name: "Pistachio", hex: "#C5E1A5" }, bottom: { name: "Grape Soda", hex: "#5B2A86" } },
  { top: { name: "Brick Red", hex: "#B23A48" }, bottom: { name: "Blush Cream", hex: "#FCD5CE" } },
  { top: { name: "Moss", hex: "#606C38" }, bottom: { name: "Linen", hex: "#FEFAE0" } },
  { top: { name: "Turquoise Gloss", hex: "#00C2D1" }, bottom: { name: "Jet", hex: "#1A1A2E" } },
  { top: { name: "Lilac Haze", hex: "#D8C3F5" }, bottom: { name: "Deep Indigo", hex: "#231651" } },
  { top: { name: "Apricot", hex: "#FFC8A2" }, bottom: { name: "Rust", hex: "#8C2F0B" } },
  { top: { name: "Charcoal Matte", hex: "#36454F" }, bottom: { name: "Sunflower", hex: "#FFC400" } },
  { top: { name: "Bubblegum", hex: "#FF9FD2" }, bottom: { name: "Cocoa Bean", hex: "#3E2723" } },
  { top: { name: "Spring Green", hex: "#7CFC9C" }, bottom: { name: "Dark Slate", hex: "#1C2B2D" } },
  { top: { name: "Blush Peach", hex: "#FBC4AB" }, bottom: { name: "Midnight Teal", hex: "#003844" } },
  { top: { name: "Denim", hex: "#3A5A98" }, bottom: { name: "Buttermilk", hex: "#FFF1C1" } },
  { top: { name: "Magenta Pop", hex: "#E6007E" }, bottom: { name: "Soft Lilac", hex: "#EADCF8" } },
  { top: { name: "Ash Grey", hex: "#B8BCC4" }, bottom: { name: "Crimson", hex: "#A4161A" } },
  { top: { name: "Wheat", hex: "#E9D8A6" }, bottom: { name: "Deep Sea", hex: "#0A3D62" } },
  { top: { name: "Cyan Splash", hex: "#00E5FF" }, bottom: { name: "Royal Purple", hex: "#3C1361" } },
  { top: { name: "Cinnamon", hex: "#A0522D" }, bottom: { name: "Cream Soda", hex: "#FDE8C9" } },
  { top: { name: "Pale Sage", hex: "#D9E4DD" }, bottom: { name: "Dark Moss", hex: "#2E4036" } },
  { top: { name: "Raspberry", hex: "#C2185B" }, bottom: { name: "Vanilla", hex: "#FFF4E0" } },
  { top: { name: "Ocean Mist", hex: "#A9D6E5" }, bottom: { name: "Deep Plum", hex: "#3A0F2E" } },
  { top: { name: "Saffron", hex: "#F6AE2D" }, bottom: { name: "Midnight Navy", hex: "#0B132B" } },
  { top: { name: "Mauve", hex: "#B08EA2" }, bottom: { name: "Evergreen", hex: "#0F3D2E" } },
  { top: { name: "Chartreuse", hex: "#D4E157" }, bottom: { name: "Mulberry", hex: "#4A1942" } },
  { top: { name: "Slate Blue", hex: "#6C7A9C" }, bottom: { name: "Peach Cream", hex: "#FFE5D4" } },
  { top: { name: "Fire Red", hex: "#E63946" }, bottom: { name: "Frost", hex: "#F1FAEE" } },
  { top: { name: "Teal Matte", hex: "#2A7F7F" }, bottom: { name: "Sand", hex: "#F4E2C1" } },
  { top: { name: "Violet Gloss", hex: "#7B2CBF" }, bottom: { name: "Pale Gold", hex: "#F7E7A1" } }
];

const PAGE_PADDING = 20;
const CARD_WIDTH = 260;
const CARD_HEIGHT = 346;
const GRID_GAP = 20;
const COPY_MODAL_DURATION = 2000;

const paletteGrid = document.getElementById("palette-grid");
const showMoreLine = document.getElementById("show-more");
const previewModal = document.getElementById("preview-modal");
const previewContent = document.getElementById("preview-content");
const closePreviewButton = document.getElementById("close-preview-button");
const copyModal = document.getElementById("copy-modal");
const copyModalMessage = document.getElementById("copy-modal-message");

const batchSize = calculateBatchSize();
let visibleCount = 0;
let copyModalTimer;

function calculateBatchSize() {
  const usableWidth = window.innerWidth - PAGE_PADDING * 2;
  const columns = Math.max(1, Math.floor((usableWidth + GRID_GAP) / (CARD_WIDTH + GRID_GAP)));
  const rows = Math.max(1, Math.floor((window.innerHeight + GRID_GAP) / (CARD_HEIGHT + GRID_GAP)));
  return columns * rows;
}

function createColorHalf(color, otherColor, positionClass) {
  const colorHalf = document.createElement("div");
  colorHalf.className = `color-half ${positionClass}`;
  colorHalf.style.backgroundColor = color.hex;
  colorHalf.style.color = otherColor.hex;

  colorHalf.innerHTML = `
    <h2 class="color-name">${color.name}</h2>
    <p class="color-hex"><span>HEX</span><span>${color.hex}</span></p>
  `;

  colorHalf.addEventListener("click", () => copyHex(color));
  return colorHalf;
}

function createPaletteCard(palette, includePreviewButton) {
  const paletteCard = document.createElement("div");
  paletteCard.className = "palette-card";

  paletteCard.appendChild(createColorHalf(palette.top, palette.bottom, "color-half-top"));
  paletteCard.appendChild(createColorHalf(palette.bottom, palette.top, "color-half-bottom"));

  if (includePreviewButton) {
    const previewButton = document.createElement("button");
    previewButton.className = "preview-button";
    previewButton.textContent = "Preview";
    previewButton.addEventListener("click", () => openPreview(palette));
    paletteCard.appendChild(previewButton);
  }

  return paletteCard;
}

function showNextBatch() {
  const nextVisibleCount = Math.min(visibleCount + batchSize, colorPalettes.length);

  for (let index = visibleCount; index < nextVisibleCount; index++) {
    paletteGrid.appendChild(createPaletteCard(colorPalettes[index], true));
  }

  visibleCount = nextVisibleCount;

  if (visibleCount >= colorPalettes.length) {
    showMoreLine.classList.add("hidden");
  }
}

async function copyHex(color) {
  await navigator.clipboard.writeText(color.hex);
  showCopyModal(color.name);
}

function showCopyModal(colorName) {
  copyModalMessage.textContent = `${colorName}'s hex has been copied to your keyboard`;
  copyModal.classList.remove("hidden");

  clearTimeout(copyModalTimer);
  copyModalTimer = setTimeout(() => copyModal.classList.add("hidden"), COPY_MODAL_DURATION);
}

function openPreview(palette) {
  previewContent.innerHTML = "";
  previewContent.appendChild(createPaletteCard(palette, false));
  previewModal.classList.remove("hidden");
}

function closePreview() {
  previewModal.classList.add("hidden");
}

showMoreLine.addEventListener("click", showNextBatch);
closePreviewButton.addEventListener("click", closePreview);

previewModal.addEventListener("click", (event) => {
  if (event.target === previewModal) {
    closePreview();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePreview();
  }
});

showNextBatch();
