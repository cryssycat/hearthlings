const SPECIES_TRAITS = {
  bodyType: {
    common: ["Round", "Fluffy", "Soft-Bodied", "Small", "Plush-Like", "Chubby", "Pear-Shaped", "Compact", "Bean-Shaped", "Gentle Build"],
    uncommon: ["Long-Bodied", "Extra Fluffy", "Tiny", "Cloudy Body", "Curled Posture", "Pillow-Bodied", "Squishy Build", "Tall and Soft", "Teardrop Shape", "Marshmallow Build"],
    rare: ["Floating Body", "Crystal Body", "Starry Body", "Patchwork Body", "Glowing Core Body", "Transparent Belly", "Charm-Filled Body", "Frosted Body", "Petal Body", "Lantern-Bellied"],
    legendary: ["Celestial Body", "Living Plush Body", "Dream-Made Body", "Constellation Body", "Aurora Body", "Wish-Born Body", "Memory-Keeper Body", "Tiny Galaxy Body", "Sacred Hearth Body", "Eclipse Body"]
  },

  ears: {
    common: ["Round Ears", "Short Ears", "Fluffy Ears", "Button Ears", "Tiny Ears", "Soft Folded Ears", "Bear Ears", "Catlike Ears", "Puppy Ears", "Simple Lop Ears"],
    uncommon: ["Long Ears", "Droopy Ears", "Ribbon-Tied Ears", "Cloud-Tipped Ears", "Heart-Tipped Ears", "Leafy Ears", "Bell Ears", "Mismatched Ears", "Flower Ears", "Star-Tipped Ears"],
    rare: ["Wing Ears", "Crystal Ears", "Lantern Ears", "Moon Ears", "Glowing Inner Ears", "Floating Ear Charms", "Patchwork Ears", "Candleflame Ears", "Snowdrop Ears", "Halo-Framed Ears"],
    legendary: ["Moon-Phase Ears", "Halo Ears", "Constellation Ears", "Wish Ears", "Aurora Ears", "Spirit-Flame Ears", "Rainbow Glass Ears", "Ancient Bell Ears", "Celestial Velvet Ears", "Eclipse-Tipped Ears"]
  },

  eyes: {
    common: ["Round Eyes", "Sleepy Eyes", "Soft Eyes", "Button Eyes", "Dot Eyes", "Shy Eyes", "Wide Eyes", "Gentle Eyes", "Glossy Eyes", "Tiny Sparkle Eyes"],
    uncommon: ["Heart Pupils", "Star Pupils", "Flower Pupils", "Moon Pupils", "Two-Tone Eyes", "Soft Glow Eyes", "Tear-Drop Pupils", "Diamond Pupils", "Swirl Pupils", "Candy Shine Eyes"],
    rare: ["Glowing Eyes", "Galaxy Eyes", "Crystal Eyes", "Lantern Eyes", "Mismatched Magic Eyes", "Aurora Eyes", "Closed Smiling Eyes", "Floating Pupil Eyes", "Starfield Sclera", "Candlelit Eyes"],
    legendary: ["Living Constellation Eyes", "Wishkeeper Eyes", "Eclipse Eyes", "Rainbow Halo Eyes", "Ancient Spirit Eyes", "Dreamweaver Eyes", "Celestial Mirror Eyes", "Timeglass Eyes", "Soulglow Eyes", "Miracle Eyes"]
  },

  tail: {
    common: ["Tiny Tail", "Fluffy Tail", "Round Tail", "Pom Tail", "Short Tail", "Curled Tail", "Soft Stub Tail", "Puffy Tail", "Simple Long Tail", "Heart Puff Tail"],
    uncommon: ["Ribbon Tail", "Cloud Tail", "Bell Tail", "Flower Tail", "Tea Steam Tail", "Candy Tail", "Blanket Tail", "Star-Tipped Tail", "Moon-Tipped Tail", "Patchwork Tail"],
    rare: ["Lantern Tail", "Star Tail", "Crystal Tail", "Floating Charm Tail", "Candle Tail", "Snowglobe Tail", "Wisp Tail", "Rose Vine Tail", "Galaxy Tail", "Aurora Tail"],
    legendary: ["Living Constellation Tail", "Wish Tail", "Eclipse Tail", "Rainbow Trail Tail", "Ancient Lantern Tail", "Dream Mist Tail", "Celestial Ribbon Tail", "Spirit Flame Tail", "Orbiting Moon Tail", "Miracle Bloom Tail"]
  },

  markings: {
    common: ["Cheek Dots", "Soft Blush", "Paw Spots", "Belly Patch", "Freckles", "Forehead Spot", "Ear Tips", "Tail Tip", "Simple Stripes", "Tiny Hearts"],
    uncommon: ["Star Freckles", "Moon Mark", "Flower Spots", "Ribbon Markings", "Cloud Patches", "Candy Swirls", "Tea Steam Swirls", "Snowflake Marks", "Book Page Mark", "Bell Mark"],
    rare: ["Glowing Markings", "Crystal Spots", "Galaxy Speckles", "Lantern Glow Patches", "Rose Vine Markings", "Aurora Streaks", "Candle Wax Marks", "Floating Rune Marks", "Dream Dust Spots", "Halo Mark"],
    legendary: ["Living Constellation Marks", "Eclipse Markings", "Wish Runes", "Rainbow Sigils", "Ancient Hearth Marks", "Celestial Birthmark", "Spirit Flame Markings", "Miracle Bloom Marks", "Time Rune Markings", "Sacred Guardian Seal"]
  },

  accessories: {
    common: ["Tiny Bow", "Warm Scarf", "Bell Collar", "Flower Pin", "Tea Cup Charm", "Soft Blanket", "Star Clip", "Moon Clip", "Cookie Pouch", "Little Satchel"],
    uncommon: ["Ribbon Wand", "Lantern Charm", "Memory Locket", "Plush Backpack", "Garden Apron", "Spellbook Bag", "Moonflower Crown", "Crystal Bracelet", "Tiny Cape", "Cozy Bonnet"],
    rare: ["Floating Halo", "Crystal Crown", "Star Lantern", "Wish Locket", "Guardian Bell", "Aurora Shawl", "Spirit Veil", "Rose Quartz Collar", "Dreamkeeper Key", "Magic Tea Kettle"],
    legendary: ["Ancient Hearth Crown", "Celestial Halo", "Eclipse Pendant", "Constellation Cape", "Wishkeeper Relic", "Miracle Bell", "Rainbow Guardian Charm", "Living Storybook", "Sacred Moon Crown", "Timeworn Star Key"]
  },

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
};

