import type { ContentRecord } from '@/platform/types';

/**
 * Maui content registry — the full 126-page Chapter 4 §4.2.2 sitemap as
 * ContentRecords. Maui is the network's wedding engine: the 18-page wedding
 * cluster carries the deepest copy. Lahaina is informational-only (recovery
 * sensitivity). Slugs are site-relative and ASCII; diacritics live in copy.
 *
 * Approved numbers only (info.md / Chapter 5): Signature $150–$250/guest,
 * Premium $190–$275, Chef's table $275–$400+, Stay Chef from $1,050/day,
 * Date Night from $500+, bar cart from $800/4hr, server $55/hr, sous $75/hr
 * (4-hr floor), travel: Upcountry from $75, Pāʻia/Haʻikū quote-only, wedding
 * week from $150/guest + staffing. Fee stack: 20% service + GET up to
 * 4.7120% on their own lines, 50% deposit, gratuity voluntary.
 * REQUIRES LEGAL VERIFICATION flags preserved on alcohol and §481B-14 copy.
 */

const FEE_FOOTNOTE =
  '20% service charge and Hawaiʻi GET up to 4.7120% always appear on their own lines. 50% deposit locks the date; gratuity is voluntary; groceries at cost with receipts.';

export const content: ContentRecord[] = [
  /* ================= CORE (8) ================= */
  {
    slug: '',
    category: 'core',
    title: 'Private Chef Maui — Villa Dinners & Wedding Weeks | myCHEF',
    h1: 'Maui, set for dinner.',
    meta: {
      description:
        'A private chef for your Wailea villa, your Kapalua estate, your whole wedding week. Villa dinners $150–$250 a guest; Stay Chef from $1,050 a day; the written quote is the confirmed total.',
      ogImage: '/img/maui/hero-home.jpg',
    },
    intro:
      'A private chef for your Wailea villa, your Kapalua estate, your whole wedding week. Villa dinners $150–$250 a guest; the written quote is the confirmed total.',
    sections: [],
    cta: { label: 'Plan your week', href: 'quote', secondaryLabel: 'See pricing', secondaryHref: 'pricing' },
    keywords: ['private chef Maui'],
  },
  {
    slug: 'quote',
    category: 'core',
    title: 'Get a Written Quote — Private Chef Maui',
    h1: 'Tell us the dates and the villa.',
    meta: {
      description:
        'Tell us the dates and the villa. We reply with a written quote — the confirmed total, with 20% service and Hawaiʻi GET on their own lines.',
      ogImage: '/img/maui/quote-lanai.jpg',
    },
    sections: [],
    cta: { label: 'Start the quote', href: 'quote' },
    keywords: ['book a private chef Maui'],
  },
  {
    slug: 'private-chef',
    category: 'core',
    title: 'Hire a Private Chef on Maui — Villa Dinners from $150/Guest',
    h1: 'The house is yours. The kitchen is ours.',
    meta: {
      description:
        'Private chef for your Maui villa: signature dinners $150–$250 a guest, date nights from $500, Stay Chef from $1,050 a day. Your chef shops that morning, cooks in your kitchen, and leaves it clean.',
      ogImage: '/img/maui/hero-private-chef.jpg',
    },
    intro:
      'Your chef shops that morning, arrives before service, cooks in your villa kitchen, serves each course, and leaves the kitchen clean. This page is the whole picture — dinners, date nights, and the week fully handled.',
    sections: [
      {
        heading: 'How a dinner runs',
        body: [
          'A menu is agreed in writing before anyone shops. On the day, your chef buys from Maui growers and fishers first, arrives with everything, cooks in your kitchen, plates and introduces each course, and resets the kitchen before leaving. Groceries are inside the published band; receipts on request.',
          'The rhythm suits the way Maui stays actually work: an arrival-night dinner after the flight, a date night while the grandparents hold the fort, then the whole week handed to a Stay Chef if the house deserves it.',
        ],
      },
      {
        heading: 'The kitchen gate',
        body: [
          'We will not pretend a coffee maker and a minibar are a kitchen. Hotel rooms without kitchens are declined; villas, residences, and estates with real kitchens are the stage. Wailea Beach Villas, Hoʻolei, the Andaz residences, Makena’s estates, and the Kapalua villa complexes are exactly the stock this service was built for.',
        ],
        links: [{ label: 'What kitchen a private chef needs', href: 'guides/villa-kitchen' }],
      },
      {
        heading: 'Included, and what sits outside',
        list: [
          'Included: menu design, same-day shopping, cooking, table service, cleanup, groceries inside the band',
          'Separate: staffing hourlys ($55 server / $75 sous), the packaged bar cart from $800/4hr, travel zones, rentals',
        ],
      },
    ],
    faq: [
      {
        q: 'How much is a private chef dinner on Maui?',
        a: 'Signature dinners run $150–$250 a guest, groceries inside the band. Premium menus are $190–$275 and chef’s-table formats $275–$400+. The fee stack — 20% service and Hawaiʻi GET up to 4.7120% — appears on its own lines in the written quote, which is the confirmed total.',
        links: [{ label: 'The full rate card', href: '/maui/pricing' }],
      },
      {
        q: 'Do you cook in vacation rentals and condos?',
        a: 'Yes, wherever there is a real kitchen — that is most of the Wailea, Mākena, Kāʻanapali, and Kapalua villa stock. Studios and hotel rooms without kitchens are declined, and we say so plainly rather than staging a hot plate on a balcony.',
      },
      {
        q: 'How far ahead should we book?',
        a: 'Two to four weeks is comfortable; December through April and holiday weeks book first. The written quote holds your date once the 50% deposit lands.',
        links: [{ label: 'Booking lead times', href: '/maui/guides/booking-lead-times' }],
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'See the menus', secondaryHref: 'menus' },
    keywords: ['hire a private chef Maui'],
  },
  {
    slug: 'stay-chef',
    category: 'core',
    title: 'Chef for a Week on Maui — Stay Chef from $1,050/Day',
    h1: 'The week, handled.',
    meta: {
      description:
        'A chef in your Maui villa from $1,050 a day: breakfast before the beach, provisioning while you are out, dinner at golden hour. Groceries at cost with receipts; the written quote is the confirmed total.',
      ogImage: '/img/maui/card-stay-chef.jpg',
    },
    intro:
      'One chef, your kitchen, the whole stay — from $1,050 a day, groceries billed at cost with receipts. It is the only published multi-day chef rate in the Maui market, and it turns a villa rental into a staffed house.',
    sections: [
      {
        heading: 'What a Stay Chef day looks like',
        body: [
          'Breakfast before the beach. A stocked fridge and a packed cooler while you are out. Dinner timed to the light. The day rate covers a full day of chef labor in your kitchen; extra meals and staffing are quoted in the same written document, same day.',
        ],
      },
      {
        heading: 'A sample three-day rhythm',
        list: [
          'Day 1 — arrival dinner: three courses on the lānai while you decompress',
          'Day 2 — provisioning day: beach-day cooler, kids’ early plates, dinner family-style',
          'Day 3 — the signature dinner: macadamia-crusted catch, canoe crops, a lilikoi finish at sunset',
        ],
      },
      {
        heading: 'The honest fine print',
        body: [
          'There is no published weekly discount — the written quote is the total, and we would rather hold that line than inflate the day rate to fake one. Groceries are billed at cost with receipts, never marked up. Upcountry stays carry travel from $75 a day; Pāʻia and Haʻikū are quoted at inquiry.',
        ],
      },
      {
        heading: 'Where Stay Chef works best',
        body: [
          'The Wailea–Mākena villa stock — Wailea Beach Villas, Hoʻolei, the Andaz residences, Makena Surf — was practically designed around this product: real chef’s kitchens, big tables, and groups of 6–12 who do not want a reservation app deciding the evening.',
        ],
        links: [
          { label: 'Stay Chef in Wailea', href: 'locations/wailea/stay-chef' },
          { label: 'Stay Chef in Kapalua', href: 'locations/kapalua/stay-chef' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does a Stay Chef cost for a week on Maui?',
        a: 'From $1,050 a day for the chef’s full day, plus groceries at cost with receipts. A seven-day week starts at $7,350 in chef labor before staffing extras, 20% service, and GET — every line written in the quote.',
        links: [{ label: 'Stay Chef cost anatomy', href: '/maui/pricing/stay-chef-cost' }],
      },
      {
        q: 'Is there a weekly discount?',
        a: 'No published weekly discount exists, and we do not invent one in chat. The written quote is the confirmed total — that discipline is why the number you are quoted is the number you pay.',
      },
      {
        q: 'Can the chef handle kids and dietary flags across a week?',
        a: 'Yes. Kids’ early plates, vegan and gluten-free tracks, and allergen-separate prep are standard across a week-long engagement. Tell us the flags in the quote form and the menus arrive written around them.',
      },
    ],
    cta: { label: 'Plan the week', href: 'quote', secondaryLabel: 'Stay Chef cost anatomy', secondaryHref: 'pricing/stay-chef-cost' },
    keywords: ['chef for a week Maui', 'vacation chef Maui'],
  },
  {
    slug: 'pricing',
    category: 'pricing',
    title: 'Private Chef Maui Cost — The Published Rate Card',
    h1: 'What a Maui week costs, in writing.',
    meta: {
      description:
        'The Maui rate card: signature dinners $150–$250 a guest, Stay Chef from $1,050 a day, wedding week from $150 a guest plus staffing, server $55/hr. 20% service and GET up to 4.7120% on their own lines.',
    },
    intro:
      'Every number on this page is published and honored. Villa dinner $150–$250 a guest · Stay Chef from $1,050 a day · Wedding week from $150 a guest plus staffing · Date night from $500.',
    sections: [],
    priceTable: {
      title: 'The Maui rate card',
      rows: [
        { label: 'Signature dinner', value: '$150–$250 /guest', note: 'Groceries inside the band' },
        { label: 'Premium menu', value: '$190–$275 /guest' },
        { label: 'Chef’s table', value: '$275–$400+ /guest', note: 'Quoted format' },
        { label: 'Stay Chef', value: 'from $1,050 /day', note: 'Groceries at cost with receipts' },
        { label: 'Date night', value: 'from $500', note: 'Dinner for two' },
        { label: 'Wedding week', value: 'from $150 /guest', note: 'Plus staffing' },
        { label: 'Packaged bar cart', value: 'from $800 /4hr', note: 'Alcohol client-supplied or licensed referral' },
        { label: 'Server / sous chef', value: '$55 / $75 per hour', note: 'Four-hour floor' },
        { label: 'Travel', value: 'from $75', note: 'Upcountry; Pāʻia/Haʻikū quoted at inquiry' },
      ],
      footnote: FEE_FOOTNOTE,
    },
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Run the estimator', secondaryHref: 'pricing/estimate' },
    keywords: ['private chef Maui cost'],
  },
  {
    slug: 'catering',
    category: 'core',
    title: 'Catering Maui — Estate Receptions, Staffed, 10–75 Guests',
    h1: 'The reception moved to the estate. Good — bring the kitchen crew.',
    meta: {
      description:
        'Estate catering on Maui: buffet, family-style, plated, pūpū and stations for 10–75 guests, staffed at $55/$75 hourlys. Beach permits cap ceremonies near 20 — the estate is where the reception lives.',
      ogImage: '/img/maui/hero-catering.jpg',
    },
    intro:
      'Beach permits cap ceremonies at roughly twenty people with no structures. The reception moves to the estate — and the estate needs a kitchen crew. We staff 10–75 guests; over 75 is a written exception, quoted, never implied.',
    sections: [],
    faq: [
      {
        q: 'What group sizes can you cater on Maui?',
        a: 'Staffed events run 10–75 guests, scaled one server per 10–12 at $55/hr with sous chefs at $75/hr on four-hour floors. Over 75 is a written exception — assessed on kitchen and crew reality, quoted, never implied.',
      },
      {
        q: 'What does catering cost per guest?',
        a: 'Event menus start from $150 a guest plus staffing. Maui’s published market norms run $80–$120 a head buffet and $120–$200 plated with 18–22% service charges — our lines sit in the plated band with the fee stack itemized instead of buried.',
        links: [{ label: 'The rate card', href: '/maui/pricing' }],
      },
      {
        q: 'Can you cater a beach wedding reception?',
        a: 'Not on the public beach — DLNR rules cap gatherings near 20 with no structures. The working pattern: the ceremony on the sand under the permit, the reception minutes away at a villa or estate.',
        links: [{ label: 'Beach ceremony, estate reception', href: '/maui/weddings/beach-ceremony-reception' }],
      },
      {
        q: 'Do you handle rentals and the bar?',
        a: 'Rentals — tables, linens, glassware — coordinate into the same written quote as the food. The packaged bar cart runs from $800/4hr; alcohol is client-supplied or via licensed referral — we do not sell alcohol.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'The wedding week', secondaryHref: 'weddings' },
    keywords: ['catering Maui'],
  },
  {
    slug: 'weddings',
    category: 'wedding',
    title: 'Wedding Catering Maui — The Week, Not the Plated Hour',
    h1: 'The week, not the plated hour.',
    meta: {
      description:
        'Maui wedding catering as one contract: welcome dinner, rehearsal, ceremony-adjacent service, reception, recovery brunch — from $150 a guest plus staffing, 20% service on its own line.',
      ogImage: '/img/maui/hero-weddings.jpg',
    },
    intro:
      'Maui is the network’s wedding engine: a top-25 global destination-wedding market where every meal of the week already happens — just never under one contract. We sell the week as one culinary contract, at published per-guest lines.',
    sections: [],
    cta: { label: 'Plan the week', href: 'weddings/wedding-week', secondaryLabel: 'Get a written quote', secondaryHref: 'quote' },
    keywords: ['wedding catering Maui'],
  },
  {
    slug: 'estate-events',
    category: 'core',
    title: 'Estate Reception Catering Maui — Where the Beach Permit Ends',
    h1: 'The estate is the venue. We are its kitchen.',
    meta: {
      description:
        'Estate receptions on Maui: DLNR beach permits cap ceremonies near 20 guests with no structures, so the party moves to villas and estates. Staffed service for 10–75 guests, rentals coordinated, 20% service on its own line.',
    },
    intro:
      'A DLNR beach permit is a beautiful ceremony license and a terrible reception plan: roughly twenty people, no arches, no chairs, two hours. Maui’s answer is the estate reception — and estates need a crew that can actually run them.',
    sections: [
      {
        heading: 'Why receptions migrate to estates',
        body: [
          'The state’s Wiki permit system caps professional beach ceremonies at roughly 20–25 people including vendors, bans structures, and holds events to two hours. Couples keep the toes-in-sand ceremony at Makena Cove or Kapalua Bay, then move everyone to an estate lawn or villa lānai where dinner can actually happen.',
          'That migration is the core of Maui’s wedding economy: Kukahiko Estate, Olowalu Plantation House, Haiku Mill, and the Wailea and Kapalua villa stock all assume an outside culinary team.',
        ],
        links: [{ label: 'Beach ceremony, estate reception', href: 'weddings/beach-ceremony-reception' }],
      },
      {
        heading: 'What we run on an estate',
        list: [
          'Plated two-to-three-course receptions, premium buffets, family-style feasts, pūpū and grazing formats',
          'Servers at $55/hr and sous chefs at $75/hr, four-hour floor, scaled one server per 10–12 guests',
          'Rentals coordination — tables, linens, glassware — quoted with the food, not after it',
          'The packaged bar cart from $800/4hr; alcohol is client-supplied or via licensed referral',
        ],
      },
      {
        heading: 'The venue-kitchen advantage',
        body: [
          'Kukahiko Estate’s kitchen was purpose-built for outside caterers — its operators designed it so caterers love working there. Haiku Mill runs a preferred-vendor list with a $650 outside-vendor fee, which we tell you about before you sign anything, not after. We work with your planner on the list.',
        ],
      },
      {
        heading: 'The service-charge comparison',
        body: [
          'Resort food-and-beverage programs commonly carry $7,500–$15,000 minimums per event plus 23–25% service charges. Our service charge is 20%, always on its own line, and there is no F&B minimum — the written quote is the confirmed total.',
        ],
      },
    ],
    faq: [
      {
        q: 'How many guests can you cater at a Maui estate?',
        a: 'Staffed events run 10–75 guests. Over 75 is a written exception — we assess kitchen, power, and staffing honestly and quote it, rather than implying a capacity we cannot crew.',
      },
      {
        q: 'Can you cater a wedding at Kukahiko Estate or Haiku Mill?',
        a: 'Yes — these are exactly the venues the estate-reception product is built for. Both gate access through approved planners and vendor lists; we coordinate with your planner and flag Haiku Mill’s $650 outside-vendor fee up front.',
        links: [{ label: 'The planner channel', href: '/maui/weddings/planner-channel' }],
      },
      {
        q: 'What does estate catering cost per guest?',
        a: 'Wedding and event lines start from $150 a guest plus staffing. Maui’s published market norms run $80–$120 a head for buffets and $120–$200 for plated dinners — our plated lines start where the market’s plated lines do, with the fee stack itemized instead of buried.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Estate wedding format', secondaryHref: 'weddings/estate-wedding' },
    keywords: ['estate reception catering Maui'],
  },
];

/* ================= SERVICES (20) ================= */
const services: ContentRecord[] = [
  {
    slug: 'services/personal-chef',
    category: 'service',
    parent: 'private-chef',
    title: 'Personal Chef Maui — Weekly Prep and Vacation Service',
    h1: 'A personal chef for the Maui stay — or the Maui household.',
    meta: {
      description:
        'Personal chef service on Maui: in-villa meal prep, vacation-week cooking, and repeatable household service. Written quotes, groceries at cost with receipts, kitchens required.',
    },
    intro:
      '“Personal chef” usually means the cooking relationship, not the single dinner: the fridge that stays full, the week that runs itself. On Maui that is two products — vacation-stay service for visitors, and repeatable prep for households.',
    sections: [
      {
        heading: 'For the vacation rental',
        body: [
          'Your chef provisions the villa on arrival day, cooks the dinners you actually want, and leaves labeled meals for the days you would rather graze. It pairs naturally with Stay Chef days from $1,050 or standalone signature dinners at $150–$250 a guest.',
        ],
      },
      {
        heading: 'For Maui households',
        body: [
          'Weekly cook sessions are scoped in writing: menu plan, shopping, cooking, packaging, labeling, cleanup. Maui grocery prices run roughly a third to half above mainland levels, so groceries are billed at cost with receipts rather than buried in a package price.',
        ],
      },
      {
        heading: 'What stays true either way',
        list: [
          'A real kitchen is required — hotel rooms are declined',
          'Menus adapt to eleven dietary flags with separate allergen prep',
          '20% service and Hawaiʻi GET up to 4.7120% appear on their own lines',
          'The written quote is the confirmed total',
        ],
      },
    ],
    faq: [
      {
        q: 'What is the difference between a personal and private chef on Maui?',
        a: 'A private chef typically cooks one household’s meals as a staff role; a personal chef serves several clients through scheduled sessions. In practice our Maui service covers both patterns — vacation weeks and recurring household prep — quoted in writing either way.',
        links: [{ label: 'Private vs personal chef, defined', href: '/maui/compare/private-vs-personal-chef' }],
      },
      {
        q: 'Can you stock the villa before we land?',
        a: 'Yes — arrival provisioning is a standard line. Send the list or let the chef write it from your preferences; groceries are billed at cost with receipts.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Vacation chef service', secondaryHref: 'services/vacation-chef' },
    keywords: ['personal chef Maui'],
  },
  {
    slug: 'services/vacation-chef',
    category: 'service',
    parent: 'private-chef',
    title: 'Vacation Chef Maui — A Chef for Your Villa Stay',
    h1: 'The rental came with a kitchen. Put a chef in it.',
    meta: {
      description:
        'Vacation chef for Maui villas and condos with kitchens: arrival-night dinners, Stay Chef days from $1,050, beach-day provisioning. Published prices, written quotes.',
    },
    intro:
      'A third or more of Maui visitors sleep in kitchen-equipped lodging — condos, timeshares, rental homes. That kitchen is the most underused amenity in the house. A vacation chef makes it the best one.',
    sections: [
      {
        heading: 'The three ways to use us on a stay',
        list: [
          'Arrival Night Dinner — a signature dinner at $150–$250 a guest the evening you land',
          'Stay Chef days — from $1,050 a day, groceries at cost, the whole day’s cooking handled',
          'Provisioning runs — the fridge and pantry stocked to your list before you arrive',
        ],
      },
      {
        heading: 'Why villa kitchens suit Maui',
        body: [
          'Wailea Beach Villas, Hoʻolei, the Andaz residences, Makena Surf, the Kapalua Ridge and Bay villas, and the Honua Kai–era condo-resort stock all ship with real kitchens — full ranges, big counters, lānai tables eight steps away. The chef’s job is shopping that morning and making dinner the easiest hour of the day.',
        ],
      },
      {
        heading: 'What concierges already know',
        body: [
          'Vacation-rental managers across Wailea and Kapalua actively refer private chefs because guests ask for them weekly. If your villa came through a manager or concierge, mention it in the quote — we coordinate access, parking, and kitchen walkthroughs with them directly.',
        ],
        links: [{ label: 'Partner with us — villa managers', href: 'partners/villa-managers' }],
      },
    ],
    faq: [
      {
        q: 'Do you serve condos, or only villas?',
        a: 'Anywhere with a real kitchen — much of Kīhei’s and the Nāpili–Honokōwai–Kahana belt’s condo stock qualifies. Studios with a hot plate do not, and we will tell you that plainly before you pay a deposit.',
      },
      {
        q: 'Can we mix Stay Chef days with standalone dinners?',
        a: 'Yes — that is the most common Maui pattern: a dinner on arrival night, two or three Stay Chef days mid-week, and a date night near the end. Everything lands in one written quote.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Stay Chef details', secondaryHref: 'stay-chef' },
    keywords: ['chef for vacation rental Maui'],
  },
  {
    slug: 'services/date-night',
    category: 'service',
    parent: 'private-chef',
    title: 'Private Chef for Two on Maui — Date Night from $500',
    h1: 'Two people, one sunset, no reservation.',
    meta: {
      description:
        'A private chef date night on Maui from $500: a coursed dinner for two on your lānai, timed to the light, kitchen left clean. Honeymoons, proposals, anniversaries.',
      ogImage: '/img/maui/card-date-night.jpg',
    },
    intro:
      'From $500, a coursed evening for two in your villa: the menu written around you, service timed to the sunset, and a kitchen cleaner than we found it. Maui’s thin two-person economics are priced honestly into the line.',
    sections: [
      {
        heading: 'How the evening runs',
        body: [
          'A short menu call a few days out. The chef arrives ninety minutes before the light peaks, cooks, serves each course with a sentence of context, and vanishes into the kitchen between courses. You are left with the lānai, the candles, and a clean kitchen.',
        ],
      },
      {
        heading: 'When Maui couples book it',
        list: [
          'Honeymoons — the first proper dinner after the wedding-week marathon',
          'Proposals — the question lands between courses, not across a crowded dining room',
          'Anniversaries — the meal you talked about on the flight over, cooked in your kitchen',
        ],
        links: [
          { label: 'Proposal dinners', href: 'occasions/proposal' },
          { label: 'Honeymoon dinners', href: 'services/honeymoon-dinners' },
        ],
      },
      {
        heading: 'What $500+ covers',
        body: [
          'Menu design, same-day shopping, a multi-course dinner for two, table service, and cleanup — with the fee stack itemized as always: 20% service and GET up to 4.7120% on their own lines, the written quote as the confirmed total.',
        ],
      },
    ],
    faq: [
      {
        q: 'Why is dinner for two priced flat instead of per guest?',
        a: 'Two-person service carries nearly the same shopping, travel, and prep as a six-top, so per-guest math fails at two. The flat from-$500 line is the honest version — published, not negotiated in chat.',
      },
      {
        q: 'Can you do a sunset proposal setup?',
        a: 'Yes — we coordinate timing, flowers-on-table basics, and a bottle you supply or source. We do not sell proposal packages or photography, but we will happily be the invisible half of the plan.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Anniversary dinners', secondaryHref: 'occasions/anniversary' },
    keywords: ['private chef for two Maui'],
  },
  {
    slug: 'services/meal-prep',
    category: 'service',
    parent: 'private-chef',
    title: 'Meal Prep Chef Maui — In-Villa Prep Sessions',
    h1: 'The fridge, filled by someone who can actually cook.',
    meta: {
      description:
        'Meal-prep chef sessions on Maui for villas and households: menu plan, shopping at cost with receipts, cooking, labeling, cleanup. Written quotes; kitchens required.',
    },
    intro:
      'Meal prep on Maui is two markets in one: visitors who want the villa stocked for the week, and households who want Sunday’s cooking done by a professional. Both get the same discipline — written menus, receipts, a clean kitchen.',
    sections: [
      {
        heading: 'The vacation version',
        body: [
          'One prep session early in the stay: breakfasts, kids’ plates, grill-ready proteins, salads, and snacks — labeled and dated in the villa fridge. Christmas-week villa demand on Maui is documented and real; December prep sessions book first.',
        ],
      },
      {
        heading: 'The household version',
        body: [
          'A recurring session — typically weekly — planned around your dietary flags and the island’s markets. Maui groceries run roughly 31–53% above mainland prices; billing them at cost with receipts keeps that visible instead of padded.',
        ],
      },
      {
        heading: 'Scope, in writing',
        list: [
          'Menu plan approved before shopping',
          'Groceries at cost, receipts attached',
          'Allergen-separate prep where flagged',
          'Packaging, labeling, and a reset kitchen included',
        ],
      },
    ],
    faq: [
      {
        q: 'What does a meal-prep session cost on Maui?',
        a: 'Sessions are scoped and quoted in writing — typically structured from our day-rate and staffing lines rather than invented package numbers. The written quote is the confirmed total.',
      },
      {
        q: 'Can prep be plant-based, gluten-free, or keto?',
        a: 'Yes — the eleven-flag dietary system applies to prep as much as dinners, with separate prep for allergens described in the quote.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Dietary depth', secondaryHref: 'services/dietary' },
    keywords: ['meal prep chef Maui'],
  },
  {
    slug: 'services/cooking-classes',
    category: 'service',
    parent: 'private-chef',
    title: 'Private Cooking Classes on Maui — In Your Villa Kitchen',
    h1: 'Learn the dish in the kitchen you are actually staying in.',
    meta: {
      description:
        'Private in-villa cooking classes on Maui: hands-on sessions built around canoe crops, local fish, and your own kitchen. Quoted per session; pairs with dinner service.',
    },
    intro:
      'A private class in your villa kitchen — canoe crops, local fish, the techniques behind the plates you have been eating all week. It is an experience add-on, priced honestly as chef time, not as a theme-park attraction.',
    sections: [
      {
        heading: 'What a class covers',
        body: [
          'Ninety minutes to three hours, hands-on, built around one menu you then eat. Typical Maui sessions: breaking down a whole local catch, macadamia crusts and pan sauces, taro and ʻulu fundamentals, or a poke-and-pūpū hour done properly.',
        ],
      },
      {
        heading: 'Who books it',
        body: [
          'Families with teenagers who actually want to learn, couples on longer stays, and small groups who want an afternoon activity that ends in dinner. Groups beyond six work better as chef-attended stations — we will tell you which format fits before quoting.',
        ],
      },
      {
        heading: 'How it is priced',
        body: [
          'Classes are quoted as chef time plus groceries at cost, against the same published hourly discipline as the rest of the rate card. The written quote is the confirmed total.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do kids work in a private class?',
        a: 'Yes — with a parent at the counter. Knife work scales to the child; nobody under twelve holds a chef’s knife unsupervised, and the menu flexes to keep every age busy.',
      },
      {
        q: 'Can a class turn into dinner?',
        a: 'That is the standard format — you cook the early courses with the chef, then sit down while service takes over. One quote covers both.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'See the menus', secondaryHref: 'menus' },
    keywords: ['cooking class Maui private'],
  },
  {
    slug: 'services/omakase-at-home',
    category: 'service',
    parent: 'private-chef',
    title: 'Private Sushi Chef Maui — Omakase at Home',
    h1: 'The counter, moved to your kitchen.',
    meta: {
      description:
        'In-villa omakase on Maui: a private sushi chef, market fish bought that morning, coursed service at your counter or lānai. Quoted within the chef’s-table band, $275–$400+ a guest.',
    },
    intro:
      '“Private sushi chef Maui” is one of the island’s most-searched chef phrases and one of its least-served. Omakase at home is real here — market fish bought that morning, coursed at your counter, priced inside the published chef’s-table band of $275–$400+ a guest.',
    sections: [
      {
        heading: 'What the evening is',
        body: [
          'Twelve to sixteen courses across two hours: nigiri paced to the rice, not the clock, plus cooked courses where the market argues for them. Your chef sources from Maui fish buyers the morning of service and tells you what changed their mind at the counter.',
        ],
      },
      {
        heading: 'What your kitchen needs',
        list: [
          'Counter or bar seating for the counter experience — a dining table works, with service plated',
          'Refrigeration space for the day’s fish',
          'Six to ten guests is the sweet spot; twelve is the practical ceiling for one itamae',
        ],
      },
      {
        heading: 'Pricing, plainly',
        body: [
          'Omakase sits in the chef’s-table band — $275–$400+ a guest — because fish cost and labor both scale honestly. 20% service and GET up to 4.7120% appear on their own lines; the written quote is the confirmed total.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the fish local?',
        a: 'Where the market allows — Maui County’s auction and buyer network supplies much of the day’s selection, and your chef names origins course by course. Some items travel; we do not fake provenance.',
      },
      {
        q: 'Can you do an omakase for two?',
        a: 'Yes, structured as a date-night format from $500+ for the evening, with the coursing compressed but the sourcing identical.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Chef’s table format', secondaryHref: 'services/chefs-table' },
    keywords: ['private sushi chef Maui'],
  },
  {
    slug: 'services/fine-dining',
    category: 'service',
    parent: 'private-chef',
    title: 'Fine Dining at Home on Maui — Premium and Chef’s-Table Tiers',
    h1: 'The dining room you already paid for, finally used properly.',
    meta: {
      description:
        'Fine-dining private chef service on Maui: premium menus $190–$275 a guest, chef’s-table formats $275–$400+. Plated coursed service in your villa, with the fee stack itemized.',
    },
    intro:
      'Above the signature band sit two published tiers: Premium at $190–$275 a guest and Chef’s Table at $275–$400+. This is where Maui’s villa stock — built for exactly this — meets chefs who plate at restaurant level.',
    sections: [
      {
        heading: 'What the tiers buy',
        list: [
          'Premium ($190–$275/guest) — luxury proteins, longer coursing, paired plating',
          'Chef’s table ($275–$400+/guest) — counter-seated, chef-narrated, market-driven',
          'Both include menu design, shopping, service, and cleanup; staffing is quoted separately',
        ],
      },
      {
        heading: 'Where it happens best',
        body: [
          'Wailea and Mākena villas with chef’s kitchens, Kapalua ridge houses with dusk views, and the occasional Honua Kai–class penthouse. What it never needs is a rental dining room — the villa is the point.',
        ],
      },
      {
        heading: 'The honest boundary',
        body: [
          'Fine dining at home is not a restaurant with better parking. Wine is yours or sourced on request; rentals beyond the villa’s own are coordinated and quoted; and the kitchen-gate rule still applies — no kitchen, no service.',
        ],
      },
    ],
    faq: [
      {
        q: 'How far ahead do premium tiers book?',
        a: 'Two to four weeks is comfortable, longer in the December–April peak. Chef’s-table formats depend on specific chef availability, so the earlier the inquiry the better the match.',
      },
      {
        q: 'Can menus go fully plant-based at the premium tier?',
        a: 'Yes — plant-based premium menus are a Maui strength, built around Upcountry produce and canoe crops rather than substitutions.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'The chef’s table', secondaryHref: 'services/chefs-table' },
    keywords: ['fine dining at home Maui'],
  },
  {
    slug: 'services/chefs-table',
    category: 'service',
    parent: 'services/fine-dining',
    title: "Chef's Table Maui — Counter Service at $275–$400+/Guest",
    h1: 'Eight seats, one chef, no menu until the market decides.',
    meta: {
      description:
        "A chef's table in your Maui villa: counter-seated, chef-narrated coursing at $275–$400+ a guest, quoted format. The market decides the menu; the written quote confirms the total.",
    },
    intro:
      'The chef’s table is the network’s top published tier on Maui: $275–$400+ a guest, counter-seated where the kitchen allows, narrated course by course. It is a quoted format — the menu is written with you after the market run.',
    sections: [
      {
        heading: 'The format',
        body: [
          'Six to ten guests at the counter or a chef-adjacent table. Courses arrive with a sentence each — where the fish was bought, why the ʻulu is on the plate, what the canoe crops are doing there. Two hours, unhurried.',
        ],
      },
      {
        heading: 'Why Maui suits it',
        body: [
          'Upcountry farms, day-boat fish, and canoe-crop storytelling give a chef more to say per course here than almost anywhere in the network. The villa stock helps too: open kitchens with real counters are standard in the Wailea–Mākena and Kapalua inventory.',
        ],
      },
      {
        heading: 'Booking notes',
        list: [
          'Quoted per event after a short menu call',
          'Staffing beyond the chef quoted separately at $55/$75 hourlys',
          '20% service and GET up to 4.7120% on their own lines, always',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the chef’s table the same as omakase at home?',
        a: 'Adjacent, not identical. Omakase is sushi-led; the chef’s table is the full kitchen — though a sushi-heavy chef’s table is a common Maui request and easy to write into the menu call.',
      },
      {
        q: 'What is the minimum group?',
        a: 'Six guests is the comfortable floor for the full format. Smaller groups are quoted as premium date-night or signature formats instead — we will tell you which fits rather than padding the bill.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Omakase at home', secondaryHref: 'services/omakase-at-home' },
    keywords: ["chef's table Maui"],
  },
  {
    slug: 'services/honeymoon-dinners',
    category: 'service',
    parent: 'private-chef',
    title: 'Honeymoon Private Chef Maui — The First Dinners, Handled',
    h1: 'You just did the seating chart. Let someone else do dinner.',
    meta: {
      description:
        'Honeymoon private chef dinners on Maui: date-night evenings from $500, arrival dinners after the flight, and post-wedding-week decompression meals in your villa.',
    },
    intro:
      'Maui is the honeymoon island, and the honeymoon pattern is predictable: land exhausted, spend day one figuring out dinner, wish you had not. A private dinner the night you arrive fixes the whole week’s opening.',
    sections: [
      {
        heading: 'The two bookings that matter',
        list: [
          'The arrival dinner — signature three courses in the villa while you decompress, $150–$250 a guest math for two quoted as a date-night format',
          'The date night — from $500, coursed, timed to the sunset, the dinner the honeymoon gets remembered by',
        ],
      },
      {
        heading: 'If the wedding was here too',
        body: [
          'Couples who marry on Maui often stay the week after. The same crew that ran your wedding week can quietly hand you a honeymoon rhythm — two dinners, one brunch, zero logistics — in a single written quote.',
        ],
        links: [{ label: 'The wedding week', href: 'weddings/wedding-week' }],
      },
      {
        heading: 'Practical notes',
        body: [
          'Honeymoon suites without kitchens are declined — that is the kitchen gate, and it protects you from a sad hot-plate evening. Villas, residences, and suites with real kitchens are the stage.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you arrange flowers or champagne for the table?',
        a: 'Simple table florals, yes, quoted as cost. Alcohol is client-supplied or arranged through a licensed referral — we do not sell alcohol.',
      },
      {
        q: 'We are staying in Wailea for four nights — what should we book?',
        a: 'The common pattern: arrival-night date dinner, one mid-stay signature dinner, and a provisioning run for the in-between days. One written quote covers all three.',
        links: [{ label: 'Private chef Wailea', href: '/maui/locations/wailea' }],
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Date night format', secondaryHref: 'services/date-night' },
    keywords: ['honeymoon private chef Maui'],
  },
  {
    slug: 'services/retreat-catering',
    category: 'service',
    parent: 'catering',
    title: 'Retreat Catering Maui — Multi-Day Wellness Tables',
    h1: 'You run the retreat. We run the table.',
    meta: {
      description:
        'Retreat catering on Maui: multi-day meal plans for 8–30 guests, plant-based and protocol-labeled menu families, one contract, per-person pricing in writing. North Shore wellness corridor covered by inquiry.',
    },
    intro:
      'Maui’s retreat market has exactly one established culinary incumbent and no published multi-day pricing anywhere. Retreat catering here is a named product: one contract, every meal, protocol-labeled menus, per-person pricing in writing.',
    sections: [
      {
        heading: 'The retreat table',
        body: [
          'Three to seven days, eight to thirty guests, three meals a day plus the snack table that never empties. Breakfast anchor, working lunch, dinner as the day’s exhale — priced per person per day in the written quote, groceries at cost with receipts.',
        ],
      },
      {
        heading: 'Protocol-labeled menu families',
        list: [
          'Plant-based forward as the default frame, not the exception',
          'Raw, detox, and Ayurvedic-fluent rotations labeled per meal',
          'Gluten-free, dairy-free, and nut-free tracks with separate prep',
          'Caffeine and alcohol postures set by the host, honored by the kitchen',
        ],
      },
      {
        heading: 'Where retreats actually happen',
        body: [
          'The Haʻikū–Pāʻia wellness corridor, Upcountry estates, and the occasional Wailea villa buyout. Pāʻia and Haʻikū are quoted at inquiry — the drive and provisioning pattern is different up there and the quote says why.',
        ],
        links: [{ label: 'North Shore retreat catering', href: 'locations/paia/retreat-catering' }],
      },
    ],
    faq: [
      {
        q: 'Can you cater a retreat with mixed dietary protocols?',
        a: 'Yes — that is the norm, not the edge case. Protocols are collected in advance, menus are labeled per meal, and allergens get separate prep.',
      },
      {
        q: 'What does multi-day retreat catering cost?',
        a: 'Structured per person per day against our published day-rate and per-guest lines, quoted in writing per retreat. There is no invented package number — the quote is the total.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Wellness menus', secondaryHref: 'services/wellness-menus' },
    keywords: ['retreat catering Maui', 'wellness chef Maui'],
  },
  {
    slug: 'services/wellness-menus',
    category: 'service',
    parent: 'services/retreat-catering',
    title: 'Wellness Retreat Menus Maui — Protocol-Labeled Menu Families',
    h1: 'Wellness menus that read like menus, not apologies.',
    meta: {
      description:
        'Wellness menu design on Maui: plant-based, raw, detox, and Ayurvedic-fluent menu families for retreats and private stays, built on Upcountry produce and canoe crops.',
    },
    intro:
      'The wellness menu family exists because retreats on Maui ask for protocol vocabulary by name: plant-based, raw, detox, Ayurvedic-fluent. Our answer is menu families labeled per protocol, built on what Maui actually grows.',
    sections: [
      {
        heading: 'The building blocks',
        body: [
          'Upcountry greens and roots, canoe crops — taro, ʻulu, coconut, sweet potato — island fruit, and day-boat fish where the protocol allows. Maui’s farm belt makes “mostly local” an honest sentence here, and we buy from Maui farmers first.',
        ],
      },
      {
        heading: 'The families',
        list: [
          'Plant-based daily driver — the retreat default that omnivores do not notice',
          'Raw and living-foods rotations for dedicated days',
          'Detox weeks — broths, steams, and bitter greens, sequenced with the host',
          'Ayurvedic-fluent menus — kitchari bases, warming spices, labeled per meal',
        ],
      },
      {
        heading: 'How it ships',
        body: [
          'Each retreat gets a written menu map for the full stay — every meal labeled by protocol and dietary flag before anyone shops. Changes mid-week are normal and absorbed; the written quote already anticipates them.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can one retreat run multiple protocols at once?',
        a: 'Yes — a plant-based base with a raw track and a fish-friendly track is standard. Everything is labeled; nobody has to ask the server what they can eat.',
      },
      {
        q: 'Do you cater juice cleanses?',
        a: 'We build the food program around your cleanse structure rather than selling juice packages. Pressed-juice production at retreat scale is quoted with equipment needs stated plainly.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Retreat catering', secondaryHref: 'services/retreat-catering' },
    keywords: ['wellness retreat menus Maui'],
  },
  {
    slug: 'services/mobile-bar',
    category: 'service',
    parent: 'catering',
    title: 'Mobile Bar Maui — Packaged Cart from $800/4hr',
    h1: 'The bar cart, priced. The alcohol, honestly not ours to sell.',
    meta: {
      description:
        'Packaged bar cart on Maui from $800 per four-hour event: cart, tools, mixers, garnish, and service. Alcohol is client-supplied or via licensed bartending referral — we do not sell alcohol.',
    },
    intro:
      'The packaged cart is a published product: from $800 for a four-hour event — cart, tools, house mixers, garnish program, and service. The alcohol itself is client-supplied or arranged through a licensed bartending referral. We do not sell alcohol.',
    sections: [
      {
        heading: 'What the package includes',
        list: [
          'The cart, ice program, tools, glassware coordination',
          'House mixers, shrubs, and a garnish program built on Maui citrus and lilikoi',
          'A written drink menu agreed before the event',
          'Service within the four-hour floor; extensions quoted',
        ],
      },
      {
        heading: 'The alcohol posture — read this part',
        body: [
          'Hawaiʻi liquor licensing sits with county commissions, and Maui County’s rules are the state’s most specific. Our posture: you or your venue supply the alcohol, or we refer you to a licensed bartending company. Whether a private chef may pour client-supplied alcohol at your event type is flagged REQUIRES LEGAL VERIFICATION per county rule — the written quote states the compliant setup for your event rather than guessing.',
        ],
        links: [{ label: 'Alcohol and bar on Maui — the full guide', href: 'guides/alcohol-and-bar' }],
      },
      {
        heading: 'Where the cart works',
        body: [
          'Estate receptions, villa parties, welcome dinners, and recovery brunches — anywhere with level ground and a host who would rather not run a cooler line. The cart pairs with staffed service: servers $55/hr, four-hour floor.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you supply the alcohol for our event?',
        a: 'No — we do not sell alcohol. You supply it, or we refer you to a licensed bartending company; the quote states the compliant setup for your venue and event type. Maui County’s licensing rules are the state’s most specific, and we follow them rather than improvise.',
      },
      {
        q: 'What does the bar cart cost for a wedding reception?',
        a: 'From $800 per four-hour package, plus your alcohol and any staffing. It appears on the written quote as its own line, with 20% service and GET itemized as always.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Staffing rates', secondaryHref: 'services/staffing' },
    keywords: ['mobile bar Maui'],
  },
  {
    slug: 'services/staffing',
    category: 'service',
    parent: 'catering',
    title: 'Event Staffing Maui — Servers $55/hr, Sous Chefs $75/hr',
    h1: 'The crew, priced by the hour, in writing.',
    meta: {
      description:
        'Event staffing on Maui: servers $55/hr, sous chefs $75/hr, four-hour floor, scaled one server per 10–12 guests. Staffing lines itemized in every written quote.',
    },
    intro:
      'Every staffed event on Maui runs on two published hourlys: servers at $55 an hour, sous chefs at $75, with a four-hour floor. The staffing plan is written into the quote — never discovered on the invoice.',
    sections: [
      {
        heading: 'How we scale the crew',
        body: [
          'The working rule is one server per ten to twelve guests for plated service, looser for family-style, tighter for passed pūpū programs. Sous chefs join when the menu or the kitchen demands it. The math is shown in the quote, line by line.',
        ],
      },
      {
        heading: 'The roles',
        list: [
          'Servers — $55/hr, four-hour floor: plating support, table service, reset',
          'Sous chefs — $75/hr, four-hour floor: the second pair of professional hands in the kitchen',
          'Bartenders — via licensed referral or client arrangement; see the alcohol posture',
          'Butlers and estate-service roles — quoted per event for the estates that run them',
        ],
      },
      {
        heading: 'What staffing is not',
        body: [
          'Staffing lines are labor, not a service-charge hiding place. The 20% service charge is always its own line, GET up to 4.7120% is another, and hourlys are a third. Three lines, three meanings, zero blending.',
        ],
      },
    ],
    faq: [
      {
        q: 'How many servers do I need for 50 guests?',
        a: 'Plated, plan on four to five; family-style, three to four. The quote shows the exact plan and the hourly math before you commit.',
      },
      {
        q: 'Do staff travel to Upcountry or Hāna?',
        a: 'Upcountry carries the published travel line from $75. Hāna is mention-only: two-plus hours each way means we quote it reluctantly and honestly, or decline.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Servers in detail', secondaryHref: 'services/staffing/servers' },
    keywords: ['event staffing Maui'],
  },
  {
    slug: 'services/staffing/servers',
    category: 'service',
    parent: 'services/staffing',
    title: 'Event Servers Maui — $55/hr, Four-Hour Floor',
    h1: 'Servers who have run a pass, not just carried a tray.',
    meta: {
      description:
        'Event servers on Maui at $55 an hour with a four-hour floor: plated service, family-style, pūpū programs, and villa resets. Itemized in every written quote.',
    },
    intro:
      'Servers are $55 an hour with a four-hour floor, scaled one per ten to twelve guests for plated service. They arrive before guests, run the room, and leave the villa reset.',
    sections: [
      {
        heading: 'What the hourly buys',
        list: [
          'Pre-service setup: tableware, water program, station checks',
          'Service: coursing, clearing, wine top-ups of client-supplied bottles',
          'The reset: kitchen and dining returned to the state we found them',
        ],
      },
      {
        heading: 'How many you need',
        body: [
          'Plated dinners: one per 10–12 guests. Family-style: one per 14–16. Passed pūpū programs: one per 10 with tighter timing. The written quote does this math for your event instead of leaving you to guess.',
        ],
      },
      {
        heading: 'Pairing with the kitchen',
        body: [
          'Servers work under the chef’s run of show. On wedding weeks the same crew follows you from welcome dinner to recovery brunch — faces your family already knows by day three.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the four-hour floor per server?',
        a: 'Yes — each booked server carries a four-hour minimum at $55/hr. Longer events extend in hourly increments on the same line.',
      },
      {
        q: 'Do servers handle bartending?',
        a: 'They pour client-supplied wine at the table within the compliant setup the quote states. A dedicated bar program runs through the packaged cart or a licensed bartending referral.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'All staffing', secondaryHref: 'services/staffing' },
    keywords: ['event servers Maui'],
  },
  {
    slug: 'services/staffing/bartenders',
    category: 'service',
    parent: 'services/staffing',
    title: 'Bartender Hire Maui — The Licensed Path, Explained',
    h1: 'Bartending on Maui runs through licensing. Here is the honest route.',
    meta: {
      description:
        'Bartender hire on Maui: our packaged bar cart from $800/4hr with client-supplied alcohol, or a licensed bartending company by referral. Maui County liquor rules explained plainly.',
    },
    intro:
      'Maui County’s liquor rules are the most specific in the state, and bartender hire sits squarely inside them. Our answer is structural, not evasive: the packaged cart from $800/4hr with your alcohol, or a referral to a licensed bartending company.',
    sections: [
      {
        heading: 'The two compliant setups',
        list: [
          'Client-supplied alcohol + our cart and service — the standard villa and estate pattern',
          'Licensed bartending company by referral — for venues and event types that require it',
        ],
      },
      {
        heading: 'Why we do not just “bring a bartender”',
        body: [
          'Liquor licensing in Hawaiʻi is county-level, and whether a chef or server may pour client-supplied alcohol at your event type is flagged REQUIRES LEGAL VERIFICATION per Maui County Liquor Commission rule. The written quote states the compliant setup for your specific event instead of nodding along and hoping.',
        ],
        links: [{ label: 'The full alcohol guide', href: 'guides/alcohol-and-bar' }],
      },
      {
        heading: 'What it costs',
        body: [
          'The packaged cart runs from $800 per four hours with mixers, garnish, and service included; your alcohol is separate and yours. Referral partners quote their own licensed rates — we pass you their contact, not a markup.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can myCHEF staff pour wine we bought?',
        a: 'Tableside pouring of client-supplied wine within the compliant setup stated in your quote, yes. Running a cash or hosted bar, no — that is licensed territory and routes to referral.',
      },
      {
        q: 'What about the resort or venue’s own bar requirement?',
        a: 'Some venues require their own licensed bar service regardless of caterer. We flag that at quote stage and coordinate with the venue rather than discovering it on the day.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'The bar cart package', secondaryHref: 'services/mobile-bar' },
    keywords: ['bartender hire Maui'],
  },
  {
    slug: 'services/staffing/butlers',
    category: 'service',
    parent: 'services/staffing',
    title: 'Butler Service Maui — Estate-Level Service, Quoted',
    h1: 'For the houses that run like houses, not rentals.',
    meta: {
      description:
        'Butler and estate-service staffing on Maui for estate weeks and formal receptions: quoted per event alongside chef and server lines, itemized in the written quote.',
    },
    intro:
      'Some Maui estates — Mākena’s trophy properties, the Kapalua ridge, the big Wailea houses — run at a level where service beyond servers makes sense. Butler and estate-service roles are quoted per event, alongside the kitchen lines.',
    sections: [
      {
        heading: 'What the role covers',
        list: [
          'Guest-facing hosting: arrivals, drinks-of-choice memory, table presence',
          'Household rhythm: coordinating with house managers, keeping service invisible',
          'Event polish: receiving lines, coursing announcements, the unhurried feel',
        ],
      },
      {
        heading: 'When it is worth it',
        body: [
          'Estate weeks with rotating guests, formal receptions above forty, and any stay where the host wants to be a guest. For a family of eight in a Hoʻolei townhome, it is probably not — and we will say so rather than sell it.',
        ],
      },
      {
        heading: 'How it is priced',
        body: [
          'Quoted per event or per day alongside the published staffing hourlys. No invented day rates appear on this site — the written quote carries the real number.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can a butler run the bar?',
        a: 'Within the same alcohol posture as everything else: client-supplied or licensed referral. The butler role does not change Maui County’s licensing rules.',
      },
      {
        q: 'Do you staff butlers for a full week?',
        a: 'Yes — multi-day estate service is quoted as a single engagement, usually paired with Stay Chef days for one coordinated household rhythm.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Estate events', secondaryHref: 'estate-events' },
    keywords: ['butler service Maui'],
  },
  {
    slug: 'services/kids-menus',
    category: 'service',
    parent: 'private-chef',
    title: 'Kid-Friendly Private Chef Maui — Early Plates, Real Food',
    h1: 'Kids eat at five. Adults eat at sunset. Both eat well.',
    meta: {
      description:
        'Kid-friendly private chef service on Maui: early kids’ plates, allergen-aware prep, and menus children actually eat — inside the same villa dinner service, no separate catering order.',
    },
    intro:
      'Maui’s villa stock sleeps big multigenerational groups, and the dinner problem is always the same: kids are hungry at five, adults want the sunset seating. The answer is one kitchen, two services.',
    sections: [
      {
        heading: 'How it works at the table',
        body: [
          'Kids’ plates land early — real food in smaller, faster forms: grilled fish with rice, pasta that is not from a jar, fruit that looks like dessert. Adults sit at golden hour. One chef, one quote, no separate kids’ catering order.',
        ],
      },
      {
        heading: 'Allergies and the eleven flags',
        body: [
          'Nut-free, dairy-free, and gluten-free kids’ tracks are routine, with separate prep for allergens. The dietary-flag system applies to children’s plates exactly as it does to the tasting menu.',
        ],
        links: [{ label: 'Dietary depth', href: 'services/dietary' }],
      },
      {
        heading: 'For the week-long stays',
        body: [
          'On Stay Chef weeks, kids’ food stops being a daily negotiation: breakfasts happen, lunches pack themselves into the beach cooler, and the early-dinner shift becomes the household rhythm.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do kids count in the per-guest price?',
        a: 'Kids’ plates are quoted honestly — usually as reduced-price lines within the same dinner, since portions and coursing differ. The quote shows the split rather than charging adult rates for nuggets.',
      },
      {
        q: 'Can you handle a severe allergy with kids in the house?',
        a: 'Yes — flagged allergies get separate prep surfaces, dedicated utensils, and a written plan in the quote. Tell us the allergy at inquiry, not at the table.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Family reunions', secondaryHref: 'occasions/family-reunion' },
    keywords: ['kid-friendly private chef Maui'],
  },
  {
    slug: 'services/dietary',
    category: 'service',
    parent: 'private-chef',
    title: 'Vegan & Gluten-Free Private Chef Maui — Eleven Flags, One Kitchen',
    h1: 'Dietary depth is table stakes on Maui. We treat it like infrastructure.',
    meta: {
      description:
        'Dietary-accommodating private chef on Maui: eleven flags from vegan to kosher-style, separate allergen prep, menus written around the restriction instead of subtracting from it.',
    },
    intro:
      'Every serious Maui chef claims gluten-free and vegan competence. The difference between a claim and a system: eleven labeled flags, separate allergen prep, and menus written around the restriction rather than stripped down to it.',
    sections: [
      {
        heading: 'The eleven flags',
        list: [
          'Vegetarian · Vegan · Gluten-Free · Halal · Kosher-style · Dairy-Free',
          'Nut-Free · Keto · Pescatarian · Low-Sodium · Diabetic-Friendly',
        ],
      },
      {
        heading: 'How a flagged menu is built',
        body: [
          'The flag is collected at inquiry, the menu is designed around it, and the quote names the accommodation in writing. Allergens get separate prep surfaces and dedicated utensils; celiac-level gluten-free is treated as a protocol, not a preference.',
        ],
      },
      {
        heading: 'Why Maui makes this easy',
        body: [
          'Upcountry’s farm belt, canoe crops, and day-boat fish mean the island’s raw material already leans plant-forward and gluten-light. A vegan tasting menu here is not a compromise menu — it is taro, ʻulu, breadfruit, and lilikoi being themselves.',
        ],
        links: [{ label: 'The canoe-crops menu', href: 'menus/canoe-crops-island' }],
      },
    ],
    faq: [
      {
        q: 'Can you run mixed diets at one table?',
        a: 'Yes — a keto guest, a vegan guest, and a celiac guest at the same dinner is routine. Each flagged plate is coursed to match the table, so nobody eats a visibly lesser meal.',
      },
      {
        q: 'Do you charge extra for dietary accommodation?',
        a: 'No surcharge for the flag itself. Ingredient cost differences land where they honestly land — inside groceries at cost, with receipts.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Dietary guide', secondaryHref: 'guides/dietary' },
    keywords: ['vegan gluten-free private chef Maui'],
  },
  {
    slug: 'services/grocery-provisioning',
    category: 'service',
    parent: 'services/vacation-chef',
    title: 'Villa Grocery Stocking Maui — Arrive to a Full Fridge',
    h1: 'Land at four. Dinner ingredients already home.',
    meta: {
      description:
        'Villa grocery stocking on Maui: arrival-day provisioning to your list or ours, Maui-farm-first sourcing, billed at cost with receipts. Pairs with arrival-night dinner service.',
    },
    intro:
      'The first vacation day should not end at a big-box store in Kahului. Arrival provisioning stocks the villa before you land — your list or a chef-written one — billed at cost with receipts, never marked up.',
    sections: [
      {
        heading: 'What gets stocked',
        list: [
          'Breakfast and snack staples, coffee, fruit, kids’ supplies',
          'Beach-cooler goods and grill-ready proteins',
          'Pantry basics the rental never actually has',
          'Your bottles — alcohol is client-supplied; we shop it on your list',
        ],
      },
      {
        heading: 'Where we shop',
        body: [
          'Maui farmers and fishers first, Upcountry growers where the season allows, island markets for the rest. Hawaiʻi grocery prices run 31–53% above the mainland — receipts make that visible instead of surprising.',
        ],
      },
      {
        heading: 'How it pairs with service',
        body: [
          'Provisioning plus an arrival-night dinner is the classic first-day package: the fridge fills itself while you are at the beach, and dinner appears at sunset without anyone leaving the house.',
        ],
        links: [{ label: 'Vacation chef service', href: 'services/vacation-chef' }],
      },
    ],
    faq: [
      {
        q: 'What does a provisioning run cost?',
        a: 'Groceries at cost with receipts plus a shopping-and-stocking labor line written into the quote. There is no percentage markup on food — ever.',
      },
      {
        q: 'Can you stock before a Christmas-week arrival?',
        a: 'Yes, and December 22–January 1 is the busiest provisioning window of the year. Book early; the written quote holds the slot.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Stay Chef days', secondaryHref: 'stay-chef' },
    keywords: ['villa grocery stocking Maui'],
  },
  {
    slug: 'services/brunch-service',
    category: 'service',
    parent: 'private-chef',
    title: 'Brunch Chef Maui — Villa Brunches and Bridal Mornings',
    h1: 'The morning meal, taken as seriously as dinner.',
    meta: {
      description:
        'Private brunch chef on Maui: villa brunches, bridal-morning spreads, and recovery-style late mornings. Per-guest pricing within published lines, staffed service available.',
    },
    intro:
      'Brunch on Maui is an underserved meal: the villa is perfect for it, the light is kind, and nobody wants to drive to a restaurant line. A brunch chef brings the spread to the lānai — including the bridal-morning and recovery-brunch formats the wedding week runs on.',
    sections: [
      {
        heading: 'The formats',
        list: [
          'Villa brunch — the slow late-morning spread for the whole house',
          'Bridal morning — feeding the getting-ready hours without chaos',
          'Recovery brunch — the wedding week’s day-after meal, 10–40 guests',
        ],
        links: [{ label: 'Recovery brunch', href: 'weddings/recovery-brunch' }],
      },
      {
        heading: 'What lands on the table',
        body: [
          'Island fruit worth photographing, ʻulu-hash and egg formats, malasada-adjacent pastries done in-house, proper coffee, and lilikoi everything where it belongs. Menus flex to dietary flags like every other service.',
        ],
      },
      {
        heading: 'Pricing',
        body: [
          'Brunch sits inside the published per-guest lines with staffing at the standard $55/$75 hourlys when the group size calls for service. The written quote carries the real numbers for your headcount.',
        ],
      },
    ],
    faq: [
      {
        q: 'What time can brunch service start?',
        a: 'Late morning is the natural window — service typically lands between nine and noon, earlier by arrangement for bridal mornings with a ceremony clock.',
      },
      {
        q: 'Can brunch be fully plant-based?',
        a: 'Yes — plant-based brunch is one of the strongest menus in the set: island fruit, taro-based dishes, and coconut everything are already most of the way there.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Breakfast & brunch menu', secondaryHref: 'menus/breakfast-and-brunch' },
    keywords: ['brunch chef Maui'],
  },
];

/* ================= LOCATIONS (10) ================= */
const locations: ContentRecord[] = [
  {
    slug: 'locations',
    category: 'location',
    title: 'Where We Cook on Maui — Service Areas & Zones',
    h1: 'Where we cook.',
    meta: {
      description:
        'Maui service areas: Wailea–Mākena and Kāʻanapali–Kapalua base zones, Upcountry travel from $75, Pāʻia and Haʻikū quoted at inquiry, Hāna mention-only. Real drive logic, honest zones.',
    },
    intro:
      'Maui cooks in three zones. The resort corridors are base-zone; Upcountry carries a published travel line; the North Shore is quoted at inquiry with the reason attached.',
    sections: [
      {
        heading: 'Wailea–Mākena',
        body: [
          'The resort corridor. Estate kitchens built for service, villa stock from Wailea Beach Villas to Mākena’s trophy properties, and the island’s driest, calmest golden hour. Base zone — no travel line.',
        ],
        links: [
          { label: 'Private chef Wailea', href: 'locations/wailea' },
          { label: 'Private chef Mākena', href: 'locations/makena' },
          { label: 'Private chef Kīhei', href: 'locations/kihei' },
        ],
      },
      {
        heading: 'Kāʻanapali–Kapalua',
        body: [
          'West Maui’s operating present: the resort strip, the Honua Kai–class condo belt, and the Kapalua ridge villas. Base zone. Lahaina town itself is served as an informational page — respectfully, not as a dining destination.',
        ],
        links: [
          { label: 'Private chef Kāʻanapali', href: 'locations/kaanapali' },
          { label: 'Private chef Kapalua', href: 'locations/kapalua' },
          { label: 'Nāpili–Honokōwai–Kahana', href: 'locations/napili-honokowai-kahana' },
        ],
      },
      {
        heading: 'Upcountry & North Shore',
        body: [
          'Kula, Makawao, Pāʻia, Haʻikū — cooler air, real farms, longer drives. Upcountry carries travel from $75; Pāʻia and Haʻikū are quoted at inquiry, and we tell you why. Hāna, two-plus hours each way, is mention-only.',
        ],
        links: [
          { label: 'Kula & Upcountry', href: 'locations/kula-upcountry' },
          { label: 'Pāʻia & the North Shore', href: 'locations/paia' },
          { label: 'Travel zones, priced', href: 'pricing/travel-zones' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Coverage map', secondaryHref: 'coverage' },
    keywords: ['private chef Maui areas served'],
  },
  {
    slug: 'locations/wailea',
    category: 'location',
    parent: 'locations',
    title: 'Private Chef Wailea — Villa Dinners from $150/Guest',
    h1: 'Private chef Wailea.',
    meta: {
      description:
        'Private chef in Wailea: signature villa dinners $150–$250 a guest, Stay Chef from $1,050 a day, wedding-week service across the Four Seasons-to-Mākena corridor. Base zone, no travel fee.',
      ogImage: '/img/maui/loc-wailea.jpg',
    },
    intro:
      'Wailea is the highest-end corridor in Hawaiʻi — hotel rates from $800–$1,000+ a night, villas at $1,200–$2,995 — and it is our home turf: base zone, no travel line, and kitchens that were built to be cooked in.',
    sections: [
      {
        heading: 'The Wailea table',
        media: { src: '/img/maui/loc-wailea.jpg', alt: 'Wailea villa lānai at golden hour, set table, infinity edge glimpse', ratio: '3/2' },
        body: [
          'The stock here is exactly what a private chef wants: Wailea Beach Villas’ 2,500-square-foot residences, Hoʻolei townhomes, the Andaz villas, Makena Surf. Full kitchens, big lānai tables, and a sunset that does half the hosting.',
        ],
      },
      {
        heading: 'What gets booked here',
        list: [
          'Arrival-night signature dinners, $150–$250 a guest',
          'Stay Chef weeks from $1,050 a day — the corridor’s signature use',
          'Wedding weeks anchored at the Four Seasons, Grand Wailea, Andaz, and Fairmont venue cluster',
          'Date nights from $500 for the honeymoon floor',
        ],
        links: [
          { label: 'Stay Chef Wailea', href: 'locations/wailea/stay-chef' },
          { label: 'Wedding catering Wailea', href: 'locations/wailea/wedding-catering' },
        ],
      },
      {
        heading: 'Logistics',
        body: [
          'Base zone — no travel fee. Shopping happens same-day in South Maui; resort-residence access is coordinated with your villa manager or concierge. Wailea stays calmest at golden hour, which is when dinner should happen anyway.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do you serve the Wailea resorts themselves?',
        a: 'We serve residences and villas with real kitchens — Wailea Beach Villas, Hoʻolei, the Andaz residences. Hotel rooms and suites without kitchens are declined per the kitchen gate.',
      },
      {
        q: 'What does a private chef dinner in Wailea cost?',
        a: 'Signature dinners $150–$250 a guest, groceries inside the band, 20% service and GET up to 4.7120% on their own lines. No travel fee — Wailea is base zone.',
      },
      {
        q: 'Can you cater a wedding week based in Wailea?',
        a: 'Yes — Wailea is the wedding week’s strongest corridor: welcome dinner at the villa, reception on an estate lawn, recovery brunch the morning after. One contract covers the week.',
        links: [{ label: 'The wedding week', href: '/maui/weddings/wedding-week' }],
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Wailea wedding catering', secondaryHref: 'locations/wailea/wedding-catering' },
    keywords: ['private chef Wailea'],
  },
  {
    slug: 'locations/makena',
    category: 'location',
    parent: 'locations',
    title: 'Private Chef Mākena — Estate Dinners & Venue Kitchens',
    h1: 'Private chef Mākena.',
    meta: {
      description:
        'Private chef in Mākena: trophy-estate dinners, Kukahiko Estate’s caterer-built venue kitchen, and Maui’s driest golden hour. Signature dinners $150–$250 a guest; base zone.',
      ogImage: '/img/maui/loc-makena.jpg',
    },
    intro:
      'Mākena is where Maui keeps its trophy estates — properties in the $6–32M range that function as private micro-resorts — plus Kukahiko Estate and Makena Cove, two of the island’s most-booked wedding ground. Base zone, driest microclimate on the island.',
    sections: [
      {
        heading: 'The Mākena table',
        media: { src: '/img/maui/loc-makena.jpg', alt: 'Mākena lava rock meeting sand at golden hour, styled table near shore', ratio: '3/2' },
        body: [
          'Mākena’s estates were built with catering in mind: big working kitchens, covered lānai, lava-rock edges meeting the sand. The light here is the island’s most reliable — leeward, dry, and golden right on schedule.',
        ],
      },
      {
        heading: 'Kukahiko Estate and the venue kitchen',
        body: [
          'Kukahiko’s venue kitchen was purpose-built for outside caterers — the estate’s own line is that caterers love working in it, and it is true. Ceremonies happen at the water; receptions happen on the lawn; the kitchen makes plated service for up to 40 guests straightforward. Makena Cove ceremonies run under the DLNR beach permit: roughly 20 people, no structures, two hours.',
        ],
        links: [{ label: 'Mākena estate weddings', href: 'locations/makena/estate-wedding' }],
      },
      {
        heading: 'What gets booked here',
        list: [
          'Estate dinners and chef’s-table evenings, $150–$400+ a guest by tier',
          'Estate weddings and receptions on the Kukahiko pattern',
          'Date nights from $500 on very private lānai',
          'Stay Chef weeks for estate buyouts, from $1,050 a day',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cater at Kukahiko Estate?',
        a: 'Yes — it is one of the best outside-caterer venues on Maui precisely because its kitchen was built for the purpose. Access runs through the estate’s planner channel; we coordinate with your planner.',
      },
      {
        q: 'Is there a travel fee to Mākena?',
        a: 'No — Mākena is base zone, minutes past Wailea. The published travel lines start at Upcountry.',
      },
      {
        q: 'Can we do dinner on the beach at Mākena?',
        a: 'Not as a catered setup — state beach rules ban structures and cap groups at roughly 20 under the Wiki permit. What works: the ceremony or a toast on the sand, dinner steps away on private ground.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Mākena estate weddings', secondaryHref: 'locations/makena/estate-wedding' },
    keywords: ['private chef Makena'],
  },
  {
    slug: 'locations/kihei',
    category: 'location',
    parent: 'locations',
    title: 'Private Chef Kīhei — South Maui’s Volume Counterweight',
    h1: 'Private chef Kīhei.',
    meta: {
      description:
        'Private chef in Kīhei: the same published Maui rate card — $150–$250 a guest — serving South Maui’s largest condo and vacation-rental stock. Base zone, real kitchens required.',
    },
    intro:
      'Kīhei holds South Maui’s largest condo and vacation-rental stock — the volume counterweight to Wailea’s luxury. Same rate card, same standard: $150–$250 a guest, and the kitchen gate applies honestly.',
    sections: [
      {
        heading: 'The Kīhei table',
        body: [
          'Kīhei’s strength is inventory: blocks of condos and rental homes with full kitchens, big family groups, and week-long stays that suit Stay Chef days and prep sessions. Kalama Park evenings and Sugar Beach sunsets supply the atmosphere; we supply the dinner.',
        ],
      },
      {
        heading: 'What gets booked here',
        list: [
          'Family-style villa dinners for 8–14, $150–$250 a guest',
          'Vacation-week prep sessions and provisioning runs',
          'Event catering toward Sugar Beach Events and the north-Kīhei venues',
          'Stay Chef days at $1,050 for groups who did the math against restaurant weeks',
        ],
        links: [{ label: 'Catering Kīhei', href: 'locations/kihei/catering' }],
      },
      {
        heading: 'Logistics',
        body: [
          'Base zone. The honest note: Kīhei condo kitchens range from full chef’s kitchens to galley two-burners. Send a photo with your inquiry and we will tell you plainly which you have — the quote reflects reality, not optimism.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is Kīhei cheaper than Wailea for a private chef?',
        a: 'The rate card is identical — $150–$250 a guest island-wide in the base zones. What changes is the house: Kīhei’s value-tier condos put bigger groups within reach of the same service.',
      },
      {
        q: 'Can you cater an event at Sugar Beach?',
        a: 'Yes — north-Kīhei venue events are within the staffed 10–75 range, with rentals and load-in coordinated in the written quote.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Catering Kīhei', secondaryHref: 'locations/kihei/catering' },
    keywords: ['private chef Kihei'],
  },
  {
    slug: 'locations/kaanapali',
    category: 'location',
    parent: 'locations',
    title: 'Private Chef Kāʻanapali — West Maui’s Operating Present',
    h1: 'Private chef Kāʻanapali.',
    meta: {
      description:
        'Private chef in Kāʻanapali: resort-strip villas and Honua Kai–class condo kitchens, family reunions, and wedding-week service across the Royal Lahaina-to-Hyatt corridor. Base zone.',
      ogImage: '/img/maui/loc-kaanapali.jpg',
    },
    intro:
      'Kāʻanapali is where West Maui demand consolidated after 2023 — the resort strip, Whaler’s Village, and the Honua Kai–class condo-resort stock that houses half the island’s big family groups. Base zone, and West Maui inquiries are welcome: we work where we are welcomed.',
    sections: [
      {
        heading: 'The Kāʻanapali table',
        media: { src: '/img/maui/loc-kaanapali.jpg', alt: 'Kāʻanapali condo lānai at golden hour, table set for four', ratio: '3/2' },
        body: [
          'The corridor’s sweet spot is the condo-resort kitchen: Honua Kai and its neighbors ship with real ranges and big lānai, which turns a family reunion week into a series of dinners nobody has to drive to. The strip’s resorts handle ballrooms; we handle the kitchens.',
        ],
      },
      {
        heading: 'What gets booked here',
        list: [
          'Family-reunion dinners and week-long Stay Chef service',
          'Vacation-chef rhythms for condo groups of 6–14',
          'Wedding-week meals along the Royal Lahaina–Sheraton–Hyatt venue line',
          'Staffed villa catering, 10–75 guests',
        ],
        links: [
          { label: 'Vacation chef Kāʻanapali', href: 'locations/kaanapali/vacation-chef' },
          { label: 'Catering Kāʻanapali', href: 'locations/kaanapali/catering' },
          { label: 'Family reunions', href: 'locations/kaanapali/family-reunion' },
        ],
      },
      {
        heading: 'A note on West Maui',
        body: [
          'We support West Maui’s recovery the way the community asks: book direct, tip well, tread gently, stay in the designated areas. Our West Maui work centers the open resort corridors — Kāʻanapali north to Kapalua — and we buy from Maui farmers, fishers, and ranchers first.',
        ],
        links: [{ label: 'Visiting West Maui respectfully', href: 'guides/west-maui-visitor-note' }],
      },
    ],
    faq: [
      {
        q: 'Is West Maui open for private chef service?',
        a: 'Yes — the Kāʻanapali-to-Kapalua corridor is open and welcoming visitors; community leaders explicitly encourage respectful tourism. We serve the resort zones and follow the community’s guidance on where visitors belong.',
      },
      {
        q: 'Can you cook in a Honua Kai condo?',
        a: 'Yes — the condo-resort stock here has real kitchens, which is why Kāʻanapali reunion groups book so well. Send the unit type with your inquiry and we will confirm the kitchen before quoting.',
      },
      {
        q: 'Is there a travel fee?',
        a: 'No — Kāʻanapali is base zone, as is Kapalua just north.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Vacation chef Kāʻanapali', secondaryHref: 'locations/kaanapali/vacation-chef' },
    keywords: ['private chef Kaanapali'],
  },
  {
    slug: 'locations/kapalua',
    category: 'location',
    parent: 'locations',
    title: 'Private Chef Kapalua — Ridge Villas & Destination Weddings',
    h1: 'Private chef Kapalua.',
    meta: {
      description:
        'Private chef in Kapalua: ridge and bay villa dinners, Stay Chef weeks from $1,050 a day, and wedding catering across the Ritz-Carlton–Montage–Merriman’s corridor. Base zone.',
      ogImage: '/img/maui/loc-kapalua.jpg',
    },
    intro:
      'Kapalua is Maui’s quietest luxury: the Ritz-Carlton’s 54-acre destination-wedding ground, Montage residences, and the Ridge, Bay, and Golf villa stock climbing through the ironwoods. Base zone — no travel fee this far north.',
    sections: [
      {
        heading: 'The Kapalua table',
        media: { src: '/img/maui/loc-kapalua.jpg', alt: 'Kapalua ridge villa at dusk, ironwood silhouettes, warm interior light', ratio: '3/2' },
        body: [
          'Ridge villas at dusk are the aesthetic argument for the whole service: cooler air off the channel, ironwood silhouettes, and a kitchen that turns dinner into the evening’s plan. Kapalua draws the celebration-trip crowd — anniversaries, milestone birthdays, destination weddings.',
        ],
      },
      {
        heading: 'What gets booked here',
        list: [
          'Stay Chef weeks in the Ridge and Bay villa stock, from $1,050 a day',
          'Wedding weeks anchored at the Ritz-Carlton, Montage, Merriman’s, and the Cliff House',
          'Signature dinners $150–$250 a guest; date nights from $500',
          'Celebration dinners that do not require leaving the ridge',
        ],
        links: [
          { label: 'Wedding catering Kapalua', href: 'locations/kapalua/wedding-catering' },
          { label: 'Stay Chef Kapalua', href: 'locations/kapalua/stay-chef' },
        ],
      },
      {
        heading: 'Logistics',
        body: [
          'Base zone despite the distance — Kapalua’s villa stock is core to the service. Gated-community and resort access is coordinated with your villa manager. Winter brings the whales and the occasional north-shore swell watching between courses.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do you cater weddings at the Ritz-Carlton Kapalua?',
        a: 'Resort ballrooms run resort catering; where we fit is the villa- and estate-side of a Kapalua wedding week — welcome dinners, brunches, and receptions in residences and private venues. The wedding week page explains the split.',
        links: [{ label: 'Kapalua wedding venues', href: '/maui/weddings/venues/kapalua' }],
      },
      {
        q: 'Is Kapalua rainier than Wailea?',
        a: 'Slightly — it sits greener and gets passing showers, which is why it is so green. Dinner plans carry a weather backup; the villa lānai roof does the rest.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Kapalua weddings', secondaryHref: 'locations/kapalua/wedding-catering' },
    keywords: ['private chef Kapalua'],
  },
  {
    slug: 'locations/napili-honokowai-kahana',
    category: 'location',
    parent: 'locations/kaanapali',
    title: 'Private Chef Nāpili, Honokōwai & Kahana — The Condo Belt',
    h1: 'Private chef for the condo belt: Nāpili, Honokōwai, Kahana.',
    meta: {
      description:
        'Private chef across the Nāpili–Honokōwai–Kahana condo belt: dense vacation-rental stock, real kitchens, family groups. Signature dinners $150–$250 a guest; base zone.',
    },
    intro:
      'One page for three neighborhoods because the market treats them as one: the dense vacation-rental belt between Kāʻanapali and Kapalua — Mahana, Papakea, Paki Maui, Nohonani and their neighbors. Real kitchens, big family groups, base zone.',
    sections: [
      {
        heading: 'Why the belt books well',
        body: [
          'This corridor packs more kitchen-equipped rental units per mile than anywhere else on Maui. The booking pattern is consistent: a family of eight to twelve, a week-long stay, one dinner that becomes three. Per-guest math at $150–$250 usually beats splitting four restaurant checks.',
        ],
      },
      {
        heading: 'What gets booked here',
        list: [
          'Vacation-chef weeks built around condo kitchens',
          'Family-style signature dinners, $150–$250 a guest',
          'Provisioning runs timed to arrival day',
          'Small wedding-week meals for Nāpili Kai–area celebrations',
        ],
        links: [{ label: 'Vacation chef for the belt', href: 'locations/napili-honokowai-kahana/vacation-chef' }],
      },
      {
        heading: 'The honest note',
        body: [
          'Condo kitchens here vary from renovated chef-grade to original 1980s two-burner. A quick photo of the kitchen with your inquiry gets you a straight answer before any deposit moves.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do you serve all three neighborhoods separately?',
        a: 'Yes — one combined page because the service is identical across the belt: base zone, same rate card, same kitchen gate.',
      },
      {
        q: 'Can you cook for twelve in a condo kitchen?',
        a: 'Usually yes — twelve is routine with a full-size range and a bit of mise en place discipline. The kitchen photo at inquiry settles it in advance.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Vacation chef here', secondaryHref: 'locations/napili-honokowai-kahana/vacation-chef' },
    keywords: ['private chef Napili'],
  },
  {
    slug: 'locations/lahaina',
    category: 'location',
    parent: 'locations',
    title: 'Private Chef Lahaina — An Honest Note on West Maui',
    h1: 'Lahaina: a note before a sales pitch.',
    meta: {
      description:
        'Private chef service around Lahaina, honestly: the town is rebuilding, West Maui’s resort corridors from Kāʻanapali to Kapalua are open and welcoming, and we work where we are welcomed.',
    },
    intro:
      'Lahaina town is rebuilding after August 2023. This page exists because the search term persists — not because we market the town as a dining destination. Here is the honest picture and where we actually cook.',
    sections: [
      {
        heading: 'Where things stand',
        body: [
          'The August 2023 fire destroyed much of Lahaina town. Rebuilding is underway — a hundred homes back by late 2025 and counting — and West Maui’s visitor economy has consolidated into the open resort corridors north of the burn zone: Kāʻanapali, Honokōwai, Kahana, Nāpili, and Kapalua.',
          'Community guidance to visitors is consistent: come, stay in the designated areas, spend with local businesses, and treat the burn zone as what it is — someone’s neighborhood, not a sight.',
        ],
      },
      {
        heading: 'Where we cook',
        body: [
          'Our West Maui service centers the resort corridors: Kāʻanapali and the condo belt through Nāpili up to the Kapalua ridge. If your rental carries a Lahaina mailing address — much of Kāʻanapali does — that is base-zone service as normal.',
        ],
        links: [
          { label: 'Private chef Kāʻanapali', href: 'locations/kaanapali' },
          { label: 'Private chef Kapalua', href: 'locations/kapalua' },
        ],
      },
      {
        heading: 'Our posture',
        body: [
          'We buy from Maui farmers, fishers, and ranchers first. We book direct, tip well, and encourage guests to do the same. And we do not run imagery or copy that aestheticizes the fire zone — recovery is not a backdrop.',
        ],
        links: [{ label: 'Visiting West Maui respectfully', href: 'guides/west-maui-visitor-note' }],
      },
    ],
    faq: [
      {
        q: 'Is it okay to visit West Maui?',
        a: 'Yes — the resort corridors are open and community leaders welcome respectful visitors. Stay in designated areas, support local businesses, and give the rebuilding town its privacy.',
        links: [{ label: 'The full visitor note', href: '/maui/guides/west-maui-visitor-note' }],
      },
      {
        q: 'Do you serve addresses listed as “Lahaina”?',
        a: 'Most Kāʻanapali-to-Kapalua addresses carry a Lahaina mailing designation; that corridor is base-zone service. We do not market Lahaina town itself as a destination.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Kāʻanapali service', secondaryHref: 'locations/kaanapali' },
    keywords: ['private chef Lahaina Maui'],
  },
  {
    slug: 'locations/paia',
    category: 'location',
    parent: 'locations',
    title: 'Private Chef Pāʻia & the North Shore — Quoted at Inquiry',
    h1: 'Private chef Pāʻia and the North Shore.',
    meta: {
      description:
        'Private chef for Pāʻia, Haʻikū, and Maui’s North Shore: the Haiku Mill and wellness corridor, quoted at inquiry with honest drive-time logic. Retreat catering and estate dinners.',
    },
    intro:
      'The North Shore is different country: greener, wetter, forty-five to sixty minutes from the Wailea base. Pāʻia and Haʻikū are quoted at inquiry — not because we do not serve them, but because the drive and provisioning pattern deserves an honest line in the quote.',
    sections: [
      {
        heading: 'What the North Shore is for',
        body: [
          'Haiku Mill weddings, the wellness-retreat corridor, plantation-era estates, and the Mama’s Fish House gravitational field. The North Shore books retreats, estate events, and wedding weeks more than casual villa dinners — and those bigger formats absorb the logistics gracefully.',
        ],
        links: [{ label: 'North Shore retreat catering', href: 'locations/paia/retreat-catering' }],
      },
      {
        heading: 'Why “quoted at inquiry”',
        body: [
          'A North Shore event means shopping in Kahului, an hour of drive each way, and weather that changes faster than the leeward side’s. Rather than hide that in a fee, the written quote names it: the travel line, the provisioning plan, the rain backup.',
        ],
      },
      {
        heading: 'Haiku Mill and the vendor lists',
        body: [
          'Haiku Mill runs a preferred-vendor list with a $650 outside-vendor fee — we tell you that before you sign, and we work with your planner on the list. The venue’s overgrown-ruin garden is worth every logistic.',
        ],
        links: [{ label: 'Upcountry & North Shore venues', href: 'weddings/venues/upcountry-north-shore' }],
      },
    ],
    faq: [
      {
        q: 'Do you charge extra for Pāʻia or Haʻikū?',
        a: 'They are quoted at inquiry rather than carrying a flat published line — the drive and provisioning pattern varies by event. The written quote names the real number and the reason.',
      },
      {
        q: 'Can you cater a Haiku Mill wedding?',
        a: 'Yes, through the venue’s vendor-list process with your planner — including the $650 outside-vendor fee if we are not yet on it, stated up front rather than discovered later.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Travel zones', secondaryHref: 'pricing/travel-zones' },
    keywords: ['private chef Paia'],
  },
  {
    slug: 'locations/kula-upcountry',
    category: 'location',
    parent: 'locations',
    title: 'Private Chef Kula & Upcountry Maui — Travel from $75',
    h1: 'Private chef Kula and Upcountry.',
    meta: {
      description:
        'Private chef for Kula, Makawao, and Upcountry Maui: estate dinners, Hui Noʻeau–class weddings, and farm-belt sourcing at altitude. Travel from $75, published.',
    },
    intro:
      'Upcountry is where Maui’s food actually comes from — the Kula farm belt, cooler air, bi-coastal views — and it carries the network’s clearest travel line: from $75, published, no mystery.',
    sections: [
      {
        heading: 'The Upcountry table',
        body: [
          'Estate houses above the cloud line, fireplaces nobody expects in Hawaiʻi, and produce that was in the ground that morning. Upcountry dinners lean into the farm belt: Kula greens, onions, and the canoe crops at their source.',
        ],
      },
      {
        heading: 'What gets booked here',
        list: [
          'Estate dinners and weekend-house service, $150–$250 a guest',
          'Hui Noʻeau–class and private-estate weddings',
          'Retreat catering for Upcountry properties',
          'Sourcing-forward dinners where the farm is the point',
        ],
        links: [{ label: 'Upcountry wedding catering', href: 'locations/kula-upcountry/wedding-catering' }],
      },
      {
        heading: 'The travel line, honestly',
        body: [
          'Travel to Kula, Makawao, and the Upcountry corridor runs from $75 — the drive from the South Maui base, the cooler, the extra provisioning stop. It is one published line in the quote, not a surprise.',
        ],
        links: [{ label: 'All travel zones', href: 'pricing/travel-zones' }],
      },
    ],
    faq: [
      {
        q: 'Why is there a travel fee to Upcountry?',
        a: 'Time and temperature: the drive from the Wailea base plus cold-chain discipline for the day’s fish and produce. From $75, published on the rate card, always on its own line.',
      },
      {
        q: 'Is Upcountry colder at dinner?',
        a: 'Yes — delightfully so. At 2,000–3,000 feet, evenings can drop into the low 60s; we plan hot-first coursing and can coordinate heaters with your rentals order.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Upcountry weddings', secondaryHref: 'locations/kula-upcountry/wedding-catering' },
    keywords: ['private chef Upcountry Maui', 'private chef Kula'],
  },
];

/* ================= SERVICE × LOCATION (14) ================= */
const serviceLocations: ContentRecord[] = [
  {
    slug: 'locations/wailea/stay-chef',
    category: 'location',
    parent: 'stay-chef',
    title: 'Stay Chef Wailea — A Chef for the Week, from $1,050/Day',
    h1: 'Stay Chef Wailea.',
    meta: {
      description:
        'Stay Chef weeks in Wailea from $1,050 a day: breakfast before the beach, provisioning while you are out, dinner at golden hour. Built for Wailea Beach Villas, Hoʻolei, and the Andaz residences.',
    },
    intro:
      'Wailea’s villa stock — Beach Villas, Hoʻolei, the Andaz residences, Makena Surf — is the Stay Chef product’s natural habitat: real kitchens, big tables, and weeks that deserve better than seven restaurant reservations.',
    sections: [
      {
        heading: 'The Wailea week, handled',
        body: [
          'From $1,050 a day plus groceries at cost: breakfast before the beach, the cooler packed while you are out, dinner timed to the sunset over Kahoʻolawe. One chef learns the household by day two; by day four the week runs itself.',
        ],
      },
      {
        heading: 'Why Wailea specifically',
        body: [
          'The residences here were designed around exactly this service — full chef’s kitchens, lānai dining, and concierge desks that know us. A $1,200–$2,995 nightly villa rate puts a $1,050 chef day in honest proportion: it is the upgrade the kitchen was built for.',
        ],
        links: [{ label: 'Private chef Wailea', href: 'locations/wailea' }],
      },
      {
        heading: 'Booking the week',
        list: [
          'Tell us the dates, the villa, and the household’s dietary flags',
          'We reply with a written quote — chef days, groceries at cost, every fee on its own line',
          '50% deposit locks the week; the quote is the confirmed total',
        ],
      },
    ],
    faq: [
      {
        q: 'What does a Stay Chef week in Wailea cost?',
        a: 'From $1,050 per chef day, so a seven-day week starts at $7,350 in chef labor plus groceries at cost with receipts, staffing extras where needed, 20% service, and GET — all written in the quote.',
      },
      {
        q: 'Can the chef coordinate with our villa concierge?',
        a: 'Yes — access, parking, and kitchen walkthroughs run through your villa manager or concierge desk as standard practice in Wailea.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Stay Chef cost anatomy', secondaryHref: 'pricing/stay-chef-cost' },
    keywords: ['stay chef Wailea', 'chef for a week Wailea'],
  },
  {
    slug: 'locations/wailea/wedding-catering',
    category: 'location',
    parent: 'weddings',
    title: 'Wedding Catering Wailea — The Resort Corridor, Outside the Ballroom',
    h1: 'Wedding catering in Wailea.',
    meta: {
      description:
        'Wedding catering in Wailea: the Four Seasons–Grand Wailea–Andaz–Fairmont corridor served villa- and estate-side — welcome dinners, receptions to 75, recovery brunches, from $150 a guest plus staffing.',
    },
    intro:
      'Wailea concentrates Maui’s densest wedding-venue cluster — Four Seasons, Grand Wailea, Andaz, Fairmont Kea Lani, Hotel Wailea — and the villa stock around them. We cater the estate and villa side of that week: the meals the resort ballroom does not own.',
    sections: [
      {
        heading: 'Where we fit in a Wailea wedding',
        body: [
          'Resort ballrooms run their own food and beverage. Our ground is everything around it: the welcome dinner at the family villa, the ceremony-adjacent pūpū hour on a private lawn, the reception at an estate, the recovery brunch the morning after. From $150 a guest plus staffing, one contract.',
        ],
        links: [{ label: 'Wailea–Mākena venues', href: 'weddings/venues/wailea-makena' }],
      },
      {
        heading: 'The numbers, against the corridor’s norms',
        body: [
          'Maui’s published catering norms run $80–$120 a head buffet and $120–$200 plated with 18–22% service charges; resort F&B minimums run $7,500–$15,000 per event with 23–25% service. Our lines start at $150 a guest with 20% service on its own line and no F&B minimum.',
        ],
      },
      {
        heading: 'Capacity and staffing',
        body: [
          'Receptions run 30–75 guests staffed — one server per 10–12 at $55/hr, sous chefs at $75/hr, four-hour floors. Over 75 is a written exception, quoted, never implied.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cater inside the Wailea resorts?',
        a: 'Resort ballrooms are the resorts’ own F&B territory. We cater villas, residences, estates, and private venues — which is where most Wailea wedding-week meals actually happen anyway.',
      },
      {
        q: 'What does a 60-guest Wailea reception cost with you?',
        a: 'From $150 a guest in food lines plus staffing, 20% service, and GET — a typical plated mid-band reception lands near $12,000 in food before those lines. The written quote carries the exact figure.',
        links: [{ label: 'Wedding cost on Maui', href: '/maui/weddings/wedding-cost' }],
      },
    ],
    cta: { label: 'Plan the week', href: 'weddings/wedding-week', secondaryLabel: 'Get a written quote', secondaryHref: 'quote' },
    keywords: ['wedding catering Wailea'],
  },
  {
    slug: 'locations/wailea/honeymoon-dinner',
    category: 'location',
    parent: 'services/honeymoon-dinners',
    title: 'Honeymoon Dinner Wailea — A Private Chef for Two',
    h1: 'The honeymoon dinner, Wailea style.',
    meta: {
      description:
        'Private honeymoon dinners in Wailea from $500: a coursed dinner for two on your villa lānai, timed to the sunset, kitchen left cleaner than we found it.',
    },
    intro:
      'Wailea is where Maui honeymooners land, and the best dinner of the trip is the one you do not drive to: a coursed evening for two on your own lānai, from $500, timed to the light.',
    sections: [
      {
        heading: 'The evening',
        body: [
          'A short menu call before you fly. The chef shops that morning, cooks in the villa kitchen, serves each course as the sky does its work over Kahoʻolawe, and leaves the kitchen clean. Nothing about the evening requires shoes.',
        ],
      },
      {
        heading: 'What from $500 includes',
        list: [
          'Menu design around your preferences and dietary flags',
          'Same-day shopping, groceries inside the format',
          'Multi-course plated service for two',
          'Full cleanup — the kitchen resets while you finish the bottle you brought',
        ],
      },
      {
        heading: 'A small upgrade worth knowing',
        body: [
          'Couples staying a full Wailea week often pair the date night with an arrival dinner for the family and a mid-week brunch. One written quote, one chef who already knows the kitchen by night two.',
        ],
        links: [{ label: 'Honeymoon dinners, the full picture', href: 'services/honeymoon-dinners' }],
      },
    ],
    faq: [
      {
        q: 'Which Wailea properties work for a honeymoon dinner?',
        a: 'Any residence or villa with a real kitchen — Wailea Beach Villas, Hoʻolei, the Andaz residences, Hotel Wailea’s suites with kitchens. Hotel rooms without kitchens are declined.',
      },
      {
        q: 'Can you time dinner to the sunset?',
        a: 'That is the default. We set first course roughly at golden hour; the exact clock shifts with the season and your vows-to-dinner gap if it is a wedding night.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Date night format', secondaryHref: 'services/date-night' },
    keywords: ['honeymoon dinner Wailea'],
  },
  {
    slug: 'locations/makena/estate-wedding',
    category: 'location',
    parent: 'weddings/estate-wedding',
    title: 'Mākena Estate Wedding Catering — Kukahiko & the Trophy Coast',
    h1: 'The Mākena estate wedding.',
    meta: {
      description:
        'Estate wedding catering in Mākena: Kukahiko Estate’s caterer-built kitchen, Makena Cove ceremonies under the DLNR cap, receptions to 75 from $150 a guest plus staffing.',
    },
    intro:
      'Mākena is the sharpest service-meets-location play on Maui: Kukahiko Estate’s venue kitchen was built for outside caterers, the DLNR cap pushes receptions off the sand, and the estates here run like micro-resorts. This is the ground the wedding week was designed for.',
    sections: [
      {
        heading: 'The Kukahiko pattern',
        body: [
          'Kukahiko Estate hosts 2–40 guest celebrations with a venue kitchen its operators built specifically so outside caterers can work properly. Ceremony at the water, cocktails on the lawn, plated dinner under the first stars — the estate’s layout is the wedding week compressed into one address.',
        ],
      },
      {
        heading: 'The beach-permit reality',
        body: [
          'Makena Cove ceremonies run under the state Wiki permit: roughly 20 people including vendors, no arches or chairs, two hours. The honest plan — and the one Maui planners will give you — is the ceremony on the sand and the reception on private ground. That reception is our job.',
        ],
        links: [{ label: 'Beach ceremony, estate reception', href: 'weddings/beach-ceremony-reception' }],
      },
      {
        heading: 'The numbers',
        body: [
          'From $150 a guest in food lines plus staffing at $55/$75 hourlys; 20% service and GET up to 4.7120% on their own lines; no venue F&B minimum because the venue is yours. A full Mākena week — welcome dinner through recovery brunch — writes as one quote.',
        ],
      },
    ],
    faq: [
      {
        q: 'How do we book catering at Kukahiko Estate?',
        a: 'Through your planner and the estate’s coordination process — Kukahiko books via its planner channel, and we work inside that. Tell us your planner and date; we handle the kitchen side.',
        links: [{ label: 'The planner channel', href: '/maui/weddings/planner-channel' }],
      },
      {
        q: 'Can you serve a 40-guest plated reception at Kukahiko?',
        a: 'Yes — that is exactly the venue’s designed capacity, and the kitchen supports plated coursing for it. Staffing runs about four servers plus a sous at the published hourlys.',
      },
    ],
    cta: { label: 'Plan the week', href: 'weddings/wedding-week', secondaryLabel: 'Get a written quote', secondaryHref: 'quote' },
    keywords: ['Makena estate wedding catering'],
  },
  {
    slug: 'locations/makena/date-night',
    category: 'location',
    parent: 'services/date-night',
    title: 'Private Dinner Chef Mākena — Date Nights from $500',
    h1: 'Date night, Mākena edition.',
    meta: {
      description:
        'Private date-night dinners in Mākena from $500: two people, a trophy-estate lānai, Maui’s driest sunset, and a kitchen left clean.',
    },
    intro:
      'Mākena’s evenings are the island’s most reliable — driest microclimate, longest golden light, and estates private enough that the loudest sound is the ocean. Date night here is from $500 for two.',
    sections: [
      {
        heading: 'The evening on the lava coast',
        body: [
          'The chef arrives as the light turns, cooks in the estate kitchen, and serves on whichever lānai faces the sunset. Mākena’s dryness means the weather-backup conversation is usually theoretical — but every quote still names one.',
        ],
      },
      {
        heading: 'What is included',
        list: [
          'Menu design and same-day South Maui shopping',
          'Multi-course plated service for two',
          'Candles, timing, and a kitchen left cleaner than we found it',
          'The fee stack itemized: 20% service, GET up to 4.7120%, their own lines',
        ],
      },
    ],
    faq: [
      {
        q: 'Can a Mākena date night follow a Makena Cove proposal?',
        a: 'It is one of our favorite bookings — the cove for the question under the permit rules, the estate for dinner. Tell us the plan and we time the courses to your photographer’s light.',
      },
      {
        q: 'Is there a travel fee to Mākena?',
        a: 'No — Mākena is base zone.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Private chef Mākena', secondaryHref: 'locations/makena' },
    keywords: ['private dinner chef Makena'],
  },
  {
    slug: 'locations/kaanapali/catering',
    category: 'location',
    parent: 'catering',
    title: 'Catering Kāʻanapali — Resort-Strip Events, Staffed',
    h1: 'Catering in Kāʻanapali.',
    meta: {
      description:
        'Catering in Kāʻanapali: staffed events for 10–75 guests across the resort strip and Honua Kai–class condo stock — reunions, wedding-week meals, villa receptions, from $150 a guest plus staffing.',
    },
    intro:
      'Kāʻanapali’s event stock is condos, villas, and resort-adjacent private space — which suits an outside caterer perfectly. Staffed service for 10–75 guests, one server per 10–12, from $150 a guest for event menus.',
    sections: [
      {
        heading: 'What we cater here',
        list: [
          'Family-reunion dinners and villa receptions',
          'Wedding-week meals along the Royal Lahaina–Sheraton–Hyatt line',
          'Condo-resort buyout dinners in the Honua Kai pattern',
          'Pūpū and grazing formats for pool-adjacent evenings',
        ],
      },
      {
        heading: 'Logistics on the strip',
        body: [
          'Load-in runs through your property manager or the venue’s event office; condo-resort freight and parking are routine for our crews. Rentals — tables, linens, glassware — coordinate into the same written quote as the food.',
        ],
      },
      {
        heading: 'The Kāʻanapali note',
        body: [
          'West Maui is open and welcoming visitors; we serve the corridor with the recovery posture the community asks for — book direct, spend local, tread gently.',
        ],
        links: [{ label: 'Catering across Maui', href: 'catering' }],
      },
    ],
    faq: [
      {
        q: 'Can you cater a 50-person reception at a Kāʻanapali condo-resort?',
        a: 'Yes, subject to the property’s event rules — most require coordination with their management, which we handle. 50 guests means roughly five servers at $55/hr plus the sous line, all itemized.',
      },
      {
        q: 'What is the per-guest cost for a buffet in Kāʻanapali?',
        a: 'Event menus start from $150 a guest plus staffing, with premium buffet and family-style formats inside the published wedding-week lines. The quote shows the full stack.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Family reunions here', secondaryHref: 'locations/kaanapali/family-reunion' },
    keywords: ['catering Kaanapali'],
  },
  {
    slug: 'locations/kaanapali/vacation-chef',
    category: 'location',
    parent: 'services/vacation-chef',
    title: 'Vacation Chef Kāʻanapali — The Condo-Resort Week',
    h1: 'A vacation chef for the Kāʻanapali week.',
    meta: {
      description:
        'Vacation chef service in Kāʻanapali: arrival dinners, Stay Chef days from $1,050, and provisioning runs for the Honua Kai–class condo-resort kitchens. Written quotes, base zone.',
    },
    intro:
      'The condo-resort kitchen is Kāʻanapali’s superpower: full ranges, big counters, lānai seating for the whole family. A vacation chef turns that kitchen from a coffee station into the best restaurant on the strip.',
    sections: [
      {
        heading: 'The weekly rhythm',
        body: [
          'Arrival-night dinner while everyone decompresses. A provisioning run that kills the Costco trip. Two or three Stay Chef days mid-week at $1,050 a day. A final signature dinner the night before the flight home. That is the pattern, and it prices out better than most families expect against seven nights of resort restaurants.',
        ],
      },
      {
        heading: 'Built for big groups',
        body: [
          'Kāʻanapali groups skew large — three generations, eight to fourteen people, multiple units. One chef across the week beats coordinating four tables at six pm; per-guest math at $150–$250 makes the case in one line of arithmetic.',
        ],
        links: [{ label: 'Private chef Kāʻanapali', href: 'locations/kaanapali' }],
      },
      {
        heading: 'Practical notes',
        list: [
          'Kitchens confirmed by photo at inquiry — most here pass easily',
          'Parking and access coordinated with the property',
          'Kids’ early plates and dietary flags handled inside the same service',
        ],
      },
    ],
    faq: [
      {
        q: 'Is a vacation chef worth it for a condo stay?',
        a: 'The condo-resort kitchens here are real kitchens — that is what makes the math work. Groups of eight or more routinely spend less per person than restaurant weeks, with nobody driving or splitting checks.',
      },
      {
        q: 'Can you provision before our arrival?',
        a: 'Yes — arrival-day stocking is a standard line, groceries at cost with receipts. Land, beach, dinner.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Vacation chef service', secondaryHref: 'services/vacation-chef' },
    keywords: ['vacation chef Kaanapali'],
  },
  {
    slug: 'locations/kaanapali/family-reunion',
    category: 'location',
    parent: 'occasions/family-reunion',
    title: 'Family Reunion Catering Kāʻanapali — One Table for Everyone',
    h1: 'The reunion dinner, Kāʻanapali style.',
    meta: {
      description:
        'Family reunion catering in Kāʻanapali: multigenerational groups of 10–30, family-style service, kids’ early plates, from $150 a guest. One kitchen, one table, no split checks.',
    },
    intro:
      'Kāʻanapali is reunion country: three generations in adjoining condos, a week on the calendar, and one night that needs to hold everyone. Family-style service from $150 a guest is built for exactly this.',
    sections: [
      {
        heading: 'How the night runs',
        body: [
          'Kids eat early — real food, faster plates. Adults sit down as the light goes gold over Lānaʻi. Platters pass down a long table on the lānai or the condo’s big lanai-adjacent dining space. Nobody drives, nobody splits a check, and the kitchen is clean when the last story gets told.',
        ],
      },
      {
        heading: 'The reunion math',
        body: [
          'Twelve to twenty guests at $150–$250 a guest usually lands inside what the same group would spend on a resort restaurant week — with the dietary flags, the high chairs, and the 8:30 bedtime all handled instead of negotiated.',
        ],
      },
      {
        heading: 'Beyond the one dinner',
        body: [
          'Most reunion weeks add a brunch and a provisioning run once the first dinner lands. One written quote covers the whole arc.',
        ],
        links: [{ label: 'Family reunions, the full page', href: 'occasions/family-reunion' }],
      },
    ],
    faq: [
      {
        q: 'Can you serve 25 people across two condo units?',
        a: 'Yes — we consolidate cooking in the better kitchen and serve in the larger space. Send photos of both kitchens and we will pick the right one before quoting.',
      },
      {
        q: 'What about picky kids and a vegan grandma?',
        a: 'Standard. Kids’ early plates plus the eleven-flag dietary system handle both inside one service — no separate orders, no one eating a visibly lesser meal.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Catering Kāʻanapali', secondaryHref: 'locations/kaanapali/catering' },
    keywords: ['family reunion catering Kaanapali'],
  },
  {
    slug: 'locations/kapalua/wedding-catering',
    category: 'location',
    parent: 'weddings',
    title: 'Wedding Catering Kapalua — The Ridge, the Bay, the Cliff House',
    h1: 'Wedding catering in Kapalua.',
    meta: {
      description:
        'Wedding catering in Kapalua: the Ritz-Carlton and Montage corridor, Merriman’s, the Cliff House, and ridge-villa receptions — from $150 a guest plus staffing, wedding week as one contract.',
    },
    intro:
      'Kapalua is Maui’s destination-wedding summit: the Ritz-Carlton’s 54 acres, Montage’s residences, Merriman’s point, the Cliff House. We cater the villa and private-venue side of that week, from $150 a guest plus staffing.',
    sections: [
      {
        heading: 'The Kapalua wedding week',
        body: [
          'The pattern here is documented at the resort level — welcome party, rehearsal, ceremony, reception, farewell brunch — and it is exactly the five-meal week we contract as one product. Resort venues take the ballroom hours; we take the villa welcome dinner, the ridge-house rehearsal, and the morning after.',
        ],
        links: [{ label: 'Kapalua venues', href: 'weddings/venues/kapalua' }],
      },
      {
        heading: 'Ridge-villa receptions',
        body: [
          'For receptions in private Kapalua villas, we run plated or premium-buffet service for 30–75 guests with staffing at the published hourlys. Cooler ridge evenings are a feature — the coursing and the blankets are planned accordingly.',
        ],
      },
      {
        heading: 'The comparison that matters',
        body: [
          'Resort F&B programs carry $7,500–$15,000 minimums per event plus 23–25% service. Our week runs at published per-guest lines with 20% service on its own line — on a $31,500 food week, that five-point gap is $1,575 back in the budget.',
        ],
        links: [{ label: 'The service-charge comparison', href: 'weddings/service-charge-comparison' }],
      },
    ],
    faq: [
      {
        q: 'Can you cater at the Ritz-Carlton or Montage directly?',
        a: 'Their ballrooms and lawns run in-house F&B. Our ground is the villa and private-venue layer around them — where, frankly, the more personal meals happen.',
      },
      {
        q: 'What does a Kapalua wedding week cost?',
        a: 'A 60-guest week runs about $31,500 in food lines on published rates before staffing, service, and GET — the worked budget page shows every line.',
        links: [{ label: 'Wedding-week budget', href: '/maui/weddings/wedding-week-budget' }],
      },
    ],
    cta: { label: 'Plan the week', href: 'weddings/wedding-week', secondaryLabel: 'Get a written quote', secondaryHref: 'quote' },
    keywords: ['wedding catering Kapalua'],
  },
  {
    slug: 'locations/kapalua/stay-chef',
    category: 'location',
    parent: 'stay-chef',
    title: 'Stay Chef Kapalua — Ridge & Bay Villa Weeks from $1,050/Day',
    h1: 'Stay Chef Kapalua.',
    meta: {
      description:
        'Stay Chef weeks in Kapalua from $1,050 a day: Ridge, Bay, and Golf villa service with groceries at cost, written quotes, and the coolest dinner climate on the island.',
    },
    intro:
      'The Kapalua villa stock — Ridge, Bay, and Golf villas, Montage residences — is Stay Chef territory: big kitchens, bigger views, and evenings cool enough that dinner wants to be an event. From $1,050 a day, groceries at cost.',
    sections: [
      {
        heading: 'The Kapalua week',
        body: [
          'Mornings start with coffee and channel views; the chef shops while you walk the Coastal Trail; dinner lands as the ridge goes amber. Kapalua’s cooler evenings mean the menus lean richer — braises beside the poke, hot courses first.',
        ],
      },
      {
        heading: 'Access and logistics',
        body: [
          'Kapalua is base zone despite the drive — the ridge is core service territory. Gated access is coordinated with your villa manager or the resort residences desk; provisioning runs on the same day as service.',
        ],
        links: [{ label: 'Private chef Kapalua', href: 'locations/kapalua' }],
      },
      {
        heading: 'The honest fine print',
        body: [
          'No published weekly discount — the written quote is the total. Groceries at cost with receipts. 20% service and GET up to 4.7120% on their own lines. The same discipline as every page on this site.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does a week cost in Kapalua?',
        a: 'Seven Stay Chef days start at $7,350 in chef labor, plus groceries at cost with receipts, 20% service, and GET — every line in the written quote.',
      },
      {
        q: 'Can the chef work around a golf schedule?',
        a: 'That is half the Kapalua bookings. Early breakfasts, flexible dinner times, and a fridge that carries the gaps — the day rate buys the whole day’s flexibility.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Stay Chef details', secondaryHref: 'stay-chef' },
    keywords: ['stay chef Kapalua'],
  },
  {
    slug: 'locations/kihei/catering',
    category: 'location',
    parent: 'catering',
    title: 'Catering Kīhei — Value-Tier Stock, Full-Service Standard',
    h1: 'Catering in Kīhei.',
    meta: {
      description:
        'Catering in Kīhei: staffed events 10–75 guests for South Maui’s largest rental stock — Sugar Beach–area venues, condo courtyards, and big-house dinners, from $150 a guest plus staffing.',
    },
    intro:
      'Kīhei is the volume play done properly: South Maui’s largest condo and rental stock, Sugar Beach Events at the north end, and groups who want the published rate card without the Wailea address. Same standard, same numbers.',
    sections: [
      {
        heading: 'What we cater in Kīhei',
        list: [
          'Villa and big-house dinners for 10–30',
          'Venue events toward Sugar Beach and north Kīhei',
          'Family reunions and celebration-of-life gatherings',
          'Wedding-week meals for South Maui weddings',
        ],
      },
      {
        heading: 'The value argument',
        body: [
          'Kīhei’s rental rates leave room in the budget where it counts: the food. A $150-a-guest family-style dinner for twenty in a Kīhei house often totals less than the same party at a Wailea restaurant — before anyone orders wine.',
        ],
      },
      {
        heading: 'Logistics',
        body: [
          'Base zone. Kitchen quality varies more here than in Wailea — a photo at inquiry gets an honest answer. Staffing scales at the published hourlys, rentals coordinate into the quote.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is catering in Kīhei cheaper than Wailea?',
        a: 'The rate card is identical across the base zones. What differs is the venue cost — Kīhei houses and condos cost less per night, so the same food budget goes further.',
      },
      {
        q: 'Can you cater a celebration of life in Kīhei?',
        a: 'Yes, and we approach it accordingly — calm service, no sales choreography, the family fed while they are together. Tell us what the day needs.',
        links: [{ label: 'Celebration of life', href: '/maui/occasions/celebration-of-life' }],
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Private chef Kīhei', secondaryHref: 'locations/kihei' },
    keywords: ['catering Kihei'],
  },
  {
    slug: 'locations/napili-honokowai-kahana/vacation-chef',
    category: 'location',
    parent: 'services/vacation-chef',
    title: 'Vacation Chef Nāpili–Honokōwai–Kahana — The Condo-Belt Week',
    h1: 'A vacation chef for the condo belt.',
    meta: {
      description:
        'Vacation chef for Nāpili, Honokōwai, and Kahana condos: arrival dinners, Stay Chef days from $1,050, and provisioning runs across West Maui’s densest rental stock.',
    },
    intro:
      'The belt between Kāʻanapali and Kapalua is Maui’s densest vacation-rental strip — and its kitchens are the reason a vacation chef works here. Arrival dinners, Stay Chef days, and provisioning, all base zone.',
    sections: [
      {
        heading: 'The belt’s booking pattern',
        body: [
          'Eight to twelve people, two or three units, one shared dinner table. The vacation-chef week starts with an arrival dinner and a stocked fridge; Stay Chef days fill the middle at $1,050 a day; everyone remembers the food more than the drive they never made.',
        ],
      },
      {
        heading: 'Which kitchens qualify',
        body: [
          'Most of the belt’s renovated stock passes the kitchen gate easily — full ranges are standard in the Mahana-and-neighbors class. Original-condition galley kitchens get an honest answer from a photo before any deposit moves.',
        ],
        links: [{ label: 'The condo-belt page', href: 'locations/napili-honokowai-kahana' }],
      },
      {
        heading: 'What it costs',
        body: [
          'Signature dinners $150–$250 a guest; Stay Chef from $1,050 a day plus groceries at cost; provisioning billed at cost with receipts. The written quote ties it together.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can one chef serve a group split across two buildings?',
        a: 'Yes — cooking consolidates in the best kitchen; service happens where the table is. The logistics go in the written quote, not the group chat.',
      },
      {
        q: 'Is the belt base zone for travel?',
        a: 'Yes — Nāpili, Honokōwai, and Kahana are all base zone, no travel line.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Vacation chef service', secondaryHref: 'services/vacation-chef' },
    keywords: ['vacation chef Napili'],
  },
  {
    slug: 'locations/paia/retreat-catering',
    category: 'location',
    parent: 'services/retreat-catering',
    title: 'Retreat Catering North Shore Maui — Pāʻia, Haʻikū & the Wellness Corridor',
    h1: 'Retreat catering on the North Shore.',
    meta: {
      description:
        'Retreat catering for Pāʻia, Haʻikū, and Maui’s North Shore wellness corridor: multi-day plant-forward meal programs for 8–30 guests, quoted at inquiry with honest logistics.',
    },
    intro:
      'The Haʻikū–Pāʻia corridor is Maui’s wellness heartland — retreat properties, plantation estates, and the island’s deepest plant-based tradition. Multi-day retreat tables here are quoted at inquiry, with the North Shore logistics named honestly.',
    sections: [
      {
        heading: 'The retreat table, North Shore edition',
        body: [
          'Eight to thirty guests, three to seven days, menus labeled by protocol. Upcountry and North Shore farms are minutes away, which makes the sourcing story literal: the greens in the lunch bowl were cut that morning, uphill.',
        ],
      },
      {
        heading: 'The honest logistics',
        body: [
          'The North Shore is forty-five to sixty minutes from the South Maui base, wetter, and provisioned differently. Rather than hide that, the written quote names the travel and provisioning lines — and the rain backup for any outdoor meal.',
        ],
        links: [{ label: 'Retreat catering, the full product', href: 'services/retreat-catering' }],
      },
      {
        heading: 'For retreat hosts',
        body: [
          'You run the retreat; we run the table. One contract covers every meal, dietary flags are collected with your registration data, and per-person pricing is written before anyone books a flight.',
        ],
      },
    ],
    faq: [
      {
        q: 'Why is North Shore retreat catering quoted at inquiry?',
        a: 'Because the honest number depends on the property’s kitchen, the drive pattern, and the meal count. A flat published figure would either overcharge small retreats or underprice remote ones — the quote replaces guessing.',
      },
      {
        q: 'Can you run a fully plant-based retreat week?',
        a: 'Yes — plant-forward is the default frame for retreat tables, with raw, detox, and Ayurvedic-fluent rotations labeled per meal.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Wellness menus', secondaryHref: 'services/wellness-menus' },
    keywords: ['retreat catering North Shore Maui'],
  },
  {
    slug: 'locations/kula-upcountry/wedding-catering',
    category: 'location',
    parent: 'weddings',
    title: 'Upcountry Maui Wedding Catering — Kula Estates & Garden Venues',
    h1: 'Wedding catering, Upcountry.',
    meta: {
      description:
        'Wedding catering in Kula and Upcountry Maui: estate and garden-venue receptions, Hui Noʻeau–class settings, farm-belt sourcing, travel from $75 on its own line.',
    },
    intro:
      'Upcountry weddings trade the beach for the garden: Kula estates, lavender-country views, Hui Noʻeau–class grounds, and receptions under trees instead of tents. We cater them with the farm belt as the pantry — travel from $75, published.',
    sections: [
      {
        heading: 'The Upcountry reception',
        body: [
          'Cooler air changes the menu for the better: hot-first coursing, braises beside the fish, Kula produce that traveled minutes instead of islands. Receptions run plated or family-style for 30–75 guests, staffed at the published hourlys.',
        ],
      },
      {
        heading: 'Venue notes',
        body: [
          'Upcountry and North Shore venues run their own gatekeeping: Haiku Mill’s preferred-vendor list carries a $650 outside-vendor fee; private estates vary. We work with your planner on the list and put every venue fee in the open before you commit.',
        ],
        links: [{ label: 'Upcountry & North Shore venues', href: 'weddings/venues/upcountry-north-shore' }],
      },
      {
        heading: 'The travel line',
        body: [
          'Upcountry service carries travel from $75 — the drive, the cooler chain, the extra provisioning stop. One published line, itemized like everything else.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does an Upcountry wedding reception cost?',
        a: 'From $150 a guest in food lines plus staffing, travel from $75, 20% service and GET on their own lines. Garden-venue rentals coordinate into the same quote.',
      },
      {
        q: 'Can you cater at Hui Noʻeau or private Kula estates?',
        a: 'Yes — estate and garden venues are our ground. Access rules vary by property; your planner and our quote settle them before the date is locked.',
      },
    ],
    cta: { label: 'Plan the week', href: 'weddings/wedding-week', secondaryLabel: 'Get a written quote', secondaryHref: 'quote' },
    keywords: ['Upcountry Maui wedding catering'],
  },
];

/* ================= OCCASIONS (10) ================= */
const occasions: ContentRecord[] = [
  {
    slug: 'occasions',
    category: 'occasion',
    title: 'Private Chef for Events & Occasions on Maui',
    h1: 'Point us at the table. We will name the package.',
    meta: {
      description:
        'Private chef for Maui occasions: birthdays, anniversaries, proposals, reunions, holiday weeks, villa parties, and quiet gatherings. Published prices; the written quote is the confirmed total.',
      ogImage: '/img/maui/occasions.jpg',
    },
    intro:
      'Every occasion routes to a product with a published price anchor. Find yours below — or tell us the occasion and the headcount and we will name the package in the quote.',
    sections: [
      {
        heading: 'The milestones',
        body: ['Birthdays, anniversaries, and proposals — the evenings where a reservation app should not be involved.'],
        links: [
          { label: 'Birthday dinners', href: 'occasions/birthday' },
          { label: 'Anniversaries', href: 'occasions/anniversary' },
          { label: 'Proposals', href: 'occasions/proposal' },
        ],
      },
      {
        heading: 'The gatherings',
        body: ['Full houses and big tables: reunions, villa parties, bachelorettes, corporate offsites.'],
        links: [
          { label: 'Family reunions', href: 'occasions/family-reunion' },
          { label: 'Villa parties', href: 'occasions/villa-party' },
          { label: 'Bachelorette dinners', href: 'occasions/bachelorette' },
          { label: 'Corporate offsites', href: 'occasions/corporate-offsite' },
        ],
      },
      {
        heading: 'The calendar and the quiet ones',
        body: ['Holiday villa weeks that book first, and the gatherings we approach without any sales choreography.'],
        links: [
          { label: 'Holiday dinners', href: 'occasions/holiday-dinner' },
          { label: 'Celebration of life', href: 'occasions/celebration-of-life' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'See pricing', secondaryHref: 'pricing' },
    keywords: ['private chef for events Maui'],
  },
  {
    slug: 'occasions/birthday',
    category: 'occasion',
    parent: 'occasions',
    title: 'Birthday Private Chef Maui — The Milestone Dinner at Home',
    h1: 'A birthday dinner nobody has to drive home from.',
    meta: {
      description:
        'Birthday private chef on Maui: signature dinners $150–$250 a guest for groups, date nights from $500 for two. The villa becomes the venue; the kitchen ends clean.',
    },
    intro:
      'The fortieth, the sixtieth, the seventy-fifth with three generations at one table — Maui birthdays happen in villas, and the best version does not involve a set menu or a two-hour table limit.',
    sections: [
      {
        heading: 'How the evening runs',
        body: [
          'A menu call a week out — the guest of honor’s favorites, the dietary flags, the cake plan. On the night: canapés as the light turns, a coursed or family-style dinner, and a kitchen left clean while dessert is still on the table.',
        ],
      },
      {
        heading: 'Formats and prices',
        list: [
          'Signature dinner for the group — $150–$250 a guest, groceries inside the band',
          'Date night for two — from $500, coursed, timed to sunset',
          'Premium and chef’s-table tiers — $190–$400+ a guest for the big round numbers',
        ],
      },
      {
        heading: 'Good to know',
        body: [
          'We do not do surprise-party logistics theater, but we do coordinate arrivals quietly with your family. Kids’ early plates keep the youngest guests from melting down mid-toast.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you handle a 20-person birthday dinner?',
        a: 'Yes — that is the staffed signature format: the chef, a server or two at $55/hr, and family-style or plated service depending on the house.',
      },
      {
        q: 'Do you make birthday cakes?',
        a: 'Dessert courses, absolutely — lilikoi finishes are a Maui signature. Structural celebration cakes we refer to specialist bakers and serve alongside dinner.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'See the menus', secondaryHref: 'menus' },
    keywords: ['birthday private chef Maui'],
  },
  {
    slug: 'occasions/anniversary',
    category: 'occasion',
    parent: 'occasions',
    title: 'Anniversary Dinner Private Chef Maui — From $500 for Two',
    h1: 'Twenty years in, dinner should not involve a reservation app.',
    meta: {
      description:
        'Anniversary dinners on Maui from $500 for two: the meal you talked about on the flight over, cooked in your villa at the hour the light is right. Coursed, quiet, clean kitchen after.',
      ogImage: '/img/maui/occasions.jpg',
    },
    intro:
      'Your chef cooks the meal you talked about on the flight over, in the villa, at the hour the light is right. Anniversary service is the date-night format at its best: from $500 for two, coursed, unhurried.',
    sections: [
      {
        heading: 'The evening',
        body: [
          'The menu call happens days before — the dish from your first trip, the bottle you have been saving, the dietary flag nobody mentions at restaurants. Dinner runs at the sunset’s pace, not a kitchen’s ticket times.',
        ],
      },
      {
        heading: 'For the whole family’s anniversary',
        body: [
          'When the anniversary belongs to the parents and the whole clan is in the house, the format scales: a signature family dinner at $150–$250 a guest, with a quieter coursed table for two the following night.',
        ],
      },
      {
        heading: 'What is included',
        list: [
          'Menu design around your history and flags',
          'Same-day shopping, Maui-farm-first sourcing',
          'Plated coursed service for two, or family-style for the house',
          '20% service and GET on their own lines; the quote is the total',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you recreate a dish from our wedding?',
        a: 'Send the description or a photo of the menu and the chef will build the anniversary version — that is one of the best briefs we get.',
      },
      {
        q: 'What time should dinner start?',
        a: 'Golden hour is the default. We set first course to the season’s light; winter sunsets run earlier than summer’s.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Date night format', secondaryHref: 'services/date-night' },
    keywords: ['anniversary dinner private chef Maui'],
  },
  {
    slug: 'occasions/proposal',
    category: 'occasion',
    parent: 'occasions',
    title: 'Proposal Dinner Private Chef Maui — The Question, Then Dinner',
    h1: 'Ask at sunset. Dinner is already handled.',
    meta: {
      description:
        'Proposal dinners on Maui from $500: a private coursed dinner for two, timed to the light, with the question landing between courses — or just before the first one.',
      ogImage: '/img/maui/occasions.jpg',
    },
    intro:
      'The best proposal dinners we run share a structure: the question lands at golden hour on the lawn or the lānai, and dinner — coursed, private, already cooked steps away — absorbs everything after the yes.',
    sections: [
      {
        heading: 'How it is staged',
        body: [
          'The chef and server arrive while you are “on a walk.” The table is set at the sunset edge; champagne you supplied is cold. The question happens on your timing — we are invisible until you wave us in, and dinner begins when you are ready.',
        ],
      },
      {
        heading: 'What from $500 covers',
        list: [
          'Menu design around the two of you — including “her favorite” as the entire brief',
          'A private coursed dinner for two, served at your pace',
          'Coordination with your photographer on light and timing',
          'A kitchen left spotless — the only evidence is the ring',
        ],
      },
      {
        heading: 'Honest boundaries',
        body: [
          'We do not sell proposal packages, arches, or photography — planners and photographers own those crafts, and we will refer good ones. Beach proposals follow the DLNR rules: no structures, small footprints.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you keep it a secret?',
        a: 'That is the job. Communication stays on your channel of choice, arrival is staged while you are out, and nothing about the evening reads as a setup until the table does.',
      },
      {
        q: 'What if it rains?',
        a: 'Every proposal quote names a weather backup — usually the covered lānai, which at candlelight loses nothing.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Date night format', secondaryHref: 'services/date-night' },
    keywords: ['proposal dinner private chef Maui'],
  },
  {
    slug: 'occasions/family-reunion',
    category: 'occasion',
    parent: 'occasions',
    title: 'Family Reunion Catering Maui — Big-House Groups, One Table',
    h1: 'Three generations. One table. Zero split checks.',
    meta: {
      description:
        'Family reunion catering on Maui for groups of 10–30+: family-style dinners from $150 a guest, kids’ early plates, dietary flags handled, kitchens left clean.',
    },
    intro:
      'Maui’s villa stock sleeps the reunion market — ten, fourteen, twenty people under one roofline. The reunion dinner is the week’s anchor: family-style, from $150 a guest, with everyone fed on one timeline.',
    sections: [
      {
        heading: 'The format that works',
        body: [
          'Family-style beats plated for reunions: platters pass, kids graze, grandparents get served first without ceremony. Kids’ early plates at five-thirty; the long table at golden hour. One kitchen, one crew, one quote.',
        ],
      },
      {
        heading: 'The reunion math',
        body: [
          'Fourteen people at $150–$250 a guest compares directly to fourteen resort-restaurant covers — except nobody drives, nobody waits for a table built for six, and the toddler’s bedtime is a feature, not a crisis.',
        ],
      },
      {
        heading: 'The full reunion week',
        body: [
          'Most reunion bookings grow: the anchor dinner, a mid-week brunch, a provisioning run, sometimes a Stay Chef day or two. Bundling them in one written quote is cheaper in coordination than in dollars — one thread, one crew, zero repeated logistics.',
        ],
        links: [
          { label: 'Stay Chef days', href: 'stay-chef' },
          { label: 'Kāʻanapali reunions', href: 'locations/kaanapali/family-reunion' },
        ],
      },
    ],
    faq: [
      {
        q: 'What group size works for a reunion dinner?',
        a: 'Ten to thirty is the sweet spot in a villa; staffed service extends to 75 for estate settings. Over 75 is a written exception, quoted honestly.',
      },
      {
        q: 'Can you handle a nut allergy and two vegans in the same dinner?',
        a: 'Routine. Flags are collected at inquiry, allergens get separate prep, and the vegan plates are designed, not subtracted.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Catering for 10–75', secondaryHref: 'catering' },
    keywords: ['family reunion catering Maui'],
  },
  {
    slug: 'occasions/bachelorette',
    category: 'occasion',
    parent: 'occasions',
    title: 'Bachelorette Private Chef Maui — The Villa Night In',
    h1: 'The best night of the bachelorette might be the night in.',
    meta: {
      description:
        'Bachelorette private chef dinners on Maui: pūpū and grazing formats or coursed dinners for the villa night in, from $150 a guest. Bar cart from $800/4hr with client-supplied alcohol.',
    },
    intro:
      'Every Maui bachelorette week has one night where nobody wants to get ready, drive, or shout over a bar tab. That is the villa night: grazing boards, a coursed dinner, or both — from $150 a guest.',
    sections: [
      {
        heading: 'The two formats',
        list: [
          'Pūpū and grazing — the long, loose evening: boards, passed bites, a lilikoi-forward dessert table',
          'The coursed dinner — signature service at $150–$250 a guest, plated, with the toast timed to sunset',
        ],
      },
      {
        heading: 'The bar question',
        body: [
          'The packaged bar cart runs from $800 per four hours with mixers and garnish programs; alcohol is client-supplied or via licensed referral — we do not sell alcohol, and the quote states the compliant setup.',
        ],
        links: [{ label: 'The bar cart', href: 'services/mobile-bar' }],
      },
      {
        heading: 'The morning after',
        body: [
          'The quiet hero of the bachelorette week is the recovery brunch: late morning, island fruit, eggs and ʻulu hash, coffee that keeps coming. Ten to forty guests, inside the published lines.',
        ],
        links: [{ label: 'Brunch service', href: 'services/brunch-service' }],
      },
    ],
    faq: [
      {
        q: 'Can you do a themed bachelorette dinner?',
        a: 'Within taste — menu themes and table styling cues, yes; costumes and props, that is your department. The food will be the part everyone posts.',
      },
      {
        q: 'What group size works?',
        a: 'Six to sixteen is typical for the villa format. Larger groups move to staffed catering service, same published per-guest lines.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Pūpū & grazing menu', secondaryHref: 'menus/pupu-and-grazing' },
    keywords: ['bachelorette private chef Maui'],
  },
  {
    slug: 'occasions/holiday-dinner',
    category: 'occasion',
    parent: 'occasions',
    title: 'Christmas & Holiday Private Chef Maui — The Villa Week Books First',
    h1: 'December on Maui books first. The quote holds your date.',
    meta: {
      description:
        'Holiday private chef service on Maui: Christmas-week villa dinners, holiday menus, and Stay Chef days for the December 22–January 1 window. Book early; the written quote holds the date.',
    },
    intro:
      'The December 22 to January 1 villa week is Maui’s most compressed demand window of the year — the island’s biggest houses fill, and so does our calendar. Holiday service is the full product line, booked early and held by the written quote.',
    sections: [
      {
        heading: 'The holiday formats',
        list: [
          'The holiday dinner — the full traditional table or a Maui-ized version, from $150 a guest',
          'Stay Chef holiday weeks — from $1,050 a day across the whole window',
          'Provisioning runs timed to arrival — the fridge stocked before the airport run',
          'New Year’s Eve dinners — coursed, timed to midnight with your bottles',
        ],
        links: [{ label: 'The holiday menu', href: 'menus/holiday' }],
      },
      {
        heading: 'Why early matters',
        body: [
          'Peak-season lead times on Maui run two to four weeks in normal months; the Christmas–New Year window compresses to whoever wrote first. A 50% deposit locks the date — but only a date that is still open.',
        ],
        links: [{ label: 'Holiday peak calendar', href: 'pricing/holiday-peak-calendar' }],
      },
      {
        heading: 'The honest note on holiday pricing',
        body: [
          'Any holiday surcharges are published ahead of the season on the peak-calendar page — not invented in the quote. The fee stack stays the fee stack: 20% service, GET up to 4.7120%, their own lines.',
        ],
      },
    ],
    faq: [
      {
        q: 'How far ahead should we book Christmas week?',
        a: 'As early as you can — the window fills months out. The written quote with a 50% deposit is what holds a date; an inquiry alone does not.',
      },
      {
        q: 'Can you do a full traditional Christmas dinner?',
        a: 'Yes — the full roast-bird table, or a Maui version built on local fish and canoe crops, or both across the week. Menus finalize in writing before the date.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'The holiday menu', secondaryHref: 'menus/holiday' },
    keywords: ['Christmas private chef Maui'],
  },
  {
    slug: 'occasions/villa-party',
    category: 'occasion',
    parent: 'occasions',
    title: 'Villa Party Catering Maui — Staffed, Styled, Clean After',
    h1: 'The house party where the host is a guest.',
    meta: {
      description:
        'Villa party catering on Maui: staffed pūpū, grazing, and stations for 10–75 guests, bar cart from $800/4hr, servers $55/hr. The host attends their own party; we reset the house after.',
    },
    intro:
      'The villa party is the format Maui’s houses were built for: doors open to the lānai, pūpū circulating, the bar cart on the lawn. We staff 10–75 guests — and the host actually attends.',
    sections: [
      {
        heading: 'The formats',
        list: [
          'Pūpū and grazing — the standing party, boards and passed bites',
          'Chef-attended stations — the grill station, the poke-and-rice station, the dessert landing',
          'Family-style or buffet — when the party wants to sit eventually',
        ],
        links: [{ label: 'Pūpū & grazing menu', href: 'menus/pupu-and-grazing' }],
      },
      {
        heading: 'The crew',
        body: [
          'Servers at $55/hr and sous chefs at $75/hr on four-hour floors, scaled one server per 10–12 guests. The bar cart from $800/4hr covers mixers, garnish, and service — alcohol is yours or via licensed referral.',
        ],
      },
      {
        heading: 'The after',
        body: [
          'The service ends with the house reset: kitchen clean, rentals stacked for pickup, lānai cleared. The only evidence should be the photos.',
        ],
      },
    ],
    faq: [
      {
        q: 'How much does a villa party for 30 cost?',
        a: 'Food lines from $150 a guest put 30 guests around $4,500 before staffing, the bar cart, service, and GET — the written quote carries the exact figure for your format.',
      },
      {
        q: 'Can you coordinate rentals and music?',
        a: 'Rentals — tables, linens, glassware — yes, coordinated into the quote. Music and DJs we refer to professionals; our lane is food, drink service, and the reset.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Catering details', secondaryHref: 'catering' },
    keywords: ['villa party catering Maui'],
  },
  {
    slug: 'occasions/celebration-of-life',
    category: 'occasion',
    parent: 'occasions',
    title: 'Celebration of Life Catering Maui — We Handle the Food',
    h1: 'We handle the food so the family can be together.',
    meta: {
      description:
        'Celebration-of-life catering on Maui: calm, staffed service for gatherings at homes and estates. Clear written quotes, no sales choreography — the family fed while they are together.',
    },
    intro:
      'Some gatherings should not carry a sales pitch. For celebrations of life we keep it simple: calm service, clear written numbers, and a family that does not have to think about the food.',
    sections: [
      {
        heading: 'How we approach it',
        body: [
          'One point of contact, one written quote, service that stays out of the way. Family-style and buffet formats suit the day — people eat when they are ready, not when a seating chart says so.',
        ],
      },
      {
        heading: 'Practical matters',
        body: [
          'We serve homes, estates, and private venues across the island, including resident gatherings in Kīhei, Upcountry, and the West Maui corridor. Lead time can be short; tell us the date and we will tell you honestly whether we can crew it.',
        ],
      },
      {
        heading: 'The numbers, without ceremony',
        body: [
          'The same published lines apply: per-guest pricing by format, staffing at $55/$75 hourlys, 20% service and GET on their own lines. The written quote is the confirmed total, so nothing about the day surprises anyone.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cater on short notice?',
        a: 'Often, yes — tell us the date and headcount and we will give you a straight answer within a day. If we cannot crew it properly, we say so rather than stretch.',
      },
      {
        q: 'What formats suit a memorial gathering?',
        a: 'Family-style and buffet, mostly — food that lets people move, talk, and eat in their own time. We keep service quiet and the kitchen invisible.',
      },
    ],
    cta: { label: 'Talk to us', href: 'quote', secondaryLabel: 'Contact', secondaryHref: 'contact' },
    keywords: ['celebration of life catering Maui'],
  },
  {
    slug: 'occasions/corporate-offsite',
    category: 'occasion',
    parent: 'occasions',
    title: 'Corporate Retreat Catering Maui — Offsite Dinners, Handled',
    h1: 'The offsite dinner is the part they remember.',
    meta: {
      description:
        'Corporate offsite and retreat catering on Maui: team dinners, leadership-week meals, and multi-day tables for 10–75, itemized for finance — 20% service and GET on their own lines.',
    },
    intro:
      'Maui offsites live in villas and resort buyouts, and the dinners make or break the week. We run staffed team dinners and multi-day tables for 10–75 — itemized so cleanly your finance team will notice.',
    sections: [
      {
        heading: 'The offsite formats',
        list: [
          'The anchor dinner — plated or family-style, $150–$250 a guest',
          'Multi-day tables — breakfast, working lunch, dinner across a leadership week',
          'The casual night — pūpū, grazing, and the bar cart on the lawn',
        ],
      },
      {
        heading: 'Built for expense reports',
        body: [
          'Every quote itemizes per-guest lines, staffing hourlys, travel, 20% service, and GET up to 4.7120% as separate lines — the format corporate accounting actually asks for. The written quote is the confirmed total; the invoice matches it.',
        ],
      },
      {
        heading: 'Logistics at villas and resorts',
        body: [
          'Villa buyouts are our ground; resort ballrooms are the resorts’. For groups split across a Wailea or Kāʻanapali property cluster, we coordinate load-in and timing with your planner or office manager directly.',
        ],
        links: [{ label: 'Estate events', href: 'estate-events' }],
      },
    ],
    faq: [
      {
        q: 'Can you invoice a company with PO-style documentation?',
        a: 'Yes — the written quote and final invoice carry the same itemized lines, which satisfies most finance workflows. Payment terms are stated in the quote.',
      },
      {
        q: 'What is the largest offsite group you can serve?',
        a: 'Seventy-five staffed. Larger groups are a written exception assessed on kitchen and crew reality, quoted rather than implied.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Catering capability', secondaryHref: 'catering' },
    keywords: ['corporate retreat catering Maui'],
  },
];

/* ================= WEDDING CLUSTER (18) ================= */
const weddings: ContentRecord[] = [
  {
    slug: 'weddings/wedding-week',
    category: 'wedding',
    parent: 'weddings',
    title: 'The Maui Wedding Week — One Culinary Contract, Five Meals',
    h1: 'Maui is a week, not a plated hour.',
    meta: {
      description:
        'The Maui wedding week as one contract: welcome dinner, rehearsal, ceremony-adjacent pūpū, reception, and recovery brunch — from $150 a guest plus staffing, one crew, one written quote.',
      ogImage: '/img/maui/wedding-week-band.jpg',
    },
    intro:
      'Every Maui destination wedding already eats five times — the welcome dinner, the rehearsal, the ceremony-adjacent hour, the reception, the morning after. Nobody else on the island contracts those five meals as one. We do, at published per-guest lines.',
    sections: [
      {
        heading: 'The five meals',
        list: [
          'Day 1 — Welcome dinner: family-style, 20–75 guests, from $150 a guest plus staffing',
          'Day 2–3 — Rehearsal dinner: plated or family-style, 12–40 guests',
          'Ceremony day — pūpū and cocktail service between the vows and the reception',
          'The reception — plated two-to-three courses or premium buffet, 30–75 guests',
          'The morning after — recovery brunch, 10–40 guests, late and unhurried',
        ],
        links: [
          { label: 'Welcome dinner', href: 'weddings/welcome-dinner' },
          { label: 'Rehearsal dinner', href: 'weddings/rehearsal-dinner' },
          { label: 'Reception catering', href: 'weddings/reception-catering' },
          { label: 'Recovery brunch', href: 'weddings/recovery-brunch' },
        ],
      },
      {
        heading: 'Why one contract beats five vendors',
        body: [
          'One crew that learns the family on day one and plates the reception on day four. One shopping rhythm, one dietary map, one set of rentals. One written quote instead of five deposits, five minimums, and five service charges stacked at 23–25% each.',
          'The math is published: a 60-guest week runs welcome $9,000 + rehearsal $4,500 + reception $12,000 + brunch $6,000 = $31,500 in food lines before staffing, service, and GET — illustrative arithmetic on published rates, every cell defensible.',
        ],
        links: [{ label: 'The worked budget', href: 'weddings/wedding-week-budget' }],
      },
      {
        heading: 'How booking works',
        list: [
          'Tell us the dates, the venues, and the guest counts per event',
          'We reply with one written quote covering the week — the confirmed total',
          'A 50% deposit holds the week',
          'Cancellation terms are currently PROPOSED pending counsel review: 28+ days partial refund, 14–28 days deposit retained, under 7 days full balance, force-majeure reschedules rather than forfeits',
        ],
      },
      {
        heading: 'Where the week happens',
        body: [
          'Wailea–Mākena estates, Kapalua ridge villas, the Kāʻanapali corridor, and Upcountry gardens. Beach ceremonies run under the DLNR permit — roughly 20 people, no structures — which is exactly why the reception lives at the estate.',
        ],
        links: [
          { label: 'Wailea–Mākena venues', href: 'weddings/venues/wailea-makena' },
          { label: 'Kapalua venues', href: 'weddings/venues/kapalua' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does a Maui wedding week cost in food?',
        a: 'From $150 a guest per event plus staffing. The worked 60-guest example totals $31,500 in food lines across four events before staffing, 20% service, and GET — against resort F&B minimums of $7,500–$15,000 per event at 23–25% service.',
        links: [{ label: 'Full budget breakdown', href: '/maui/weddings/wedding-week-budget' }],
      },
      {
        q: 'Do we have to book all five meals?',
        a: 'No — each meal is its own line and can stand alone. The week simply prices, plans, and crews better as one contract, and the family never meets a stranger on day four.',
      },
      {
        q: 'Who coordinates with our venue and planner?',
        a: 'We do — directly. Estate venues like Olowalu and Kukahiko book through approved planners; we work inside that channel and flag vendor-list fees (Haiku Mill’s is $650) before you commit.',
      },
      {
        q: 'What happens if weather moves an event?',
        a: 'Every outdoor event carries a named backup in the quote. Force-majeure events reschedule rather than forfeit — that posture is written into the proposed terms pending counsel review.',
      },
    ],
    cta: { label: 'Plan the week', href: 'quote', secondaryLabel: 'See the worked budget', secondaryHref: 'weddings/wedding-week-budget' },
    keywords: ['Maui wedding week chef'],
  },
  {
    slug: 'weddings/welcome-dinner',
    category: 'wedding',
    parent: 'weddings/wedding-week',
    title: 'Welcome Dinner Maui — The Wedding Week’s First Night',
    h1: 'The week starts with a long table and no speeches.',
    meta: {
      description:
        'Welcome dinner catering on Maui: family-style or buffet for 20–75 guests, from $150 a guest plus staffing. The wedding week’s relaxed first night — one contract with the rest.',
    },
    intro:
      'The welcome dinner is the week’s tone-setter: family-style platters, twenty to seventy-five people who mostly met at the airport, and a sunset doing the decorating. From $150 a guest plus staffing.',
    sections: [
      {
        heading: 'Why family-style wins the first night',
        body: [
          'Platters make strangers pass things to each other — the cheapest icebreaker in the wedding budget. The first night should be generous and unfussy: island fish, grilled meats, big salads, and enough of everything that nobody counts.',
        ],
      },
      {
        heading: 'The format, specified',
        list: [
          '20–75 guests; over 75 is a written exception',
          'Family-style or premium buffet service',
          'Servers $55/hr, sous $75/hr, four-hour floor — typically two to five staff',
          'Arrival-evening timing: first platters at golden hour',
        ],
      },
      {
        heading: 'Where it happens',
        body: [
          'Usually the rental house or estate where the family is staying — Wailea villas, Kapalua ridge houses, Kāʻanapali condo-resort common spaces with management approval. Cooking on-site keeps the night loose; nobody herds seventy people to a restaurant.',
        ],
      },
      {
        heading: 'How it fits the week',
        body: [
          'The welcome dinner is day one of the wedding-week contract. The same crew that serves it plates your reception — by then they know your grandmother’s name and your cousin’s allergy.',
        ],
        links: [
          { label: 'Next: the rehearsal dinner', href: 'weddings/rehearsal-dinner' },
          { label: 'The whole week', href: 'weddings/wedding-week' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does a 40-person welcome dinner cost?',
        a: 'From $150 a guest puts food at $6,000, plus roughly three servers and a sous at the published hourlys, 20% service, and GET — all itemized in the written quote.',
      },
      {
        q: 'Can the welcome dinner be casual — BBQ-style?',
        a: 'Yes — grill-forward family-style is a Maui classic and sits inside the same per-guest lines. The bbq-and-grill menu family exists for exactly this night.',
        links: [{ label: 'BBQ & grill menu', href: '/maui/menus/bbq-and-grill' }],
      },
      {
        q: 'Do we need rentals for a villa welcome dinner?',
        a: 'Often minimal — most estates seat 20–40 with coordinated rentals for the rest. Rentals are coordinated and quoted with the food, one document.',
      },
    ],
    cta: { label: 'Plan the week', href: 'quote', secondaryLabel: 'The rehearsal dinner', secondaryHref: 'weddings/rehearsal-dinner' },
    keywords: ['welcome dinner Maui'],
  },
  {
    slug: 'weddings/rehearsal-dinner',
    category: 'wedding',
    parent: 'weddings/wedding-week',
    title: 'Rehearsal Dinner Maui — Plated, 12–40 Guests, In a Villa',
    h1: 'The rehearsal dinner: smaller, sharper, plated.',
    meta: {
      description:
        'Rehearsal dinner catering on Maui: plated or family-style service for 12–40 guests in villas and estates, from $150 a guest plus staffing. One contract with the wedding week.',
    },
    intro:
      'The rehearsal dinner is the week’s most personal meal: twelve to forty of the closest people, plated properly, in a villa instead of a restaurant’s back room. From $150 a guest plus staffing at the published hourlys.',
    sections: [
      {
        heading: 'The format',
        body: [
          'Plated two-to-three courses suits the rehearsal’s shape — there are toasts, and plated service bends around speeches without losing a dish. Family-style works when the families already know each other. The menu call happens with whoever is hosting.',
        ],
      },
      {
        heading: 'Why a villa beats a restaurant buyout',
        body: [
          'No room fee, no per-person beverage minimums, no 10pm curfew, and no other parties’ noise. The villa’s table, the family’s bottles — client-supplied, always — and a crew that leaves the kitchen cleaner than the venue’s would.',
        ],
      },
      {
        heading: 'Staffing the night',
        body: [
          'Forty plated guests typically run three servers at $55/hr and a sous at $75/hr on the four-hour floor. The math is written into the quote — one server per 10–12 guests is the working rule.',
        ],
      },
      {
        heading: 'Inside the week',
        body: [
          'As part of the wedding-week contract, the rehearsal reuses the week’s dietary map and shopping rhythm. Standalone, it is its own written quote — the same discipline either way.',
        ],
        links: [
          { label: 'Next: the reception', href: 'weddings/reception-catering' },
          { label: 'The whole week', href: 'weddings/wedding-week' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does a 24-person rehearsal dinner cost?',
        a: 'Food from $150 a guest is $3,600, plus roughly two servers and a sous on four-hour floors, 20% service, and GET — itemized in the quote, no room fee because the room is yours.',
      },
      {
        q: 'Can you match the wedding’s formality up a notch?',
        a: 'Yes — premium-tier menus at $190–$275 a guest suit rehearsal dinners that want the sharper plating. The tiers are published and the choice is yours at the menu call.',
      },
      {
        q: 'Do you cater rehearsal dinners at restaurants or venues?',
        a: 'Our ground is villas, estates, and private venues with kitchens. Restaurant buyouts are the restaurant’s business; ours is better.',
      },
    ],
    cta: { label: 'Plan the week', href: 'quote', secondaryLabel: 'The reception', secondaryHref: 'weddings/reception-catering' },
    keywords: ['rehearsal dinner Maui'],
  },
  {
    slug: 'weddings/reception-catering',
    category: 'wedding',
    parent: 'weddings',
    title: 'Maui Wedding Reception Catering — Plated & Premium Buffet, 30–75',
    h1: 'The reception: plated properly, priced plainly.',
    meta: {
      description:
        'Maui wedding reception catering: plated two-to-three courses or premium buffet for 30–75 guests, from $150 a guest plus staffing. Market norms run $120–$200 plated — ours are published.',
    },
    intro:
      'The reception is the meal the week is remembered by. We run plated two-to-three-course service or premium buffet for 30–75 guests, from $150 a guest plus staffing — published lines against a market whose plated norm ($120–$200/pp) hides behind “call for pricing.”',
    sections: [
      {
        heading: 'Plated or premium buffet',
        body: [
          'Plated reads formal and paces the toasts; premium buffet feeds faster and loosens the room. Both run inside the same per-guest band — the choice is about the evening’s rhythm, not a hidden price tier. Over 75 guests is a written exception, quoted, never implied.',
        ],
      },
      {
        heading: 'The honest market comparison',
        body: [
          'Maui’s published wedding-catering norms run $80–$120 a head for buffets and $120–$200 for plated, with 18–22% service charges. Resort F&B programs add $7,500–$15,000 minimums per event at 23–25% service. Our from-$150 lines with 20% service sit exactly in the market’s plated band — itemized instead of bundled.',
        ],
        links: [{ label: 'The service-charge comparison', href: 'weddings/service-charge-comparison' }],
      },
      {
        heading: 'What the crew looks like',
        list: [
          'One server per 10–12 guests at $55/hr — a 60-guest plated reception runs about five',
          'Sous chefs at $75/hr scaled to the menu',
          'Four-hour floors; overtime quoted, not discovered',
          'Rentals coordinated in the same written quote',
        ],
      },
      {
        heading: 'Where receptions happen',
        body: [
          'Estates and villas: Kukahiko, Olowalu, Haiku Mill through its vendor list, private Wailea and Kapalua properties. Resort ballrooms belong to resort F&B — our reception is the estate one the DLNR beach cap pushed onto land.',
        ],
        links: [{ label: 'Beach ceremony, estate reception', href: 'weddings/beach-ceremony-reception' }],
      },
    ],
    faq: [
      {
        q: 'What does a 60-guest plated reception cost?',
        a: 'At mid-band $200 a guest, food is $12,000, plus roughly five servers and two sous on the hourlys, 20% service, and GET. Against a resort’s $15,000 F&B minimum plus 25%, the arithmetic makes the argument.',
        links: [{ label: 'The worked wedding-week budget', href: '/maui/weddings/wedding-week-budget' }],
      },
      {
        q: 'Can you do a cake and dessert course?',
        a: 'Dessert courses are in-house; structural wedding cakes come from specialist bakers we are happy to refer. Cake service and plating are part of the evening at no invented fee.',
      },
      {
        q: 'What about bar service at the reception?',
        a: 'The packaged cart runs from $800/4hr; alcohol is client-supplied or via licensed bartending referral — Maui County’s licensing rules are the state’s most specific, and your quote states the compliant setup.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Wedding cost, analyzed', secondaryHref: 'weddings/wedding-cost' },
    keywords: ['Maui wedding reception catering'],
  },
  {
    slug: 'weddings/recovery-brunch',
    category: 'wedding',
    parent: 'weddings/wedding-week',
    title: 'Recovery Brunch Maui — The Day-After Meal, 10–40 Guests',
    h1: 'The morning after, fed properly.',
    meta: {
      description:
        'Recovery brunch catering on Maui: the day-after wedding meal for 10–40 guests, late-morning and unhurried, per-guest lines within the wedding-week contract.',
    },
    intro:
      'The recovery brunch is the wedding week’s secret best meal: ten to forty survivors, late morning, island fruit and strong coffee, every story from the night before retold over seconds. Nobody on Maui prices it. We do.',
    sections: [
      {
        heading: 'The format',
        body: [
          'Late-morning service at the villa or estate where everyone is staying. The spread runs generous and unfussy — fruit, eggs, ʻulu hash, pastries, poke for the brave — with coffee that keeps coming and nobody’s name on a place card.',
        ],
      },
      {
        heading: 'Why it belongs in the contract',
        body: [
          'The day-after brunch is where Maui’s wedding-week pattern actually ends — resorts market “farewell brunches” and caterers mention them, but nobody prices the meal. Inside our week contract it is a line item with a number, not a gesture.',
        ],
        links: [{ label: 'The whole week', href: 'weddings/wedding-week' }],
      },
      {
        heading: 'Practical notes',
        list: [
          '10–40 guests, service window typically 9:30–noon',
          'Per-guest pricing within the published wedding lines plus staffing',
          'The crew is the same one from the reception — they already know the kitchen',
          'Mimosas are your bottles; the juice program is ours',
        ],
      },
    ],
    faq: [
      {
        q: 'What does a 30-person recovery brunch cost?',
        a: 'Inside the published per-guest wedding lines plus staffing on the hourlys — the written quote names the figure, and the 20% service and GET sit on their own lines as always.',
      },
      {
        q: 'Can the brunch be fully plant-based?',
        a: 'Yes — island fruit, taro and ʻulu bases, and coconut make plant-based brunch one of the strongest menus we run.',
      },
    ],
    cta: { label: 'Plan the week', href: 'quote', secondaryLabel: 'Brunch service', secondaryHref: 'services/brunch-service' },
    keywords: ['recovery brunch Maui', 'day-after brunch Maui'],
  },
  {
    slug: 'weddings/elopement',
    category: 'wedding',
    parent: 'weddings',
    title: 'Maui Elopement Chef — The Dinner After the Vows',
    h1: 'Two people, one vow, one perfect dinner.',
    meta: {
      description:
        'Elopement chef service on Maui: the private dinner after the ceremony, from $500 for two. Pairs with the island’s elopement-package ecosystem; we are the meal, not the package.',
    },
    intro:
      'Maui’s elopement ecosystem — planners, photographers, officiants, $3,100–$4,500 packages — handles everything except the dinner. That last part is ours: a private coursed meal for two, from $500, wherever the two of you are staying.',
    sections: [
      {
        heading: 'The elopement dinner',
        body: [
          'The ceremony is theirs — the beach under its DLNR permit, the photographer’s golden hour. Dinner is ours: the chef arrives while the photos finish, and the first meal as a married couple happens on a private lānai instead of a restaurant’s best-effort table.',
        ],
      },
      {
        heading: 'How it pairs with your planner',
        body: [
          'Elopement planners build the day; we slot into the timeline as the evening. Tell your planner we are the caterer — the coordination is a five-minute call, and the dinner timing flexes to the light your photographer wants.',
        ],
      },
      {
        heading: 'What it costs',
        list: [
          'Date-night format from $500 for two, coursed',
          'Premium tiers for the menu that deserves it, $190–$400+ a guest math',
          'Champagne yours or sourced at cost; the fee stack itemized as always',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cater a tiny wedding — six to ten guests?',
        a: 'Yes — that is the micro-wedding format, priced on the same per-guest lines. Small groups are where a private chef beats every restaurant option on the island.',
        links: [{ label: 'Micro weddings', href: '/maui/weddings/micro-wedding' }],
      },
      {
        q: 'Can dinner happen at the beach?',
        a: 'Not as a catered setup — state rules ban structures and cap beach gatherings near 20 under the permit. The pattern that works: beach for the vows, villa for dinner, minutes apart.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Date night format', secondaryHref: 'services/date-night' },
    keywords: ['Maui elopement chef'],
  },
  {
    slug: 'weddings/micro-wedding',
    category: 'wedding',
    parent: 'weddings',
    title: 'Micro Wedding Catering Maui — Up to 30 Guests, No Ballroom',
    h1: 'Under thirty guests is not a small wedding. It is the good kind.',
    meta: {
      description:
        'Micro wedding catering on Maui for up to 30 guests: plated estate dinners from $150 a guest, one long table, the whole budget spent on food instead of a ballroom.',
    },
    intro:
      'The micro wedding — thirty guests or fewer — is Maui’s smartest format: one long table at an estate, every guest a witness, and a per-person food budget that a ballroom could never touch at this scale.',
    sections: [
      {
        heading: 'The format',
        body: [
          'One table, one menu, plated coursing for up to thirty. The chef’s-table energy at wedding scale: courses introduced, wines you chose poured properly, and a pace set by the couple rather than a banquet captain.',
        ],
      },
      {
        heading: 'Where micro weddings work',
        body: [
          'Kukahiko Estate hosts 2–40 and its kitchen was built for outside caterers. Haiku Mill takes small parties under its vendor-list rules. And the Wailea–Mākena and Kapalua villa stock turns a twenty-person reception into the week’s best dinner party.',
        ],
        links: [{ label: 'Estate weddings', href: 'weddings/estate-wedding' }],
      },
      {
        heading: 'The honest economics',
        body: [
          'Thirty guests at $150–$250 a guest is $4,500–$7,500 in food — with staffing, 20% service, and GET itemized. Compare the venue-package floor: Olowalu’s published signature experience runs $15,000 for up to 30 guests before you have chosen a thing.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is a micro wedding cheaper with a private chef?',
        a: 'Usually, structurally: no F&B minimum, no ballroom rental, and published per-guest lines against venue packages built for bigger headcounts. The written quote makes the comparison concrete.',
      },
      {
        q: 'Can a micro wedding still feel formal?',
        a: 'Plated coursing, printed menus, and full table service deliver more formality per dollar at twenty guests than any banquet format — small is the upgrade, not the compromise.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Estate weddings', secondaryHref: 'weddings/estate-wedding' },
    keywords: ['micro wedding catering Maui'],
  },
  {
    slug: 'weddings/estate-wedding',
    category: 'wedding',
    parent: 'weddings',
    title: 'Maui Estate Wedding Catering — Olowalu, Kukahiko, Haiku Mill Class',
    h1: 'The estate wedding: the venue is private, the kitchen is ours.',
    meta: {
      description:
        'Estate wedding catering on Maui: Olowalu Plantation House, Kukahiko Estate, Haiku Mill, and private estates — receptions to 75 from $150 a guest, planner-channel coordination included.',
    },
    intro:
      'Maui’s marquee weddings happen on private ground: Olowalu Plantation House, Kukahiko Estate, Haiku Mill, and the island’s private estates. These venues assume an outside culinary team — that team is the product.',
    sections: [
      {
        heading: 'The venue reality',
        body: [
          'Maui’s estate venues gate access through approved planners and vendor lists. Olowalu works through a hand-selected planner roster; Kukahiko books through its planner channel; Haiku Mill runs a preferred-vendor list with a $650 outside-vendor fee. We work inside these systems — and we tell you the fees before you sign anything.',
        ],
        links: [{ label: 'The planner channel', href: 'weddings/planner-channel' }],
      },
      {
        heading: 'What an estate reception needs',
        list: [
          'A culinary crew sized to the venue kitchen — Kukahiko’s was built for outside caterers',
          'Rentals coordination: tables, linens, glassware, dance-floor-adjacent logistics',
          'Staffing at one server per 10–12 guests, $55/hr; sous chefs $75/hr',
          'A timeline from first setup to last plate, written into the quote',
        ],
      },
      {
        heading: 'The money comparison',
        body: [
          'Olowalu’s published signature package runs $15,000 for up to 30 guests including catering; Haiku Mill’s full-day Saturday rate is $10,500 before catering. Against resort F&B minimums of $7,500–$15,000 per event plus 23–25% service, an estate with an outside caterer at published lines is where the wedding budget breathes.',
        ],
        links: [{ label: 'The service-charge comparison', href: 'weddings/service-charge-comparison' }],
      },
      {
        heading: 'Our estate posture',
        body: [
          'We leave estates as we found them — kitchens reset, lawns unmarked, load-in coordinated with the venue’s rules. Estates rebook vendors they trust; our invitation back is the only review that matters.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cater at Olowalu Plantation House?',
        a: 'Yes, through the venue’s planner structure. Olowalu publishes package pricing that includes its catering; where an outside caterer fits your plan, we coordinate with your planner on the specifics.',
      },
      {
        q: 'What about Haiku Mill’s vendor list?',
        a: 'Haiku Mill requires vendors on its preferred list or charges a $650 outside-vendor fee. We tell you which applies before you commit, and we work with your planner either way.',
      },
      {
        q: 'How many guests can an estate reception hold?',
        a: 'Venues set capacity — Kukahiko suits 2–40, Olowalu scales higher. Our staffed service runs to 75 guests; over 75 is a written exception assessed honestly.',
      },
    ],
    cta: { label: 'Plan the week', href: 'quote', secondaryLabel: 'Villa reception guide', secondaryHref: 'weddings/villa-reception-guide' },
    keywords: ['Maui estate wedding catering'],
  },
  {
    slug: 'weddings/beach-ceremony-reception',
    category: 'wedding',
    parent: 'weddings',
    title: 'Maui Beach Wedding Reception — The Permit Reality, Solved',
    h1: 'The beach is for the ceremony. Dinner needs a roof nearby.',
    meta: {
      description:
        'Beach wedding reception planning on Maui: DLNR permits cap ceremonies near 20 guests with no structures and a two-hour limit — so the reception moves to a villa or estate. Here is how the day actually flows.',
    },
    intro:
      'The Maui beach wedding fantasy meets a state permit: DLNR’s Wiki system caps professional beach ceremonies at roughly 20–25 people including vendors, bans arches, chairs, and tents, and holds you to two hours. The good news: that is the perfect ceremony — and the reception it pushes onto land is our product.',
    sections: [
      {
        heading: 'The permit, plainly',
        body: [
          'Any professional-assisted beach wedding in Hawaiʻi needs a DLNR Wiki permit — fees run $0.10 per square foot with a $20 minimum, the window caps at two hours, and structures are banned. Makena Cove, Polo Beach, Kapalua Bay, and Ironwoods are the popular permitted sands. Roughly twenty people including your photographer and officiant.',
        ],
      },
      {
        heading: 'The flow that works',
        list: [
          '4:30pm — ceremony on the sand, twenty of the closest, permit in hand',
          '5:30pm — pūpū and cocktails at the villa or estate as the light peaks',
          '7:00pm — the reception dinner, plated or family-style, steps from the shore but on private ground',
        ],
      },
      {
        heading: 'Why the split is a feature',
        body: [
          'Couples who plan the split stop fighting the permit and start using it: the ceremony stays intimate and legal, the reception gets real food, real chairs, and a real kitchen. The beach gives you the photograph; the estate gives you the evening.',
        ],
        links: [{ label: 'Estate weddings', href: 'weddings/estate-wedding' }],
      },
      {
        heading: 'What we do not do',
        body: [
          'We do not cater on the public beach — no tables on the sand, no “technically portable” structures. Permit-compliant ceremony, private-ground reception. Your planner handles the permit; we handle dinner.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can we have a catered dinner on the beach in Maui?',
        a: 'No — DLNR rules ban structures and cap beach events near 20 people including vendors, with a two-hour limit. The working pattern is the ceremony on the sand and the reception at a villa or estate minutes away.',
      },
      {
        q: 'Who gets the beach permit?',
        a: 'Your planner or officiant typically pulls the Wiki permit. We coordinate timing around it — the pūpū hour starts when the permit window ends.',
      },
      {
        q: 'What does the full day cost?',
        a: 'Ceremony-adjacent pūpū plus a plated reception run on the published per-guest lines from $150 a guest plus staffing — the written quote covers both as one event flow.',
      },
    ],
    cta: { label: 'Plan the week', href: 'quote', secondaryLabel: 'Reception catering', secondaryHref: 'weddings/reception-catering' },
    keywords: ['Maui beach wedding reception catering'],
  },
  {
    slug: 'weddings/wedding-cost',
    category: 'wedding',
    parent: 'weddings',
    title: 'Maui Wedding Catering Cost — Published Numbers, Both Sides',
    h1: 'What wedding catering costs on Maui, with receipts.',
    meta: {
      description:
        'Maui wedding catering costs analyzed: market norms $80–$120 buffet and $120–$200 plated per person, resort F&B minimums $7,500–$15,000, and our published from-$150/guest lines with 20% service.',
    },
    intro:
      'Maui wedding catering is a market of hidden numbers — so this page publishes both sides: the market’s documented norms and our published lines, with the fee stack itemized. Arithmetic instead of adjectives.',
    sections: [
      {
        heading: 'The market, sourced',
        list: [
          'Maui catering norms: $80–$120 a head buffet, $120–$200 plated, service charges 18–22%',
          'Heavy pupū/cocktail formats: $60–$90 per person',
          'Resort F&B minimums: $7,500–$15,000 per event, service 23–25%',
          'Venue packages: Olowalu signature $15,000/30 guests; Grand Wailea packages $8,000–$19,800; Haiku Mill $2,500–$10,500 venue-only',
        ],
      },
      {
        heading: 'Our lines, published',
        body: [
          'Wedding-week food lines start from $150 a guest plus staffing — servers $55/hr, sous chefs $75/hr, four-hour floors. 20% service and Hawaiʻi GET up to 4.7120% appear on their own lines. There is no F&B minimum because there is no ballroom: the villa is yours.',
        ],
      },
      {
        heading: 'Where the week math lands',
        body: [
          'A 60-guest wedding week — welcome dinner, rehearsal, reception, recovery brunch — totals $31,500 in food lines on published rates. The same meals inside resort F&B programs start with $30,000–$60,000 in minimums before a single plate is chosen.',
        ],
        links: [{ label: 'The worked budget, line by line', href: 'weddings/wedding-week-budget' }],
      },
      {
        heading: 'How to read any Maui catering quote',
        body: [
          'Ask three questions of every quote, ours included: Is service itemized, and at what percent? Is GET on its own line? What is the deposit, and what happens if we cancel? A caterer who answers all three in writing is safe; the rest is negotiation.',
        ],
      },
    ],
    faq: [
      {
        q: 'What is a realistic catering budget for a 60-guest Maui wedding?',
        a: 'Market directories put buffet service at $4,800–$7,200 and plated at $7,200–$12,000 in food for 60, before service charges of 18–25% and bar costs. Our plated lines run from $150 a guest — inside the market band, with the fee stack itemized.',
      },
      {
        q: 'Why do resorts charge F&B minimums?',
        a: 'The ballroom is the product and the food is the rent — minimums guarantee the venue’s revenue regardless of your menu. An estate or villa reception has no equivalent floor, which is the structural saving.',
      },
      {
        q: 'Is your 20% service charge a gratuity?',
        a: 'No — it is a disclosed service charge on its own line, and gratuity is always voluntary on top. Hawaiʻi law (HRS §481B-14 posture) governs how such charges are disclosed; our wording is flagged for counsel verification before final lock.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Service-charge comparison', secondaryHref: 'weddings/service-charge-comparison' },
    keywords: ['Maui wedding catering cost'],
  },
  {
    slug: 'weddings/wedding-week-budget',
    category: 'wedding',
    parent: 'weddings/wedding-cost',
    title: 'Maui Wedding Week Food Budget — The Worked Example',
    h1: 'One week, five meals, every line shown.',
    meta: {
      description:
        'A worked Maui wedding-week food budget: the 60-guest example totaling $31,500 in food lines across four events, with staffing, 20% service, and GET itemized — illustrative math on published rates.',
    },
    intro:
      'This is the whole wedding-week argument on one page: a worked 60-guest budget where every number is arithmetic on published rates — ours and the market’s. Illustrative math, not a quote; the written quote is the confirmed total.',
    sections: [
      {
        heading: 'The 60-guest week',
        list: [
          'Welcome dinner, 60 guests × $150 = $9,000',
          'Rehearsal dinner, 30 guests × $150 = $4,500',
          'Reception, 60 guests × $200 mid-band = $12,000',
          'Recovery brunch, 40 guests × $150 = $6,000',
          'Food lines total: $31,500 before staffing, service, and GET',
        ],
      },
      {
        heading: 'The lines around the food',
        body: [
          'Staffing adds the published hourlys — roughly $55/hr per server at one per 10–12 guests, $75/hr sous chefs, four-hour floors per event. Then the fee stack: 20% service on its own line, Hawaiʻi GET up to 4.7120% on its own line. Every number traceable to the published card.',
        ],
      },
      {
        heading: 'The alternative, priced',
        body: [
          'Run the same week inside resort F&B programs: minimums of $7,500–$15,000 per event across four events is $30,000–$60,000 before menus, plus service at 23–25%. On our $31,500 example, the five-point service gap alone — 20% versus 25% — is worth $1,575.',
        ],
      },
      {
        heading: 'Scale it to your week',
        body: [
          'The formula is honest arithmetic: guests × the per-guest line, per event, plus staffing and the fee stack. Thirty guests cuts the food lines roughly in half; a premium-tier reception raises one line, not all four. The estimator runs your version.',
        ],
        links: [{ label: 'Run the estimator', href: 'pricing/estimate' }],
      },
    ],
    faq: [
      {
        q: 'Is $31,500 a quote?',
        a: 'No — it is illustrative math on published rates, every cell traceable to the rate card. Your written quote reflects your guest counts, menus, and staffing, and it is the confirmed total.',
      },
      {
        q: 'What is not in the $31,500?',
        a: 'Staffing hourlys, rentals, the bar cart, travel where it applies, 20% service, and GET — each appears as its own line in a real quote. Nothing hides inside the food price.',
      },
      {
        q: 'Can the week run under $20,000 in food?',
        a: 'Yes — a 40-guest week at base lines (welcome 40×$150, rehearsal 20×$150, reception 40×$150, brunch 25×$150) totals $18,750 in food lines before staffing and fees.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Wedding cost analysis', secondaryHref: 'weddings/wedding-cost' },
    keywords: ['Maui wedding week food budget'],
  },
  {
    slug: 'weddings/venues/wailea-makena',
    category: 'wedding',
    parent: 'weddings',
    title: 'Wailea–Mākena Wedding Venue Catering — The South Corridor',
    h1: 'Wailea–Mākena: the venue corridor, catered.',
    meta: {
      description:
        'Wedding catering across the Wailea–Mākena corridor: the Four Seasons–Grand Wailea–Andaz–Fairmont cluster, Hotel Wailea, Kukahiko Estate — villa and estate service from $150 a guest.',
    },
    intro:
      'The South Maui corridor holds the island’s densest wedding-venue cluster — Four Seasons, Grand Wailea, Andaz, Fairmont Kea Lani, Hotel Wailea, Kukahiko Estate — ringed by the villa stock where the week’s other meals happen.',
    sections: [
      {
        heading: 'How the corridor splits',
        body: [
          'Resort venues run their own ballrooms and F&B programs. Our ground is the layer around them: villa welcome dinners, estate receptions at Kukahiko, recovery brunches at the rental house. Most corridor weddings are hybrids — the resort takes the ceremony lawn, we take everything with a kitchen.',
        ],
      },
      {
        heading: 'Venue notes',
        list: [
          'Kukahiko Estate — 2–40 guests, caterer-built venue kitchen, planner-channel booking',
          'Hotel Wailea — adults-only, Relais & Châteaux; the Treehouse runs its own private-chef dinners',
          'The resort cluster — F&B minimums $7,500–$15,000 per event are the ballroom norm',
          'Makena Cove — DLNR-permitted ceremony sand, ~20-person cap, no structures',
        ],
      },
      {
        heading: 'The corridor advantage',
        body: [
          'Everything is fifteen minutes apart: the ceremony, the villa, the estate, the brunch. Guests never lose an hour to a shuttle; the crew never loses an hour to a load-in across the island. South Maui’s dry microclimate keeps the weather-backup conversation short.',
        ],
        links: [{ label: 'Wailea wedding catering', href: 'locations/wailea/wedding-catering' }],
      },
    ],
    faq: [
      {
        q: 'Can you cater a wedding at the Four Seasons or Grand Wailea?',
        a: 'Their ballrooms and lawns run in-house F&B with minimums. We cater the surrounding week — villa dinners, estate receptions, brunches — which is where most of the week’s meals happen anyway.',
      },
      {
        q: 'Is Kukahiko good for a 40-guest wedding?',
        a: 'It is arguably Maui’s best 2–40 guest venue: ceremony at the water, lawn reception, and a kitchen built for outside caterers. Booked through its planner channel; we coordinate the culinary side.',
      },
    ],
    cta: { label: 'Plan the week', href: 'quote', secondaryLabel: 'Estate weddings', secondaryHref: 'weddings/estate-wedding' },
    keywords: ['Wailea Makena wedding venue catering'],
  },
  {
    slug: 'weddings/venues/kapalua',
    category: 'wedding',
    parent: 'weddings',
    title: 'Kapalua Wedding Venue Catering — Ritz-Carlton to the Cliff House',
    h1: 'Kapalua weddings: the ridge, the bay, the point.',
    meta: {
      description:
        'Wedding catering across Kapalua: the Ritz-Carlton’s 54-acre wedding ground, Montage, Merriman’s, and the Cliff House — with villa and private-venue service from $150 a guest plus staffing.',
    },
    intro:
      'Kapalua is Maui’s destination-wedding summit: the Ritz-Carlton’s 54 acres of lawns and lava points, Montage’s residences, Merriman’s oceanfront, and the Cliff House. The villa stock around them is where we cook.',
    sections: [
      {
        heading: 'The venue map',
        list: [
          'Ritz-Carlton Kapalua — 468 rooms, multiple lawns, the market’s most developed wedding-weekend programming',
          'Montage Kapalua Bay — residences and event lawns',
          'Merriman’s Kapalua — the point, the sunset, the restaurant wedding',
          'The Cliff House — the small-venue icon above the water',
        ],
      },
      {
        heading: 'Where we fit',
        body: [
          'Resort programming covers the ballroom hours — the Ritz literally markets welcome parties and farewell brunches. Our product is the same week on private ground: the ridge-villa welcome dinner, the rehearsal in a Montage residence kitchen, the brunch nobody has to dress for.',
        ],
        links: [{ label: 'Kapalua wedding catering', href: 'locations/kapalua/wedding-catering' }],
      },
      {
        heading: 'The Kapalua details',
        body: [
          'Base zone — no travel line this far north. Evenings run cooler than Wailea’s, so coursing and blankets plan accordingly. Winter weddings get the whales as uninvited but welcome entertainment.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do you cater inside the Ritz-Carlton or Montage?',
        a: 'Their event spaces run in-house F&B. We serve the residences and private venues around them — and for wedding weeks split across both, one contract covers our half.',
      },
      {
        q: 'What is the best Kapalua month for an outdoor reception?',
        a: 'April through October runs driest; winter brings passing showers and whale season. Every outdoor plan we quote names a covered backup.',
      },
    ],
    cta: { label: 'Plan the week', href: 'quote', secondaryLabel: 'The wedding week', secondaryHref: 'weddings/wedding-week' },
    keywords: ['Kapalua wedding venue catering'],
  },
  {
    slug: 'weddings/venues/west-maui',
    category: 'wedding',
    parent: 'weddings',
    title: 'Kāʻanapali & West Maui Wedding Venue Catering',
    h1: 'West Maui weddings: the corridor that came back.',
    meta: {
      description:
        'Wedding catering across Kāʻanapali and West Maui: the Royal Lahaina–Sheraton–Hyatt corridor, the Steeple House, and estate venues — served with a support-local posture, from $150 a guest.',
    },
    intro:
      'West Maui’s wedding corridor — the Royal Lahaina, Sheraton, Hyatt strip, the Steeple House, and Olowalu’s estate ground at the south end — is open and hosting. We serve it with the posture the community asks for: book direct, spend local, tread gently.',
    sections: [
      {
        heading: 'The venue line',
        list: [
          'Royal Lahaina, Sheraton, Hyatt Regency — the Kāʻanapali resort cluster',
          'The Steeple House — the restored chapel venue above the strip',
          'Olowalu Plantation House — the marquee estate venue that survived the fire',
          'The condo-belt villas — Honua Kai class, big-group wedding weeks',
        ],
      },
      {
        heading: 'Olowalu, specifically',
        body: [
          'Olowalu Plantation House publishes its signature experience at $15,000 for up to 30 guests and $18,000 for up to 40, catering included, booked through its planner roster. Where an outside caterer fits your plan there, we work through your planner — the venue gates access, and we respect the gate.',
        ],
      },
      {
        heading: 'The sensitivity, stated',
        body: [
          'West Maui’s recovery is ongoing and real. Our imagery centers the corridor’s present, not the fire’s aftermath; our dollars go to Maui suppliers first; and we do not treat anyone’s rebuilding neighborhood as a wedding backdrop.',
        ],
        links: [{ label: 'Visiting West Maui respectfully', href: 'guides/west-maui-visitor-note' }],
      },
    ],
    faq: [
      {
        q: 'Is it appropriate to hold a wedding in West Maui now?',
        a: 'Yes — the corridor’s venues and the community’s leadership both welcome celebrations. Respectful bookings support the recovery: local staff, local suppliers, local spend.',
      },
      {
        q: 'Can you cater at Olowalu Plantation House?',
        a: 'Through the venue’s planner structure. Olowalu’s published packages include their catering; outside-caterer arrangements run through your planner, and we coordinate inside that channel.',
      },
    ],
    cta: { label: 'Plan the week', href: 'quote', secondaryLabel: 'Kāʻanapali catering', secondaryHref: 'locations/kaanapali/catering' },
    keywords: ['Kaanapali wedding venue catering'],
  },
  {
    slug: 'weddings/venues/upcountry-north-shore',
    category: 'wedding',
    parent: 'weddings',
    title: 'Haiku Mill & Upcountry Wedding Catering — The Garden Route',
    h1: 'Upcountry and North Shore: the garden weddings.',
    meta: {
      description:
        'Wedding catering for Haiku Mill, Hui Noʻeau, and Upcountry–North Shore venues: preferred-vendor rules and the $650 outside-vendor fee explained, travel from $75, farm-belt menus.',
    },
    intro:
      'The garden route — Haiku Mill’s overgrown-ruin romance, Hui Noʻeau’s grounds, Maui Pineapple Chapel, private Kula estates — trades beach sunsets for wisteria and farm air. The food gets more local the higher you climb.',
    sections: [
      {
        heading: 'Haiku Mill, decoded',
        body: [
          'Haiku Mill publishes venue rates from $2,500 for elopements to $10,500 for a full Saturday, plus production fees and a required tent above 22 guests. Its preferred-vendor list gates catering — vendors not on it carry a $650 outside-vendor fee. We tell you which applies before you sign, and we work with your planner either way.',
        ],
      },
      {
        heading: 'The garden menu',
        body: [
          'Upcountry is the farm belt: Kula greens, onions, strawberries, and the canoe crops at their source. Menus up here lean into it — the sourcing story stops being marketing and becomes a ten-minute drive.',
        ],
        links: [{ label: 'The canoe-crops menu', href: 'menus/canoe-crops-island' }],
      },
      {
        heading: 'The logistics, named',
        list: [
          'Upcountry travel from $75; Pāʻia/Haʻikū quoted at inquiry with the reason',
          'Cooler evenings — hot-first coursing and heater coordination',
          'Rain is real on the North Shore; every quote names the covered backup',
        ],
      },
    ],
    faq: [
      {
        q: 'What does Haiku Mill cost with outside catering?',
        a: 'Venue rates run $2,500–$10,500 by day and format, plus production and tent fees; add the $650 outside-vendor fee if we are not on the list, and our published per-guest lines from $150. Your written quote shows all of it.',
      },
      {
        q: 'Is the North Shore too wet for an outdoor reception?',
        a: 'Not too wet — honestly wetter. Haiku Mill’s required tent above 22 guests exists for a reason. We plan menus and service around the cover the venue provides.',
      },
    ],
    cta: { label: 'Plan the week', href: 'quote', secondaryLabel: 'Upcountry wedding catering', secondaryHref: 'locations/kula-upcountry/wedding-catering' },
    keywords: ['Haiku Mill wedding catering'],
  },
  {
    slug: 'weddings/planner-channel',
    category: 'wedding',
    parent: 'weddings',
    title: 'Maui Wedding Planner Catering Program — The B2B Door',
    h1: 'Planners: the vendor that makes you look good.',
    meta: {
      description:
        'A catering program for Maui wedding planners: published per-guest lines your clients can verify, vendor-list cooperation, one-contract wedding weeks, and a direct line that answers.',
    },
    intro:
      'Maui’s estate venues gate access through approved planners — which makes the planner our most important relationship on the island. This page is for you: the numbers your clients can check, the cooperation your venues require, and a direct line.',
    sections: [
      {
        heading: 'Why planners put us on the list',
        body: [
          'Published pricing means your client can verify every number without a phone call — no “call for quote” friction inside your budget deck. The written quote is the confirmed total, so the invoice you reconcile matches the proposal you approved.',
        ],
      },
      {
        heading: 'How we work inside your venues',
        list: [
          'Vendor-list cooperation — including honest disclosure of fees like Haiku Mill’s $650 outside-vendor line',
          'Timeline and load-in documentation your venue coordinator actually asks for',
          'Staffing certificates and day-of contact discipline',
          'Rentals coordinated through the quote, not a surprise vendor on your floor plan',
        ],
      },
      {
        heading: 'The wedding-week pitch to your clients',
        body: [
          'One culinary contract for the week — welcome dinner through recovery brunch — at published per-guest lines from $150 plus staffing, 20% service itemized. Against resort F&B minimums and 23–25% service, it is the easiest value conversation in your deck.',
        ],
        links: [{ label: 'The worked budget', href: 'weddings/wedding-week-budget' }],
      },
      {
        heading: 'The direct line',
        body: [
          'Planner inquiries route through the partner channel, not the consumer estimator — you get a human answer with real availability, usually within a day.',
        ],
        links: [{ label: 'Partner with us', href: 'partners/wedding-planners' }],
      },
    ],
    faq: [
      {
        q: 'Do you pay planner commissions?',
        a: 'Our pricing is published and identical for every client — referral economics are discussed directly in the partner channel, never baked into a client’s food lines.',
      },
      {
        q: 'Can you handle a planner’s full wedding-week calendar?',
        a: 'Yes — multi-week contracts across a season are quoted per week with the same published lines. Capacity is stated honestly: we do not hold dates we cannot crew.',
      },
    ],
    cta: { label: 'Open the partner channel', href: 'partners/wedding-planners', secondaryLabel: 'The wedding week', secondaryHref: 'weddings/wedding-week' },
    keywords: ['Maui wedding planner catering program'],
  },
  {
    slug: 'weddings/service-charge-comparison',
    category: 'wedding',
    parent: 'weddings/wedding-cost',
    title: 'Maui Resort Wedding Catering Fees Compared — 20% vs 23–25%',
    h1: 'The service-charge page: 20% versus 23–25%.',
    meta: {
      description:
        'Maui wedding catering service charges compared: resort F&B at 23–25% plus $7,500–$15,000 minimums versus our 20% service on its own line — a five-point gap worth $1,575 on a $31,500 week.',
    },
    intro:
      'The least-read line of a Maui wedding contract is the service charge — and it is where five figures hide. Resorts run 23–25% on top of F&B minimums; our service is 20%, always on its own line. This page does the arithmetic.',
    sections: [
      {
        heading: 'The comparison, quantified',
        list: [
          'Resort pattern: F&B minimum $7,500–$15,000 per event + 23–25% service + GET',
          'Independent-caterer norm: 18–22% service, sometimes buried',
          'myCHEF: 20% service, always its own line, no F&B minimum, GET up to 4.7120% its own line',
          'On a $31,500 wedding week: 25% is $7,875; 20% is $6,300 — a $1,575 difference',
        ],
      },
      {
        heading: 'Why we can run 20%',
        body: [
          'No ballroom overhead, no venue F&B floor, no banquet department to feed. The 20% covers what a service charge should cover, disclosed on its own line under Hawaiʻi’s service-charge disclosure posture — wording flagged for counsel verification, posture published anyway.',
        ],
      },
      {
        heading: 'The questions to ask any caterer',
        body: [
          'What percent is service, and is it itemized? Is there an F&B minimum or room fee attached? Is GET shown separately at the correct current rate? What happens to the deposit if the date moves? Four questions, and every honest operator answers them in writing.',
        ],
        links: [{ label: 'The fee stack, explained', href: 'pricing/fee-stack' }],
      },
    ],
    faq: [
      {
        q: 'Is a lower service charge a red flag?',
        a: 'Not when the rest of the quote is itemized — opacity is the red flag, not the number. Ours is 20%, on its own line, next to published food prices you can check without calling anyone.',
      },
      {
        q: 'Does the 20% go to the staff?',
        a: 'The charge covers service operations and is disclosed as such; gratuity for exceptional service is always voluntary and separate. Hawaiʻi’s HRS §481B-14 disclosure posture governs the wording, which is pending counsel verification.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Wedding cost analysis', secondaryHref: 'weddings/wedding-cost' },
    keywords: ['Maui resort wedding catering fees compared'],
  },
  {
    slug: 'weddings/villa-reception-guide',
    category: 'wedding',
    parent: 'weddings/estate-wedding',
    title: 'How to Host a Villa Wedding Reception on Maui',
    h1: 'The villa reception, planned properly.',
    meta: {
      description:
        'The logistics guide to a Maui villa wedding reception: kitchen requirements, rentals, staffing ratios, power and parking, noise rules, and the timeline from first setup to last plate.',
    },
    intro:
      'A villa reception is the best-value wedding format on Maui — if the logistics are done properly. This is the working guide: kitchen, rentals, staffing, power, parking, and the timeline.',
    sections: [
      {
        heading: 'The kitchen question',
        body: [
          'The villa’s kitchen determines the menu’s ceiling. A full chef’s kitchen supports plated coursing for 60; a standard villa kitchen suits family-style and premium buffet. Send photos early — we assess honestly before quoting rather than discovering limits on the day.',
        ],
        links: [{ label: 'What kitchen a private chef needs', href: 'guides/villa-kitchen' }],
      },
      {
        heading: 'Rentals and layout',
        body: [
          'Tables, linens, glassware, flatware, and service stations coordinate through the quote with rental partners. The layout rule: the dance floor goes where the kitchen noise will not follow, and the bar cart parks where the line will not cross the dinner service.',
        ],
      },
      {
        heading: 'Staffing ratios',
        list: [
          'Plated: one server per 10–12 guests at $55/hr',
          'Kitchen: chef plus one sous per 25–30 guests at $75/hr',
          'Four-hour floors per event; setup and strike inside the plan',
          'Bar: the packaged cart from $800/4hr; alcohol client-supplied or licensed referral',
        ],
      },
      {
        heading: 'The unglamorous essentials',
        body: [
          'Power for lighting and music, parking or shuttle for 40+ guests, the neighborhood’s noise expectations, and a weather backup with a roof. Maui villas handle all four gracefully when someone asks early — the quote process asks.',
        ],
      },
      {
        heading: 'The timeline',
        body: [
          'Load-in early afternoon, ceremony elsewhere or on the lawn, pūpū at golden hour, dinner at dusk, last plate and kitchen reset before the house sleeps. The written quote carries the actual hour-by-hour for your date.',
        ],
      },
    ],
    faq: [
      {
        q: 'How many guests can a villa reception hold?',
        a: 'Most Maui villas host 20–60 comfortably; our staffed service runs to 75, and over 75 is a written exception. The property’s own rules — and its kitchen — set the real ceiling.',
      },
      {
        q: 'Do villas allow wedding receptions?',
        a: 'Many do, some do not, and some require event fees or specific insurance. Confirm with your property manager first; we provide whatever documentation the property asks for.',
      },
      {
        q: 'What does the full villa reception cost?',
        a: 'From $150 a guest plus staffing, rentals, and the fee stack — a 50-guest villa reception typically totals meaningfully under the resort F&B minimum for the same headcount. The written quote shows every line.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Estate weddings', secondaryHref: 'weddings/estate-wedding' },
    keywords: ['how to host a villa wedding reception Maui'],
  },
];

/* ================= MENUS (12) ================= */
const menus: ContentRecord[] = [
  {
    slug: 'menus',
    category: 'menu',
    title: 'Private Chef Menus Maui — The Catalogue',
    h1: 'The menus. Samples, starting points, never straitjackets.',
    meta: {
      description:
        'Private chef menus on Maui: the Wailea Sunset signature, family-style, tasting, pūpū and grazing, brunch, plant-based, and canoe-crop menus — every one finalized in your written quote.',
      ogImage: '/img/maui/menu-wailea-sunset.jpg',
    },
    intro:
      'Sample menus from the Maui kitchen. Every menu adapts — eleven dietary flags, one kitchen, separate prep for allergens — and every menu is finalized in the written quote, not on this page.',
    sections: [
      {
        heading: 'Wailea Sunset',
        body: ['The signature: canoe-crop storytelling, macadamia-crusted catch, a lilikoi finish. Plated, $150–$250 a guest.'],
        links: [{ label: 'The signature menu', href: 'menus/signature-three-course' }],
        media: { src: '/img/maui/menu-wailea-sunset.jpg', alt: 'Macadamia-crusted catch with lilikoi accent, dusk light', ratio: '3/2' },
      },
      {
        heading: 'The gathering formats',
        body: ['Family-style, pūpū and grazing, and the grill — the formats Maui villas run on.'],
        links: [
          { label: 'Family-style', href: 'menus/family-style' },
          { label: 'Pūpū & grazing', href: 'menus/pupu-and-grazing' },
          { label: 'BBQ & grill', href: 'menus/bbq-and-grill' },
        ],
      },
      {
        heading: 'The long formats',
        body: ['Tasting menus and the canoe-crops dinner — the island on a plate, course by course.'],
        links: [
          { label: 'Tasting menu', href: 'menus/tasting-menu' },
          { label: 'Canoe crops & island', href: 'menus/canoe-crops-island' },
        ],
      },
      {
        heading: 'Mornings and everyone else',
        body: ['Brunch spreads, the holiday table, kids’ plates, and the dietary-first menus.'],
        links: [
          { label: 'Breakfast & brunch', href: 'menus/breakfast-and-brunch' },
          { label: 'Vegetarian & vegan', href: 'menus/vegetarian-vegan' },
          { label: 'Gluten-free', href: 'menus/gluten-free' },
          { label: 'Kids', href: 'menus/kids' },
          { label: 'Holiday', href: 'menus/holiday' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'See pricing', secondaryHref: 'pricing' },
    keywords: ['private chef menus Maui'],
  },
  {
    slug: 'menus/signature-three-course',
    category: 'menu',
    parent: 'menus',
    title: 'Maui Signature Dinner Menu — “Wailea Sunset”',
    h1: 'Wailea Sunset — the signature menu.',
    meta: {
      description:
        'The Maui signature dinner: canoe-crop starters, macadamia-crusted island catch, lilikoi finish — plated three courses inside the published $150–$250 a guest band.',
      ogImage: '/img/maui/menu-wailea-sunset.jpg',
    },
    intro:
      'The menu the Maui site is named for: canoe crops up front, the day’s catch in a macadamia crust, and lilikoi at the end. Three courses, plated, inside the published $150–$250 band.',
    sections: [
      {
        heading: 'The courses',
        media: { src: '/img/maui/menu-wailea-sunset.jpg', alt: 'Macadamia-crusted catch with lilikoi accent on a dark plate, dusk tones', ratio: '3/2' },
        list: [
          'First — taro-and-ʻulu composition with Kula greens; the canoe crops introduced properly',
          'Main — macadamia-crusted island catch, coconut-vegetable accompaniment',
          'Finish — lilikoi dessert, the Maui signature ending',
        ],
        body: [
          'Courses shift with the market — the catch is whatever the boats brought, the greens are Upcountry’s morning. The structure holds; the ingredients stay honest.',
        ],
      },
      {
        heading: 'Dietary flags',
        body: [
          'The menu adapts to all eleven flags; gluten-free and dairy-free versions lose nothing, and the plant-based version — taro, ʻulu, breadfruit at the center — is a destination in itself.',
        ],
      },
      {
        heading: 'Price and booking',
        body: [
          'Plated inside the $150–$250 a guest signature band, groceries included, with 20% service and GET on their own lines. Premium additions — lobster, a chef’s-table course — quoted in writing.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the menu fixed?',
        a: 'The structure is; the ingredients follow the market. Your written quote names the actual menu for your date before the 50% deposit moves.',
      },
      {
        q: 'Can it run family-style?',
        a: 'Yes — the signature translates to platters for groups of ten or more, same per-guest band.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'All menus', secondaryHref: 'menus' },
    keywords: ['Maui signature dinner menu'],
  },
  {
    slug: 'menus/family-style',
    category: 'menu',
    parent: 'menus',
    title: 'Family-Style Menu Maui — Platters Down the Long Table',
    h1: 'Family-style: the format Maui was built for.',
    meta: {
      description:
        'Family-style private chef menus on Maui: generous shared platters for 10–75, inside the $150–$250 per-guest band. The welcome-dinner and reunion format.',
    },
    intro:
      'Platters down the middle of a long lānai table — the format that turns twenty people into one dinner party. Family-style runs inside the published $150–$250 per-guest band.',
    sections: [
      {
        heading: 'What lands on the table',
        list: [
          'Big salads built on Kula greens and island fruit',
          'Grilled and roasted proteins — the day’s catch, Maui-raised meats',
          'Canoe-crop sides: taro, ʻulu, sweet potato done properly',
          'Dessert platters with a lilikoi anchor',
        ],
      },
      {
        heading: 'Where it shines',
        body: [
          'Welcome dinners, family reunions, and any night where the point is each other. Family-style feeds faster than plated and loosens a room better — the first night of a wedding week almost always runs this way.',
        ],
        links: [{ label: 'Welcome dinners', href: 'weddings/welcome-dinner' }],
      },
      {
        heading: 'Service and staffing',
        body: [
          'Platters need hands: roughly one server per 14–16 guests at $55/hr. The quote sizes the crew to the table.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is family-style cheaper than plated?',
        a: 'The per-guest band is the same — the difference is rhythm, not price. Staffing runs slightly lighter, which the quote reflects.',
      },
      {
        q: 'Can you do dietary tracks family-style?',
        a: 'Yes — flagged platters are labeled and placed deliberately, so the vegan dishes reach the vegan guests first.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'All menus', secondaryHref: 'menus' },
    keywords: ['family style menu Maui'],
  },
  {
    slug: 'menus/tasting-menu',
    category: 'menu',
    parent: 'menus',
    title: 'Tasting Menu Private Chef Maui — The Long Format',
    h1: 'Five to seven courses, at the villa’s pace.',
    meta: {
      description:
        'Tasting-menu private chef service on Maui: five-to-seven-course coursed dinners in the premium band, $190–$275 a guest, chef’s-table formats to $400+. Market-written menus.',
    },
    intro:
      'The tasting format stretches the evening properly: five to seven courses over two-plus hours, written around the morning’s market run. Premium band, $190–$275 a guest; chef’s-table service reaches $275–$400+.',
    sections: [
      {
        heading: 'The arc',
        body: [
          'Small to large, raw to cooked, ocean to land to sweet — with Maui’s ingredients carrying the narrative: day-boat fish, Upcountry produce, canoe crops, lilikoi to finish. Each course arrives with a sentence, not a lecture.',
        ],
      },
      {
        heading: 'What drives the price',
        body: [
          'Coursing multiplies labor — more plates, more hands, more time per guest. The premium band reflects that honestly; staffing beyond the chef quotes separately at the published hourlys.',
        ],
      },
      {
        heading: 'Good to know',
        list: [
          'Six to twelve guests is the sweet spot',
          'Wine is yours or sourced on request — we do not sell alcohol',
          'Dietary flags are coursed in, not subtracted out',
        ],
      },
    ],
    faq: [
      {
        q: 'How long does a tasting dinner take?',
        a: 'Plan two to two and a half hours from first course to dessert. The villa’s pace, not a dining room’s turn time.',
      },
      {
        q: 'Can the tasting menu go fully plant-based?',
        a: 'Yes — a plant-based tasting built on canoe crops and Upcountry produce is one of the strongest menus we run anywhere in the network.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Chef’s table', secondaryHref: 'services/chefs-table' },
    keywords: ['tasting menu private chef Maui'],
  },
  {
    slug: 'menus/pupu-and-grazing',
    category: 'menu',
    parent: 'menus',
    title: 'Pūpū Platters & Grazing Maui — The Standing-Dinner Menu',
    h1: 'Pūpū and grazing: dinner that moves with the party.',
    meta: {
      description:
        'Pūpū platters and grazing menus on Maui: passed and stationed formats for receptions, cocktail hours, and villa parties — priced per guest within published lines, staffed service available.',
    },
    intro:
      'The pūpū hour is Maui’s native format — small plates, big sunset, nobody sitting down. Grazing tables and passed service run receptions, ceremony-adjacent hours, and villa parties.',
    sections: [
      {
        heading: 'The spread',
        list: [
          'Passed pūpū — seared catches, taro-based bites, island-fruit accents',
          'The grazing table — cheeses, crudités from Upcountry, house dips and breads',
          'Station upgrades — poke-and-rice, the grill station, the dessert landing',
        ],
      },
      {
        heading: 'Where it fits the wedding week',
        body: [
          'The ceremony-adjacent hour is the format’s starring role: the gap between vows and reception, fed properly, timed to the light. It also anchors welcome parties and bachelorette nights.',
        ],
        links: [{ label: 'The wedding week', href: 'weddings/wedding-week' }],
      },
      {
        heading: 'Pricing',
        body: [
          'Per-guest within the published lines depending on depth — a cocktail hour is not a dinner and is not priced like one. Staffing at the standard hourlys; the written quote carries the real numbers.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can pūpū replace dinner?',
        a: 'For a two-hour party, yes — we scale piece counts to meal-replacement density and say so in the quote. For a five-hour reception, pair grazing with a real food course.',
      },
      {
        q: 'Do grazing tables work outdoors on Maui?',
        a: 'Yes with discipline: shaded placement, timed replenishment, and covers between passes. The trade winds are free; the flies are not invited.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'All menus', secondaryHref: 'menus' },
    keywords: ['pupu platters Maui'],
  },
  {
    slug: 'menus/bbq-and-grill',
    category: 'menu',
    parent: 'menus',
    title: 'BBQ & Grill Menu Maui — The Villa Grill, Taken Seriously',
    h1: 'The villa grill, run by someone who knows fire.',
    meta: {
      description:
        'BBQ and grill private chef menus on Maui: wood-and-gas grill formats for villas, family-style service inside the $150–$250 band. The welcome-dinner classic.',
    },
    intro:
      'Every Maui villa has a grill; almost none of them get used properly. The grill format puts a chef on yours — live-fire fish, marinated meats, charred canoe-crop sides, family-style service.',
    sections: [
      {
        heading: 'The menu shape',
        list: [
          'Grilled day-boat fish with lilikoi butter',
          'Marinated and smoked meats, sliced at the board',
          'Charred ʻulu, sweet potato, and Upcountry vegetables',
          'Big salads and grilled-fruit desserts',
        ],
      },
      {
        heading: 'Where it fits',
        body: [
          'The casual anchor night: welcome dinners, reunion evenings, the night the teenagers outnumber everyone. Grill service reads relaxed and eats seriously — the most requested family format we run.',
        ],
        links: [{ label: 'Welcome dinners', href: 'weddings/welcome-dinner' }],
      },
      {
        heading: 'Practical notes',
        body: [
          'We run the villa’s grill or bring equipment where the quote calls for it. Condo-complex grill rules vary by property — confirmed at inquiry, along with everything else.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the grill menu cheaper?',
        a: 'It sits inside the same $150–$250 band — casual in format, not in sourcing. The savings show up in staffing lightness, which the quote reflects.',
      },
      {
        q: 'Can you do a whole fish on the grill?',
        a: 'Yes — whole grilled catch is the format’s centerpiece when the boats cooperate, and the menu call decides it a day out.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'All menus', secondaryHref: 'menus' },
    keywords: ['bbq catering menu Maui'],
  },
  {
    slug: 'menus/breakfast-and-brunch',
    category: 'menu',
    parent: 'menus',
    title: 'Breakfast & Brunch Menus Maui — The Morning Service',
    h1: 'Mornings, catered.',
    meta: {
      description:
        'Breakfast and brunch private chef menus on Maui: villa brunches, bridal mornings, and recovery spreads — island fruit, ʻulu hash, proper coffee, per-guest pricing in writing.',
    },
    intro:
      'The morning menu family: villa brunches, bridal-morning spreads, and the wedding week’s recovery brunch. Island fruit, eggs and ʻulu hash, house pastries, and coffee that keeps coming.',
    sections: [
      {
        heading: 'The spread',
        list: [
          'Island fruit boards — mango, papaya, lilikoi, whatever the market had',
          'Hot line: eggs any style, ʻulu hash, taro pancakes',
          'House pastries and malasada-adjacent sweets',
          'Coffee program, juices, and your bottles if mimosas are the plan',
        ],
      },
      {
        heading: 'The three bookings',
        body: [
          'The villa brunch for the whole house; the bridal morning that feeds the getting-ready hours; the recovery brunch that closes the wedding week. All three run per-guest within published lines plus staffing.',
        ],
        links: [
          { label: 'Brunch service', href: 'services/brunch-service' },
          { label: 'Recovery brunch', href: 'weddings/recovery-brunch' },
        ],
      },
      {
        heading: 'Timing',
        body: [
          'Service windows typically run 8:30 to noon. Bridal mornings flex to the ceremony clock — the quote carries the real schedule.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can brunch be part of a Stay Chef week?',
        a: 'Yes — on Stay Chef days breakfast and brunch are simply part of the day’s rhythm, no separate booking.',
      },
      {
        q: 'Do you do early breakfasts before excursions?',
        a: 'Yes — 6am departures get pre-dawn coffee and packable breakfasts. The day rate covers the flexibility.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'All menus', secondaryHref: 'menus' },
    keywords: ['brunch menu private chef Maui'],
  },
  {
    slug: 'menus/vegetarian-vegan',
    category: 'menu',
    parent: 'menus',
    title: 'Vegan Private Chef Menu Maui — Plant-Forward, Not Apologetic',
    h1: 'The plant-based menu is a destination, not a workaround.',
    meta: {
      description:
        'Vegetarian and vegan private chef menus on Maui: canoe-crop and Upcountry-produce menus designed plant-first — taro, ʻulu, breadfruit, lilikoi — with separate allergen prep.',
    },
    intro:
      'Maui might be the easiest place in the country to cook plant-based at a high level: the farm belt, the canoe crops, the fruit. These menus are designed plant-first — nothing substituted, nothing missing.',
    sections: [
      {
        heading: 'The pantry',
        body: [
          'Taro, ʻulu, breadfruit, sweet potato, coconut — the canoe crops carry protein, starch, and richness without imitation products. Upcountry greens, herbs, and fruit do the rest. The menu reads like a place, not a restriction.',
        ],
        links: [{ label: 'The canoe-crops menu', href: 'menus/canoe-crops-island' }],
      },
      {
        heading: 'Formats',
        body: [
          'Plant-based versions of every format — signature coursing, family-style, tasting menus, brunch — at the same published per-guest lines. A mixed table runs the plant track in parallel, plated to match.',
        ],
      },
      {
        heading: 'Allergen discipline',
        body: [
          'Separate prep surfaces and dedicated utensils for allergen flags; celiac-level gluten-free and nut-free handled as protocols. The dietary system is written into every quote that carries a flag.',
        ],
        links: [{ label: 'Dietary depth', href: 'services/dietary' }],
      },
    ],
    faq: [
      {
        q: 'Does a vegan menu cost the same?',
        a: 'Yes — the per-guest band is identical. Ingredient costs land in groceries at cost with receipts, which on Maui often favors the plant-based table.',
      },
      {
        q: 'Can you cook vegan for a retreat week?',
        a: 'That is the retreat product’s home ground — multi-day plant-forward tables with protocol labels per meal.',
        links: [{ label: 'Retreat catering', href: '/maui/services/retreat-catering' }],
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'All menus', secondaryHref: 'menus' },
    keywords: ['vegan private chef menu Maui'],
  },
  {
    slug: 'menus/gluten-free',
    category: 'menu',
    parent: 'menus',
    title: 'Gluten-Free Private Chef Maui — Protocol, Not Preference',
    h1: 'Gluten-free, handled like celiac matters.',
    meta: {
      description:
        'Gluten-free private chef menus on Maui: celiac-level protocols with separate prep, dedicated utensils, and menus designed around the island’s naturally gluten-light pantry.',
    },
    intro:
      'Maui’s pantry is naturally gluten-light — rice, taro, ʻulu, fish, fruit — which makes proper gluten-free cooking here a design choice, not a deprivation. Celiac-level requests run as full protocols.',
    sections: [
      {
        heading: 'The protocol',
        list: [
          'Separate prep surfaces and dedicated utensils',
          'Soy-sauce and hidden-gluten audit across every sauce and stock',
          'Written confirmation of the GF plan inside your quote',
        ],
      },
      {
        heading: 'The menu reality',
        body: [
          'Most Maui menus convert to gluten-free without a single visible compromise — the crust is macadamia, the starch is taro, the thickener was never flour. Where a dish needs redesign, it gets redesigned, not dusted with a substitute.',
        ],
      },
      {
        heading: 'Mixed tables',
        body: [
          'One celiac guest at a table of twelve is routine: their courses run in parallel, plated and flagged, timed with the table. Nobody eats a visibly lesser meal.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is your kitchen certified gluten-free?',
        a: 'We cook in your villa’s kitchen, not a certified facility — which is why the protocol is separate prep, dedicated utensils, and a written plan. For celiac guests we say exactly what we can and cannot guarantee.',
      },
      {
        q: 'Can kids’ plates be gluten-free too?',
        a: 'Yes — GF kids’ plates are common, and the early-service format makes them easy to run alongside everything else.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Dietary depth', secondaryHref: 'services/dietary' },
    keywords: ['gluten free private chef Maui'],
  },
  {
    slug: 'menus/kids',
    category: 'menu',
    parent: 'menus',
    title: 'Kids Menu Private Chef Maui — Real Food, Smaller and Earlier',
    h1: 'Kids’ plates: real food, earlier, no beige buffet.',
    meta: {
      description:
        'Kids’ menus from a private chef on Maui: early dinner service with real food in kid-sized forms, allergen-aware, quoted honestly inside the family dinner.',
    },
    intro:
      'The kids’ menu philosophy is short: the same ingredients as the adults, reshaped for smaller hands and earlier bedtimes. No frozen beige — and no adult per-guest price for a six-year-old’s plate.',
    sections: [
      {
        heading: 'What kids actually get',
        list: [
          'Grilled fish and rice — the Maui kid classic, done fresh',
          'Pastas and noodle bowls built that afternoon',
          'Fruit plates that read as dessert',
          'Familiar anchors for the cautious eater, named in the menu call',
        ],
      },
      {
        heading: 'The two-service rhythm',
        body: [
          'Kids eat at five-thirty; adults sit at golden hour. One kitchen runs both, the house stays calm, and bedtime happens on schedule — which is to say the adults’ dinner actually happens.',
        ],
        links: [{ label: 'Kid-friendly service', href: 'services/kids-menus' }],
      },
      {
        heading: 'Honest pricing',
        body: [
          'Kids’ plates quote as reduced lines inside the same dinner — portions and coursing differ, so the price does too. The quote shows the split plainly.',
        ],
      },
    ],
    faq: [
      {
        q: 'My child only eats five things. Can you work with that?',
        a: 'Yes — the menu call exists for exactly this. We build the week’s kids’ plates around the safe list and quietly widen it if the child is curious.',
      },
      {
        q: 'Can you handle a child’s severe allergy?',
        a: 'Yes — flagged allergies get separate prep and a written plan. Tell us at inquiry and the whole week’s menus account for it.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Family reunions', secondaryHref: 'occasions/family-reunion' },
    keywords: ['kids menu private chef Maui'],
  },
  {
    slug: 'menus/canoe-crops-island',
    category: 'menu',
    parent: 'menus',
    title: 'Hawaiian Farm-to-Table Menu Maui — The Canoe Crops Dinner',
    h1: 'The canoe-crops dinner: the island, coursed.',
    meta: {
      description:
        'A canoe-crop tasting menu on Maui: taro, ʻulu, coconut, sweet potato, and breadfruit at the center — the Hawaiian farm-to-table dinner built on what the islands actually grow.',
    },
    intro:
      'The canoe crops — taro, ʻulu, coconut, sweet potato, breadfruit — are the ingredients that crossed an ocean to feed these islands. This menu puts them at the center of a coursed dinner, with day-boat fish and Upcountry produce in support.',
    sections: [
      {
        heading: 'The arc',
        list: [
          'ʻUlu three ways across the early courses — the most underrated starch in the Pacific',
          'Taro as more than poi: roasted, crisped, puréed',
          'Coconut running through sauces and the dessert course',
          'The day’s catch or Maui-raised meat where the table eats them',
        ],
      },
      {
        heading: 'Why it matters',
        body: [
          'Farm-to-table on Maui is not an aesthetic — the farm belt is thirty minutes from the dining table, and buying from Maui farmers first is how the menu stays honest. This is the dinner that explains the island better than a tour.',
        ],
      },
      {
        heading: 'Formats and price',
        body: [
          'Coursed in the premium band ($190–$275 a guest) or adapted to signature family-style ($150–$250). The plant-based version is the menu’s natural state, not an adaptation.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is this a lūʻau?',
        a: 'No — it is a coursed dinner built on indigenous crops, without the costume imagery or buffet theater. The ingredients get respect; the format stays a dinner.',
      },
      {
        q: 'Can the whole menu be plant-based?',
        a: 'Yes — the canoe crops make it the menu’s most natural form.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'All menus', secondaryHref: 'menus' },
    keywords: ['Hawaiian farm to table menu Maui'],
  },
  {
    slug: 'menus/holiday',
    category: 'menu',
    parent: 'menus',
    title: 'Holiday Catering Menu Maui — The December Table',
    h1: 'The holiday table, Maui edition.',
    meta: {
      description:
        'Holiday private chef menus on Maui: Christmas-week dinners, traditional or island-style, for the December 22–January 1 villa window. Book early; the written quote holds the date.',
    },
    intro:
      'The December villa week deserves a holiday table that respects both traditions: the full roast-bird spread, or the Maui version built on local catch and canoe crops. Both ship inside the published per-guest lines.',
    sections: [
      {
        heading: 'The two tables',
        list: [
          'The traditional — roast bird, the sides your family would riot without, the pies',
          'The Maui version — whole roasted fish, taro and ʻulu sides, lilikoi everything',
          'The hybrid most families land on by day three',
        ],
      },
      {
        heading: 'The window',
        body: [
          'December 22 through January 1 is the island’s most compressed booking window of the year — villas fill, and so does our calendar. Any holiday surcharges publish ahead of the season on the peak-calendar page; nothing gets invented in a quote.',
        ],
        links: [{ label: 'Holiday peak calendar', href: 'pricing/holiday-peak-calendar' }],
      },
      {
        heading: 'Booking',
        body: [
          'The 50% deposit holds the date once the written quote is in hand — and only then. An inquiry alone does not hold Christmas.',
        ],
      },
    ],
    faq: [
      {
        q: 'How early should we book Christmas week?',
        a: 'Months, not weeks — the December window is the first to fill every year. The written quote plus deposit is what holds the date.',
      },
      {
        q: 'Can you do Christmas dinner for twenty?',
        a: 'Yes — staffed family-style service for up to 75, scaled at the published hourlys, in any villa whose kitchen passes the gate.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Holiday dinners', secondaryHref: 'occasions/holiday-dinner' },
    keywords: ['holiday catering menu Maui'],
  },
];

/* ================= PRICING & DECISION (10) ================= */
const pricing: ContentRecord[] = [
  {
    slug: 'private-chef-cost',
    category: 'pricing',
    parent: 'pricing',
    title: 'How Much Does a Private Chef Cost in Maui? — The Answer Page',
    h1: 'What a private chef costs in Maui, answered in numbers.',
    meta: {
      description:
        'Private chef cost in Maui: $150–$250 a guest for signature dinners, Stay Chef from $1,050 a day, date nights from $500, plus 20% service and GET up to 4.7120% on their own lines.',
    },
    intro:
      'The direct answer, first: a private chef dinner in Maui costs $150–$250 a guest, groceries included, plus 20% service and Hawaiʻi GET up to 4.7120% on their own lines. Everything below is the detail behind that sentence.',
    sections: [
      {
        heading: 'The published bands',
        list: [
          'Signature dinner: $150–$250 a guest, groceries inside the band',
          'Premium menu: $190–$275 a guest',
          'Chef’s table: $275–$400+ a guest',
          'Stay Chef: from $1,050 a day plus groceries at cost',
          'Date night for two: from $500',
        ],
      },
      {
        heading: 'Worked math on published rates',
        body: [
          'Two guests run $300–$500; four guests $600–$1,000; eight $1,200–$2,000; twelve $1,800–$3,000 — pure multiplication on the published band, each cell individually defensible. Then the fee stack: 20% service and GET on their own lines, never blended.',
        ],
        links: [{ label: 'Run the estimator', href: 'pricing/estimate' }],
      },
      {
        heading: 'What moves the number',
        list: [
          'Guest count — the per-guest line scales linearly',
          'Menu tier — premium proteins and coursing move you up the band',
          'Hawaiʻi grocery prices — roughly 31–53% above the mainland, visible in receipts',
          'Date — holiday weeks carry published surcharges, never invented ones',
          'Crew — staffing hourlys $55/$75 are separate, itemized lines',
        ],
      },
      {
        heading: 'The comparison that matters',
        body: [
          'Maui’s own market: marketplaces book $119–$171 a guest; local independents publish $100–$350 depending on format; resort private dining runs higher with minimums. Our band sits deliberately across the credible middle and the premium top — and unlike most of the market, it is published.',
        ],
        links: [{ label: 'Compare: private chef vs restaurant', href: 'compare/private-chef-vs-restaurant' }],
      },
    ],
    faq: [
      {
        q: 'Is $150–$250 per guest the whole cost?',
        a: 'It covers the food and the chef’s dinner service, groceries included. Staffing, travel where it applies, the bar cart, 20% service, and GET are separate itemized lines in the written quote — which is the confirmed total.',
      },
      {
        q: 'Why is Maui pricier than a mainland private chef?',
        a: 'Groceries run 31–53% above mainland prices and the island’s labor and logistics follow. The published band builds that in rather than surprising you with it.',
      },
      {
        q: 'Do you charge more for holidays?',
        a: 'Holiday surcharges are published ahead of the season on the peak-calendar page — the quote never invents one.',
        links: [{ label: 'Holiday peak calendar', href: '/maui/pricing/holiday-peak-calendar' }],
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'The full rate card', secondaryHref: 'pricing' },
    keywords: ['how much does a private chef cost in Maui'],
  },
  {
    slug: 'pricing/stay-chef-cost',
    category: 'pricing',
    parent: 'pricing',
    title: 'Stay Chef Maui Cost Per Day — From $1,050, Worked',
    h1: 'What a Stay Chef week costs, worked out.',
    meta: {
      description:
        'Stay Chef cost on Maui: from $1,050 a day plus groceries at cost with receipts — a worked seven-day week at $7,350 in chef labor before staffing, 20% service, and GET.',
    },
    intro:
      'Stay Chef runs from $1,050 a day plus groceries at cost with receipts. A seven-day week starts at $7,350 in chef labor — this page shows what that buys and what sits around it.',
    sections: [
      {
        heading: 'What the day rate buys',
        list: [
          'A full day of chef labor in your kitchen — breakfast through dinner',
          'Menu planning across the week, shopping, cooking, service, cleanup',
          'Provisioning runs and beach-day coolers inside the rhythm',
          'Groceries billed at cost with receipts — never marked up',
        ],
      },
      {
        heading: 'The worked week',
        body: [
          'Seven days at $1,050 is $7,350. Add groceries at cost — a week for a family of eight typically tracks what the same family would spend splitting restaurant meals, minus the reservations. Then 20% service and GET on their own lines. The written quote shows all of it before a dollar moves.',
        ],
      },
      {
        heading: 'What is not in the day rate',
        body: [
          'Staffing beyond the chef (servers, sous) quotes at the published $55/$75 hourlys. Travel zones apply outside the base corridors — Upcountry from $75 a day, Pāʻia and Haʻikū quoted at inquiry. And there is no published weekly discount: the quote is the total, not the opening bid.',
        ],
      },
      {
        heading: 'The honest comparison',
        body: [
          'The only other published multi-day chef pricing on Maui runs $179–$300+ per person per day. For a group of eight, that math crosses $1,050 quickly — the day rate is priced for the group, not the seat.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is there a minimum number of days?',
        a: 'Stay Chef service is structured in full days; most bookings run three to seven. Single dinners are the signature format — the rate card keeps the products distinct so each prices honestly.',
      },
      {
        q: 'What does a week of groceries cost?',
        a: 'It tracks your menus and headcount at island prices, billed at cost with receipts. The quote estimates the range honestly and the receipts close it exactly.',
      },
      {
        q: 'Can we book four days instead of seven?',
        a: 'Yes — any run of days works, priced at the same day rate. The written quote reflects exactly the days you book.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Stay Chef service', secondaryHref: 'stay-chef' },
    keywords: ['stay chef Maui cost per day'],
  },
  {
    slug: 'pricing/fee-stack',
    category: 'pricing',
    parent: 'pricing',
    title: 'Maui Service Charge & GET Explained — The Fee Stack',
    h1: 'The fee stack, line by line.',
    meta: {
      description:
        'The myCHEF Maui fee stack explained: 20% service charge on its own line, Hawaiʻi GET up to 4.7120% on its own line (valid through 12/31/2030), 50% deposit, voluntary gratuity.',
    },
    intro:
      'Every myCHEF quote ends in the same five lines. They are itemized, they are explained here, and they never blend into the food price.',
    sections: [
      {
        heading: 'The five lines',
        list: [
          '20% service charge, always on its own line',
          'Hawaiʻi GET up to 4.7120%, on its own line — the maximum visible pass-on, valid through 12/31/2030',
          '50% deposit locks the date — only after you have seen the numbers',
          'Gratuity is always voluntary, never required',
          'Groceries at cost, receipts on request',
        ],
      },
      {
        heading: 'The 20% line, legally',
        body: [
          'Hawaiʻi law (HRS §481B-14) requires that a mandatory service charge either go to staff as tip income or be conspicuously disclosed as covering other costs — and it may never be labeled a gratuity. Our disclosure wording follows that posture and is flagged REQUIRES LEGAL VERIFICATION until counsel locks final language; the number and its placement on its own line are already policy.',
        ],
      },
      {
        heading: 'The GET line, accurately',
        body: [
          'Hawaiʻi’s general excise tax is 4.5% owed in all four counties; the maximum visible pass-on is 4.7120%, with county surcharges sunsetting 12/31/2030. You will never see the obsolete 4.166% figure here — if another operator quotes it, ask which year their rate card is from.',
        ],
      },
      {
        heading: 'Why itemization matters',
        body: [
          'A blended “total” is where service charges become gratuities, taxes become margin, and quotes become invoices you did not agree to. Five lines, five meanings — the written quote is the confirmed total because you can audit every row.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the 20% service charge a tip?',
        a: 'No — it is a disclosed service charge covering service operations, on its own line. Gratuity for exceptional work is always voluntary and separate.',
      },
      {
        q: 'Why 4.7120% and not 4.166%?',
        a: '4.166% is an obsolete figure. The GET owed is 4.5% statewide and the maximum visible pass-on is 4.7120%, valid through 12/31/2030. We publish the current number.',
      },
      {
        q: 'When do I pay?',
        a: '50% deposit after you have seen the written quote; the balance per the quote’s terms. Cancellation tiers are proposed pending counsel review and are shown in the quote before you commit.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'The rate card', secondaryHref: 'pricing' },
    keywords: ['Maui service charge and GET explained'],
  },
  {
    slug: 'pricing/travel-zones',
    category: 'pricing',
    parent: 'pricing',
    title: 'Maui Private Chef Travel Fees — The Zone Map in Words',
    h1: 'Travel fees, zone by zone, before you ask.',
    meta: {
      description:
        'Maui private chef travel zones: Wailea–Mākena and Kāʻanapali–Kapalua base zones free, Upcountry from $75, Pāʻia/Haʻikū quoted at inquiry, Hāna mention-only. The honest zone map.',
    },
    intro:
      'Travel on Maui is simple: the two resort corridors are base zone, Upcountry carries a published line from $75, and the North Shore is quoted at inquiry with the reason attached. Hāna we mention but do not promise.',
    sections: [
      {
        heading: 'The zones',
        list: [
          'Base zone — Wailea, Mākena, Kīhei, Kāʻanapali, Nāpili–Honokōwai–Kahana, Kapalua: no travel line',
          'Upcountry — Kula, Makawao: travel from $75, on its own line',
          'Quoted at inquiry — Pāʻia, Haʻikū: the quote names the number and the reason',
          'Mention-only — Hāna: two-plus hours each way; quoted reluctantly or declined honestly',
        ],
      },
      {
        heading: 'Why zones exist',
        body: [
          'A private chef carries a cold chain and a schedule. The drive from the South Maui base to Haʻikū is an hour each way — that time and temperature discipline is a real cost, and we would rather publish it than bury it in the food price.',
        ],
      },
      {
        heading: 'How travel appears in the quote',
        body: [
          'As its own line, per event or per day, at the published figure for your zone. If your address sits near a boundary, the quote tells you which side of it you are on — and why.',
        ],
        links: [{ label: 'Where we cook', href: 'locations' }],
      },
    ],
    faq: [
      {
        q: 'Is there a travel fee to Kāʻanapali or Kapalua?',
        a: 'No — the entire West Maui resort corridor from Kāʻanapali to Kapalua is base zone, as is Wailea–Mākena–Kīhei.',
      },
      {
        q: 'Why is Pāʻia quoted at inquiry instead of a flat fee?',
        a: 'Because the honest number depends on the event — a two-person dinner and a 40-guest retreat provision differently. The written quote names the real figure rather than a padded average.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Coverage', secondaryHref: 'coverage' },
    keywords: ['Maui private chef travel fee'],
  },
  {
    slug: 'pricing/holiday-peak-calendar',
    category: 'pricing',
    parent: 'pricing',
    title: 'Maui Holiday Private Chef Rates — The Peak Calendar',
    h1: 'The peak calendar: when Maui books, and how it prices.',
    meta: {
      description:
        'Maui private chef holiday and peak-season calendar: the December 22–January 1 window, whale season December–May, and how holiday surcharges are published ahead — never invented in a quote.',
    },
    intro:
      'Maui’s year has real peaks, and our calendar honors them honestly: any holiday surcharge is published here ahead of the season, not discovered in a quote.',
    sections: [
      {
        heading: 'The year in demand',
        list: [
          'December 22 – January 1 — the compressed villa week; books months out',
          'December – April — peak season; two-to-four-week lead times',
          'December – May — whale season; peak villa occupancy',
          'May, July, October — Hawaiʻi’s wedding-heavy months',
          'April – June, September – November — shoulder value; planners’ pick: September, March, May',
        ],
      },
      {
        heading: 'The surcharge policy',
        body: [
          'Holiday surcharges, when they apply, are published on this page each Q3–Q4 before the season opens. The written quote then reflects the published calendar — nothing invented per customer, nothing buried per line.',
        ],
      },
      {
        heading: 'Booking the peaks',
        body: [
          'Peak dates are held by the written quote and the 50% deposit — an inquiry alone holds nothing. If your week is December or a wedding-month Saturday, the time to write is now.',
        ],
        links: [{ label: 'Booking lead times', href: 'guides/booking-lead-times' }],
      },
    ],
    faq: [
      {
        q: 'Do holiday rates cost more?',
        a: 'When a surcharge applies it is published here in advance and shown as its own line. The base rate card — $150–$250 a guest, $1,050 day rate — does not change seasonally.',
      },
      {
        q: 'When is the best value season?',
        a: 'Shoulder months — April to June and September to November — pair the island’s best availability with its calmest booking calendar. Wedding planners’ consensus picks are September, March, and May.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'The rate card', secondaryHref: 'pricing' },
    keywords: ['Maui holiday private chef rates'],
  },
  {
    slug: 'pricing/estimate',
    category: 'pricing',
    parent: 'pricing',
    title: 'Private Chef Maui Price Estimate — The Calculator',
    h1: 'Run your own numbers.',
    meta: {
      description:
        'Estimate a Maui private chef event: service, guests, days, and staffing computed from the published rate card — 20% service and GET shown as their own lines. Estimate only; the written quote is the confirmed total.',
    },
    intro:
      'Every figure below computes from the published rate card — never from free numbers. The result is an estimate only: the written quote is the confirmed total.',
    sections: [
      {
        heading: 'How the math works',
        list: [
          'Base line: guests × the per-guest band for your service',
          'Staffing line: servers at $55/hr, sous at $75/hr, four-hour floors',
          'Travel line: your zone — base, Upcountry from $75, or quoted at inquiry',
          'Then + 20% service and + GET up to 4.7120%, each on its own line',
        ],
      },
      {
        heading: 'Quote-only zones',
        body: [
          'Pāʻia and Haʻikū return “quoted at inquiry” instead of a number — not coyness, but honesty: the drive and provisioning pattern varies by event, and a fake precision would cost you money.',
        ],
      },
      {
        heading: 'From estimate to quote',
        body: [
          'The estimator hands your spec directly into the quote flow — service, headcount, dates — so the written quote starts from your numbers, not a blank form. ESTIMATE ONLY; the written quote is the confirmed total.',
        ],
      },
    ],
    cta: { label: 'Get the written quote', href: 'quote', secondaryLabel: 'The rate card', secondaryHref: 'pricing' },
    keywords: ['private chef Maui price estimate'],
  },
  {
    slug: 'compare/private-chef-vs-restaurant',
    category: 'guide',
    parent: 'private-chef-cost',
    title: 'Private Chef vs Restaurant on Maui — The Honest Comparison',
    h1: 'The villa versus the reservation, honestly compared.',
    meta: {
      description:
        'Private chef vs restaurant on Maui: when a villa dinner beats a restaurant week on price, logistics, and privacy — and when a restaurant is honestly the right call.',
    },
    intro:
      'Sometimes the restaurant wins — this page says when. For groups, weeks, and anyone with a good villa kitchen, the private chef usually wins on the whole bill, not just the food.',
    sections: [
      {
        heading: 'Where the restaurant wins',
        body: [
          'Two people, one night, no kitchen: go to the restaurant. Maui has extraordinary ones, and a date-night premium makes no sense against a $250 dinner out. We would rather lose that booking than sell it badly.',
        ],
      },
      {
        heading: 'Where the villa wins',
        body: [
          'Groups of six or more, weeks, and celebrations. A party of eight at a Wailea restaurant — entrees, a bottle, tip, the drive, the babysitter’s extra hours — routinely totals what a $150–$250-a-guest private dinner costs, minus the privacy, the pace, and the clean kitchen after.',
        ],
      },
      {
        heading: 'The hidden restaurant costs',
        list: [
          'Resort-corridor pricing at South Maui’s ADR-driven rates',
          'Split tables for groups of ten-plus — you are never all at one table',
          'The 6pm or 8:45pm reservation compromise',
          'Driving, parking, and the end-of-night logistics nobody enjoys',
        ],
      },
      {
        heading: 'The honest math',
        body: [
          'Eight guests, three dinners out versus one private dinner plus a Stay Chef day: the private pattern usually lands within a rounding error on cost and miles ahead on the week’s best memories. Run your version in the estimator.',
        ],
        links: [{ label: 'Run the estimator', href: 'pricing/estimate' }],
      },
    ],
    faq: [
      {
        q: 'Is a private chef actually cheaper than restaurants on Maui?',
        a: 'For groups of six-plus across multiple meals, frequently yes — especially against resort-corridor restaurants. For couples’ single nights out, no, and we say so.',
      },
      {
        q: 'What about the best restaurants — Mama’s and the like?',
        a: 'Book them — a Maui trip should include the island’s great dining rooms. The private chef covers the other six nights, not the pilgrimage.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'What it costs', secondaryHref: 'private-chef-cost' },
    keywords: ['private chef vs restaurant Maui'],
  },
  {
    slug: 'compare/private-vs-personal-chef',
    category: 'guide',
    parent: 'private-chef-cost',
    title: 'Private Chef vs Personal Chef on Maui — The Difference',
    h1: 'Private versus personal chef — the definitions, then the booking.',
    meta: {
      description:
        'The difference between a private and personal chef, Maui edition: staff role versus session service, what each costs, and which one your villa week actually needs.',
    },
    intro:
      'The industry uses the terms loosely; here are the working definitions and — more usefully — which one your Maui stay actually needs.',
    sections: [
      {
        heading: 'The definitions',
        body: [
          'A private chef is traditionally a household’s staff cook — one employer, full-time, salaried. A personal chef serves multiple clients through scheduled sessions: dinners, prep days, vacation weeks. What visitors to Maui actually want is the second pattern at a professional standard.',
        ],
      },
      {
        heading: 'What your stay needs',
        body: [
          'A villa week maps to three products: the signature dinner ($150–$250 a guest) for the nights that matter, the Stay Chef day (from $1,050) for full coverage, and prep sessions for the gaps. Nobody needs a salaried employee for nine days — they need a service that behaves like one.',
        ],
        links: [
          { label: 'Stay Chef', href: 'stay-chef' },
          { label: 'Personal chef service', href: 'services/personal-chef' },
        ],
      },
      {
        heading: 'What it costs',
        body: [
          'Session service prices per event or per day at published lines; a household staff chef prices in salary and is the wrong tool for a vacation. The quote system assumes the service model — and says so.',
        ],
      },
    ],
    faq: [
      {
        q: 'Which do I book for a two-week Wailea stay?',
        a: 'The service model: Stay Chef days for the core of the stay, standalone dinners for the big nights, provisioning for arrival. One written quote covers the whole pattern.',
      },
      {
        q: 'Do you place full-time private chefs in Maui households?',
        a: 'Our model is the vetted-chef network with published rates, not staff placement. For ongoing household service, ask about recurring weekly arrangements through the quote channel.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Personal chef service', secondaryHref: 'services/personal-chef' },
    keywords: ['difference between private and personal chef Maui'],
  },
  {
    slug: 'compare/freelance-vs-mychef',
    category: 'guide',
    parent: 'trust',
    title: 'Hire a Chef Directly vs myCHEF Maui — The Trade-Offs',
    h1: 'Hiring a chef directly versus booking the network.',
    meta: {
      description:
        'Freelance chef vs myCHEF on Maui: what a direct hire saves, what it risks — vetting, insurance, backup when a chef cancels — and what the network’s published rates buy.',
    },
    intro:
      'You can find a freelance chef on a forum by tonight. Here is the honest ledger of what that saves and what it risks — including where the direct hire is the right call.',
    sections: [
      {
        heading: 'What direct hire buys',
        body: [
          'Sometimes a lower headline number, and a personal relationship with the person cooking. Maui has excellent independent chefs — several publish their own rates, and the good ones book out early for a reason.',
        ],
      },
      {
        heading: 'What it risks',
        list: [
          'No backup when the chef gets sick the morning of your reception',
          'No published rate card — the price is whatever the chat says',
          'Vetting, insurance posture, and food-safety discipline are your homework',
          'Fee opacity: service charges and taxes surface on the invoice, not the quote',
        ],
      },
      {
        heading: 'What the network adds',
        body: [
          'A published rate card you can check without calling anyone. Vetted chefs with a bench behind them — a cancellation is our problem, not yours. The fee stack itemized by policy. And the written quote as the confirmed total, which is the entire trust architecture in one sentence.',
        ],
        links: [{ label: 'How we vet chefs', href: 'how-we-vet-chefs' }],
      },
    ],
    faq: [
      {
        q: 'Is myCHEF more expensive than a freelance chef?',
        a: 'Against Maui’s published independents ($100–$350 a guest by format), our $150–$250 band sits mid-market — with vetting, backup, and itemized fees included rather than assumed.',
      },
      {
        q: 'What happens if our chef cancels?',
        a: 'The network re-crews from the bench or tells you immediately with options. A written quote from us is a commitment, not a hope.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'The honesty register', secondaryHref: 'trust' },
    keywords: ['hire a chef directly vs myCHEF Maui'],
  },
  {
    slug: 'compare/resort-dining-vs-private-chef',
    category: 'guide',
    parent: 'private-chef-cost',
    title: 'Resort Private Dining vs Private Chef on Maui',
    h1: 'The resort’s private dining program, versus your own kitchen.',
    meta: {
      description:
        'Resort private dining vs a private chef on Maui: minimums, service charges of 23–25%, and set menus against a villa dinner at $150–$250 a guest with 20% service itemized.',
    },
    intro:
      'Wailea’s resorts run polished private-dining programs — cabanas, lawn dinners, the works. They also run F&B minimums, 23–25% service charges, and set menus. Here is the honest comparison.',
    sections: [
      {
        heading: 'What the resort sells',
        body: [
          'A venue, a view, and a production: the cabana, the torch-adjacent ambience, the banquet team. For some evenings that is exactly right. The price structure is the venue’s: minimums that start where a villa dinner’s whole bill ends.',
        ],
      },
      {
        heading: 'The structural differences',
        list: [
          'F&B minimums: $7,500–$15,000 per event at resort scale',
          'Service charges: 23–25% versus our 20%, theirs often bundled',
          'Menus: banquet-set versus written around your table',
          'The room: theirs, shared with the resort — versus yours entirely',
        ],
      },
      {
        heading: 'When each is right',
        body: [
          'The resort wins when the venue IS the evening — the cliff lawn, the production. The villa wins when the people are the evening: the reunion, the wedding-week meals, the week where privacy is the luxury you actually flew here for.',
        ],
        links: [{ label: 'Estate events', href: 'estate-events' }],
      },
    ],
    faq: [
      {
        q: 'Can a private chef match a resort’s production?',
        a: 'On food and service, yes — with rentals and staffing coordinated into the quote. On venue spectacle, no: the resort owns the cliff. Choose what the evening is actually about.',
      },
      {
        q: 'Is the food comparable?',
        a: 'Resort banquet food is built for volume; private-chef service cooks for your table alone, that evening, from that morning’s market run. The comparison flatters the villa.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Service-charge comparison', secondaryHref: 'weddings/service-charge-comparison' },
    keywords: ['resort private dining vs private chef Maui'],
  },
];

/* ================= GUIDES (12) ================= */
const guides: ContentRecord[] = [
  {
    slug: 'guides',
    category: 'guide',
    title: 'Maui Private Chef Guides — The Editorial Hub',
    h1: 'Maui guides, written to be useful.',
    meta: {
      description:
        'Maui private chef guides: how the service works, what kitchens qualify, booking lead times, West Maui visitor notes, weather backups, and the alcohol rules — full-prose answers.',
    },
    intro:
      'Full-prose answers to the questions Maui guests actually ask — booking, kitchens, money, seasons, and the island-specific realities like beach permits and the alcohol rules.',
    sections: [
      {
        heading: 'Booking',
        links: [
          { label: 'How a private chef works on Maui', href: 'guides/how-it-works' },
          { label: 'How to hire a private chef', href: 'guides/how-to-hire' },
          { label: 'Booking lead times', href: 'guides/booking-lead-times' },
        ],
      },
      {
        heading: 'Kitchens & logistics',
        links: [
          { label: 'What kitchen a private chef needs', href: 'guides/villa-kitchen' },
          { label: 'Weather backups', href: 'guides/weather-backup' },
          { label: 'The cleanup standard', href: 'guides/cleanup-standard' },
        ],
      },
      {
        heading: 'Money',
        links: [
          { label: 'Groceries at cost, explained', href: 'guides/groceries-at-cost' },
          { label: 'Alcohol and the bar on Maui', href: 'guides/alcohol-and-bar' },
          { label: 'What a private chef costs', href: 'private-chef-cost' },
        ],
      },
      {
        heading: 'The island',
        links: [
          { label: 'Visiting West Maui respectfully', href: 'guides/west-maui-visitor-note' },
          { label: 'Whale season', href: 'guides/seasonality-whale-season' },
          { label: 'Dietary restrictions', href: 'guides/dietary' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'How it works', secondaryHref: 'guides/how-it-works' },
    keywords: ['Maui private chef guides'],
  },
  {
    slug: 'guides/how-it-works',
    category: 'guide',
    parent: 'guides',
    title: 'How Does a Private Chef Work in Maui?',
    h1: 'How does a private chef work in Maui?',
    meta: {
      description:
        'How a private chef works on Maui: menu call, same-day shopping, in-villa cooking, coursed service, clean kitchen after — with the fee stack itemized in a written quote.',
    },
    intro:
      'The short answer: you tell us the dates and the villa, we send a written quote, a 50% deposit locks the date, and on the day your chef shops, cooks, serves, and leaves the kitchen clean. Here is the long version.',
    sections: [
      {
        heading: 'Before: the menu call',
        body: [
          'Every booking starts with dates, headcount, and the kitchen. A short call or thread sets the menu, the dietary flags, and the timing. What comes back is a written quote — the confirmed total, with 20% service and GET up to 4.7120% on their own lines.',
        ],
      },
      {
        heading: 'The day itself',
        body: [
          'Your chef shops that morning — Maui farmers and fishers first — and arrives before service with everything. Courses are plated and introduced at your table’s pace. Between courses the kitchen runs quietly; after dessert it is returned cleaner than it was found.',
        ],
      },
      {
        heading: 'After',
        body: [
          'The invoice matches the quote — that is the entire point of the written-quote discipline. Groceries reconcile at cost with receipts on request. Anything you loved becomes a starting point for the next booking.',
        ],
      },
      {
        heading: 'The edges, honestly',
        body: [
          'Hotel rooms without kitchens are declined. Hāna is mention-only. Pāʻia and Haʻikū are quoted at inquiry. Wherever the honest answer is “no” or “it costs more,” this site says so before you pay a deposit.',
        ],
        links: [{ label: 'What we don’t do', href: 'what-we-dont-do' }],
      },
    ],
    faq: [
      {
        q: 'Do I need to be there while the chef cooks?',
        a: 'No — most guests are at the beach during prep. Access is arranged at booking; you return to a set table and the smell of dinner.',
      },
      {
        q: 'How is payment structured?',
        a: 'A written quote, then a 50% deposit locks the date, with the balance per the quote’s terms. Gratuity is always voluntary.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'How to hire', secondaryHref: 'guides/how-to-hire' },
    keywords: ['how does a private chef work in Maui'],
  },
  {
    slug: 'guides/how-to-hire',
    category: 'guide',
    parent: 'guides',
    title: 'How to Hire a Private Chef on Maui',
    h1: 'How to hire a private chef on Maui.',
    meta: {
      description:
        'How to hire a private chef on Maui: what to check (published prices, itemized fees, kitchen requirements), what to send in the first inquiry, and the red flags to avoid.',
    },
    intro:
      'Hiring well takes one good inquiry and four checks. This guide covers both, including the checks we would run on us.',
    sections: [
      {
        heading: 'The four checks',
        list: [
          'Published prices you can verify without a phone call',
          'Itemized fees — service charge and GET on their own lines',
          'A written quote that is the confirmed total, not an estimate',
          'Honest kitchen requirements — a chef who cooks anywhere cooks nowhere well',
        ],
      },
      {
        heading: 'The first inquiry',
        body: [
          'Send dates, headcount, the villa or area, dietary flags, and a photo of the kitchen if you have one. That single message is enough for a real written quote — ours or anyone’s.',
        ],
      },
      {
        heading: 'Red flags',
        body: [
          '“Call for pricing” with nothing published; service charges that appear at invoice; reviews that cannot be verified; and anyone who says yes to a hotel room with a coffee maker. The market’s strongest operators publish something — the ones who publish nothing are asking you to negotiate blind.',
        ],
        links: [{ label: 'Freelance vs myCHEF', href: 'compare/freelance-vs-mychef' }],
      },
    ],
    faq: [
      {
        q: 'How far ahead should I start?',
        a: 'Two to four weeks is comfortable; December through April and wedding-month Saturdays go earlier. The written quote plus deposit is what holds a date.',
      },
      {
        q: 'Should I get multiple quotes?',
        a: 'Yes — and compare them line by line, not total by total. The quote that itemizes is the one you can trust.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'What it costs', secondaryHref: 'private-chef-cost' },
    keywords: ['how to hire a private chef Maui'],
  },
  {
    slug: 'guides/villa-kitchen',
    category: 'guide',
    parent: 'guides',
    title: 'What Kitchen Does a Private Chef Need in Maui?',
    h1: 'What kitchen does a private chef need?',
    meta: {
      description:
        'The kitchen requirements for private chef service in Maui villas: what passes the gate, what gets declined, and how Maui’s villa stock measures up.',
    },
    intro:
      'The honest answer: less than you fear, more than a kitchenette. A full-size range, a real refrigerator, counter space, and a sink. Here is how Maui’s rental stock measures against that bar.',
    sections: [
      {
        heading: 'The passing grade',
        list: [
          'Full-size range and oven (four burners minimum)',
          'A real refrigerator with shelf room for the day’s shop',
          'Counter space for plating your headcount',
          'Standard power and water — no special equipment needed',
        ],
      },
      {
        heading: 'What gets declined',
        body: [
          'Hotel rooms and studios with a coffee maker and a minibar. A hot plate on a balcony. Anywhere the “kitchen” is a hallway with a microwave. We decline these not from preciousness but because the food would be worse — and you would pay full price for it.',
        ],
      },
      {
        heading: 'How Maui’s stock measures up',
        body: [
          'Wailea Beach Villas, Hoʻolei, the Andaz residences, Makena Surf, the Kapalua villa complexes, and most of the Honua Kai–class condo stock pass easily — Maui’s luxury rental market was built around real kitchens. Kīhei and the condo belt vary more; a photo settles it.',
        ],
        links: [{ label: 'Where we cook', href: 'locations' }],
      },
      {
        heading: 'If your kitchen is borderline',
        body: [
          'Tell us and we adapt honestly: menus that suit a smaller range, family-style over plated, a grill leaned on harder. The quote reflects what your kitchen can actually produce at the standard we will put our name on.',
        ],
      },
    ],
    faq: [
      {
        q: 'Will a condo kitchen work for 12 guests?',
        a: 'Usually, yes — with a full-size range and smart coursing. Send a photo and the headcount; we answer plainly before any deposit.',
      },
      {
        q: 'Do you bring equipment?',
        a: 'The chef brings the kit that matters — knives, boards, plating tools. Specialty equipment for a specific menu is noted in the quote.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'How it works', secondaryHref: 'guides/how-it-works' },
    keywords: ['what kitchen does a private chef need in Maui'],
  },
  {
    slug: 'guides/groceries-at-cost',
    category: 'guide',
    parent: 'guides',
    title: 'Are Groceries Included with a Private Chef in Maui?',
    h1: 'Are groceries included? Yes — and here is exactly how.',
    meta: {
      description:
        'How groceries work with a Maui private chef: inside the per-guest band for dinners, at cost with receipts for Stay Chef weeks — never marked up, always visible.',
    },
    intro:
      'Yes for dinners, at cost for the long stays — and either way, never marked up. The two models exist because the two products price honestly in different ways.',
    sections: [
      {
        heading: 'Dinners: inside the band',
        body: [
          'For signature, premium, and event dinners, groceries are inside the published per-guest band — $150–$250 a guest buys the food and the service. No separate grocery line appears; the band was built to contain it.',
        ],
      },
      {
        heading: 'Stay Chef and provisioning: at cost',
        body: [
          'Multi-day service bills groceries at cost with receipts. The reason is honesty at scale: a week of groceries for eight varies by thousands depending on menus, and a bundled “estimate” would either overcharge you or force corner-cutting. Receipts end the argument before it starts.',
        ],
      },
      {
        heading: 'The Maui reality',
        body: [
          'Hawaiʻi groceries run roughly 31–53% above mainland prices — that is freight, not markup. We buy from Maui farmers, fishers, and ranchers first, which keeps more of the food dollar on the island and often buys better for less.',
        ],
      },
      {
        heading: 'What to watch elsewhere',
        body: [
          'Any service that will not tell you how groceries are billed is billing them somehow. Ask the question; the honest operators answer it in one sentence.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do you mark up groceries?',
        a: 'Never. Dinners carry groceries inside the published band; longer service bills at cost with receipts on request.',
      },
      {
        q: 'Can I see the receipts?',
        a: 'Yes — receipts on request is policy, not a favor.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'The fee stack', secondaryHref: 'pricing/fee-stack' },
    keywords: ['are groceries included private chef Maui'],
  },
  {
    slug: 'guides/booking-lead-times',
    category: 'guide',
    parent: 'guides',
    title: 'How Far in Advance to Book a Private Chef on Maui',
    h1: 'How far ahead should you book?',
    meta: {
      description:
        'Booking lead times for a Maui private chef: two to four weeks in peak season (December–April), one to two off-peak, months for the Christmas window and wedding Saturdays.',
    },
    intro:
      'The honest answer by season: two to four weeks during the December–April peak, one to two weeks off-peak, and months for the two windows that compress — Christmas week and wedding-season Saturdays.',
    sections: [
      {
        heading: 'By season',
        list: [
          'December 22 – January 1: months ahead; the island’s tightest window',
          'December – April (peak, whale season): two to four weeks',
          'May – November: one to two weeks, more for large groups',
          'Wedding weeks: as early as the venue — the good Saturdays go first',
        ],
      },
      {
        heading: 'What actually holds a date',
        body: [
          'The written quote plus the 50% deposit — nothing else. An inquiry is a conversation, not a reservation, and December proves the difference every year.',
        ],
      },
      {
        heading: 'Last-minute reality',
        body: [
          'Short-notice requests sometimes work — tell us the date and we answer honestly within a day. What we will not do is hold a date we cannot crew; the bench is deep but not infinite, and a real “no” beats a hopeful “maybe.”',
        ],
        links: [{ label: 'The peak calendar', href: 'pricing/holiday-peak-calendar' }],
      },
    ],
    faq: [
      {
        q: 'Can I book for next week?',
        a: 'Often, outside the peaks — ask. December through April, expect the honest answer to be tighter.',
      },
      {
        q: 'When should a wedding week be booked?',
        a: 'With the venue, or right after — six to twelve months is normal for Maui destination weddings, and the culinary contract follows the same clock.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'How it works', secondaryHref: 'guides/how-it-works' },
    keywords: ['how far in advance to book a private chef Maui'],
  },
  {
    slug: 'guides/west-maui-visitor-note',
    category: 'guide',
    parent: 'guides',
    title: 'Visiting West Maui Respectfully — A Standing Note',
    h1: 'Visiting West Maui: the note we keep on the site.',
    meta: {
      description:
        'A standing visitor note for West Maui: what the recovery looks like, where visitors are welcomed, and how to spend in ways that help — from a company that works there.',
    },
    intro:
      'This page is permanent architecture, not a news post: West Maui is open, welcoming, and rebuilding, and how you visit matters. We work there; here is what we ask of ourselves and suggest to you.',
    sections: [
      {
        heading: 'Where things stand',
        body: [
          'The August 2023 fire destroyed much of Lahaina town. Rebuilding continues — a hundred homes restored by late 2025 and more underway — while the resort corridors north of the burn zone, Kāʻanapali through Kapalua, have been open and welcoming visitors since the phased reopening.',
        ],
      },
      {
        heading: 'What respectful visiting looks like',
        list: [
          'Stay in the designated resort areas; the burn zone is a neighborhood, not a sight',
          'Book direct with local businesses; tip well',
          'Buy from Maui farmers, fishers, and makers — as we do, first',
          'Let residents set the tone on when and how to talk about the fire',
        ],
      },
      {
        heading: 'Why visits help',
        body: [
          'West Maui’s economy runs on visitors, and community leaders have been consistent: respectful tourism is part of the recovery, not a burden on it. Every dinner cooked with Maui-grown food in a Kāʻanapali kitchen keeps dollars on the island’s west side.',
        ],
      },
      {
        heading: 'Our own rules',
        body: [
          'No imagery that aestheticizes loss. No marketing Lahaina town as a dining destination. West Maui service centers the open corridors, and our copy says so wherever the question arises.',
        ],
        links: [{ label: 'Private chef Kāʻanapali', href: 'locations/kaanapali' }],
      },
    ],
    faq: [
      {
        q: 'Is it okay to vacation in West Maui right now?',
        a: 'Yes — the resort corridors are open and community guidance explicitly welcomes respectful visitors. Stay in designated areas, support local businesses, and give rebuilding neighborhoods their privacy.',
      },
      {
        q: 'Can we visit Lahaina town?',
        a: 'Front Street’s surviving restaurants and open areas welcome visitors; the burn zone itself is off-limits to tourism and should be treated as what it is — someone’s neighborhood in recovery.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Kāʻanapali service', secondaryHref: 'locations/kaanapali' },
    keywords: ['visiting West Maui respectfully 2026'],
  },
  {
    slug: 'guides/seasonality-whale-season',
    category: 'guide',
    parent: 'guides',
    title: 'Maui Whale Season & the Private Chef Calendar',
    h1: 'Whale season: December to May, at the table.',
    meta: {
      description:
        'Maui’s seasons for private chef bookings: whale season December–May and peak villa occupancy, the wedding months of May, July, and October, and shoulder-season value windows.',
    },
    intro:
      'Maui’s seasons set the table as much as the calendar does: whales breaching behind dinner December through May, wedding-heavy months, and the shoulder windows where the island exhales.',
    sections: [
      {
        heading: 'Whale season — December to May',
        body: [
          'Humpbacks winter in the ʻAuʻau Channel between Maui and Lānaʻi — which is to say, behind your Wailea or Kāʻanapali dinner table. Peak villa occupancy tracks the whales; so does our calendar. Book the season early.',
        ],
      },
      {
        heading: 'The wedding months',
        body: [
          'Hawaiʻi weddings concentrate in May, July, and October, and Maui’s estate venues follow. Wedding-week contracts follow venue clocks — when the venue books, write to us the same week.',
        ],
        links: [{ label: 'The wedding week', href: 'weddings/wedding-week' }],
      },
      {
        heading: 'The shoulder value',
        body: [
          'April–June and September–November pair the island’s calmest booking calendar with some of its best weather. Planners’ consensus picks for value: September, March, and May. The rate card does not change; availability does.',
        ],
      },
      {
        heading: 'Weather by coast',
        body: [
          'Leeward Wailea and Kāʻanapali stay dry through most of the year; the North Shore and Upcountry run greener and wetter. Every outdoor service carries a named backup in the quote regardless of coast.',
        ],
        links: [{ label: 'Weather backups', href: 'guides/weather-backup' }],
      },
    ],
    faq: [
      {
        q: 'When is Maui’s best season for a villa week?',
        a: 'For value and availability, the shoulder months; for whales and energy, December through May — booked early. The food is good all year; the calendar is the variable.',
      },
      {
        q: 'Can we see whales from a Wailea dinner?',
        a: 'In season, frequently — the channel puts them close to the leeward coast. It remains the best unscripted dinner theater on the island.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'The peak calendar', secondaryHref: 'pricing/holiday-peak-calendar' },
    keywords: ['Maui whale season private chef'],
  },
  {
    slug: 'guides/dietary',
    category: 'guide',
    parent: 'guides',
    title: 'Dietary Restrictions & Private Chefs on Maui',
    h1: 'Dietary restrictions, handled like infrastructure.',
    meta: {
      description:
        'How dietary restrictions work with a Maui private chef: the eleven-flag system, allergen-separate prep, and menus designed around the restriction rather than stripped by it.',
    },
    intro:
      'The short version: tell us the flags at inquiry, and the menu arrives designed around them. The long version is how the system actually works.',
    sections: [
      {
        heading: 'The system',
        body: [
          'Eleven flags — vegetarian, vegan, gluten-free, halal, kosher-style, dairy-free, nut-free, keto, pescatarian, low-sodium, diabetic-friendly — collected at inquiry, written into the menu, and confirmed in the quote. Allergens get separate prep surfaces and dedicated utensils.',
        ],
        links: [{ label: 'Dietary service', href: 'services/dietary' }],
      },
      {
        heading: 'Designed around, not stripped by',
        body: [
          'The difference between accommodation and design: a vegan guest gets taro, ʻulu, breadfruit, and Upcountry produce at the center of the plate — not the fish dish minus the fish. Maui’s pantry makes the good version easy.',
        ],
      },
      {
        heading: 'Mixed tables',
        body: [
          'The common Maui table is mixed: one keto, one celiac, two kids, one vegan. Flagged plates run in parallel, coursed to match the table, labeled where the format is shared. Nobody eats a visibly lesser meal.',
        ],
      },
      {
        heading: 'The limits, honestly',
        body: [
          'We cook in villa kitchens, not certified facilities — so for severe allergies we describe exactly what separate prep means and let you decide. Kosher-style is available; full kosher supervision is a referral, and we say so.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do dietary accommodations cost extra?',
        a: 'No surcharge for the flag itself. Ingredient differences land in groceries at cost, with receipts.',
      },
      {
        q: 'Can you handle a severe nut allergy?',
        a: 'With a full protocol — separate prep, dedicated utensils, a written plan in the quote. We describe the real limits of a non-dedicated kitchen honestly rather than promising absolutes.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Dietary service', secondaryHref: 'services/dietary' },
    keywords: ['dietary restrictions private chef Maui'],
  },
  {
    slug: 'guides/weather-backup',
    category: 'guide',
    parent: 'guides',
    title: 'Maui Outdoor Dinner Weather Backups',
    h1: 'What happens when it rains on the lānai?',
    meta: {
      description:
        'Weather backups for Maui outdoor dinners: leeward versus windward reality, the covered-lānai plan, and how every quote names the backup before the clouds do.',
    },
    intro:
      'The short answer: the dinner moves under the roof and loses almost nothing. Every outdoor service we quote names its weather backup in writing — before the trade showers have their say.',
    sections: [
      {
        heading: 'The island’s two weathers',
        body: [
          'Maui is two climates sharing an island: leeward Wailea, Mākena, and Kāʻanapali run dry most of the year, while the North Shore and Upcountry stay green because they get rained on. Your backup plan depends on which Maui you are standing in — and the quote says which.',
        ],
      },
      {
        heading: 'The standard backups',
        list: [
          'The covered lānai — most Maui villas have one, and candlelight under a roof loses nothing',
          'Service shifted indoors with the table re-set by the crew',
          'Timing moves — a shower’s typical lifespan is twenty minutes',
          'For events: tenting coordinated with rentals where the property allows',
        ],
      },
      {
        heading: 'For weddings specifically',
        body: [
          'The wedding-week contract names a backup per event: covered structure, tented lawn, or moved timing. Haiku Mill’s required tent above 22 guests exists for exactly this reason — the North Shore is honest about its rain and so are we.',
        ],
        links: [{ label: 'The wedding week', href: 'weddings/wedding-week' }],
      },
    ],
    faq: [
      {
        q: 'What if it rains all evening?',
        a: 'Dinner moves indoors or under cover and proceeds — Maui rain rarely cancels anything with a roof nearby. True washouts reschedule under the quote’s stated terms.',
      },
      {
        q: 'Is winter rainier?',
        a: 'Modestly, and mostly on the windward side. Leeward Wailea and Kāʻanapali stay reliably dry — one reason the corridors host the weddings they do.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Seasons on Maui', secondaryHref: 'guides/seasonality-whale-season' },
    keywords: ['Maui outdoor dinner weather backup'],
  },
  {
    slug: 'guides/cleanup-standard',
    category: 'guide',
    parent: 'guides',
    title: 'Private Chef Cleanup: What to Expect in Your Maui Villa',
    h1: 'The cleanup standard: cleaner than we found it.',
    meta: {
      description:
        'What cleanup to expect from a private chef in your Maui villa: kitchen reset during and after service, dishes, surfaces, and trash — the standard, written down.',
    },
    intro:
      'The promise is specific: the kitchen is left cleaner than the chef found it. This is what that actually covers, written down so the quote can hold us to it.',
    sections: [
      {
        heading: 'What cleanup includes',
        list: [
          'All cooking equipment, pots, and tools washed and put away',
          'Counters and surfaces cleaned and reset',
          'Dishes from the meal handled per the villa’s setup',
          'Trash and recycling out; floors swept where service touched them',
        ],
      },
      {
        heading: 'When it happens',
        body: [
          'Continuously. A professional kitchen resets as it runs — between courses, not after midnight. By the time dessert lands, most of the evidence is already gone.',
        ],
      },
      {
        heading: 'For events and estates',
        body: [
          'Staffed events end with a full reset: kitchen, service areas, and rentals stacked for pickup. Estate venues rebook vendors they trust — our cleanup standard is partly how we stay on the lists that matter.',
        ],
        links: [{ label: 'The planner channel', href: 'weddings/planner-channel' }],
      },
    ],
    faq: [
      {
        q: 'Do we need to clean before the chef arrives?',
        a: 'A clear counter and an empty-ish sink is plenty. The kitchen gate cares about equipment, not tidiness.',
      },
      {
        q: 'What about the rental’s checkout inspection?',
        a: 'Our reset meets villa-manager standards — we work with managers across Wailea and Kapalua routinely, and the kitchen is not the thing your deposit worries about.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'How it works', secondaryHref: 'guides/how-it-works' },
    keywords: ['private chef cleanup what to expect Maui'],
  },
  {
    slug: 'guides/alcohol-and-bar',
    category: 'guide',
    parent: 'guides',
    title: 'Can a Private Chef Serve Alcohol in Maui County?',
    h1: 'Alcohol and the bar on Maui: the honest guide.',
    meta: {
      description:
        'Alcohol rules for private chef events in Maui County: client-supplied and licensed-referral models, the county’s specific licensing rules, and what your written quote will state.',
    },
    intro:
      'The careful answer to a common question: liquor licensing in Hawaiʻi is county-level, Maui County’s rules are the state’s most specific, and the compliant setups are straightforward once someone explains them. This page does. Specific legal points here are flagged REQUIRES LEGAL VERIFICATION with the county Liquor Commission.',
    sections: [
      {
        heading: 'The two compliant setups',
        list: [
          'Client-supplied: you buy the alcohol; we serve the evening around it',
          'Licensed referral: a licensed bartending company runs the bar for your event',
        ],
      },
      {
        heading: 'What Maui County’s rules mean in practice',
        body: [
          'Maui’s licensing framework is unusually specific — caterer license classes, food-revenue ratios, event-notice windows, and liability requirements all live at the county level. The practical result: myCHEF does not sell alcohol, and whether our staff may pour client-supplied bottles at your event type is confirmed in your written quote rather than assumed.',
        ],
      },
      {
        heading: 'The packaged bar cart',
        body: [
          'The cart — from $800 per four hours — is tools, mixers, a garnish program, and service. Your bottles sit on it. For receptions, the cart plus client-supplied wine and a signature drink is the setup nine events out of ten actually want.',
        ],
        links: [{ label: 'The bar cart', href: 'services/mobile-bar' }],
      },
      {
        heading: 'Venue rules layer on top',
        body: [
          'Resorts and some estates require their own licensed bar service regardless of caterer. Your quote names the venue’s posture alongside ours — no surprises at load-in.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you bring the wine for our dinner?',
        a: 'We can shop it on your list at cost — the purchase is yours. We do not sell alcohol, and the quote states the serving setup that complies with county rules.',
      },
      {
        q: 'Do we need a licensed bartender for a wedding?',
        a: 'Depends on the venue and event structure — many villa receptions run client-supplied bars compliantly, while some venues require licensed service. The written quote tells you which yours is.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Bartender hire, explained', secondaryHref: 'services/staffing/bartenders' },
    keywords: ['can a private chef serve alcohol in Maui County'],
  },
];

/* ================= TRUST (8) ================= */
const trust: ContentRecord[] = [
  {
    slug: 'trust',
    category: 'trust',
    title: 'The myCHEF Maui Honesty Register',
    h1: 'The honesty register.',
    meta: {
      description:
        'What myCHEF Maui promises and what it does not: published prices honored, the written quote as the confirmed total, no fake reviews, hotel rooms declined, zones stated honestly.',
    },
    intro:
      'What we promise, what we don’t, and where the numbers come from. Consider this a letter from the team — signed in public.',
    sections: [
      {
        heading: 'The register',
        list: [
          'Published prices, honored — the rate card you read is the rate card you pay',
          'The written quote is the confirmed total — never a chat estimate',
          '20% service and GET up to 4.7120% always on their own lines',
          'Groceries at cost, receipts on request',
          'No fake reviews — ever; reviews publish only after verified events',
          'We decline hotel rooms without kitchens',
          'We say when a zone is quote-only, and why',
        ],
      },
      {
        heading: 'What we don’t do',
        body: [
          'No teaser pricing. No invented testimonials. No stock “our chefs” photography. No travel fee discovered on the invoice. The full list lives on its own page, because refusals deserve the same daylight as promises.',
        ],
        links: [{ label: 'What we don’t do', href: 'what-we-dont-do' }],
      },
      {
        heading: 'Reviews, honestly',
        body: [
          'We are building a review record the slow way: real events, verified guests, published with permission. You will find no AggregateRating schema here and no five-star wallpaper — the rating you can trust is the one you can trace.',
        ],
      },
      {
        heading: 'Where the numbers come from',
        body: [
          'Every figure on this site traces to the published rate card or a sourced market comparison. When a number is proposed rather than final — cancellation tiers, legal disclosure wording — the page says so.',
        ],
        links: [
          { label: 'Booking terms', href: 'legal' },
          { label: 'How we vet chefs', href: 'how-we-vet-chefs' },
          { label: 'Coverage', href: 'coverage' },
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'The FAQ', secondaryHref: 'faq' },
    keywords: ['myCHEF honesty register Maui'],
  },
  {
    slug: 'legal',
    category: 'trust',
    title: 'myCHEF Maui Booking Terms',
    h1: 'Booking terms, in plain English and fine print.',
    meta: {
      description:
        'myCHEF Maui booking terms: the written quote, the 50% deposit, the fee stack, proposed cancellation tiers pending counsel review, force majeure, and the alcohol posture.',
    },
    intro:
      'The working terms for every Maui booking. Plain-English summaries first; where terms are proposed pending counsel review, they are labeled as such.',
    sections: [
      {
        heading: 'Scope of service',
        body: [
          'In short: we cook where there is a real kitchen. Private chef and catering services are provided at villas, estates, and venues with adequate kitchens across our published Maui service zones. Hotel rooms without kitchens are declined.',
        ],
      },
      {
        heading: 'The written quote',
        body: [
          'In short: the quote is the total. Every engagement is confirmed by a written quote itemizing food, staffing, travel, 20% service, and GET up to 4.7120%. That quote is the confirmed total — changes require a revised written quote.',
        ],
      },
      {
        heading: 'Deposit',
        body: [
          'In short: 50% locks the date. Dates are held only by deposit against a written quote; the balance follows the quote’s stated schedule.',
        ],
      },
      {
        heading: 'Cancellation — PROPOSED terms',
        body: [
          'In short: labeled proposed until counsel signs off. The proposed tiers: 28+ days, partial refund; 14–28 days, deposit retained; under 7 days, full balance. These render as proposed, not final, and your quote states the current terms at booking.',
        ],
      },
      {
        heading: 'Force majeure',
        body: [
          'In short: reschedule, not forfeit. Weather, natural events, and emergencies move the date rather than consume the deposit.',
        ],
      },
      {
        heading: 'Alcohol',
        body: [
          'In short: we do not sell alcohol. Alcohol is client-supplied or provided via licensed bartending referral; Maui County licensing rules govern event specifics, and your quote states the compliant setup. Related wording is flagged REQUIRES LEGAL VERIFICATION pending counsel.',
        ],
      },
      {
        heading: 'Service-charge disclosure',
        body: [
          'In short: 20%, disclosed, never a hidden gratuity. Under Hawaiʻi’s HRS §481B-14 posture, the 20% service charge is disclosed as a service charge on its own line; final disclosure wording is flagged REQUIRES LEGAL VERIFICATION until counsel locks it.',
        ],
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'The honesty register', secondaryHref: 'trust' },
    keywords: ['myCHEF booking terms Maui'],
  },
  {
    slug: 'faq',
    category: 'trust',
    title: 'Private Chef Maui FAQ',
    h1: 'Questions, answered in full sentences.',
    meta: {
      description:
        'The Maui private chef FAQ: pricing and fees, booking and deposits, kitchens and logistics, food and dietary, and the service day — full-prose answers with links.',
    },
    intro:
      'The whole Maui operation in question form — pricing, booking, kitchens, dietary, and the day itself.',
    sections: [],
    faq: [
      {
        q: 'How much does a private chef cost on Maui?',
        a: 'Signature dinners $150–$250 a guest, groceries inside the band; premium $190–$275; chef’s table $275–$400+. Stay Chef from $1,050 a day. Date nights from $500. Every quote itemizes 20% service and GET up to 4.7120% on their own lines.',
        links: [{ label: 'The rate card', href: '/maui/pricing' }],
      },
      {
        q: 'What is the 20% service charge?',
        a: 'A disclosed service charge covering service operations — always on its own line, never labeled a gratuity. Gratuity for exceptional work is voluntary and separate.',
      },
      {
        q: 'How do I lock a date?',
        a: 'A 50% deposit against a written quote. The quote is the confirmed total, and the deposit is what holds the calendar — an inquiry alone does not.',
      },
      {
        q: 'What is the cancellation policy?',
        a: 'Cancellation tiers are proposed pending counsel review: 28+ days partial refund, 14–28 days deposit retained, under 7 days full balance, force-majeure reschedules rather than forfeits. Your quote states the current terms.',
        links: [{ label: 'Booking terms', href: '/maui/legal' }],
      },
      {
        q: 'Can you cook in our condo?',
        a: 'If it has a real kitchen, yes — full range, real refrigerator, counter space. Hotel rooms and kitchenettes are declined. A photo with your inquiry gets a straight answer.',
        links: [{ label: 'The kitchen guide', href: '/maui/guides/villa-kitchen' }],
      },
      {
        q: 'Do you serve Hāna?',
        a: 'Mention-only: the two-plus-hour drive each way makes honest pricing difficult, so Hāna requests are quoted reluctantly or declined. We would rather say no than charge a number we cannot defend.',
      },
      {
        q: 'Can you handle a vegan and a celiac at the same table?',
        a: 'Yes — the eleven-flag dietary system with separate allergen prep is standard. Flagged plates course in parallel so nobody eats a lesser meal.',
        links: [{ label: 'Dietary depth', href: '/maui/services/dietary' }],
      },
      {
        q: 'Do you supply alcohol?',
        a: 'We do not sell alcohol. Client-supplied or licensed bartending referral, with the compliant setup stated in your written quote — Maui County’s rules are the state’s most specific.',
        links: [{ label: 'The alcohol guide', href: '/maui/guides/alcohol-and-bar' }],
      },
      {
        q: 'When should we book?',
        a: 'Two to four weeks in peak season (December–April), one to two off-peak, months for Christmas week and wedding Saturdays.',
        links: [{ label: 'Lead times', href: '/maui/guides/booking-lead-times' }],
      },
      {
        q: 'What happens if our chef gets sick?',
        a: 'The network re-crews from the bench or tells you immediately with options. A written quote is a commitment; a cancellation is our problem to solve, not yours.',
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'The honesty register', secondaryHref: 'trust' },
    keywords: ['private chef Maui FAQ'],
  },
  {
    slug: 'contact',
    category: 'trust',
    title: 'Contact myCHEF Maui — Four Doors, Not One Inbox',
    h1: 'Four doors, not one inbox.',
    meta: {
      description:
        'Contact myCHEF Maui: book a chef through the quote flow, partner as a villa manager or planner, press inquiries, or join the chef roster. WhatsApp (+971 55 174 4849) for the direct line.',
    },
    intro:
      'One inbox is how messages get lost. Pick the door that matches why you are here — each routes to the right human.',
    sections: [
      {
        heading: 'Book a chef',
        body: [
          'The quote flow is the fastest path: dates, headcount, the villa, dietary flags. What comes back is a written quote — the confirmed total — usually within a day.',
        ],
        links: [{ label: 'Start the quote', href: 'quote' }],
      },
      {
        heading: 'Partner with us',
        body: [
          'Villa managers, concierges, and wedding planners: the partner channel carries real availability, published rates your clients can verify, and referral conversations that stay out of the client’s food lines.',
        ],
        links: [{ label: 'Partners', href: 'partners' }],
      },
      {
        heading: 'Press',
        body: [
          'For interviews and features, send the outlet, the angle, and the deadline through the quote form’s notes field with “PRESS” in the subject line — it routes correctly.',
        ],
      },
      {
        heading: 'Careers — cook with us',
        body: [
          'Maui chefs: the network vets properly and pays on published terms. If you plate at restaurant level and like the written-quote discipline, introduce yourself through the partner channel.',
        ],
        links: [{ label: 'How we vet chefs', href: 'how-we-vet-chefs' }],
      },
    ],
    cta: { label: 'Start the quote', href: 'quote', secondaryLabel: 'The FAQ', secondaryHref: 'faq' },
    keywords: ['contact myCHEF Maui'],
  },
  {
    slug: 'about',
    category: 'trust',
    title: 'About myCHEF Maui',
    h1: 'A chef network with a rate card, not a mood board.',
    meta: {
      description:
        'About myCHEF Maui: a network of vetted independent chefs serving Wailea to Kapalua and Upcountry, one published rate card, and the written-quote discipline.',
    },
    intro:
      'myCHEF Maui is the island team of a four-island Hawaiʻi network: vetted independent chefs, one published rate card, and a simple promise — the written quote is the confirmed total.',
    sections: [
      {
        heading: 'What we are',
        body: [
          'A network of vetted independent chefs serving Maui’s villas, estates, and venues — Wailea and Mākena to Kapalua, Upcountry by arrangement. The network model means a bench: your booking is backed by more than one pair of hands.',
        ],
      },
      {
        heading: 'What we believe',
        body: [
          'That pricing should be published, fees itemized, and honesty a feature rather than a risk. Maui’s market hides its numbers; we put ours on the rate card, and we buy from Maui farmers, fishers, and ranchers first.',
        ],
        links: [{ label: 'The honesty register', href: 'trust' }],
      },
      {
        heading: 'What we are not',
        body: [
          'Not a restaurant group, not a marketplace of anonymous bids, and not a review farm. Where imagery on this site is illustrative, it is labeled as such by policy — no invented chef portraits, no fake testimonials, no staged “team” photos.',
        ],
      },
      {
        heading: 'The network',
        body: [
          'myCHEF Hawaii runs four island teams — Oʻahu, Maui, Kauaʻi, Big Island — under one standard and one fee-stack discipline. Sister networks operate the same model abroad.',
        ],
        links: [{ label: 'The statewide hub', href: '/' }],
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'How we vet chefs', secondaryHref: 'how-we-vet-chefs' },
    keywords: ['about myCHEF Maui'],
  },
  {
    slug: 'coverage',
    category: 'trust',
    parent: 'locations',
    title: 'Maui Service Area — The Coverage Truth',
    h1: 'Where we serve, where we quote, where we say no.',
    meta: {
      description:
        'myCHEF Maui coverage: base zones Wailea–Mākena and Kāʻanapali–Kapalua, Upcountry from $75, Pāʻia/Haʻikū quoted at inquiry, Hāna mention-only — with the reasons stated.',
    },
    intro:
      'The coverage truth in three tiers: where the published rate card holds as-is, where a published travel line applies, and where we quote at inquiry — or decline — with the reason attached.',
    sections: [
      {
        heading: 'Base zones — no travel line',
        body: [
          'Wailea, Mākena, Kīhei, Kāʻanapali, Nāpili–Honokōwai–Kahana, and Kapalua. The two resort corridors carry the published card exactly as written.',
        ],
        links: [{ label: 'All locations', href: 'locations' }],
      },
      {
        heading: 'Surcharge zone — published',
        body: [
          'Kula, Makawao, and Upcountry: travel from $75, on its own line. The drive and the cold chain are a real cost; publishing it beats burying it.',
        ],
      },
      {
        heading: 'Quote-only zones — with reasons',
        body: [
          'Pāʻia and Haʻikū: quoted at inquiry because the honest number depends on the event’s provisioning pattern. Hāna: mention-only — two-plus hours each way means we quote reluctantly or decline. A “no” with a reason is a coverage policy; a “yes” we cannot crew is not.',
        ],
        links: [{ label: 'Travel zones, priced', href: 'pricing/travel-zones' }],
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Where we cook', secondaryHref: 'locations' },
    keywords: ['Maui service area map'],
  },
  {
    slug: 'what-we-dont-do',
    category: 'trust',
    parent: 'trust',
    title: 'What myCHEF Maui Will Not Do',
    h1: 'The refusals, in daylight.',
    meta: {
      description:
        'What myCHEF Maui declines: hotel rooms without kitchens, fake reviews, teaser pricing, hidden travel fees, dates we cannot crew, and beach setups the DLNR permit forbids.',
    },
    intro:
      'Trust is built from refusals as much as promises. Here is what we will not do — each with the reason.',
    sections: [
      {
        heading: 'The list',
        list: [
          'We don’t serve hotel rooms without kitchens — a coffee maker is not a kitchen',
          'We don’t post reviews we can’t verify — no fake reviews, ever',
          'We don’t quote one number and invoice another — the written quote is the confirmed total',
          'We don’t hide the travel fee — Upcountry from $75, published',
          'We don’t hold dates we can’t crew — a real no beats a hopeful maybe',
          'We don’t cater on public beaches — DLNR rules ban structures and cap groups near 20',
          'We don’t sell alcohol — client-supplied or licensed referral',
          'We don’t market Lahaina town as a dining destination',
        ],
      },
      {
        heading: 'Why publish refusals',
        body: [
          'Because every “no” on this page protects a “yes” somewhere else. The kitchen gate protects the food; the review rule protects the trust; the zone honesty protects your invoice. A company that says yes to everything is telling you nothing.',
        ],
        links: [{ label: 'The honesty register', href: 'trust' }],
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'Booking terms', secondaryHref: 'legal' },
    keywords: ['what myCHEF will not do Maui'],
  },
  {
    slug: 'how-we-vet-chefs',
    category: 'trust',
    parent: 'trust',
    title: 'How myCHEF Vets Chefs on Maui',
    h1: 'How a chef joins the Maui roster.',
    meta: {
      description:
        'How myCHEF vets Maui chefs: professional kitchen backgrounds, trial services, food-safety discipline, and the written-quote standard every roster chef works under.',
    },
    intro:
      'The roster is the product, so the gate matters. Every Maui chef passes the same checks before their first myCHEF service.',
    sections: [
      {
        heading: 'The gate',
        list: [
          'Professional kitchen background — restaurant or hotel pedigree, verified',
          'A paid trial service observed by the network',
          'Food-safety discipline: cold chain, allergen protocol, cleanup standard',
          'The service temperament — your villa is someone’s home, not a stage',
        ],
      },
      {
        heading: 'The standard they work under',
        body: [
          'Published rates, itemized fees, groceries at cost with receipts, and the written-quote discipline. A chef who cannot work honestly inside those rules does not work here, however talented.',
        ],
      },
      {
        heading: 'What we don’t do',
        body: [
          'We don’t publish invented chef bios or stock “team” portraits. The roster is real; its members are introduced by name when your quote is written, not used as marketing cardboard before it.',
        ],
        links: [{ label: 'The honesty register', href: 'trust' }],
      },
      {
        heading: 'For chefs',
        body: [
          'Maui chefs who plate at restaurant level and like the discipline: the partner channel is open. Paid trials, published terms, and a book of business that does not require you to run a marketing site.',
        ],
        links: [{ label: 'Partner channel', href: 'partners' }],
      },
    ],
    cta: { label: 'Get a written quote', href: 'quote', secondaryLabel: 'About the network', secondaryHref: 'about' },
    keywords: ['how myCHEF vets chefs Maui'],
  },
];

/* ================= PARTNERS (4) ================= */
const partners: ContentRecord[] = [
  {
    slug: 'partners',
    category: 'partner',
    title: 'Partner with myCHEF Maui',
    h1: 'The partner channel.',
    meta: {
      description:
        'Partner with myCHEF Maui: villa managers, concierges, and wedding planners get published rates clients can verify, a direct line, and a crew that protects your property’s reputation.',
    },
    intro:
      'Maui’s hospitality runs on referrals — villa managers, concierges, and planners who stake their reputation on every recommendation. This channel exists so that stake is safe with us.',
    sections: [
      {
        heading: 'Why partners refer us',
        list: [
          'Published rates — your client verifies every number without calling you to check',
          'The written quote is the confirmed total — no invoice surprises land on your desk',
          'Kitchens and properties left cleaner than found — your asset is protected',
          'A direct line that answers, with real availability',
        ],
      },
      {
        heading: 'The three rails',
        links: [
          { label: 'Villa managers', href: 'partners/villa-managers' },
          { label: 'Concierges', href: 'partners/concierges' },
          { label: 'Wedding planners', href: 'partners/wedding-planners' },
        ],
      },
      {
        heading: 'The economics, honestly',
        body: [
          'Referral arrangements are discussed directly in this channel and never baked into a client’s food lines — the rate card is identical whether a guest arrives through you or Google. Your recommendation stays clean.',
        ],
      },
    ],
    cta: { label: 'Open the partner channel', href: 'quote', secondaryLabel: 'The rate card', secondaryHref: 'pricing' },
    keywords: ['partner with myCHEF Maui'],
  },
  {
    slug: 'partners/villa-managers',
    category: 'partner',
    parent: 'partners',
    title: 'Private Chef Partner for Maui Villa Managers',
    h1: 'The chef answer your concierge desk keeps needing.',
    meta: {
      description:
        'A private chef partner program for Maui villa managers: published per-guest rates, property-respectful crews, arrival provisioning, and Stay Chef weeks that extend bookings.',
    },
    intro:
      'Your guests ask for a chef weekly; your desk needs an answer that never embarrasses the property. We are that answer: published rates, vetted chefs, and crews who treat your villas like assets, not venues.',
    sections: [
      {
        heading: 'What your guests get',
        body: [
          'The full product line — signature dinners at $150–$250 a guest, Stay Chef days from $1,050, provisioning runs, date nights from $500 — at the same published prices whether they arrive through you or not. Your recommendation never carries a hidden tax.',
        ],
      },
      {
        heading: 'What your property gets',
        list: [
          'Kitchen-gate discipline — we confirm the kitchen before we book',
          'Cleanup to inspection standard, every service',
          'Documentation your property requires — COI and access paperwork on request',
          'A direct line for same-week requests, with honest availability',
        ],
      },
      {
        heading: 'The retention angle',
        body: [
          'A villa week with a chef is the upgrade guests rebook for. Properties whose kitchens “came with a chef available” earn the return visit — and the review that mentions the house, not us.',
        ],
        links: [{ label: 'Stay Chef product', href: 'stay-chef' }],
      },
    ],
    faq: [
      {
        q: 'How do referrals work operationally?',
        a: 'You send the guest or the dates; we handle everything from the written quote on. You get confirmation when the booking locks and a crew that needs nothing from your desk on the day.',
      },
      {
        q: 'Do you carry insurance for work in managed properties?',
        a: 'Documentation your property requires — including COI — is provided on request as part of onboarding the partnership.',
      },
    ],
    cta: { label: 'Open the partner channel', href: 'quote', secondaryLabel: 'All partners', secondaryHref: 'partners' },
    keywords: ['private chef partner for Maui villa managers'],
  },
  {
    slug: 'partners/concierges',
    category: 'partner',
    parent: 'partners',
    title: 'Concierge Chef Referral Program Maui',
    h1: 'For concierges: the request you get weekly, solved.',
    meta: {
      description:
        'A chef referral program for Maui concierges: published rates, same-week availability honesty, and service that reflects on your desk — never on your phone at 9pm.',
    },
    intro:
      '“Can you find us a chef?” is a top-five concierge request on Maui, and most answers are a business card and a prayer. This program is the better answer: a network with published prices and a bench.',
    sections: [
      {
        heading: 'Why concierges keep our number',
        body: [
          'Because the failure modes land on your phone: the chef who ghosts, the invoice that doubles, the kitchen left wrecked. Our discipline — written quotes, itemized fees, cleanup to standard — exists to keep your evening quiet.',
        ],
      },
      {
        heading: 'How it runs',
        list: [
          'One contact for all requests — villas, estates, last-minute dinners',
          'Honest availability: a real yes or a fast no, never a maybe',
          'Published rates your guest can verify — no concierge awkwardness about price',
          'Referral arrangements discussed directly, never inside the guest’s food lines',
        ],
      },
      {
        heading: 'The guest experience you are attaching your name to',
        body: [
          'Your chef shops that morning, arrives before service, cooks in the villa kitchen, serves each course, and leaves the kitchen clean. The guest remembers the concierge who made it happen — that is the point of the program.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you handle same-week requests?',
        a: 'Often, outside the December–April peak — and we answer fast either way. A quick honest no beats a slow hopeful yes.',
      },
      {
        q: 'What do you need from us for a referral?',
        a: 'Dates, headcount, the property, and any dietary flags. The written quote goes to the guest; you get confirmation when it locks.',
      },
    ],
    cta: { label: 'Open the partner channel', href: 'quote', secondaryLabel: 'All partners', secondaryHref: 'partners' },
    keywords: ['concierge chef referral program Maui'],
  },
  {
    slug: 'partners/wedding-planners',
    category: 'partner',
    parent: 'partners',
    title: 'Preferred-Vendor Wedding Caterer Maui — The Planner Program',
    h1: 'The caterer your venue list and your budget deck both like.',
    meta: {
      description:
        'The myCHEF Maui wedding planner program: published per-guest wedding lines, one-contract wedding weeks, vendor-list cooperation, and invoices that match the proposal.',
    },
    intro:
      'Estate venues gate through you; your clients’ budgets balance through us. Published wedding lines from $150 a guest, 20% service itemized, and a wedding week your clients can read on our site before your first call.',
    sections: [
      {
        heading: 'Built for your workflow',
        list: [
          'Published rates for your budget decks — no “call for quote” stall',
          'One written quote per week or per event; the invoice matches it',
          'Vendor-list cooperation: documentation, timelines, load-in plans',
          'Honest capacity: 10–75 staffed, over 75 a written exception',
        ],
      },
      {
        heading: 'The wedding-week product',
        body: [
          'Five meals, one contract, one crew — welcome dinner through recovery brunch. The worked 60-guest budget ($31,500 in food lines on published rates) is on the site for your clients to check before they ever email you.',
        ],
        links: [
          { label: 'The wedding week', href: 'weddings/wedding-week' },
          { label: 'The worked budget', href: 'weddings/wedding-week-budget' },
        ],
      },
      {
        heading: 'The venue layer',
        body: [
          'Olowalu, Kukahiko, Haiku Mill and the resort corridor each carry their own rules; we work inside them. Where a venue charges outside-vendor fees — Haiku Mill’s is $650 — your client hears it from us in the first quote, not the final invoice.',
        ],
        links: [{ label: 'The planner channel page', href: 'weddings/planner-channel' }],
      },
    ],
    faq: [
      {
        q: 'How do we start a planner relationship?',
        a: 'Through the partner channel with your company, your venues, and your typical headcounts. We respond with availability, documentation, and a direct contact for the season.',
      },
      {
        q: 'Do you hold dates for planner clients?',
        a: 'Dates hold by written quote and 50% deposit — the same rule for every client, which keeps your recommendations defensible.',
      },
    ],
    cta: { label: 'Open the partner channel', href: 'quote', secondaryLabel: 'Planner channel', secondaryHref: 'weddings/planner-channel' },
    keywords: ['preferred-vendor wedding caterer Maui'],
  },
];

/* Merge the full 126-route registry. */
content.push(
  ...services,
  ...locations,
  ...serviceLocations,
  ...occasions,
  ...weddings,
  ...menus,
  ...pricing,
  ...guides,
  ...trust,
  ...partners,
);
