import type { ContentRecord } from '@/platform/types';
import { CTA_QUOTE, CTA_RETREAT, PROVENANCE } from './shared';

/** Kauaʻi services cluster (Table 4.2.3a rows 9–26). Parent: private-chef unless noted. */
export const services: ContentRecord[] = [
  {
    slug: 'services/personal-chef',
    category: 'service',
    title: 'Personal Chef Kauaʻi — Weekly Cook Days & Kitchen Stocking',
    h1: 'A personal chef, in the island sense.',
    parent: 'private-chef',
    meta: {
      description:
        'Personal chef service on Kauaʻi: weekly cook days for resident households ($550–$1,200/week), fridge stocking, and recurring meals — groceries at cost, menus written down.',
    },
    intro:
      'The personal-chef relationship is recurring: the same kitchen, the same preferences, a fridge that fills itself. On Kauaʻi that runs as a weekly cook day for resident households — $550–$1,200 a week depending on volume — plus stocking for arriving guests.',
    sections: [
      {
        heading: 'The weekly cook day',
        body: [
          'One morning a week, your chef shops, cooks the household’s meals for the days ahead, labels and packs them, and leaves the kitchen clean. Menus are written down in advance and priced inside the published $550–$1,200 weekly band — the exact line depends on headcount and how many meals the week needs to cover.',
          PROVENANCE,
        ],
      },
      {
        heading: 'For visitors: stocking and the first night',
        body: [
          'If you’re arriving for a week rather than living here, the personal-chef shape is different: pre-arrival stocking so the fridge is full when you land, then dinners or a Stay Chef rhythm on top. Arrival-day stocking is quoted with the receipts attached — at cost, always.',
        ],
        links: [
          { label: 'Villa pre-stocking', href: 'services/grocery-stocking' },
          { label: 'Stay Chef weeks', href: 'stay-chef' },
        ],
      },
      {
        heading: 'The money, on its lines',
        body: [
          'Weekly service runs $550–$1,200 per week with groceries at cost and receipts. Single dinners, if you want them instead, run $125–$250 a guest with groceries inside the band. Either way, 20% service and GET up to 4.7120% appear on their own lines.',
        ],
        links: [{ label: 'The Kauaʻi rate card', href: 'pricing' }],
      },
    ],
    faq: [
      {
        q: 'What’s the difference between a personal and private chef here?',
        a: 'On Kauaʻi the practical split is cadence: personal chef means recurring household service (weekly cook days, stocking), private chef means event service (dinners, stays, celebrations). Same kitchen standard, same written quote.',
        links: [{ label: 'Private vs personal, compared', href: '/kauai/compare/private-vs-personal-chef' }],
      },
      {
        q: 'Do you serve year-round residents?',
        a: 'Yes — the kamaʻāina weekly line ($550–$1,200/week) exists for resident households, and it books month to month. December compression affects visitors first; resident weeks are protected by the calendar, not the season.',
      },
      {
        q: 'Which areas does weekly service cover?',
        a: 'Kāpaʻa–Līhuʻe and the near corridors as base; Princeville and Poʻipū carry the $50–$75 shore surcharge; far-North households past Hanalei are quoted at inquiry with the 72-hour bridge notice.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['personal chef Kauai', 'weekly chef Kauai', 'kitchen stocking Kauai'],
  },
  {
    slug: 'services/vacation-chef',
    category: 'service',
    title: 'Vacation Chef Kauaʻi — A Chef for Your Rental',
    h1: 'The rental has a kitchen. Use it.',
    parent: 'private-chef',
    meta: {
      description:
        'A chef for your Kauaʻi vacation rental: arrival dinners from $150/guest, Stay Chef weeks from $1,100/day, pre-arrival stocking at cost. Villas, estates, and plantation houses on both shores.',
    },
    intro:
      'Kauaʻi visits average over a week, and the good rentals have real kitchens. A vacation chef turns the rental into the best table on the trip: arrival dinner the first night, a few coursed evenings, or the full Stay Chef week.',
    sections: [
      {
        heading: 'Three shapes of the trip',
        body: [
          'One dinner — the arrival-night table, $125–$250 a guest depending on tier, groceries inside the band. A few evenings — date night for the parents while the kids eat early, a celebration midweek. The full week — Stay Chef from $1,100 a day, groceries at cost with receipts.',
          'Concierge desks at the island’s villa agencies arrange exactly this today, one dinner at a time. Booking direct gets you the written quote instead of the phone chain.',
        ],
        links: [
          { label: 'Stay Chef, from $1,100/day', href: 'stay-chef' },
          { label: 'Arrival-night menus', href: 'menus' },
        ],
      },
      {
        heading: 'The kitchen check',
        body: [
          'Before we quote, we ask about the kitchen: four burners, an oven, counter space, running water. Most Kauaʻi rental kitchens pass easily; the ones that don’t get told early, with alternatives. Hotel rooms without kitchens are declined — a coffee maker is not a kitchen.',
        ],
        links: [{ label: 'What a kitchen needs', href: 'guides/villa-kitchen' }],
      },
      {
        heading: 'Arrive to a full fridge',
        body: [
          'Pre-arrival stocking pairs with any booking: breakfast things, fruit, coffee, the good poke if the shop has it — bought at cost, receipts attached, put away before you land. On an island where the nearest market might be forty minutes of two-lane road, the first morning matters.',
        ],
        links: [{ label: 'Villa pre-stocking', href: 'services/grocery-stocking' }],
      },
    ],
    faq: [
      {
        q: 'Can you cook in any vacation rental?',
        a: 'Any rental with a workable kitchen — stove, oven, counter, water. We check the kitchen before quoting, bring the kit the kitchen lacks, and tell you honestly if a condo galley won’t support your headcount.',
      },
      {
        q: 'What does a vacation chef week cost on Kauaʻi?',
        a: 'Stay Chef runs from $1,100 per day plus groceries at cost; individual dinners run $125–$250 per guest with groceries included. Shore surcharges of $50–$75 apply to Princeville and Poʻipū.',
        links: [{ label: 'The rate card', href: '/kauai/pricing' }],
      },
      {
        q: 'We’re splitting a house between two families — does that work?',
        a: 'It’s the most common Kauaʻi booking shape: 8–12 people, one kitchen, mixed dietary needs. Per-guest pricing makes splitting the bill arithmetic, and kids’ menus run alongside the adult table without a second contract.',
        links: [{ label: 'Kids’ menus', href: '/kauai/services/kids-menus' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['in-villa chef Kauai', 'chef for vacation rental Kauai', 'vacation chef Kauai'],
  },
  {
    slug: 'services/date-night',
    category: 'service',
    title: 'Private Chef for Two Kauaʻi — Date Night $650–$950',
    h1: 'Dinner for two, priced as dinner for two.',
    parent: 'private-chef',
    meta: {
      description:
        'Date Night on Kauaʻi: a coursed dinner for two, $650–$950 fixed with groceries included. Proposals, anniversaries, honeymoons — at your villa, at the hour the light is right.',
    },
    intro:
      'Two-person economics are real — the market charges $210 a head for a table of two on Kauaʻi. Our Date Night is a fixed $650–$950 for the evening: coursed menu, groceries inside, the fee stack on its own lines, no per-guest multiplier games.',
    sections: [
      {
        heading: 'The evening',
        body: [
          'Your chef arrives before you’ve thought about it, cooks a coursed menu agreed in writing, serves at the pace the evening wants, and leaves the kitchen clean before the last course lands. On a veranda in Hanalei or a lānai in Poʻipū, the restaurant is wherever you’re staying.',
          'The $650–$950 band flexes with the menu — a Table-tier evening at the low end, a Premium tasting with the good fish at the top. The number is fixed in the written quote before you commit.',
        ],
        links: [{ label: 'Proposal dinners', href: 'occasions/proposal' }],
      },
      {
        heading: 'What the price buys',
        body: [
          'Everything except the wine: menu design, that day’s shopping, the cooking, the service, the cleanup. Groceries are inside the fixed price. The 20% service charge and GET up to 4.7120% appear on their own lines — on a fixed price, that transparency is the whole point.',
        ],
      },
      {
        heading: 'Pairings people add',
        body: [
          'A photographer for the proposal hour (we time the courses around it, never through it). Flowers placed before we arrive. A next-morning brunch cooked in the same kitchen. All quoted separately, in writing, before the date is held.',
        ],
        links: [{ label: 'Anniversary dinners', href: 'occasions/anniversary' }],
      },
    ],
    faq: [
      {
        q: 'Is $650–$950 really the whole cost?',
        a: 'It is the whole food cost — menu, shopping, cooking, service, cleanup, groceries inside. Added on their own lines: 20% service and Hawaiʻi GET up to 4.7120%. Travel surcharges apply only to Princeville/Poʻipū ($50–$75) and far-North quotes.',
      },
      {
        q: 'Can you do a proposal dinner without giving it away?',
        a: 'Yes — we’ve timed dessert courses around rings before. Tell us the plan in the inquiry; the chef works to your signal, and the kitchen stays invisible until it’s supposed to.',
        links: [{ label: 'Proposal dinners on Kauaʻi', href: '/kauai/occasions/proposal' }],
      },
      {
        q: 'What’s the lead time for two people?',
        a: 'Two weeks is comfortable; December and Valentine’s week compress everything. Far-North locations past Hanalei need 72 hours minimum under the bridge clause.',
      },
    ],
    cta: { ...CTA_QUOTE, secondaryLabel: 'Elopement dinners', secondaryHref: 'weddings/elopement' },
    keywords: ['private chef for two Kauai', 'date night chef Kauai', 'romantic dinner Kauai'],
  },
  {
    slug: 'services/meal-prep',
    category: 'service',
    title: 'Meal Prep Chef Kauaʻi — From $550–$1,200 a Week',
    h1: 'The week, cooked ahead.',
    parent: 'private-chef',
    meta: {
      description:
        'Meal prep chef service on Kauaʻi from $550–$1,200 a week: a weekly cook day, labeled and packed meals, dietary flags handled, groceries at cost with receipts.',
    },
    intro:
      'A weekly cook day for households that eat well and don’t want to think about it: your chef shops, cooks, packs, and labels the week’s meals in one session. Published band: $550–$1,200 a week, groceries at cost.',
    sections: [
      {
        heading: 'How the cook day runs',
        body: [
          'Menus are agreed in writing midweek; shopping happens the morning of the cook day; by early afternoon the fridge holds labeled, dated meals with reheating notes. The kitchen is left clean, and the receipts are attached to the invoice.',
          'The $550–$1,200 band flexes with household size and meal count — a couple eating five dinners lands low; a family with kids’ lunches and dietary splits lands higher. The written quote fixes the line before the first cook day.',
        ],
      },
      {
        heading: 'Dietary depth as standard',
        body: [
          'Meal prep is where dietary discipline matters most — the same flags every week, no drift. Eleven standard flags (vegetarian, vegan, gluten-free, halal, kosher-style, dairy-free, nut-free, keto, pescatarian, low-sodium, diabetic-friendly) with separate prep for allergens, labeled container by container.',
        ],
        links: [{ label: 'Dietary service', href: 'services/dietary' }],
      },
      {
        heading: 'Visitor version: the stocked fridge',
        body: [
          'Visiting rather than residing? The same service shapes into pre-arrival stocking and a mid-stay refresh for rental weeks — at cost with receipts, quoted before you land.',
        ],
        links: [{ label: 'Villa pre-stocking', href: 'services/grocery-stocking' }],
      },
    ],
    faq: [
      {
        q: 'What’s included in the weekly band?',
        a: 'The cook day itself: planning, shopping, cooking, packing, labeling, cleanup. Groceries are billed at cost with receipts on top of the band. The 20% service charge and GET appear on their own lines, as everywhere.',
      },
      {
        q: 'Which areas do you cover for weekly prep?',
        a: 'Kāpaʻa–Līhuʻe base; Princeville and Poʻipū carry the $50–$75 shore surcharge; far-North past Hanalei is quoted at inquiry with 72-hour notice.',
      },
      {
        q: 'Can meals be frozen?',
        a: 'Where the dish survives freezing, yes — and the label says so. Island fish and market greens are written into the first half of the week; braises and soups carry the back half. The menu plan sequences it for you.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['meal prep chef Kauai', 'weekly meal prep Kauai', 'personal chef meal prep Kauai'],
  },
  {
    slug: 'services/cooking-classes',
    category: 'service',
    title: 'Private Cooking Classes Kauaʻi — In Your Kitchen',
    h1: 'Learn the island’s food in your own kitchen.',
    parent: 'private-chef',
    meta: {
      description:
        'Private cooking classes on Kauaʻi: market-to-table sessions in your rental kitchen — knife work, local fish, lilikoi everything. Quoted per session from the Signature band.',
    },
    intro:
      'A hands-on session in your kitchen: the morning’s market fish, knife work, the difference between good poke and great poke, and a meal you cooked at the end of it. Quoted per session from the published bands — no invented class pricing.',
    sections: [
      {
        heading: 'The format',
        body: [
          'Two to three hours, up to six hands-on students at the counter (more can watch and eat). The session ends at the table: what you made is lunch or dinner. Pricing follows the published per-guest bands — Signature $150–$250 per guest, groceries inside — because a class is a dinner with better stories.',
          'For kids, the format shifts to shorter attention spans and safer knives; family classes are some of the best afternoons we cook.',
        ],
        links: [{ label: 'Kids at the table', href: 'services/kids-menus' }],
      },
      {
        heading: 'What we teach on Kauaʻi',
        body: [
          'The island curriculum writes itself: breaking down a whole reef fish, taro and its patience, lilikoi in three forms, the Saturday-market greens and what to actually do with them. Sessions follow what the market had that morning — that’s the lesson too.',
        ],
        links: [{ label: 'The Hanalei market, explained', href: 'guides/groceries-at-cost' }],
      },
      {
        heading: 'For retreats and groups',
        body: [
          'A cooking afternoon slots neatly into retreat programming — the wet-day answer on the North Shore, the rest-day answer everywhere. Quoted inside the retreat contract as its own line.',
        ],
        links: [{ label: 'Retreat catering', href: 'retreat-catering' }],
      },
    ],
    faq: [
      {
        q: 'How much does a private cooking class cost?',
        a: 'Sessions price from the published bands — $150–$250 per guest, groceries included, with the fee stack itemized. The written quote fixes the number before the date is held.',
      },
      {
        q: 'Do you come to our rental?',
        a: 'Yes — classes run in your kitchen, which is half the point. We check the kitchen first (counter space matters more for classes than dinners) and bring whatever the rental lacks.',
      },
      {
        q: 'Can kids join?',
        a: 'Absolutely — family classes are built around ages and attention spans, with real tasks for small hands and none of the danger. Say the ages in the inquiry and we shape the session.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['cooking class Kauai private', 'private cooking lesson Kauai'],
  },
  {
    slug: 'services/fine-dining',
    category: 'service',
    title: 'Fine Dining at Home Kauaʻi — Premium & Chef’s Table',
    h1: 'The tasting menu, without the dining room.',
    parent: 'private-chef',
    meta: {
      description:
        'Fine dining at home on Kauaʻi: Premium tastings $250–$350 per guest and Chef’s Table from $350+, plated and paced in your villa or estate — groceries inside the band.',
    },
    intro:
      'The upper tiers of the published card: Premium at $250–$350 a guest, Chef’s Table from $350. Longer menus, better fish, more hands in the kitchen — the restaurant experience relocated to your veranda.',
    sections: [
      {
        heading: 'What Premium buys',
        body: [
          'Five to seven courses, day-boat fish and the farms’ best boxes, a sous chef in the kitchen, and pacing set by the table rather than a reservation book. Groceries inside the band; service staff on their own lines.',
          PROVENANCE,
        ],
      },
      {
        heading: 'Chef’s Table, from $350',
        body: [
          'The counter format: the kitchen becomes the room, courses arrive off the pass with the story attached, and the menu is written for your table alone. Quoted per event from $350 a guest — the written quote names every course before the deposit.',
        ],
        links: [{ label: 'The Chef’s Table page', href: 'services/chefs-table' }],
      },
      {
        heading: 'Where it works best',
        body: [
          'Estate kitchens and big plantation verandas — Princeville bluff houses in summer, Poʻipū garden estates in winter. A Premium tasting wants counter space and a working oven; the kitchen check happens before the quote, not at the door.',
        ],
        links: [
          { label: 'Princeville', href: 'locations/princeville' },
          { label: 'Poʻipū', href: 'locations/poipu' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does fine dining at home cost on Kauaʻi?',
        a: 'Premium tastings run $250–$350 per guest and Chef’s Table formats from $350, groceries inside the band. Staffing ($55/hr servers, $75/hr sous, 4-hour floor) and the fee stack are itemized separately.',
      },
      {
        q: 'How many guests can a tasting menu serve?',
        a: 'Tastings are built for two to twelve; beyond that the format becomes a coursed reception with extra crew. We’ll tell you where the line lands for your kitchen and headcount — in the quote, not on the night.',
      },
      {
        q: 'Can the menu be built around an occasion?',
        a: 'That’s the default. Anniversaries, milestones, the last night of the trip — the menu call happens after we know what the evening means, and every course is named in the written quote.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['fine dining at home Kauai', 'tasting menu private chef Kauai'],
  },
  {
    slug: 'services/chefs-table',
    category: 'service',
    title: 'Chef’s Table Kauaʻi — From $350 a Guest',
    h1: 'The kitchen is the room.',
    parent: 'services/fine-dining',
    meta: {
      description:
        'Chef’s Table on Kauaʻi from $350 a guest: counter seating, courses off the pass, a menu written for your table alone. Quoted per event, every course named in writing.',
    },
    intro:
      'The top of the card: a counter, a chef, and a menu that exists once. From $350 a guest, quoted per event — the written quote names every course before any deposit moves.',
    sections: [
      {
        heading: 'The format',
        body: [
          'Four to eight seats at the counter or the kitchen table; seven-plus courses arriving off the pass with the provenance attached — which farm, which boat, why this course follows that one. The evening runs two and a half to three hours and ends when you say it ends.',
          'Chef’s Table seats are the scarcest thing we sell on Kauaʻi — one crew, one evening. Inquiry-first is literal here: we confirm the crew before we hold the date.',
        ],
      },
      {
        heading: 'The menu conversation',
        body: [
          'Two calls: the first about the table (who, what the evening marks, what nobody eats), the second about the menu itself, written out course by course with the farms named. Nothing is a surprise except the parts meant to be.',
          PROVENANCE,
        ],
      },
      {
        heading: 'Kitchen requirements',
        body: [
          'A real kitchen with counter seating or a table within sight of the stove; estate kitchens are ideal. We bring the kit the kitchen lacks, but we can’t bring the room — hotel suites need not apply.',
        ],
        links: [{ label: 'What a kitchen needs', href: 'guides/villa-kitchen' }],
      },
    ],
    faq: [
      {
        q: 'Why is Chef’s Table quoted rather than fixed?',
        a: 'Because the menu is written per table — the fish that week, the farms’ boxes, your occasion. From $350 a guest is the published floor; the written quote fixes the exact number with every course named.',
      },
      {
        q: 'How far ahead do we need to ask?',
        a: 'A month is comfortable; December and the summer prime book further out. The constraint is crew, not ingredients — one team does one Chef’s Table an evening.',
      },
      {
        q: 'Can dietary flags survive a tasting menu?',
        a: 'Yes — flags are settled in the menu call, not at the pass. Separate prep for allergens is standard; a vegan Chef’s Table is a different menu written with the same care, not a subtraction.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ["chef's table Kauai", 'private chef tasting Kauai'],
  },
  {
    slug: 'services/honeymoon-dinners',
    category: 'service',
    title: 'Honeymoon Private Chef Kauaʻi — Dinners for Two',
    h1: 'The honeymoon table, without the reservation app.',
    parent: 'private-chef',
    meta: {
      description:
        'Honeymoon private chef dinners on Kauaʻi: Date Night $650–$950 fixed, or a private dinner rhythm across the week. Both shores — Hanalei verandas to Poʻipū gardens.',
    },
    intro:
      'The honeymoon week deserves better than seven straight reservations. One or two private dinners in your own space — $650–$950 fixed for two — and the rest of the week is yours to keep lazy.',
    sections: [
      {
        heading: 'The one great dinner',
        body: [
          'Most honeymoon bookings are a single Date Night: a coursed menu, the good fish, served on your veranda at the hour the light comes through the trees. $650–$950 fixed, groceries inside, fee stack itemized — a known number in a week of unknown ones.',
          'Time it for the second or third night, after the travel fog lifts. We’ll say the same in the inquiry reply; nobody’s best dinner happens on landing day.',
        ],
        links: [{ label: 'Date Night, in detail', href: 'services/date-night' }],
      },
      {
        heading: 'The rhythm version',
        body: [
          'Two or three dinners across the week — a Table-tier family-style night early, a Premium tasting for the last evening — reads like a food trip without a single drive. Multi-dinner weeks quote as their own lines; the Stay Chef day rate applies if you want mornings covered too.',
        ],
        links: [{ label: 'Stay Chef weeks', href: 'stay-chef' }],
      },
      {
        heading: 'Where honeymooners stay, we cook',
        body: [
          'Hanalei and Princeville for the summer prime, Poʻipū and Kōloa for the winter sun, the Kīlauea estate corridor year-round. The kitchen check is the only gate: a real stove, a counter, and we handle the rest.',
        ],
        links: [
          { label: 'Hanalei', href: 'locations/hanalei' },
          { label: 'Poʻipū', href: 'locations/poipu' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does a honeymoon dinner for two cost?',
        a: 'Date Night is $650–$950 fixed with groceries included; 20% service and GET up to 4.7120% appear on their own lines. Princeville and Poʻipū add the $50–$75 shore surcharge.',
      },
      {
        q: 'Can you arrange flowers or a photographer?',
        a: 'We coordinate timing with photographers for proposal-style moments and can suggest where flowers come from, but we sell food and service — additions are quoted separately and never bundled invisibly.',
      },
      {
        q: 'We’re staying in a condo, not an estate — is that fine?',
        a: 'If the kitchen works, yes. Condo kitchens on Kauaʻi are often better than rental-villa ones; the kitchen check happens before the quote either way.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['honeymoon private chef Kauai', 'honeymoon dinner Kauai'],
  },
  {
    slug: 'services/estate-week-chef',
    category: 'service',
    title: 'Estate Chef Kauaʻi — The Week, Bundled Honestly',
    h1: 'The estate week, staffed end to end.',
    parent: 'stay-chef',
    meta: {
      description:
        'An estate-week chef on Kauaʻi: Stay Chef from $1,100/day across a 5–7 night buyout, event nights crewed at published rates, groceries at cost. Bluff estates sleeping 8–16, both shores.',
    },
    intro:
      'North Shore bluff estates rent at $3,750–$8,250 a night with seven-night minimums, and today their chef service arrives one concierge phone call at a time. The estate week bundles it: one chef, one contract, the whole stay.',
    sections: [
      {
        heading: 'What the week includes',
        body: [
          'The Stay Chef day rate (from $1,100) covers the daily rhythm: breakfasts, provisioning, dinners, the kitchen reset. Event nights inside the week — a welcome dinner for fourteen, a birthday evening — add crew at published rates: servers $55/hr, sous chefs $75/hr, 4-hour floor.',
          'Groceries run at cost with receipts; the pantry plan is written before arrival so the first morning is already handled. No invented weekly discount — the written quote is the total, itemized by day.',
        ],
        links: [{ label: 'Stay Chef cost, worked by the day', href: 'pricing/stay-chef-cost' }],
      },
      {
        heading: 'The houses this fits',
        body: [
          'Eight to sixteen guests across five to seven nights: bluff estates above Hanalei Bay, the Kīlauea estate corridor, big Poʻipū plantation houses, the Kukuiʻula rentals whose guests aren’t club members. If the house has a kitchen and the week has a shape, the product fits.',
          PROVENANCE,
        ],
        links: [
          { label: 'Stay Chef in Princeville', href: 'locations/princeville/stay-chef' },
          { label: 'A chef for the week in Hanalei', href: 'locations/hanalei/stay-chef' },
        ],
      },
      {
        heading: 'Booking it without the concierge markup',
        body: [
          'Villa agencies arrange this today through their desks; booking direct gets the same island crew with the written quote in your hands first. We work cleanly with house managers either way — access, gate codes, and house rules are settled before the chef drives out.',
        ],
        links: [{ label: 'For villa managers', href: 'partners/villa-managers' }],
      },
    ],
    faq: [
      {
        q: 'What does an estate week cost all-in?',
        a: 'Seven days of Stay Chef runs from $7,700 for the chef’s time, plus groceries at cost and any staffed event nights at published hourly rates — then 20% service and GET on their own lines. The written quote itemizes every day before the deposit.',
        links: [{ label: 'The worked math', href: '/kauai/pricing/stay-chef-cost' }],
      },
      {
        q: 'Can the chef handle both quiet days and a 20-guest night?',
        a: 'Yes — that’s the product. Rhythm days run on the day rate; event nights add servers and sous chefs at $55/$75 an hour. One contract covers both, so nobody renegotiates midweek.',
      },
      {
        q: 'Do you serve far-North estates past Hanalei?',
        a: 'With 72-hour notice and the bridge clause in writing: documented closures reschedule rather than forfeit, and the pantry plan is built so the road can’t starve the week.',
        links: [{ label: 'The bridge clause', href: '/kauai/guides/hanalei-bridge-clause' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['estate chef Kauai', 'chef for estate buyout Kauai', 'private estate chef Kauai'],
  },
  {
    slug: 'services/wellness-menus',
    category: 'service',
    title: 'Wellness Retreat Menus Kauaʻi — Protocol-Labeled',
    h1: 'Wellness menus with the labels printed.',
    parent: 'retreat-catering',
    meta: {
      description:
        'Wellness retreat menus on Kauaʻi: plant-based, Ayurvedic-fluent, detox and raw-leaning menu families, labeled dish by dish — built for retreats, priced from published Stay Chef rates.',
    },
    intro:
      'Retreat guests book for the protocol; the menu should speak it. Our wellness menu families — plant-based, Ayurvedic-fluent, detox, raw-leaning, paleo — carry labels dish by dish, built from Kauaʻi farms and priced from the published card.',
    sections: [
      {
        heading: 'The menu families',
        body: [
          'Plant-based as a cuisine, not a subtraction. Ayurvedic-fluent menus built with the retreat’s own program notes — kitchari days where the schedule calls for them. Detox and raw-leaning formats for the reset weeks. Paleo and clean-omnivore lines for mixed tables.',
          'Every dish carries its labels; allergens get separate prep. The vocabulary comes from the venues themselves — it’s how Kauaʻi retreats already describe their food, finally matched by a caterer.',
        ],
        links: [{ label: 'The full protocol matrix', href: 'retreat-catering/dietary-protocols' }],
      },
      {
        heading: 'Sourced from the island’s farms',
        body: [
          PROVENANCE,
          'Wellness menus lean hardest on the Saturday Hanalei market: the week’s greens, herbs, and fruit are bought there for North Shore programs, and the menu follows the boxes rather than the other way round.',
        ],
      },
      {
        heading: 'Priced like everything else: openly',
        body: [
          'Wellness menus price from the same published structure — Stay Chef from $1,100 a day, full-board plans in the $250–$300+ per-person/day range, itemized by day in the written quote. Protocol depth costs what it costs; the quote shows where.',
        ],
        links: [{ label: 'Retreat meal-plan pricing', href: 'retreat-catering/meal-plans' }],
      },
    ],
    faq: [
      {
        q: 'Can menus follow our retreat’s own program?',
        a: 'Yes — send the program notes and the menu family is built around them: cleanse days, feast nights, caffeine rules, all of it. The menu draft comes back labeled dish by dish before the contract.',
      },
      {
        q: 'Do you cook Ayurvedic food specifically?',
        a: 'Ayurvedic-fluent, honestly stated: kitchari, kitchari variations, warm breakfasts, spiced-but-not-hot builds aligned to program notes. We cook to your practitioner’s or host’s specification and label accordingly.',
      },
      {
        q: 'What about a mixed table — some guests eat everything?',
        a: 'The omnivore line runs alongside, never as an afterthought. Mixed tables are the norm on Kauaʻi retreats; the written quote shows both lines so hosts see exactly what each guest’s week costs.',
      },
    ],
    cta: CTA_RETREAT,
    keywords: ['wellness retreat menus Kauai', 'plant-based retreat catering Kauai', 'Ayurvedic chef Kauai'],
  },
  {
    slug: 'services/mobile-bar',
    category: 'service',
    title: 'Mobile Bar Kauaʻi — $850/4hr + $60 a Guest',
    h1: 'The bar cart, priced like everything else.',
    parent: 'catering',
    meta: {
      description:
        'Mobile bar service on Kauaʻi: packaged cart $850 per four hours plus $60 a guest, with alcohol client-supplied or via licensed referral — we do not sell alcohol. Itemized, in writing.',
    },
    intro:
      'A packaged bar cart for estate evenings and wedding weeks: $850 for four hours plus $60 a guest, staffing included in the structure, alcohol itself client-supplied or arranged through a licensed bartending referral. We do not sell alcohol — that line is printed, not implied.',
    sections: [
      {
        heading: 'What the package covers',
        body: [
          'The cart and its setup, ice, glassware coordination, garnish and mixers built from the same market run as the food, and bartender service across the four hours. The per-guest line scales the package to the table; over four hours extends at the quoted rate.',
          'Alcohol posture, verbatim: client-supplied or via licensed bartending referral. Kauaʻi County’s liquor rules are its own; we keep to them and put the posture on every quote.',
        ],
        links: [{ label: 'Alcohol and bar, explained', href: 'guides/alcohol-and-bar' }],
      },
      {
        heading: 'Where the cart earns its keep',
        body: [
          'Welcome dinners where the pūpū hour runs long, wedding-week receptions under tree cover, retreat closing nights that want two good cocktails and not a party. The cart travels with the crew — shore surcharges follow the same $50–$75 lines as the kitchen.',
        ],
        links: [{ label: 'Wedding-week formats', href: 'weddings/wedding-week' }],
      },
      {
        heading: 'The math, itemized',
        body: [
          'Cart $850 + $60 × guests + the fee stack on its own lines. Twenty guests: $850 + $1,200 = $2,050 before service and GET. Every line published; the written quote is the confirmed total.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do you supply the alcohol?',
        a: 'No — alcohol is client-supplied or arranged through a licensed bartending referral. We provide the cart, the service, the mixers and garnish; that posture is printed on every quote and never fudged.',
        links: [{ label: 'The alcohol guide', href: '/kauai/guides/alcohol-and-bar' }],
      },
      {
        q: 'What does a bar for 30 guests cost?',
        a: 'The package math: $850 for four hours plus $60 × 30 = $2,650, before 20% service and GET on their own lines. Alcohol is your purchase — we’ll advise quantities honestly.',
      },
      {
        q: 'Can the cart run alongside a dinner?',
        a: 'Yes — the common pairing is cart for the arrival hour, then dinner service. One crew, one quote, both lines itemized.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['mobile bar Kauai', 'bar cart catering Kauai', 'event bartender Kauai'],
  },
  {
    slug: 'services/staffing',
    category: 'service',
    title: 'Event Staffing Kauaʻi — Servers $55/hr, Sous $75/hr',
    h1: 'Crew, at published hourly rates.',
    parent: 'catering',
    meta: {
      description:
        'Event staffing on Kauaʻi at published rates: servers $55/hr, sous chefs $75/hr, 4-hour floor. Inquiry-stage honesty — we confirm the crew before we hold the date.',
    },
    intro:
      'Servers at $55 an hour, sous chefs at $75, a 4-hour floor — published, itemized, and honest about the island’s thin labor pool: we confirm the crew exists before the date is held, never after.',
    sections: [
      {
        heading: 'The planning math',
        body: [
          'One server per 10–12 seated guests, one per 15–20 standing. A sous joins any table over eight or any coursed menu. The 4-hour floor covers load-in through cleanup; longer events extend at the same hourly lines.',
          'Staffing is quoted with the event, not discovered after it: the written quote names the crew size and the hours before the deposit.',
        ],
        links: [{ label: 'Catering on Kauaʻi', href: 'catering' }],
      },
      {
        heading: 'Inquiry-stage, honestly',
        body: [
          'Kauaʻi’s chef-and-server pool is thin — that’s market fact, not modesty. Our posture: we never hold a date we can’t crew. If the roster can’t cover your date, you hear it in the inquiry reply, not the week of the event.',
          'This is why the deposit only ever follows the written quote. The quote exists when the crew exists.',
        ],
      },
      {
        heading: 'The roles',
        body: ['Three lines, all published:'],
        list: [
          'Servers — $55/hr, 4-hour floor · table service, tray pass, reset',
          'Sous chefs — $75/hr, 4-hour floor · the second pair of hands any menu over eight guests needs',
          'Butlers and bartenders — quoted per event, referral-based where licensing applies',
        ],
        links: [
          { label: 'Servers', href: 'services/staffing/servers' },
          { label: 'Bartenders', href: 'services/staffing/bartenders' },
          { label: 'Butlers', href: 'services/staffing/butlers' },
        ],
      },
    ],
    faq: [
      {
        q: 'Can we book staff without a chef?',
        a: 'Staffing-only requests are quoted at inquiry and depend on the roster; the published hourly lines apply either way. Most staffing travels with our food — that’s where the coordination value lives.',
      },
      {
        q: 'What does staffing a 40-guest reception cost?',
        a: 'Planning math: three to four servers and a sous across a five-hour evening runs roughly $1,300–$1,600 at the published rates, itemized in the quote before you commit.',
      },
      {
        q: 'Do staff travel to the far North Shore?',
        a: 'With the same rules as the kitchen: 72-hour notice past Hanalei, the bridge clause in writing, shore surcharges itemized. We crew it if the calendar and the road allow — and say so early if they don’t.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['event staffing Kauai', 'servers for hire Kauai', 'event crew Kauai'],
  },
  {
    slug: 'services/staffing/servers',
    category: 'service',
    title: 'Event Servers Kauaʻi — $55 an Hour, 4-Hour Floor',
    h1: 'Servers who know the estate drill.',
    parent: 'services/staffing',
    meta: {
      description:
        'Event servers on Kauaʻi at $55/hr with a 4-hour floor: table service, tray pass, and reset for estate dinners, wedding weeks, and retreat tables. Itemized in every written quote.',
    },
    intro:
      'The difference between a cooked dinner and a served evening: $55 an hour, 4-hour floor, one server per 10–12 seated guests. Quoted by name in the written quote — never a surprise line.',
    sections: [
      {
        heading: 'What a server covers',
        body: [
          'Table setting and reset, course service, tray pass for standing formats, water and wine attention, and the quiet clearing that lets a dinner run long. Servers arrive with the crew and leave when the kitchen does — the 4-hour floor covers the real arc of an evening.',
          'For wedding weeks, the same servers follow the events, so by the reception they know the family.',
        ],
        links: [{ label: 'Wedding-week formats', href: 'weddings/wedding-week' }],
      },
      {
        heading: 'How many you need',
        body: [
          'Seated coursed dinners: one per 10–12. Family-style: one per 12–15. Standing pūpū hours: one per 15–20. The quote does this math in front of you — the line item shows headcount, hours, and rate.',
        ],
      },
      {
        heading: 'The honest constraint',
        body: [
          'Kauaʻi’s service pool is thin in the peaks. December and the summer prime book the roster first; inquiry-first exists so you never learn about a crew gap the week of your event.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is gratuity expected on top of $55/hr?',
        a: 'No — gratuity is always voluntary, printed as such on every quote. The 20% service charge is a separate, itemized line that covers the operation; tipping is your call, never an assumption.',
      },
      {
        q: 'Can servers work a venue that isn’t an estate?',
        a: 'Yes — garden venues, plantation houses, and permitted sites across both shores. Load-in logistics (power, water, cover) are settled in the quote phase with the venue.',
      },
      {
        q: 'Do servers handle bar work?',
        a: 'Servers pour table wine and keep water honest; cocktail service belongs to the bar cart package ($850/4hr + $60/guest) with alcohol client-supplied or via licensed referral.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['event servers Kauai', 'wait staff hire Kauai'],
  },
  {
    slug: 'services/staffing/bartenders',
    category: 'service',
    title: 'Bartender Hire Kauaʻi — Licensed, Referred, Itemized',
    h1: 'Bar service, inside the lines.',
    parent: 'services/staffing',
    meta: {
      description:
        'Bartender hire on Kauaʻi: packaged cart $850/4hr + $60 a guest, alcohol client-supplied or via licensed bartending referral — Kauaʻi County rules respected, posture printed on every quote.',
    },
    intro:
      'Bartending on Kauaʻi runs through the packaged cart — $850 per four hours plus $60 a guest — with alcohol itself client-supplied or arranged via a licensed referral. The county’s rules govern; our posture is printed on every quote.',
    sections: [
      {
        heading: 'Why the referral model',
        body: [
          'Hawaiʻi’s liquor regulation runs through four county commissions, and Kauaʻi County’s rules are their own. Rather than blur the line, we print it: we don’t sell alcohol. Your purchase, or a licensed bartending referral — with the cart, ice, mixers, and garnish handled by us.',
          'It reads conservative because it is. The quote shows exactly who provides what, and nothing about the bar is ambiguous on the night.',
        ],
        links: [{ label: 'Alcohol and bar, in depth', href: 'guides/alcohol-and-bar' }],
      },
      {
        heading: 'The drink program',
        body: [
          'Built from the same market run as the kitchen: lilikoi, calamansi when it’s around, the good local spirits where they exist, zero-proof builds that aren’t an apology. Two signature serves per event is the sweet spot — the quote names them.',
        ],
      },
      {
        heading: 'Where bars get built',
        body: [
          'Estate verandas, garden receptions, retreat closing nights, wedding-week welcome hours. The cart travels with the crew; far-North setups follow the 72-hour bridge rule like everything else.',
        ],
        links: [{ label: 'The mobile bar package', href: 'services/mobile-bar' }],
      },
    ],
    faq: [
      {
        q: 'Can your bartender serve alcohol we bought?',
        a: 'Yes — client-supplied alcohol with our cart and service is the standard model, and a licensed bartending referral covers the rest where the venue or county requires it. The quote prints the posture explicitly.',
      },
      {
        q: 'What does bar service for 40 cost?',
        a: 'Cart $850 + $60 × 40 = $3,250 for four hours, plus 20% service and GET on their own lines. Alcohol is your purchase — we advise quantities so you buy once, correctly.',
      },
      {
        q: 'Zero-proof options?',
        a: 'Standard, not special — every bar program includes zero-proof builds with the same garnish discipline. Retreat tables often run zero-proof only; the cart handles that format weekly.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['bartender hire Kauai', 'event bartender Kauai', 'wedding bar Kauai'],
  },
  {
    slug: 'services/staffing/butlers',
    category: 'service',
    title: 'Butler Service Kauaʻi — Estate-Level Front of House',
    h1: 'Front of house, estate register.',
    parent: 'services/staffing',
    meta: {
      description:
        'Butler and estate front-of-house service on Kauaʻi, quoted per event: the receiving, pouring, and pacing layer for estate weeks and wedding receptions. Itemized in writing.',
    },
    intro:
      'The layer above serving: receiving guests, running the room, pacing the evening so the hosts never think about it. Quoted per event — the written quote names the role and the hours.',
    sections: [
      {
        heading: 'When a butler earns the line',
        body: [
          'Estate weeks with guests arriving in waves. Wedding receptions where the couple should never be asked a logistical question. Chef’s Table evenings where the room and the pass need one mind. For a family dinner of eight, a good server is enough — we’ll say so.',
          'The role is quoted per event at inquiry with hours and rate itemized; it follows the same honesty rules as every line we publish.',
        ],
      },
      {
        heading: 'What the role covers',
        body: [
          'Arrival and coat-and-bag flow, drinks continuity between bar and table, timing liaison with the kitchen, the quiet handling of the host’s list — the dietary flag at seat nine, the toast that must land before dessert. The evening’s memory lives in these details; the butler owns them.',
        ],
      },
      {
        heading: 'Estate weeks, especially',
        body: [
          'On multi-day estate bookings the butler becomes the house’s front of house: breakfast pacing, provisioning visibility, the evening reset. It folds into the estate-week contract as its own line.',
        ],
        links: [{ label: 'The estate-week chef', href: 'services/estate-week-chef' }],
      },
    ],
    faq: [
      {
        q: 'How is butler service priced?',
        a: 'Quoted per event with hours and rate itemized in the written quote — the same inquiry-first posture as every Kauaʻi line. For most dinners, servers at $55/hr are the right tool; we recommend the butler only where the room justifies it.',
      },
      {
        q: 'Can a butler manage other vendors on the night?',
        a: 'Within reason — florals placed before service, a photographer’s timing, the musician’s break. Planner-level coordination stays with your planner; the butler runs the room, not the production.',
      },
      {
        q: 'Is this available for retreats?',
        a: 'Rarely needed — retreat tables run family-style and self-paced. Where a host wants a polished closing night, the role quotes like any other event line.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['butler service Kauai', 'estate front of house Kauai'],
  },
  {
    slug: 'services/kids-menus',
    category: 'service',
    title: 'Kid-Friendly Private Chef Kauaʻi — Early Seatings, Real Food',
    h1: 'The kids eat first, and well.',
    parent: 'private-chef',
    meta: {
      description:
        'Kid-friendly private chef service on Kauaʻi: early seatings, real food sized down, allergies handled with separate prep — inside every family booking, priced per guest like everything else.',
    },
    intro:
      'Family bookings are the Kauaʻi default, and the kids’ table is designed, not improvised: early seating, real food sized down, allergies handled with separate prep, priced per guest inside the same quote.',
    sections: [
      {
        heading: 'How the split table works',
        body: [
          'Kids eat at five-thirty, adults at seven-thirty — the kitchen runs both from the same market bag. The kids’ menu is real food sized and seasoned for small people: the same fish, less ceremony; the vegetables they’ll actually eat, cooked properly.',
          'Per-guest pricing applies to the adult table; kids’ plates price inside the quote at honest portions. No separate contract, no second vendor, no nugget-shaped compromise unless the kids overrule us — they sometimes do.',
        ],
      },
      {
        heading: 'Allergies, taken seriously',
        body: [
          'Separate prep for allergens is standard, and the kids’ table is where it matters most. Flags are settled in the menu call and labeled per dish; a nut-free house stays nut-free for the whole booking, not just the kid courses.',
        ],
        links: [{ label: 'Dietary service', href: 'services/dietary' }],
      },
      {
        heading: 'The week version',
        body: [
          'On Stay Chef weeks the kids’ rhythm becomes infrastructure: breakfasts at their hour, beach-day coolers, the early dinner, and a parents-only Date Night midweek while the kitchen handles the kids’ table first.',
        ],
        links: [{ label: 'Stay Chef weeks', href: 'stay-chef' }],
      },
    ],
    faq: [
      {
        q: 'Do kids cost the full per-guest rate?',
        a: 'No — kids’ plates price at honest portions inside the written quote. The per-guest bands describe the adult table; the quote shows both lines so splitting families see the real math.',
      },
      {
        q: 'Can you handle a severe allergy?',
        a: 'With separate prep, labeled dishes, and the flag settled before the menu is written. For severe airborne allergies we’ll tell you exactly what our controls are — and are not — in writing, before you commit.',
      },
      {
        q: 'What about picky eaters?',
        a: 'The menu call includes the kids’ actual preferences — this is a private kitchen, not a restaurant with a kids’ card. If the answer is buttered pasta three nights running, the pasta will be excellent.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['kid-friendly private chef Kauai', 'family chef Kauai', 'kids menu private chef'],
  },
  {
    slug: 'services/dietary',
    category: 'service',
    title: 'Vegan & Gluten-Free Private Chef Kauaʻi — 11 Flags Standard',
    h1: 'Dietary depth, as infrastructure.',
    parent: 'private-chef',
    meta: {
      description:
        'Dietary-restriction private chef service on Kauaʻi: eleven standard flags from vegan to low-sodium, separate allergen prep, protocol-labeled retreat menus — settled in the menu call, not at the table.',
    },
    intro:
      'Eleven dietary flags as standard infrastructure — vegetarian, vegan, gluten-free, halal, kosher-style, dairy-free, nut-free, keto, pescatarian, low-sodium, diabetic-friendly — with separate prep for allergens and menus that name their protocols.',
    sections: [
      {
        heading: 'Settled before the shopping',
        body: [
          'Dietary flags live in the menu call, not the table announcement. The written menu labels every dish; the shopping respects it; the prep separates allergens with dedicated boards, pans, and oil. By the time anyone sits down, the questions are already answered.',
          'One kitchen, one standard: the vegan courses are written with the same care as the fish, because on Kauaʻi the farms make that easy.',
        ],
        links: [{ label: 'Vegetarian & vegan menus', href: 'menus/vegetarian-vegan' }],
      },
      {
        heading: 'The retreat-grade version',
        body: [
          'Kauaʻi’s retreat work means protocol depth beyond the eleven flags: Ayurvedic-fluent menu families, detox and raw-leaning formats, multi-day plans where the labels carry across a week. If your group eats by a program, we cook by the program.',
        ],
        links: [{ label: 'Dietary protocols for retreats', href: 'retreat-catering/dietary-protocols' }],
      },
      {
        heading: 'Honest limits, in writing',
        body: [
          'We cook in rental kitchens, not certified facilities. Separate prep is disciplined and real — dedicated equipment, sequenced prep, labeled storage — but severe airborne allergies get the full honest paragraph about what a private kitchen can and cannot guarantee, before you commit.',
        ],
        links: [{ label: 'The dietary guide', href: 'guides/dietary' }],
      },
    ],
    faq: [
      {
        q: 'Does dietary accommodation cost extra?',
        a: 'No — the eleven flags are standard inside the published bands. Deeply specialized sourcing (a strict protocol week, hard-to-find ingredients) shows up honestly in the groceries-at-cost line, with receipts.',
      },
      {
        q: 'Can you cook gluten-free safely for celiac guests?',
        a: 'With dedicated prep sequence, clean equipment, and separate oil and boards — yes, and we describe the exact controls in writing. Rental kitchens aren’t certified GF facilities; the honest paragraph is part of the quote conversation.',
      },
      {
        q: 'Mixed table — vegans and carnivores?',
        a: 'The Kauaʻi norm. Courses are built so the vegan plate is a dish, not a subtraction, and the table shares most of the menu. The market’s greens carry it.',
        links: [{ label: 'The Hanalei Table menu', href: '/kauai/menus/farm-to-table' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['vegan private chef Kauai', 'gluten free private chef Kauai', 'dietary restrictions chef Kauai'],
  },
  {
    slug: 'services/grocery-stocking',
    category: 'service',
    title: 'Villa Pre-Stocking Kauaʻi — Arrive to a Full Fridge',
    h1: 'Land late. Eat well anyway.',
    parent: 'services/vacation-chef',
    meta: {
      description:
        'Villa pre-arrival grocery stocking on Kauaʻi: the fridge and pantry filled before you land, at cost with receipts — breakfast things, local fruit, coffee, and the good poke when the shop has it.',
    },
    intro:
      'The most-requested small service on the island: arrive after a six-hour flight to a fridge that’s already full. Stocking runs at cost with receipts — you pay what the store charged, plus the service line, itemized.',
    sections: [
      {
        heading: 'What lands in the fridge',
        body: [
          'Your list, refined by people who shop here weekly: breakfast things, good coffee, apple bananas and whatever the fruit stand had, snacks that survive the beach, the poke worth eating if the shop has it that day. Dietary flags apply to stocking exactly as they do to cooking.',
          'On Kauaʻi this is logistics, not luxury: the North Shore’s markets close early, the nearest full grocery might be forty minutes of two-lane road, and landing day shouldn’t cost you a dinner run.',
        ],
      },
      {
        heading: 'Priced like everything else',
        body: [
          'Groceries at cost with receipts, plus a service line quoted in writing before you land. No markup on the food, no mystery “stocking fee” discovered at checkout — the receipt envelope is part of the product.',
        ],
        links: [{ label: 'Groceries at cost, explained', href: 'guides/groceries-at-cost' }],
      },
      {
        heading: 'Pairs with',
        body: ['Stocking is the opening move of most multi-day bookings:'],
        list: [
          'Arrival-night dinner — the table set while you’re still shaking off the flight',
          'Stay Chef weeks — stocking becomes the standing pantry plan',
          'Mid-stay refresh — the Wednesday run so Thursday’s beach day has a cooler',
        ],
        links: [
          { label: 'Stay Chef', href: 'stay-chef' },
          { label: 'Vacation chef service', href: 'services/vacation-chef' },
        ],
      },
    ],
    faq: [
      {
        q: 'How much does pre-stocking cost?',
        a: 'The groceries at cost — receipts attached — plus a service line quoted in writing. The written quote fixes the service line before you land; the receipts show the food was never marked up.',
      },
      {
        q: 'Can you stock before a late arrival?',
        a: 'Yes — that’s the point. With house-manager or lockbox coordination, the fridge is full and cold before you turn the key. Perishables are timed to your landing window.',
      },
      {
        q: 'Which areas do you stock?',
        a: 'Both shores and the East Side; Princeville and Poʻipū carry the standard $50–$75 shore surcharge, far-North past Hanalei is quoted at inquiry with 72-hour notice.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['villa pre-stocking Kauai', 'grocery stocking Kauai vacation rental'],
  },
];
