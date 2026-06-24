const SPECIES_TRAITS = {
 wisps: {
    common: [
        "Cloud Wisp",
        "Heart Wisp",
        "Dream Wisp",
        "Flower Wisp",
        "Tea Wisp",
        "Memory Wisp",
        "Snow Wisp",
        "Bubble Wisp",
        "Berry Wisp",
        "Candle Wisp"
    ],

    uncommon: [
        "Butterfly Wisp",
        "Book Wisp",
        "Rain Wisp",
        "Cookie Wisp",
        "Ribbon Wisp",
        "Bell Wisp",
        "Moon Wisp",
        "Star Dust Wisp",
        "Moss Wisp",
        "Lanternfly Wisp"
    ],

    rare: [
        "Lantern Wisp",
        "Star Wisp",
        "Shrine Wisp",
        "Galaxy Wisp",
        "Aurora Wisp",
        "Foxfire Wisp",
        "Rose Wisp",
        "Crystal Wisp",
        "Pastry Wisp",
        "Spirit Wisp"
    ],

    legendary: [
        "Comet Wisp",
        "Phoenix Wisp",
        "Dreamkeeper Wisp",
        "Constellation Wisp",
        "Wish Wisp",
        "Rainbow Wisp",
        "Eclipse Wisp",
        "Guardian Wisp",
        "Ancient Wisp",
        "Celestial Wisp"
    ]
},

magic: {
    common: [
        "Comfort Magic",
        "Dream Magic",
        "Warmth Magic",
        "Protection Magic",
        "Memory Magic",
        "Flower Magic",
        "Tea Magic",
        "Bakery Magic",
        "Moon Magic",
        "Snow Magic"
    ],

    uncommon: [
        "Music Magic",
        "Painting Magic",
        "Garden Magic",
        "Rain Magic",
        "Harvest Magic",
        "Cookie Magic",
        "Bubble Magic",
        "Friendship Magic",
        "Storybook Magic",
        "Healing Magic"
    ],

    rare: [
        "Starlight Magic",
        "Foxfire Magic",
        "Frost Magic",
        "Wish Magic",
        "Aurora Magic",
        "Shadow Magic",
        "Love Magic",
        "Candle Magic",
        "Crystal Magic",
        "Lantern Magic"
    ],

    legendary: [
        "Time Magic",
        "Constellation Magic",
        "Rainbow Magic",
        "Dreamweaving Magic",
        "Soul Magic",
        "Creation Magic",
        "Miracle Magic",
        "Eclipse Magic",
        "Celestial Magic",
        "Ancient Hearth Magic"
    ]
},

mutations: {
    common: [
        "None",
        "Glowing Paw Pads",
        "Sparkling Fur",
        "Floating Charms",
        "Ribbon Trails",
        "Heart Aura",
        "Flower Scent",
        "Glowing Ears",
        "Soft Glow",
        "Warm Fur"
    ],

    uncommon: [
        "Floating Ribbons",
        "Glowing Freckles",
        "Petal Trails",
        "Moonlit Fur",
        "Candy Scent",
        "Snowflake Breath",
        "Starry Blush",
        "Cloudy Footprints",
        "Shimmering Tail",
        "Tiny Bells"
    ],

    rare: [
        "Floating Accessories",
        "Orbiting Stars",
        "Living Halo",
        "Snowfall Aura",
        "Petal Shower",
        "Steam Aura",
        "Moonlight Trail",
        "Sparkle Trail",
        "Tiny Floating Hearts",
        "Crystal Tears"
    ],

    legendary: [
        "Living Constellations",
        "Floating Mini Moons",
        "Permanent Aurora Aura",
        "Rainbow Trails",
        "Glowing Antlers",
        "Halo of Stars",
        "Spirit Flames",
        "Orbiting Lanterns",
        "Dream Mist",
        "Blooming Flowers"
    ]
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
