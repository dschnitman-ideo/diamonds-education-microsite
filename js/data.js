/* ============================================================
   Content data for Natural Diamonds retail training microsite.
   All copy here is illustrative training content for the pilot.
   ============================================================ */

const NAV = [
  { id: "basics",       label: "Diamond Basics",              icon: "diamond" },
  { id: "compare",      label: "Natural vs. Lab-Grown",        icon: "scale" },
  { id: "journey",      label: "From Rough to Radiance",       icon: "mountain" },
  { id: "field-guide",  label: "The Natural Diamond Field Guide", icon: "loupe" },
  { id: "talk",         label: "Talk Diamonds",                icon: "chat" },
  { id: "stories",      label: "Diamond Stories",              icon: "book" },
  { id: "listen",       label: "Listen & Learn",                icon: "headphones" },
];

const LEVELS = [
  { name: "Diamond Rookie",   min: 0,    max: 300  },
  { name: "Diamond Explorer", min: 300,  max: 800  },
  { name: "Diamond Expert",   min: 800,  max: 1600 },
  { name: "Diamond Master",   min: 1600, max: 2400 },
];

/* ---------------- Diamond Basics ---------------- */
const BASICS_TOPICS = [
  {
    id: "formation",
    num: "01",
    title: "Formation",
    sub: "Diamonds form deep within the Earth under extreme heat and pressure.",
    icon: "mountain",
    xp: 10,
    body: "Roughly 100 to 200 miles below the surface, carbon is exposed to temperatures over 2,000°F and pressure 50,000 times that of the atmosphere at sea level. Over the course of 1 to 3 billion years, that carbon slowly crystallizes into a diamond. By the time one reaches a customer's hand, it's already older than most life on Earth.",
  },
  {
    id: "eruptions",
    num: "02",
    title: "Kimberlite Eruptions",
    sub: "Volcanic eruptions bring diamonds to the surface in kimberlite rock.",
    icon: "volcano",
    xp: 10,
    body: "Diamonds don't travel to the surface gently. Rare, violent volcanic eruptions, moving faster than the speed of sound, punch narrow pipes of kimberlite rock up from the mantle, carrying diamonds along for the ride. These kimberlite pipes are the reason diamond mines are found in only a handful of places on Earth.",
  },
  {
    id: "rough",
    num: "03",
    title: "Rough Diamonds",
    sub: "Rough diamonds are sorted by size, quality, and potential before cutting.",
    icon: "diamond",
    xp: 10,
    body: "A rough diamond straight out of the ground looks more like a cloudy pebble than a gem. Expert sorters evaluate thousands of stones by size, shape, clarity, and color to decide how each one should eventually be cut, a decision that can take weeks of planning for a single larger stone.",
  },
  {
    id: "4cs",
    num: "04",
    title: "The 4Cs",
    sub: "The universal standard for evaluating diamond quality: Cut, Color, Clarity, Carat.",
    icon: "gem",
    xp: 10,
    body: "Cut determines how well a diamond reflects light; it's the biggest driver of sparkle. Color measures the presence of a yellow or brown tint on a scale from D (colorless) to Z. Clarity grades natural inclusions formed during growth. Carat is simply weight. All four work together, and a well-cut diamond with a lower carat can outshine a poorly cut, larger one.",
  },
];

/* ---------------- Natural vs. Lab-Grown ---------------- */
const COMPARE_TABS = [
  {
    id: "formation",
    label: "Formation",
    natural: "Forms deep within the Earth over 1 to 3 billion years, carried to the surface by rare volcanic eruptions.",
    lab: "Grown in a machine over days to weeks, using high pressure/temperature or vapor deposition to replicate the natural process.",
  },
  {
    id: "rarity",
    label: "Rarity",
    natural: "Found only in specific deep-Earth deposits and mined in limited quantities each year. Every stone is one of a kind.",
    lab: "Produced on demand, in any quantity a factory can run. Supply isn't limited by geology, only by manufacturing capacity.",
  },
  {
    id: "inclusions",
    label: "Inclusions",
    natural: "Often contain trace minerals and tiny natural inclusions formed during growth, a kind of fingerprint that proves its origin.",
    lab: "May contain manufacturing artifacts like metallic flux inclusions, which reflect the growth process rather than a natural history.",
  },
  {
    id: "environment",
    label: "Environmental Impact",
    natural: "Mining is land-intensive and closely regulated; major producers invest heavily in land rehabilitation and local economies.",
    lab: "Avoids mining, but growing a diamond takes significant, sustained energy input; the footprint depends heavily on the power source.",
  },
  {
    id: "value",
    label: "Value",
    natural: "Has a long-established resale and trade-in market tied directly to its rarity, which has historically held value over time.",
    lab: "As production scales rapidly, industry pricing data shows lab-grown resale value dropping sharply, often 80-90% below original price.",
  },
];

