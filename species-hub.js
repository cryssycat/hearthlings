const SPECIES_TRAITS = {
  bodyType: {
    common: ["Small rounded body", "Soft chubby body", "Bean-shaped body", "Tiny plush body"],
    uncommon: ["Long noodle body", "Extra fluffy body", "Teardrop body", "Pillow-shaped body"],
    rare: ["Floating body", "Crystal-lined body", "Patchwork plush body", "Semi-transparent body"],
    legendary: ["Living constellation body", "Dream-cloud body", "Celestial glass body", "Moonlit spirit body"]
  },
  ears: {
    common: ["Round ears", "Short folded ears", "Tiny button ears", "Soft bear ears"],
    uncommon: ["Long droopy ears", "Ribbon-tipped ears", "Fluffy lop ears", "Mismatched ears"],
    rare: ["Wing ears", "Crystal ears", "Lantern ears", "Flower-petal ears"],
    legendary: ["Moon-phase ears", "Halo ears", "Star-map ears", "Glowing aurora ears"]
  },
  eyes: {
    common: ["Round eyes", "Sleepy eyes", "Shiny bead eyes", "Soft oval eyes"],
    uncommon: ["Heart pupils", "Star pupils", "Diamond pupils", "Button eyes"],
    rare: ["Glowing eyes", "Split-color eyes", "Constellation pupils", "Tear-drop pupils"],
    legendary: ["Galaxy eyes", "Moon eclipse eyes", "Living starlight eyes", "Oracle eyes"]
  },
  tail: {
    common: ["Tiny nub tail", "Fluffy round tail", "Short curled tail", "Pom-pom tail"],
    uncommon: ["Ribbon tail", "Long curled tail", "Bell tail", "Braided tail"],
    rare: ["Lantern tail", "Star tail", "Crystal charm tail", "Cloud puff tail"],
    legendary: ["Living constellation tail", "Moon lantern tail", "Wish-granting tail", "Aurora veil tail"]
  },
  markings: {
    common: ["Cheek blush", "Paw spots", "Soft belly patch", "Freckle dots"],
    uncommon: ["Heart markings", "Star freckles", "Ribbon stripes", "Moon cheek marks"],
    rare: ["Glowing markings", "Moving cloud marks", "Crystal flecks", "Flower constellations"],
    legendary: ["Living star map", "Prophecy markings", "Aurora shimmer marks", "Dream script markings"]
  },
  magic: {
    common: ["Warmth charm", "Sleepy comfort aura", "Tiny sparkle trail", "Gentle luck charm"],
    uncommon: ["Tea steam magic", "Memory glow", "Protective cuddle ward", "Mood-sensing shimmer"],
    rare: ["Nightmare shield", "Fallen star collecting", "Lantern healing", "Dream doorway magic"],
    legendary: ["Wish shelter magic", "Moon blessing", "Time-softening lullaby", "Constellation guardian form"]
  },
  companion: {
    common: ["Tiny wisp", "Plush mouse", "Teacup sprite", "Button beetle charm"],
    uncommon: ["Ribbon moth", "Moon bunny plush", "Mini lantern fox", "Sugar cloud sprite"],
    rare: ["Crystal mouse", "Dream ferret", "Starling wisp", "Flower dragonlet"],
    legendary: ["Ancient comfort spirit", "Tiny moon guardian", "Living plush familiar", "Celestial hearth flame"]
  }
};

const EXAMPLE_GALLERY = [
  {
    name: "Mochi Moonbell",
    icon: "☾",
    notes: "A sleepy comfort guardian who protects bedrooms from nightmares.",
    tags: ["Rare Tail", "Uncommon Eyes", "Cozy Magic"]
  },
  {
    name: "Sugar Hearthglow",
    icon: "✦",
    notes: "A cafe-dwelling Hearthling who warms mugs and pastry boxes.",
    tags: ["Common Body", "Rare Magic", "Cafe Theme"]
  },
  {
    name: "Luma Softwish",
    icon: "♡",
    notes: "A tiny guardian born from a wish tucked under a pillow.",
    tags: ["Legendary Eyes", "Dream Theme", "Plush Body"]
  }
];

function titleCase(text) {
  return text
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, char => char.toUpperCase());
}

function pick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function renderTraits() {
  const container = document.getElementById("traitsContainer");
  container.innerHTML = "";

  Object.entries(SPECIES_TRAITS).forEach(([type, rarities]) => {
    const section = document.createElement("article");
    section.className = "trait-section";

    const title = document.createElement("h2");
    title.textContent = titleCase(type);
    section.appendChild(title);

    const rarityGrid = document.createElement("div");
    rarityGrid.className = "rarity-grid";

    Object.entries(rarities).forEach(([rarity, traits]) => {
      const card = document.createElement("div");
      card.className = `rarity-card ${rarity}`;

      const rarityTitle = document.createElement("h3");
      rarityTitle.textContent = titleCase(rarity);
      card.appendChild(rarityTitle);

      const list = document.createElement("ul");
      traits.forEach(trait => {
        const item = document.createElement("li");
        item.textContent = trait;
        list.appendChild(item);
      });

      card.appendChild(list);
      rarityGrid.appendChild(card);
    });

    section.appendChild(rarityGrid);
    container.appendChild(section);
  });
}

function rollTrait(type, rarities) {
  const rarity = pick(Object.keys(rarities));
  const trait = pick(rarities[rarity]);

  return {
    type: titleCase(type),
    rarity: titleCase(rarity),
    trait
  };
}

function generateSpeciesRoll() {
  const rolls = Object.entries(SPECIES_TRAITS).map(([type, rarities]) => rollTrait(type, rarities));

  const output = rolls
    .map(roll => `${roll.type}: ${roll.trait} (${roll.rarity})`)
    .join("\n");

  document.getElementById("speciesRollOutput").textContent = output;
  document.getElementById("copyStatus").textContent = "";
}

async function copySpeciesRoll() {
  const output = document.getElementById("speciesRollOutput").textContent.trim();
  const status = document.getElementById("copyStatus");

  if (!output || output.includes("Click “Roll Traits”")) {
    status.textContent = "Roll traits first.";
    return;
  }

  try {
    await navigator.clipboard.writeText(output);
    status.textContent = "Copied!";
  } catch (error) {
    status.textContent = "Copy failed. You can manually highlight the list instead.";
  }
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";

  EXAMPLE_GALLERY.forEach(example => {
    const card = document.createElement("article");
    card.className = "gallery-card";

    card.innerHTML = `
      <div class="gallery-image">${example.icon}</div>
      <h3>${example.name}</h3>
      <p>${example.notes}</p>
      <div class="pill-row">
        ${example.tags.map(tag => `<span class="pill">${tag}</span>`).join("")}
      </div>
    `;

    grid.appendChild(card);
  });
}

function setupTabs() {
  const buttons = document.querySelectorAll(".tab-button");
  const panels = document.querySelectorAll(".tab-panel");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      panels.forEach(panel => panel.classList.remove("active"));

      button.classList.add("active");
      document.getElementById(button.dataset.tab).classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  renderTraits();
  renderGallery();

  document.getElementById("rollSpeciesButton").addEventListener("click", generateSpeciesRoll);
  document.getElementById("copySpeciesButton").addEventListener("click", copySpeciesRoll);
});
