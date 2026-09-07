import type { ContentRecord } from '@/platform/types';

/**
 * Oʻahu content registry — the full 123-page inventory from
 * Chapter 4 §4.2.1 (Tables 4.2.1a + 4.2.1b).
 *
 * '' and 'quote' are registered for sitemap/SEO completeness; '' renders
 * through the bespoke Home override and 'quote' through QuoteFlow (App.tsx).
 * 'private-chef', 'pricing', 'catering', and 'weddings' also render through
 * bespoke overrides — their records carry the SEO/meta and link targets.
 *
 * URL slugs stay ASCII; diacritics live in copy, never in URLs.
 * All prices are the approved published figures (info.md) — never invented.
 */

import { CONTACT } from '@/platform/config';

const WA = `https://wa.me/${CONTACT.whatsappNumber}`;

export const content: ContentRecord[] = [
  /* ------------------------------------------------------------------ */
  /* Core (Table 4.2.1a)                                                */
  /* ------------------------------------------------------------------ */
  {
    slug: '',
    category: 'core',
    title: 'Private Chef Oʻahu — from $125/guest',
    h1: 'A chef in your kitchen, from Waikīkī to the North Shore.',
    meta: {
      description:
        'Private chef and staffed catering across Oʻahu. Signature dinners $125–$190 a guest, groceries included. Stay Chef from $850 a day. The written quote is the confirmed total.',
      ogImage: '/img/oahu/hero-home.jpg',
    },
    intro:
      'Signature dinners $125–$190 a guest, groceries included. Stay Chef from $850 a day. The written quote is the confirmed total.',
    sections: [],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'See the rate card', secondaryHref: '/oahu/pricing' },
    keywords: ['private chef Oahu', 'private chef Honolulu', 'catering Oahu'],
  },
  {
    slug: 'quote',
    category: 'core',
    title: 'Get a Written Quote — Private Chef Oʻahu',
    h1: 'Tell us about the table.',
    meta: {
      description:
        'Five fields, two minutes, one written quote for your Oʻahu dinner, stay, or event. The written quote you receive is the confirmed total — never a chat estimate.',
    },
    sections: [],
    cta: { label: 'Start the quote', href: '/oahu/quote' },
    keywords: ['book a private chef Oahu'],
  },
  {
    slug: 'private-chef',
    category: 'core',
    title: 'Hire a Private Chef on Oʻahu — Dinners, Date Nights, Stay Chef',
    h1: 'A chef for the house.',
    meta: {
      description:
        'Signature dinners $125–$190 a guest, Date Night from $450, Stay Chef from $850 a day, vacation-chef full board $179–$300+ per guest per day. Serving Waikīkī, Honolulu, Kahala, Ko Olina, Kailua, and the North Shore.',
      ogImage: '/img/oahu/hero-private-chef.jpg',
    },
    intro:
      'Your chef shops that morning, arrives before service, cooks in your kitchen, serves each course, and leaves the kitchen clean. Groceries are inside the band; receipts on request.',
    sections: [],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: WA },
    keywords: ['hire a private chef Oahu', 'private chef Honolulu'],
  },
  {
    slug: 'catering',
    category: 'core',
    title: 'Catering on Oʻahu — Staffed Events for 10–75 Guests',
    h1: 'Catering for the event.',
    meta: {
      description:
        'Staffed catering across Oʻahu for 10–75 guests: buffets, family-style, plated courses, pūpū and grazing, chef-attended stations. Servers $55/hr, published per-guest lines, written quotes.',
      ogImage: '/img/oahu/hero-catering.jpg',
    },
    intro:
      '10–75 guests, staffed. Over 75 is a written exception — quoted, never implied.',
    sections: [],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'See formats and staffing', secondaryHref: '/oahu/services/staffing' },
    keywords: ['catering Oahu', 'catering Honolulu'],
  },
  {
    slug: 'weddings',
    category: 'core',
    title: 'Wedding Catering Oʻahu — Estates, Villas, Elopements',
    h1: 'Wedding catering, outside the ballroom.',
    meta: {
      description:
        'Estate, villa, and elopement wedding catering on Oʻahu. The wedding week as one contract — welcome dinner to recovery brunch, from $125 a guest plus staffing. Written quotes, itemized fees.',
      ogImage: '/img/oahu/hero-weddings.jpg',
    },
    intro:
      'Some marquee venues hold exclusive caterers. Estates, villas, and private property are where an outside chef wins — that is our ground.',
    sections: [],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The wedding week', secondaryHref: '/oahu/weddings/wedding-week' },
    keywords: ['wedding catering Oahu', 'wedding catering Honolulu'],
  },
  {
    slug: 'stay-chef',
    category: 'core',
    title: 'Stay Chef Oʻahu — A Chef for the Week, from $850/Day',
    h1: 'A chef for the whole stay.',
    meta: {
      description:
        'Stay Chef on Oʻahu from $850 a day plus groceries at cost: breakfast, provisioning, and dinner cooked in your villa kitchen. Waikīkī, Ko Olina, Kailua, North Shore, and Turtle Bay.',
      ogImage: '/img/oahu/stay-chef.jpg',
    },
    intro:
      'One chef, your kitchen, every day of the stay — breakfast before the beach, the fridge stocked for the afternoon, dinner on the lānai. From $850 a day plus groceries at cost, with receipts.',
    sections: [
      {
        heading: 'A sample three-day rhythm',
        body: [
          'Day one: arrival dinner — the fridge is stocked before you land, and dinner is on the table an hour after you drop the bags. Day two: breakfast at eight, beach-day provisioning packed by ten, a Signature dinner at seven. Day three: brunch service, a grill afternoon by the pool, and a family-style send-off.',
          'The rhythm is yours to set. The quote names the days, the meals, and the total.',
        ],
      },
      {
        heading: 'What the day rate covers',
        body: [
          'The $850 day rate covers the chef — menu planning, shopping, cooking, service, and cleanup across the agreed meals. Groceries are billed at cost with receipts. Staffing beyond the chef (a server at $55/hr, a sous chef at $75/hr, four-hour floor) is quoted in writing when the group calls for it.',
        ],
        list: [
          'Menu planning and same-day shopping',
          'Cooking, table service, and a clean kitchen every night',
          'Groceries at cost, receipts attached',
        ],
      },
      {
        heading: 'Where Stay Chef runs',
        body: [
          'Ko Olina residences with purpose-built chef kitchens, Kailua and Lanikai beachfront houses, North Shore estates in surf season, and Turtle Bay-area villas (travel from $75). Short-term-rental rules concentrate visitor stays in the resort zones — we know which buildings allow what.',
        ],
        links: [
          { label: 'Stay Chef in Ko Olina', href: '/oahu/locations/ko-olina/stay-chef' },
          { label: 'Stay Chef on the North Shore', href: '/oahu/locations/north-shore/stay-chef' },
          { label: 'Stay Chef in Kailua', href: '/oahu/locations/kailua-lanikai/stay-chef' },
        ],
      },
      {
        heading: 'No hidden weekly math',
        body: [
          'There is no published weekly discount — the written quote is the total, and it itemizes the day rate, groceries at cost, staffing, travel, 20% service, and GET up to 4.7120% on their own lines.',
        ],
      },
    ],
    faq: [
      {
        q: 'How much does a Stay Chef week on Oʻahu cost?',
        a: 'From $850 a day plus groceries at cost. A five-night stay with breakfast and dinner daily typically quotes between $4,250 and $6,500 for the chef line before groceries, staffing, service charge, and GET — all itemized in the written quote.',
      },
      {
        q: 'Does the chef live in the house?',
        a: 'No. Your chef arrives before the first service of the day and leaves after the kitchen is clean at night. The house stays yours.',
      },
      {
        q: 'Can you stock the villa before we arrive?',
        a: 'Yes — grocery provisioning is an attach-on at cost with receipts, so the fridge is full when you land.',
        links: [{ label: 'Grocery provisioning', href: '/oahu/services/grocery-provisioning' }],
      },
      {
        q: 'What kitchens do you need for a Stay Chef week?',
        a: 'A working villa, suite, or estate kitchen. Hotel rooms without kitchens are declined — we will tell you that at inquiry, not at arrival.',
        links: [{ label: 'The kitchen guide', href: '/oahu/guides/villa-kitchen' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'See Stay Chef costs', secondaryHref: '/oahu/pricing/stay-chef-cost' },
    parent: '',
    keywords: ['vacation chef Oahu', 'stay chef Oahu', 'chef for a week Oahu'],
  },
  {
    slug: 'pricing',
    category: 'pricing',
    title: 'Private Chef Oʻahu Cost — The Rate Card',
    h1: 'The Oʻahu rate card.',
    meta: {
      description:
        'Every published Oʻahu price: Table $95–$125, Signature $125–$190, Premium $190–$275, Chef’s table $275–$400+ a guest. Stay Chef from $850/day, servers $55/hr, travel from $75. 20% service and GET on their own lines.',
      ogImage: '/img/oahu/hero-pricing.jpg',
    },
    intro:
      'Published prices, honored. The written quote is the confirmed total — never a chat estimate.',
    sections: [],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Run the estimator', secondaryHref: '/oahu/pricing/estimate' },
    keywords: ['private chef Oahu cost', 'private chef Honolulu prices'],
  },
  {
    slug: 'corporate',
    category: 'core',
    title: 'Corporate Catering Honolulu — Convention-Ready, COI in Hand',
    h1: 'Corporate catering that clears the loading dock.',
    meta: {
      description:
        'Corporate and convention catering in Honolulu for 10–75 guests: boardroom dinners, off-site convention events, Kakaʻako and Downtown load-ins, COI certificates handled. Staffed, itemized, quoted in writing.',
      ogImage: '/img/oahu/corporate.jpg',
    },
    intro:
      'The Hawaiʻi Convention Center runs a modified schedule through 2027. The dinners moved out; we cook where they land — hotel suites, private venues, and offices from Kakaʻako to Kapolei.',
    sections: [
      {
        heading: 'Convention-displacement dinners',
        body: [
          'With the Convention Center on a modified schedule through 2026–2027, group business is landing in hotels and private venues. We run off-site dinners, receptions, and buyouts for groups of 10–75 — plated, family-style, or stations — with the paperwork venues actually ask for.',
        ],
        links: [{ label: 'Convention dining service', href: '/oahu/services/convention-dining' }],
      },
      {
        heading: 'The logistics, handled',
        body: [
          'Certificate of insurance issued to the building before the date. Freight-elevator and loading-dock windows booked with the property manager. Load-in timed around your agenda, not ours. Waikīkī towers and Downtown offices each have their own rules — we have cooked in both.',
        ],
        list: [
          'COI naming the building, issued on request',
          'Freight-elevator and dock scheduling',
          'Rentals coordinated — tables, glassware, plating for 75',
          'Servers $55/hr, sous chefs $75/hr, four-hour floor',
        ],
      },
      {
        heading: 'Formats and numbers',
        body: [
          'Pūpū and grazing receptions, plated three-course dinners, chef-attended stations, and working-lunch drops. Per-guest food lines follow the published card — Signature $125–$190 a guest, Premium $190–$275 — with staffing, travel, 20% service, and GET itemized on their own lines.',
        ],
        links: [
          { label: 'The Oʻahu rate card', href: '/oahu/pricing' },
          { label: 'Downtown corporate catering', href: '/oahu/locations/honolulu/corporate-catering' },
        ],
      },
    ],
    faq: [
      {
        q: 'Can you provide a certificate of insurance?',
        a: 'Yes. We issue a COI naming the building or venue before the event date — it is standard paperwork for us, not an exception.',
      },
      {
        q: 'What group sizes do you cater?',
        a: '10–75 guests, staffed. Over 75 is a written exception — we will quote it honestly if the venue and menu allow, never imply it.',
      },
      {
        q: 'Do you cater in Kakaʻako and Downtown offices?',
        a: 'Yes — office towers, coworking floors, and hotel meeting suites across Honolulu, with load-in planned around building rules.',
        links: [{ label: 'Honolulu corporate catering', href: '/oahu/locations/honolulu/corporate-catering' }],
      },
      {
        q: 'How is corporate catering priced?',
        a: 'Per-guest food lines from the published card plus staffing hourlys, travel where it applies, 20% service, and GET up to 4.7120% — every charge on its own line in the written quote.',
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Convention dining', secondaryHref: '/oahu/services/convention-dining' },
    parent: '',
    keywords: ['corporate catering Honolulu', 'convention catering Honolulu'],
  },
  /* ------------------------------------------------------------------ */
  /* Services (Table 4.2.1a)                                            */
  /* ------------------------------------------------------------------ */
  {
    slug: 'services/personal-chef-weekly',
    category: 'service',
    title: 'Personal Chef Weekly Service Oʻahu — from $300/Week',
    h1: 'The weekly cook day.',
    meta: {
      description:
        'A kamaʻāina weekly line for Oʻahu residents: one chef, one standing day, a week of dinners cooked in your kitchen — from $300 a week plus groceries at cost. Kahala to Hawaiʻi Kai.',
    },
    intro:
      'One chef, one standing day, a week of dinners cooked in your kitchen and packed for the fridge. Kahala to Hawaiʻi Kai. Groceries at cost, receipts attached.',
    sections: [
      {
        heading: 'How the weekly line runs',
        body: [
          'You pick the standing day. Your chef plans the week with you, shops that morning, cooks four to six dinners plus staples in your kitchen, labels and packs everything, and leaves the kitchen clean. The menu rotates with the markets; dietary needs are built in, not accommodated around.',
        ],
        list: [
          'From $300 a week for the cook day, plus groceries at cost',
          'Four to six dinners, labeled and packed',
          'Same chef each week — they learn the household',
        ],
      },
      {
        heading: 'Who it serves',
        body: [
          'Kahala and Gold Coast estates, Hawaiʻi Kai marina households, Kapolei families, Kailua professionals. It is a resident line — priced for every week, not for special occasions.',
        ],
        links: [
          { label: 'Kahala weekly service', href: '/oahu/locations/kahala-gold-coast/personal-chef' },
          { label: 'Hawaiʻi Kai weekly service', href: '/oahu/locations/hawaii-kai/personal-chef' },
          { label: 'Weekly cost, worked', href: '/oahu/pricing/kamaaina-weekly-cost' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does the weekly personal chef service cost?',
        a: 'From $300 a week for the standing cook day, plus groceries at cost with receipts. Larger households and longer cook days quote higher — the written quote is the weekly total.',
      },
      {
        q: 'Is this the same as meal delivery?',
        a: 'No. The cooking happens in your kitchen, the menu is built for your household, and nothing sits in a delivery bag. It is a cook day, not a drop-off.',
      },
      {
        q: 'Can you handle dietary protocols every week?',
        a: 'Yes — the weekly line is where dietary fluency matters most. Gluten-free, plant-based, and medical diets are planned into the rotation.',
        links: [{ label: 'Dietary capability', href: '/oahu/services/dietary' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'What a week costs', secondaryHref: '/oahu/pricing/kamaaina-weekly-cost' },
    parent: 'private-chef',
    keywords: ['personal chef Oahu weekly', 'personal chef cost per week Honolulu'],
  },
  {
    slug: 'services/vacation-chef',
    category: 'service',
    title: 'Chef for Your Vacation Rental on Oʻahu',
    h1: 'A chef for the vacation rental.',
    meta: {
      description:
        'Full-board vacation chef service on Oʻahu — $179–$300+ per guest per day, or single Signature dinners in your rental kitchen. Waikīkī suites, Ko Olina villas, Kailua houses, North Shore estates.',
    },
    intro:
      'The concierge will hand you a menu PDF. We write the menu for your table, shop that morning, and cook in your rental kitchen — one dinner or the whole stay.',
    sections: [
      {
        heading: 'Two ways to book it',
        body: [
          'A single Signature dinner ($125–$190 a guest, groceries included) for the night everyone is finally in the same place — or full board at $179–$300+ per guest per day for breakfasts, provisioning, and dinners across the stay.',
        ],
        links: [
          { label: 'Stay Chef — the whole week', href: '/oahu/stay-chef' },
          { label: 'Signature three-course menu', href: '/oahu/menus/signature-three-course' },
        ],
      },
      {
        heading: 'Which rentals qualify',
        body: [
          'Villas, condos, and suites with real kitchens. Oʻahu’s short-term-rental rules concentrate visitor stays in the Waikīkī and Ko Olina resort zones — we know the buildings, the COI requirements, and the freight-elevator routines. Hotel rooms without kitchens are declined at inquiry, honestly.',
        ],
        links: [
          { label: 'Waikīkī in-suite dining', href: '/oahu/locations/waikiki/in-suite-dining' },
          { label: 'The kitchen guide', href: '/oahu/guides/villa-kitchen' },
        ],
      },
      {
        heading: 'Arrive to a stocked fridge',
        body: [
          'Add grocery provisioning and the kitchen is stocked before you land — breakfast things, fruit, coffee, snacks for the kids — at cost, with receipts.',
        ],
        links: [{ label: 'Grocery provisioning', href: '/oahu/services/grocery-provisioning' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: WA },
    parent: 'private-chef',
    keywords: ['chef for vacation rental Oahu', 'vacation chef Oahu'],
  },
  {
    slug: 'services/date-night',
    category: 'service',
    title: 'Date Night Private Chef Oʻahu — Dinner for Two, from $450',
    h1: 'A chef for two.',
    meta: {
      description:
        'A fixed-price private dinner for two on Oʻahu, from $450: your chef shops, cooks a coursed dinner in your kitchen or on your lānai, serves, and disappears. Waikīkī to the North Shore.',
      ogImage: '/img/oahu/date-night.jpg',
    },
    intro:
      'From $450, fixed: a coursed dinner for two, cooked in your kitchen, served course by course, kitchen left cleaner than we found it. The reservation you cannot get is the one in your own dining room.',
    sections: [
      {
        heading: 'The evening, hour by hour',
        body: [
          'Your chef arrives ninety minutes before you sit down. Courses land at your table’s pace — no ticket printer, no other tables. By ten, the kitchen is clean and the evening is yours.',
        ],
      },
      {
        heading: 'Proposals and anniversaries',
        body: [
          'A Date Night is the quiet core of most proposal plans and the default anniversary answer. Tell us the occasion and we time the courses around the moment — the ring course arrives when the light does.',
        ],
        links: [
          { label: 'Proposal dinners', href: '/oahu/occasions/proposal' },
          { label: 'Anniversary dinners', href: '/oahu/occasions/anniversary' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does a private chef dinner for two cost on Oʻahu?',
        a: 'Date Night starts at $450 for the evening — menu, shopping, cooking, service, and cleanup included. Premium menus and wine pairings quote higher, always in writing first.',
      },
      {
        q: 'Can you cook on a lānai or rooftop?',
        a: 'Yes, where the building allows it and there is a working kitchen to back it up. Waikīkī towers have rules — we handle the building side.',
        links: [{ label: 'In-suite dining in Waikīkī', href: '/oahu/locations/waikiki/in-suite-dining' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Proposal dinners', secondaryHref: '/oahu/occasions/proposal' },
    parent: 'private-chef',
    keywords: ['private chef for two Oahu', 'date night chef Oahu'],
  },
  {
    slug: 'services/meal-prep',
    category: 'service',
    title: 'Weekly Meal Prep Chef Honolulu — Cooked in Your Kitchen',
    h1: 'Meal prep, cooked in your kitchen.',
    meta: {
      description:
        'A chef-run weekly meal prep service in Honolulu: menus built for your household, cooked fresh in your kitchen, packed and labeled. A step above delivery — priced on the kamaʻāina weekly line.',
    },
    intro:
      'Delivery apps cook in a commissary three days before you eat. Our prep happens in your kitchen the same day, from a menu built for your household.',
    sections: [
      {
        heading: 'Prep day, done properly',
        body: [
          'Your chef shops that morning, cooks the week’s lunches and dinners, packs and labels everything with dates and reheating notes, and cleans the kitchen before leaving. Macros, allergies, and preferences are in the plan, not in a notes field.',
        ],
        list: [
          'Standing weekly cook day, from $300 a week plus groceries',
          'Labeled, dated, and packed for the fridge and freezer',
          'Dietary protocols built into the menu rotation',
        ],
      },
      {
        heading: 'Who uses it',
        body: [
          'Training schedules, post-surgery recovery, new parents, busy dual-career households from Hawaiʻi Kai to Kapolei. Honolulu is the largest meal-prep market in the state — this is the version where the cook knows your name.',
        ],
        links: [{ label: 'The weekly cook day', href: '/oahu/services/personal-chef-weekly' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Weekly pricing', secondaryHref: '/oahu/pricing/kamaaina-weekly-cost' },
    parent: 'private-chef',
    keywords: ['weekly meal prep chef Honolulu', 'meal prep Oahu'],
  },
  {
    slug: 'services/cooking-classes',
    category: 'service',
    title: 'Private Cooking Classes on Oʻahu',
    h1: 'Cook with the chef.',
    meta: {
      description:
        'Private cooking classes on Oʻahu for couples, families, and small groups — knife skills, Pacific Rim technique, and the dishes you actually want to learn, taught in your kitchen.',
    },
    intro:
      'Two hours, your kitchen, your knives or ours. Learn the dishes you will actually cook again — not a demo you watch, a class you cook.',
    sections: [
      {
        heading: 'Class formats',
        body: [
          'Couples classes built around a dinner you cook and then eat. Family classes where the kids get real jobs. Small-group technique sessions — knife work, fish butchery, fresh pasta — capped at eight so everyone cooks.',
        ],
        list: [
          'Menus set to your skill level and your kitchen',
          'Ingredients included in the quoted price',
          'Recipes and notes to keep',
        ],
      },
      {
        heading: 'What it costs',
        body: [
          'Classes are quoted per session by group size and menu — the written quote covers the chef, ingredients, and cleanup, with the same itemized fee stack as everything else we do.',
        ],
        links: [{ label: 'The rate card', href: '/oahu/pricing' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: WA },
    parent: 'private-chef',
    keywords: ['private cooking class Oahu', 'cooking class Honolulu'],
  },
  {
    slug: 'services/omakase-at-home',
    category: 'service',
    title: 'Omakase at Home Honolulu — In-Suite Kaiseki and Sushi',
    h1: 'Omakase, brought to the suite.',
    meta: {
      description:
        'Private omakase and kaiseki at home on Oʻahu: multi-course chef’s-choice menus served in your suite or villa. The format Honolulu’s luxury end already proved — without the dining room.',
    },
    intro:
      'Honolulu already proved the demand — multi-course kaiseki at the top end, in-suite omakase at the ESPACIO tier. We bring the counter to your kitchen.',
    sections: [
      {
        heading: 'The menu is the chef’s',
        body: [
          'Omakase means the menu follows the morning’s market — what the fish looked like, what the farms had. You set the course count and the dietary limits; the chef sets the sequence. Expect twelve to twenty courses across two to three hours.',
        ],
        links: [{ label: 'The Pacific Rim omakase menu', href: '/oahu/menus/pacific-rim-omakase' }],
      },
      {
        heading: 'Where it works',
        body: [
          'Suites with real kitchens — the Ritz-Carlton Residences and ESPACIO tier in Waikīkī, Ko Olina villas, Kahala estates. We confirm the kitchen at inquiry; a kitchenette with a coffee maker is a no, said early.',
        ],
        links: [
          { label: 'Omakase in Waikīkī', href: '/oahu/locations/waikiki/omakase' },
          { label: 'In-suite dining logistics', href: '/oahu/locations/waikiki/in-suite-dining' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does at-home omakase cost on Oʻahu?',
        a: 'Omakase menus run in the Premium to Chef’s-table bands — $190–$400+ a guest depending on course count and the day’s market — quoted in writing before you commit.',
      },
      {
        q: 'How many guests can an omakase serve?',
        a: 'Two to eight is the natural counter. Larger groups shift to a coursed Premium menu so the pacing survives.',
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: '日本語でのご相談', secondaryHref: '/oahu/ja/omakase-at-home' },
    parent: 'private-chef',
    keywords: ['omakase at home Honolulu', 'private omakase Oahu'],
  },
  {
    slug: 'services/fine-dining',
    category: 'service',
    title: 'Fine Dining at Home Oʻahu — Premium Private Chef Menus',
    h1: 'The dining room is yours.',
    meta: {
      description:
        'Premium private-chef dining on Oʻahu, $190–$275 a guest: coursed tasting menus, full table service, and chef’s-table formats up to $400+. The restaurant-grade evening, in your own dining room.',
    },
    intro:
      'Premium menus run $190–$275 a guest; the chef’s table runs $275–$400+. Longer courses, deeper technique, full table service — the evening a dining room would charge you more for, without the dining room.',
    sections: [
      {
        heading: 'Premium versus Signature',
        body: [
          'Signature ($125–$190 a guest) is the dinner most tables want: three or four courses, market-driven, groceries inside the band. Premium adds courses, ingredients that cost what they cost, and a second pair of hands in the kitchen.',
        ],
        links: [{ label: 'The tasting menu', href: '/oahu/menus/tasting-menu' }],
      },
      {
        heading: 'Service to match',
        body: [
          'A server at $55/hr keeps the table cleared and the glasses poured; a sous chef at $75/hr keeps the courses landing hot. Both are itemized on the quote, four-hour floor.',
        ],
        links: [{ label: 'Chef’s table', href: '/oahu/services/chefs-table' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Chef’s table', secondaryHref: '/oahu/services/chefs-table' },
    parent: 'private-chef',
    keywords: ['fine dining at home Oahu', 'premium private chef Honolulu'],
  },
  {
    slug: 'services/chefs-table',
    category: 'service',
    title: 'Chef’s Table Oʻahu — $275–$400+ per Guest',
    h1: 'The chef’s table, at your table.',
    meta: {
      description:
        'The highest tier of private dining on Oʻahu: chef’s-table menus at $275–$400+ a guest, quoted manually. Extended courses, rare ingredients, the chef at the counter all night.',
    },
    intro:
      'Ten courses and up, the chef working the counter in your kitchen, menus built around ingredients that take days to source. $275–$400+ a guest, quoted manually — every one of these is its own conversation.',
    sections: [
      {
        heading: 'What the top band buys',
        body: [
          'Time, mostly: days of sourcing, hours of prep, a chef and a sous chef who do nothing else that night. Then ingredients — the fish, the aged beef, the things that never make a printed menu because there is never enough of them.',
        ],
      },
      {
        heading: 'How booking works',
        body: [
          'Chef’s-table dinners are quoted manually, never estimated. Send the date, the party size, and the occasion; we come back with a menu direction and a written number before anyone commits.',
        ],
        links: [{ label: 'Omakase at home', href: '/oahu/services/omakase-at-home' }],
      },
    ],
    cta: { label: 'Start the conversation', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: WA },
    parent: 'services/fine-dining',
    keywords: ["chef's table Oahu", 'private chef tasting menu Honolulu'],
  },
  {
    slug: 'services/honeymoon-dinners',
    category: 'service',
    title: 'Honeymoon Private Chef Oʻahu — Dinners for Two',
    h1: 'The honeymoon table.',
    meta: {
      description:
        'Private honeymoon dinners on Oʻahu: a coursed dinner for two from $450, cooked in your suite or villa. Waikīkī towers, Ko Olina lagoons, North Shore porches.',
    },
    intro:
      'The restaurants will be full and the tables will be close together. A honeymoon dinner in your own suite is the quiet alternative — from $450, everything handled.',
    sections: [
      {
        heading: 'One night or every night',
        body: [
          'Most honeymoon bookings are a single Date Night. Some couples book two or three across the stay — arrival night, midweek, last night — each quoted on one page so the week has a number.',
        ],
        links: [{ label: 'Date Night, from $450', href: '/oahu/services/date-night' }],
      },
      {
        heading: 'Where honeymooners stay, we cook',
        body: [
          'Waikīkī suites with kitchens, Ko Olina villas, Turtle Bay cottages. We know which buildings need a COI and which kitchens pass — that conversation happens at inquiry, not arrival.',
        ],
        links: [{ label: 'In-suite dining in Waikīkī', href: '/oahu/locations/waikiki/in-suite-dining' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Date Night details', secondaryHref: '/oahu/services/date-night' },
    parent: 'private-chef',
    keywords: ['honeymoon private chef Oahu', 'honeymoon dinner Honolulu'],
  },
  {
    slug: 'services/retreat-catering',
    category: 'service',
    title: 'Retreat Catering Oʻahu — Corporate and Wellness Offsites',
    h1: 'The offsite, fed.',
    meta: {
      description:
        'Multi-day retreat catering on Oʻahu for corporate offsites and wellness groups: full-board meal plans, dietary protocols, one written contract. 8–75 guests, staffed.',
    },
    intro:
      'Three meals a day across three days is nine services and one contract. We run the table; you run the retreat.',
    sections: [
      {
        heading: 'Meal plans, not menus',
        body: [
          'Retreats need a rhythm: working breakfasts, lunches that do not stall the afternoon, dinners that become the day’s debrief. We write the whole plan before arrival — per-person per-day pricing, dietary protocols across the group, staffing itemized.',
        ],
      },
      {
        heading: 'Where Oʻahu retreats land',
        body: [
          'North Shore estates, Ko Olina villa clusters, Kailua beachfront houses, and hotel-adjacent venues while the Convention Center runs modified. Load-in, rentals, and COIs are our side of the table.',
        ],
        links: [
          { label: 'Corporate catering', href: '/oahu/corporate' },
          { label: 'North Shore catering', href: '/oahu/locations/north-shore/catering' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Corporate catering', secondaryHref: '/oahu/corporate' },
    parent: 'catering',
    keywords: ['retreat catering Oahu', 'corporate retreat catering Honolulu'],
  },
  {
    slug: 'services/mobile-bar',
    category: 'service',
    title: 'Mobile Bar Oʻahu — Packaged Bar Cart from $650',
    h1: 'The bar cart, staffed.',
    meta: {
      description:
        'A packaged mobile bar cart for Oʻahu events: from $650 per four hours plus $45 a guest, with mixers, ice, and garnishes handled. Alcohol is client-supplied or via licensed referral — we do not sell alcohol.',
    },
    intro:
      'From $650 per four hours plus $45 a guest: the cart, the ice, the mixers, the garnishes, and the person who knows what they are doing behind it.',
    sections: [
      {
        heading: 'The alcohol posture, in writing',
        body: [
          'Alcohol is client-supplied or arranged through a licensed bartending referral; we do not sell alcohol. County liquor rules govern service, and your quote will say exactly who is pouring under whose authority — verified before the date, not assumed.',
        ],
        links: [{ label: 'Alcohol and the law', href: '/oahu/guides/alcohol-and-bar' }],
      },
      {
        heading: 'What the package includes',
        body: [
          'The cart and its tools, a shopping list you buy from (or we shop at cost with receipts), batch mixers and syrups made that day, ice, and garnishes. Bartender hours are itemized separately where a referral bartender is required.',
        ],
        list: ['From $650 per four hours', 'Plus $45 a guest', 'Ice, mixers, and garnishes included'],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Bar and alcohol guide', secondaryHref: '/oahu/guides/alcohol-and-bar' },
    parent: 'catering',
    keywords: ['mobile bar Oahu', 'bar cart catering Honolulu'],
  },
  {
    slug: 'services/staffing',
    category: 'service',
    title: 'Event Staffing Oʻahu — Servers, Sous Chefs, Butlers',
    h1: 'The crew, by the hour.',
    meta: {
      description:
        'Event staffing on Oʻahu with published hourlys: servers $55/hr, sous chefs $75/hr, four-hour floor. Bartenders via licensed referral; butlers for estate service. Itemized on every quote.',
    },
    intro:
      'Servers at $55 an hour, sous chefs at $75, four-hour floor. Staffing is never buried in a package — it is a line on the quote you can read.',
    sections: [
      {
        heading: 'The staffing SKUs',
        body: [
          'Every event quote shows the same arithmetic: one server per 10–12 guests, a sous chef when the menu needs a second pair of hands, a four-hour floor per shift.',
        ],
        list: [
          'Servers — $55/hr, four-hour floor',
          'Sous chefs — $75/hr, four-hour floor',
          'Bartenders — via licensed referral',
          'Butlers — estate service, quoted per event',
        ],
        links: [
          { label: 'Servers', href: '/oahu/services/staffing/servers' },
          { label: 'Bartenders', href: '/oahu/services/staffing/bartenders' },
          { label: 'Butlers', href: '/oahu/services/staffing/butlers' },
        ],
      },
      {
        heading: 'How many people your event needs',
        body: [
          'Ten to twelve guests per server for plated service; fifteen per server for family-style; stations run leaner. The quote names the crew count and the hours — and that is the number, itemized with 20% service and GET on their own lines.',
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The rate card', secondaryHref: '/oahu/pricing' },
    parent: 'catering',
    keywords: ['event staffing Oahu', 'event staff for hire Honolulu'],
  },
  {
    slug: 'services/staffing/servers',
    category: 'service',
    title: 'Event Servers for Hire Oʻahu — $55/Hour',
    h1: 'Servers, $55 an hour.',
    meta: {
      description:
        'Professional event servers for hire on Oʻahu at a published $55/hr with a four-hour floor. Plated dinners, buffets, pūpū service, and full event breakdown.',
    },
    intro:
      'Published at $55 an hour, four-hour floor — servers who plate, pour, clear, and reset without being managed.',
    sections: [
      {
        heading: 'What a server shift covers',
        body: [
          'Setup, table service or station work, clearing, and breakdown. For plated dinners plan one server per 10–12 guests; family-style stretches to fifteen. The shift count and hours are named in the written quote.',
        ],
        links: [{ label: 'All staffing rates', href: '/oahu/services/staffing' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Staffing hub', secondaryHref: '/oahu/services/staffing' },
    parent: 'services/staffing',
    keywords: ['event servers for hire Oahu', 'wait staff Honolulu'],
  },
  {
    slug: 'services/staffing/bartenders',
    category: 'service',
    title: 'Bartender Hire Oʻahu — Licensed, Itemized',
    h1: 'A bartender who is allowed to pour.',
    meta: {
      description:
        'Bartender hire on Oʻahu through licensed referral, with the county liquor posture stated in writing on every quote. Alcohol client-supplied; we do not sell alcohol.',
    },
    intro:
      'Alcohol service in Honolulu County has rules. We staff bars through licensed referral and state the arrangement in writing — who pours, under what authority, before the date.',
    sections: [
      {
        heading: 'How bar staffing is quoted',
        body: [
          'Bartender hours itemize like everything else, beside the packaged bar cart (from $650 per four hours plus $45 a guest). Alcohol itself is client-supplied or arranged through the referral — we do not sell alcohol.',
        ],
        links: [
          { label: 'The packaged bar cart', href: '/oahu/services/mobile-bar' },
          { label: 'Alcohol and the law', href: '/oahu/guides/alcohol-and-bar' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Mobile bar package', secondaryHref: '/oahu/services/mobile-bar' },
    parent: 'services/staffing',
    keywords: ['bartender hire Oahu', 'event bartender Honolulu'],
  },
  {
    slug: 'services/staffing/butlers',
    category: 'service',
    title: 'Butler Service Oʻahu — Estate-Level Table Service',
    h1: 'Estate service, quietly done.',
    meta: {
      description:
        'Butler and estate service on Oʻahu for households and events that run at a higher protocol: table management, guest flow, wardrobe-level polish. Quoted per event, itemized.',
    },
    intro:
      'For Kahala tables and estate weeks that run at a higher protocol — the person who manages the room so the host never thinks about the room.',
    sections: [
      {
        heading: 'Where butler service fits',
        body: [
          'Multi-course estate dinners, wedding-week hosting, and households that want one hand across the whole table. Butler service is quoted per event alongside servers and kitchen crew — never bundled, always itemized.',
        ],
        links: [
          { label: 'Kahala–Gold Coast', href: '/oahu/locations/kahala-gold-coast' },
          { label: 'Staffing rates', href: '/oahu/services/staffing' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: WA },
    parent: 'services/staffing',
    keywords: ['butler service Oahu', 'estate service Honolulu'],
  },
  {
    slug: 'services/kids-menus',
    category: 'service',
    title: 'Kid-Friendly Private Chef Oʻahu — Real Food for Small People',
    h1: 'The kids’ table, taken seriously.',
    meta: {
      description:
        'Kid-friendly private chef service on Oʻahu: early seatings, real menus for children, allergy-aware prep, and a kitchen left clean before bedtime. Built for multi-generation villa groups.',
    },
    intro:
      'Multi-generation groups eat twice whether you plan it or not — an early kids’ seating and a later adults’ dinner. We plan it, and both tables eat well.',
    sections: [
      {
        heading: 'How the double seating runs',
        body: [
          'Kids eat at five-thirty — real food, sized down, allergies handled — while the adults finish their afternoon. The adults’ courses start at seven. One chef, one kitchen, two services, one quote.',
        ],
        links: [
          { label: 'The kids’ menu', href: '/oahu/menus/kids' },
          { label: 'Family reunions', href: '/oahu/occasions/family-reunion' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Kids’ menu', secondaryHref: '/oahu/menus/kids' },
    parent: 'private-chef',
    keywords: ['kid friendly private chef Oahu', 'family chef Honolulu'],
  },
  {
    slug: 'services/dietary',
    category: 'service',
    title: 'Vegan & Gluten-Free Private Chef Oʻahu — The Dietary Matrix',
    h1: 'Every diet, one table.',
    meta: {
      description:
        'Dietary-capable private chef service on Oʻahu: vegan, gluten-free, allergy, and medical-diet protocols handled as menu architecture, not substitutions. One table, every guest fed properly.',
    },
    intro:
      'A table of ten on Oʻahu will have three dietary protocols in it. We write menus where the vegan course is the course everyone wants — architecture, not substitution.',
    sections: [
      {
        heading: 'The capability matrix',
        body: [
          'Vegan and plant-based, gluten-free with celiac-level cross-contact discipline, nut and shellfish allergies, low-FODMAP, keto, and physician-directed diets. Tell us the protocols at inquiry; the menu arrives with every guest already inside it.',
        ],
        links: [
          { label: 'Vegetarian & vegan menus', href: '/oahu/menus/vegetarian-vegan' },
          { label: 'Gluten-free menus', href: '/oahu/menus/gluten-free' },
          { label: 'The dietary guide', href: '/oahu/guides/dietary' },
        ],
      },
      {
        heading: 'How allergies are handled',
        body: [
          'Allergies are confirmed in writing before the menu is written, flagged on the prep list, and briefed to every server on the shift. Cross-contact is treated as a kitchen-design problem, not a promise.',
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The dietary guide', secondaryHref: '/oahu/guides/dietary' },
    parent: 'private-chef',
    keywords: ['vegan gluten-free private chef Oahu', 'allergy friendly chef Honolulu'],
  },
  {
    slug: 'services/convention-dining',
    category: 'service',
    title: 'Convention Catering Honolulu — Off-Site Group Dining',
    h1: 'The convention dinner, relocated.',
    meta: {
      description:
        'Off-site convention and group dining in Honolulu during the Hawaiʻi Convention Center’s modified 2026–2027 schedule: private-venue dinners, hotel buyouts, and staffed receptions for 10–75.',
    },
    intro:
      'The Convention Center’s modified schedule through 2026–2027 pushed group dining into hotels and private venues. We are built for exactly that move.',
    sections: [
      {
        heading: 'What we run for groups',
        body: [
          'Off-site dinners in private venues, in-suite executive dinners, staffed receptions in hotel function space, and buyout-style villa dinners for leadership teams. Groups of 10–75, plated or stations, with the venue paperwork handled.',
        ],
        list: [
          'COI issued to the venue before the date',
          'Load-in and freight-elevator scheduling',
          'Rentals coordinated for up to 75 covers',
        ],
      },
      {
        heading: 'Pricing a group dinner',
        body: [
          'Per-guest food lines from the published card — Signature $125–$190, Premium $190–$275 — plus staffing at $55/$75 an hour, rentals at cost, 20% service, and GET. One written quote the whole committee can read.',
        ],
        links: [{ label: 'Corporate catering', href: '/oahu/corporate' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Corporate hub', secondaryHref: '/oahu/corporate' },
    parent: 'corporate',
    keywords: ['convention catering Honolulu', 'group dining Honolulu'],
  },
  {
    slug: 'services/yacht-chef',
    category: 'service',
    title: 'Yacht Chef Honolulu — Ala Wai & Ko Olina Marinas',
    h1: 'Galley-tested, marina-based.',
    meta: {
      description:
        'Private yacht chef service in Honolulu: day charters and multi-day trips from Ala Wai and Ko Olina marinas. Provisioning, galley menus, and crew-aware service, quoted in writing.',
    },
    intro:
      'Galley cooking is its own discipline — provisioned tight, prepped for motion, served on a deck. We provision, cook, and clear from Ala Wai and Ko Olina.',
    sections: [
      {
        heading: 'Day charters and crossings',
        body: [
          'Day trips get a provisioning-led menu — food that eats well on a moving deck. Multi-day charters get a full meal plan quoted per day, with provisioning at cost and receipts. Tell us the boat, the galley, and the guest count; the quote follows.',
        ],
        links: [{ label: 'Grocery provisioning', href: '/oahu/services/grocery-provisioning' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: WA },
    parent: 'private-chef',
    keywords: ['yacht chef Honolulu', 'yacht catering Oahu'],
  },
  {
    slug: 'services/grocery-provisioning',
    category: 'service',
    title: 'Villa Grocery Stocking Oʻahu — At Cost, With Receipts',
    h1: 'The fridge, full before you land.',
    meta: {
      description:
        'Villa and suite grocery provisioning on Oʻahu: your list shopped the morning you arrive, stocked before you land, billed at cost with receipts. An attach-on to any booking.',
    },
    intro:
      'Send the list — breakfast things, coffee, fruit, snacks, the good butter — and land to a stocked kitchen. Groceries bill at cost, receipts attached, as an attach-on to any booking.',
    sections: [
      {
        heading: 'How provisioning works',
        body: [
          'You send the list (or we write one from your preferences). We shop the morning of arrival, stock the kitchen before check-in, and attach the receipts to your invoice. There is no markup on groceries — ever, on any service.',
        ],
        links: [{ label: 'Groceries at cost, explained', href: '/oahu/guides/groceries-at-cost' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Vacation chef service', secondaryHref: '/oahu/services/vacation-chef' },
    parent: 'services/vacation-chef',
    keywords: ['villa grocery stocking Oahu', 'grocery provisioning Honolulu'],
  },
  /* ------------------------------------------------------------------ */
  /* Locations (Table 4.2.1a)                                           */
  /* ------------------------------------------------------------------ */
  {
    slug: 'locations',
    category: 'location',
    title: 'Where We Cook on Oʻahu — Areas Served',
    h1: 'Where we cook.',
    meta: {
      description:
        'myCHEF serves Waikīkī, Honolulu, Kahala–Gold Coast, Ko Olina, Kapolei, Kailua–Lanikai, the North Shore, Turtle Bay, and Hawaiʻi Kai — with published travel fees and honest kitchen standards.',
    },
    intro:
      'Nine service areas, two demand economies: the visitor economy of the resort zones and the resident economy of Kahala, Kailua, Hawaiʻi Kai, and Kapolei. Travel fees are published; the written quote shows them before you commit.',
    sections: [
      {
        heading: 'The corridor directory',
        body: [
          'Waikīkī and Honolulu run on building rules — COIs, freight elevators, compact galleys. Kahala and Hawaiʻi Kai are resident territory: weekly cook days and estate dinners. Ko Olina and the North Shore are villa and estate weeks. Kapolei is the second city, corporate and family both.',
        ],
        links: [
          { label: 'Waikīkī', href: '/oahu/locations/waikiki' },
          { label: 'Honolulu', href: '/oahu/locations/honolulu' },
          { label: 'Kahala–Gold Coast', href: '/oahu/locations/kahala-gold-coast' },
          { label: 'Ko Olina', href: '/oahu/locations/ko-olina' },
          { label: 'Kapolei', href: '/oahu/locations/kapolei' },
          { label: 'Kailua–Lanikai', href: '/oahu/locations/kailua-lanikai' },
          { label: 'North Shore', href: '/oahu/locations/north-shore' },
          { label: 'Turtle Bay', href: '/oahu/locations/turtle-bay' },
          { label: 'Hawaiʻi Kai', href: '/oahu/locations/hawaii-kai' },
        ],
      },
      {
        heading: 'Coverage and travel zones',
        body: [
          'Base zones carry no travel fee. The North Shore and Turtle Bay run from $75, published. If your address sits outside the map, the answer is a written quote — not a shrug.',
        ],
        links: [
          { label: 'Travel zones and fees', href: '/oahu/pricing/travel-zones' },
          { label: 'The coverage map', href: '/oahu/coverage' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Travel zones', secondaryHref: '/oahu/pricing/travel-zones' },
    parent: '',
    keywords: ['private chef Oahu areas served', 'Oahu service area'],
  },
  {
    slug: 'locations/waikiki',
    category: 'location',
    title: 'Private Chef Waikīkī — Suites, Condos & In-Suite Dining',
    h1: 'Waikīkī, tower by tower.',
    meta: {
      description:
        'Private chef service in Waikīkī: in-suite dinners, Signature menus from $125–$190 a guest, building COIs and freight-elevator bookings handled. The STR-legal zone, cooked properly.',
      ogImage: '/img/oahu/loc-waikiki.jpg',
    },
    intro:
      'The highest visitor density in the state, and the most rule-bound kitchens. We handle building COIs and freight-elevator bookings as standard — the cooking is the easy part.',
    sections: [
      {
        heading: 'The Waikīkī difference is paperwork',
        body: [
          'Every tower has its own rules: certificates of insurance naming the building, freight-elevator windows booked with the property manager, load-in through the service corridor. We do this weekly. Your quote lists the building logistics beside the menu.',
        ],
        links: [
          { label: 'In-suite dining', href: '/oahu/locations/waikiki/in-suite-dining' },
          { label: 'COI and load-in guide', href: '/oahu/guides/condo-load-in-coi' },
        ],
      },
      {
        heading: 'What books in Waikīkī',
        body: [
          'Signature dinners ($125–$190 a guest) in suites with kitchens, Date Nights from $450 on lānai above the grid, in-suite omakase at the top end, and staffed catering for villa-adjacent events.',
        ],
        links: [
          { label: 'Catering in Waikīkī', href: '/oahu/locations/waikiki/catering' },
          { label: 'Omakase in Waikīkī', href: '/oahu/locations/waikiki/omakase' },
        ],
      },
      {
        heading: 'A note on kitchens',
        body: [
          'Waikīkī has the widest kitchen spread on the island — chef’s-kitchen suites at the Ritz-Carlton Residences tier down to hotel rooms with a minibar. We confirm the kitchen at inquiry and say no early when the answer is no.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cook in a Waikīkī hotel suite?',
        a: 'Yes, where the suite has a real kitchen and the building allows it. We issue the COI, book the freight elevator, and confirm everything in writing before your date.',
      },
      {
        q: 'What does a private chef cost in Waikīkī?',
        a: 'The same published card as everywhere on Oʻahu — Signature $125–$190 a guest, Date Night from $450 — with no Waikīkī surcharge. Travel fees start on the North Shore, not here.',
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'In-suite dining', secondaryHref: '/oahu/locations/waikiki/in-suite-dining' },
    parent: 'locations',
    keywords: ['private chef Waikiki', 'in-suite chef Waikiki'],
  },
  {
    slug: 'locations/honolulu',
    category: 'location',
    title: 'Private Chef Honolulu — Metro Homes, Offices & Estates',
    h1: 'Honolulu, resident and corporate both.',
    meta: {
      description:
        'Private chef and catering across Honolulu: home dinners in Mānoa and Pūnāhou, corporate catering Downtown and in Kakaʻako, wedding catering at city venues. Published prices, written quotes.',
    },
    intro:
      'The metro hub runs both economies at once: resident dinners and weekly cook days in the neighborhoods, corporate and convention catering Downtown and in Kakaʻako.',
    sections: [
      {
        heading: 'The resident city',
        body: [
          'Home dinners in Mānoa, Pūnāhou, and Mōʻiliʻili; weekly cook days for professional households; occasion catering for graduations and anniversaries. Honolulu is where the kamaʻāina weekly line earns its keep.',
        ],
        links: [{ label: 'The weekly cook day', href: '/oahu/services/personal-chef-weekly' }],
      },
      {
        heading: 'The corporate city',
        body: [
          'Downtown boardrooms, Kakaʻako office floors, hotel function space absorbing the Convention Center’s displaced groups. COIs, dock scheduling, and rentals are standard operating procedure.',
        ],
        links: [
          { label: 'Corporate catering Downtown', href: '/oahu/locations/honolulu/corporate-catering' },
          { label: 'Wedding catering in Honolulu', href: '/oahu/locations/honolulu/wedding-catering' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Corporate catering', secondaryHref: '/oahu/locations/honolulu/corporate-catering' },
    parent: 'locations',
    keywords: ['private chef Honolulu', 'catering Honolulu'],
  },
  {
    slug: 'locations/kahala-gold-coast',
    category: 'location',
    title: 'Private Chef Kahala & Gold Coast — Estate Service',
    h1: 'Kahala, at estate standard.',
    meta: {
      description:
        'Private chef service in Kahala and the Gold Coast: estate dinners, weekly personal-chef service from $300/week, and full staffing for Oʻahu’s wealthiest residential corridor.',
    },
    intro:
      'Roughly twelve hundred of the island’s most valuable homes, and not one competitor page aimed at them. Kahala is estate territory: weekly cook days, staffed dinners, and butler-level service.',
    sections: [
      {
        heading: 'The resident rhythm',
        body: [
          'Most Kahala work is recurring: the weekly cook day from $300 a week plus groceries, estate dinners when the family is all down, and staffed holiday tables. The same chef each week, learning the household.',
        ],
        links: [{ label: 'Kahala weekly personal chef', href: '/oahu/locations/kahala-gold-coast/personal-chef' }],
      },
      {
        heading: 'Estate staffing',
        body: [
          'Servers at $55/hr, sous chefs at $75/hr, butler service for the tables that run at protocol. Staffing is itemized on the quote like everything else — four-hour floor, named crew.',
        ],
        links: [{ label: 'Butler service', href: '/oahu/services/staffing/butlers' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Weekly service', secondaryHref: '/oahu/locations/kahala-gold-coast/personal-chef' },
    parent: 'locations',
    keywords: ['private chef Kahala', 'estate chef Gold Coast Oahu'],
  },
  {
    slug: 'locations/ko-olina',
    category: 'location',
    title: 'Private Chef Ko Olina — Resort Villas & Residences',
    h1: 'Ko Olina, built for this.',
    meta: {
      description:
        'Private chef and Stay Chef service in Ko Olina: resort residences with purpose-built chef kitchens, legal 30-day rentals, wedding and lagoon-side events. Signature dinners $125–$190 a guest.',
    },
    intro:
      'The resort residences here were built with chef kitchens — this is the one corridor where the kitchen is never the problem. Legal 30-day rentals make Ko Olina the Stay Chef capital of the leeward side.',
    sections: [
      {
        heading: 'Stay Chef weeks',
        body: [
          'Ko Olina’s villas and residences are the natural home of the $850-a-day Stay Chef week: breakfasts before the lagoon, provisioning through the afternoon, dinners on the lānai.',
        ],
        links: [{ label: 'Stay Chef in Ko Olina', href: '/oahu/locations/ko-olina/stay-chef' }],
      },
      {
        heading: 'Weddings at the lagoons',
        body: [
          'The chapel-and-lagoon corridor runs its own wedding economy. We cater estate-side receptions and villa wedding weeks for parties the ballrooms are too big for.',
        ],
        links: [{ label: 'Wedding catering in Ko Olina', href: '/oahu/locations/ko-olina/wedding-catering' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Ko Olina Stay Chef', secondaryHref: '/oahu/locations/ko-olina/stay-chef' },
    parent: 'locations',
    keywords: ['private chef Ko Olina', 'vacation chef Ko Olina'],
  },
  {
    slug: 'locations/kapolei',
    category: 'location',
    title: 'Private Chef Kapolei — The Second City',
    h1: 'Kapolei, the second city.',
    meta: {
      description:
        'Private chef and catering in Kapolei: resident family dinners, weekly cook days, and second-city corporate events. Published Oʻahu rates, no leeward surcharge.',
    },
    intro:
      'Oʻahu’s second city buys like a city: family dinners, graduation parties, weekly cook days, and corporate events that do not want to drive into town.',
    sections: [
      {
        heading: 'Resident and corporate both',
        body: [
          'Kapolei households book the weekly line and occasion dinners; the business parks and Ko Olina-adjacent venues book staffed corporate catering. Same published card as the rest of the island — no leeward surcharge.',
        ],
        links: [
          { label: 'Catering in Kapolei', href: '/oahu/locations/kapolei/catering' },
          { label: 'The weekly cook day', href: '/oahu/services/personal-chef-weekly' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Kapolei catering', secondaryHref: '/oahu/locations/kapolei/catering' },
    parent: 'locations',
    keywords: ['private chef Kapolei', 'catering Kapolei'],
  },
  {
    slug: 'locations/kailua-lanikai',
    category: 'location',
    title: 'Private Chef Kailua & Lanikai — Windward Estates',
    h1: 'Kailua and Lanikai, windward side.',
    meta: {
      description:
        'Private chef service in Kailua, Lanikai, and Kāneʻohe: beachfront-estate dinners, Stay Chef weeks, and resident family tables. Signature dinners $125–$190 a guest, groceries included.',
    },
    intro:
      'Beachfront estates and 30-day renters on the windward side — Kailua, Lanikai, and Kāneʻohe covered as one service area, with dinners that end on the sand side of the lānai.',
    sections: [
      {
        heading: 'The windward week',
        body: [
          'Kailua’s beachfront houses are Stay Chef country: legal 30-day rentals, real kitchens, families settling in for the week. Villa agencies list chef add-ons; we are the team they call when the kitchen matters.',
        ],
        links: [{ label: 'Stay Chef in Kailua', href: '/oahu/locations/kailua-lanikai/stay-chef' }],
      },
      {
        heading: 'Resident tables',
        body: [
          'Windward residents book birthdays, anniversaries, and the weekly line. The drive over the Pali is ours, not yours — Kailua carries no travel fee.',
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Kailua Stay Chef', secondaryHref: '/oahu/locations/kailua-lanikai/stay-chef' },
    parent: 'locations',
    keywords: ['private chef Kailua', 'private chef Lanikai'],
  },
  {
    slug: 'locations/north-shore',
    category: 'location',
    title: 'Private Chef North Shore Oʻahu — Estate & Surf Season',
    h1: 'The North Shore, surf season and all.',
    meta: {
      description:
        'Private chef and catering on Oʻahu’s North Shore: estate dinners, Stay Chef surf-season weeks, and event catering from Waialua to Kahuku. Published travel fee from $75.',
      ogImage: '/img/oahu/loc-north-shore.jpg',
    },
    intro:
      'Estate country with a published drive surcharge from $75 and a calendar that runs on swells. Low competition up here; high standards anyway.',
    sections: [
      {
        heading: 'The drive is honest math',
        body: [
          'Town to the North Shore is 60–90 minutes each way, longer when the surf is up and Kamehameha Highway becomes a parking lot. The travel fee — from $75, published — is on the quote before you commit.',
        ],
        links: [
          { label: 'Drive times, honestly', href: '/oahu/guides/north-shore-drive' },
          { label: 'Travel zones', href: '/oahu/pricing/travel-zones' },
        ],
      },
      {
        heading: 'Estate weeks in surf season',
        body: [
          'October through April the estates fill with surf-season stays. A Stay Chef week puts breakfast, provisioning, and dinner inside the house while the ocean does its thing.',
        ],
        links: [
          { label: 'Stay Chef on the North Shore', href: '/oahu/locations/north-shore/stay-chef' },
          { label: 'North Shore catering', href: '/oahu/locations/north-shore/catering' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'North Shore Stay Chef', secondaryHref: '/oahu/locations/north-shore/stay-chef' },
    parent: 'locations',
    keywords: ['private chef North Shore Oahu', 'catering North Shore Oahu'],
  },
  {
    slug: 'locations/turtle-bay',
    category: 'location',
    title: 'Private Chef Turtle Bay — Resort Villas & Cottages',
    h1: 'Turtle Bay, at the end of the road.',
    meta: {
      description:
        'Private chef service at Turtle Bay and the surrounding resort villas: Signature dinners, Date Nights, and vacation-chef service with a published travel fee from $75.',
    },
    intro:
      'The resort anchor at the top of the island. Villas and cottages with real kitchens, a published travel fee from $75, and dinners that do not require leaving the property.',
    sections: [
      {
        heading: 'Dinner without the drive',
        body: [
          'Turtle Bay sits an hour-plus from town. A private chef dinner turns the villa into the restaurant — Signature $125–$190 a guest, Date Night from $450 — with the travel fee stated on the quote.',
        ],
        links: [{ label: 'Vacation chef at Turtle Bay', href: '/oahu/locations/turtle-bay/vacation-chef' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Vacation chef', secondaryHref: '/oahu/locations/turtle-bay/vacation-chef' },
    parent: 'locations/north-shore',
    keywords: ['private chef Turtle Bay', 'Turtle Bay villa chef'],
  },
  {
    slug: 'locations/hawaii-kai',
    category: 'location',
    title: 'Private Chef Hawaiʻi Kai — Marina-Side Resident Service',
    h1: 'Hawaiʻi Kai, marina side.',
    meta: {
      description:
        'Private chef service in Hawaiʻi Kai: weekly personal-chef cook days, marina-home dinners, and family occasion catering. Resident-market pricing on the published Oʻahu card.',
    },
    intro:
      'A marina suburb of resident households — this is weekly-cook-day country, with dinner parties that end on the dock.',
    sections: [
      {
        heading: 'The resident market',
        body: [
          'Hawaiʻi Kai books the way Kahala books: the standing weekly cook day from $300 a week plus groceries, family occasion dinners, and holiday tables. Same chef each week; same kitchen left clean.',
        ],
        links: [{ label: 'Hawaiʻi Kai weekly service', href: '/oahu/locations/hawaii-kai/personal-chef' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Weekly service', secondaryHref: '/oahu/locations/hawaii-kai/personal-chef' },
    parent: 'locations',
    keywords: ['private chef Hawaii Kai', 'personal chef Hawaii Kai'],
  },
  /* ------------------------------------------------------------------ */
  /* Service × location (Table 4.2.1a) — terms genuinely differ         */
  /* ------------------------------------------------------------------ */
  {
    slug: 'locations/waikiki/catering',
    category: 'service',
    title: 'Catering Waikīkī — Hotel-Adjacent Load-Ins, COI Handled',
    h1: 'Catering in the towers.',
    meta: {
      description:
        'Staffed catering in Waikīkī for 10–75 guests: hotel-adjacent load-in, building COIs, and freight-elevator logistics handled as standard. Published per-guest pricing, written quotes.',
    },
    intro:
      'Waikīkī catering is a logistics discipline: the COI naming the building, the freight elevator booked, load-in through the service corridor. We do it weekly — then we cook.',
    sections: [
      {
        heading: 'What changes in Waikīkī',
        body: [
          'Everything is vertical. Rentals ride a booked freight elevator; the COI goes to the property manager days ahead; compact galleys change the menu architecture. The per-guest prices do not change — Signature $125–$190, formats for 10–75 — but the plan accounts for the building.',
        ],
        links: [{ label: 'The COI and load-in guide', href: '/oahu/guides/condo-load-in-coi' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Waikīkī overview', secondaryHref: '/oahu/locations/waikiki' },
    parent: 'locations/waikiki',
    keywords: ['catering Waikiki', 'event catering Waikiki'],
  },
  {
    slug: 'locations/waikiki/in-suite-dining',
    category: 'service',
    title: 'In-Suite Private Chef Waikīkī — The Kitchen-Suite Tier',
    h1: 'Dinner, forty floors up.',
    meta: {
      description:
        'In-suite private chef dining in Waikīkī’s kitchen suites — Ritz-Carlton Residences and ESPACIO tier: Signature dinners, Date Nights from $450, and in-suite omakase with building logistics handled.',
    },
    intro:
      'The chef’s-kitchen suites at the top of Waikīkī’s towers are the best private dining rooms on the island. We bring the chef, the COI, and the menu; you keep the view.',
    sections: [
      {
        heading: 'How an in-suite dinner runs',
        body: [
          'We confirm the kitchen and the building rules at inquiry. The COI goes to the property manager, the freight elevator gets booked, and your chef arrives through the service corridor ninety minutes before the first course. Signature menus $125–$190 a guest; Date Night from $450.',
        ],
        links: [
          { label: 'Omakase in Waikīkī', href: '/oahu/locations/waikiki/omakase' },
          { label: 'The kitchen guide', href: '/oahu/guides/villa-kitchen' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Date Night from $450', secondaryHref: '/oahu/services/date-night' },
    parent: 'locations/waikiki',
    keywords: ['in-suite private chef Waikiki', 'private chef suite Honolulu'],
  },
  {
    slug: 'locations/waikiki/omakase',
    category: 'service',
    title: 'Omakase at Home Waikīkī — In-Suite Kaiseki',
    h1: 'The counter comes to Waikīkī.',
    meta: {
      description:
        'In-suite omakase and kaiseki in Waikīkī: chef’s-choice multi-course menus served at your kitchen counter, from the Premium band at $190–$400+ a guest. Japanese-language consultation available.',
    },
    intro:
      'Multi-course kaiseki at the counter of your own suite — the format the top of this market already proved, without the reservation book.',
    sections: [
      {
        heading: 'In-suite kaiseki',
        body: [
          'Twelve to twenty courses across the evening, the menu set by the morning’s market, served at the kitchen counter of suites that have real ones. Quoted from the Premium band, $190–$400+ a guest depending on course count.',
        ],
        links: [
          { label: 'The omakase service', href: '/oahu/services/omakase-at-home' },
          { label: '日本語でのご相談', href: '/oahu/ja/omakase-at-home' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Omakase service', secondaryHref: '/oahu/services/omakase-at-home' },
    parent: 'services/omakase-at-home',
    keywords: ['omakase at home Waikiki', 'in-suite omakase Honolulu'],
  },
  {
    slug: 'locations/honolulu/corporate-catering',
    category: 'service',
    title: 'Corporate Catering Downtown Honolulu & Kakaʻako',
    h1: 'Downtown and Kakaʻako, catered.',
    meta: {
      description:
        'Corporate catering for Downtown Honolulu and Kakaʻako offices: boardroom dinners, office-floor receptions, and convention-displacement events with COIs and dock logistics handled.',
    },
    intro:
      'Kakaʻako and Downtown hold the island’s office density — boardrooms, coworking floors, and hotel function space filling in while the Convention Center runs modified.',
    sections: [
      {
        heading: 'Office-floor logistics',
        body: [
          'Dock scheduling, freight elevators, COIs naming the tower, and menus engineered for kitchens that range from full to none. Where the building has no kitchen, we finish on site from a hot-box plan — and we tell you that at the quote stage.',
        ],
        links: [{ label: 'The corporate hub', href: '/oahu/corporate' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Convention dining', secondaryHref: '/oahu/services/convention-dining' },
    parent: 'corporate',
    keywords: ['corporate catering Honolulu downtown', 'Kakaako catering'],
  },
  {
    slug: 'locations/honolulu/wedding-catering',
    category: 'service',
    title: 'Wedding Catering Honolulu — Estates, Villas & City Venues',
    h1: 'Honolulu weddings, our ground.',
    meta: {
      description:
        'Wedding catering in Honolulu for estates, villas, and private venues: the wedding week as one contract, from $125 a guest plus staffing. Elopements, rehearsals, receptions, recovery brunches.',
    },
    intro:
      'Honolulu runs thousands of weddings a year — most of them local. We serve the ones with a kitchen or a venue that allows an outside chef.',
    sections: [
      {
        heading: 'Where we win in town',
        body: [
          'Private estates from Kahala to the back of Mānoa, villas, and the venues without exclusive-caterer locks. The wedding week runs as one contract — welcome dinner through recovery brunch — from $125 a guest plus staffing.',
        ],
        links: [
          { label: 'The wedding week', href: '/oahu/weddings/wedding-week' },
          { label: 'Reception catering', href: '/oahu/weddings/reception-catering' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The wedding hub', secondaryHref: '/oahu/weddings' },
    parent: 'weddings',
    keywords: ['wedding catering Honolulu', 'Honolulu wedding caterer'],
  },
  {
    slug: 'locations/ko-olina/wedding-catering',
    category: 'service',
    title: 'Wedding Catering Ko Olina — The Lagoon Corridor',
    h1: 'Ko Olina weddings, villa-side.',
    meta: {
      description:
        'Wedding catering in Ko Olina: chapel-and-lagoon weddings with villa receptions, the wedding week as one contract, from $125 a guest plus staffing. Estates and private property welcome.',
    },
    intro:
      'The chapel-and-lagoon corridor books ceremonies beautifully; the receptions with character happen at the villas. That reception is ours.',
    sections: [
      {
        heading: 'Villa receptions at Ko Olina',
        body: [
          'The resort residences and nearby estates give you a kitchen, a lānai, and no ballroom minimum. We run plated or family-style receptions for up to 75, plus the welcome dinner and recovery brunch around the wedding day itself.',
        ],
        links: [{ label: 'Ko Olina overview', href: '/oahu/locations/ko-olina' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Wedding week', secondaryHref: '/oahu/weddings/wedding-week' },
    parent: 'weddings',
    keywords: ['wedding catering Ko Olina', 'Ko Olina wedding caterer'],
  },
  {
    slug: 'locations/ko-olina/stay-chef',
    category: 'service',
    title: 'Stay Chef Ko Olina — Vacation Chef Weeks, from $850/Day',
    h1: 'A chef for the Ko Olina week.',
    meta: {
      description:
        'Stay Chef service in Ko Olina from $850 a day plus groceries at cost: breakfast, provisioning, and dinner in residences with purpose-built chef kitchens. Legal 30-day rental zone.',
    },
    intro:
      'Ko Olina’s residences were built with the kind of kitchens chefs ask for — and the 30-day rental rules mean stays long enough to deserve a Stay Chef.',
    sections: [
      {
        heading: 'The Ko Olina week',
        body: [
          'Breakfast before the lagoon, a stocked fridge through the afternoon, dinner on the lānai at sunset. From $850 a day plus groceries at cost — the rhythm set to your family, the total in writing before you commit.',
        ],
        links: [{ label: 'Stay Chef island-wide', href: '/oahu/stay-chef' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Stay Chef costs', secondaryHref: '/oahu/pricing/stay-chef-cost' },
    parent: 'stay-chef',
    keywords: ['vacation chef Ko Olina', 'stay chef Ko Olina'],
  },
  {
    slug: 'locations/kailua-lanikai/stay-chef',
    category: 'service',
    title: 'Stay Chef Kailua — Beachfront Estate Weeks',
    h1: 'A chef for the Kailua week.',
    meta: {
      description:
        'Stay Chef service in Kailua and Lanikai from $850 a day plus groceries at cost: full-board cooking in beachfront estates, the windward side’s answer to eating out every night.',
    },
    intro:
      'Beachfront estates, 30-day stays, and kitchens that face the water. Kailua weeks are what the Stay Chef line was built for.',
    sections: [
      {
        heading: 'The windward rhythm',
        body: [
          'Slow breakfasts, beach-day provisioning, dinners as the trade winds cool off. From $850 a day plus groceries at cost, with the Kailua Farmers’ Market in the shopping loop.',
        ],
        links: [{ label: 'Kailua–Lanikai overview', href: '/oahu/locations/kailua-lanikai' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Stay Chef costs', secondaryHref: '/oahu/pricing/stay-chef-cost' },
    parent: 'stay-chef',
    keywords: ['vacation chef Kailua', 'chef for a week Kailua'],
  },
  {
    slug: 'locations/north-shore/stay-chef',
    category: 'service',
    title: 'Chef for a Week on the North Shore — Surf Season Estates',
    h1: 'A chef for the surf-season week.',
    meta: {
      description:
        'Stay Chef weeks on Oʻahu’s North Shore from $850 a day plus groceries, with the published travel fee from $75. Estate kitchens, surf-season calendars, honest drive-time math.',
    },
    intro:
      'October through April the North Shore estates fill up and the restaurants stay exactly as far away as ever. A Stay Chef week closes that gap.',
    sections: [
      {
        heading: 'The drive, priced in',
        body: [
          'The 60–90 minute drive each way is why the North Shore carries a published travel fee from $75 — it appears on the quote as its own line, next to the day rate, groceries at cost, 20% service, and GET.',
        ],
        links: [{ label: 'North Shore drive times', href: '/oahu/guides/north-shore-drive' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Travel zones', secondaryHref: '/oahu/pricing/travel-zones' },
    parent: 'stay-chef',
    keywords: ['chef for a week North Shore Oahu', 'stay chef North Shore'],
  },
  {
    slug: 'locations/north-shore/catering',
    category: 'service',
    title: 'Catering North Shore Oʻahu — Estate Events, 10–75',
    h1: 'North Shore events, catered.',
    meta: {
      description:
        'Staffed catering on Oʻahu’s North Shore for estate events of 10–75 guests: buffets, family-style, and plated formats with rentals, staffing, and the published travel fee itemized.',
    },
    intro:
      'Estate events from Waialua to Kahuku with a real supply gap — most caterers will not make the drive. We publish the travel fee and make the drive.',
    sections: [
      {
        heading: 'Estate event logistics',
        body: [
          'Rentals trucked in, staffing at the published $55/$75 hourlys, travel from $75 on its own line. Formats for 10–75 guests; over 75 is a written exception, quoted honestly if the property supports it.',
        ],
        links: [{ label: 'The catering hub', href: '/oahu/catering' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Catering formats', secondaryHref: '/oahu/catering' },
    parent: 'catering',
    keywords: ['catering North Shore Oahu', 'estate catering North Shore'],
  },
  {
    slug: 'locations/kahala-gold-coast/personal-chef',
    category: 'service',
    title: 'Personal Chef Kahala — Weekly Estate Service from $300/Week',
    h1: 'The Kahala cook day.',
    meta: {
      description:
        'Weekly personal chef service in Kahala and the Gold Coast from $300 a week plus groceries at cost: one standing cook day, a week of dinners, the same chef every week.',
    },
    intro:
      'Estate household service at resident pricing: one standing cook day a week, dinners for the fridge and the table, groceries at cost with receipts.',
    sections: [
      {
        heading: 'Built for the estate week',
        body: [
          'The household sets the standing day; the chef plans, shops, cooks, packs, and cleans. From $300 a week plus groceries — quoted as a weekly total in writing, honored like every other number we publish.',
        ],
        links: [{ label: 'The weekly line', href: '/oahu/services/personal-chef-weekly' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Kahala overview', secondaryHref: '/oahu/locations/kahala-gold-coast' },
    parent: 'services/personal-chef-weekly',
    keywords: ['personal chef Kahala weekly', 'estate chef Kahala'],
  },
  {
    slug: 'locations/hawaii-kai/personal-chef',
    category: 'service',
    title: 'Personal Chef Hawaiʻi Kai — Weekly Cook Days',
    h1: 'The Hawaiʻi Kai cook day.',
    meta: {
      description:
        'Weekly personal chef service in Hawaiʻi Kai from $300 a week plus groceries: a standing cook day for marina-side households, menus built to the family, kitchen left clean.',
    },
    intro:
      'Marina-side households running full calendars — the weekly cook day takes dinners off the list without taking dinner out of the house.',
    sections: [
      {
        heading: 'A standing day, a stocked fridge',
        body: [
          'From $300 a week plus groceries at cost: menus built around the household’s protocols, cooked fresh in your kitchen, packed and labeled. The same chef each week, so the fifth week is better than the first.',
        ],
        links: [{ label: 'Hawaiʻi Kai overview', href: '/oahu/locations/hawaii-kai' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Weekly cost, worked', secondaryHref: '/oahu/pricing/kamaaina-weekly-cost' },
    parent: 'services/personal-chef-weekly',
    keywords: ['personal chef Hawaii Kai', 'weekly chef Hawaii Kai'],
  },
  {
    slug: 'locations/turtle-bay/vacation-chef',
    category: 'service',
    title: 'Vacation Chef Turtle Bay — Villa Dinners & Full Board',
    h1: 'The Turtle Bay table.',
    meta: {
      description:
        'Vacation chef service for Turtle Bay villas and cottages: single Signature dinners from $125–$190 a guest or full board at $179–$300+ per guest per day, travel fee from $75 itemized.',
    },
    intro:
      'The resort-adjacent rentals at the top of the island — a chef in the villa kitchen means the best table on the point is yours.',
    sections: [
      {
        heading: 'Single dinners or full board',
        body: [
          'Book one Signature dinner for the big night or the full-board line for the whole stay — $179–$300+ per guest per day covering breakfasts, provisioning, and dinners. The Turtle Bay travel fee (from $75) is itemized on the quote.',
        ],
        links: [{ label: 'Turtle Bay overview', href: '/oahu/locations/turtle-bay' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Vacation chef service', secondaryHref: '/oahu/services/vacation-chef' },
    parent: 'services/vacation-chef',
    keywords: ['private chef Turtle Bay villas', 'vacation chef Turtle Bay'],
  },
  {
    slug: 'locations/kapolei/catering',
    category: 'service',
    title: 'Catering Kapolei — Second-City Events, 10–75 Guests',
    h1: 'Kapolei events, staffed.',
    meta: {
      description:
        'Staffed catering in Kapolei for 10–75 guests: family celebrations, corporate events, and community gatherings at published Oʻahu rates — no leeward surcharge, itemized quotes.',
    },
    intro:
      'The second city’s events — graduations, reunions, corporate gatherings — catered at the same published rates as town, without the cross-island logistics fee.',
    sections: [
      {
        heading: 'Same card, no surcharge',
        body: [
          'Kapolei sits inside the base zone: Signature lines $125–$190 a guest, staffing at $55/$75 an hour, formats for 10–75. The written quote itemizes everything, as everywhere on the island.',
        ],
        links: [{ label: 'The catering hub', href: '/oahu/catering' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Kapolei overview', secondaryHref: '/oahu/locations/kapolei' },
    parent: 'catering',
    keywords: ['catering Kapolei', 'event catering Kapolei'],
  },
  /* ------------------------------------------------------------------ */
  /* Occasions (Table 4.2.1b)                                           */
  /* ------------------------------------------------------------------ */
  {
    slug: 'occasions',
    category: 'occasion',
    title: 'Private Chef for Events on Oʻahu — Every Occasion',
    h1: 'The occasion table.',
    meta: {
      description:
        'Private chef and catering for Oʻahu occasions: birthdays, anniversaries, proposals, graduations, bachelorettes, holiday dinners, reunions, villa parties, and celebrations of life.',
    },
    intro:
      'Most Oʻahu bookings are not “dinner” — they are a birthday, a proposal, a graduation, a reunion. Each occasion runs a little differently; here is how we run each.',
    sections: [
      {
        heading: 'Pick the occasion',
        links: [
          { label: 'Birthdays', href: '/oahu/occasions/birthday' },
          { label: 'Anniversaries', href: '/oahu/occasions/anniversary' },
          { label: 'Proposals', href: '/oahu/occasions/proposal' },
          { label: 'Graduation parties', href: '/oahu/occasions/graduation' },
          { label: 'Bachelorette dinners', href: '/oahu/occasions/bachelorette' },
          { label: 'Holiday dinners', href: '/oahu/occasions/holiday-dinner' },
          { label: 'Family reunions', href: '/oahu/occasions/family-reunion' },
          { label: 'Villa parties', href: '/oahu/occasions/villa-party' },
          { label: 'Celebrations of life', href: '/oahu/occasions/celebration-of-life' },
        ],
        body: [
          'Every occasion page states the format, the realistic price, and the lead time. All of them end the same way: a written quote that is the confirmed total.',
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: WA },
    parent: '',
    keywords: ['private chef for events Oahu', 'occasion catering Honolulu'],
  },
  {
    slug: 'occasions/birthday',
    category: 'occasion',
    title: 'Birthday Private Chef Honolulu — Dinners That Feel Like the Person',
    h1: 'The birthday table.',
    meta: {
      description:
        'Birthday private chef dinners in Honolulu and across Oʻahu: Signature menus $125–$190 a guest, family-style feasts for groups, and the cake moment timed to the course. All ages, all kitchens.',
    },
    intro:
      'The restaurant birthday means a set menu and a time limit. The home birthday means the guest of honor’s favorite dishes, cooked in their kitchen, with nowhere else to be.',
    sections: [
      {
        heading: 'Built around the person',
        body: [
          'Tell us what they love and we write the menu around it — the dish from the trip, the dessert they always order. Groups run family-style; smaller tables run coursed. Kids’ seatings slot in early when the party is multi-generational.',
        ],
        links: [
          { label: 'Family-style menus', href: '/oahu/menus/family-style' },
          { label: 'Kid-friendly service', href: '/oahu/services/kids-menus' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Family-style menus', secondaryHref: '/oahu/menus/family-style' },
    parent: 'occasions',
    keywords: ['birthday private chef Honolulu', 'birthday dinner catering Oahu'],
  },
  {
    slug: 'occasions/anniversary',
    category: 'occasion',
    title: 'Anniversary Dinner Private Chef Honolulu',
    h1: 'The anniversary dinner.',
    meta: {
      description:
        'Private anniversary dinners on Oʻahu: coursed menus for two from $450, or the whole family at the table for the big years. Your kitchen, your pace, the year honored properly.',
    },
    intro:
      'Two seats or twenty — the anniversary dinner is about the year, not the reservation. Date Night from $450 for two; Signature menus $125–$190 a guest when the family flies in.',
    sections: [
      {
        heading: 'For two, or for the whole story',
        body: [
          'Most anniversaries are a quiet dinner for two at home. The big ones — twenty-five, fifty — bring the family, and those run family-style with the stories as loud as they like. Both end with a clean kitchen.',
        ],
        links: [{ label: 'Date Night', href: '/oahu/services/date-night' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Date Night', secondaryHref: '/oahu/services/date-night' },
    parent: 'occasions',
    keywords: ['anniversary dinner private chef Honolulu', 'anniversary chef Oahu'],
  },
  {
    slug: 'occasions/proposal',
    category: 'occasion',
    title: 'Proposal Dinner Private Chef Oʻahu — The Sunset Format',
    h1: 'The question, catered.',
    meta: {
      description:
        'Private proposal dinners on Oʻahu: a coursed dinner for two from $450, timed to the light, with the ring course arriving exactly when planned. Suites, lānai, and private estates.',
    },
    intro:
      'A coursed dinner for two where the timing is choreographed and nobody at the next table films it. From $450 — the sunset course is on us to time.',
    sections: [
      {
        heading: 'How the evening is staged',
        body: [
          'We plan the course count around the moment: the ring arrives with the third course, or with dessert, or on the lānai between courses while the kitchen goes quiet. Your chef is briefed, invisible, and ready with the champagne the second the answer lands.',
        ],
        links: [{ label: 'Date Night', href: '/oahu/services/date-night' }],
      },
    ],
    cta: { label: 'Plan the dinner', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: WA },
    parent: 'occasions',
    keywords: ['proposal dinner private chef Oahu', 'proposal dinner Honolulu'],
  },
  {
    slug: 'occasions/graduation',
    category: 'occasion',
    title: 'Graduation Party Catering Honolulu — May & June Season',
    h1: 'Graduation season, fed.',
    meta: {
      description:
        'Graduation party catering in Honolulu for 10–75 guests: family-style feasts, buffets, and pūpū spreads during Oʻahu’s May–June graduation season. Book early — the calendar fills.',
    },
    intro:
      'May and June on Oʻahu are graduation season — every family, every weekend. We cater the party at home so the graduate’s house is the venue.',
    sections: [
      {
        heading: 'The local format',
        body: [
          'Family-style and buffet lines for 10–75, pūpū and grazing tables for the open-house format, and a published per-guest price before you commit. Graduation season books out — the earlier the quote, the safer the date.',
        ],
        links: [
          { label: 'Pūpū and grazing', href: '/oahu/menus/pupu-and-grazing' },
          { label: 'Booking lead times', href: '/oahu/guides/booking-lead-times' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Catering hub', secondaryHref: '/oahu/catering' },
    parent: 'occasions',
    keywords: ['graduation party catering Honolulu', 'graduation catering Oahu'],
  },
  {
    slug: 'occasions/bachelorette',
    category: 'occasion',
    title: 'Bachelorette Private Chef Oʻahu — The Villa-Group Format',
    h1: 'The bachelorette dinner in.',
    meta: {
      description:
        'Bachelorette private chef dinners on Oʻahu: villa-group menus, brunch service, and bar-cart add-ons for groups of 6–20. The night in that outlasts the night out.',
    },
    intro:
      'The villa-group format: one big dinner in the rental that becomes the night everyone remembers, brunch the morning after. Waikīkī suites to North Shore houses.',
    sections: [
      {
        heading: 'Dinner in, brunch after',
        body: [
          'Family-style or coursed dinners for 6–20, the bar cart add-on (from $650 per four hours plus $45 a guest) for the pre-dinner hour, and a recovery brunch booking for the morning after. One quote, both meals.',
        ],
        links: [
          { label: 'The bar cart', href: '/oahu/services/mobile-bar' },
          { label: 'Breakfast & brunch menus', href: '/oahu/menus/breakfast-and-brunch' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Brunch menus', secondaryHref: '/oahu/menus/breakfast-and-brunch' },
    parent: 'occasions',
    keywords: ['bachelorette private chef Oahu', 'bachelorette party catering Honolulu'],
  },
  {
    slug: 'occasions/holiday-dinner',
    category: 'occasion',
    title: 'Thanksgiving & Holiday Private Chef Oʻahu',
    h1: 'The holiday table, without the stress shift.',
    meta: {
      description:
        'Holiday private chef service on Oʻahu: Thanksgiving, Christmas, and New Year tables cooked in your kitchen. December is the peak — the holiday calendar and any surcharges publish in Q3.',
    },
    intro:
      'Thanksgiving, Christmas, New Year’s — the meals with the most riding on them, cooked in your kitchen while you actually attend your own holiday. December is our peak; book early.',
    sections: [
      {
        heading: 'How holiday bookings run',
        body: [
          'Holiday menus publish as a seasonal rotation each Q3, alongside any holiday surcharge calendar — you will see the premium dates before you book, never after. The format is yours: the full traditional table or a holiday menu that ignores tradition entirely.',
        ],
        links: [{ label: 'The holiday menu', href: '/oahu/menus/holiday' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Holiday menu', secondaryHref: '/oahu/menus/holiday' },
    parent: 'occasions',
    keywords: ['Thanksgiving private chef Oahu', 'holiday catering Honolulu'],
  },
  {
    slug: 'occasions/family-reunion',
    category: 'occasion',
    title: 'Family Reunion Catering Oʻahu — Multi-Generation Tables',
    h1: 'The reunion table.',
    meta: {
      description:
        'Family reunion catering on Oʻahu for multi-generational groups of 10–75: family-style feasts, kids’ seatings, dietary protocols across three generations, one itemized quote.',
    },
    intro:
      'Three generations, four dietary protocols, fifteen opinions about what time dinner is. We have run this table before.',
    sections: [
      {
        heading: 'Feeding three generations',
        body: [
          'Kids eat early and well, the adults sit down at seven, and the dietary matrix covers everyone from the keto uncle to the celiac cousin. Family-style is the format that survives a reunion — platters down the middle, stories over the top.',
        ],
        links: [
          { label: 'Family-style menus', href: '/oahu/menus/family-style' },
          { label: 'The dietary matrix', href: '/oahu/services/dietary' },
        ],
      },
      {
        heading: 'The reunion week',
        body: [
          'Many reunion groups book the anchor dinner plus a Stay Chef day or two around it. One quote can hold the whole week — dinners, a brunch, the bar cart for the first night.',
        ],
        links: [{ label: 'Stay Chef', href: '/oahu/stay-chef' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Stay Chef weeks', secondaryHref: '/oahu/stay-chef' },
    parent: 'occasions',
    keywords: ['family reunion catering Oahu', 'reunion private chef Honolulu'],
  },
  {
    slug: 'occasions/villa-party',
    category: 'occasion',
    title: 'Villa Party Catering Oʻahu — Staffed, 10–75 Guests',
    h1: 'The villa party, staffed.',
    meta: {
      description:
        'Villa party catering on Oʻahu for 10–75 guests: chef-attended stations, pūpū and grazing, bar cart add-ons, and full staffing. Over 75 is a written exception — quoted, never implied.',
    },
    intro:
      'The house is the venue; we are the crew. Stations, grazing, or a full coursed dinner for 10–75, with servers, the bar cart, and a kitchen left clean after the last guest leaves.',
    sections: [
      {
        heading: 'Formats that move',
        body: [
          'Chef-attended stations keep a party standing and talking; pūpū and grazing runs all evening without a seating plan. Add servers at $55/hr and the packaged bar cart, and the hosts attend their own party.',
        ],
        links: [
          { label: 'Pūpū and grazing', href: '/oahu/menus/pupu-and-grazing' },
          { label: 'Staffing rates', href: '/oahu/services/staffing' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Catering hub', secondaryHref: '/oahu/catering' },
    parent: 'occasions',
    keywords: ['villa party catering Oahu', 'house party catering Honolulu'],
  },
  {
    slug: 'occasions/celebration-of-life',
    category: 'occasion',
    title: 'Celebration of Life Catering Oʻahu — Handled Gently',
    h1: 'The gathering, handled gently.',
    meta: {
      description:
        'Celebration of life catering on Oʻahu: quiet, competent service for memorial gatherings at homes and estates. Family-style formats, flexible timing, and one itemized quote.',
    },
    intro:
      'A gathering that should ask nothing of the family. We plan quietly, serve unobtrusively, and leave the kitchen clean — the food is handled so the day can be about the person.',
    sections: [
      {
        heading: 'Quiet competence',
        body: [
          'Family-style and buffet formats that let people eat when they are ready, timing that flexes around the service, and a single point of contact so the family answers questions once. If the person had a favorite dish, tell us — it will be on the table.',
        ],
        links: [{ label: 'Family-style menus', href: '/oahu/menus/family-style' }],
      },
    ],
    cta: { label: 'Talk to us', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: WA },
    parent: 'occasions',
    keywords: ['celebration of life catering Oahu', 'memorial catering Honolulu'],
  },
  /* ------------------------------------------------------------------ */
  /* Wedding cluster (Table 4.2.1b)                                     */
  /* ------------------------------------------------------------------ */
  {
    slug: 'weddings/wedding-week',
    category: 'wedding',
    title: 'Wedding Week Chef Oʻahu — One Contract, Every Meal',
    h1: 'The wedding week, one contract.',
    meta: {
      description:
        'The Oʻahu wedding week as a single contract: welcome dinner, rehearsal, reception, and recovery brunch from $125 a guest plus staffing — one chef team, one written quote, no per-event re-negotiation.',
    },
    intro:
      'Four events, four caterers, four contracts is the old way. The wedding week puts every meal from the welcome dinner to the recovery brunch under one contract, from $125 a guest plus staffing.',
    sections: [
      {
        heading: 'The five lines of the week',
        body: [
          'Welcome dinner for the arrivals. Rehearsal dinner for the inner circle. Ceremony-adjacent pūpū for the gap hour. The reception itself. Recovery brunch the morning after. Each is its own line on one quote — guests counted per event, menus matched per moment.',
        ],
        links: [
          { label: 'Welcome dinner', href: '/oahu/weddings/welcome-dinner' },
          { label: 'Rehearsal dinner', href: '/oahu/weddings/rehearsal-dinner' },
          { label: 'Reception catering', href: '/oahu/weddings/reception-catering' },
          { label: 'Recovery brunch', href: '/oahu/weddings/recovery-brunch' },
        ],
      },
      {
        heading: 'Why one contract wins',
        body: [
          'One chef team learns the family once. Dietary notes carry across the week. Rentals, staffing, and timing coordinate internally instead of through four vendors. And the quote shows the whole week’s number before anyone signs anything.',
        ],
        links: [{ label: 'Wedding week budget, worked', href: '/oahu/pricing/wedding-week-budget' }],
      },
    ],
    faq: [
      {
        q: 'What does a wedding week cost on Oʻahu?',
        a: 'From $125 a guest per event plus staffing at $55/$75 an hour, with the total shaped by guest counts per event. A worked example lives on the budget page — and your written quote is the confirmed total.',
        links: [{ label: 'The worked budget', href: '/oahu/pricing/wedding-week-budget' }],
      },
      {
        q: 'Can you cater just the reception?',
        a: 'Yes — every format books standalone. The week simply prices better and plans easier as one contract.',
      },
      {
        q: 'Do you work at venues with exclusive caterers?',
        a: 'No — and we say so honestly. Some marquee Oʻahu venues hold exclusive caterers. Estates, villas, and private property are where we work.',
        links: [{ label: 'Estate weddings', href: '/oahu/weddings/estate-wedding' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The worked budget', secondaryHref: '/oahu/pricing/wedding-week-budget' },
    parent: 'weddings',
    keywords: ['wedding week chef Oahu', 'wedding catering Oahu'],
  },
  {
    slug: 'weddings/rehearsal-dinner',
    category: 'wedding',
    title: 'Rehearsal Dinner Catering Oʻahu — 12–40 Guests',
    h1: 'The rehearsal dinner.',
    meta: {
      description:
        'Rehearsal dinner catering on Oʻahu for 12–40 guests: plated or family-style formats from $125 a guest plus staffing. The night that sets the week’s tone.',
    },
    intro:
      'Twelve to forty of the closest people, the night before. Plated or family-style, from $125 a guest plus staffing — the dinner that sets the tone for everything after.',
    sections: [
      {
        heading: 'The format that works',
        body: [
          'Family-style wins rehearsal dinners: it is loud, generous, and built for toasts. Plated works when the evening is shorter and more formal. Either way the per-guest line matches the wedding-week card, and the server count is named on the quote.',
        ],
        links: [
          { label: 'The wedding week', href: '/oahu/weddings/wedding-week' },
          { label: 'Welcome dinner', href: '/oahu/weddings/welcome-dinner' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The wedding week', secondaryHref: '/oahu/weddings/wedding-week' },
    parent: 'weddings/wedding-week',
    keywords: ['rehearsal dinner catering Oahu', 'rehearsal dinner Honolulu'],
  },
  {
    slug: 'weddings/welcome-dinner',
    category: 'wedding',
    title: 'Welcome Dinner Catering Oʻahu — The First Night',
    h1: 'The welcome dinner.',
    meta: {
      description:
        'Welcome dinner catering on Oʻahu for 20–75 guests: family-style or buffet formats from $125 a guest plus staffing. The first night of the wedding week, done right.',
    },
    intro:
      'Everyone just landed. The welcome dinner feeds 20–75 of them family-style or buffet, from $125 a guest plus staffing — generous, unfussy, and done by ten.',
    sections: [
      {
        heading: 'Built for arrivals',
        body: [
          'The welcome dinner runs on travel-delay tolerance: buffet and family-style formats that hold well, a bar cart for the early arrivals, and a menu that pleases the aunties and the college friends simultaneously.',
        ],
        links: [
          { label: 'The wedding week', href: '/oahu/weddings/wedding-week' },
          { label: 'Recovery brunch', href: '/oahu/weddings/recovery-brunch' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The wedding week', secondaryHref: '/oahu/weddings/wedding-week' },
    parent: 'weddings/wedding-week',
    keywords: ['welcome dinner catering Oahu', 'welcome party catering Honolulu'],
  },
  {
    slug: 'weddings/reception-catering',
    category: 'wedding',
    title: 'Wedding Reception Catering Oʻahu — Estates & Villas, 30–75',
    h1: 'The reception, outside the ballroom.',
    meta: {
      description:
        'Wedding reception catering on Oʻahu for 30–75 guests at estates, villas, and private property: plated two-to-three courses or premium buffet from $125 a guest plus staffing.',
    },
    intro:
      'Plated two-to-three courses or a premium buffet for 30–75 at estates and villas — not ballrooms. Over 75 is a written exception, quoted honestly.',
    sections: [
      {
        heading: 'Plated or premium buffet',
        body: [
          'Plated service runs one server per 10–12 guests and a kitchen plan matched to the menu. Premium buffet runs leaner on staffing and longer on abundance. Both price from the same per-guest lines — your planner gets a quote they can read line by line.',
        ],
        links: [
          { label: 'What wedding catering costs', href: '/oahu/weddings/wedding-cost' },
          { label: 'Estate weddings', href: '/oahu/weddings/estate-wedding' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Cost benchmarks', secondaryHref: '/oahu/weddings/wedding-cost' },
    parent: 'weddings',
    keywords: ['wedding reception catering Oahu', 'reception catering Honolulu'],
  },
  {
    slug: 'weddings/recovery-brunch',
    category: 'wedding',
    title: 'Day-After Wedding Brunch Oʻahu — The Recovery Format',
    h1: 'The recovery brunch.',
    meta: {
      description:
        'Recovery brunch catering on Oʻahu for 10–40 guests: the late-morning, day-after format with coffee, proper food, and zero setup asked of the wedding party.',
    },
    intro:
      'Late morning, day after, 10–40 of the survivors. Coffee that works, food that revives, and a kitchen we clean while the stories get retold.',
    sections: [
      {
        heading: 'The morning after, handled',
        body: [
          'We arrive quietly, set up without asking anyone anything, and serve a brunch built for recovery — fruit, eggs every way, rice and the local comforts, strong coffee. The wedding party attends its own brunch.',
        ],
        links: [
          { label: 'Breakfast & brunch menus', href: '/oahu/menus/breakfast-and-brunch' },
          { label: 'The wedding week', href: '/oahu/weddings/wedding-week' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Brunch menus', secondaryHref: '/oahu/menus/breakfast-and-brunch' },
    parent: 'weddings/wedding-week',
    keywords: ['day after wedding brunch Oahu', 'recovery brunch Honolulu'],
  },
  {
    slug: 'weddings/elopement',
    category: 'wedding',
    title: 'Elopement Private Chef Oʻahu — Dinner for Two, from $450',
    h1: 'The elopement dinner.',
    meta: {
      description:
        'Elopement private chef dinners on Oʻahu from $450: the unbundled micro-wedding — ceremony somewhere beautiful, then a coursed dinner for two cooked in your suite or villa.',
    },
    intro:
      'The unbundled micro-wedding: the ceremony is yours, the reception is a coursed dinner for two from $450, and nobody had to pick a chair cover.',
    sections: [
      {
        heading: 'Two people, full ceremony of a meal',
        body: [
          'Champagne timing, a menu built for the two of you, a server if you want one and invisibility if you do not. Elopements book like Date Nights with better clothes — same fixed-price honesty, from $450.',
        ],
        links: [{ label: 'Date Night', href: '/oahu/services/date-night' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The wedding hub', secondaryHref: '/oahu/weddings' },
    parent: 'weddings',
    keywords: ['elopement private chef Oahu', 'elopement dinner Honolulu'],
  },
  {
    slug: 'weddings/estate-wedding',
    category: 'wedding',
    title: 'Estate Wedding Catering Oʻahu — Private Property Specialists',
    h1: 'The estate wedding.',
    meta: {
      description:
        'Estate wedding catering on Oʻahu: private-property receptions where an outside chef can actually win — full kitchen crews, rentals coordination, and per-guest lines from $125 plus staffing.',
    },
    intro:
      'Some marquee venues hold exclusive caterers — Waimea Valley locks its list, and we say so plainly. Estates, villas, and private property are where an outside chef wins. That is our ground.',
    sections: [
      {
        heading: 'What an estate reception needs',
        body: [
          'A kitchen plan (the estate’s, or a field kitchen we spec), rentals coordinated to the lawn, a crew sized at one server per 10–12 guests, and power and water mapped before the quote is written. We walk the property before we promise anything.',
        ],
        links: [
          { label: 'Venues with kitchens', href: '/oahu/weddings/venues' },
          { label: 'The wedding week', href: '/oahu/weddings/wedding-week' },
        ],
      },
      {
        heading: 'The honesty note',
        body: [
          'If your venue holds an exclusive caterer, we cannot work it and we will tell you in the first email. If the venue allows outside chefs with a fee, we will price the whole thing in writing so you can compare honestly.',
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Venue guide', secondaryHref: '/oahu/weddings/venues' },
    parent: 'weddings',
    keywords: ['estate wedding catering Oahu', 'private estate wedding Honolulu'],
  },
  {
    slug: 'weddings/wedding-cost',
    category: 'wedding',
    title: 'Wedding Catering Cost on Oʻahu — Real Benchmarks',
    h1: 'What wedding catering costs on Oʻahu.',
    meta: {
      description:
        'Real Oʻahu wedding catering numbers: planner benchmarks put buffet service at $60–$75 a head; our plated lines run from $125 a guest plus staffing, with 20% service itemized against the 23–25% norm.',
    },
    intro:
      'Planner benchmarks put Oʻahu buffet catering at $60–$75 a head. Our lines start at $125 a guest for staffed, plated, or premium-buffet service — here is the honest arithmetic behind the difference.',
    sections: [
      {
        heading: 'Reading the benchmarks',
        body: [
          'The $60–$75 buffet benchmark buys drop-off or lightly staffed service. Our $125-and-up lines buy a chef cooking on site, full staffing at published hourlys, and menus written for your table. Both are legitimate; they are different products, and your quote will show exactly which one you are buying.',
        ],
        list: [
          'Per-guest food lines from $125, published',
          'Servers $55/hr, sous chefs $75/hr, four-hour floor',
          '20% service charge on its own line — venues and resorts run 23–25%',
          'GET up to 4.7120% itemized separately',
        ],
      },
      {
        heading: 'The week, budgeted',
        body: [
          'The wedding-week budget page works a full example — welcome dinner, rehearsal, reception, brunch — so you can see the shape of a real number before you ask for yours.',
        ],
        links: [{ label: 'The worked wedding-week budget', href: '/oahu/pricing/wedding-week-budget' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The worked budget', secondaryHref: '/oahu/pricing/wedding-week-budget' },
    parent: 'weddings',
    keywords: ['wedding catering cost Oahu', 'Oahu wedding catering prices'],
  },
  {
    slug: 'weddings/venues',
    category: 'wedding',
    title: 'Oʻahu Estate Wedding Venues with Kitchens — A Guide',
    h1: 'Venues where an outside chef works.',
    meta: {
      description:
        'A working guide to Oʻahu estate and villa wedding venues with real kitchens and outside-caterer policies — what to ask about kitchen access, exclusive lists, and load-in before you book.',
    },
    intro:
      'The venue question that decides everything: does the property allow an outside chef, and does it have a kitchen worth cooking in? This guide is how to ask.',
    sections: [
      {
        heading: 'What to ask a venue',
        body: [
          'Ask three questions before anything else: Is there an exclusive caterer list, and is there an outside-vendor fee? What kitchen access does the caterer get — full kitchen, prep kitchen, or a lawn? And what are the load-in windows and insurance requirements? The answers decide your catering options more than the view does.',
        ],
        list: [
          'Exclusive caterer lists — some marquee venues lock them',
          'Kitchen access: full, prep-only, or field-kitchen spec',
          'COI and load-in requirements',
        ],
      },
      {
        heading: 'Working with your planner',
        body: [
          'We work through planners constantly — the good ones know which properties allow outside chefs and which fee structures are negotiable. Bring us the shortlist and we will tell you, property by property, what cooking there actually looks like.',
        ],
        links: [{ label: 'For wedding planners', href: '/oahu/partners/wedding-planners' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Estate weddings', secondaryHref: '/oahu/weddings/estate-wedding' },
    parent: 'weddings',
    keywords: ['Oahu estate wedding venues', 'Oahu wedding venues outside caterer'],
  },
  /* ------------------------------------------------------------------ */
  /* Menus (Table 4.2.1b)                                               */
  /* ------------------------------------------------------------------ */
  {
    slug: 'menus',
    category: 'menu',
    title: 'Private Chef Menus Oʻahu — The Catalogue',
    h1: 'The menu catalogue.',
    meta: {
      description:
        'Sample menus from the Oʻahu kitchen: the Signature three-course, family-style, tasting menus, pūpū and grazing, BBQ and grill, brunch, vegetarian and vegan, gluten-free, kids, Pacific Rim omakase, and holiday.',
    },
    intro:
      'Samples, not straitjackets — every menu is rewritten for your table and the morning’s market. These show the formats, the bands, and the kitchen’s range.',
    sections: [
      {
        heading: 'The formats',
        links: [
          { label: 'Signature three-course', href: '/oahu/menus/signature-three-course' },
          { label: 'Family-style', href: '/oahu/menus/family-style' },
          { label: 'Tasting menu', href: '/oahu/menus/tasting-menu' },
          { label: 'Pūpū & grazing', href: '/oahu/menus/pupu-and-grazing' },
          { label: 'BBQ & grill', href: '/oahu/menus/bbq-and-grill' },
          { label: 'Breakfast & brunch', href: '/oahu/menus/breakfast-and-brunch' },
          { label: 'Vegetarian & vegan', href: '/oahu/menus/vegetarian-vegan' },
          { label: 'Gluten-free', href: '/oahu/menus/gluten-free' },
          { label: 'Kids', href: '/oahu/menus/kids' },
          { label: 'Pacific Rim omakase', href: '/oahu/menus/pacific-rim-omakase' },
          { label: 'Holiday', href: '/oahu/menus/holiday' },
        ],
        body: [
          'Prices follow the published card: Table $95–$125, Signature $125–$190, Premium $190–$275, Chef’s table $275–$400+ a guest, groceries inside the band.',
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The rate card', secondaryHref: '/oahu/pricing' },
    parent: '',
    keywords: ['private chef menus Oahu', 'sample menus Honolulu'],
  },
  {
    slug: 'menus/signature-three-course',
    category: 'menu',
    title: 'Signature Three-Course Menu — Oʻahu, $125–$190/Guest',
    h1: 'The Signature three-course.',
    meta: {
      description:
        'The myCHEF Signature dinner on Oʻahu: three courses built on Pacific Rim flavors and morning-market shopping, $125–$190 a guest with groceries inside the band.',
      ogImage: '/img/oahu/menu-signature.jpg',
    },
    intro:
      'The dinner most tables book: a starter, a main, and a finish, written around the morning’s market and your table’s preferences. $125–$190 a guest, groceries inside the band.',
    sections: [
      {
        heading: 'A sample Signature menu',
        list: [
          'Seared ahi, avocado, yuzu kosho, crispy shallot',
          'Miso-butter catch of the day, Kabocha squash, baby bok choy',
          'Lilikoʻi posset, coconut shortbread',
        ],
        body: [
          'A sample, not a promise — the fish changes with the auction, the produce with the farms. Your chef writes the actual menu after your preferences call, and you approve it before the quote is final.',
        ],
      },
      {
        heading: 'What is inside the band',
        body: [
          'Menu design, same-day shopping, cooking, table service, and cleanup — groceries included. Staffing beyond the chef, bar service, and travel zones are separate lines, itemized on the quote.',
        ],
        links: [{ label: 'The rate card', href: '/oahu/pricing' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'All menus', secondaryHref: '/oahu/menus' },
    parent: 'menus',
    keywords: ['Oahu signature dinner menu', 'three course private chef menu'],
  },
  {
    slug: 'menus/family-style',
    category: 'menu',
    title: 'Family-Style Dinner Menu Oʻahu — Platters Down the Middle',
    h1: 'Family-style.',
    meta: {
      description:
        'Family-style private chef menus on Oʻahu: generous platters for groups of 8–75, priced on the published per-guest card. The format that survives reunions, birthdays, and rehearsal dinners.',
    },
    intro:
      'Platters down the middle of the table, seconds guaranteed. The format for groups who came to talk — reunions, birthdays, rehearsal dinners.',
    sections: [
      {
        heading: 'A sample family-style spread',
        list: [
          'Huli-style chicken, grilled over kiawe',
          'Garlic shrimp, chili crisp, white rice',
          'Charred local greens, sesame',
          'Mac salad, properly made',
          'Chocolate haupia pie',
        ],
        body: [
          'Priced on the same per-guest card as everything else; family-style typically staffs lighter than plated, which the quote reflects.',
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'All menus', secondaryHref: '/oahu/menus' },
    parent: 'menus',
    keywords: ['family style dinner menu Oahu', 'family style catering Honolulu'],
  },
  {
    slug: 'menus/tasting-menu',
    category: 'menu',
    title: 'Tasting Menu Private Chef Oʻahu — Premium Band',
    h1: 'The tasting menu.',
    meta: {
      description:
        'Private tasting menus on Oʻahu in the Premium band, $190–$275 a guest: six to ten courses, full table service, and menus written to the day’s market.',
    },
    intro:
      'Six to ten courses in the Premium band, $190–$275 a guest — the long evening, course by course, at your own table.',
    sections: [
      {
        heading: 'How a tasting is written',
        body: [
          'The arc moves light to rich, cold to hot, with the market deciding the specifics the morning of. Dietary protocols are designed into the arc rather than swapped out of it. Add a server at $55/hr — a tasting menu deserves proper clearing and pouring.',
        ],
        links: [
          { label: 'Fine dining at home', href: '/oahu/services/fine-dining' },
          { label: 'Chef’s table', href: '/oahu/services/chefs-table' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'All menus', secondaryHref: '/oahu/menus' },
    parent: 'menus',
    keywords: ['tasting menu private chef Oahu', 'premium tasting menu Honolulu'],
  },
  {
    slug: 'menus/pupu-and-grazing',
    category: 'menu',
    title: 'Pūpū & Grazing Tables Honolulu — Standing Format',
    h1: 'Pūpū and grazing.',
    meta: {
      description:
        'Pūpū and grazing table catering in Honolulu: abundant standing-format spreads for parties and receptions, priced per guest on the published card with staffing itemized.',
    },
    intro:
      'The standing format: pūpū circulating, a grazing table that gets rebuilt all evening, nobody waiting for a first course. Built for parties and ceremony-adjacent hours.',
    sections: [
      {
        heading: 'What lands on the table',
        body: [
          'Ahi pokē made to order, smoked meats, local cheeses, tropical fruit cut properly, and hot pūpū passing through the room. Priced per guest with server hours itemized — grazing is abundant but it is not vague.',
        ],
        links: [{ label: 'Villa parties', href: '/oahu/occasions/villa-party' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'All menus', secondaryHref: '/oahu/menus' },
    parent: 'menus',
    keywords: ['grazing table Honolulu', 'pupu catering Oahu'],
  },
  {
    slug: 'menus/bbq-and-grill',
    category: 'menu',
    title: 'BBQ & Grill Catering Menu Oʻahu — The Villa Grill Format',
    h1: 'The grill format.',
    meta: {
      description:
        'BBQ and grill private chef menus on Oʻahu: kiawe-grilled meats, fish, and vegetables cooked at your villa or estate. A relaxed format at the Table-to-Signature bands.',
    },
    intro:
      'Kiawe smoke, the villa grill, and food that does not pretend to be anything else. The relaxed end of the card — and still shopped that morning.',
    sections: [
      {
        heading: 'Off the grill',
        body: [
          'Marinated short ribs, whole fish, corn, and pineapple with a plan. Grill formats sit in the Table ($95–$125) to Signature ($125–$190) bands depending on the proteins — the quote names the band before you commit.',
        ],
        links: [{ label: 'The rate card', href: '/oahu/pricing' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'All menus', secondaryHref: '/oahu/menus' },
    parent: 'menus',
    keywords: ['bbq catering menu Oahu', 'grill chef Honolulu'],
  },
  {
    slug: 'menus/breakfast-and-brunch',
    category: 'menu',
    title: 'Breakfast & Brunch Chef Honolulu — Villa Mornings',
    h1: 'Breakfast, properly.',
    meta: {
      description:
        'Private breakfast and brunch service on Oʻahu: villa mornings, recovery brunches, and holiday breakfasts cooked in your kitchen — fruit cut that morning, eggs to order, strong coffee.',
    },
    intro:
      'The meal that makes a villa stay feel like one: fruit cut that morning, eggs to order, fried rice with the good sausage, coffee that keeps coming.',
    sections: [
      {
        heading: 'Brunch as an event',
        body: [
          'Standalone brunches for 10–40 — recovery brunches, holiday mornings, baby showers — run on per-guest lines quoted like any dinner. Stay Chef guests get breakfast as part of the day rate’s rhythm.',
        ],
        links: [
          { label: 'Recovery brunch', href: '/oahu/weddings/recovery-brunch' },
          { label: 'Stay Chef', href: '/oahu/stay-chef' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'All menus', secondaryHref: '/oahu/menus' },
    parent: 'menus',
    keywords: ['brunch chef Honolulu', 'breakfast catering Oahu'],
  },
  {
    slug: 'menus/vegetarian-vegan',
    category: 'menu',
    title: 'Vegan & Vegetarian Private Chef Menu Oʻahu',
    h1: 'Plant-based, first-class.',
    meta: {
      description:
        'Vegetarian and vegan private chef menus on Oʻahu: plant-based courses built as architecture, not substitution — the vegan dish is the one everyone wants. Same published bands.',
    },
    intro:
      'Hawaiʻi’s produce does the heavy lifting: plant-based menus here are not a compromise, they are an advantage. Same published bands, same morning market.',
    sections: [
      {
        heading: 'A sample plant-based arc',
        list: [
          'Hearts of palm “crab” cakes, remoulade',
          'Smoked ʻulu, mushroom laulau-style',
          'Kabocha and coconut curry, pickled ginger',
          'Chocolate-avocado, black salt',
        ],
        body: [
          'Mixed tables are the norm — the vegan courses are designed so the omnivores order them next time.',
        ],
        links: [{ label: 'The dietary matrix', href: '/oahu/services/dietary' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Dietary service', secondaryHref: '/oahu/services/dietary' },
    parent: 'menus',
    keywords: ['vegan private chef menu Oahu', 'vegetarian chef Honolulu'],
  },
  {
    slug: 'menus/gluten-free',
    category: 'menu',
    title: 'Gluten-Free Private Chef Oʻahu — Celiac-Safe Protocols',
    h1: 'Gluten-free, taken seriously.',
    meta: {
      description:
        'Gluten-free private chef menus on Oʻahu with celiac-level cross-contact discipline: dedicated prep protocols, tamari over soy, and menus where nothing reads as a workaround.',
    },
    intro:
      'Gluten-free here is a protocol, not a substitution: tamari in the pantry, separate boards and pans, and menus that never needed the gluten in the first place.',
    sections: [
      {
        heading: 'Cross-contact discipline',
        body: [
          'For celiac guests the kitchen resets: fresh boards, clean pans, no shared fryers, sauces built without wheat from the start. The protocol is confirmed in writing before the menu is written — that sentence is deliberate, and so is the order.',
        ],
        links: [{ label: 'The dietary guide', href: '/oahu/guides/dietary' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Dietary service', secondaryHref: '/oahu/services/dietary' },
    parent: 'menus',
    keywords: ['gluten free private chef Oahu', 'celiac safe chef Honolulu'],
  },
  {
    slug: 'menus/kids',
    category: 'menu',
    title: 'Kids Menu Private Chef Oʻahu — Real Food, Smaller',
    h1: 'The kids’ menu.',
    meta: {
      description:
        'Kid-friendly private chef menus on Oʻahu: real food sized down, allergy-aware, served at the early seating so adults dine at seven. No beige freezer defaults.',
    },
    intro:
      'Real food, smaller and earlier: hand-cut pasta, grilled chicken that was a chicken this morning, fruit cut like someone cared. Allergy-aware by default.',
    sections: [
      {
        heading: 'The early seating',
        body: [
          'Kids eat at five-thirty, adults at seven — one chef, two services, one quote. The kids’ menu is written with the parents, priced into the evening, and never arrives from a freezer bag.',
        ],
        links: [{ label: 'Kid-friendly service', href: '/oahu/services/kids-menus' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Kids’ service', secondaryHref: '/oahu/services/kids-menus' },
    parent: 'menus',
    keywords: ['kids menu private chef Oahu', 'kid friendly catering Honolulu'],
  },
  {
    slug: 'menus/pacific-rim-omakase',
    category: 'menu',
    title: 'Pacific Rim Omakase Menu Oʻahu — Chef’s Choice',
    h1: 'The Pacific Rim omakase.',
    meta: {
      description:
        'The myCHEF Pacific Rim omakase on Oʻahu: a chef’s-choice progression across Japanese technique and Hawaiian ingredients, in the Premium-to-Chef’s-table bands. Japanese-language consultation available.',
    },
    intro:
      'Japanese technique, Hawaiian ingredients, the chef’s sequence: nigiri where the fish earns it, kaiseki structure where the evening earns it. Premium to Chef’s-table bands, $190–$400+ a guest.',
    sections: [
      {
        heading: 'The progression',
        body: [
          'Sakizuke to dessert, twelve to twenty courses, the menu fixed only the morning of. The counter format seats two to eight; larger parties move to a coursed Premium menu so pacing survives.',
        ],
        links: [
          { label: 'Omakase at home', href: '/oahu/services/omakase-at-home' },
          { label: '日本語でのご相談', href: '/oahu/ja/omakase-at-home' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Omakase service', secondaryHref: '/oahu/services/omakase-at-home' },
    parent: 'services/omakase-at-home',
    keywords: ['omakase menu Oahu', 'Pacific Rim omakase Honolulu'],
  },
  {
    slug: 'menus/holiday',
    category: 'menu',
    title: 'Holiday Catering Menu Oʻahu — The Seasonal Rotation',
    h1: 'The holiday menu.',
    meta: {
      description:
        'Seasonal holiday catering menus on Oʻahu: Thanksgiving, Christmas, and New Year formats published each Q3 alongside the holiday-surcharge calendar. Book early — December is the peak.',
    },
    intro:
      'The seasonal rotation publishes each Q3: the traditional table, the island version of it, and the surcharge calendar in plain sight. December books out first.',
    sections: [
      {
        heading: 'Two directions',
        body: [
          'The full traditional table — bird, sides, pies, done properly in your kitchen — or the island holiday: whole fish, kiawe-grilled everything, lilikoʻi in the dessert. Both price on the published card plus any dated holiday premium, shown before you book.',
        ],
        links: [{ label: 'Holiday dinners', href: '/oahu/occasions/holiday-dinner' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Holiday dinners', secondaryHref: '/oahu/occasions/holiday-dinner' },
    parent: 'menus',
    keywords: ['holiday catering menu Oahu', 'Thanksgiving catering Honolulu'],
  },
  /* ------------------------------------------------------------------ */
  /* Pricing & decision (Table 4.2.1b)                                  */
  /* ------------------------------------------------------------------ */
  {
    slug: 'private-chef-cost',
    category: 'pricing',
    title: 'How Much Does a Private Chef Cost in Honolulu? The Stack',
    h1: 'What a private chef costs in Honolulu — the whole stack.',
    meta: {
      description:
        'The full cost anatomy of a private chef in Honolulu: per-guest bands $95–$400+, staffing at $55/$75 an hour, travel zones from $75, 20% service, GET up to 4.7120%, and groceries at cost — every line explained.',
    },
    intro:
      'The one canonical cost page for Oʻahu: every line that can appear on a quote, what drives it, and what it should look like when someone else quotes you.',
    sections: [
      {
        heading: 'The lines on every quote',
        body: [
          'Food is priced per guest by band. Staffing is hourly with a four-hour floor. Travel is a published zone fee where it applies. Then the fee stack: 20% service charge and GET up to 4.7120%, each on its own line, plus groceries at cost with receipts. If a quote you are holding does not itemize these, ask why.',
        ],
      },
      {
        heading: 'What moves the number',
        body: [
          'Guest count first — per-guest bands reward the full table. Menu band second. Then the Hawaiʻi reality: groceries run roughly 31–53% above mainland prices, and dates around holidays carry premiums that should be published, not discovered.',
        ],
        links: [
          { label: 'The rate card', href: '/oahu/pricing' },
          { label: 'The fee stack, explained', href: '/oahu/pricing/fee-stack' },
        ],
      },
      {
        heading: 'Worked math',
        body: [
          'Four guests at the Signature midpoint: roughly $630 for food, groceries inside the band. Add a server for a plated four-course ($55/hr, four-hour floor = $220), then 20% service and GET on their own lines. The written quote shows exactly this arithmetic — your number, not an average.',
        ],
      },
    ],
    priceTable: {
      title: 'The Oʻahu per-guest bands',
      rows: [
        { label: 'Table', value: '$95–$125', note: 'per guest, groceries included' },
        { label: 'Signature', value: '$125–$190', note: 'per guest, groceries included' },
        { label: 'Premium', value: '$190–$275', note: 'per guest' },
        { label: 'Chef’s table', value: '$275–$400+', note: 'per guest, quoted manually' },
      ],
      footnote: 'Plus staffing, travel where it applies, 20% service, and GET up to 4.7120% — each on its own line.',
    },
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Run the estimator', secondaryHref: '/oahu/pricing/estimate' },
    parent: 'pricing',
    keywords: ['how much does a private chef cost in Honolulu', 'private chef cost Oahu'],
  },
  {
    slug: 'pricing/stay-chef-cost',
    category: 'pricing',
    title: 'Stay Chef Oʻahu Cost per Day — from $850, Worked',
    h1: 'What a Stay Chef week costs.',
    meta: {
      description:
        'Stay Chef on Oʻahu runs from $850 a day plus groceries at cost. See the worked week math: day rate, groceries, staffing, 20% service, and GET — itemized before you commit.',
    },
    intro:
      'From $850 a day plus groceries at cost. Here is the worked math for a real week, line by line.',
    sections: [
      {
        heading: 'A worked five-day week',
        body: [
          'Five days at the $850 base: $4,250 for the chef line — breakfast, provisioning, and dinner daily. Groceries for a family of five typically land at $900–$1,400 at cost, receipts attached. Add a server for two dressed-up dinners ($55/hr × 4-hr floor × 2 = $440), then 20% service and GET on their own lines.',
        ],
      },
      {
        heading: 'What moves the day rate',
        body: [
          'Guest count, meal count per day, menu band, and travel zone (North Shore and Turtle Bay add from $75 a day). There is no published weekly discount — the written quote is the total.',
        ],
        links: [{ label: 'Stay Chef service', href: '/oahu/stay-chef' }],
      },
    ],
    priceTable: {
      title: 'Stay Chef day rate',
      rows: [
        { label: 'Chef day rate', value: 'from $850', note: 'per day, plus groceries at cost' },
        { label: 'Groceries', value: 'at cost', note: 'receipts attached' },
        { label: 'Server (optional)', value: '$55/hr', note: 'four-hour floor' },
        { label: 'Travel (North Shore / Turtle Bay)', value: 'from $75', note: 'per day where it applies' },
      ],
      footnote: '20% service and GET up to 4.7120% itemize on their own lines.',
    },
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Stay Chef service', secondaryHref: '/oahu/stay-chef' },
    parent: 'pricing',
    keywords: ['stay chef Oahu cost per day', 'vacation chef cost Oahu'],
  },
  {
    slug: 'pricing/kamaaina-weekly-cost',
    category: 'pricing',
    title: 'Personal Chef Cost per Week Honolulu — $300–$1,200',
    h1: 'What the weekly cook day costs.',
    meta: {
      description:
        'The kamaʻāina weekly line runs $300–$1,200 a week plus groceries at cost, depending on household size and cook-day length. The math, worked for real Honolulu households.',
    },
    intro:
      'From $300 a week for the standing cook day, up to about $1,200 for large households and long days — plus groceries at cost, receipts attached.',
    sections: [
      {
        heading: 'Where a household lands',
        body: [
          'A couple eating four dinners a week sits near the base. A family of six with lunches and dietary protocols climbs toward the middle. Estate households with staff coordination and weekend coverage reach the top. The written quote names your weekly number and it stays your weekly number.',
        ],
        links: [{ label: 'The weekly cook day', href: '/oahu/services/personal-chef-weekly' }],
      },
      {
        heading: 'Against the alternatives',
        body: [
          'Meal-kit and delivery services charge per portion and cook days ahead in a commissary. The cook day charges for the chef and hands you the receipts — fresh, same-day, and built around your household’s protocols.',
        ],
      },
    ],
    priceTable: {
      title: 'The weekly line',
      rows: [
        { label: 'Cook day (base)', value: 'from $300/wk', note: 'plus groceries at cost' },
        { label: 'Larger households / longer days', value: 'to ~$1,200/wk', note: 'quoted in writing' },
        { label: 'Groceries', value: 'at cost', note: 'receipts attached' },
      ],
    },
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The weekly service', secondaryHref: '/oahu/services/personal-chef-weekly' },
    parent: 'pricing',
    keywords: ['personal chef cost per week Honolulu', 'weekly chef cost Oahu'],
  },
  {
    slug: 'pricing/wedding-week-budget',
    category: 'pricing',
    title: 'Oʻahu Wedding Catering Budget — The Week, Worked',
    h1: 'A wedding week, budgeted line by line.',
    meta: {
      description:
        'A worked Oʻahu wedding-week budget: welcome dinner, rehearsal, reception, and recovery brunch priced per meal, per day, per guest — with staffing, 20% service, and GET itemized.',
    },
    intro:
      'The wedding week as arithmetic: guests × per-guest line, per event, plus staffing and the fee stack. Here is the shape of a real number.',
    sections: [
      {
        heading: 'A worked week: 60 at the reception',
        body: [
          'Welcome dinner, 45 guests × $125 = $5,625. Rehearsal, 24 × $150 = $3,600. Reception, 60 × $165 mid-band = $9,900. Recovery brunch, 30 × $95 = $2,850. Food lines total $21,975; staffing across four events adds roughly $2,600–$3,400 at published hourlys; then 20% service and GET on their own lines. The written quote does this math with your counts.',
        ],
      },
      {
        heading: 'Against the ballroom',
        body: [
          'Resort and venue packages commonly carry 23–25% service and per-event minimums. Our service charge is 20%, itemized — and the venues we work (estates, villas, private property) do not charge you a food-and-beverage minimum for the privilege.',
        ],
        links: [{ label: 'Wedding cost benchmarks', href: '/oahu/weddings/wedding-cost' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The wedding week', secondaryHref: '/oahu/weddings/wedding-week' },
    parent: 'weddings/wedding-cost',
    keywords: ['Oahu wedding catering budget', 'wedding week cost Oahu'],
  },
  {
    slug: 'pricing/fee-stack',
    category: 'pricing',
    title: 'Oʻahu Service Charge & GET Explained — The Fee Stack',
    h1: 'The fee stack, line by line.',
    meta: {
      description:
        'Every fee on a myCHEF Oʻahu quote explained: the 20% service charge, Hawaiʻi GET up to 4.7120% on its own line, the 50% deposit, voluntary gratuity, and groceries at cost with receipts.',
    },
    intro:
      'Five lines that appear on every quote, in the same words, network-wide. Here is what each one is and why it is itemized.',
    sections: [
      {
        heading: 'The five lines',
        list: [
          '20% service charge — always on its own line, never folded into “per-guest” pricing',
          'Hawaiʻi GET up to 4.7120% — on its own line, valid through 12/31/2030',
          '50% deposit — locks the date, only after you have seen the numbers',
          'Gratuity — always voluntary, never suggested by us',
          'Groceries — at cost, receipts on request',
        ],
        body: [
          'Itemization is the point. A 20% service charge you can see beats a 23–25% charge folded into a package price — and Hawaiʻi’s general excise tax applies to the whole transaction, which is why it gets its own line rather than hiding in the food cost.',
        ],
      },
      {
        heading: 'What we will never do',
        body: [
          'We will not quote one number and invoice a bigger one, will not add a gratuity line for you, and will not show you the obsolete 4.166% GET figure that still floats around the internet. The written quote is the confirmed total.',
        ],
        links: [{ label: 'The honesty register', href: '/oahu/trust' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The rate card', secondaryHref: '/oahu/pricing' },
    parent: 'pricing',
    keywords: ['Oahu service charge and GET explained', 'Hawaii GET catering'],
  },
  {
    slug: 'pricing/travel-zones',
    category: 'pricing',
    title: 'Oʻahu Private Chef Travel Fees — The Zone Map',
    h1: 'Travel zones, published.',
    meta: {
      description:
        'Oʻahu private chef travel fees, published: base zones carry no fee; the North Shore and Turtle Bay run from $75. No competitor publishes this — we put it on the quote before you commit.',
    },
    intro:
      'Most of Oʻahu is base zone — no travel fee. The North Shore and Turtle Bay run from $75 because the drive is real. That line is published here and itemized on every quote.',
    sections: [
      {
        heading: 'The zones',
        list: [
          'Base zone (no fee): Waikīkī, Honolulu, Kahala–Gold Coast, Ko Olina, Kapolei, Kailua–Lanikai, Hawaiʻi Kai',
          'North Shore: from $75',
          'Turtle Bay: from $75',
        ],
        body: [
          'The fee covers the 60–90 minute drive each way and the shopping logistics that come with cooking an hour from the nearest full market. It is a flat line, not a meter.',
        ],
      },
      {
        heading: 'Outside the map',
        body: [
          'If your address sits outside these zones, the answer is a written quote with the travel line stated — not a surprise on the invoice.',
        ],
        links: [
          { label: 'The coverage map', href: '/oahu/coverage' },
          { label: 'North Shore drive times', href: '/oahu/guides/north-shore-drive' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The rate card', secondaryHref: '/oahu/pricing' },
    parent: 'pricing',
    keywords: ['Oahu private chef travel fee', 'North Shore chef travel fee'],
  },
  {
    slug: 'pricing/estimate',
    category: 'pricing',
    title: 'Private Chef Oʻahu Price Estimate — The Estimator',
    h1: 'Estimate your dinner.',
    meta: {
      description:
        'An instant Oʻahu private chef estimate: pick the service, guests, days, and add-ons, and see the arithmetic on published rates. Estimate only — the written quote is the confirmed total.',
    },
    intro:
      'Build the evening — service, guests, add-ons — and watch the math on published rates. The estimate is arithmetic, not a promise: the written quote is the confirmed total.',
    sections: [
      {
        heading: 'How to read the estimate',
        body: [
          'The estimator multiplies published bands by your guest count and adds staffing at the published hourlys. It shows 20% service and GET up to 4.7120% as separate computed lines, exactly as the quote will. What it cannot do is account for the menu you will write with your chef — which is why the written quote is the confirmed total.',
        ],
        links: [
          { label: 'The rate card', href: '/oahu/pricing' },
          { label: 'What a chef costs in Honolulu', href: '/oahu/private-chef-cost' },
        ],
      },
    ],
    cta: { label: 'Get the written quote', href: '/oahu/quote', secondaryLabel: 'WhatsApp the spec', secondaryHref: WA },
    parent: 'pricing',
    keywords: ['private chef Oahu price estimate', 'private chef calculator Oahu'],
  },
  {
    slug: 'compare/private-chef-vs-restaurant',
    category: 'guide',
    title: 'Private Chef vs Restaurant in Honolulu — The Group-of-Six Math',
    h1: 'Chef versus restaurant: the honest math.',
    meta: {
      description:
        'Private chef versus a Honolulu restaurant for a group of six: the real arithmetic on prix-fixe pricing, wine markups, rideshares, and the evening you actually get.',
    },
    intro:
      'For two people, the restaurant usually wins. Somewhere around six, the math turns. Here is the arithmetic, honestly done.',
    sections: [
      {
        heading: 'The group-of-six comparison',
        body: [
          'Six at a top Honolulu dining room: $150–$200 a head before wine, plus marked-up bottles, two rideshares, and a table that turns at nine. Six at home on the Signature band: $125–$190 a guest, your own wine at retail, no turn time, and the conversation never competes with the next table.',
        ],
      },
      {
        heading: 'What the chef version adds',
        body: [
          'A menu written for your table, dietary protocols handled by design, and a kitchen left clean. What it does not add: a view you do not already have, and a sommelier — though the bar cart covers the pouring.',
        ],
        links: [
          { label: 'What a chef costs in Honolulu', href: '/oahu/private-chef-cost' },
          { label: 'The rate card', href: '/oahu/pricing' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The cost anatomy', secondaryHref: '/oahu/private-chef-cost' },
    parent: 'private-chef-cost',
    keywords: ['private chef vs restaurant Honolulu', 'is a private chef worth it Oahu'],
  },
  {
    slug: 'compare/private-vs-personal-chef',
    category: 'guide',
    title: 'Private Chef vs Personal Chef on Oʻahu — The Difference',
    h1: 'Private versus personal: which one you need.',
    meta: {
      description:
        'The difference between a private chef and a personal chef on Oʻahu: event dining versus the recurring weekly cook day — and what each one costs.',
    },
    intro:
      'The terms get used interchangeably; the services are different. A private chef cooks the event. A personal chef cooks the week.',
    sections: [
      {
        heading: 'The private chef — the event',
        body: [
          'One evening, a coursed menu, table service, a clean kitchen after. Priced per guest on the published bands ($95–$400+). This is the dinner party, the proposal, the wedding week.',
        ],
        links: [{ label: 'Private chef service', href: '/oahu/private-chef' }],
      },
      {
        heading: 'The personal chef — the week',
        body: [
          'A standing cook day: menus for the household, a week of dinners packed for the fridge, from $300 a week plus groceries. This is the resident line — the answer to “we never eat well on weekdays.”',
        ],
        links: [{ label: 'The weekly cook day', href: '/oahu/services/personal-chef-weekly' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Weekly service', secondaryHref: '/oahu/services/personal-chef-weekly' },
    parent: 'private-chef-cost',
    keywords: ['difference between private and personal chef Oahu', 'personal chef vs private chef'],
  },
  {
    slug: 'compare/freelance-vs-mychef',
    category: 'guide',
    title: 'Hire a Chef Directly vs myCHEF Oʻahu — The Comparison',
    h1: 'Direct hire versus the network.',
    meta: {
      description:
        'Hiring a freelance chef directly versus booking through myCHEF Oʻahu: vetting, published prices, the written quote, backup coverage, and the fee stack — compared line by line.',
    },
    intro:
      'You can find a chef on your own. Here is what the network adds, what it costs, and where a direct hire still makes sense — said plainly, because the honest version sells us better than the glossy one.',
    sections: [
      {
        heading: 'What the network adds',
        list: [
          'Vetted chefs — verified experience, insurance, and health-permit posture',
          'Published prices, honored — the same card you read here',
          'The written quote as the confirmed total',
          'Backup coverage if your chef gets sick the morning of',
          'Itemized fee stack — 20% service and GET on their own lines',
        ],
      },
      {
        heading: 'Where direct hire wins',
        body: [
          'If you already have a chef you trust, keep them — a standing relationship with a good cook is worth more than a marketplace. Where direct hire fails is the gap cases: the vacation week, the event too big for one cook, the Thursday your guy is booked. That is when the roster matters.',
        ],
        links: [
          { label: 'How we vet chefs', href: '/oahu/how-we-vet-chefs' },
          { label: 'The honesty register', href: '/oahu/trust' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'How we vet chefs', secondaryHref: '/oahu/how-we-vet-chefs' },
    parent: 'trust',
    keywords: ['hire a chef directly vs myCHEF Oahu', 'freelance chef vs agency Honolulu'],
  },
  /* ------------------------------------------------------------------ */
  /* Guides (Table 4.2.1b)                                              */
  /* ------------------------------------------------------------------ */
  {
    slug: 'guides',
    category: 'guide',
    title: 'Oʻahu Private Chef Guides — Everything, Explained',
    h1: 'The guides.',
    meta: {
      description:
        'Full-prose guides to hiring a private chef on Oʻahu: how it works, kitchens, COI logistics, groceries at cost, lead times, weather backup, seasonality, dietary handling, cleanup, alcohol, and drive times.',
    },
    intro:
      'Every question the search bar asks, answered in full prose — kitchens, COIs, groceries, lead times, tipping, weather. Each guide links down to the service it explains.',
    sections: [
      {
        heading: 'Read the library',
        links: [
          { label: 'How it works', href: '/oahu/guides/how-it-works' },
          { label: 'How to hire a private chef', href: '/oahu/guides/how-to-hire' },
          { label: 'The kitchen question', href: '/oahu/guides/villa-kitchen' },
          { label: 'Condo load-in & COIs', href: '/oahu/guides/condo-load-in-coi' },
          { label: 'Groceries at cost', href: '/oahu/guides/groceries-at-cost' },
          { label: 'Booking lead times', href: '/oahu/guides/booking-lead-times' },
          { label: 'Weather backup', href: '/oahu/guides/weather-backup' },
          { label: 'Seasonality', href: '/oahu/guides/seasonality' },
          { label: 'Dietary restrictions', href: '/oahu/guides/dietary' },
          { label: 'The cleanup standard', href: '/oahu/guides/cleanup-standard' },
          { label: 'Alcohol and the bar', href: '/oahu/guides/alcohol-and-bar' },
          { label: 'North Shore drive times', href: '/oahu/guides/north-shore-drive' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The FAQ', secondaryHref: '/oahu/faq' },
    parent: '',
    keywords: ['Oahu private chef guides', 'private chef information Honolulu'],
  },
  {
    slug: 'guides/how-it-works',
    category: 'guide',
    title: 'How Does a Private Chef Work on Oʻahu? Four Steps',
    h1: 'How it works.',
    meta: {
      description:
        'The myCHEF Oʻahu process in four steps: send the quote form, receive a written itemized quote, lock the date with a 50% deposit, and we cook, serve, and clean.',
    },
    intro:
      'Four steps between reading this and sitting down: the form, the written quote, the deposit, the dinner.',
    sections: [
      {
        heading: 'The four steps',
        list: [
          'Send the quote form — five fields, two minutes',
          'Get a written quote — the confirmed total, itemized',
          '50% deposit locks the date — only after you have seen the numbers',
          'We cook, we serve, we clean',
        ],
        body: [
          'There is no phone tag and no “starting at” ambiguity. The written quote you approve is the invoice you receive, with 20% service and GET on their own lines.',
        ],
      },
      {
        heading: 'What happens on the day',
        body: [
          'Your chef shops that morning, arrives before service, cooks in your kitchen, serves each course, and leaves the kitchen clean. You will not be asked to help, and you will not find a mess.',
        ],
        links: [{ label: 'The cleanup standard', href: '/oahu/guides/cleanup-standard' }],
      },
    ],
    cta: { label: 'Start the quote', href: '/oahu/quote', secondaryLabel: 'How to hire', secondaryHref: '/oahu/guides/how-to-hire' },
    parent: '',
    keywords: ['how does a private chef work in Oahu', 'what to expect private chef'],
  },
  {
    slug: 'guides/how-to-hire',
    category: 'guide',
    title: 'How to Hire a Private Chef on Oʻahu — The Checklist',
    h1: 'How to hire a private chef.',
    meta: {
      description:
        'A practical checklist for hiring a private chef on Oʻahu: what to ask about insurance, permits, pricing, groceries, and contracts — and the red flags worth walking away from.',
    },
    intro:
      'Whether you hire us or not, this is the checklist: insurance, permits, a written itemized quote, and straight answers about groceries and fees.',
    sections: [
      {
        heading: 'Ask these questions',
        list: [
          'Are you insured, and can you issue a COI to my building or venue?',
          'Is your pricing published, and will my quote itemize service charge and GET?',
          'Are groceries at cost with receipts, or marked up?',
          'What happens if the chef is sick the morning of my event?',
          'Is gratuity added, suggested, or voluntary?',
        ],
        body: [
          'Any hesitation on the first two is the red flag. Insurance and written pricing are table stakes, not premium features.',
        ],
      },
      {
        heading: 'How we answer',
        body: [
          'COI on request, published rate card, groceries at cost with receipts, backup coverage from the roster, gratuity voluntary. The answers are on this site because the answers are the product.',
        ],
        links: [
          { label: 'The honesty register', href: '/oahu/trust' },
          { label: 'Direct hire versus myCHEF', href: '/oahu/compare/freelance-vs-mychef' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The trust page', secondaryHref: '/oahu/trust' },
    parent: 'guides',
    keywords: ['how to hire a private chef Oahu', 'hiring a chef Honolulu checklist'],
  },
  {
    slug: 'guides/villa-kitchen',
    category: 'guide',
    title: 'What Kitchen Does a Private Chef Need? The Oʻahu Answer',
    h1: 'The kitchen question.',
    meta: {
      description:
        'What kitchen a private chef actually needs on Oʻahu: the honest pass/fail on villa kitchens, condo galleys, and hotel rooms — and why we decline rooms without kitchens at inquiry.',
    },
    intro:
      'The honest answer: a working stove, an oven for most menus, counter space, and a sink. A coffee maker and a minibar are not a kitchen — and we will say so at inquiry, not at arrival.',
    sections: [
      {
        heading: 'The pass line',
        body: [
          'Villas, estates, and suites with real kitchens pass. Most condo galleys pass with menu adjustments — a two-burner galley changes the menu architecture, not the booking. Hotel rooms without kitchens fail, and we decline them honestly rather than improvise a worse dinner.',
        ],
        list: [
          'Working stove and oven (oven optional for grill-format menus)',
          'Counter space for prep and plating',
          'Refrigeration for the day’s shopping',
          'A sink — the cleanup standard depends on it',
        ],
      },
      {
        heading: 'Not sure? Send a photo',
        body: [
          'A phone photo of the kitchen at inquiry gets you a straight answer in the first reply. Waikīkī and Ko Olina kitchens, we mostly already know — we have cooked in the buildings.',
        ],
        links: [{ label: 'In-suite dining in Waikīkī', href: '/oahu/locations/waikiki/in-suite-dining' }],
      },
    ],
    cta: { label: 'Ask about your kitchen', href: '/oahu/quote', secondaryLabel: 'COI logistics', secondaryHref: '/oahu/guides/condo-load-in-coi' },
    parent: 'guides',
    keywords: ['what kitchen does a private chef need in Oahu', 'private chef kitchen requirements'],
  },
  {
    slug: 'guides/condo-load-in-coi',
    category: 'guide',
    title: 'Waikīkī Condo Private Chef Logistics — COIs & Freight Elevators',
    h1: 'The COI and the freight elevator.',
    meta: {
      description:
        'How private chef service works in Waikīkī condos and towers: certificates of insurance naming the building, freight-elevator bookings, compact-galley menu planning, and load-in timing.',
    },
    intro:
      'The signature logistics of Waikīkī: before anyone cooks, the building needs a certificate of insurance and the freight elevator needs a booking. Here is how that actually runs.',
    sections: [
      {
        heading: 'The paperwork sequence',
        body: [
          'After you approve the quote, we request the building’s requirements from your property manager or host. The COI naming the building issues from our insurer — allow a few business days. The freight-elevator window books against the load-in plan, typically ninety minutes before service.',
        ],
        list: [
          'COI naming the building, issued before the date',
          'Freight-elevator and service-corridor windows booked',
          'Compact-galley menu architecture where the kitchen is small',
        ],
      },
      {
        heading: 'What we need from you',
        body: [
          'The building name, your unit’s floor, and the property manager or host contact. If the building turns out to prohibit outside vendors entirely — a few do — we tell you immediately and refund the deposit in full.',
        ],
        links: [{ label: 'Waikīkī service', href: '/oahu/locations/waikiki' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Waikīkī overview', secondaryHref: '/oahu/locations/waikiki' },
    parent: 'guides/villa-kitchen',
    keywords: ['Waikiki condo private chef COI', 'freight elevator catering Honolulu'],
  },
  {
    slug: 'guides/groceries-at-cost',
    category: 'guide',
    title: 'Are Groceries Included with a Private Chef? Oʻahu Policy',
    h1: 'Groceries, at cost, with receipts.',
    meta: {
      description:
        'How groceries work with a private chef on Oʻahu: inside the per-guest band for Signature dinners, at cost with receipts for Stay Chef and weekly service — never marked up.',
    },
    intro:
      'Two models, one rule — no markup, ever. Signature dinners carry groceries inside the band; Stay Chef and weekly service bill groceries at cost with the receipts attached.',
    sections: [
      {
        heading: 'Inside the band versus at cost',
        body: [
          'Per-guest dinner bands ($95–$400+) include groceries — the chef absorbs the market price inside the quoted band. Multi-day and weekly services bill groceries at cost instead, because a week of a family’s eating is too variable to price blind. Either way, receipts are yours on request.',
        ],
      },
      {
        heading: 'The Hawaiʻi grocery reality',
        body: [
          'Island groceries run roughly 31–53% above mainland prices — that is the ocean, not the markup. Your chef shops the morning of service, and the receipt shows you paid the shelf price and nothing more.',
        ],
        links: [{ label: 'What a chef costs in Honolulu', href: '/oahu/private-chef-cost' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The fee stack', secondaryHref: '/oahu/pricing/fee-stack' },
    parent: 'guides',
    keywords: ['are groceries included private chef Oahu', 'private chef groceries policy'],
  },
  {
    slug: 'guides/booking-lead-times',
    category: 'guide',
    title: 'How Far in Advance to Book a Private Chef on Oʻahu',
    h1: 'Lead times, honestly.',
    meta: {
      description:
        'How far ahead to book a private chef on Oʻahu: Signature dinners 1–2 weeks, Stay Chef weeks 3–6 weeks, weddings and December holidays 2–6 months. Oʻahu runs year-round — but the calendar still fills.',
    },
    intro:
      'Oʻahu is effectively year-round — but the best dates still go first. Here is what books out and when.',
    sections: [
      {
        heading: 'The realistic windows',
        list: [
          'Signature dinners and Date Nights: 1–2 weeks is comfortable; 72 hours is sometimes possible',
          'Stay Chef weeks: 3–6 weeks, longer for Christmas and New Year',
          'Wedding weeks: 2–6 months',
          'December holidays and graduation season (May–June): as early as you can',
        ],
        body: [
          'Last-minute requests are always worth sending — the roster is deep enough that a Thursday cancellation becomes your Friday dinner.',
        ],
      },
    ],
    cta: { label: 'Check your date', href: '/oahu/quote', secondaryLabel: 'Seasonality', secondaryHref: '/oahu/guides/seasonality' },
    parent: 'guides',
    keywords: ['how far in advance to book a private chef Oahu', 'private chef booking lead time'],
  },
  {
    slug: 'guides/weather-backup',
    category: 'guide',
    title: 'Outdoor Dinner Weather Backup on Oʻahu — The Lānai Rule',
    h1: 'The weather plan.',
    meta: {
      description:
        'Weather contingency for outdoor private chef dinners on Oʻahu: lānai-first planning, windward rain reality, and the pivot rules for moving dinner indoors without losing the evening.',
    },
    intro:
      'Oʻahu weather is gentle until it is not — windward showers arrive fast, and trade winds redecorate tables. Every outdoor plan gets a written backup before the date.',
    sections: [
      {
        heading: 'The lānai rule',
        body: [
          'We plan outdoor dinners lānai-first: covered enough to survive a passing shower, open enough to still be outside. Fully exposed setups carry a stated indoor pivot — the dining room staged and ready — so a squall costs you a view, not the evening.',
        ],
        links: [{ label: 'Seasonality on Oʻahu', href: '/oahu/guides/seasonality' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: WA },
    parent: 'guides',
    keywords: ['outdoor dinner weather backup Oahu', 'rain plan private chef Hawaii'],
  },
  {
    slug: 'guides/seasonality',
    category: 'guide',
    title: 'Best Time to Book an Oʻahu Private Chef — Seasonality',
    h1: 'The Oʻahu calendar.',
    meta: {
      description:
        'Oʻahu private chef seasonality: the island runs effectively year-round, with peaks at the December holidays, May–June graduation season, and North Shore surf season (October–April).',
    },
    intro:
      'With a 37% seasonality index, Oʻahu is the least seasonal market in the state — but “year-round” still has peaks worth planning around.',
    sections: [
      {
        heading: 'The three peaks',
        list: [
          'December holidays — the island’s hardest calendar; holiday menus and surcharges publish in Q3',
          'May–June graduation season — resident catering weekends fill months out',
          'October–April surf season — North Shore estate weeks and whale-season tables',
        ],
        body: [
          'Outside the peaks, Oʻahu books comfortably at standard lead times. Inside them, earlier is the whole strategy.',
        ],
        links: [{ label: 'Booking lead times', href: '/oahu/guides/booking-lead-times' }],
      },
    ],
    cta: { label: 'Check your date', href: '/oahu/quote', secondaryLabel: 'Lead times', secondaryHref: '/oahu/guides/booking-lead-times' },
    parent: 'guides',
    keywords: ['best time to book Oahu private chef', 'Oahu private chef seasonality'],
  },
  {
    slug: 'guides/dietary',
    category: 'guide',
    title: 'Dietary Restrictions & Private Chefs on Oʻahu — The Protocol',
    h1: 'Dietary restrictions, by protocol.',
    meta: {
      description:
        'How myCHEF Oʻahu handles dietary restrictions: allergies confirmed in writing before menus are written, cross-contact treated as kitchen design, and mixed-protocol tables fed properly.',
    },
    intro:
      'The protocol matters more than the promise: restrictions are confirmed in writing, designed into the menu, and briefed to every server on the shift.',
    sections: [
      {
        heading: 'The sequence',
        list: [
          'Inquiry: you tell us the protocols — allergy, celiac, medical, preference',
          'Menu: written with every guest inside it, approved by you before quoting',
          'Prep: allergies flagged on the prep list; celiac gets a kitchen reset',
          'Service: every server briefed on who eats what',
        ],
        body: [
          'Preferences are easy. Allergies are engineering. The distinction is why the confirmation is written, not verbal.',
        ],
        links: [{ label: 'The dietary matrix', href: '/oahu/services/dietary' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Dietary service', secondaryHref: '/oahu/services/dietary' },
    parent: 'guides',
    keywords: ['dietary restrictions private chef Oahu', 'allergy private chef Honolulu'],
  },
  {
    slug: 'guides/cleanup-standard',
    category: 'guide',
    title: 'Private Chef Cleanup — What to Expect on Oʻahu',
    h1: 'The cleanup standard.',
    meta: {
      description:
        'What cleanup to expect from a private chef on Oʻahu: the kitchen left cleaner than we found it — equipment washed, surfaces down, trash out, leftovers packed and labeled.',
    },
    intro:
      'The standard is one sentence: the kitchen is left cleaner than we found it. Here is what that covers.',
    sections: [
      {
        heading: 'What “clean” includes',
        list: [
          'All cooking equipment washed and put away',
          'Counters and stovetop wiped down',
          'Trash and recycling out',
          'Leftovers packed, labeled, and refrigerated',
          'The floor swept where the work happened',
        ],
        body: [
          'It does not include your breakfast dishes from that morning — but if they are in the sink when we arrive, they tend to get done anyway. That is the job as we understand it.',
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'How it works', secondaryHref: '/oahu/guides/how-it-works' },
    parent: 'guides',
    keywords: ['private chef cleanup what to expect Oahu', 'do private chefs clean up'],
  },
  {
    slug: 'guides/alcohol-and-bar',
    category: 'guide',
    title: 'Can a Private Chef Serve Alcohol in Hawaiʻi? The Honest Answer',
    h1: 'Alcohol, by the book.',
    meta: {
      description:
        'Alcohol and private chef events in Hawaiʻi: county liquor commissions govern service; alcohol is client-supplied or via licensed bartending referral, and myCHEF does not sell alcohol.',
    },
    intro:
      'The short answer: we do not sell alcohol, and service runs under Honolulu County’s liquor rules. Here is the arrangement that keeps your event legal and your bar excellent.',
    sections: [
      {
        heading: 'The working arrangement',
        body: [
          'You buy the alcohol (or we shop it at cost with receipts, as your agent — the receipt is yours). Where the venue or the law requires it, a licensed bartender pours through our referral network. The packaged bar cart — from $650 per four hours plus $45 a guest — covers everything else: mixers, ice, garnishes, and the person who knows the recipes.',
        ],
      },
      {
        heading: 'Why so careful',
        body: [
          'Hawaiʻi runs four county liquor commissions, and the rules around who may pour at a private event are genuinely specific. Your quote states the arrangement in writing — verified for your venue before the date, never assumed.',
        ],
        links: [{ label: 'The bar cart', href: '/oahu/services/mobile-bar' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Mobile bar package', secondaryHref: '/oahu/services/mobile-bar' },
    parent: 'guides',
    keywords: ['can a private chef serve alcohol in Hawaii', 'Honolulu liquor rules private event'],
  },
  {
    slug: 'guides/north-shore-drive',
    category: 'guide',
    title: 'North Shore Private Chef Drive Times — The Honest Math',
    h1: 'The drive, in minutes.',
    meta: {
      description:
        'Honolulu to North Shore drive times for private chef service: 60–90+ minutes each way, longer in surf season (October–April) — and why the published travel fee from $75 exists.',
    },
    intro:
      'Town to the North Shore is 60–90 minutes each way on a good day. When the surf is up, Kamehameha Highway becomes the island’s slowest parking lot. Here is how we plan around it.',
    sections: [
      {
        heading: 'What the fee buys',
        body: [
          'The published travel fee — from $75 — covers the drive both ways and the logistics of cooking an hour from the nearest full market: shopping staged in town, coolers packed, arrival timed against the surf report as much as the clock.',
        ],
        list: [
          'Normal conditions: 60–75 minutes each way',
          'Surf season swells (Oct–Apr): 90+ minutes, planned around',
          'Multi-day stays: the fee applies per day, itemized',
        ],
        links: [{ label: 'North Shore service', href: '/oahu/locations/north-shore' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Travel zones', secondaryHref: '/oahu/pricing/travel-zones' },
    parent: 'guides',
    keywords: ['North Shore private chef drive times', 'Honolulu to North Shore drive'],
  },
  /* ------------------------------------------------------------------ */
  /* Trust (Table 4.2.1b)                                               */
  /* ------------------------------------------------------------------ */
  {
    slug: 'about',
    category: 'trust',
    title: 'About myCHEF Oʻahu',
    h1: 'About myCHEF Oʻahu.',
    meta: {
      description:
        'myCHEF Oʻahu is a network of vetted independent chefs serving the island’s suites, villas, estates, and offices — published prices, written quotes, and an honesty register instead of review theater.',
    },
    intro:
      'A network of vetted independent chefs, one island, one standard: published prices, the written quote as the confirmed total, and the honesty register instead of review theater.',
    sections: [
      {
        heading: 'What we are',
        body: [
          'myCHEF Oʻahu is the island team of myCHEF Hawaii — the statewide network spanning Oʻahu, Maui, Kauaʻi, and the Big Island. Chefs join by vetting, not by subscription; clients book by written quote, not by app roulette.',
        ],
        links: [
          { label: 'How we vet chefs', href: '/oahu/how-we-vet-chefs' },
          { label: 'The statewide hub', href: '/' },
        ],
      },
      {
        heading: 'How we are reachable',
        body: [
          'The quote form and WhatsApp are the front door — no call center, no chatbot. A person who knows the island answers, usually within hours.',
        ],
        links: [{ label: 'Contact', href: '/oahu/contact' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The honesty register', secondaryHref: '/oahu/trust' },
    parent: '',
    keywords: ['about myCHEF Oahu', 'myCHEF Honolulu team'],
  },
  {
    slug: 'trust',
    category: 'trust',
    title: 'The myCHEF Honesty Register — Oʻahu',
    h1: 'The honesty register.',
    meta: {
      description:
        'myCHEF Oʻahu’s trust posture in writing: no fake reviews ever, published prices honored, the written quote as the confirmed total, and a public list of what we will not do.',
    },
    intro:
      'Trust is not a testimonial carousel. It is a short list of commitments we keep in public — and a list of things we will not do, also in public.',
    sections: [
      {
        heading: 'The commitments',
        list: [
          'Published prices, honored — the card you read is the card you are quoted from',
          'The written quote is the confirmed total — never a chat estimate',
          '20% service charge and GET up to 4.7120% on their own lines, always',
          'No fake reviews — ever. We do not buy them, write them, or curate away the bad ones',
          'Kitchens that do not pass get declined at inquiry, not at arrival',
        ],
      },
      {
        heading: 'Why no review wall',
        body: [
          'The private-chef industry’s review ecosystems are purchasable, and everyone shopping knows it. We would rather show you the fee stack and the rate card — arithmetic you can verify beats sentiment you cannot.',
        ],
        links: [
          { label: 'What we will not do', href: '/oahu/what-we-dont-do' },
          { label: 'How we vet chefs', href: '/oahu/how-we-vet-chefs' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'What we don’t do', secondaryHref: '/oahu/what-we-dont-do' },
    parent: '',
    keywords: ['myCHEF honesty register Oahu', 'myCHEF reviews policy'],
  },
  {
    slug: 'legal',
    category: 'trust',
    title: 'Booking Terms — myCHEF Oʻahu',
    h1: 'The booking terms.',
    meta: {
      description:
        'myCHEF Oʻahu booking terms in plain language: the written quote as contract, the 50% deposit, cancellation tiers, the fee stack, and the force-majeure posture.',
    },
    intro:
      'The fine print, written to be read. Seven sections, plain language, no surprises that were not already on the quote.',
    sections: [
      {
        heading: 'The terms in plain language',
        list: [
          'The written quote is the confirmed total — the contract is the quote you approved',
          'A 50% deposit locks the date, taken only after you have seen the numbers',
          'Cancellation: 28+ days, partial refund; 14–28 days, deposit retained; under 7 days, full balance (proposed terms, pending final counsel sign-off)',
          'Force majeure reschedules rather than forfeits — hurricanes and closed roads move the date, not your money',
          '20% service charge and GET up to 4.7120% appear on their own lines on every quote and invoice',
          'Gratuity is voluntary, always',
          'Groceries are billed at cost with receipts on request',
        ],
        body: [
          'Questions about any line are welcome before the deposit, not after — that is the point of putting the terms in prose.',
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The fee stack', secondaryHref: '/oahu/pricing/fee-stack' },
    parent: '',
    keywords: ['myCHEF booking terms Oahu', 'private chef cancellation policy Honolulu'],
  },
  {
    slug: 'faq',
    category: 'trust',
    title: 'Private Chef Oʻahu FAQ — Every Question, Answered',
    h1: 'Questions, answered.',
    meta: {
      description:
        'The myCHEF Oʻahu FAQ in full prose: prices, groceries, kitchens, deposits, tipping, lead times, travel fees, dietary handling, and what happens if something goes wrong.',
    },
    intro:
      'The questions every client asks, answered in full prose with links to the deeper pages. If yours is missing, WhatsApp us — a person answers.',
    sections: [],
    faq: [
      {
        q: 'How much does a private chef cost on Oʻahu?',
        a: 'Signature dinners run $125–$190 a guest with groceries included; Table menus start at $95–$125, Premium runs $190–$275, and Chef’s table $275–$400+. Stay Chef runs from $850 a day. The 20% service charge and GET up to 4.7120% appear on their own lines.',
        links: [{ label: 'The full rate card', href: '/oahu/pricing' }],
      },
      {
        q: 'Is the written quote really the final price?',
        a: 'Yes. The written quote itemizes food, staffing, travel, service charge, and GET — and that document is the confirmed total. Nothing is added later.',
      },
      {
        q: 'Are groceries included?',
        a: 'In per-guest dinner bands, yes — inside the band. For Stay Chef and weekly service, groceries bill at cost with receipts attached. There is never a markup.',
        links: [{ label: 'Groceries at cost', href: '/oahu/guides/groceries-at-cost' }],
      },
      {
        q: 'What kind of kitchen do you need?',
        a: 'A working stove, counter space, refrigeration, and a sink. Hotel rooms without kitchens are declined at inquiry — send a photo if you are unsure.',
        links: [{ label: 'The kitchen guide', href: '/oahu/guides/villa-kitchen' }],
      },
      {
        q: 'How does the deposit work?',
        a: 'A 50% deposit locks the date — and it is taken only after you have seen and approved the written quote.',
      },
      {
        q: 'Should we tip?',
        a: 'Gratuity is always voluntary and never suggested by us. The 20% service charge is itemized separately and is not a hidden tip line.',
      },
      {
        q: 'How far ahead should we book?',
        a: 'Dinners: one to two weeks. Stay Chef weeks: three to six. Weddings and December: two to six months. Last-minute is always worth asking about.',
        links: [{ label: 'Lead times', href: '/oahu/guides/booking-lead-times' }],
      },
      {
        q: 'Do you charge travel fees?',
        a: 'Only where the drive is real: the North Shore and Turtle Bay run from $75, published and itemized. Everywhere else on Oʻahu is base zone.',
        links: [{ label: 'Travel zones', href: '/oahu/pricing/travel-zones' }],
      },
      {
        q: 'What if our chef gets sick?',
        a: 'The roster covers it. A network exists for exactly this morning — a vetted backup steps in with your menu and your quote unchanged.',
      },
      {
        q: 'Do you serve alcohol?',
        a: 'We do not sell alcohol. It is client-supplied or poured by a licensed referral bartender — the arrangement is stated on your quote.',
        links: [{ label: 'Alcohol and the bar', href: '/oahu/guides/alcohol-and-bar' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: WA },
    parent: '',
    keywords: ['private chef Oahu FAQ', 'private chef Honolulu questions'],
  },
  {
    slug: 'contact',
    category: 'trust',
    title: 'Contact myCHEF Oʻahu — Quote Form & WhatsApp',
    h1: 'Talk to a person.',
    meta: {
      description:
        'Contact myCHEF Oʻahu: the quote form for written quotes and WhatsApp for everything else. A person who knows the island answers — usually within hours.',
    },
    intro:
      'Two doors: the quote form when you know what you want, WhatsApp when you want to talk it through. Either way, a person who knows the island answers — usually within hours.',
    sections: [
      {
        heading: 'The two doors',
        body: [
          'The quote form takes five fields and two minutes; the written quote comes back itemized. WhatsApp (+971 55 174 4849) is for everything else — the kitchen photo, the “is this possible,” the date you are not sure about.',
        ],
        links: [
          { label: 'Start the quote form', href: '/oahu/quote' },
          { label: 'WhatsApp us', href: WA },
        ],
      },
    ],
    cta: { label: 'Start the quote', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: WA },
    parent: '',
    keywords: ['contact myCHEF Oahu', 'private chef Honolulu contact'],
  },
  {
    slug: 'what-we-dont-do',
    category: 'trust',
    title: 'What myCHEF Oʻahu Will Not Do',
    h1: 'What we will not do.',
    meta: {
      description:
        'The negative-space list: no fake reviews, no marked-up groceries, no hidden fees, no cooking in kitchens that fail, no venues with exclusive caterers, no “from $” bait that grows at invoice time.',
    },
    intro:
      'The fastest way to explain a standard is to list what violates it. This is that list.',
    sections: [
      {
        heading: 'The list',
        list: [
          'No fake reviews — we do not buy them, write them, or hide the bad ones',
          'No markup on groceries — cost, with receipts',
          'No fee that was not on the written quote',
          'No cooking in hotel rooms without kitchens — declined honestly at inquiry',
          'No pretending we can work venues with exclusive caterers',
          'No “from $” figures that grow between the ad and the invoice',
          'No suggesting a gratuity — it is voluntary, always',
        ],
        body: [
          'Every item on this list exists because someone in this industry does the opposite. We would rather be specific than polite about it.',
        ],
        links: [{ label: 'The honesty register', href: '/oahu/trust' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The honesty register', secondaryHref: '/oahu/trust' },
    parent: 'trust',
    keywords: ['what myCHEF will not do Oahu', 'myCHEF policies'],
  },
  {
    slug: 'coverage',
    category: 'trust',
    title: 'Oʻahu Service Area Map — Coverage & Travel Zones',
    h1: 'The coverage map.',
    meta: {
      description:
        'myCHEF Oʻahu’s service area in writing: base zones across the island, published travel fees for the North Shore and Turtle Bay, and quote-only posture for everything else.',
    },
    intro:
      'Three kinds of ground: base zones with no travel fee, published-fee zones on the North Shore and Turtle Bay, and everything else by written quote.',
    sections: [
      {
        heading: 'The three kinds of ground',
        list: [
          'Base zones — no travel fee: Waikīkī, Honolulu, Kahala–Gold Coast, Ko Olina, Kapolei, Kailua–Lanikai, Hawaiʻi Kai',
          'Published-fee zones — North Shore and Turtle Bay, from $75',
          'Quote-only — anything outside the map, answered in writing',
        ],
        links: [
          { label: 'Travel zones and fees', href: '/oahu/pricing/travel-zones' },
          { label: 'Areas served', href: '/oahu/locations' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'Areas served', secondaryHref: '/oahu/locations' },
    parent: 'locations',
    keywords: ['Oahu service area map', 'myCHEF Oahu coverage'],
  },
  {
    slug: 'how-we-vet-chefs',
    category: 'trust',
    title: 'How myCHEF Vets Chefs — Oʻahu',
    h1: 'How a chef joins the roster.',
    meta: {
      description:
        'How myCHEF vets its Oʻahu chefs: verified professional kitchen history, insurance and health-permit posture, a paid trial service, and standing re-review. Subscription alone never buys a listing.',
    },
    intro:
      'Chefs join this roster by vetting, not by subscription. Here is the gauntlet, described honestly.',
    sections: [
      {
        heading: 'The four gates',
        list: [
          'Verified history — real professional kitchen years, checked against references',
          'Insurance and health-permit posture verified, current, and on file',
          'A paid trial service — we taste the work before clients do',
          'Standing re-review — client feedback and spot checks keep the listing earned',
        ],
        body: [
          'No one pays to be listed, and no one stays listed on autopilot. That is the whole mechanism.',
        ],
        links: [
          { label: 'The honesty register', href: '/oahu/trust' },
          { label: 'Direct hire versus myCHEF', href: '/oahu/compare/freelance-vs-mychef' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/oahu/quote', secondaryLabel: 'The trust page', secondaryHref: '/oahu/trust' },
    parent: 'trust',
    keywords: ['how myCHEF vets chefs Oahu', 'vetted private chef Honolulu'],
  },
  /* ------------------------------------------------------------------ */
  /* Partners (Table 4.2.1b)                                            */
  /* ------------------------------------------------------------------ */
  {
    slug: 'partners',
    category: 'partner',
    title: 'Partner with myCHEF Oʻahu — B2B Channels',
    h1: 'The partner desk.',
    meta: {
      description:
        'Partner channels for Oʻahu villa managers, concierges, and wedding planners: a vetted chef roster, published prices you can quote to clients, and one written quote per booking.',
    },
    intro:
      'Villa managers, concierges, and planners send us the tables they cannot serve themselves. We send back written quotes your clients can read — and we make you look good for the referral.',
    sections: [
      {
        heading: 'Pick your channel',
        links: [
          { label: 'Villa managers', href: '/oahu/partners/villa-managers' },
          { label: 'Concierges', href: '/oahu/partners/concierges' },
          { label: 'Wedding planners', href: '/oahu/partners/wedding-planners' },
        ],
        body: [
          'Every channel runs on the same rails: published prices you can quote without embarrassment, COIs and building logistics handled, and a written quote the client approves directly.',
        ],
      },
    ],
    cta: { label: 'Start a conversation', href: '/oahu/quote', secondaryLabel: 'WhatsApp the partner desk', secondaryHref: WA },
    parent: '',
    keywords: ['partner with myCHEF Oahu', 'chef referral program Honolulu'],
  },
  {
    slug: 'partners/villa-managers',
    category: 'partner',
    title: 'Private Chef Partner for Villa Managers — Oʻahu',
    h1: 'The villa manager’s chef line.',
    meta: {
      description:
        'A private chef partner for Oʻahu villa and estate managers: guest-ready written quotes, COI paperwork for your properties, Stay Chef weeks, and a roster deep enough for peak season.',
    },
    intro:
      'Your guests ask for a chef; you need one answer, not a spreadsheet of maybes. We are the line you hand out — with paperwork your properties actually require.',
    sections: [
      {
        heading: 'What your office gets',
        list: [
          'Written, itemized quotes your guests approve directly — you are never in the money middle',
          'COIs naming your properties, issued without chasing',
          'Stay Chef weeks and arrival provisioning for 30-day stays',
          'A roster deep enough to say yes in peak season',
        ],
        body: [
          'Ko Olina, Kailua, the North Shore, Kahala — the corridors your portfolio runs are the corridors we cook.',
        ],
        links: [{ label: 'Stay Chef weeks', href: '/oahu/stay-chef' }],
      },
    ],
    cta: { label: 'Start a conversation', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: WA },
    parent: 'partners',
    keywords: ['private chef partner villa managers Oahu', 'villa chef program Honolulu'],
  },
  {
    slug: 'partners/concierges',
    category: 'partner',
    title: 'Concierge Chef Referral Program — Oʻahu',
    h1: 'The concierge rail.',
    meta: {
      description:
        'A chef referral rail for Oʻahu hotel and villa concierges: fast written quotes, in-suite logistics handled (COI, freight elevator), and service that reflects well on the desk that sent it.',
    },
    intro:
      'The request lands on your desk at 2 p.m. for tonight. We answer fast, quote in writing, and handle the building paperwork your property requires.',
    sections: [
      {
        heading: 'Built for the desk’s reality',
        body: [
          'Response in hours, written quotes the guest approves directly, and logistics — COI, freight elevator, compact galley — handled without bouncing questions back to you. When the answer is honestly no (the kitchen, the timeline), we say it fast so you can move on.',
        ],
        links: [{ label: 'In-suite dining in Waikīkī', href: '/oahu/locations/waikiki/in-suite-dining' }],
      },
    ],
    cta: { label: 'Start a conversation', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: WA },
    parent: 'partners',
    keywords: ['concierge chef referral program Oahu', 'hotel concierge chef Honolulu'],
  },
  {
    slug: 'partners/wedding-planners',
    category: 'partner',
    title: 'Wedding Planner Catering Partner — Oʻahu',
    h1: 'The planner channel.',
    meta: {
      description:
        'A catering partner for Oʻahu wedding planners: estate and villa formats, a wedding-week contract your couple signs once, itemized quotes a committee can read, and venue-access honesty.',
    },
    intro:
      'You know which venues lock their caterer lists; so do we, and we will never promise around them. For the estates, villas, and private properties on your board, we are the culinary answer.',
    sections: [
      {
        heading: 'What lands in your inbox',
        list: [
          'Itemized written quotes — per-guest lines, staffing hourlys, fee stack — that a couple’s committee can actually read',
          'One wedding-week contract covering welcome dinner through recovery brunch',
          'Property walk-throughs before we commit to a kitchen plan',
          'A direct line to the chef team, not a call center',
        ],
        links: [
          { label: 'The wedding week', href: '/oahu/weddings/wedding-week' },
          { label: 'Venues guide', href: '/oahu/weddings/venues' },
        ],
      },
    ],
    cta: { label: 'Start a conversation', href: '/oahu/quote', secondaryLabel: 'WhatsApp us', secondaryHref: WA },
    parent: 'partners',
    keywords: ['Oahu wedding planner catering partner', 'wedding planner chef Honolulu'],
  },
  /* ------------------------------------------------------------------ */
  /* Japanese-language cluster (Table 4.2.1b) — hreflang ja             */
  /* ------------------------------------------------------------------ */
  {
    slug: 'ja',
    category: 'core',
    title: 'オアフ島のプライベートシェフ — myCHEF Hawaiʻi',
    h1: 'オアフ島のプライベートシェフ。',
    meta: {
      description:
        'オアフ島のプライベートシェフサービス。シグネチャーディナーはお一人様$125–$190（食材費込み）、ステイシェフは1日$850から。見積書の金額がそのまま確定合計です。日本語でのご相談が可能です。',
    },
    intro:
      'ワイキキからノースショアまで、シェフがお客様のキッチンで調理します。シグネチャーディナーはお一人様$125–$190（食材費込み）。書面のお見積りが確定合計です。',
    sections: [
      {
        heading: 'サービス内容',
        list: [
          'シグネチャーディナー — お一人様$125–$190、食材費込み',
          'ステイシェフ（滞在型シェフ）— 1日$850から',
          'デートナイト（お二人のディナー）— $450から',
          '出張おまかせ（インスイートお任せ）— プレミアム帯',
          'ウェディング・イベントケータリング — 10〜75名様',
        ],
        body: [
          '料金はすべて公開。20%のサービス料とハワイ州GET（最大4.7120%）は必ず独立した項目として記載され、書面のお見積りが確定合計となります。',
        ],
        links: [
          { label: 'ワイキキの出張シェフ', href: '/oahu/ja/waikiki-private-chef' },
          { label: '出張おまかせ', href: '/oahu/ja/omakase-at-home' },
          { label: '滞在シェフ', href: '/oahu/ja/stay-chef' },
          { label: 'ウェディング', href: '/oahu/ja/weddings' },
        ],
      },
      {
        heading: 'ご予約の流れ',
        body: [
          'お見積りフォームをお送りください。料金を項目別に記載した書面のお見積りをお出しします。50%のデポジットで日程を確定し、当日はシェフが買い出し・調理・サービス・後片付けまで行います。',
        ],
      },
    ],
    faq: [
      {
        q: '日本語で相談できますか？',
        a: 'はい。お見積りフォームまたはWhatsAppにて日本語でご相談いただけます。お見積り書は英語での発行となりますが、内容は日本語でご説明いたします。',
      },
      {
        q: '料金はいくらですか？',
        a: 'シグネチャーディナーはお一人様$125–$190（食材費込み）、デートナイトは$450から、ステイシェフは1日$850からです。書面のお見積りが確定合計となります。',
      },
      {
        q: 'ホテルの部屋でも利用できますか？',
        a: 'キッチンのあるスイートやコンドミニアムではご利用いただけます。キッチンのないお部屋はお断りしています。お部屋のキッチン写真をお送りいただければ、事前にお答えします。',
      },
    ],
    cta: { label: 'お見積りを依頼する', href: '/oahu/quote', secondaryLabel: 'English', secondaryHref: '/oahu' },
    parent: '',
    keywords: ['ハワイ オアフ プライベートシェフ', '出張シェフ ハワイ'],
  },
  {
    slug: 'ja/waikiki-private-chef',
    category: 'location',
    title: 'ワイキキの出張シェフ — スイート・コンドミニアム向け',
    h1: 'ワイキキの出張シェフ。',
    meta: {
      description:
        'ワイキキのスイート・コンドミニアムでの出張シェフサービス。建物の保険証書（COI）や貨物エレベーターの予約も当社が対応。ディナーはお一人様$125–$190から。',
    },
    intro:
      'ワイキキの高層タワーでの調理には建物ごとのルールがあります。保険証書（COI）の発行、貨物エレベーターの予約、搬入手順まで、すべて当社が対応します。',
    sections: [
      {
        heading: 'スイートでのディナー',
        body: [
          'キッチン付きスイートでのシグネチャーディナーはお一人様$125–$190。お二人のためのデートナイトは$450から。眺望のよいお部屋が、その夜だけのレストランになります。',
        ],
        links: [{ label: 'English — Waikīkī', href: '/oahu/locations/waikiki' }],
      },
    ],
    cta: { label: 'お見積りを依頼する', href: '/oahu/quote', secondaryLabel: '日本語トップ', secondaryHref: '/oahu/ja' },
    parent: 'ja',
    keywords: ['ワイキキ 出張シェフ', 'ワイキキ プライベートシェフ'],
  },
  {
    slug: 'ja/omakase-at-home',
    category: 'service',
    title: '出張おまかせ — ハワイ・オアフのインスイート会席',
    h1: '出張おまかせ。',
    meta: {
      description:
        'オアフ島のスイートやヴィラで味わう出張おまかせ。その日の市場で決まる12〜20品のコースを、お客様のキッチンカウンターで。お一人様$190–$400+。',
    },
    intro:
      'その日の市場がメニューを決めます。12〜20品のお任せコースを、お客様のスイートのキッチンカウンターで。お一人様$190–$400+、コース数により書面でお見積りします。',
    sections: [
      {
        heading: 'コースの流れ',
        body: [
          '先付けからデザートまで、2〜3時間かけて一品ずつお出しします。食材は当日の朝に仕入れ、アレルギーや苦手な食材は事前にお伺いします。2名様から8名様までがカウンターの理想です。',
        ],
        links: [{ label: 'English — Omakase at home', href: '/oahu/services/omakase-at-home' }],
      },
    ],
    cta: { label: 'お見積りを依頼する', href: '/oahu/quote', secondaryLabel: '日本語トップ', secondaryHref: '/oahu/ja' },
    parent: 'ja',
    keywords: ['ハワイ 出張おまかせ', 'オアフ お任せ シェフ'],
  },
  {
    slug: 'ja/stay-chef',
    category: 'service',
    title: '滞在シェフ（ステイシェフ）— オアフ島、1日$850から',
    h1: '滞在中、専属のシェフを。',
    meta: {
      description:
        'オアフ島の滞在型シェフサービス（ステイシェフ）は1日$850から＋食材費実費。朝食・買い置き・夕食まで、ご滞在のヴィラのキッチンで毎日調理します。',
    },
    intro:
      '朝食から夕食まで、シェフが毎日お客様のキッチンで調理します。1日$850から＋食材費は実費（レシート添付）。コオリナ、カイルア、ノースショアのヴィラに対応。',
    sections: [
      {
        heading: '一日の流れ（例）',
        body: [
          '朝8時に朝食、午前中に冷蔵庫の買い置き、夕方7時に夕食。滞在のリズムに合わせてメニューを組み、書面のお見積りが確定合計となります。',
        ],
        links: [{ label: 'English — Stay Chef', href: '/oahu/stay-chef' }],
      },
    ],
    cta: { label: 'お見積りを依頼する', href: '/oahu/quote', secondaryLabel: '日本語トップ', secondaryHref: '/oahu/ja' },
    parent: 'ja',
    keywords: ['ハワイ 滞在シェフ', 'オアフ ステイシェフ'],
  },
  {
    slug: 'ja/weddings',
    category: 'wedding',
    title: 'ハワイ・オアフのウェディングケータリング',
    h1: 'オアフのウェディング。',
    meta: {
      description:
        'オアフ島のウェディングケータリング。エステート・ヴィラでの披露宴、少人数の挙式ディナー（$450から）まで。お一人様$125から＋スタッフ料金。日本語でご相談いただけます。',
    },
    intro:
      'エステートやヴィラでの披露宴から、お二人だけの挙式ディナー（$450から）まで。ウェディングウィークは一つの契約で歓迎ディナーから翌日のブランチまでカバーします。',
    sections: [
      {
        heading: 'ウェディングウィーク',
        body: [
          '歓迎ディナー、リハーサルディナー、披露宴、翌日のブランチ——すべてを一つの契約、一つのお見積りで。お一人様$125から＋スタッフ料金（サーバー$55/時間）。',
        ],
        links: [{ label: 'English — Weddings', href: '/oahu/weddings' }],
      },
    ],
    cta: { label: 'お見積りを依頼する', href: '/oahu/quote', secondaryLabel: '日本語トップ', secondaryHref: '/oahu/ja' },
    parent: 'ja',
    keywords: ['ハワイ ウェディング ケータリング', 'オアフ 挙式 シェフ'],
  },
];