/* ---------------- From Rough to Radiance ---------------- */
const JOURNEY_STEPS = [
  {
    id: "mine",
    eyebrow: "Step 1",
    title: "Mine",
    summary: "Kimberlite ore is extracted from deep underground or open-pit mines.",
    detail: "Diamond-bearing kimberlite ore is drilled and blasted from pipes that can extend over half a mile underground. Only about 1 in every 1 million tons of mined earth yields a gem-quality diamond, which is a big part of why natural diamonds carry the value they do.",
  },
  {
    id: "sort",
    eyebrow: "Step 2",
    title: "Sorting",
    summary: "Rough stones are separated by size, shape, and quality.",
    detail: "Ore is crushed and processed to recover rough diamonds, which are then hand- and machine-sorted into thousands of categories by size, color, clarity, and shape. This sorting determines which cutting house a stone goes to and what it might eventually become.",
  },
  {
    id: "cut",
    eyebrow: "Step 3",
    title: "Cutting",
    summary: "A master cutter plans facets to maximize brilliance from the rough shape.",
    detail: "Cutting a diamond is part science, part art. A cutter studies the rough stone for weeks before making the first cut, planning facet angles that maximize brilliance while preserving as much carat weight as possible. One wrong cut can shatter a stone worth a fortune.",
  },
  {
    id: "polish",
    eyebrow: "Step 4",
    title: "Polishing",
    summary: "Facets are ground and polished to a mirror finish, then graded.",
    detail: "Each facet is polished using diamond dust; the only material hard enough to polish a diamond is another diamond. Once complete, the finished stone is independently graded by a laboratory like GIA on the 4Cs before it's ready to be set.",
  },
  {
    id: "jewelry",
    eyebrow: "Step 5",
    title: "Jewelry",
    summary: "The finished diamond is set by hand into its final piece.",
    detail: "A jeweler selects a setting that complements the stone's cut and proportions, then hand-sets it, securing a piece of the Earth that took over a billion years to form into something meant to be worn for a lifetime and passed down.",
  },
];

/* ---------------- Field Guide ---------------- */
const FIELD_GUIDE = {
  shapes: [
    { name: "Round Brilliant", sub: "58 facets, maximum sparkle", icon: "diamond" },
    { name: "Oval", sub: "Elongated, flatters the finger", icon: "diamond" },
    { name: "Cushion", sub: "Rounded corners, soft brilliance", icon: "diamond" },
    { name: "Emerald", sub: "Step-cut, hall-of-mirrors effect", icon: "diamond" },
    { name: "Pear", sub: "Teardrop, part round part marquise", icon: "diamond" },
    { name: "Princess", sub: "Square, sharp modern corners", icon: "diamond" },
    { name: "Radiant", sub: "Cropped corners, brilliant facets", icon: "diamond" },
    { name: "Marquise", sub: "Elongated points, maximizes size", icon: "diamond" },
  ],
  inclusions: [
    { name: "Feathers", sub: "Small internal fractures", icon: "loupe" },
    { name: "Crystals", sub: "Tiny mineral inclusions", icon: "loupe" },
    { name: "Clouds", sub: "Clusters of pinpoints", icon: "loupe" },
    { name: "Graining", sub: "Irregular internal growth lines", icon: "loupe" },
  ],
  colors: [
    { name: "D–F", sub: "Colorless, the rarest grades", icon: "gem" },
    { name: "G–J", sub: "Near colorless, excellent value", icon: "gem" },
    { name: "K–M", sub: "Faint warmth, visible to trained eye", icon: "gem" },
    { name: "Fancy", sub: "Yellow, pink, blue: prized rarities", icon: "gem" },
  ],
  cuts: [
    { name: "Excellent", sub: "Maximum fire and brilliance", icon: "sparkle" },
    { name: "Very Good", sub: "Reflects most light entering", icon: "sparkle" },
    { name: "Good", sub: "Solid brilliance, better value", icon: "sparkle" },
    { name: "Fair / Poor", sub: "Light leaks out the sides/bottom", icon: "sparkle" },
  ],
};

