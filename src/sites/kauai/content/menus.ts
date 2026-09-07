import type { ContentRecord } from '@/platform/types';
import { CTA_QUOTE, PROVENANCE } from './shared';

/** Kauaʻi menus cluster (Table 4.2.3d rows 1–10): index + 9 menu pages. */
export const menus: ContentRecord[] = [
  {
    slug: 'menus',
    category: 'menu',
    title: 'Sample Menus Kauaʻi — Priced from the Published Card',
    h1: 'Menus, priced.',
    parent: '',
    meta: {
      description:
        'Sample menus from a Kauaʻi private chef: farm-to-table, coursed tastings, family-style, pūpū and grazing, breakfast and brunch — every menu prices from the published rate card.',
      ogImage: '/img/kauai/menu-hanalei-table.jpg',
    },
    intro:
      'These menus are starting points — the real one is written for your table after the menu call. Every menu prices from the published card; nothing here is a package with hidden math.',
    sections: [
      {
        heading: 'The menus',
        body: ['Nine menu pages, each with courses and the band it prices from:'],
        links: [
          { label: 'The Hanalei Table — farm-to-table', href: 'menus/farm-to-table' },
          { label: 'The Signature three-course', href: 'menus/signature-three-course' },
          { label: 'Family-style', href: 'menus/family-style' },
          { label: 'The tasting menu', href: 'menus/tasting-menu' },
          { label: 'Pūpū & grazing', href: 'menus/pupu-and-grazing' },
          { label: 'Breakfast & brunch', href: 'menus/breakfast-and-brunch' },
          { label: 'Vegetarian & vegan', href: 'menus/vegetarian-vegan' },
          { label: 'Gluten-free', href: 'menus/gluten-free' },
          { label: 'The kids’ table', href: 'menus/kids' },
        ],
      },
      {
        heading: 'Sourcing, named',
        body: [PROVENANCE],
        media: { src: '/img/kauai/market-hanalei.jpg', alt: 'Saturday Hanalei farmers market greens and fruit in soft morning light', ratio: '4/5' },
      },
      {
        heading: 'The price bands behind the menus',
        body: ['Every menu maps to a published band:'],
        list: [
          'Table — $125–$150/guest · family-style, brunch, kids’ tables',
          'Signature — $150–$250/guest · coursed dinners, the Hanalei Table',
          'Premium — $250–$350/guest · tasting menus, the best of the boats',
          'Chef’s Table — from $350/guest · quoted per event, every course named',
        ],
        links: [{ label: 'The full rate card', href: 'pricing' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef menus Kauai', 'sample menus Kauai chef'],
  },
  {
    slug: 'menus/farm-to-table',
    category: 'menu',
    title: 'Farm to Table Kauaʻi — The Hanalei Table',
    h1: 'The Hanalei Table.',
    parent: 'menus',
    meta: {
      description:
        'The Hanalei Table: a five-course farm-to-table menu sourced from Kauaʻi farms — Kunana Dairy, the Saturday Hanalei market, day-boat fish — at $165–$195 per guest, groceries included.',
      ogImage: '/img/kauai/menu-hanalei-table.jpg',
    },
    intro:
      'Kauaʻi’s farm-to-table claims usually mean “we bought vegetables.” This menu names the farms — and prints the claim only when the box actually came from that farm. $165–$195 a guest, groceries inside the band.',
    sections: [
      {
        heading: 'A menu that follows the market',
        body: ['Five courses, written from the Saturday Hanalei market run — a representative week:'],
        list: [
          'Kunana Dairy goat cheese, market greens, liliko‘i vinaigrette',
          'Taro two ways — the island’s patience, crisped and puréed',
          'Day-boat fish (when the boats went out), hearts of palm, citrus',
          'Kauaʻi grass-fed beef, roasted market roots, bone-marrow jus',
          'Liliko‘i three forms — curd, fresh, and burnt — with shortbread',
        ],
      },
      {
        heading: 'The provenance rule',
        body: [
          'A farm name appears on the menu only when that farm’s box is in the kitchen. When the boats don’t go out, the fish course becomes what the market honestly had — and the menu says so. Provenance on Kauaʻi is a discipline, not a garnish.',
          PROVENANCE,
        ],
      },
      {
        heading: 'The number',
        body: [
          '$165–$195 a guest inside the Signature band, groceries included, with the week’s sourcing driving where in the band it lands. Staffing and the fee stack itemize as always; the written quote names the courses before the deposit.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the menu fixed?',
        a: 'The architecture is — five courses, farm-anchored. The dishes follow the Saturday market; the written quote names the actual courses for your date.',
      },
      {
        q: 'Can the Hanalei Table be vegetarian?',
        a: 'Fully — the farms carry it. The vegetarian Hanalei Table is the same architecture with the produce at center rather than beside.',
      },
      {
        q: 'What’s the guest range?',
        a: 'Two to sixteen comfortably; larger tables add staffing at published hourlys and shift the format toward family-style platters of the same courses.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['farm to table Kauai', 'Hanalei farm dinner', 'Kauai farm dinner private chef'],
  },
  {
    slug: 'menus/signature-three-course',
    category: 'menu',
    title: 'Signature Three-Course Kauaʻi — The Default Evening',
    h1: 'The Signature three-course.',
    parent: 'menus',
    meta: {
      description:
        'The Signature three-course dinner on Kauaʻi: appetizer, main, dessert from $150–$250 per guest, groceries included — the most-booked format on the island.',
    },
    intro:
      'The most-booked evening we cook: three courses, written for your table, $150–$250 a guest with groceries inside the band. Where in the band depends on the fish, the farms, and how dressed-up the night is.',
    sections: [
      {
        heading: 'The architecture',
        body: ['Three courses, each with a decision to make together:'],
        list: [
          'First — raw or cooked: poke-style crudo, seared scallops, or the market salad done properly',
          'Main — from the boats or the land: day-boat fish, Kauaʻi grass-fed beef, or the vegetable centerpiece',
          'Dessert — the island’s sweet register: liliko‘i, coconut, chocolate, tropical fruit at actual ripeness',
        ],
      },
      {
        heading: 'Written for the table',
        body: [
          'The menu call settles the courses around your people: the anniversary dish, the kid who eats only pasta (accommodated beautifully, quietly), the celiac guest whose courses run on separate prep. The written quote names every course.',
        ],
      },
      {
        heading: 'Where the band flexes',
        body: [
          'A Tuesday-night family table with market fish lands at $150–$180. The celebration version — the best of the boats, the full register — runs $200–$250. Both include groceries; both leave the kitchen clean.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is $150–$250 the full cost per person?',
        a: 'For food and service, yes — groceries included. Shore surcharges ($50–$75 to Princeville/Poʻipū), 20% service, and GET up to 4.7120% appear on their own lines.',
      },
      {
        q: 'Can we see a menu before booking?',
        a: 'The menu draft is part of the quote — you approve actual named courses, not a promise of courses.',
      },
      {
        q: 'How many guests does it serve?',
        a: 'Two to sixteen as standard; beyond that the format adds crew or shifts family-style. The quote names the right shape for your headcount.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['three course private chef Kauai', 'signature dinner Kauai'],
  },
  {
    slug: 'menus/family-style',
    category: 'menu',
    title: 'Family-Style Catering Kauaʻi — Platters Down the Middle',
    h1: 'Family-style, the Kauaʻi register.',
    parent: 'menus',
    meta: {
      description:
        'Family-style catering on Kauaʻi: generous platters down the table at $125–$150 per guest, groceries included — the format for reunions, welcome dinners, and loud happy tables.',
    },
    intro:
      'The social format: big platters, long tables, seconds guaranteed. $125–$150 a guest, groceries inside — the band for reunions, welcome dinners, and every table that came to talk.',
    sections: [
      {
        heading: 'Why family-style wins the big table',
        body: [
          'Plated service choreographs; family-style liberates. Passing a platter is an introduction; going back for more is a compliment the kitchen can hear. For tables of ten to thirty — reunions, retreats, welcome dinners — it feeds the point of the gathering.',
          'The food itself doesn’t simplify: the same sourcing, the same care, portioned for abundance rather than architecture.',
        ],
      },
      {
        heading: 'A representative spread',
        body: ['Per table, generously:'],
        list: [
          'The market salad — Saturday’s greens, liliko‘i vinaigrette',
          'Day-boat fish, grilled whole or in portions, citrus and herbs',
          'Kauaʻi grass-fed beef, sliced, with its jus',
          'The vegetable platters — roasted roots, charred greens, rice done right',
          'Dessert boards — liliko‘i bars, tropical fruit, the chocolate thing',
        ],
      },
      {
        heading: 'The number',
        body: [
          '$125–$150 a guest with groceries inside; servers at $55/hr where you want full table service (one per 12–15 for family-style); the fee stack itemized. The retreat table runs this format daily — at scale it’s the most honest per-guest number we publish.',
        ],
        links: [{ label: 'Retreat meal plans', href: 'retreat-catering/meal-plans' }],
      },
    ],
    faq: [
      {
        q: 'Is family-style cheaper than plated?',
        a: 'Per guest, yes — the Table band ($125–$150) sits below Signature because plating labor drops, not because the food does. Staffing needs drop too: one server per 12–15 instead of 10–12.',
      },
      {
        q: 'Can dietary guests eat family-style safely?',
        a: 'Yes — flagged dishes are labeled on the table and separated in service; severe allergies get their own platters. The menu call settles it before the shopping.',
      },
      {
        q: 'What’s the minimum group?',
        a: 'Family-style shines from six up; below that, coursed service is usually the better evening for the same money.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['family style catering Kauai', 'group dinner Kauai', 'platters catering Kauai'],
  },
  {
    slug: 'menus/tasting-menu',
    category: 'menu',
    title: 'Tasting Menu Kauaʻi — Premium, Five to Seven Courses',
    h1: 'The tasting menu, island-sourced.',
    parent: 'menus',
    meta: {
      description:
        'Private tasting menus on Kauaʻi: five to seven courses at $250–$350 per guest, groceries included — the Premium band, with Chef’s Table formats from $350 quoted per event.',
    },
    intro:
      'The Premium band’s reason to exist: five to seven courses, the best of the boats and the farms, paced by the table rather than a reservation book. $250–$350 a guest, groceries included.',
    sections: [
      {
        heading: 'The arc',
        body: ['A representative arc, written from the week’s sourcing:'],
        list: [
          'Raw — the day-boat crudo, barely dressed',
          'From the market — one perfect vegetable, treated like the point',
          'From the sea — the fish course, sauced classically',
          'From the land — Kauaʻi grass-fed beef or the taro centerpiece',
          'The bridge — cheese or a savory-sweet pause',
          'Dessert — liliko‘i, chocolate, or both, arguing pleasantly',
        ],
      },
      {
        heading: 'Pacing as a feature',
        body: [
          'A tasting in your own dining room runs at the table’s speed: the pause for the sunset, the second bottle’s tempo, the conversation that shouldn’t be interrupted by a course. The kitchen reads the room because the room is yours.',
        ],
      },
      {
        heading: 'The number and the crew',
        body: [
          '$250–$350 a guest with groceries inside; a sous chef ($75/hr, 4-hour floor) joins the kitchen; servers ($55/hr) pace the room. Chef’s Table formats — counter seating, courses off the pass — quote from $350.',
        ],
        links: [{ label: 'Chef’s Table', href: 'services/chefs-table' }],
      },
    ],
    faq: [
      {
        q: 'What does a tasting menu for six cost?',
        a: 'Six at $250–$350 runs $1,500–$2,100 for food, plus the sous and a server at published hourlys, then the fee stack on its own lines. The written quote names every course and fixes the total.',
      },
      {
        q: 'Can the menu handle dietary flags?',
        a: 'Flags settle in the menu call — the tasting is written around them, so a pescatarian or gluten-free table gets a menu built that way, not a subtraction.',
      },
      {
        q: 'Wine pairings?',
        a: 'We write pairing notes for your bottles or your shop list; alcohol is client-supplied. The notes come free with the menu — the wine markup doesn’t.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['tasting menu Kauai private chef', 'premium dinner Kauai'],
  },
  {
    slug: 'menus/pupu-and-grazing',
    category: 'menu',
    title: 'Pūpū & Grazing Kauaʻi — The Standing Format',
    h1: 'Pūpū, grazing, the long golden hour.',
    parent: 'menus',
    meta: {
      description:
        'Pūpū and grazing catering on Kauaʻi: standing-format spreads and tray pass for welcome evenings, cocktail hours, and villa parties — quoted per event from published rates.',
    },
    intro:
      'The standing format: grazing boards, tray pass, the pūpū hour that becomes the evening. Quoted per event — the honest answer to “how much” depends on whether this is dinner or before-dinner.',
    sections: [
      {
        heading: 'Two registers',
        body: [
          'The pūpū hour — ninety minutes of tray pass and boards before a later dinner or as ceremony-adjacent cover. The grazing evening — the spread IS dinner, refreshed for hours, priced by headcount and depth.',
          'Both quote per event from the published structure; the quote states plainly whether the format feeds people or tides them over.',
        ],
      },
      {
        heading: 'The spread, representative',
        body: ['From the same sourcing as everything else:'],
        list: [
          'Poke done properly — the day’s fish, shoyu and sesame register',
          'Grilled and chilled skewers — beef, chicken, the vegetable versions',
          'The boards — Kunana Dairy cheeses, island fruit, crackers that matter',
          'Hot pass — taro fritters, the liliko‘i-glazed thing everyone remembers',
          'Sweet finish — liliko‘i bars, chocolate-dipped fruit',
        ],
      },
      {
        heading: 'Where it runs',
        body: [
          'Welcome evenings, wedding cocktail hours, retreat arrival nights, villa parties. Staffing runs one server per 15–20 standing guests at $55/hr; the bar cart pairs naturally ($850/4hr + $60/guest, alcohol client-supplied or licensed referral).',
        ],
        links: [
          { label: 'Villa parties', href: 'occasions/villa-party' },
          { label: 'The mobile bar', href: 'services/mobile-bar' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does a pūpū hour for 30 cost?',
        a: 'A ninety-minute tray-pass hour for thirty typically quotes $1,500–$2,400 depending on depth, plus two servers at published hourlys. The grazing-evening version runs higher; the written quote fixes the number.',
      },
      {
        q: 'Can grazing replace dinner?',
        a: 'Yes — the grazing-evening format is dinner, stated plainly on the quote. The pūpū-hour format is not, and we’ll say so if your timeline needs a meal.',
      },
      {
        q: 'Dietary guests at a standing format?',
        a: 'Labeled boards and a dedicated flagged pass — dietary guests eat as well as everyone, without hovering hopefully at the wrong board.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['pupu catering Kauai', 'grazing table Kauai', 'cocktail hour catering Kauai'],
  },
  {
    slug: 'menus/breakfast-and-brunch',
    category: 'menu',
    title: 'Breakfast & Brunch Chef Kauaʻi — The Morning Table',
    h1: 'The morning table, done properly.',
    parent: 'menus',
    meta: {
      description:
        'Private breakfast and brunch service on Kauaʻi: estate-week mornings, recovery brunches, holiday tables — island fruit at actual ripeness, priced from the Table band.',
    },
    intro:
      'Mornings are the Stay Chef week’s quiet glory — and standalone brunch is its own event format: recovery brunches, holiday mornings, the last-day table before the airport. Priced from the Table band.',
    sections: [
      {
        heading: 'The estate-week morning',
        body: [
          'Inside a Stay Chef week, breakfast is daily infrastructure: coffee ready when the house wakes, island fruit that’s actually ripe, eggs and pancakes for the kids, the good yogurt and granola, and a kitchen reset by the time the day starts.',
          'It’s the line item that converts families to the weekly format — nobody misses the resort buffet.',
        ],
        links: [{ label: 'Stay Chef weeks', href: 'stay-chef' }],
      },
      {
        heading: 'The standalone brunch',
        body: [
          'Quoted per event from the Table band logic ($125–$150/guest register, lighter formats quote lighter): the wedding-week recovery brunch, the holiday-morning table, the birthday-that’s-really-about-mimosas. Coffee that never stops; service that reads the morning’s pace.',
        ],
        links: [{ label: 'Recovery brunches', href: 'weddings/recovery-brunch' }],
      },
      {
        heading: 'What “local” means at breakfast',
        body: [
          'Apple bananas, papaya with lime, whatever the fruit stand had, island eggs when the farm has them, Portuguese-sausage register where the table wants it. Breakfast sourcing is the week’s most honest — the menu follows the fruit, not the flyer.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does brunch for 20 cost?',
        a: 'Brunch formats quote from the Table band register — typically $85–$125 per guest depending on spread and service — plus staffing at published hourlys and the fee stack itemized. The written quote fixes the line.',
      },
      {
        q: 'Is breakfast included in Stay Chef?',
        a: 'Breakfast service is part of the day-rate rhythm — the day rate covers the chef’s day; groceries run at cost with receipts. The quote itemizes what the week’s mornings look like.',
      },
      {
        q: 'Can you do an early breakfast before an excursion?',
        a: 'Yes — the 6 a.m. coffee-and-go spread before a boat day is a standard move, planned in the menu call.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['brunch chef Kauai', 'private breakfast Kauai', 'breakfast catering Kauai'],
  },
  {
    slug: 'menus/vegetarian-vegan',
    category: 'menu',
    title: 'Vegetarian & Vegan Private Chef Kauaʻi — The Farms Carry It',
    h1: 'Plant-forward menus the island makes easy.',
    parent: 'menus',
    meta: {
      description:
        'Vegetarian and vegan private chef menus on Kauaʻi: plant-forward coursed dinners at published rates, the farms doing the heavy lifting — a cuisine, never a subtraction.',
    },
    intro:
      'Kauaʻi is the easiest island in Hawaiʻi to cook plant-forward on: the farms are that good. Vegetarian and vegan menus run at the same published bands — a cuisine, never a subtraction.',
    sections: [
      {
        heading: 'The cuisine, not the compromise',
        body: [
          'A vegan Signature dinner here starts from the Saturday market’s best boxes and builds out: taro treated like the luxury it is, hearts of palm, mushrooms with actual char, liliko‘i doing dessert’s heavy lifting. The omnivore at the table doesn’t notice the register — that’s the test.',
          PROVENANCE,
        ],
      },
      {
        heading: 'Mixed tables, solved',
        body: [
          'Most tables are mixed: two vegans, six omnivores, one kid. Courses are built so the plant-based plates are dishes in their own right and the table shares most of the menu — no separate “veggie plate” exile.',
        ],
        links: [{ label: 'Dietary service, in depth', href: 'services/dietary' }],
      },
      {
        heading: 'The retreat-grade version',
        body: [
          'Multi-day plant-based programs — Ayurvedic-fluent weeks, detox formats — are a named product line for retreats, labeled dish by dish across the stay.',
        ],
        links: [{ label: 'Retreat dietary protocols', href: 'retreat-catering/dietary-protocols' }],
      },
    ],
    faq: [
      {
        q: 'Does a vegan menu cost the same?',
        a: 'Yes — the published bands hold. Plant-based cooking on Kauaʻi is sourcing-rich, not surcharge-worthy; the fee stack itemizes the same as every dinner.',
      },
      {
        q: 'Can you do a fully vegan tasting menu?',
        a: 'Yes — Premium band, five to seven courses, written from the week’s market. Some of our best-reviewed tables have been fully plant-based.',
      },
      {
        q: 'Vegetarian kids alongside?',
        a: 'Handled in the menu call — kids’ plates price honestly inside the quote, whatever the table’s register.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['vegetarian private chef Kauai', 'vegan chef Kauai', 'plant based chef Kauai'],
  },
  {
    slug: 'menus/gluten-free',
    category: 'menu',
    title: 'Gluten-Free Private Chef Kauaʻi — Disciplined, Not Apologetic',
    h1: 'Gluten-free, cooked with discipline.',
    parent: 'menus',
    meta: {
      description:
        'Gluten-free private chef menus on Kauaʻi: celiac-aware prep with dedicated equipment and sequenced service, at published rates — the honest paragraph about controls included, in writing.',
    },
    intro:
      'Gluten-free on Kauaʻi is a discipline question, not a menu question: the island’s food is naturally GF-leaning — fish, rice, taro, fruit — and the controls are what matter. Published bands; the honest controls paragraph, in writing.',
    sections: [
      {
        heading: 'The controls, stated plainly',
        body: [
          'Dedicated boards and pans, sequenced prep (GF first), separate oil, labeled storage, and service that knows which plate is which. We describe exactly these controls in writing before you commit — because for celiac guests, the description IS the product.',
          'The honest limit, also stated: we cook in rental kitchens, not certified facilities. Airborne flour in a kitchen that baked yesterday is a real thing; where risk tolerance is zero, we say what we can and cannot guarantee.',
        ],
      },
      {
        heading: 'The menu register',
        body: [
          'No sad substitutions: the day-boat fish was always GF, the taro was always GF, the dessert becomes liliko‘i panna cotta instead of a “flourless” apology. The table shares the menu; the celiac guest eats the same courses, controlled.',
        ],
        links: [{ label: 'The dietary guide', href: 'guides/dietary' }],
      },
      {
        heading: 'Every format holds',
        body: [
          'Dinners, Stay Chef weeks, retreat tables, wedding weeks — the controls travel with the crew. Retreats with celiac guests run the same protocol across every meal of the program.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is gluten-free service more expensive?',
        a: 'No — published bands hold. The cost is discipline, not ingredients, and discipline is included.',
      },
      {
        q: 'Safe for celiac guests?',
        a: 'With the stated controls, our celiac guests eat confidently — and the written controls paragraph lets you judge fit before committing. Severe-sensitivity edge cases get the honest answer, not the reassuring one.',
      },
      {
        q: 'Can the whole table eat GF without noticing?',
        a: 'Yes — often the cleanest solution. Kauaʻi’s cuisine makes it easy; nobody misses anything.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['gluten free private chef Kauai', 'celiac chef Kauai'],
  },
  {
    slug: 'menus/kids',
    category: 'menu',
    title: 'Kids’ Menu Private Chef Kauaʻi — Real Food, Smaller',
    h1: 'The kids’ table, taken seriously.',
    parent: 'menus',
    meta: {
      description:
        'Kids’ menus from a Kauaʻi private chef: real food sized and seasoned for small people, early seatings, allergy-safe prep — priced honestly inside the family quote.',
    },
    intro:
      'The kids’ table gets real food sized down, not a beige compromise: the same fish, less ceremony; the vegetables they’ll actually eat, cooked properly. Priced honestly inside the family quote.',
    sections: [
      {
        heading: 'The philosophy',
        body: [
          'Kids eat early, eat well, and eat food that respects them: grilled fish with rice, the pasta done properly, chicken that was never a nugget but might convert a nugget loyalist. And when the answer is buttered pasta three nights running — the pasta will be excellent.',
          'The menu call includes the kids’ actual preferences and the parents’ actual ambitions; the menu lands somewhere honest between.',
        ],
      },
      {
        heading: 'Logistics of the split table',
        body: [
          'Kids’ seating at five-thirty, adults at seven-thirty, one kitchen running both from the same market bag. On Stay Chef weeks the rhythm becomes infrastructure: breakfasts at their hour, beach coolers, the early dinner.',
        ],
        links: [{ label: 'Kid-friendly service, in depth', href: 'services/kids-menus' }],
      },
      {
        heading: 'Allergies, first',
        body: [
          'Kids’ allergies get the strictest controls in the kitchen: separate prep, labeled plates, and a house that stays nut-free for the whole booking when it needs to. Settled in the menu call, before any shopping.',
        ],
      },
    ],
    faq: [
      {
        q: 'What do kids’ plates cost?',
        a: 'Honest portions at honest prices, itemized inside the family quote — kids don’t carry the full adult per-guest band. The quote shows both lines.',
      },
      {
        q: 'Can the kids eat what we eat?',
        a: 'Often yes and happily — the same courses, simplified plating, earlier hour. Adventurous kids are the kitchen’s favorite critics.',
      },
      {
        q: 'Do you do a kids’ cooking session?',
        a: 'Yes — family cooking afternoons where the kids make lunch are some of the best hours we cook. Quoted from the published class structure.',
        links: [{ label: 'Cooking classes', href: '/kauai/services/cooking-classes' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['kids menu private chef Kauai', 'family friendly chef Kauai'],
  },
];