const EXAMPLE_GALLERY = [
  {
    icon: "☁️",
    name: "Cloudbell",
    notes: "A soft common Hearthling with cozy weather magic.",
    tags: ["Common", "Cloud Wisp", "Comfort Magic"]
  },
  {
    icon: "🌙",
    name: "Moonmuffin",
    notes: "A gentle uncommon example with moonlit details.",
    tags: ["Uncommon", "Moon Wisp", "Dream Magic"]
  },
  {
    icon: "✨",
    name: "Wishglow",
    notes: "A rare example with glowing charm traits.",
    tags: ["Rare", "Wish Magic", "Sparkle Trail"]
  }
];

function titleCase(text) {
  return String(text)
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, char => char.toUpperCase());
}

function pick(array) {
  if (!Array.isArray(array) || array.length === 0) return "No trait listed";
  return array[Math.floor(Math.random() * array.length)];
}

function renderTraits() {
  const container = document.getElementById("traitsContainer");
  if (!container) return;

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
  const rarityKeys = Object.keys(rarities).filter(rarity => Array.isArray(rarities[rarity]) && rarities[rarity].length > 0);
  const rarity = pick(rarityKeys);
  const trait = pick(rarities[rarity]);

  return {
    type: titleCase(type),
    rarity: titleCase(rarity),
    trait
  };
}

function generateSpeciesRoll() {
  const outputBox = document.getElementById("speciesRollOutput");
  const copyStatus = document.getElementById("copyStatus");
  if (!outputBox) return;

  const rolls = Object.entries(SPECIES_TRAITS).map(([type, rarities]) => rollTrait(type, rarities));

  outputBox.textContent = rolls
    .map(roll => `${roll.type}: ${roll.trait} (${roll.rarity})`)
    .join("\n");

  if (copyStatus) copyStatus.textContent = "";
}

async function copySpeciesRoll() {
  const outputBox = document.getElementById("speciesRollOutput");
  const status = document.getElementById("copyStatus");
  const output = outputBox ? outputBox.textContent.trim() : "";

  if (!output || output.includes("Click “Roll Traits”")) {
    if (status) status.textContent = "Roll traits first.";
    return;
  }

  try {
    await navigator.clipboard.writeText(output);
    if (status) status.textContent = "Copied!";
  } catch (error) {
    if (status) status.textContent = "Copy failed. You can manually highlight the list instead.";
  }
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  grid.innerHTML = "";

  EXAMPLE_GALLERY.forEach(example => {
    const card = document.createElement("article");
    card.className = "gallery-card";

    const image = document.createElement("div");
    image.className = "gallery-image";
    image.textContent = example.icon;

    const name = document.createElement("h3");
    name.textContent = example.name;

    const notes = document.createElement("p");
    notes.textContent = example.notes;

    const pillRow = document.createElement("div");
    pillRow.className = "pill-row";

    example.tags.forEach(tag => {
      const pill = document.createElement("span");
      pill.className = "pill";
      pill.textContent = tag;
      pillRow.appendChild(pill);
    });

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(notes);
    card.appendChild(pillRow);
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
      const targetPanel = document.getElementById(button.dataset.tab);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  renderTraits();
  renderGallery();

  const rollButton = document.getElementById("rollSpeciesButton");
  const copyButton = document.getElementById("copySpeciesButton");

  if (rollButton) rollButton.addEventListener("click", generateSpeciesRoll);
  if (copyButton) copyButton.addEventListener("click", copySpeciesRoll);
});