/* ---------------- Talk Diamonds (objection handling scenarios) ---------------- */
const SCENARIOS = [
  {
    prompt: "A customer says: “Lab-grown is basically the same thing for a lot less money. Why would I pay more?”",
    options: [
      { text: "You're right, there's really no difference.", correct: false },
      { text: "Natural diamonds formed over 1 to 3 billion years and are far rarer, and each one is a one-of-a-kind piece of natural history. That's part of what you're giving.", correct: true },
      { text: "Lab-grown diamonds will hold their value better over time.", correct: false },
    ],
    goodFeedback: "Exactly! Lead with rarity, time, and story, not just the price tag.",
    badFeedback: "Not quite. That response gives away the natural diamond's real advantage. Focus on what makes it rare.",
    tip: "Focus on the story of rarity, time, and nature, not just price.",
  },
  {
    prompt: "A customer compares a natural diamond to a lab-grown diamond that looks similar in the case.",
    options: [
      { text: "They're basically the same, just different origins.", correct: false },
      { text: "Natural diamonds are billions of years old and incredibly rare. Each one is unique, shaped by nature.", correct: true },
      { text: "Lab-grown diamonds are better because they're more sustainable.", correct: false },
    ],
    goodFeedback: "Great choice! You're helping the customer see the unique story and value behind natural diamonds.",
    badFeedback: "Close, but that undersells the natural stone. Try again with the rarity angle.",
    tip: "Focus on the story of rarity, time, and nature, not just the price.",
  },
  {
    prompt: "A customer asks: “Isn't a diamond just a diamond? Why does it matter where it came from?”",
    options: [
      { text: "It doesn't really matter since they're chemically identical.", correct: false },
      { text: "Chemically they're similar, but a natural diamond carries a billion-year journey from deep in the Earth to this moment. That origin is part of the meaning.", correct: true },
      { text: "Lab-grown ones aren't real diamonds.", correct: false },
    ],
    goodFeedback: "Well handled! You kept it honest while still making the case for natural.",
    badFeedback: "Careful: never call lab-grown diamonds “fake.” They're real diamonds; the difference is origin and rarity.",
    tip: "Never call lab-grown \"fake\": they're real diamonds. Contrast origin and rarity, not authenticity.",
  },
  {
    prompt: "A customer says: “My friend got a bigger lab-grown diamond for the same price. Why should I pay more for a smaller natural one?”",
    options: [
      { text: "Size isn't everything, but our natural diamonds are just better quality overall.", correct: false },
      { text: "Natural diamonds are significantly rarer, which is why size-for-size they cost more. A lot of clients choose a slightly smaller natural stone because the rarity and resale value matter more to them than size alone.", correct: true },
      { text: "Lab-grown diamonds are a scam, so don't trust the price.", correct: false },
    ],
    goodFeedback: "Nicely reframed! You moved the conversation from size to what they're really buying.",
    badFeedback: "That's a little vague. Give the customer a concrete reason tied to rarity and value.",
    tip: "Reframe the comparison from \"size\" to \"rarity and value\": help them decide what they're really buying for.",
  },
  {
    prompt: "A customer worries: “Isn't natural diamond mining bad for the environment and unethical?”",
    options: [
      { text: "That doesn't happen anymore, don't worry about it.", correct: false },
      { text: "That's a great question. Every diamond we sell is certified conflict-free under the Kimberley Process, and the natural diamond industry today supports millions of livelihoods in mining communities around the world.", correct: true },
      { text: "We only sell lab-grown to customers who care about that.", correct: false },
    ],
    goodFeedback: "That's the right move: take the concern seriously and answer it directly with facts.",
    badFeedback: "Don't brush this one off. Customers who ask this want a real, specific answer.",
    tip: "Take ethical questions seriously. Lead with certification and community impact, don't dismiss the concern.",
  },
];

