import type { ContentRecord } from '@/platform/types';

/**
 * Hub content registry — the full 48-page statewide inventory
 * (design.md §1 / Chapter 4 Table 4.3.1).
 *
 * The hub is an authority and routing layer, not a fifth island site:
 * zero location pages, zero island rate cards (it links down). '' and
 * 'quote' are registered for sitemap/SEO completeness but render through
 * bespoke components (see ./index.ts overrides and App.tsx).
 */
export const content: ContentRecord[] = [
  {
    slug: '',
    category: 'core',
    title: 'Private Chef Hawaii — Four Islands, Published Prices',
    h1: 'A private chef, anywhere in Hawaiʻi.',
    meta: {
      description:
        'One network, four island teams — Oʻahu, Maui, Kauaʻi, and the Big Island. Published per-guest prices, a written quote that is the confirmed total, and a chef who shops, cooks, serves, and leaves the kitchen clean.',
    },
    intro:
      'One network, four island teams. Published per-guest prices, a written quote that is the confirmed total, and a chef who shops, cooks, serves, and leaves the kitchen clean.',
    sections: [],
    cta: { label: 'Get a written quote', href: '/quote', secondaryLabel: 'Compare the islands', secondaryHref: '/islands' },
    keywords: ['private chef Hawaii'],
  },
  {
    slug: 'quote',
    category: 'core',
    title: 'Get a Written Quote — Private Chef Hawaii',
    h1: 'Tell us about the table.',
    meta: {
      description:
        'Six steps, two minutes, one written quote. The written quote you receive is the confirmed total — never a chat estimate.',
    },
    sections: [],
    cta: { label: 'Start the quote', href: '/quote' },
    keywords: ['book a private chef Hawaii'],
  },
  {
    slug: 'islands',
    category: 'core',
    title: 'Which Hawaiian Island — Choose Yours',
    h1: 'Four islands. Four kitchens.',
    meta: {
      description:
        'Oʻahu, Maui, Kauaʻi, or the Big Island — compare the four island teams, their published price bands, and their worlds, then pick yours.',
    },
    intro:
      'Every island team runs the same standard — published prices, the written quote, the fee stack itemized — and its own kitchen culture. Prices differ per island; pick yours and the numbers get specific.',
    sections: [
      {
        heading: 'Oʻahu — Metropolitan',
        body: [
          'Waikīkī penthouses, Kahala estates, Ko Olina villas, North Shore houses. The deepest roster in the network, corporate and convention capability, and a kamaʻāina weekly line for residents.',
          'Signature dinners $125–$190 a guest · Stay Chef from $850 a day · Date Night from $450.',
        ],
        links: [{ label: 'The Oʻahu site', href: '/oahu' }],
      },
      {
        heading: 'Maui — Cinematic',
        body: [
          'Wailea to Kapalua, villa weeks and the network’s deepest wedding-week program. Golden-hour service on the lānai; the five-meal wedding week as one contract.',
          'Signature dinners $150–$250 a guest · Stay Chef from $1,050 a day · Date Night from $500.',
        ],
        links: [{ label: 'The Maui site', href: '/maui' }],
      },
      {
        heading: 'Kauaʻi — Botanical',
        body: [
          'Both shores — Hanalei and Princeville in the north, Poʻipū in the south — estate weeks, retreats, and inquiry-first honesty about the far North.',
          'Signature dinners $150–$250 a guest · Stay Chef from $1,100 a day · Date Night $650–$950.',
        ],
        links: [{ label: 'The Kauaʻi site', href: '/kauai' }],
      },
      {
        heading: 'Big Island — Volcanic',
        body: [
          'The Kona–Kohala corridor west, Hilo–Volcano east — two and a half hours apart, priced honestly. Ledger-style pricing, night service, food carrying the color on basalt.',
          'CORE dinners $150–$225 a guest · Stay Chef from $950 a day · Date Night from $550.',
        ],
        links: [{ label: 'The Big Island site', href: '/bigisland' }],
      },
      {
        heading: 'Still deciding?',
        body: [
          'The chooser guide walks through seasonality, accommodation stock, and what each island is actually like for a villa vacation with a chef.',
        ],
        links: [{ label: 'Read: which island', href: '/guides/which-island' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote', secondaryLabel: 'Compare prices by island', secondaryHref: '/pricing/cost-by-island' },
    keywords: ['which Hawaiian island'],
  },
  {
    slug: 'private-chef',
    category: 'core',
    title: 'Hire a Private Chef in Hawaii',
    h1: 'A private chef, in your kitchen, on your island.',
    meta: {
      description:
        'How hiring a private chef in Hawaii works: your chef shops that morning, cooks in your villa kitchen, serves dinner, and leaves the kitchen clean. Published per-guest prices on four islands.',
    },
    intro:
      'Your chef shops that morning, arrives before service, cooks in your villa kitchen, serves dinner, and leaves the kitchen clean. This page explains the model statewide; each island owns its own rate card and roster.',
    sections: [
      {
        heading: 'What a private chef evening looks like',
        body: [
          'A signature dinner is a restaurant-grade tasting in your own dining room: a menu agreed in writing beforehand, groceries bought that day, courses plated and introduced, dietary flags handled quietly, and a kitchen left cleaner than the chef found it.',
          'Pricing is per guest and published: $125–$250 depending on island and tier, groceries inside the band. The fee stack — 20% service and Hawaiʻi GET up to 4.7120% — always appears on its own lines, and the written quote is the confirmed total.',
        ],
        links: [{ label: 'See the statewide tariff', href: '/pricing' }],
      },
      {
        heading: 'One evening, or the whole stay',
        body: [
          'Most bookings are a single signature dinner or a date night for two. The Stay Chef product puts the same chef in your villa kitchen for the length of the trip — breakfasts, kids’ meals, dinners — from $850–$1,100 a day depending on island.',
        ],
        links: [{ label: 'Stay Chef, explained', href: '/stay-chef' }],
      },
      {
        heading: 'Where the island sites take over',
        body: [
          'Menus, rosters, travel zones, and minimums are island-specific. The hub publishes the statewide picture; the island sites publish the numbers you’ll actually be quoted.',
        ],
        links: [
          { label: 'Oʻahu', href: '/oahu/private-chef' },
          { label: 'Maui', href: '/maui/private-chef' },
          { label: 'Kauaʻi', href: '/kauai/private-chef' },
          { label: 'Big Island', href: '/bigisland/private-chef' },
        ],
      },
    ],
    faq: [
      {
        q: 'How much does a private chef cost in Hawaii?',
        a: 'Signature dinners run $125–$250 per guest depending on island and tier, with groceries included inside the band. Stay Chef multi-day service runs from $850–$1,100 per day. The 20% service charge and Hawaiʻi GET up to 4.7120% always appear on their own lines.',
        links: [{ label: 'The full cost anatomy', href: '/private-chef-cost' }],
      },
      {
        q: 'Do we need a full kitchen?',
        a: 'A workable kitchen — stove, oven, counter space, running water — is enough; your chef brings the kit. We decline hotel rooms without kitchens, because a coffee maker is not a kitchen, and we will suggest alternatives instead.',
        links: [{ label: 'What we don’t do', href: '/what-we-dont-do' }],
      },
      {
        q: 'How far ahead should we book?',
        a: 'Two to four weeks is comfortable in normal seasons; December through March and holiday weeks book first and can need months. A 50% deposit locks the date — only after you have seen the written quote.',
        links: [{ label: 'Booking lead times', href: '/guides/booking-lead-times' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote', secondaryLabel: 'See how it works', secondaryHref: '/guides/how-it-works' },
    keywords: ['hire a private chef in Hawaii'],
  },
  {
    slug: 'catering',
    category: 'core',
    title: 'Catering in Hawaii — Villa, Estate & Event Catering',
    h1: 'Catering for the event, staffed and written down.',
    meta: {
      description:
        'Event catering across Hawaiʻi: weddings, retreats, corporate receptions — 10 to 75 staffed guests, over 75 by written exception. Published staffing rates and the fee stack itemized.',
    },
    intro:
      'Weddings, retreats, corporate receptions, estate parties — staffed service for 10 to 75 guests, with headcounts over 75 handled as a written exception so staffing is planned, not improvised.',
    sections: [
      {
        heading: 'What staffed catering includes',
        body: [
          'A lead chef, servers at a published $55 an hour and sous chefs at $75 (four-hour floor), rentals coordinated where the venue needs them, and a run-of-service agreed in writing. The 20% service charge replaces — and undercuts — the 23–25% resort norm.',
        ],
        links: [{ label: 'Staffing, rates, and roles', href: '/staffing' }],
      },
      {
        heading: 'Corporate and convention',
        body: [
          'Oʻahu carries the network’s corporate depth: off-site dinners, buyouts, and receptions that route around convention-center F&B minimums. Retreats route to Kauaʻi and the Big Island, where the estate stock and the quiet are.',
        ],
        links: [
          { label: 'Corporate catering', href: '/corporate-catering' },
          { label: 'Retreat catering', href: '/retreat-catering' },
        ],
      },
      {
        heading: 'Catering on your island',
        body: ['Menus, staffing plans, and venue rules differ per island — each island site publishes its own catering page with local numbers.'],
        links: [
          { label: 'Oʻahu catering', href: '/oahu/catering' },
          { label: 'Maui catering', href: '/maui/catering' },
          { label: 'Kauaʻi catering', href: '/kauai/catering' },
          { label: 'Big Island catering', href: '/bigisland/catering' },
        ],
      },
    ],
    faq: [
      {
        q: 'What group sizes can you cater?',
        a: 'Staffed catering runs 10 to 75 guests. Over 75 is possible as a written exception — we confirm staffing and rentals in writing before taking the date rather than promising and improvising.',
      },
      {
        q: 'How does the service charge compare to a resort?',
        a: 'myCHEF publishes a 20% service charge on its own line. Resort and venue catering in Hawaiʻi typically runs 23–25%, often folded into banquet pricing where it is hard to see. Ours is itemized, always.',
        links: [{ label: 'The fee stack', href: '/pricing/fee-stack' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote', secondaryLabel: 'Wedding catering', secondaryHref: '/weddings' },
    keywords: ['catering Hawaii'],
  },
  {
    slug: 'weddings',
    category: 'wedding',
    title: 'Wedding Catering in Hawaii — The Statewide Picture',
    h1: 'A wedding week, fed properly.',
    meta: {
      description:
        'Wedding catering across Hawaiʻi — from elopement dinners to the five-meal wedding week under one contract. Per-guest prices published; 20% service vs the 23–25% resort norm.',
    },
    intro:
      'Hawaiʻi weddings skew destination, and destination weddings are really a week of meals with a ceremony in the middle. We cater that week — welcome dinner, rehearsal, reception, recovery brunch — as one written contract.',
    sections: [
      {
        heading: 'The wedding week, one contract',
        body: [
          'Five meals across the stay — welcome, rehearsal, ceremony-adjacent, reception, recovery brunch — planned as one arc with one chef team and one itemized quote. Menus vary so the week doesn’t repeat itself.',
        ],
        links: [{ label: 'How the wedding week works', href: '/weddings/wedding-week' }],
      },
      {
        heading: 'The arithmetic vs. the resort circuit',
        body: [
          'Resort wedding F&B in Hawaiʻi commonly runs $7,500–$15,000 minimums with 23–25% service charges. We publish per-guest pricing from $150 and a 20% service line — which is why estate and villa weddings route to us.',
        ],
        links: [{ label: 'Statewide tariff', href: '/pricing' }],
      },
      {
        heading: 'Weddings on your island',
        body: [
          'Maui carries the network’s deepest wedding program; Oʻahu the estate-and-elopement wedge around venue exclusivity; Kauaʻi the two-shore estate wedding; the Big Island the ledger argument against resort minimums.',
        ],
        links: [
          { label: 'Maui weddings', href: '/maui/weddings' },
          { label: 'Oʻahu weddings', href: '/oahu/weddings' },
          { label: 'Kauaʻi weddings', href: '/kauai/weddings' },
          { label: 'Big Island weddings', href: '/bigisland/weddings' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does wedding catering cost in Hawaii?',
        a: 'Per-guest bands run $150–$250 depending on island and menu, with staffing at published hourly rates and a 20% service charge on its own line. The written quote itemizes everything before a deposit is taken.',
      },
      {
        q: 'Can you cater at our rental villa or estate?',
        a: 'Yes — villas and estates are our default venue. We check the kitchen during the quote, coordinate rentals where needed, and flag any venue rules (some resorts hold exclusive caterers) before you commit.',
      },
    ],
    cta: { label: 'Start a wedding quote', href: '/quote', secondaryLabel: 'The wedding week', secondaryHref: '/weddings/wedding-week' },
    keywords: ['wedding catering Hawaii'],
  },
  {
    slug: 'stay-chef',
    category: 'core',
    title: 'Stay Chef Hawaii — A Chef for the Whole Vacation',
    h1: 'A chef for the stay, not just the evening.',
    meta: {
      description:
        'Stay Chef puts a private chef in your villa kitchen for the length of the trip — breakfasts, kids’ meals, dinners — from $850–$1,100 a day depending on island. Published day rates, written quote.',
    },
    intro:
      'Stay Chef is the vacation-chef rhythm: the same chef in your kitchen across the trip — coffee and breakfast before the beach, kids’ meals handled early, dinner when you want it. Day rates are published per island.',
    sections: [
      {
        heading: 'What a day with a Stay Chef looks like',
        body: [
          'Morning shop, breakfast service, the fridge stocked for the day, and dinner cooked and served in the evening — with menus agreed in advance and dietary flags carried across every meal, not re-explained nightly.',
          'Day rates: Oʻahu from $850 · Maui from $1,050 · Kauaʻi from $1,100 · Big Island from $950. Groceries at cost with receipts; the fee stack itemized as always.',
        ],
      },
      {
        heading: 'Who books it',
        body: [
          'Multi-generational villa weeks, retreat groups, wedding parties between events, and anyone who has done the math on restaurant-seat logistics for twelve people twice a day. Three days is the usual minimum; a full week is the norm in peak season.',
        ],
        links: [{ label: 'Villa chef specifics', href: '/villa-chef' }],
      },
    ],
    faq: [
      {
        q: 'What does a vacation chef cost per day in Hawaii?',
        a: 'Published Stay Chef day rates run from $850 on Oʻahu to $1,100 on Kauaʻi, with Maui at $1,050 and the Big Island at $950. Groceries are at cost with receipts; 20% service and GET appear on their own lines.',
      },
      {
        q: 'Is there a minimum number of days?',
        a: 'Three days is the working minimum — below that, a signature dinner or two usually serves you better and costs less. Your written quote will say so plainly if that is the case.',
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote', secondaryLabel: 'Compare day rates', secondaryHref: '/pricing/cost-by-island' },
    keywords: ['Hawaii vacation chef', 'villa chef Hawaii'],
  },
  {
    slug: 'retreat-catering',
    category: 'service',
    title: 'Retreat Catering in Hawaii',
    h1: 'Feeding the retreat, not just the group.',
    meta: {
      description:
        'Retreat catering across Hawaiʻi — plant-forward communal tables, dietary protocols handled properly, headcounts 8–30+. Kauaʻi and Big Island estate depth.',
    },
    intro:
      'Retreats eat differently: communal tables, dietary protocols that are the point of the week, and meal timing built around the program. We cater headcounts from 8 to 30+ with protocol-fluent chefs.',
    sections: [
      {
        heading: 'Protocols are a spec, not a favor',
        body: [
          'Plant-based, Ayurvedic-fluent, detox, raw — the dietary protocol is written into the quote and the shopping list. Eleven standard dietary flags carry across every meal of the week.',
        ],
        links: [{ label: 'The dietary matrix', href: '/dietary' }],
      },
      {
        heading: 'Where retreats route',
        body: [
          'Kauaʻi carries the network’s retreat depth — estate kitchens, both shores, and hosts who already run $2,000–$4,499 ticket retreats. Big Island east-side retreats are quoted at inquiry with the drive-time math shown.',
        ],
        links: [
          { label: 'Kauaʻi retreat catering', href: '/kauai/retreat-catering' },
          { label: 'Big Island catering', href: '/bigisland/catering' },
        ],
      },
    ],
    cta: { label: 'Plan retreat meals', href: '/quote', secondaryLabel: 'Talk to the team', secondaryHref: '/contact' },
    keywords: ['retreat catering Hawaii'],
  },
  {
    slug: 'corporate-catering',
    category: 'service',
    title: 'Corporate Catering in Hawaii',
    h1: 'Corporate catering that reads like a spec sheet.',
    meta: {
      description:
        'Corporate and convention catering in Hawaiʻi — off-site dinners, buyouts, and receptions for 10–75 staffed guests. Oʻahu carries the network’s corporate depth.',
    },
    intro:
      'Off-site executive dinners, incentive-group receptions, convention-adjacent buyouts — corporate catering with staffing, COIs, and invoices that survive procurement review.',
    sections: [
      {
        heading: 'Built for the planner’s checklist',
        body: [
          'Certificates of insurance on request, staffing at published hourly rates ($55 server / $75 sous chef, four-hour floor), rental coordination, and a written quote itemized enough for expense policy — 20% service and GET on their own lines.',
        ],
      },
      {
        heading: 'Where corporate routes',
        body: [
          'Oʻahu carries this silo: Honolulu’s convention calendar, Waikīkī buyouts, and estate dinners in Kahala and Ko Olina. Neighbor-island corporate work is quoted per event with travel lines shown.',
        ],
        links: [{ label: 'Oʻahu catering', href: '/oahu/catering' }],
      },
    ],
    cta: { label: 'Request an event quote', href: '/quote', secondaryLabel: 'Staffing rates', secondaryHref: '/staffing' },
    keywords: ['corporate catering Hawaii'],
  },
  {
    slug: 'villa-chef',
    category: 'service',
    title: 'Private Chef for Your Vacation Rental in Hawaii',
    h1: 'The rental has a kitchen. Put a chef in it.',
    meta: {
      description:
        'A private chef for your Hawaii vacation rental: we check the kitchen during the quote, shop locally, cook in the villa, and leave it clean. Published prices on four islands.',
    },
    intro:
      'A third or more of Hawaiʻi visitors stay in rentals, and the kitchen is usually the best room nobody uses. Villa chef service is built around that room — we verify the kitchen during the quote, then cook in it.',
    sections: [
      {
        heading: 'The kitchen check',
        body: [
          'During the quote we ask what the kitchen actually has: stove and oven, counter space, refrigeration, sharp knives. A workable kitchen is enough — your chef brings the kit. A hotel room coffee maker is not a kitchen, and we say so.',
        ],
        links: [{ label: 'What kitchen a private chef needs', href: '/guides/villa-kitchens' }],
      },
      {
        heading: 'One dinner or the whole stay',
        body: [
          'Most rental bookings are a signature dinner mid-stay; the Stay Chef product covers the whole week from published day rates. Groceries are bought locally that morning and charged at cost with receipts.',
        ],
        links: [{ label: 'Stay Chef day rates', href: '/stay-chef' }],
      },
    ],
    faq: [
      {
        q: 'Can a chef cook in our Airbnb or vacation rental?',
        a: 'Yes — rentals and villas are our default venue. We confirm the kitchen during the quote and bring any kit the kitchen lacks. Hotel rooms without kitchens are declined, with alternatives suggested.',
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote', secondaryLabel: 'Kitchen requirements', secondaryHref: '/guides/villa-kitchens' },
    keywords: ['private chef for vacation rental Hawaii'],
  },
  {
    slug: 'weddings/wedding-week',
    category: 'wedding',
    title: 'The Hawaii Wedding Week — Five Meals, One Contract',
    h1: 'Welcome dinner to recovery brunch, one written quote.',
    meta: {
      description:
        'The myCHEF wedding week: welcome dinner, rehearsal, ceremony-adjacent meal, reception, recovery brunch — five meals planned as one arc under one contract, priced per guest.',
    },
    parent: 'weddings',
    intro:
      'Destination weddings are a week of meals with a ceremony in the middle. The wedding-week product caters all of it as one contract: five meals, one chef team, one itemized quote.',
    sections: [
      {
        heading: 'The five-meal arc',
        list: [
          'Welcome dinner — family-style, built for jet lag and introductions',
          'Rehearsal dinner — the dressed-up evening before the evening',
          'Ceremony-adjacent meal — the quiet brunch or lunch around the getting-ready hours',
          'The reception — plated or stationed, staffed, the centerpiece',
          'Recovery brunch — late, easy, built for the morning after',
        ],
        body: [
          'Each meal is menued separately so the week never repeats itself; dietary flags are captured once and carried across all five.',
        ],
      },
      {
        heading: 'Why one contract beats five vendors',
        body: [
          'One quote, one deposit schedule, one team that already knows the kitchen by the reception. The per-guest bands are published — wedding weeks price from the same rate card as everything else, from $150 a guest, with 20% service instead of the 23–25% resort norm.',
        ],
        links: [{ label: 'Statewide tariff', href: '/pricing' }],
      },
      {
        heading: 'Wedding week on your island',
        body: ['Maui runs the network’s deepest wedding-week program; the other islands run their own formats.'],
        links: [
          { label: 'Maui wedding week', href: '/maui/weddings' },
          { label: 'Oʻahu weddings', href: '/oahu/weddings' },
          { label: 'Kauaʻi weddings', href: '/kauai/weddings' },
          { label: 'Big Island weddings', href: '/bigisland/weddings' },
        ],
      },
    ],
    cta: { label: 'Start a wedding-week quote', href: '/quote', secondaryLabel: 'Wedding guide', secondaryHref: '/guides/wedding-guide' },
    keywords: ['Hawaii wedding week catering'],
  },
  {
    slug: 'mobile-bar',
    category: 'service',
    title: 'Mobile Bar Service in Hawaii',
    h1: 'The bar cart, staffed and licensed-aware.',
    meta: {
      description:
        'Packaged bar cart service for Hawaii events: from $650/4hr plus per-guest on Oʻahu to $850 plus $60/guest on Kauaʻi. County liquor rules differ — we tell you what applies.',
    },
    intro:
      'A packaged bar cart with a working bartender: four-hour blocks, published pricing, and straight talk about Hawaiʻi’s county-by-county liquor rules.',
    sections: [
      {
        heading: 'Published cart pricing',
        list: [
          'Oʻahu — from $650 / 4hr + $45 a guest',
          'Maui — from $800 / 4hr',
          'Kauaʻi — from $850 / 4hr + $60 a guest',
          'Big Island — from $725 / 4hr',
        ],
        body: [
          'Cart packages include the bar setup, tools, ice, mixers, and garnish. Alcohol itself is client-supplied or arranged through licensed referral — the honest posture, since Hawaiʻi’s four county liquor commissions each read the rules differently.',
        ],
      },
      {
        heading: 'The alcohol posture, plainly',
        body: [
          'We do not sell alcohol. You buy it (we will send a shopping list matched to your menu and headcount), or we refer a licensed caterer for full bar service where the county requires it. Your written quote states which applies to your venue.',
        ],
        links: [{ label: 'Alcohol policy guide', href: '/guides/alcohol-policy' }],
      },
    ],
    cta: { label: 'Add a bar to your quote', href: '/quote', secondaryLabel: 'Alcohol policy', secondaryHref: '/guides/alcohol-policy' },
    keywords: ['mobile bar Hawaii'],
  },
  {
    slug: 'staffing',
    category: 'service',
    title: 'Event Staffing in Hawaii — Servers & Sous Chefs',
    h1: 'Published staffing rates. No phone call required.',
    meta: {
      description:
        'Event staffing across Hawaiʻi: servers from $55/hr, sous chefs from $75/hr, four-hour floor. Staffed events 10–75 guests; over 75 by written exception.',
    },
    intro:
      'Every staffed event prices its people the same way: servers at $55 an hour, sous chefs at $75, a four-hour floor, and the roster confirmed in writing with the quote.',
    sections: [
      {
        heading: 'The roles and the rates',
        list: [
          'Server — $55/hr, four-hour floor',
          'Sous chef — $75/hr, four-hour floor',
          'Lead chef — inside the per-guest band, never a surprise line',
          'Bar cart with bartender — packaged, from $650–$850/4hr by island',
        ],
        body: [
          'Staffing ratios are planned, not guessed: a seated dinner for twenty typically runs one server per ten guests plus a sous; receptions scale by stations. The written quote shows the roster.',
        ],
      },
      {
        heading: 'Group sizes, honestly',
        body: [
          'Staffed service runs 10 to 75 guests. Over 75 is a written exception — we confirm the second chef team and rentals before taking the date. Under 10, a private-chef dinner is usually the better product and the quote will say so.',
        ],
        links: [{ label: 'Event catering', href: '/catering' }],
      },
    ],
    cta: { label: 'Get a staffed quote', href: '/quote', secondaryLabel: 'The fee stack', secondaryHref: '/pricing/fee-stack' },
    keywords: ['event staffing Hawaii'],
  },
  {
    slug: 'dietary',
    category: 'service',
    title: 'Dietary-Friendly Private Chef Hawaii',
    h1: 'Eleven flags, carried across every meal.',
    meta: {
      description:
        'Dietary restrictions handled as spec, not favor: eleven standard flags — vegetarian, vegan, gluten-free, halal, allergies and more — captured once and carried across every meal.',
    },
    intro:
      'Dietary needs are captured in the quote as flags, written into the menu, and carried across every meal of the booking — not re-explained each night.',
    sections: [
      {
        heading: 'The eleven-flag system',
        list: [
          'Vegetarian', 'Vegan', 'Gluten-free', 'Dairy-free', 'Nut allergy', 'Shellfish allergy',
          'Halal', 'Kosher-style', 'Keto', 'Low-FODMAP', 'Other — written into the quote in your words',
        ],
        body: [
          'Allergies are handled as cross-contact specs, not omissions: separate boards, separate oil, and a menu the whole table can eat rather than a sad parallel plate.',
        ],
      },
      {
        heading: 'Retreat protocols',
        body: [
          'Plant-based, Ayurvedic-fluent, detox, and raw protocols are first-class specs on retreat bookings — the shopping list is built around them, and Kauaʻi’s farm supply carries most of it.',
        ],
        links: [{ label: 'Retreat catering', href: '/retreat-catering' }, { label: 'Dietary guide', href: '/guides/dietary-guide' }],
      },
    ],
    cta: { label: 'Tell us your flags', href: '/quote' },
    keywords: ['dietary-friendly private chef Hawaii'],
  },
  {
    slug: 'pricing',
    category: 'pricing',
    title: 'Private Chef Hawaii Cost — The Statewide Tariff',
    h1: 'The only statewide published rate card.',
    meta: {
      description:
        'The statewide tariff: signature dinners $125–$250 a guest depending on island, Stay Chef from $850–$1,100 a day, Date Night from $450–$950. 20% service and GET always on their own lines.',
      ogImage: '/img/hub/pricing-statewide.jpg',
    },
    intro:
      'Every island publishes its numbers. This page is the statewide picture — the four rate cards side by side — with the fee stack itemized and the reasons prices differ between islands.',
    sections: [
      {
        heading: 'Why prices differ per island',
        body: [
          'Four counties, four health-department permit regimes, four liquor commissions, and no inter-island vehicle ferry (a barge move runs $1,000–$2,500) mean each island carries its own roster and its own rate card. Groceries run 31–53% above mainland prices statewide — that is inside every band.',
          'What never differs: the written quote is the confirmed total, 20% service and GET up to 4.7120% sit on their own lines, and groceries are at cost with receipts.',
        ],
        links: [{ label: 'The fee stack, explained', href: '/pricing/fee-stack' }],
      },
      {
        heading: 'What moves a quote inside the band',
        list: [
          'Guest count — per-guest bands assume 6+; dinners for two carry minimums',
          'Menu — the tier you choose: Table, Signature, Premium, Chef’s table',
          'Date — December–March and holiday weeks book first and price to demand',
          'Travel — surcharge zones are published per island; quote-only zones say so',
          'Crew — servers $55/hr, sous chefs $75/hr, four-hour floor',
        ],
      },
      {
        heading: 'The island rate cards',
        body: ['Each island site publishes its full card — tiers, travel zones, worked math, and the estimator.'],
        links: [
          { label: 'Oʻahu rate card', href: '/oahu/pricing' },
          { label: 'Maui rate card', href: '/maui/pricing' },
          { label: 'Kauaʻi rate card', href: '/kauai/pricing' },
          { label: 'Big Island rate card', href: '/bigisland/pricing' },
        ],
      },
    ],
    priceTable: {
      title: 'The statewide tariff',
      rows: [
        { label: 'Oʻahu', value: '$125–$190 / guest', note: 'Stay Chef from $850/day · Date Night from $450' },
        { label: 'Maui', value: '$150–$250 / guest', note: 'Stay Chef from $1,050/day · Date Night from $500' },
        { label: 'Kauaʻi', value: '$150–$250 / guest', note: 'Stay Chef from $1,100/day · Date Night $650–$950' },
        { label: 'Big Island', value: '$150–$225 / guest', note: 'Stay Chef from $950/day · Date Night from $550' },
      ],
      footnote: 'CORE/Signature bands, groceries included. ENTRY from $110 and Chef’s table to $400+ where published on the island cards.',
    },
    faq: [
      {
        q: 'Is the written quote really the final price?',
        a: 'Yes. The written quote itemizes the menu, staffing, travel, 20% service charge, and Hawaiʻi GET up to 4.7120% — and that document is the confirmed total. Nothing is added after.',
      },
      {
        q: 'Why not just average the islands into one price?',
        a: 'Because it would be wrong everywhere. Permits, grocery supply, and drive times differ per county; a single statewide number would overcharge Oʻahu and undercharge Līhuʻe. Four honest cards beat one fictional one.',
        links: [{ label: 'Cost by island', href: '/pricing/cost-by-island' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote', secondaryLabel: 'Run an estimate', secondaryHref: '/pricing/estimate' },
    keywords: ['private chef Hawaii cost'],
  },
  {
    slug: 'private-chef-cost',
    category: 'pricing',
    title: 'How Much Does a Private Chef Cost in Hawaii?',
    h1: 'What a private chef costs in Hawaiʻi — the whole stack.',
    meta: {
      description:
        'The cost anatomy: per-guest bands $125–$250 by island, what is included, what is separate, the 20% service line, GET up to 4.7120%, and the 50% deposit. No teaser pricing.',
    },
    parent: 'pricing',
    intro:
      'The direct answer: a signature private-chef dinner in Hawaiʻi costs $125–$250 per guest depending on island and tier, groceries included. Everything else — service, tax, deposit, travel — is itemized below, the same way it will be itemized on your quote.',
    sections: [
      {
        heading: 'The anatomy of a dinner price',
        list: [
          'Per-guest band — $125–$250 by island and tier, groceries inside the band',
          '20% service charge — on its own line, always',
          'Hawaiʻi GET — up to 4.7120%, on its own line, valid through 12/31/2030',
          'Travel — published zone surcharges where they apply; quote-only zones labeled',
          'Staffing — only when the event needs it: $55/hr server, $75/hr sous',
        ],
        body: [
          'Worked example: a signature dinner for eight on Oʻahu at the mid-band runs roughly $1,260 before service and tax; the written quote computes it exactly.',
        ],
      },
      {
        heading: 'What is included in the band',
        list: [
          'Menu planning in writing before you commit',
          'Groceries, bought that morning, at cost inside the band',
          'Cooking, plating, service, and course introductions',
          'The kitchen left clean',
        ],
      },
      {
        heading: 'What is separate',
        list: [
          'Alcohol — client-supplied or licensed referral; the bar cart is packaged separately',
          'Rentals for events beyond the villa’s own kit',
          'Staffing beyond the chef',
          'Gratuity — always voluntary',
        ],
      },
    ],
    faq: [
      {
        q: 'Is a private chef cheaper than a restaurant in Hawaii?',
        a: 'For a table of six or more at the resort-corridor restaurants, the per-guest math is usually comparable — and the fee stack is more visible. Our 20% service line undercuts the 23–25% banquet norm, and there is no corkage math on your own wine.',
        links: [{ label: 'Chef vs restaurant', href: '/compare/private-chef-vs-restaurant' }],
      },
      {
        q: 'Why do two-person dinners cost more per head?',
        a: 'The chef’s day — shopping, travel, prep, service, cleanup — is roughly constant whether two or ten eat. Date Night packages exist precisely for two: from $450 on Oʻahu to $650–$950 on Kauaʻi.',
      },
    ],
    cta: { label: 'Get your exact number', href: '/quote', secondaryLabel: 'Run an estimate', secondaryHref: '/pricing/estimate' },
    keywords: ['how much does a private chef cost in Hawaii'],
  },
  {
    slug: 'pricing/cost-by-island',
    category: 'pricing',
    title: 'Private Chef Cost by Island — Hawaii Comparison',
    h1: 'Same standard, four price cards.',
    meta: {
      description:
        'Private chef cost by island: Oʻahu $125–$190, Maui $150–$250, Kauaʻi $150–$250, Big Island $150–$225 per guest. Stay Chef day rates, Date Night minimums, and travel postures compared.',
    },
    parent: 'pricing',
    intro:
      'The comparison table researchers actually need: the four islands’ published bands side by side, with the operational reasons they differ.',
    sections: [
      {
        heading: 'Reading the table',
        body: [
          'Oʻahu runs the lowest CORE floor ($125) because roster depth and grocery supply are best in Honolulu. Kauaʻi’s Stay Chef rate ($1,100/day) reflects island logistics and a smaller roster. The Big Island’s CORE band caps at $225 — and its hero price is $150, never $125.',
          'Travel postures differ honestly: Oʻahu surcharges the North Shore from $75; Maui quotes Pāʻia and Haʻikū at inquiry; Kauaʻi quotes the far North with 72-hour notice; the Big Island quotes its east side per event.',
        ],
      },
    ],
    priceTable: {
      title: 'Cost by island',
      rows: [
        { label: 'Oʻahu — Signature', value: '$125–$190 / guest', note: 'Stay Chef $850/day · Date Night from $450 · Bar $650/4hr + $45pp' },
        { label: 'Maui — Signature', value: '$150–$250 / guest', note: 'Stay Chef $1,050/day · Date Night from $500 · Bar $800/4hr' },
        { label: 'Kauaʻi — Signature', value: '$150–$250 / guest', note: 'Stay Chef $1,100/day · Date Night $650–$950 · Bar $850/4hr + $60pp' },
        { label: 'Big Island — CORE', value: '$150–$225 / guest', note: 'Stay Chef $950/day · Date Night from $550 · Bar $725/4hr' },
      ],
      footnote: 'Staffing everywhere: server $55/hr · sous chef $75/hr · four-hour floor.',
    },
    cta: { label: 'Get a written quote', href: '/quote', secondaryLabel: 'Pick your island', secondaryHref: '/islands' },
    keywords: ['private chef cost by island Hawaii'],
  },
  {
    slug: 'pricing/fee-stack',
    category: 'pricing',
    title: 'The Fee Stack — Hawaii Service Charge & GET Explained',
    h1: 'Every fee, on its own line, before you pay anything.',
    meta: {
      description:
        'The myCHEF fee stack: 20% service charge, Hawaiʻi GET up to 4.7120% (valid through 12/31/2030), 50% deposit locks the date, gratuity always voluntary, groceries at cost with receipts.',
    },
    parent: 'pricing',
    intro:
      'Five lines explain every dollar on a myCHEF quote. They appear on every quote, on every island, in this order.',
    sections: [
      {
        heading: 'The five lines',
        list: [
          'The menu — per-guest band or day rate, groceries included',
          '20% service charge — on its own line. It pays the coordination, planning, and insurance layer; it is disclosed as a service charge, not hidden in the menu price',
          'Hawaiʻi GET — up to 4.7120% depending on county, on its own line, valid through 12/31/2030. Never the obsolete 4.166%',
          '50% deposit — locks the date, due only after you have seen the written quote',
          'Gratuity — always voluntary, never assumed, never pre-added',
        ],
      },
      {
        heading: 'Why we itemize instead of bundling',
        body: [
          'Bundled pricing is how the 23–25% resort service norm stays invisible. Itemizing keeps every line auditable: you can check the GET against the county rate and the service charge against the standard, line by line.',
          'Groceries are charged at cost with receipts on request — a policy, not a promise.',
        ],
        links: [{ label: 'The honesty register', href: '/trust' }],
      },
    ],
    faq: [
      {
        q: 'Is the 20% service charge a tip?',
        a: 'No. The service charge funds coordination, menu planning, insurance, and the quote infrastructure. Gratuity for the chef is separate and always voluntary.',
      },
      {
        q: 'Why does GET vary?',
        a: 'Hawaiʻi’s general excise tax is levied by place of performance: 4% statewide plus county surcharges up to 0.7120% — hence “up to 4.7120%,” current through 12/31/2030. The exact rate for your event location appears on your quote.',
      },
    ],
    cta: { label: 'See it on a real quote', href: '/quote', secondaryLabel: 'The full tariff', secondaryHref: '/pricing' },
    keywords: ['Hawaii service charge and GET explained'],
  },
  {
    slug: 'pricing/travel-zones',
    category: 'pricing',
    title: 'Hawaii Private Chef Travel Fees & Zones',
    h1: 'Travel lines, published before you ask.',
    meta: {
      description:
        'Travel zones across the four islands: Oʻahu North Shore from $75, Maui Upcountry from $75, Kauaʻi shore surcharges $50–$75, Big Island outside Kona–Kohala from $75. Quote-only zones explained.',
    },
    parent: 'pricing',
    intro:
      'Chefs drive to the kitchen; the drive is priced. Every island publishes its surcharge zones, and the zones we quote at inquiry say so — with the reason.',
    sections: [
      {
        heading: 'The published zone lines',
        list: [
          'Oʻahu — North Shore / Turtle Bay from $75',
          'Maui — Upcountry from $75 · Pāʻia and Haʻikū quoted at inquiry',
          'Kauaʻi — shore surcharges $50–$75 · far North (past Hanalei) quoted at inquiry, 72-hour notice',
          'Big Island — outside the Kona–Kohala corridor from $75 · east side quoted per event',
        ],
      },
      {
        heading: 'What “quoted at inquiry” means',
        body: [
          'Some zones have no honest flat number: the Big Island’s east side sits 2.5–3 hours from the Kona roster; Kauaʻi’s far North has one bridge in and out. Rather than publish a fiction, we quote these per event — distance, roster depth, and notice period stated in the quote itself.',
        ],
        links: [{ label: 'Coverage, island by island', href: '/coverage' }],
      },
    ],
    cta: { label: 'Ask about your address', href: '/quote', secondaryLabel: 'Coverage map', secondaryHref: '/coverage' },
    keywords: ['Hawaii private chef travel fees'],
  },
  {
    slug: 'pricing/estimate',
    category: 'pricing',
    title: 'Private Chef Hawaii Price Estimate',
    h1: 'An honest estimate in sixty seconds.',
    meta: {
      description:
        'Estimate your Hawaii private chef cost from the published rate cards — service, guests, days, staffing, travel — with 20% service and GET shown as separate lines. ESTIMATE ONLY: the written quote is the confirmed total.',
    },
    parent: 'pricing',
    intro:
      'The estimator computes only from the published rate cards — base, staffing, and travel lines, then +20% service and +GET up to 4.7120% as their own lines. It never invents a number, and quote-only zones return the honest “quoted at inquiry” stance instead.',
    sections: [
      {
        heading: 'How to read the result',
        body: [
          'The subtotal is illustrative math on published rates, labeled ESTIMATE ONLY. The written quote you receive after the quote flow is the confirmed total — never a chat estimate, never a teaser.',
        ],
        links: [{ label: 'Start the quote flow', href: '/quote' }],
      },
      {
        heading: 'When the estimate says “quoted at inquiry”',
        body: [
          'Pāʻia and Haʻikū on Maui, Kauaʻi’s far North, and the Big Island’s east side return the operational reason instead of a number — distance, roster depth, notice period. That is the honest answer, and the quote flow carries it forward.',
        ],
      },
    ],
    cta: { label: 'Get the written quote', href: '/quote', secondaryLabel: 'The full tariff', secondaryHref: '/pricing' },
    keywords: ['private chef Hawaii price estimate'],
  },
  {
    slug: 'compare/private-chef-vs-restaurant',
    category: 'guide',
    title: 'Private Chef vs Restaurant in Hawaii — An Honest Comparison',
    h1: 'Private chef vs. restaurant: the real arithmetic.',
    meta: {
      description:
        'Private chef vs restaurant in Hawaii: per-guest math, the service-charge comparison (20% vs 23–25%), and when each is the right call.',
    },
    parent: 'private-chef-cost',
    intro:
      'The direct answer: for tables of six or more in the resort corridors, a private chef’s per-guest band is usually comparable to the restaurants you were considering — and the fee stack is more visible.',
    sections: [
      {
        heading: 'Where the chef wins',
        list: [
          'Tables of 6+ — per-guest bands beat resort-corridor prix fixe once drinks and transport are counted',
          'Dietary flags — the menu is built around them, not accommodated at the pass',
          'The room — your villa’s lānai instead of a 6:15 or 8:45 seating',
          'Service charge — 20%, itemized, vs the 23–25% banquet norm',
        ],
      },
      {
        heading: 'Where the restaurant wins',
        body: [
          'Two people on a spontaneous Tuesday. No kitchen in the hotel room. A party of forty with no venue. We say so in the quote when the restaurant is the right answer — the goal is a well-fed week, not a forced booking.',
        ],
        links: [{ label: 'What we don’t do', href: '/what-we-dont-do' }],
      },
    ],
    cta: { label: 'Run your numbers', href: '/pricing/estimate', secondaryLabel: 'Get a written quote', secondaryHref: '/quote' },
    keywords: ['private chef vs restaurant Hawaii'],
  },
  {
    slug: 'compare/private-vs-personal-chef',
    category: 'guide',
    title: 'Private Chef vs Personal Chef — The Difference',
    h1: 'Private chef, personal chef: the difference is the day.',
    meta: {
      description:
        'Private chef vs personal chef, defined plainly: a private chef cooks your event or stay in your kitchen; a personal chef batch-cooks on a schedule. Hawaii pricing for both.',
    },
    parent: 'private-chef-cost',
    intro:
      'A private chef cooks your dinners and events live in your kitchen — service, plating, cleanup. A personal chef batch-cooks a week of meals on a schedule and leaves them labeled. myCHEF is the former; the kamaʻāina weekly line covers the latter on Oʻahu and Kauaʻi.',
    sections: [
      {
        heading: 'Which one you actually need',
        body: [
          'A vacation week with dinners cooked and served: private chef, per-guest or Stay Chef day rate. A resident household wanting a week of prepared meals: the kamaʻāina weekly service — from $300 a week on Oʻahu, $550–$1,200 on Kauaʻi.',
        ],
        links: [{ label: 'Stay Chef', href: '/stay-chef' }],
      },
      {
        heading: 'Why the terms get blurred',
        body: [
          'Marketplaces use “personal chef” for event work because the keyword volume is there. We use the terms precisely so the quote matches the service you pictured.',
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote' },
    keywords: ['difference between private and personal chef'],
  },
  {
    slug: 'compare/mychef-vs-marketplaces',
    category: 'guide',
    title: 'myCHEF vs Take a Chef and Marketplaces in Hawaii',
    h1: 'A fixed written quote vs. a bid queue.',
    meta: {
      description:
        'myCHEF vs chef marketplaces in Hawaii: published per-guest totals vs chef-bid ranges, vetted island rosters vs listings, and the fee stack itemized either way.',
    },
    parent: 'trust',
    intro:
      'Marketplaces put your brief out to bid and return a spread of menus and prices. We publish the rate card, then send one written quote that is the confirmed total. Different models; here is the honest comparison.',
    sections: [
      {
        heading: 'The structural differences',
        list: [
          'Pricing — published bands and itemized fee stack vs. per-chef bid variance',
          'The quote — one written quote, the confirmed total vs. several proposals to reconcile',
          'Rosters — vetted island teams we schedule and stand behind vs. listings',
          'Reviews — published only after verified events; no AggregateRating schema, ever',
        ],
      },
      {
        heading: 'When a marketplace might suit you better',
        body: [
          'If you want to auction a single casual dinner to the lowest bid, a marketplace is built for that. If you want the number before the conversation, that is us.',
        ],
        links: [{ label: 'The honesty register', href: '/trust' }],
      },
    ],
    cta: { label: 'Get the written quote', href: '/quote', secondaryLabel: 'The tariff', secondaryHref: '/pricing' },
    keywords: ['Take a Chef Hawaii alternative'],
  },
  {
    slug: 'guides',
    category: 'guide',
    title: 'Hawaii Private Chef Guides',
    h1: 'Read before you book.',
    meta: {
      description:
        'The statewide library: how private chefs work, what they cost, which island to choose, tipping etiquette, villa kitchens, lead times, and the fine print — full-prose guides, no stubs.',
      ogImage: '/img/hub/guides-library.jpg',
    },
    intro:
      'Full-prose answers to the questions that precede a booking — money, kitchens, seasons, etiquette. Every guide ends at the tariff or the quote desk, because that is where the questions end too.',
    sections: [
      {
        heading: 'Booking',
        links: [
          { label: 'How a private chef works', href: '/guides/how-it-works' },
          { label: 'How to hire a private chef in Hawaii', href: '/guides/how-to-hire' },
          { label: 'Booking lead times', href: '/guides/booking-lead-times' },
        ],
      },
      {
        heading: 'Money',
        links: [
          { label: 'What a private chef costs in Hawaii', href: '/private-chef-cost' },
          { label: 'The fee stack, explained', href: '/pricing/fee-stack' },
          { label: 'Tipping a private chef', href: '/guides/tipping' },
          { label: 'Are groceries included?', href: '/guides/groceries-at-cost' },
        ],
      },
      {
        heading: 'Kitchens & logistics',
        links: [
          { label: 'What kitchen does a private chef need?', href: '/guides/villa-kitchens' },
          { label: 'What a service includes', href: '/guides/what-is-included' },
          { label: 'Alcohol and bar service', href: '/guides/alcohol-policy' },
        ],
      },
      {
        heading: 'Seasons & choices',
        links: [
          { label: 'Which Hawaiian island', href: '/guides/which-island' },
          { label: 'The seasonal calendar', href: '/guides/seasonal-calendar' },
          { label: 'Hawaii wedding catering guide', href: '/guides/wedding-guide' },
          { label: 'Dietary restrictions', href: '/guides/dietary-guide' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote', secondaryLabel: 'The tariff', secondaryHref: '/pricing' },
    keywords: ['Hawaii private chef guides'],
  },
  {
    slug: 'guides/how-it-works',
    category: 'guide',
    title: 'How Does a Private Chef Work? — The Four Steps',
    h1: 'How a private chef works, in four steps.',
    meta: {
      description:
        'How hiring a private chef in Hawaii works: brief, written quote, deposit, service day. The chef shops that morning, cooks in your kitchen, serves, and leaves it clean.',
    },
    parent: 'guides',
    intro:
      'The direct answer: you send a brief, we send a written quote, a 50% deposit locks the date, and on the day your chef shops that morning, cooks in your kitchen, serves, and leaves the kitchen clean.',
    sections: [
      {
        heading: '1. The brief',
        body: [
          'Six steps in the quote flow: island, service, date and guests, kitchen and dietary details, contact, review. Two minutes, keyboard-friendly, and it ends in a written quote — not a “booked” state and never a payment wall.',
        ],
      },
      {
        heading: '2. The written quote',
        body: [
          'A document, not a chat message: menu, per-guest band or day rate, staffing if any, travel line if any, then 20% service and GET up to 4.7120% on their own lines. That document is the confirmed total.',
        ],
      },
      {
        heading: '3. The deposit',
        body: ['Fifty percent locks the date — only after you have seen the numbers. The balance is due per the quote’s schedule.'],
      },
      {
        heading: '4. Service day',
        body: [
          'Your chef shops that morning, arrives before service, cooks in your kitchen, plates and introduces each course, and leaves the kitchen clean. Groceries at cost; receipts on request.',
        ],
      },
    ],
    cta: { label: 'Start step one', href: '/quote' },
    keywords: ['how does a private chef work'],
  },
  {
    slug: 'guides/how-to-hire',
    category: 'guide',
    title: 'How to Hire a Private Chef in Hawaii',
    h1: 'Hiring a private chef in Hawaiʻi, without the runaround.',
    meta: {
      description:
        'How to hire a private chef in Hawaii: what to check (published prices, itemized fees, real kitchen questions), what to avoid (teaser rates, fake reviews), and how the quote works.',
    },
    parent: 'guides',
    intro:
      'The direct answer: choose your island, send the brief with dates and headcount, compare the written quote — not the adjective count — and lock the date with a 50% deposit only after the numbers are in writing.',
    sections: [
      {
        heading: 'What to check before you commit',
        list: [
          'Published prices — if you must call to learn the floor, the floor will move',
          'Itemized fees — service charge and GET on their own lines, not folded in',
          'Real kitchen questions — a serious chef asks about your stove before your occasion',
          'Verifiable reviews — published after verified events, not imported by the hundred',
        ],
      },
      {
        heading: 'What to avoid',
        body: [
          'Teaser “from” rates with no band, quotes that arrive as a single undifferentiated number, and any operator who will cook in a kitchen they have never asked about.',
        ],
        links: [{ label: 'The honesty register', href: '/trust' }],
      },
    ],
    cta: { label: 'Send the brief', href: '/quote', secondaryLabel: 'The tariff', secondaryHref: '/pricing' },
    keywords: ['how to hire a private chef in Hawaii'],
  },
  {
    slug: 'guides/which-island',
    category: 'guide',
    title: 'Which Hawaiian Island for a Villa Vacation',
    h1: 'Which island is yours?',
    meta: {
      description:
        'Which Hawaiian island for a villa vacation with a private chef: Oʻahu’s metro depth, Maui’s resort villas, Kauaʻi’s estates, the Big Island’s space — with the chef price bands per island.',
    },
    parent: 'islands',
    intro:
      'The direct answer: Oʻahu for city-plus-beach and the deepest services, Maui for the resort-villa week, Kauaʻi for green quiet and estates, the Big Island for space, lava, and night skies. All four have a myCHEF team with published prices.',
    sections: [
      {
        heading: 'The four worlds, briefly',
        list: [
          'Oʻahu — metropolitan: Waikīkī penthouses to North Shore estates · Signature $125–$190/guest',
          'Maui — cinematic: Wailea to Kapalua villa country · Signature $150–$250/guest',
          'Kauaʻi — botanical: both shores, estate kitchens · Signature $150–$250/guest',
          'Big Island — volcanic: Kona–Kohala corridor, honest east-side quoting · CORE $150–$225/guest',
        ],
      },
      {
        heading: 'Seasonality moves the answer',
        body: [
          'December through March books first everywhere; whale season tilts Maui, summer family travel tilts Oʻahu and the Big Island. If your dates are fixed and peak, choose the island with the villa you love — the chef math is within a band either way.',
        ],
        links: [{ label: 'The seasonal calendar', href: '/guides/seasonal-calendar' }],
      },
    ],
    cta: { label: 'Compare the islands', href: '/islands', secondaryLabel: 'Get a written quote', secondaryHref: '/quote' },
    keywords: ['which Hawaiian island for a villa vacation'],
  },
  {
    slug: 'guides/villa-kitchens',
    category: 'guide',
    title: 'What Kitchen Does a Private Chef Need?',
    h1: 'What your kitchen needs — less than you think.',
    meta: {
      description:
        'What kitchen a private chef needs in a Hawaii rental: stove, oven, counter space, refrigeration. Chefs bring the kit; hotel rooms without kitchens are declined, politely.',
    },
    parent: 'guides',
    intro:
      'The direct answer: a stove, an oven, counter space, and running water. Your chef brings knives, kit, and sheet pans. What does not work is a hotel room — a coffee maker is not a kitchen.',
    sections: [
      {
        heading: 'The workable-kitchen checklist',
        list: [
          'Stove and oven in working order (we ask during the quote)',
          'A clear counter run for plating',
          'Refrigeration with some room for the morning’s shop',
          'Running water and a sink — that is genuinely it',
        ],
      },
      {
        heading: 'What we bring',
        body: [
          'Knives, boards, smallwares, sheet pans, and the specialty kit the menu needs. If the kitchen is missing something structural, the quote says so and plans around it — or declines and suggests alternatives.',
        ],
        links: [{ label: 'What we don’t do', href: '/what-we-dont-do' }],
      },
    ],
    cta: { label: 'Check your kitchen with us', href: '/quote' },
    keywords: ['what kitchen does a private chef need'],
  },
  {
    slug: 'guides/groceries-at-cost',
    category: 'guide',
    title: 'Are Groceries Included? — The At-Cost Policy',
    h1: 'Groceries at cost, receipts on request.',
    meta: {
      description:
        'Are groceries included in private chef pricing? At myCHEF Hawaii groceries sit inside the per-guest band at cost, with receipts on request — no markup, ever.',
    },
    parent: 'guides',
    intro:
      'The direct answer: yes — groceries are inside the per-guest band, bought that morning, charged at cost, with receipts available on request. There is no grocery markup anywhere in the network.',
    sections: [
      {
        heading: 'Why at-cost matters in Hawaiʻi',
        body: [
          'Island groceries run 31–53% above mainland prices. A markup on top of that is where hidden margin usually lives — so we removed it. The band covers the shop; the receipts prove it.',
        ],
      },
      {
        heading: 'Where your chef shops',
        body: [
          'Island-first: Maui teams buy from Maui farmers and fishers first; Kauaʻi menus lean on Hanalei’s market and Kunana Dairy; Big Island menus on Kona coffee country, Parker Ranch, and Hāmākua producers. What the islands don’t grow, Costco and the Honolulu purveyors fill in.',
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote', secondaryLabel: 'The fee stack', secondaryHref: '/pricing/fee-stack' },
    keywords: ['are groceries included private chef'],
  },
  {
    slug: 'guides/booking-lead-times',
    category: 'guide',
    title: 'How Far in Advance to Book a Private Chef in Hawaii',
    h1: 'Book the chef when you book the flights.',
    meta: {
      description:
        'How far in advance to book a private chef in Hawaii: 2–4 weeks in normal seasons; December–March and holiday weeks need months. Ironman and wedding weeks compress first.',
    },
    parent: 'guides',
    intro:
      'The direct answer: two to four weeks is comfortable most of the year; December through March and holiday weeks book months out, and peak weeks on Maui and Kauaʻi’s North Shore move first.',
    sections: [
      {
        heading: 'The calendar pressure points',
        list: [
          'December–March — peak season statewide; book months ahead',
          'Holiday weeks — Thanksgiving through New Year compress first',
          'Wedding weeks — the five-meal arc books with the venue, not after it',
          'Big Island Ironman week — the island’s sharpest demand spike',
        ],
      },
      {
        heading: 'If your dates are close',
        body: [
          'Ask anyway. Rosters flex, and midweek gaps exist even in peak season — but the honest answer might be a shorter window of availability, and we will say that rather than hold a date we can’t crew.',
        ],
      },
    ],
    cta: { label: 'Check your dates', href: '/quote', secondaryLabel: 'Seasonal calendar', secondaryHref: '/guides/seasonal-calendar' },
    keywords: ['how far in advance to book a private chef Hawaii'],
  },
  {
    slug: 'guides/wedding-guide',
    category: 'guide',
    title: 'Hawaii Wedding Catering Guide',
    h1: 'The statewide wedding catering guide.',
    meta: {
      description:
        'Planning wedding catering in Hawaii: per-guest budgets, the wedding-week arc, venue exclusivity workarounds, service-charge comparison, and per-island routing.',
    },
    parent: 'guides',
    intro:
      'The direct answer: budget $150–$250 per guest for the reception meal, plan the week as five meals not one, and check venue exclusivity before you fall in love with a caterer.',
    sections: [
      {
        heading: 'The budget frame',
        body: [
          'Per-guest bands run $150–$250 depending on island and tier; staffing is published ($55/$75 hourly); service is 20% against the 23–25% resort norm; resort F&B minimums of $7,500–$15,000 are the number to beat — and estate venues beat it.',
        ],
        links: [{ label: 'The statewide tariff', href: '/pricing' }],
      },
      {
        heading: 'Venue exclusivity, routed around',
        body: [
          'Several marquee venues hold exclusive caterers. The estate and villa circuit does not — which is where the wedding-week product lives. Oʻahu’s elopement and estate wedge, Maui’s villa-week depth, Kauaʻi’s two-shore estates, the Big Island’s Puakō corridor: each island site maps its own.',
        ],
        links: [{ label: 'The wedding week', href: '/weddings/wedding-week' }],
      },
    ],
    cta: { label: 'Start a wedding quote', href: '/quote', secondaryLabel: 'Weddings hub', secondaryHref: '/weddings' },
    keywords: ['Hawaii wedding catering guide'],
  },
  {
    slug: 'guides/seasonal-calendar',
    category: 'guide',
    title: 'Best Time to Visit Hawaii — The Private Chef Calendar',
    h1: 'The seasons, and what they do to your table.',
    meta: {
      description:
        'Best time to visit Hawaii with a private chef: per-island seasonality, December–March peak pressure, whale season, summer family travel, and when to book for each.',
    },
    parent: 'guides',
    intro:
      'The direct answer: there is no bad month, but December–March is peak — whale season on Maui, north-shore swell season on Oʻahu and Kauaʻi — and chef availability compresses exactly when the islands are best.',
    sections: [
      {
        heading: 'The year in four strokes',
        list: [
          'December–March — peak season, whale season, holiday premiums; book months ahead',
          'April–June — the value window: weather holds, availability opens',
          'July–August — family-travel peak; villa weeks book early',
          'September–November — quietest tables; Ironman week spikes the Big Island in October',
        ],
      },
      {
        heading: 'Menus follow the seasons too',
        body: [
          'Island-first sourcing means the menu shifts: mango and lychee in summer, citrus and heartier fish in winter. Your quote names what is actually in season for your dates rather than promising a fixed card year-round.',
        ],
      },
    ],
    cta: { label: 'Check your dates', href: '/quote', secondaryLabel: 'Lead times', secondaryHref: '/guides/booking-lead-times' },
    keywords: ['best time to visit Hawaii private chef'],
  },
  {
    slug: 'guides/dietary-guide',
    category: 'guide',
    title: 'Dietary Restrictions & Private Chefs in Hawaii',
    h1: 'The dietary guide: flags, allergies, protocols.',
    meta: {
      description:
        'How dietary restrictions work with a Hawaii private chef: the eleven-flag system, allergy cross-contact handling, retreat protocols, and menus the whole table can eat.',
    },
    parent: 'guides',
    intro:
      'The direct answer: tell us once, in the quote. Eleven standard flags — from vegan to shellfish allergy to low-FODMAP — are written into the menu and carried across every meal of the booking.',
    sections: [
      {
        heading: 'Allergies are handled as cross-contact specs',
        body: [
          'Separate boards, separate oil, and a menu designed so the flagged guest eats the same number of courses as everyone else — not a parallel plate of steamed vegetables.',
        ],
      },
      {
        heading: 'Protocols for retreats',
        body: [
          'Plant-based, Ayurvedic-fluent, detox, and raw weeks are specced into the shopping list. Kauaʻi’s farm supply carries most protocol menus; your quote confirms what is sourceable for your dates.',
        ],
        links: [{ label: 'The dietary matrix', href: '/dietary' }, { label: 'Retreat catering', href: '/retreat-catering' }],
      },
    ],
    cta: { label: 'Tell us your flags', href: '/quote' },
    keywords: ['dietary restrictions private chef Hawaii'],
  },
  {
    slug: 'guides/what-is-included',
    category: 'guide',
    title: 'What Does a Private Chef Service Include?',
    h1: 'What a service includes — and what it doesn’t.',
    meta: {
      description:
        'What a private chef service includes in Hawaii: menu planning, the morning shop, cooking, plating, service, and a clean kitchen. What is separate: alcohol, rentals, staffing, gratuity.',
    },
    parent: 'guides',
    intro:
      'The direct answer: menu planning in writing, groceries bought that morning, cooking, plating, course introductions, service, and a kitchen left clean. Alcohol, rentals, and extra staffing are separate lines — itemized, never hidden.',
    sections: [
      {
        heading: 'Included in every band',
        list: [
          'Menu planning, agreed in writing before you commit',
          'The morning shop — groceries at cost, receipts on request',
          'Cooking, plating, and course introductions',
          'Table service for the meal',
          'The kitchen left clean',
        ],
      },
      {
        heading: 'Separate, itemized lines',
        list: [
          'Alcohol — client-supplied or licensed referral; bar cart packaged separately',
          'Rentals beyond the villa’s own kit',
          'Staffing beyond the chef — $55/hr server, $75/hr sous',
          'Gratuity — always voluntary',
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote', secondaryLabel: 'The fee stack', secondaryHref: '/pricing/fee-stack' },
    keywords: ['what does a private chef service include'],
  },
  {
    slug: 'guides/alcohol-policy',
    category: 'guide',
    title: 'Alcohol & Bar Service at Hawaii Private Events',
    h1: 'The alcohol policy, county by county.',
    meta: {
      description:
        'Alcohol at Hawaii private events: client-supplied or licensed referral, packaged bar carts from $650–$850/4hr, and the four county liquor commissions explained plainly.',
    },
    parent: 'guides',
    intro:
      'The direct answer: we do not sell alcohol. You supply it — we send a shopping list matched to menu and headcount — or we refer a licensed caterer where the county requires one. The bar cart and bartender are packaged separately at published rates.',
    sections: [
      {
        heading: 'Why counties differ',
        body: [
          'Hawaiʻi has no single state liquor license for catering: four county commissions (Honolulu, Maui, Kauaʻi, Hawaiʻi) each read the rules differently. Your written quote states what applies at your venue rather than waving at “state law.”',
        ],
      },
      {
        heading: 'The packaged bar cart',
        body: [
          'Cart, tools, ice, mixers, garnish, and a working bartender: from $650/4hr + $45 a guest on Oʻahu to $850/4hr + $60 a guest on Kauaʻi. The alcohol itself stays yours — which also means no markup on the bottle.',
        ],
        links: [{ label: 'Mobile bar service', href: '/mobile-bar' }],
      },
    ],
    cta: { label: 'Add a bar to your quote', href: '/quote' },
    keywords: ['alcohol and bar service at Hawaii private events'],
  },
  {
    slug: 'guides/tipping',
    category: 'guide',
    title: 'How Much to Tip a Private Chef',
    h1: 'Tipping a private chef: voluntary, always.',
    meta: {
      description:
        'How much to tip a private chef: gratuity is always voluntary at myCHEF — the 20% service charge is not a tip. What guests typically do, and what the service charge actually funds.',
    },
    parent: 'guides',
    intro:
      'The direct answer: whatever you want, including nothing. Gratuity is always voluntary here — the 20% service charge on your quote is not a tip; it funds coordination, planning, and insurance.',
    sections: [
      {
        heading: 'What the service charge is (and isn’t)',
        body: [
          'The 20% service line pays the infrastructure — menu planning, scheduling, insurance, the quote desk. It does not reach the chef as a gratuity. If the evening earned one, hand it over or add it to the balance; if it didn’t, tell us that instead.',
        ],
        links: [{ label: 'The fee stack', href: '/pricing/fee-stack' }],
      },
      {
        heading: 'What guests typically do',
        body: [
          'For exceptional evenings, guests commonly add 10–15% directed to the chef and crew. For Stay Chef weeks, an end-of-week envelope is the norm. Both are appreciated; neither is expected, and no quote will ever pre-add a tip line.',
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote' },
    keywords: ['how much to tip a private chef'],
  },
  {
    slug: 'about',
    category: 'trust',
    title: 'About myCHEF Hawaii',
    h1: 'One network, four island teams, one standard.',
    meta: {
      description:
        'myCHEF Hawaii is a network of vetted independent chefs on Oʻahu, Maui, Kauaʻi, and the Big Island — published prices, itemized fees, the written quote as confirmed total.',
    },
    intro:
      'myCHEF Hawaii is a network of vetted independent chefs working on four islands under one standard: published prices, an itemized fee stack, and a written quote that is the confirmed total.',
    sections: [
      {
        heading: 'What we are',
        body: [
          'Not a restaurant group, not a marketplace, not an agency with stock photos. A scheduling and standards layer over four island rosters — the chefs are independent professionals, vetted and insured, and the network stands behind the quote.',
          'Where photography on this site is illustrative, it is labeled as such. We do not invent chef bios, addresses, or awards.',
        ],
      },
      {
        heading: 'The sister network',
        body: ['myCHEF operates in Dubai, Bali, and Hawaiʻi — the same quote discipline and the same honesty register on three coasts.'],
        links: [{ label: 'The network', href: '/network' }],
      },
    ],
    cta: { label: 'Meet the standard', href: '/trust', secondaryLabel: 'Get a written quote', secondaryHref: '/quote' },
    keywords: ['about myCHEF Hawaii'],
  },
  {
    slug: 'trust',
    category: 'trust',
    title: 'The Honesty Register — myCHEF Hawaii',
    h1: 'The honesty register.',
    meta: {
      description:
        'What myCHEF Hawaii promises, what we don’t, and where the numbers come from: published prices honored, the written quote as confirmed total, no fake reviews — ever.',
      ogImage: '/img/hub/trust-ledger.jpg',
    },
    intro: 'What we promise, what we don’t, and where the numbers come from.',
    sections: [
      {
        heading: 'The register',
        list: [
          'Published prices, honored',
          'The written quote is the confirmed total — never a chat estimate',
          '20% service and Hawaiʻi GET up to 4.7120% always on their own lines',
          'Groceries at cost, receipts on request',
          'No fake reviews — ever',
          'We decline hotel rooms without kitchens',
          'We say when a zone is quote-only, and why',
        ],
      },
      {
        heading: 'What we don’t do',
        body: [
          'No teaser pricing, no invented testimonials, no stock “our chefs” photography, no hiding the travel fee in the small print. The full refusal list is its own page.',
        ],
        links: [{ label: 'What we don’t do', href: '/what-we-dont-do' }],
      },
      {
        heading: 'Reviews, the honest way',
        body: [
          'Reviews publish only after verified events — a review you can’t verify is advertising, and we don’t run it. There is no AggregateRating schema anywhere on this site.',
        ],
        links: [{ label: 'The reviews policy', href: '/reviews-policy' }],
      },
      {
        heading: 'The rest of the paper trail',
        links: [
          { label: 'Booking terms', href: '/legal' },
          { label: 'FAQ', href: '/faq' },
          { label: 'Coverage', href: '/coverage' },
          { label: 'How we vet chefs', href: '/how-we-vet-chefs' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote', secondaryLabel: 'Booking terms', secondaryHref: '/legal' },
    keywords: ['myCHEF honesty register'],
  },
  {
    slug: 'legal',
    category: 'trust',
    title: 'Booking Terms — myCHEF Hawaii',
    h1: 'The booking terms, in plain English first.',
    meta: {
      description:
        'myCHEF Hawaii booking terms: the written quote as confirmed total, 50% deposit, the fee stack, cancellation posture, force majeure, and alcohol policy.',
    },
    intro:
      'Seven sections, each opening with a plain-English summary. The fine print follows — but nothing below contradicts its summary.',
    sections: [
      {
        heading: '1. Scope of service',
        body: ['In short: we cook and serve in your kitchen; the quote defines exactly what that includes.'],
      },
      {
        heading: '2. The written quote',
        body: ['In short: the written quote is the confirmed total. Verbal estimates and chat messages are not quotes.'],
      },
      {
        heading: '3. Deposit',
        body: ['In short: 50% locks the date, due only after you have seen the written quote. The balance follows the quote’s schedule.'],
      },
      {
        heading: '4. The fee stack',
        body: [
          'In short: 20% service charge and Hawaiʻi GET up to 4.7120% (valid through 12/31/2030) always appear on their own lines. Service-charge disclosure follows the posture of HRS §481B-14; final wording is under counsel review.',
        ],
      },
      {
        heading: '5. Cancellation',
        body: ['In short: tiered by notice period; the current schedule is stated on every quote. Final cancellation tiers are being locked with counsel and are rendered here as proposed until then.'],
      },
      {
        heading: '6. Force majeure',
        body: ['In short: hurricanes, lava, and road closures reschedule rather than forfeit. Your deposit follows the new date.'],
      },
      {
        heading: '7. Alcohol',
        body: ['In short: client-supplied or licensed referral. Hawaiʻi’s four county liquor commissions differ; your quote states what applies at your venue.'],
      },
    ],
    cta: { label: 'Ask us anything', href: '/contact', secondaryLabel: 'The honesty register', secondaryHref: '/trust' },
    keywords: ['myCHEF booking terms'],
  },
  {
    slug: 'faq',
    category: 'trust',
    title: 'Private Chef Hawaii — FAQ',
    h1: 'The questions, answered in full sentences.',
    meta: {
      description:
        'Private chef Hawaii FAQ: pricing and fees, booking and deposits, kitchens and logistics, food and dietary, and the service day — full-prose answers.',
    },
    intro: 'Pricing, booking, kitchens, food, and the service day — the five categories every question falls into.',
    sections: [],
    faq: [
      {
        q: 'How much does a private chef cost in Hawaii?',
        a: 'Signature dinners run $125–$250 per guest depending on island and tier, groceries included. Stay Chef multi-day service runs $850–$1,100 per day. The 20% service charge and GET up to 4.7120% always appear on their own lines.',
        links: [{ label: 'The statewide tariff', href: '/pricing' }],
      },
      {
        q: 'Is the quote really the final price?',
        a: 'Yes. The written quote itemizes menu, staffing, travel, service, and tax — and is the confirmed total. Nothing is added afterward.',
      },
      {
        q: 'Is the 20% service charge a tip?',
        a: 'No. It funds coordination, planning, and insurance. Gratuity is separate and always voluntary.',
        links: [{ label: 'The fee stack', href: '/pricing/fee-stack' }],
      },
      {
        q: 'How far ahead should we book?',
        a: 'Two to four weeks in normal seasons; December–March and holiday weeks book months out. A 50% deposit locks the date after you have seen the written quote.',
        links: [{ label: 'Lead times', href: '/guides/booking-lead-times' }],
      },
      {
        q: 'What if our dates change?',
        a: 'Deposits follow the new date when availability allows, and force-majeure events reschedule rather than forfeit. The cancellation tiers are stated on every quote.',
      },
      {
        q: 'Does our rental kitchen qualify?',
        a: 'A stove, oven, counter space, and a sink are enough — your chef brings the kit. We ask about the kitchen during the quote and decline hotel rooms without kitchens, with alternatives suggested.',
        links: [{ label: 'Villa kitchens', href: '/guides/villa-kitchens' }],
      },
      {
        q: 'Which areas do you serve?',
        a: 'All four main islands. Surcharge zones are published per island, and quote-only zones — Pāʻia/Haʻikū, Kauaʻi’s far North, the Big Island’s east side — are labeled with the reason.',
        links: [{ label: 'Coverage', href: '/coverage' }],
      },
      {
        q: 'Can you handle allergies and dietary protocols?',
        a: 'Yes — eleven standard flags are captured in the quote and carried across every meal. Allergies are handled as cross-contact specs, and retreat protocols are first-class.',
        links: [{ label: 'The dietary matrix', href: '/dietary' }],
      },
      {
        q: 'Are groceries included?',
        a: 'Yes, inside the per-guest band, at cost, with receipts on request. There is no grocery markup anywhere in the network.',
        links: [{ label: 'Groceries at cost', href: '/guides/groceries-at-cost' }],
      },
      {
        q: 'What happens on the day?',
        a: 'Your chef shops that morning, arrives before service, cooks in your kitchen, plates and introduces each course, serves, and leaves the kitchen clean.',
        links: [{ label: 'How it works', href: '/guides/how-it-works' }],
      },
      {
        q: 'Do you bring the alcohol?',
        a: 'No — alcohol is client-supplied or arranged through licensed referral, because Hawaiʻi’s county liquor commissions differ. The bar cart and bartender are packaged separately at published rates.',
        links: [{ label: 'Alcohol policy', href: '/guides/alcohol-policy' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote', secondaryLabel: 'Contact', secondaryHref: '/contact' },
    keywords: ['private chef Hawaii FAQ'],
  },
  {
    slug: 'contact',
    category: 'trust',
    title: 'Contact myCHEF Hawaii',
    h1: 'Four doors, not one inbox.',
    meta: {
      description:
        'Contact myCHEF Hawaii: book a chef through the quote flow, partner with us as a villa manager or planner, press enquiries, or chef careers. Plus the WhatsApp line (+971 55 174 4849).',
    },
    intro:
      'One inbox is how messages get lost. Pick the door that matches your message and it routes to the team that can actually answer it.',
    sections: [
      {
        heading: 'Book a chef',
        body: ['The quote flow — six steps, two minutes, one written quote. This is the only door for bookings, and it is fast.'],
        links: [{ label: 'Start the quote', href: '/quote' }],
      },
      {
        heading: 'Partner with us',
        body: ['Villa managers, concierges, wedding planners: the partner brief routes to the island teams with your properties and volumes.'],
        links: [{ label: 'Partners', href: '/partners' }],
      },
      {
        heading: 'Press',
        body: ['Interviews, imagery, and the honesty register as background. Write to the network desk and say what you are making.'],
      },
      {
        heading: 'Careers',
        body: ['Chefs: the roster page explains what working the network looks like, island by island.'],
        links: [{ label: 'Careers', href: '/careers' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote' },
    keywords: ['contact myCHEF Hawaii'],
  },
  {
    slug: 'what-we-dont-do',
    category: 'trust',
    title: 'What myCHEF Will Not Do',
    h1: 'The refusal list, with reasons.',
    meta: {
      description:
        'What myCHEF Hawaii will not do: no hotel rooms without kitchens, no unverifiable reviews, no teaser pricing, no dates we can’t crew, no hidden travel fees.',
    },
    parent: 'trust',
    intro: 'Negative space is a policy too. These are the things we decline, and why.',
    sections: [
      {
        heading: 'The refusals',
        list: [
          'Hotel rooms without kitchens — a coffee maker is not a kitchen; we will suggest alternatives instead',
          'Reviews we can’t verify — every published review follows a verified event',
          'Teaser pricing — “from” numbers without bands are how bills surprise people',
          'Dates we can’t crew — we never hold a date the roster can’t honor',
          'Hidden travel fees — surcharge zones are published; quote-only zones say so',
          'Selling alcohol — county liquor commissions differ; client-supplied or licensed referral only',
          'AggregateRating schema — no star ratings we can’t substantiate, in markup or in copy',
        ],
      },
      {
        heading: 'Island-specific refusals',
        body: [
          'Kauaʻi: the far North without 72-hour notice — one bridge in and out is a logistics fact, not an excuse. Big Island: same-day east-side service — 2.5–3 hours from the Kona roster cannot be wished away.',
        ],
        links: [{ label: 'Coverage', href: '/coverage' }],
      },
    ],
    cta: { label: 'The honesty register', href: '/trust', secondaryLabel: 'Get a written quote', secondaryHref: '/quote' },
    keywords: ['what myCHEF will not do'],
  },
  {
    slug: 'coverage',
    category: 'trust',
    title: 'Hawaii Service Area Coverage',
    h1: 'Where we cook, and where we quote first.',
    meta: {
      description:
        'myCHEF Hawaii coverage: base zones, published surcharge zones, and quote-only zones on Oʻahu, Maui, Kauaʻi, and the Big Island — with the reasons.',
    },
    parent: 'islands',
    intro:
      'All four main islands, honestly mapped: base zones at the published card, surcharge zones with published numbers, quote-only zones with the reason stated.',
    sections: [
      {
        heading: 'The four-island summary',
        list: [
          'Oʻahu — metro Honolulu base; North Shore / Turtle Bay from $75',
          'Maui — Wailea–Kapalua resort corridor base; Upcountry from $75; Pāʻia/Haʻikū quoted at inquiry',
          'Kauaʻi — both shores base; $50–$75 shore surcharges; far North quoted at inquiry with 72-hour notice',
          'Big Island — Kona–Kohala corridor base; outside the corridor from $75; east side quoted per event',
        ],
      },
      {
        heading: 'Why quote-only zones exist',
        body: [
          'Distance, roster depth, and permits. The Big Island’s east side is 2.5–3 hours from the Kona roster; Kauaʻi’s far North has one bridge. Publishing a flat number for these would be fiction — so we quote them per event and show the math.',
        ],
        links: [{ label: 'Travel zones and fees', href: '/pricing/travel-zones' }],
      },
    ],
    cta: { label: 'Ask about your address', href: '/quote', secondaryLabel: 'Choose your island', secondaryHref: '/islands' },
    keywords: ['Hawaii service area coverage'],
  },
  {
    slug: 'reviews-policy',
    category: 'trust',
    title: 'The myCHEF Review Policy',
    h1: 'Reviews publish after verified events. That’s the policy.',
    meta: {
      description:
        'The myCHEF review policy: reviews publish only after verified events, acquisition is disclosed, and no AggregateRating schema appears anywhere on the site.',
    },
    parent: 'trust',
    intro:
      'A review you can’t verify is advertising. Ours publish only after verified events — the quote, the service, the receipt — and the acquisition program is disclosed rather than disguised.',
    sections: [
      {
        heading: 'How a review gets published',
        list: [
          'The event completes — quote, service, balance paid',
          'The guest is invited to review; the invitation is the acquisition program, disclosed here',
          'The review publishes with the service type and island, never with invented detail',
        ],
      },
      {
        heading: 'What you will never see here',
        body: [
          'Imported testimonials, star widgets with no underlying review, or AggregateRating schema in the page markup. Search engines penalize the last one; guests should penalize the first two.',
        ],
        links: [{ label: 'The honesty register', href: '/trust' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote' },
    keywords: ['myCHEF review policy'],
  },
  {
    slug: 'how-we-vet-chefs',
    category: 'trust',
    title: 'How myCHEF Vets Chefs',
    h1: 'How a chef joins the roster.',
    meta: {
      description:
        'How myCHEF vets chefs in Hawaii: credential checks, a paid trial service, insurance, and ongoing review against the network standard.',
    },
    parent: 'trust',
    intro:
      'Every chef on the network is an independent professional who passed the same gate: credentials, a paid trial service, insurance, and ongoing review against the standard.',
    sections: [
      {
        heading: 'The gate',
        list: [
          'Credential and reference check — verifiable kitchens, verifiable years',
          'A paid trial service — we eat the cooking before you do',
          'Insurance and permits — county health requirements met per island',
          'Ongoing review — verified-event reviews feed the roster decision',
        ],
      },
      {
        heading: 'What we don’t claim',
        body: [
          'No invented bios, no award walls, no stock “our chefs” photography. When a chef’s name appears on your quote, that person cooks your dinner.',
        ],
        links: [{ label: 'The honesty register', href: '/trust' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote', secondaryLabel: 'Cook with us', secondaryHref: '/careers' },
    keywords: ['how myCHEF vets chefs'],
  },
  {
    slug: 'partners',
    category: 'partner',
    title: 'Partner with myCHEF Hawaii',
    h1: 'Partners: villas, concierges, planners.',
    meta: {
      description:
        'Partner with myCHEF Hawaii: villa managers, concierges, and wedding planners get one written-quote discipline across four islands.',
    },
    intro:
      'If your guests ask for a chef, you need one answer that works on four islands: published prices, a written quote, and a roster that shows up. That is the partner offer.',
    sections: [
      {
        heading: 'Villa managers & concierges',
        body: [
          'A single partner brief covers your properties: kitchen specs on file, guest-ready quote links, and the fee stack itemized so your guests never ask you to explain our bill.',
        ],
      },
      {
        heading: 'Wedding planners',
        body: [
          'The wedding-week arc is built for your calendar: five meals, one contract, one deposit schedule. Maui runs the deepest program; every island honors the same written-quote discipline.',
        ],
        links: [{ label: 'The wedding week', href: '/weddings/wedding-week' }],
      },
    ],
    cta: { label: 'Open a partner brief', href: '/contact', secondaryLabel: 'The tariff', secondaryHref: '/pricing' },
    keywords: ['partner with myCHEF Hawaii'],
  },
  {
    slug: 'network',
    category: 'trust',
    title: 'myCHEF Around the World',
    h1: 'Dubai · Bali · Hawaiʻi.',
    meta: {
      description:
        'myCHEF operates in Dubai, Bali, and Hawaiʻi — the same published-price discipline and honesty register on three coasts.',
    },
    parent: 'about',
    intro:
      'myCHEF runs the same model in three places: published prices, itemized fees, the written quote as confirmed total. Hawaiʻi is the Pacific desk.',
    sections: [
      {
        heading: 'What travels, what doesn’t',
        body: [
          'The discipline travels: the fee stack, the honesty register, the vetting gate. The kitchens don’t — each market runs its own local rosters, permits, and rate cards, which is why this site quotes Hawaiʻi numbers only.',
        ],
        links: [{ label: 'About myCHEF Hawaii', href: '/about' }],
      },
    ],
    cta: { label: 'Get a written quote', href: '/quote' },
    keywords: ['myCHEF around the world'],
  },
  {
    slug: 'careers',
    category: 'trust',
    title: 'Chef Jobs in Hawaii — Cook with myCHEF',
    h1: 'Cook on your island, on your terms.',
    meta: {
      description:
        'Chef jobs in Hawaii with myCHEF: independent chefs on Oʻahu, Maui, Kauaʻi, and the Big Island — vetted roster, published rates, the standard.',
    },
    parent: 'about',
    intro:
      'The network is a roster of independent chefs, and rosters grow. If you cook at the standard — and can pass the gate — there is a conversation to have.',
    sections: [
      {
        heading: 'What the work looks like',
        body: [
          'Villa kitchens and estate dinners, not line shifts. Published rates mean no fee negotiation per booking; the network handles the brief, the quote, and the billing.',
        ],
      },
      {
        heading: 'The gate',
        body: [
          'Verifiable credentials, a paid trial service, insurance, and county health compliance on your island. We eat the cooking before any guest does.',
        ],
        links: [{ label: 'How we vet chefs', href: '/how-we-vet-chefs' }, { label: 'Contact', href: '/contact' }],
      },
    ],
    cta: { label: 'Introduce yourself', href: '/contact' },
    keywords: ['chef jobs Hawaii'],
  },
];