/* ---------------- Diamond Stories ---------------- */
const STORIES = [
  {
    id: "cullinan",
    tag: "Iconic Stones",
    title: "The Cullinan Diamond",
    teaser: "At 3,106 carats, the largest gem-quality rough diamond ever found, cut into nine major stones for the British Crown Jewels.",
    body: "Discovered in South Africa in 1905, the Cullinan was so large that its discoverer initially thought it was a piece of glass someone had thrown into the mine as a joke. It took master cutter Joseph Asscher months of study before he made the first cut, reportedly fainting from the pressure the moment the blade struck true.",
  },
  {
    id: "geology",
    tag: "Geology",
    title: "Diamonds Older Than Land Animals",
    teaser: "Most natural diamonds formed 1 to 3.5 billion years ago, before life had even moved onto land.",
    body: "When you hand a customer a natural diamond, you're handing them something that finished forming before the first fish crawled onto land, before dinosaurs, before almost every fossil ever found. That timescale is nearly impossible to manufacture. It's earned only by geology and time.",
  },
  {
    id: "provenance",
    tag: "Provenance",
    title: "Tracing a Stone From Mine to Case",
    teaser: "Modern tracking technology can follow a single natural diamond from the mine to the retail counter.",
    body: "Under the Kimberley Process and newer blockchain-based tracking programs, many natural diamonds today can be traced through every stage of their journey, giving customers a documented chain of custody most manufactured goods can't offer.",
  },
  {
    id: "craftsmanship",
    tag: "Craftsmanship",
    title: "The Cutter Who Studies a Stone for Weeks",
    teaser: "Master cutters can spend weeks planning a single cut before ever touching the wheel.",
    body: "For larger or unusually shaped rough stones, a master cutter will study internal inclusions and crystal structure for weeks, mapping out exactly where each facet should go to maximize brilliance and value, sometimes using specialized scanning tech, but always finishing by hand.",
  },
  {
    id: "communities",
    tag: "Communities",
    title: "Millions of Livelihoods, One Industry",
    teaser: "The natural diamond industry supports an estimated 10 million people worldwide, many in developing economies.",
    body: "From miners to sorters to cutters to setters, the natural diamond supply chain touches communities across Africa, Canada, Russia, and Australia, funding schools, hospitals, and infrastructure in regions where diamond mining is a major economic driver.",
  },
  {
    id: "hope",
    tag: "Iconic Stones",
    title: "The Hope Diamond's Deep Blue",
    teaser: "A rare 45.52-carat blue diamond, colored by trace boron atoms trapped during its formation billions of years ago.",
    body: "The Hope Diamond's striking blue color comes from trace amounts of boron present in the earth as it crystallized, a one-in-a-billion coincidence of geology. It's a vivid reminder that no two natural diamonds form under exactly the same conditions.",
  },
];

/* ---------------- Listen & Learn ---------------- */
const EPISODES = [
  { title: "How a Diamond Is Born", sub: "From ancient deep Earth to the surface.", dur: "5:21" },
  { title: "Natural vs. Lab-Grown", sub: "The key differences, simply explained.", dur: "6:08" },
  { title: "Why Are Natural Diamonds So Rare?", sub: "Rarity is more than just supply.", dur: "4:47" },
  { title: "Inside a Kimberlite Eruption", sub: "Nature's most powerful delivery system.", dur: "6:35" },
  { title: "How Cutting Changes Everything", sub: "From rough to radiance.", dur: "5:16" },
  { title: "The 4Cs, Explained Simply", sub: "Cut, color, clarity, and carat in plain English.", dur: "8:12" },
  { title: "Reading a Grading Report", sub: "What that certificate is actually telling you.", dur: "8:29" },
  { title: "5 Questions Customers Actually Ask", sub: "Smart answers you can use today.", dur: "7:12" },
];
