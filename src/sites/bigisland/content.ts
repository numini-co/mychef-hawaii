import type { ContentRecord } from '@/platform/types';

/**
 * bigisland content registry — the full 121-page inventory
 * (Chapter 4 §4.2.4, tables 4.2.4a + 4.2.4b).
 *
 * Dual-hub island: the Kona–Kohala resort corridor west, Hilo–Volcano east,
 * 2.5–3 hours apart over the Saddle. Travel-zone honesty is structural:
 * base zone Kona–Kohala, outside-corridor travel from $75, east side quoted
 * at inquiry — never implied. Term duality: titles/H1s say "Big Island"
 * (visitor term); body copy, alt text, and FAQs carry "Hawaiʻi Island."
 * Approved numbers only (info.md): CORE $150–$225/guest, ENTRY from $110,
 * PREMIUM $190–$275, CHEF'S TABLE $275–$400+, Stay Chef from $950/day,
 * Date Night from $550, cart from $725/4hr, server $55/hr, sous $75/hr,
 * 4-hr floor, travel from $75, 20% service + GET up to 4.7120% on own lines,
 * 50% deposit. The hero never says "from $125".
 */

const QUOTE = { label: 'Get a written quote', href: 'quote' } as const;

export const content: ContentRecord[] = [
  {
    slug: '',
    category: 'core',
    title: 'Private Chef Big Island — Kona–Kohala',
    h1: 'Private chef, Big Island.',
    meta: {
      description:
        'Private chef service on Hawaiʻi Island, Kona–Kohala first. Villa dinners $150–$225 a guest, ENTRY from $110, Stay Chef from $950 a day. The written quote is the confirmed total.',
      ogImage: '/img/bigisland/hero-home.jpg',
    },
    intro:
      'Kona–Kohala first. Villa dinners $150–$225 a guest, ENTRY from $110. Stay Chef from $950 a day. The written quote is the confirmed total.',
    sections: [],
    cta: { ...QUOTE, secondaryLabel: 'The rate card', secondaryHref: 'pricing' },
    keywords: ['private chef Big Island'],
  },
  {
    slug: 'quote',
    category: 'core',
    title: 'Get a Written Quote — Private Chef Big Island',
    h1: 'Tell us the table. We send the number.',
    meta: {
      description:
        'Five fields, two minutes. One written quote for your Big Island dinner, stay, or wedding week — and that quote is the confirmed total.',
    },
    sections: [],
    cta: { label: 'Start the quote', href: 'quote' },
    keywords: ['book a private chef Big Island'],
  },
  {
    slug: 'private-chef',
    category: 'core',
    title: 'Hire a Private Chef on the Big Island — Kona to the Kohala Coast',
    h1: 'A private chef in your Big Island kitchen.',
    meta: {
      description:
        'Villa dinners $150–$225 a guest, Date Night from $550, Stay Chef from $950 a day across the Kona–Kohala corridor. Published prices, groceries inside the band, the written quote is the confirmed total.',
      ogImage: '/img/bigisland/hero-private-chef.jpg',
    },
    intro:
      'Your chef shops that morning, arrives before service, cooks in your villa kitchen, serves each course, and leaves the kitchen clean. Groceries are inside the band; receipts on request.',
    sections: [
      {
        heading: 'The services, in ledger form',
        body: [
          'Four products cover nearly every stay on Hawaiʻi Island: the villa dinner (CORE $150–$225 a guest, ENTRY from $110), Date Night for two (from $550), Stay Chef for multi-day service (from $950 a day), and the wedding week (from $150 a guest plus staffing). Each is priced on the published card — the same numbers on this page are the numbers in your quote.',
        ],
        list: [
          'VILLA DINNER — $150–$225/GUEST · ENTRY FROM $110',
          'DATE NIGHT — FROM $550',
          'STAY CHEF — FROM $950/DAY',
          'WEDDING WEEK — FROM $150/GUEST + STAFFING',
        ],
        links: [
          { label: 'The full rate card', href: 'pricing' },
          { label: 'Menus', href: 'menus' },
        ],
      },
      {
        heading: 'The kitchen gate',
        body: [
          'We will not pretend a coffee maker and a minibar are a pass. Hotel rooms without kitchens are declined; villas, suites with kitchens, and estates are the stage. The Kona–Kohala corridor is built for this — full kitchens are standard in the resort-residence and villa stock from Keauhou to Mauna Kea.',
          'Not sure your rental qualifies? Send the listing link with your inquiry and we will tell you plainly.',
        ],
      },
      {
        heading: 'Included, and separate',
        list: [
          'Included: menu design, same-day shopping, cooking, table service, cleanup, groceries inside the band',
          'Separate: servers $55/hr, sous chef $75/hr (4-hour floor), bar cart, travel zones, rentals',
        ],
        body: [
          'The separation is deliberate. A dinner for two in Kailua-Kona should not subsidize a staffed estate reception at Mauna Lani — so staffing, travel, and bar each get their own line, and the 20% service charge and Hawaiʻi GET up to 4.7120% appear on their own lines after that.',
        ],
      },
      {
        heading: 'Where we serve',
        body: [
          'The base zone is the Kona–Kohala corridor: Kailua-Kona, Keauhou, Holualoa, Waikoloa, Mauna Lani, Mauna Kea, Puako, and — by referral — Hualālai, Kukio, and Kohanaiki. Outside the corridor, travel runs from $75. The east side — Hilo, Volcano, Waimea — is quoted in writing, because Kona to Hilo is 2.5 to 3 hours over the Saddle and we would rather say so here than surprise you in a quote.',
        ],
        links: [
          { label: 'The corridor, with drive times', href: 'locations' },
          { label: 'Travel zones', href: 'pricing/travel-zones' },
        ],
      },
    ],
    faq: [
      {
        q: 'How much is a private chef on the Big Island?',
        a: 'CORE villa dinners run $150–$225 a guest with groceries inside the band; the ENTRY tier starts from $110 a guest. Date Night for two starts from $550 and Stay Chef from $950 a day. Staffing, travel outside Kona–Kohala, and bar service are separate published lines.',
        links: [{ label: 'See the rate card', href: '/bigisland/pricing' }],
      },
      {
        q: 'Do you serve Hilo or Volcano?',
        a: 'Yes — quoted, not implied. The east side is 2.5–3 hours from our Kona base over the Saddle, so east-side service is priced as its own written quote that accounts for drive time and crew logistics. We would rather tell you that here than hide it in fine print.',
        links: [{ label: 'East-side quote posture', href: '/bigisland/pricing/east-side-quote' }],
      },
      {
        q: 'What about Hualālai, Kukio, or Kohanaiki?',
        a: 'Those communities are gated, and access comes through your host, estate manager, or concierge. We come with the referral — send us the contact and we coordinate entry, load-in, and kitchen walk-through directly.',
        links: [{ label: 'Hualālai service notes', href: '/bigisland/locations/hualalai' }],
      },
      {
        q: 'Are groceries included?',
        a: 'Inside the per-guest band, yes — the chef shops the morning of your dinner and groceries are inside the price. Receipts are available on request. Stay Chef engagements bill groceries at cost with receipts.',
        links: [{ label: 'Groceries at cost, explained', href: '/bigisland/guides/groceries-at-cost' }],
      },
    ],
    cta: { ...QUOTE, secondaryLabel: 'See menus', secondaryHref: 'menus' },
    keywords: ['hire a private chef Big Island', 'private chef Kona', 'private chef Kohala Coast'],
  },
  {
    slug: 'catering',
    category: 'core',
    title: 'Catering on the Big Island — Villa Weddings, Rehearsals, Estate Events',
    h1: 'Catering, in ledger form.',
    meta: {
      description:
        'Staffed catering for 10–75 guests on Hawaiʻi Island — villa weddings, rehearsal dinners, estate events. From $150 a guest with 20% service on its own line, against resort F&B minimums of $7,500–$15,000 at 23–25%.',
      ogImage: '/img/bigisland/hero-catering.jpg',
    },
    intro:
      'Ten to seventy-five guests, staffed. Over 75 is a written exception — quoted, never implied. Our lane is the villa wedding, the rehearsal dinner, and the estate event that sits comfortably under the resort circuit’s F&B minimums.',
    sections: [
      {
        heading: 'The formats',
        list: [
          'FAMILY-STYLE — PLATTERS DOWN THE TABLE, FROM $150/GUEST',
          'PLATED — COURSED SERVICE, $150–$225/GUEST CORE BAND',
          'STATIONS / PUPU SERVICE — QUOTED BY FORMAT',
          'BAR CART — FROM $725/4HR, STAFFED',
        ],
        body: [
          'Every format carries the same economics: food inside the per-guest band, staffing on hourly lines (server $55, sous chef $75, four-hour floor), 20% service charge and GET up to 4.7120% itemized after. You see every line before you sign anything.',
        ],
      },
      {
        heading: 'The arithmetic, stated plainly',
        body: [
          'Kohala Coast resorts run food-and-beverage minimums of $7,500–$15,000 per event with 23–25% service charges. A staffed myCHEF estate dinner runs from $150 a guest with a 20% service charge on its own line. For a 40-guest rehearsal dinner, that is not a nuance — it is the difference between a minimum you must hit and a bill you can read.',
        ],
        links: [
          { label: 'Resort vs estate, the math', href: 'compare/resort-wedding-vs-estate' },
          { label: 'Wedding catering', href: 'weddings' },
        ],
      },
      {
        heading: 'East side: quoted, written, honored',
        body: [
          'Hilo and Volcano events are real work we genuinely do — but they are 2.5–3 hours from the Kona kitchen base, so east-side catering is quoted as its own document covering crew travel and timing. The quote is written and the quote is honored; what we do not do is pretend the Saddle does not exist.',
        ],
        links: [{ label: 'Retreat catering, east side', href: 'retreat-catering' }],
      },
      {
        heading: 'Staffing, separately',
        body: [
          'Servers at $55 an hour, sous chefs at $75, bartenders quoted, four-hour floor on all event staffing. For villa managers and planners, we staff independently of food service — the same published hourly lines apply.',
        ],
        links: [{ label: 'Event staffing', href: 'services/staffing' }],
      },
    ],
    faq: [
      {
        q: 'What does catering cost on the Big Island?',
        a: 'Staffed events run from $150 a guest for food, with servers at $55/hr and sous chefs at $75/hr on their own lines, a 20% service charge, and GET up to 4.7120% — all itemized. Compare that to resort F&B minimums of $7,500–$15,000 per event at 23–25% service.',
      },
      {
        q: 'Can you cater more than 75 guests?',
        a: 'Over 75 is a written exception. We have the format experience, but headcount above 75 changes kitchen load, rentals, and crew depth enough that we will only confirm it in a written quote — never implied on a web page.',
      },
      {
        q: 'Do you cater in Hilo?',
        a: 'Yes, quoted. East-side events carry crew travel over the Saddle (2.5–3 hours each way), which we price openly in the written quote rather than burying it in the per-guest line.',
        links: [{ label: 'Catering Hilo', href: '/bigisland/locations/hilo/catering' }],
      },
    ],
    cta: { ...QUOTE, secondaryLabel: 'Wedding formats', secondaryHref: 'weddings' },
    keywords: ['catering Big Island', 'catering Kona', 'estate catering Kohala Coast'],
  },
  {
    slug: 'weddings',
    category: 'core',
    title: 'Big Island Wedding Catering — The Wedding Week, in Writing',
    h1: 'The wedding week, in writing.',
    meta: {
      description:
        'Big Island wedding catering from $150 a guest plus staffing: welcome dinner, rehearsal, reception, recovery brunch. 20% service on its own line — against resort minimums of $7,500–$15,000 at 23–25%.',
      ogImage: '/img/bigisland/hero-weddings.jpg',
    },
    intro:
      'The resort circuit is captive — its packages and minimums are published and they are steep. The villa wedding week is open, and it is our lane: every meal from the welcome dinner to the recovery brunch, one written quote, from $150 a guest plus staffing.',
    sections: [
      {
        heading: 'The five-meal week',
        list: [
          'WELCOME DINNER — the arrival meal, family-style, from $150/guest',
          'REHEARSAL DINNER — the private-chef lane, plated or family-style',
          'CEREMONY-ADJACENT — pupus and bar cart while photos run',
          'RECEPTION — staffed, $150–$225/guest CORE band',
          'RECOVERY BRUNCH — the morning after, from $150/guest',
        ],
        body: [
          'Book one meal or all five. The week is priced as one ledger — food lines, staffing lines, 20% service, GET up to 4.7120% — so the total you approve is the total you pay.',
        ],
        links: [{ label: 'The wedding-week product', href: 'weddings/wedding-week' }],
      },
      {
        heading: 'The comparison nobody else publishes',
        body: [
          'Resort wedding packages on the Kohala Coast carry F&B minimums of $7,500–$15,000 per event and service charges of 23–25%. An estate wedding week with myCHEF runs from $150 a guest with a 20% service charge itemized on its own line. We publish both sides of that arithmetic because we win it.',
        ],
        links: [
          { label: 'Resort vs estate: the worked math', href: 'compare/resort-wedding-vs-estate' },
          { label: 'What wedding catering costs', href: 'weddings/wedding-cost' },
        ],
      },
      {
        heading: 'Corridor first, east side quoted',
        body: [
          'Most wedding weeks we run are on the Kona–Kohala corridor — Puako estates, Mauna Lani and Mauna Kea resort-residences, Waikoloa villas, Kona coffee-farm venues. Waimea ranch venues and Volcano lodges are quoted with east-side travel accounted in writing.',
        ],
        links: [
          { label: 'Kohala Coast wedding catering', href: 'locations/kohala-coast/wedding-catering' },
          { label: 'Venue notes', href: 'weddings/venues' },
        ],
      },
      {
        heading: 'Elopements',
        body: [
          'Two people, a black-lava coastline, and a dinner worth remembering. Elopement dinners are Date Night economics — from $550 — with ceremony-adjacent timing built around your photographer and officiant.',
        ],
        links: [{ label: 'Elopement dinners', href: 'weddings/elopement' }],
      },
    ],
    faq: [
      {
        q: 'What does Big Island wedding catering cost?',
        a: 'From $150 a guest for food plus staffing (server $55/hr, sous chef $75/hr), with 20% service and GET up to 4.7120% itemized. The venue-caterer market runs from a $75/person floor to $120–$250 a person at resorts — before their 23–25% service charges.',
        links: [{ label: 'Wedding cost breakdown', href: '/bigisland/weddings/wedding-cost' }],
      },
      {
        q: 'Can you cater a wedding at a private estate or vacation rental?',
        a: 'Yes — that is precisely our lane. Estates and villas have kitchens, sit outside resort catering contracts, and let the whole week happen in one place. We coordinate load-in and kitchen specs with your property manager.',
      },
      {
        q: 'Do you work with wedding planners?',
        a: 'Constantly. Planners get a direct line, itemized quotes they can drop into a budget, and a crew that has worked the corridor venues. East-side venues are quoted with travel stated plainly.',
        links: [{ label: 'Partner with us', href: '/bigisland/partners/wedding-planners' }],
      },
      {
        q: 'Will you cater a wedding in Hilo or Volcano?',
        a: 'Yes, as a written quote. The east side is 2.5–3 hours from Kona; the quote accounts for crew travel honestly instead of hiding it.',
      },
    ],
    cta: { ...QUOTE, secondaryLabel: 'The budget grid', secondaryHref: 'weddings/wedding-week' },
    keywords: ['wedding catering Big Island', 'Big Island wedding week chef'],
  },
  {
    slug: 'stay-chef',
    category: 'core',
    title: 'Stay Chef Big Island — A Chef for the Week, from $950/Day',
    h1: 'Stay Chef: the week, cooked.',
    meta: {
      description:
        'A dedicated chef for your Big Island stay from $950 a day plus groceries at cost — breakfast through dinner across the Kona–Kohala corridor. Published day rate, written quote, no hidden lines.',
    },
    intro:
      'One chef, your kitchen, the whole stay. From $950 a day plus groceries at cost with receipts — the only published multi-day private-chef rate on Hawaiʻi Island.',
    sections: [
      {
        heading: 'A sample three-day rhythm',
        list: [
          'DAY 1 — Arrival dinner: the kitchen stocked, a CORE dinner the night you land',
          'DAY 2 — Breakfast, beach-day provisioning, dinner at the villa',
          'DAY 3 — Slow brunch, a light supper before an evening out in Kona',
        ],
        body: [
          'The rhythm flexes to yours — some stays want three meals a day, some want dinner and a stocked fridge. The day rate is the anchor; the written quote sets the shape.',
        ],
      },
      {
        heading: 'How billing works',
        body: [
          'The day rate covers the chef. Groceries are billed at cost with receipts — you pay what the market charged, nothing more. There is no published weekly discount; the written quote is the total. Extra meals beyond the agreed rhythm are quoted same-day.',
          'Staffing beyond the chef — a server for a hosted evening, a sous chef for a big night — runs on the published hourly lines: $55 and $75, four-hour floor.',
        ],
      },
      {
        heading: 'Where Stay Chef works best',
        body: [
          'Resort-residences and estates with real kitchens: Mauna Lani, Mauna Kea, Waikoloa, Puako, Keauhou, and the gated communities by referral. Kona coffee-belt farm stays work well for quieter weeks. East-side stays are quoted with travel accounted — the island is 4,028 square miles and we price it honestly.',
        ],
        links: [
          { label: 'Stay Chef on the Kohala Coast', href: 'locations/kohala-coast/stay-chef' },
          { label: 'Estate-week chef service', href: 'services/estate-week-chef' },
        ],
      },
    ],
    faq: [
      {
        q: 'What does a Stay Chef cost on the Big Island?',
        a: 'From $950 a day plus groceries at cost with receipts. A five-day stay starts from $4,750 before groceries — itemized in writing before you commit.',
        links: [{ label: 'Stay Chef cost, worked', href: '/bigisland/pricing/stay-chef-cost' }],
      },
      {
        q: 'Is there a weekly discount?',
        a: 'No published one. The day rate is the rate; the written quote is the total. We do not advertise discounts we have not published.',
      },
      {
        q: 'Can the chef handle dietary protocols all week?',
        a: 'Yes — eleven dietary flags, one kitchen, separate prep for allergens. Multi-day stays are where dietary consistency matters most, and the menu plan is set in the quote, not improvised on day three.',
      },
    ],
    cta: { ...QUOTE, secondaryLabel: 'Cost breakdown', secondaryHref: 'pricing/stay-chef-cost' },
    keywords: ['stay chef Big Island', 'vacation chef Kona', 'chef for a week Kohala'],
  },
  {
    slug: 'pricing',
    category: 'pricing',
    title: 'Private Chef Big Island Cost — The Rate Card',
    h1: 'The rate card.',
    meta: {
      description:
        'The only full published private-chef rate card on Hawaiʻi Island: ENTRY from $110, CORE $150–$225 a guest, Stay Chef from $950 a day, travel from $75, 20% service and GET on their own lines.',
      ogImage: '/img/bigisland/hero-pricing-ledger.jpg',
    },
    intro:
      'Every number on this page is published policy. The written quote you receive is built from these lines — and that quote is the confirmed total.',
    sections: [],
    cta: { ...QUOTE, secondaryLabel: 'Run the estimator', secondaryHref: 'pricing/estimate' },
    keywords: ['private chef Big Island cost', 'Big Island private chef prices'],
  },
  {
    slug: 'retreat-catering',
    category: 'core',
    title: 'Retreat Catering Big Island — Volcano, Puna & Hilo Corridor',
    h1: 'Retreat catering, east-side fluent.',
    meta: {
      description:
        'Plant-forward and protocol-labeled retreat catering on Hawaiʻi Island — Volcano, Puna, and Hilo retreat centers, plus estate buyouts west. Multi-day meal plans quoted in writing.',
    },
    intro:
      'The Puna–Volcano wellness corridor has exactly one premium incumbent and a real gap behind it. We cater retreats on both sides of the Saddle — protocol-labeled menus, multi-day rhythm, quoted in writing with east-side logistics stated plainly.',
    sections: [
      {
        heading: 'The east-side retreat corridor',
        body: [
          'Volcano Village lodges, Puna retreat houses, and Hilo-side centers run on 8–30+ guests sleeping on-site with every meal catered. The east side’s whole-food tradition — raw, vegan, gluten-free, farm-sourced — is a genuine culinary register here, not a marketing adjective, and our protocol menus are built for it.',
        ],
        links: [
          { label: 'Volcano–Puna retreats', href: 'retreat-catering/volcano-puna' },
          { label: 'Dietary protocols', href: 'retreat-catering/dietary-protocols' },
        ],
      },
      {
        heading: 'How retreat pricing works',
        body: [
          'Retreats price two ways: per-person per-day meal plans for host-contracted programs, or the Stay Chef day rate (from $950) plus groceries at cost for chef-in-residence weeks. Multi-day totals are written quotes — assembled from published lines, honored to the dollar.',
        ],
        links: [{ label: 'Meal-plan pricing', href: 'retreat-catering/meal-plans' }],
      },
      {
        heading: 'For hosts',
        body: [
          'Retreat hosts are repeat buyers with real logistics problems: dietary matrices, meal timing around sessions, kitchens that vary from lodge-grade to residential. We quote per program, label protocols per plate, and put drive times in the quote instead of the fine print.',
        ],
        links: [{ label: 'The host page', href: 'retreat-catering/for-hosts' }],
      },
      {
        heading: 'Corporate retreats and estate buyouts',
        body: [
          'West-side estate buyouts and corporate retreats run on the catering ledger: staffed service 10–75 guests, from $150 a guest, with the same itemized fee stack. Over 75 is a written exception.',
        ],
        links: [{ label: 'Corporate retreats', href: 'retreat-catering/corporate-retreats' }],
      },
    ],
    faq: [
      {
        q: 'Do you cater retreats near Volcano?',
        a: 'Yes — Volcano and Puna are a core retreat market for us. Because the area is 2.5–3 hours from our Kona kitchen base, multi-day retreats are quoted with travel and lodging logistics in writing. For week-long programs a chef-in-residence arrangement often prices better than daily travel.',
        links: [{ label: 'Volcano retreat chef', href: '/bigisland/locations/volcano/retreat-chef' }],
      },
      {
        q: 'Can you run raw, vegan, or cleansing protocols?',
        a: 'Yes. The east-side wellness tradition is built on exactly these protocols, and our menus label them per plate — raw, vegan, gluten-free, cleansing — with separate prep for allergens.',
      },
      {
        q: 'What does retreat catering cost?',
        a: 'Meal plans are quoted per person per day based on program length and protocols; chef-in-residence weeks anchor on the published Stay Chef rate from $950 a day plus groceries at cost. Every total is a written quote.',
      },
    ],
    cta: { ...QUOTE, secondaryLabel: 'Meal plans', secondaryHref: 'retreat-catering/meal-plans' },
    keywords: ['retreat catering Big Island', 'retreat chef Hawaii Island'],
  },
  /* ---- Services (Table 4.2.4a) ---- */
  {
    slug: 'services/personal-chef',
    category: 'service',
    parent: 'private-chef',
    title: 'Personal Chef Big Island — Weekly Cook Days & In-Home Service',
    h1: 'A personal chef for your Big Island household.',
    meta: {
      description:
        'Personal chef service on Hawaiʻi Island: recurring cook days, weekly menus, and in-home service for Kona–Kohala residents and second-home owners. Groceries at cost, receipts on request.',
    },
    intro:
      'Personal chef work is the resident register of the same craft: a recurring cook day, a stocked fridge, menus planned around your household instead of a single evening.',
    sections: [
      {
        heading: 'How a cook day runs',
        body: [
          'Your chef shops that morning, cooks the week’s menu in your kitchen, labels and stores everything, and leaves the kitchen clean. Groceries are billed at cost with receipts; the service itself is quoted in writing based on household size and cadence.',
        ],
      },
      {
        heading: 'Who uses it',
        body: [
          'Kona–Kohala residents, second-home owners who want the kitchen ready when they land, and households managing a dietary protocol that restaurant dining keeps breaking. Waimea and east-side households are quoted with travel stated plainly.',
        ],
        links: [{ label: 'Meal prep service', href: 'services/meal-prep' }],
      },
      {
        heading: 'Personal vs private chef',
        body: [
          'A private chef cooks the event — a dinner, a wedding week. A personal chef cooks the calendar. Many households run both: weekly cook days, then a plated CORE dinner when guests arrive.',
        ],
        links: [{ label: 'Private vs personal chef', href: 'compare/private-vs-personal-chef' }],
      },
    ],
    faq: [
      {
        q: 'What does a personal chef cost on the Big Island?',
        a: 'Cook-day service is quoted per household based on cadence and headcount, with groceries at cost and receipts. One-off dinners stay on the published card — CORE $150–$225 a guest, ENTRY from $110.',
      },
      {
        q: 'Do you serve east-side households?',
        a: 'Yes, quoted. Hilo-side cook days carry the Saddle drive in the written quote; recurring schedules usually consolidate shopping and travel into one weekly run.',
      },
    ],
    cta: { ...QUOTE, secondaryLabel: 'The rate card', secondaryHref: 'pricing' },
    keywords: ['personal chef Big Island', 'personal chef Kona'],
  },
  {
    slug: 'services/vacation-chef',
    category: 'service',
    parent: 'private-chef',
    title: 'Vacation Chef Kona — A Chef for Your Rental Week',
    h1: 'A chef for the vacation rental.',
    meta: {
      description:
        'Chef service built for Big Island vacation rentals: arrival-night dinners, Stay Chef weeks from $950/day, and provisioning — across Kona, Keauhou, Waikoloa, and the Kohala Coast.',
    },
    intro:
      'The highest-value meal of a Big Island vacation is the first one — the night you land, groceries not yet bought, the kitchen unfamiliar. Vacation-chef service starts there and scales to the whole week.',
    sections: [
      {
        heading: 'The arrival-night dinner',
        body: [
          'Your chef shops before you land, stocks the essentials, and cooks a CORE dinner ($150–$225 a guest, ENTRY from $110) the night you arrive. The fridge is full, the kitchen is proven, and the vacation starts at the table instead of a grocery run.',
        ],
      },
      {
        heading: 'Scale up to the week',
        body: [
          'Stay Chef runs from $950 a day plus groceries at cost with receipts — breakfast through dinner, or just dinners and a stocked kitchen. Most rental weeks mix: two or three chef dinners, one full-service day, and the rest provisioning.',
        ],
        links: [{ label: 'Stay Chef', href: 'stay-chef' }],
      },
      {
        heading: 'The kitchen gate, honestly',
        body: [
          'Big Island STRs almost always have full kitchens — that is why this island works so well for chef service. We confirm kitchen specs from your listing before quoting; hotel rooms without kitchens are declined.',
        ],
        links: [{ label: 'What kitchen a chef needs', href: 'guides/villa-kitchen' }],
      },
    ],
    faq: [
      {
        q: 'Do rental companies offer chef packages?',
        a: 'Several Kona–Kohala villa managers bundle or refer chef service. We work directly with managers and concierges — send us your property contact or book direct.',
        links: [{ label: 'For villa managers', href: '/bigisland/partners/villa-managers' }],
      },
      {
        q: 'Can you provision the villa without cooking?',
        a: 'Yes — grocery stocking is an attach-on service billed at cost with receipts plus a service line, quoted in writing.',
      },
    ],
    cta: { ...QUOTE, secondaryLabel: 'Stay Chef details', secondaryHref: 'stay-chef' },
    keywords: ['chef for vacation rental Kona', 'vacation chef Big Island'],
  },
  {
    slug: 'services/date-night',
    category: 'service',
    parent: 'private-chef',
    title: 'Date Night Private Chef Big Island — Dinner for Two, from $550',
    h1: 'Date Night: two seats, one chef.',
    meta: {
      description:
        'A private chef dinner for two on the Big Island, from $550 — menu call, the evening, a clean kitchen after. Kona–Kohala villas and estates; east side quoted.',
      ogImage: '/img/bigisland/panel-date-night.jpg',
    },
    intro:
      'From $550, all in on food: a coursed dinner for two, cooked in your kitchen, served at your table, cleaned up after. The restaurant can’t come to the lava coast at sunset. We can.',
    sections: [
      {
        heading: 'How the evening runs',
        list: [
          'THE MENU CALL — one conversation sets courses, dietary flags, timing',
          'THE NIGHT — your chef shops, cooks, plates, and serves each course',
          'THE KITCHEN AFTER — clean, dark, done; you never see the mess',
        ],
        media: { src: '/img/bigisland/panel-date-night.jpg', alt: 'Two plates on a dark basalt table with a single candle on Hawaiʻi Island', ratio: '16/10' },
      },
      {
        heading: 'What $550 covers',
        body: [
          'The from-$550 line covers chef, menu, groceries, service, and cleanup for two inside the Kona–Kohala base zone. Premium menus and Chef’s Table formats price from the published tiers; travel outside the corridor runs from $75; the east side is quoted.',
        ],
        links: [{ label: 'Anniversary and proposal dinners', href: 'occasions/anniversary' }],
      },
    ],
    faq: [
      {
        q: 'Is Date Night available outside Kona?',
        a: 'Yes across the Kona–Kohala corridor at the published line. South Kona and east-side dates carry the from-$75 travel line or a written quote respectively.',
      },
      {
        q: 'Can you time dinner around sunset?',
        a: 'That is the standard brief. We set service time from the sunset table for your date and plate the main as the light goes.',
      },
    ],
    cta: { ...QUOTE, secondaryLabel: 'Occasions', secondaryHref: 'occasions' },
    keywords: ['private chef for two Big Island', 'date night chef Kona'],
  },
  {
    slug: 'services/meal-prep',
    category: 'service',
    parent: 'private-chef',
    title: 'Meal Prep Chef Kona — Weekly Menus, Labeled and Stored',
    h1: 'Meal prep, chef-grade.',
    meta: {
      description:
        'Weekly meal-prep chef service in Kona and the Kohala corridor — menus planned, groceries shopped, meals cooked, labeled, and stored. Groceries at cost with receipts.',
    },
    intro:
      'A weekly cook day for residents, snowbirds, and long-stay guests: the week’s meals cooked in your kitchen, labeled by day and protocol, stacked in your fridge.',
    sections: [
      {
        heading: 'The weekly rhythm',
        body: [
          'One menu call sets the week. Your chef shops that morning — Kona markets and Hāmākua producers where the season allows — cooks in a single session, and leaves a labeled fridge and a clean kitchen. Groceries at cost, receipts on request.',
        ],
      },
      {
        heading: 'Dietary protocols are the norm, not the exception',
        body: [
          'Gluten-free, plant-forward, macro-tracked, allergen-separated — meal prep is where dietary consistency actually pays. Eleven dietary flags, one kitchen, separate prep for allergens.',
        ],
        links: [{ label: 'Dietary service', href: 'services/dietary' }],
      },
    ],
    faq: [
      {
        q: 'How is meal prep priced?',
        a: 'By cook day, quoted per household, with groceries at cost and receipts. The per-guest dinner bands apply to plated service, not prep days.',
      },
      {
        q: 'Do you serve Waikoloa and Mauna Lani residents?',
        a: 'Yes — the whole Kona–Kohala corridor is the base zone with no travel line. East-side prep days are quoted with the drive included.',
      },
    ],
    cta: QUOTE,
    keywords: ['meal prep chef Kona', 'weekly meal prep Big Island'],
  },
  {
    slug: 'services/cooking-classes',
    category: 'service',
    parent: 'private-chef',
    title: 'Private Cooking Classes in Kona — In Your Villa Kitchen',
    h1: 'Cooking classes, at your counter.',
    meta: {
      description:
        'Private cooking classes on the Big Island — Kona coffee, island ingredients, and technique, taught in your villa kitchen. Quoted per group; pairs well with a chef-cooked dinner after.',
    },
    intro:
      'A hands-on session in your rental kitchen: knife work, island ingredients, and a dish you cooked yourself — with the option of a chef-cooked dinner after the aprons come off.',
    sections: [
      {
        heading: 'What a class covers',
        body: [
          'Sessions run two to three hours and are built around what is actually good that week — Kona coffee service, Hāmākua mushrooms, the day’s fish. Groups of two to eight work best; bigger groups become chef-led stations, quoted as an event.',
        ],
      },
      {
        heading: 'Pricing posture',
        body: [
          'Classes are quoted per group from the published staffing and chef lines — no invented per-head ticket. Many groups book the class plus a Date Night or CORE dinner for the evening.',
        ],
        links: [{ label: 'Date Night from $550', href: 'services/date-night' }],
      },
    ],
    faq: [
      {
        q: 'Can kids join?',
        a: 'Yes — family classes are the most-booked format. We set a menu with real jobs for small hands and a meal everyone eats at the end.',
        links: [{ label: 'Kids menus', href: '/bigisland/menus/kids' }],
      },
    ],
    cta: QUOTE,
    keywords: ['cooking class Kona private', 'private cooking lesson Big Island'],
  },
  {
    slug: 'services/fine-dining',
    category: 'service',
    parent: 'private-chef',
    title: 'Fine Dining at Home — Big Island Premium & Chef’s Table Tiers',
    h1: 'Fine dining, in your dining room.',
    meta: {
      description:
        'Premium and Chef’s Table private dining on the Big Island: $190–$275 a guest Premium, $275–$400+ Chef’s Table — coursed, plated, and served in your Kona–Kohala villa.',
    },
    intro:
      'Above the CORE band sit two published tiers: PREMIUM at $190–$275 a guest for coursed fine dining, and CHEF’S TABLE at $275–$400+ for the full counter-style progression.',
    sections: [
      {
        heading: 'What the tiers buy',
        list: [
          'PREMIUM — $190–$275/GUEST: five-plus courses, premium proteins, full plating',
          'CHEF’S TABLE — $275–$400+/GUEST: chef-led progression, counter seating where the kitchen allows',
        ],
        body: [
          'Both tiers carry groceries inside the band, with the fee stack itemized as always: 20% service and GET up to 4.7120% on their own lines.',
        ],
      },
      {
        heading: 'The island on the plate',
        body: [
          'Premium tiers are where Big Island provenance pays hardest: Parker Ranch beef, Hāmākua mushrooms, Kona Cold lobster, Waimea strawberries, a Kona coffee finish. The island grows serious ingredients; the tiers exist to cook them properly.',
        ],
        links: [{ label: 'The Kohala Coast menu', href: 'menus/kona-provenance' }],
      },
    ],
    faq: [
      {
        q: 'How many guests suit a Chef’s Table?',
        a: 'Two to eight is the sweet spot — the format is chef-led and coursed. Above eight we recommend PREMIUM plated service with a sous chef on the $75/hr line.',
      },
    ],
    cta: { ...QUOTE, secondaryLabel: "Chef's Table", secondaryHref: 'services/chefs-table' },
    keywords: ['fine dining at home Big Island', 'premium private chef Kona'],
  },
  {
    slug: 'services/chefs-table',
    category: 'service',
    parent: 'services/fine-dining',
    title: "Chef's Table Big Island — $275–$400+ a Guest",
    h1: "The Chef's Table.",
    meta: {
      description:
        "A chef-led tasting progression in your own Big Island kitchen — $275–$400+ a guest, groceries inside the band, fee stack itemized. Kona–Kohala corridor; east side quoted.",
    },
    intro:
      "The top of the published card: a coursed, chef-narrated progression at $275–$400+ a guest, run in your villa kitchen and served course by course at the counter or the table.",
    sections: [
      {
        heading: 'The format',
        body: [
          'Seven-plus courses, sequenced with the chef. The menu is written after a conversation about what you eat and what the island is producing that week — then priced inside the published tier, not invented per plate.',
        ],
      },
      {
        heading: 'Quoted, not teased',
        body: [
          'The $275–$400+ band is real and published. Where the menu lands inside it depends on courses, proteins, and party size — and the written quote fixes the number before you commit. A 50% deposit locks the date, only after you have seen the numbers.',
        ],
        links: [{ label: 'The full rate card', href: 'pricing' }],
      },
    ],
    faq: [
      {
        q: 'Can the Chef’s Table run at an estate outside Kona–Kohala?',
        a: 'Yes, with the from-$75 travel line outside the corridor, or as a written quote for east-side estates. The format travels; the pricing honesty travels with it.',
      },
    ],
    cta: QUOTE,
    keywords: ["chef's table Big Island", 'tasting menu private chef Kona'],
  },
  {
    slug: 'services/honeymoon-dinners',
    category: 'service',
    parent: 'private-chef',
    title: 'Honeymoon Private Chef Big Island — The First Dinner, Done Right',
    h1: 'The honeymoon dinner.',
    meta: {
      description:
        'Private honeymoon dinners on the Big Island — Date Night from $550, coursed and served in your villa while the sun goes down over the Kona coast.',
    },
    intro:
      'You flew six hours; the first dinner should not be a reservation. A coursed dinner for two in your villa, from $550, timed to the sunset over the Kona coast.',
    sections: [
      {
        heading: 'Built around the two of you',
        body: [
          'One menu call handles everything: what you love, what you avoid, when the light goes. Your chef shops, cooks, serves, and disappears — the kitchen left cleaner than the rental agency delivered it.',
        ],
      },
      {
        heading: 'Beyond the first night',
        body: [
          'Many honeymoon stays add a second dinner mid-week or a recovery brunch after a Volcano day trip. Each books from the published card — Date Night from $550, brunch from the CORE band.',
        ],
        links: [
          { label: 'Date Night', href: 'services/date-night' },
          { label: 'Breakfast and brunch menus', href: 'menus/breakfast-and-brunch' },
        ],
      },
    ],
    faq: [
      {
        q: 'Can you set up something special for the proposal or honeymoon night?',
        a: 'Yes — flowers, a specific bottle, a course built around a memory. Tell us on the menu call; anything with a cost is itemized in the written quote.',
      },
    ],
    cta: QUOTE,
    keywords: ['honeymoon private chef Big Island', 'romantic dinner Kona'],
  },
  {
    slug: 'services/estate-week-chef',
    category: 'service',
    parent: 'stay-chef',
    title: 'Estate Chef Big Island — A Chef for the Week on the Kohala Coast',
    h1: 'The estate-week chef.',
    meta: {
      description:
        'A dedicated chef for estate weeks on the Kohala Coast — Hualālai, Kukio, Mauna Lani, Mauna Kea. Stay Chef from $950/day plus groceries at cost; referral-fed gated access handled.',
    },
    intro:
      'The Kohala Coast’s gated estates and resort-residences are built for a chef-in-residence week: full kitchens, staff coordination, and a household rhythm that runs breakfast through dinner.',
    sections: [
      {
        heading: 'Gated access, handled',
        body: [
          'Hualālai, Kukio, and Kohanaiki run on referrals — access comes through your host, estate manager, or concierge, and we coordinate entry, parking, and kitchen walk-through directly with them. The referral is the door; we come through it.',
        ],
      },
      {
        heading: 'The week, priced',
        body: [
          'Estate weeks anchor on the published Stay Chef rate — from $950 a day plus groceries at cost with receipts. Hosted evenings add staffing on the published hourly lines. No weekly discount is published; the written quote is the total.',
        ],
        links: [{ label: 'Stay Chef cost, worked', href: 'pricing/stay-chef-cost' }],
      },
      {
        heading: 'For estate managers',
        body: [
          'We carry the paperwork your gate requires and bill cleanly to household accounts. Recurring estate clients get a standing crew and a documented kitchen protocol.',
        ],
        links: [{ label: 'Partner program', href: 'partners/concierges' }],
      },
    ],
    faq: [
      {
        q: 'Do you staff full household teams?',
        a: 'We staff the kitchen side — chef, sous chef, servers on published lines. Butler and front-of-house coordination is available through the staffing service and quoted per engagement.',
        links: [{ label: 'Staffing', href: '/bigisland/services/staffing' }],
      },
    ],
    cta: QUOTE,
    keywords: ['estate chef Big Island', 'chef for a week Kohala'],
  },
  {
    slug: 'services/wellness-menus',
    category: 'service',
    parent: 'retreat-catering',
    title: 'Wellness Retreat Menus Big Island — Protocol-Labeled, Plant-Forward',
    h1: 'Wellness menus with the labels on.',
    meta: {
      description:
        'Plant-forward, raw, cleansing, and gluten-free retreat menus on Hawaiʻi Island — protocol-labeled per plate, built for the Puna–Volcano wellness corridor and estate retreats west.',
    },
    intro:
      'The east side’s whole-food tradition — raw, vegan, cleansing, farm-sourced — is a culinary register we cook fluently. Wellness menus are protocol-labeled per plate, never hand-waved.',
    sections: [
      {
        heading: 'Protocols we run',
        list: [
          'PLANT-FORWARD / VEGAN — the east-side default register',
          'RAW AND CLEANSING — for structured retreat programs',
          'GLUTEN-FREE — separate prep for celiac protocol',
          'MACRO-TRACKED — for training-week and athletic groups',
        ],
      },
      {
        heading: 'Sourced from the island',
        body: [
          'ʻUlu, kalo, and ʻuala from east-side farms; Hāmākua mushrooms; Waimea greens and strawberries; Kona coffee. Provenance is printed only where verified — farm names appear on menus when the produce actually came from that farm.',
        ],
        links: [{ label: 'Dietary protocols for retreats', href: 'retreat-catering/dietary-protocols' }],
      },
    ],
    faq: [
      {
        q: 'Can you mix protocols at one table?',
        a: 'Yes — mixed tables are the norm on retreats. Each plate is labeled by protocol and allergens are prepped separately.',
      },
    ],
    cta: QUOTE,
    keywords: ['wellness retreat menus Big Island', 'plant-based retreat chef Hawaii'],
  },
  {
    slug: 'services/mobile-bar',
    category: 'service',
    parent: 'catering',
    title: 'Mobile Bar Big Island — Packaged Cart from $725/4hr',
    h1: 'The bar cart, staffed.',
    meta: {
      description:
        'A packaged mobile bar for Big Island events from $725 per four hours — staffed, quoted in writing, with alcohol compliance handled per Hawaiʻi County rules.',
    },
    intro:
      'A staffed bar cart for villa events and wedding weeks: from $725 per four hours, with bartenders on the staffing ledger and every compliance question answered in the quote, not assumed.',
    sections: [
      {
        heading: 'What the package includes',
        body: [
          'The cart, ice, glassware, mixers, and a bartender for four hours. Wine and spirits are billed at cost with receipts or supplied by you — the quote states which. Extended hours run on the published staffing lines.',
        ],
      },
      {
        heading: 'The compliance line',
        body: [
          'Liquor rules in Hawaiʻi are county-level, and what a private chef may pour at a private event has real boundaries. We operate inside them and tell you exactly where they are — if a format requires a licensed caterer’s permit, the quote says so.',
        ],
        links: [{ label: 'Alcohol and your event', href: 'guides/alcohol-and-bar' }],
      },
    ],
    faq: [
      {
        q: 'Can we supply our own alcohol?',
        a: 'Yes — many clients do, and the cart package prices lower when you supply. Either way the written quote states who supplies what.',
      },
    ],
    cta: QUOTE,
    keywords: ['mobile bar Big Island', 'bar cart catering Kona'],
  },
  {
    slug: 'services/staffing',
    category: 'service',
    parent: 'catering',
    title: 'Event Staffing Big Island — Servers $55/hr, Sous Chefs $75/hr',
    h1: 'Staffing, on published lines.',
    meta: {
      description:
        'Event staffing on Hawaiʻi Island at published rates: servers $55/hr, sous chefs $75/hr, four-hour floor. For myCHEF events or your own caterer, planner, or estate.',
    },
    intro:
      'Servers at $55 an hour, sous chefs at $75, a four-hour floor on every booking. Published hourly staffing is nearly unheard of on this island — we publish it because a quote you can check is a quote you can trust.',
    sections: [
      {
        heading: 'The lines',
        list: [
          'SERVER — $55/HR',
          'SOUS CHEF — $75/HR',
          'FOUR-HOUR FLOOR ON ALL EVENT STAFFING',
          'TRAVEL OUTSIDE KONA–KOHALA — FROM $75',
        ],
      },
      {
        heading: 'Staff-only bookings',
        body: [
          'You do not have to book our food to book our crew. Planners, estate managers, and outside caterers book servers and sous chefs on the same published lines, with the same written quote.',
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
        q: 'Is there a minimum booking?',
        a: 'Four hours per staff member. Most dinners use one server for four to six hours; wedding weeks scale by event.',
      },
    ],
    cta: QUOTE,
    keywords: ['event staffing Big Island', 'hire servers Kona'],
  },
  {
    slug: 'services/staffing/servers',
    category: 'service',
    parent: 'services/staffing',
    title: 'Event Servers Big Island — $55/hr, Four-Hour Floor',
    h1: 'Servers, $55 an hour.',
    meta: {
      description:
        'Professional event servers on the Big Island at a published $55/hr with a four-hour floor — plated service, family-style, stations, and wedding-week events across Kona–Kohala.',
    },
    intro:
      'Career front-of-house servers who know plated coursing, family-style timing, and how a villa dinner differs from a banquet. $55 an hour, four-hour floor, published.',
    sections: [
      {
        heading: 'What a server changes',
        body: [
          'Plates land hot and together, wine stays poured, courses clear silently, and the host never leaves the table. For dinners above six guests we recommend the line; above ten it is effectively required.',
        ],
      },
      {
        heading: 'Booking',
        body: [
          'Servers book alone or beside our food service. East-side events carry the travel line in writing; the four-hour floor applies everywhere.',
        ],
        links: [{ label: 'All staffing lines', href: 'services/staffing' }],
      },
    ],
    faq: [
      {
        q: 'How many servers for 20 guests?',
        a: 'Two for family-style, two to three for plated. The written quote fixes the count against your format — you will never find an extra body on the invoice.',
      },
    ],
    cta: QUOTE,
    keywords: ['event servers Big Island', 'waitstaff hire Kona'],
  },
  {
    slug: 'services/staffing/bartenders',
    category: 'service',
    parent: 'services/staffing',
    title: 'Bartender Hire Kona — Staffed Bar Service for Private Events',
    h1: 'Bartenders, on the ledger.',
    meta: {
      description:
        'Bartender hire for Big Island private events — quoted on published staffing lines with Hawaiʻi County liquor compliance stated plainly in every quote.',
    },
    intro:
      'A working bartender changes a party: drinks appear, the host stops mixing, and the evening runs itself. Bartenders book on the staffing ledger — quoted in writing, compliance included.',
    sections: [
      {
        heading: 'With or without the cart',
        body: [
          'Book the bartender alone for your own setup, or the packaged bar cart from $725 per four hours with the bartender inside. Either way, who supplies the alcohol is written into the quote.',
        ],
        links: [{ label: 'The bar cart package', href: 'services/mobile-bar' }],
      },
      {
        heading: 'Compliance, stated',
        body: [
          'Private-event pouring in Hawaiʻi County has real rules and we operate inside them. If your format needs a permitted caterer or host-supplied alcohol, the quote tells you before you book — not after.',
        ],
        links: [{ label: 'Alcohol rules, explained', href: 'guides/alcohol-and-bar' }],
      },
    ],
    faq: [
      {
        q: 'What does a bartender cost?',
        a: 'Quoted per event on the staffing ledger with a four-hour floor, or inside the from-$725/4hr cart package. No hidden per-drink math.',
      },
    ],
    cta: QUOTE,
    keywords: ['bartender hire Kona', 'event bartender Big Island'],
  },
  {
    slug: 'services/staffing/butlers',
    category: 'service',
    parent: 'services/staffing',
    title: 'Butler Service Big Island — Front-of-House for Estate Weeks',
    h1: 'Butler service, quoted.',
    meta: {
      description:
        'Butler and front-of-house service for Big Island estate weeks and events — quoted per engagement on written lines, coordinated with household staff and concierges.',
    },
    intro:
      'For estate weeks and formal events: front-of-house service that runs the room so the kitchen can run the food. Quoted per engagement — this is the one service line we deliberately do not flat-rate.',
    sections: [
      {
        heading: 'Why quoted, not published',
        body: [
          'Butler work varies more than any other line we run — a dinner for eight is not a household week for fourteen. Publishing a single number would be false precision, so this one is always a written quote built on the staffing ledger.',
        ],
      },
      {
        heading: 'Coordination',
        body: [
          'We work inside existing household structures — estate managers, concierges, housekeepers — and document the service plan before the first event. Gated-community access runs through your referral.',
        ],
        links: [{ label: 'Estate-week chef', href: 'services/estate-week-chef' }],
      },
    ],
    faq: [
      {
        q: 'Can a butler book alongside Stay Chef?',
        a: 'Yes — the most common pairing. The chef runs the kitchen, the butler runs the room, and the written quote carries both.',
      },
    ],
    cta: QUOTE,
    keywords: ['butler service Big Island', 'estate staffing Kohala'],
  },
  {
    slug: 'services/kids-menus',
    category: 'service',
    parent: 'private-chef',
    title: 'Kid-Friendly Private Chef Big Island — Real Food, Small Hands',
    h1: 'Kids eat first. Well.',
    meta: {
      description:
        'Kid-friendly private chef service on the Big Island — early seatings, real food scaled down, separate prep for allergens, and a kids menu that is not an afterthought.',
    },
    intro:
      'The kids’ seating runs early, the food is real — scaled, not dumbed down — and the adults’ dinner starts when the small ones are fed and happy.',
    sections: [
      {
        heading: 'How family dinners run',
        body: [
          'An early kids’ course at six, adults’ service from seven. Kids’ plates come from the same market bag as yours, built to actually be eaten — and allergen protocols hold on the kids’ side with separate prep.',
        ],
        links: [{ label: 'The kids menu', href: 'menus/kids' }],
      },
      {
        heading: 'Multi-generational weeks',
        body: [
          'Family reunions and villa weeks are the Big Island’s bread and butter: twelve-person tables, grandparents to toddlers, one kitchen. The CORE band prices per guest; kids’ plates price inside it — the written quote shows the split.',
        ],
        links: [{ label: 'Family reunion catering', href: 'occasions/family-reunion' }],
      },
    ],
    faq: [
      {
        q: 'Do kids count as full guests?',
        a: 'Pricing is set in the written quote based on the actual menu — kids’ plates typically price below adult covers and the split is shown on its own lines.',
      },
    ],
    cta: QUOTE,
    keywords: ['kid-friendly private chef Big Island', 'family chef Kona'],
  },
  {
    slug: 'services/dietary',
    category: 'service',
    parent: 'private-chef',
    title: 'Vegan & Gluten-Free Private Chef Big Island — Eleven Flags, One Kitchen',
    h1: 'Dietary service, taken seriously.',
    meta: {
      description:
        'Vegan, gluten-free, and allergen-safe private chef service on Hawaiʻi Island — eleven dietary flags, separate prep for allergens, and the east side’s whole-food fluency built in.',
    },
    intro:
      'Eleven dietary flags, one kitchen, separate prep for allergens. Dietary service is not an apology menu here — the east side has cooked whole-food, plant-forward, and gluten-free for decades, and so do we.',
    sections: [
      {
        heading: 'The flags',
        body: [
          'Vegan, vegetarian, gluten-free, dairy-free, nut-free, shellfish-free, keto, paleo, low-FODMAP, halal-conscious, and celiac protocol. Flags are set at booking, repeated in the written quote, and labeled on the plate at mixed tables.',
        ],
      },
      {
        heading: 'Allergen discipline',
        body: [
          'Celiac and anaphylactic protocols get separate prep surfaces, separate oil, and a stated chain from shopping bag to plate. If a kitchen cannot support a protocol safely, we say so before taking the booking.',
        ],
        links: [
          { label: 'Gluten-free menu', href: 'menus/gluten-free' },
          { label: 'Vegan menu', href: 'menus/vegetarian-vegan' },
          { label: 'The dietary guide', href: 'guides/dietary' },
        ],
      },
    ],
    faq: [
      {
        q: 'Is there a surcharge for dietary menus?',
        a: 'No dietary surcharge exists on the card. If a protocol changes grocery cost materially, the written quote shows it — at cost, with receipts.',
      },
    ],
    cta: QUOTE,
    keywords: ['vegan gluten-free private chef Big Island', 'allergen-safe chef Hawaii'],
  },
  {
    slug: 'services/luau-style-catering',
    category: 'service',
    parent: 'catering',
    title: 'Lūʻau-Style Catering Big Island — The Food, Done Respectfully',
    h1: 'Lūʻau-style catering, with respect.',
    meta: {
      description:
        'Lūʻau-style catering on Hawaiʻi Island — kālua-style pork, laulau, lomi salmon, and poi cooked properly for private events, without the costume theatrics. Quoted on published lines.',
    },
    intro:
      'The food of a lūʻau — kālua-style pork, laulau, lomi salmon, poi, haupia — deserves better than the buffet-line version. We cook it properly for private events, and we leave the costume theatrics to others.',
    sections: [
      {
        heading: 'The menu register',
        body: [
          'Lūʻau-style service runs family-style or stations from the published event band — from $150 a guest with staffing on hourly lines. Where a dish has a traditional preparation, we cook it that way and say so; where we adapt, we say that too.',
        ],
      },
      {
        heading: 'Culturally careful, operationally honest',
        body: [
          'A private lūʻau-style dinner is a meal, not a performance of someone else’s culture — we do not stage costume imagery or fake ceremony. What we do is cook the dishes well, credit them properly, and staff the evening professionally.',
        ],
        links: [{ label: 'Catering formats', href: 'catering' }],
      },
    ],
    faq: [
      {
        q: 'Can you do an imu-style preparation?',
        a: 'Traditional in-ground imu cooking requires permits, the right site, and real lead time — where it is feasible we quote it as its own line; otherwise we cook kālua-style with the same patience in a conventional setup.',
      },
    ],
    cta: QUOTE,
    keywords: ['luau catering Big Island', 'Hawaiian food catering Kona'],
  },
  {
    slug: 'services/private-jet-catering',
    category: 'service',
    parent: 'catering',
    title: 'Private Jet Catering Kona — FBO Service, Timed to Wheels-Up',
    h1: 'Jet catering, on your schedule.',
    meta: {
      description:
        'Private jet catering from Kona — departure meals, provisioning, and crew service timed to your wheels-up, coordinated with your FBO. Quoted in writing with lead times stated.',
    },
    intro:
      'Departure meals and provisioning out of Kona’s FBOs: food that flies well, packed properly, delivered against a wheels-up time — coordinated directly with your flight department or handler.',
    sections: [
      {
        heading: 'How it runs',
        body: [
          'You send the manifest, dietary flags, and departure time; we quote in writing, cook to order, and deliver through your FBO. Lead time is stated honestly in the quote — same-day is possible for simple orders, coursed menus want 48 hours.',
        ],
      },
      {
        heading: 'Provisioning',
        body: [
          'Beyond departure meals: galley stocking, Kona coffee by the pound, and island-sourced provisions for the destination. Groceries at cost, receipts on request, one invoice.',
        ],
        links: [{ label: 'Concierge partners', href: 'partners/concierges' }],
      },
    ],
    faq: [
      {
        q: 'Which airport do you serve?',
        a: 'Kona International (KOA) is the base; Hilo (ITO) deliveries are quoted with the Saddle drive included. Waimea-Kohala (MUE) serves the resort corridor directly.',
      },
    ],
    cta: QUOTE,
    keywords: ['private jet catering Kona', 'FBO catering Big Island'],
  },
  /* ---- Locations (Table 4.2.4a) ---- */
  {
    slug: 'locations',
    category: 'location',
    parent: '',
    title: 'Where We Serve on the Big Island — The Corridor, Mapped',
    h1: 'The corridor, and the east side.',
    meta: {
      description:
        'Big Island service areas: the Kona–Kohala corridor west (Kailua-Kona, Keauhou, Waikoloa, Mauna Lani, Mauna Kea, Hualālai) and the east side (Hilo, Volcano, Waimea) — with real drive times and travel lines.',
    },
    intro:
      'Hawaiʻi Island is 4,028 square miles with two real markets 2.5–3 hours apart. This index tells you plainly which zone your address sits in and what that does to the quote.',
    sections: [
      {
        heading: 'WEST — the Kona–Kohala corridor (base zone)',
        list: [
          '19.64° N — KAILUA-KONA · BASE ZONE',
          '19.55° N — KEAUHOU · 15 MIN',
          '19.57° N — HOLUALOA · 20 MIN',
          '19.92° N — WAIKOLOA · 35 MIN',
          '19.98° N — MAUNA LANI · 40 MIN',
          '20.00° N — MAUNA KEA / HAPUNA · 45 MIN',
          '19.79° N — HUALĀLAI / KUKIO / KOHANAIKI · GATED — REFERRAL + CHEF TRAVEL',
          '19.49° N — CAPTAIN COOK / SOUTH KONA · 30–45 MIN',
        ],
        body: [
          'Inside the corridor there is no travel line. Hualālai, Kukio, and Kohanaiki are gated: access comes through your host or concierge, and we come with the referral.',
        ],
        links: [
          { label: 'Kona', href: 'locations/kona' },
          { label: 'Kohala Coast', href: 'locations/kohala-coast' },
        ],
      },
      {
        heading: 'EAST — Hilo · Volcano · Waimea (its own written quote)',
        list: [
          '19.71° N — WAIMEA / KAMUELA · 60–75 MIN VIA KOHALA MOUNTAIN RD',
          '19.62° N — VOLCANO · 2 HR 20 MIN – 2 HR 40 MIN',
          '19.72° N — HILO · 2 HR 30 MIN – 3 HR VIA THE SADDLE',
        ],
        body: [
          'East-side service is real and regular — but it is priced as its own written quote, because a crew cannot dodge the Saddle. We would rather publish that than bury it.',
        ],
        links: [
          { label: 'Hilo', href: 'locations/hilo' },
          { label: 'Volcano', href: 'locations/volcano' },
          { label: 'Waimea / Kamuela', href: 'locations/waimea-kamuela' },
        ],
      },
      {
        heading: 'The travel lines',
        body: [
          'Outside the Kona–Kohala corridor, travel runs from $75 as a published flat line. The east side is quoted per engagement. No competitor on this island publishes a travel policy at all — we put ours on the rate card.',
        ],
        links: [{ label: 'Travel zones in full', href: 'pricing/travel-zones' }],
      },
    ],
    faq: [
      {
        q: 'Is my rental inside the base zone?',
        a: 'If it is in Kailua-Kona, Keauhou, Holualoa, Waikoloa, Mauna Lani, Mauna Kea, Puako, or the gated communities — yes, no travel line. South Kona (Captain Cook) sits at the edge and is typically inside or from $75. The written quote states it either way.',
      },
      {
        q: 'Why is the east side quoted separately?',
        a: 'Distance. Kona to Hilo is 2.5–3 hours each way over the Saddle, so east-side events carry real crew logistics. Quoting them in writing keeps the per-guest price honest on both sides of the island.',
      },
    ],
    cta: { ...QUOTE, secondaryLabel: 'Travel zones', secondaryHref: 'pricing/travel-zones' },
    keywords: ['private chef Big Island areas served', 'Big Island service area'],
  },
  {
    slug: 'locations/kona',
    category: 'location',
    parent: 'locations',
    title: 'Private Chef Kona — Kailua-Kona Villa Dinners & Stay Chef',
    h1: 'Private chef, Kailua-Kona.',
    meta: {
      description:
        'Private chef service in Kailua-Kona, Hawaiʻi Island: villa dinners $150–$225 a guest, ENTRY from $110, Stay Chef from $950/day. Base zone — no travel line. The written quote is the confirmed total.',
      ogImage: '/img/bigisland/loc-kona.jpg',
    },
    intro:
      'The visitor and vacation-rental capital of Hawaiʻi Island — and our base zone. No travel line, same-day shopping at Kona markets, and a kitchen culture built for exactly this.',
    sections: [
      {
        heading: 'Kona at the table',
        body: [
          'Kailua-Kona is where most Big Island chef bookings happen: Aliʻi Drive condos with real kitchens, hillside houses above the brew pubs, Keauhou resorts to the south. Everything is inside the base zone — the price on the rate card is the price you pay.',
        ],
        media: { src: '/img/bigisland/loc-kona.jpg', alt: 'Kailua-Kona waterfront at hard low sun with black lava rock in the foreground', ratio: '16/10' },
      },
      {
        heading: 'What gets booked here',
        list: [
          'Arrival-night dinners — the first night of a rental week, from the CORE band',
          'Date Night for two — from $550, timed to the Kona sunset',
          'Stay Chef weeks — from $950/day plus groceries at cost',
          'Ironman-week tables — October compresses everything; book early',
        ],
        links: [
          { label: 'Catering in Kona', href: 'locations/kona/catering' },
          { label: 'Vacation chef in Kona', href: 'locations/kona/vacation-chef' },
        ],
      },
      {
        heading: 'Logistics, plainly',
        body: [
          'Kona gets roughly 9–12 inches of rain a year at the coast — outdoor tables are the default, not the gamble. Condo and resort load-ins are coordinated with your property manager; gated access runs through your referral.',
        ],
        links: [{ label: 'Ironman week', href: 'occasions/ironman-week' }],
      },
    ],
    faq: [
      {
        q: 'Do you charge travel to Kailua-Kona?',
        a: 'No — Kailua-Kona is the base zone. The published per-guest bands apply with no travel line.',
      },
      {
        q: 'Can you cook in a condo kitchen?',
        a: 'Yes, provided it is a real kitchen — full stove, oven, counter space. Send the listing and we will confirm before quoting. Hotel rooms without kitchens are declined.',
      },
      {
        q: 'How far ahead should I book in Kona?',
        a: 'Two to four weeks is comfortable most of the year. December–March and Ironman week in October compress first — those dates want six weeks or more.',
        links: [{ label: 'Booking lead times', href: '/bigisland/guides/booking-lead-times' }],
      },
    ],
    cta: { ...QUOTE, secondaryLabel: 'Kona catering', secondaryHref: 'locations/kona/catering' },
    keywords: ['private chef Kona', 'private chef Kailua-Kona'],
  },
  {
    slug: 'locations/kohala-coast',
    category: 'location',
    parent: 'locations',
    title: 'Private Chef Kohala Coast — Mauna Lani, Mauna Kea, Waikoloa, Puako',
    h1: 'Private chef, Kohala Coast.',
    meta: {
      description:
        'Private chef service on the Kohala Coast of Hawaiʻi Island — the flagship resort corridor from Waikoloa to Mauna Kea. Villa dinners $150–$225 a guest; Stay Chef from $950/day; gated communities by referral.',
      ogImage: '/img/bigisland/loc-kohala.jpg',
    },
    intro:
      'Thirty-five to forty-five minutes north of Kona: the highest-value resort corridor in the state, strung along black lava and white sand. Different communities, different access rules — one rate card.',
    sections: [
      {
        heading: 'The strip, north to south',
        body: [
          'Waikoloa Beach Resort (35 min from Kona) — the family-villa and condo stock. Mauna Lani (40 min) — resort-residences and estates. Puako — the old beach-house lane. Mauna Kea and Hapuna (45 min) — the ultra-luxury end. All inside the base zone; no travel line.',
        ],
        media: { src: '/img/bigisland/loc-kohala.jpg', alt: 'A manicured resort lawn meeting a black basalt lava field on the Kohala Coast of Hawaiʻi Island', ratio: '16/10' },
      },
      {
        heading: 'The gated communities',
        body: [
          'Hualālai, Kukio, and Kohanaiki sit between Kona and Waikoloa behind gates. Access comes through your host, estate manager, or concierge — we come with the referral and coordinate entry and load-in directly.',
        ],
        links: [{ label: 'Hualālai service notes', href: 'locations/hualalai' }],
      },
      {
        heading: 'What gets booked here',
        list: [
          'Estate and resort-residence dinners — CORE $150–$225/guest',
          'Stay Chef weeks — from $950/day, the corridor’s signature product',
          'Wedding weeks beside the resort circuit — from $150/guest + staffing',
        ],
        links: [
          { label: 'Stay Chef on the Kohala Coast', href: 'locations/kohala-coast/stay-chef' },
          { label: 'Kohala Coast wedding catering', href: 'locations/kohala-coast/wedding-catering' },
        ],
      },
    ],
    faq: [
      {
        q: 'Is the Kohala Coast inside your base zone?',
        a: 'Yes — Waikoloa, Mauna Lani, Mauna Kea, Hapuna, and Puako carry no travel line. The gated communities add coordination, not a fee.',
      },
      {
        q: 'Can you serve dinner at a Mauna Kea or Mauna Lani resort residence?',
        a: 'Yes — resort-residences with kitchens are our standard stage on this corridor. We coordinate with resort residential services where required.',
      },
    ],
    cta: { ...QUOTE, secondaryLabel: 'Wedding catering here', secondaryHref: 'locations/kohala-coast/wedding-catering' },
    keywords: ['private chef Kohala Coast', 'private chef Mauna Lani', 'private chef Mauna Kea'],
  },
  {
    slug: 'locations/waikoloa',
    category: 'location',
    parent: 'locations/kohala-coast',
    title: 'Private Chef Waikoloa — Family Villas, Real Kitchens, Base Zone',
    h1: 'Private chef, Waikoloa.',
    meta: {
      description:
        'Private chef service in Waikoloa Beach Resort on the Big Island — the corridor’s family-villa and condo stock. Villa dinners from the published card, 35 minutes from Kona, no travel line.',
    },
    intro:
      'Waikoloa is the corridor’s family engine: big condo and villa inventory, full kitchens, and groups of eight to fourteen who actually use the dining table.',
    sections: [
      {
        heading: 'Built for groups',
        body: [
          'The Waikoloa booking is usually a family: arrival-night dinner for ten, a mid-week taco-night upgrade, maybe a Date Night for the parents while grandparents hold the fort. CORE runs $150–$225 a guest, ENTRY from $110, kids’ plates shown on their own line in the quote.',
        ],
        links: [{ label: 'Vacation chef in Waikoloa', href: 'locations/waikoloa/vacation-chef' }],
      },
      {
        heading: 'Logistics',
        body: [
          'Thirty-five minutes from our Kona base, inside the base zone — no travel line. Resort-area load-ins are routine; we coordinate with your rental manager for parking and access codes.',
        ],
      },
      {
        heading: 'Family menus',
        body: [
          'The family-style menu was written for Waikoloa tables — platters down the middle, kids fed early and well, dietary flags handled without drama.',
        ],
        links: [{ label: 'Family-style menu', href: 'menus/family-style' }],
      },
    ],
    faq: [
      {
        q: 'What does a private chef cost in Waikoloa?',
        a: 'The published card: CORE $150–$225 a guest, ENTRY from $110, Date Night from $550, Stay Chef from $950/day. Waikoloa is inside the base zone — no travel line.',
      },
    ],
    cta: QUOTE,
    keywords: ['private chef Waikoloa', 'Waikoloa Beach villa chef'],
  },
  {
    slug: 'locations/mauna-lani',
    category: 'location',
    parent: 'locations/kohala-coast',
    title: 'Private Chef Mauna Lani — Resort-Residence Dinners & Stay Chef',
    h1: 'Private chef, Mauna Lani.',
    meta: {
      description:
        'Private chef service at Mauna Lani on Hawaiʻi Island’s Kohala Coast — resort-residence dinners from the published card, Stay Chef weeks from $950/day. Base zone, no travel line.',
    },
    intro:
      'Mauna Lani’s resort-residences — with 2024 medians around $5.5M — are full-time kitchens in vacation houses. That is exactly the stage a private chef is built for.',
    sections: [
      {
        heading: 'The Mauna Lani booking',
        body: [
          'Mostly Stay Chef weeks and repeat dinners: the household that lands Sunday and wants the week cooked. From $950 a day plus groceries at cost; single evenings run the CORE band at $150–$225 a guest.',
        ],
        links: [{ label: 'Chef for a week at Mauna Lani', href: 'locations/mauna-lani/stay-chef' }],
      },
      {
        heading: 'Coordination',
        body: [
          'We work with residential services and property managers across the resort — access, parking, and kitchen walk-throughs are handled before your chef arrives, not at the gate.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do resort rules allow outside chefs at Mauna Lani residences?',
        a: 'Resort-residences are private homes with private kitchens — outside chefs are routine. Where a community has a vendor registration step, we complete it through your host or manager.',
      },
    ],
    cta: QUOTE,
    keywords: ['private chef Mauna Lani', 'Mauna Lani residence chef'],
  },
  {
    slug: 'locations/mauna-kea',
    category: 'location',
    parent: 'locations/kohala-coast',
    title: 'Private Chef Mauna Kea — The Quiet End of the Corridor',
    h1: 'Private chef, Mauna Kea.',
    meta: {
      description:
        'Private chef service at Mauna Kea and Hapuna on the Big Island — the corridor’s ultra-luxury end. Estate dinners from the published card; Premium and Chef’s Table tiers to $400+ a guest.',
    },
    intro:
      'Forty-five minutes from Kona, the corridor’s quiet ultra-luxury end: estate lots above Hapuna, resort homes with serious kitchens and serious views.',
    sections: [
      {
        heading: 'The Mauna Kea register',
        body: [
          'Bookings here skew Premium and Chef’s Table — $190–$275 and $275–$400+ a guest — long coursed evenings at big tables. The CORE band applies exactly the same; the tier is your choice, not your address’s.',
        ],
        links: [
          { label: 'Estate dinner service', href: 'locations/mauna-kea/estate-dinner' },
          { label: 'Fine dining tiers', href: 'services/fine-dining' },
        ],
      },
      {
        heading: 'Discretion and detail',
        body: [
          'Household rules, NDAs where the estate requires them, vendor registration handled in advance. The same itemized quote — privacy never costs a line item.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is there a travel fee to Mauna Kea?',
        a: 'No — Mauna Kea and Hapuna are inside the Kona–Kohala base zone.',
      },
    ],
    cta: QUOTE,
    keywords: ['private chef Mauna Kea', 'private chef Hapuna'],
  },
  {
    slug: 'locations/hualalai',
    category: 'location',
    parent: 'locations/kohala-coast',
    title: 'Private Chef Hualālai — Gated Access, Referral Entry',
    h1: 'Private chef, Hualālai.',
    meta: {
      description:
        'Private chef service at Hualālai, Kukio, and Kohanaiki on the Big Island — gated communities where access runs through your host or concierge. We come with the referral.',
    },
    intro:
      'Hualālai, Kukio, and Kohanaiki are not search-and-book addresses — they are referral communities. Access comes through your host, estate manager, or concierge; we come with the referral.',
    sections: [
      {
        heading: 'How entry works',
        body: [
          'You connect us with your host or the club’s residential services. We handle vendor registration, insurance documentation, load-in windows, and the kitchen walk-through directly with them. The process is routine — it simply starts with your introduction.',
        ],
      },
      {
        heading: 'Service inside the gates',
        body: [
          'Villa dinners from the published CORE band ($150–$225 a guest), Stay Chef weeks from $950 a day, and wedding-week service for estate events. Gated status adds coordination, not surcharges — the rate card is the rate card.',
        ],
        links: [
          { label: 'Villa dinner at Hualālai', href: 'locations/hualalai/villa-dinner' },
          { label: 'Estate-week chef', href: 'services/estate-week-chef' },
        ],
      },
    ],
    faq: [
      {
        q: 'We are guests, not members — can we still book?',
        a: 'Yes, through whoever hosts your stay: the member, the rental program, or the concierge. The referral is the door; send the contact and we take it from there.',
      },
    ],
    cta: QUOTE,
    keywords: ['private chef Hualalai', 'private chef Kukio', 'Kohanaiki chef'],
  },
  {
    slug: 'locations/keauhou',
    category: 'location',
    parent: 'locations/kona',
    title: 'Private Chef Keauhou — The Villa Belt South of Kona',
    h1: 'Private chef, Keauhou.',
    meta: {
      description:
        'Private chef service in Keauhou, south of Kailua-Kona — villa and resort-condo dinners from the published card, 15 minutes from our base, no travel line.',
    },
    intro:
      'Fifteen minutes south of Kailua-Kona, Keauhou is the corridor’s quiet villa belt — resort condos and houses with lanais facing the sunset and kitchens that get used.',
    sections: [
      {
        heading: 'The Keauhou evening',
        body: [
          'Base-zone pricing, sunset-timed service, and some of the best manta-ray-adjacent dinner stories on the island. CORE dinners run $150–$225 a guest, ENTRY from $110; Date Night from $550.',
        ],
        links: [{ label: 'Catering in Keauhou', href: 'locations/keauhou/catering' }],
      },
      {
        heading: 'Logistics',
        body: [
          'Inside the base zone with no travel line. Resort-condo load-ins are coordinated with your manager; parking and access are settled before service day.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is Keauhou the same service area as Kona?',
        a: 'Effectively yes — Keauhou sits inside the Kona base zone, 15 minutes from our kitchen base, with identical pricing.',
      },
    ],
    cta: QUOTE,
    keywords: ['private chef Keauhou', 'Keauhou villa chef'],
  },
  {
    slug: 'locations/captain-cook',
    category: 'location',
    parent: 'locations/kona',
    title: 'Private Chef Captain Cook — South Kona Coffee Country',
    h1: 'Private chef, Captain Cook.',
    meta: {
      description:
        'Private chef service in Captain Cook and South Kona on the Big Island — coffee-belt farm stays and hillside houses, 30–45 minutes from Kona. From the published card; travel at the zone edge stated in writing.',
    },
    intro:
      'South of Kona the road climbs into coffee country: farm stays, hillside rentals, and some of the island’s best growing land. Thirty to forty-five minutes from base.',
    sections: [
      {
        heading: 'Coffee-belt tables',
        body: [
          'South Kona rentals come with lanais over the coffee rows and kitchens built by people who cook. Dinners run the published card; addresses at the zone edge may carry the from-$75 travel line — stated in the quote, never implied.',
        ],
        links: [{ label: 'Stay Chef in South Kona', href: 'locations/captain-cook/stay-chef' }],
      },
      {
        heading: 'The Kona coffee connection',
        body: [
          'This is the origin belt. Provenance menus built on the farms around you — and a Kona coffee dinner experience for groups who want the bean taken seriously.',
        ],
        links: [{ label: 'The Kona coffee dinner', href: 'menus/kona-coffee' }],
      },
    ],
    faq: [
      {
        q: 'Do farm venues in South Kona work for events?',
        a: 'Yes — coffee-farm venues are some of the island’s best independent event sites. We coordinate with the venue on kitchen and power specs before quoting.',
      },
    ],
    cta: QUOTE,
    keywords: ['private chef Captain Cook', 'private chef South Kona'],
  },
  {
    slug: 'locations/hilo',
    category: 'location',
    parent: 'locations',
    title: 'Private Chef Hilo — East-Side Service, Honestly Quoted',
    h1: 'Private chef, Hilo.',
    meta: {
      description:
        'Private chef and catering service in Hilo, Hawaiʻi Island — resident events, retreat visitors, and a premium-supply gap. Quoted in writing: 2.5–3 hours from Kona over the Saddle.',
      ogImage: '/img/bigisland/loc-hilo.jpg',
    },
    intro:
      'Hilo is a residents’ town with a real events market — birthdays, graduations, life-cycle gatherings — and almost no premium private-chef supply. We serve it, quoted in writing, because honesty about the Saddle beats pretending it away.',
    sections: [
      {
        heading: 'The east-side posture',
        body: [
          'Kona to Hilo is 2.5–3 hours over the Saddle — roughly 76–95 miles depending on route. East-side service is its own written quote: the same rate card for food, with crew travel stated as a line you can read.',
        ],
        media: { src: '/img/bigisland/loc-hilo.jpg', alt: 'A quiet Hilo street after rain at dusk, wet asphalt reflections on Hawaiʻi Island’s east side', ratio: '16/10' },
      },
      {
        heading: 'What gets booked in Hilo',
        list: [
          'Resident events — milestone birthdays, graduations, family gatherings',
          'Retreat and lodge service — the Puna–Volcano corridor is next door',
          'Stay Chef weeks for east-side visitors — quoted with logistics included',
        ],
        links: [
          { label: 'Catering in Hilo', href: 'locations/hilo/catering' },
          { label: 'East-side quotes, explained', href: 'pricing/east-side-quote' },
        ],
      },
      {
        heading: 'The rain is real',
        body: [
          'Hilo sees over 100 inches of rain a year against Kona’s 9–12. Outdoor service east-side always carries a covered backup plan — that is not caution, it is meteorology.',
        ],
        links: [{ label: 'Weather backup planning', href: 'guides/weather-backup' }],
      },
    ],
    faq: [
      {
        q: 'Do you actually come to Hilo?',
        a: 'Yes — regularly, and quoted honestly. The written quote prices the crew’s Saddle round-trip as its own line so the food cost stays identical to the west side.',
      },
      {
        q: 'Is there a local alternative?',
        a: 'Hilo has exactly one premium chef-caterer of note and a deep bench of plate-lunch caterers below it. We are the published-price option for the premium end.',
      },
    ],
    cta: { ...QUOTE, secondaryLabel: 'Hilo catering', secondaryHref: 'locations/hilo/catering' },
    keywords: ['private chef Hilo', 'catering Hilo'],
  },
  {
    slug: 'locations/volcano',
    category: 'location',
    parent: 'locations',
    title: 'Private Chef Volcano Hawaii — Retreats, Lodges, and Quiet Tables',
    h1: 'Private chef, Volcano.',
    meta: {
      description:
        'Private chef service in Volcano on Hawaiʻi Island — the HVNP gateway’s retreat-and-lodge market, award-winning wedding venues, and rental-home dinners. Quoted in writing, 2 hr 20 min+ from Kona.',
    },
    intro:
      'The gateway to Hawaiʻi Volcanoes National Park is a retreat-and-lodge market at 4,000 feet — cool, wet, green, and unlike anywhere else we serve. Quoted in writing, always.',
    sections: [
      {
        heading: 'The Volcano register',
        body: [
          'Rental homes and lodges around the village book chef dinners, elopement tables, and multi-day retreat service. The venue cluster here — including the park-side lodge that took a 2025 readers’-choice wedding venue award — keeps demand steady; our lane is the private rental and the retreat house.',
        ],
        links: [{ label: 'Retreat chef, Volcano', href: 'locations/volcano/retreat-chef' }],
      },
      {
        heading: 'Logistics, stated',
        body: [
          'Volcano sits 2 hours 20 minutes to 2 hours 40 minutes from our Kona base. Single-evening service carries that drive in the quote; multi-day retreats usually price better as chef-in-residence arrangements.',
        ],
      },
      {
        heading: 'Elopements',
        body: [
          'Waterfall-and-rainforest elopements are a real segment here. The dinner after — two people, a fireplace, a coursed menu — is Date Night economics from $550 plus the east-side logistics line.',
        ],
        links: [{ label: 'Elopement dinners', href: 'weddings/elopement' }],
      },
    ],
    faq: [
      {
        q: 'Can you cater a wedding at a Volcano lodge?',
        a: 'Yes, where the venue allows outside caterers — several village lodges do. Venue-captive properties are respected; we tell you which is which before you book anything.',
      },
    ],
    cta: QUOTE,
    keywords: ['private chef Volcano Hawaii', 'Volcano retreat catering'],
  },
  {
    slug: 'locations/waimea-kamuela',
    category: 'location',
    parent: 'locations',
    title: 'Private Chef Waimea Big Island — Ranch Country Tables',
    h1: 'Private chef, Waimea.',
    meta: {
      description:
        'Private chef service in Waimea (Kamuela) on Hawaiʻi Island — ranch-country residents, Anna Ranch weddings, and Parker Ranch provenance. 60–75 minutes from Kona; quoted in writing.',
    },
    intro:
      'Kamuela is ranch country: paniolo heritage, Parker Ranch beef, and a resident market that entertains at home. Sixty to seventy-five minutes from Kona via the Kohala Mountain Road.',
    sections: [
      {
        heading: 'The Waimea table',
        body: [
          'Waimea bookings split two ways: resident households running cook days and dinner parties, and ranch-venue weddings — Anna Ranch is the anchor, a heritage venue with real event infrastructure.',
        ],
        links: [{ label: 'Wedding venues, notes', href: 'weddings/venues' }],
      },
      {
        heading: 'Provenance at the source',
        body: [
          'Parker Ranch beef, Waimea greens and strawberries, Hāmākua mushrooms down the road — the Kohala Coast menu’s provenance is literal here. Dinner in ranch country, sourced from ranch country.',
        ],
        links: [{ label: 'The Kohala Coast menu', href: 'menus/kona-provenance' }],
      },
    ],
    faq: [
      {
        q: 'Is Waimea inside the base zone?',
        a: 'No — Waimea sits east of the corridor and is quoted with the drive stated as its own line, typically 60–75 minutes each way. The food prices stay on the published card.',
      },
    ],
    cta: QUOTE,
    keywords: ['private chef Waimea Big Island', 'private chef Kamuela'],
  },
  /* ---- Service × location (Table 4.2.4a) ---- */
  {
    slug: 'locations/kona/catering',
    category: 'location',
    parent: 'catering',
    title: 'Catering Kona — Staffed Events in the Base Zone',
    h1: 'Catering, Kailua-Kona.',
    meta: {
      description:
        'Staffed event catering in Kailua-Kona and Keauhou — 10–75 guests, from $150 a guest plus published staffing lines. Base zone: no travel fee. Over 75 quoted as a written exception.',
    },
    intro:
      'The west side’s highest-volume catering market, in our base zone: no travel line, same-day market shopping, and a crew that knows every load-in from Aliʻi Drive to Keauhou.',
    sections: [
      {
        heading: 'Events we run in Kona',
        body: [
          'Villa weddings and rehearsal dinners, birthday and anniversary tables, corporate buyouts, and holiday-week parties. Ten to seventy-five guests staffed; over 75 is a written exception, quoted never implied.',
        ],
      },
      {
        heading: 'The Kona ledger',
        list: [
          'FOOD — FROM $150/GUEST',
          'SERVER — $55/HR · SOUS CHEF — $75/HR · 4-HR FLOOR',
          'BAR CART — FROM $725/4HR',
          'TRAVEL — $0 (BASE ZONE)',
        ],
        body: [
          'Against that: the Kona venue-caterer market starts around $75 a person for food alone, before 23% service and rental minimums. Our 20% service charge and GET sit on their own lines where you can audit them.',
        ],
      },
      {
        heading: 'Booking rhythm',
        body: [
          'Two to four weeks is comfortable; December–March and October’s Ironman week compress first. The written quote locks your date only when the 50% deposit lands — and only after you have seen every line.',
        ],
        links: [{ label: 'Kona private chef service', href: 'locations/kona' }],
      },
    ],
    faq: [
      {
        q: 'Can you cater at a Kona vacation rental?',
        a: 'Yes — the standard stage. We confirm kitchen specs and house rules with your rental manager before quoting.',
      },
    ],
    cta: QUOTE,
    keywords: ['catering Kona', 'Kailua-Kona event catering'],
  },
  {
    slug: 'locations/kona/vacation-chef',
    category: 'location',
    parent: 'services/vacation-chef',
    title: 'Vacation Chef Kailua-Kona — Arrival Dinner to Full Week',
    h1: 'A vacation chef in Kailua-Kona.',
    meta: {
      description:
        'Vacation chef service for Kailua-Kona rentals: arrival-night dinners from the published card, Stay Chef weeks from $950/day, provisioning at cost. Base zone, no travel line.',
    },
    intro:
      'Kailua-Kona runs on vacation rentals, and vacation rentals run better with a chef. Start with the arrival-night dinner; scale to the week if the first night earns it.',
    sections: [
      {
        heading: 'The Kona week, cooked',
        body: [
          'Arrival dinner night one ($150–$225 a guest, ENTRY from $110), a Stay Chef day or two mid-week (from $950/day plus groceries at cost), and a stocked fridge the rest of the time. The mix is yours; the quote writes it down.',
        ],
        links: [{ label: 'Vacation chef service', href: 'services/vacation-chef' }],
      },
      {
        heading: 'Rental-manager friendly',
        body: [
          'We work with Kona’s rental managers weekly — access codes, house rules, and checkout-condition kitchens are routine. Several managers refer us directly; you can also book direct and we coordinate with them.',
        ],
        links: [{ label: 'For villa managers', href: 'partners/villa-managers' }],
      },
    ],
    faq: [
      {
        q: 'Can the chef shop before we arrive?',
        a: 'Yes — pre-arrival provisioning is standard on vacation-chef bookings, billed at cost with receipts plus the service line from your quote.',
      },
    ],
    cta: QUOTE,
    keywords: ['vacation chef Kailua-Kona', 'chef for Kona vacation rental'],
  },
  {
    slug: 'locations/kohala-coast/stay-chef',
    category: 'location',
    parent: 'stay-chef',
    title: 'Stay Chef Kohala Coast — The Resort-Residence Week, from $950/Day',
    h1: 'Stay Chef, Kohala Coast.',
    meta: {
      description:
        'A dedicated chef for your Kohala Coast week — Mauna Lani, Mauna Kea, Waikoloa, Puako. From $950 a day plus groceries at cost, inside the base zone. The written quote is the confirmed total.',
    },
    intro:
      'The Kohala Coast is Stay Chef country: week-long bookings in resort-residences with real kitchens, from Mauna Lani to Mauna Kea. From $950 a day, base zone, groceries at cost.',
    sections: [
      {
        heading: 'A corridor week',
        body: [
          'Breakfast before the beach club, provisioning for the pool day, dinner on the lanai as the light drops over the lava. The rhythm is set in the quote and flexes day to day — the rate does not.',
        ],
        links: [{ label: 'The Stay Chef product', href: 'stay-chef' }],
      },
      {
        heading: 'The math',
        body: [
          'Five days from $4,750 plus groceries at cost with receipts. Staffing for hosted evenings runs on published lines ($55/$75 hourly, four-hour floor). No weekly discount is published — the written quote is the total.',
        ],
        links: [{ label: 'Stay Chef cost, worked', href: 'pricing/stay-chef-cost' }],
      },
    ],
    faq: [
      {
        q: 'Do gated communities allow a Stay Chef?',
        a: 'Yes — via referral through your host or concierge. We handle vendor registration and coordinate daily entry with residential services.',
      },
    ],
    cta: QUOTE,
    keywords: ['stay chef Kohala Coast', 'chef for a week Mauna Lani'],
  },
  {
    slug: 'locations/kohala-coast/wedding-catering',
    category: 'location',
    parent: 'weddings',
    title: 'Kohala Coast Wedding Catering — Beside the Resort Circuit',
    h1: 'Kohala Coast wedding catering.',
    meta: {
      description:
        'Estate and villa wedding catering on the Kohala Coast — from $150 a guest plus staffing with 20% service, beside a resort circuit running $7,500–$15,000 F&B minimums at 23–25%.',
    },
    intro:
      'The resort circuit’s ballrooms run on published packages with $7,500–$15,000 food-and-beverage minimums. The estates and villas beside it are open — and that is where the wedding week lives.',
    sections: [
      {
        heading: 'The estate lane',
        body: [
          'Puako beach estates, Mauna Lani and Mauna Kea residences, private lots above the resorts: real kitchens, no venue catering contract, and the ocean right there. From $150 a guest plus staffing, service at 20% on its own line.',
        ],
        links: [{ label: 'Resort vs estate, the math', href: 'compare/resort-wedding-vs-estate' }],
      },
      {
        heading: 'The week around the wedding',
        body: [
          'Even couples marrying at a resort book the surrounding meals outside it — the welcome dinner, the recovery brunch, the family night before. Each runs on the published card and none carries a resort minimum.',
        ],
        links: [{ label: 'The wedding week', href: 'weddings/wedding-week' }],
      },
    ],
    faq: [
      {
        q: 'Can you cater a reception at a private estate near the resorts?',
        a: 'Yes, subject to the property’s event rules — most estate rentals that permit events allow outside caterers. We confirm with the property manager before quoting.',
      },
    ],
    cta: QUOTE,
    keywords: ['Kohala Coast wedding catering', 'estate wedding Mauna Lani'],
  },
  {
    slug: 'locations/waikoloa/vacation-chef',
    category: 'location',
    parent: 'services/vacation-chef',
    title: 'Vacation Chef Waikoloa — Family-Villa Weeks, Base Zone',
    h1: 'A vacation chef in Waikoloa.',
    meta: {
      description:
        'Vacation chef service for Waikoloa Beach Resort villas and condos — arrival dinners, Stay Chef days from $950, kids’ menus, and provisioning. Inside the base zone, 35 minutes from Kona.',
    },
    intro:
      'Waikoloa’s villa and condo stock was built for family weeks — and family weeks run better when somebody else cooks. Base zone, no travel line.',
    sections: [
      {
        heading: 'The family week, structured',
        body: [
          'Arrival dinner for the whole crew, an early kids’ seating every chef night, a Date Night for the parents mid-week, and provisioning runs between. Every piece prices off the published card — CORE band, ENTRY from $110, Stay Chef from $950 a day.',
        ],
        links: [{ label: 'Kid-friendly service', href: 'services/kids-menus' }],
      },
      {
        heading: 'Condo kitchens welcome',
        body: [
          'Waikoloa condos typically run full kitchens — exactly what we need. Send the listing link and we confirm specs before the quote.',
        ],
        links: [{ label: 'What kitchen a chef needs', href: 'guides/villa-kitchen' }],
      },
    ],
    faq: [
      {
        q: 'Can you handle a 12-person family with mixed dietary needs?',
        a: 'Yes — that is the standard Waikoloa table. Eleven dietary flags, separate prep for allergens, kids fed early.',
      },
    ],
    cta: QUOTE,
    keywords: ['vacation chef Waikoloa', 'Waikoloa villa chef'],
  },
  {
    slug: 'locations/mauna-lani/stay-chef',
    category: 'location',
    parent: 'stay-chef',
    title: 'Chef for a Week Mauna Lani — Stay Chef in the Resort-Residences',
    h1: 'A chef for the week, Mauna Lani.',
    meta: {
      description:
        'Stay Chef service at Mauna Lani resort-residences — from $950 a day plus groceries at cost, breakfast through dinner, coordinated with residential services. Base zone.',
    },
    intro:
      'Mauna Lani weeks are the Stay Chef ideal: one kitchen, one household rhythm, a chef who learns how your family eats by day two.',
    sections: [
      {
        heading: 'The residence week',
        body: [
          'From $950 a day plus groceries at cost with receipts. Most Mauna Lani bookings run five to seven days with a mix of full-service days and provisioning days — the quote maps it before you land.',
        ],
        links: [{ label: 'Stay Chef', href: 'stay-chef' }],
      },
      {
        heading: 'Hosted evenings',
        body: [
          'When the week includes a hosted dinner — friends at another residence, a small celebration — servers and sous chefs add on the published hourly lines, four-hour floor.',
        ],
        links: [{ label: 'Staffing', href: 'services/staffing' }],
      },
    ],
    faq: [
      {
        q: 'Can the same chef stay all week?',
        a: 'Yes — continuity is the point of Stay Chef. For weeks over seven days we schedule crew rest openly in the quote rather than burning out your chef silently.',
      },
    ],
    cta: QUOTE,
    keywords: ['chef for a week Mauna Lani', 'Mauna Lani stay chef'],
  },
  {
    slug: 'locations/mauna-kea/estate-dinner',
    category: 'location',
    parent: 'services/fine-dining',
    title: 'Private Dinner Chef Mauna Kea — Estate Evenings, Premium Tiers',
    h1: 'The estate dinner, Mauna Kea.',
    meta: {
      description:
        'Private estate dinners at Mauna Kea and Hapuna on the Big Island — CORE $150–$225 a guest, Premium $190–$275, Chef’s Table $275–$400+. Base zone; the written quote is the confirmed total.',
    },
    intro:
      'The Mauna Kea estate dinner is the corridor’s most formal register: big tables, long views, and menus that lean Premium and Chef’s Table.',
    sections: [
      {
        heading: 'Tiers at this address',
        body: [
          'CORE ($150–$225 a guest) is always available and often right. PREMIUM ($190–$275) adds courses and proteins; CHEF’S TABLE ($275–$400+) puts the progression in the chef’s hands. The tier is a menu decision, not a neighborhood tax.',
        ],
        links: [{ label: 'Fine dining tiers', href: 'services/fine-dining' }],
      },
      {
        heading: 'Service detail',
        body: [
          'Estate dinners above eight guests typically add a server ($55/hr) and, for Premium and above, a sous chef ($75/hr) — every line in the quote before you commit.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cook a Chef’s Table in a rental estate kitchen?',
        a: 'Yes, where the kitchen supports it — we confirm specs from the listing or a walk-through photo set before quoting the tier.',
      },
    ],
    cta: QUOTE,
    keywords: ['private dinner chef Mauna Kea', 'estate dinner Hapuna'],
  },
  {
    slug: 'locations/hualalai/villa-dinner',
    category: 'location',
    parent: 'services/fine-dining',
    title: 'Private Chef Dinner Hualālai — Referral Entry, Published Prices',
    h1: 'The villa dinner, Hualālai.',
    meta: {
      description:
        'Private chef dinners at Hualālai, Kukio, and Kohanaiki on the Big Island — published CORE pricing inside gated communities, entered through your host or concierge referral.',
    },
    intro:
      'Inside the gates, the same published card: CORE $150–$225 a guest, groceries inside the band, fee stack itemized. The only difference is the door we come through.',
    sections: [
      {
        heading: 'The referral path',
        body: [
          'Connect us to your host, member services, or estate manager. We complete vendor registration, schedule around club rules, and arrive with everything the kitchen needs. The process adds coordination, never a surcharge.',
        ],
        links: [{ label: 'Hualālai service notes', href: 'locations/hualalai' }],
      },
      {
        heading: 'The dinner itself',
        body: [
          'Coursed and plated, timed to the Kona sunset you can see from your lanai. Date Night economics for two (from $550), CORE per-guest pricing for the table.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is pricing different inside the resorts?',
        a: 'No. The published rate card applies at Hualālai exactly as in Kailua-Kona — the address changes the access process, not the price.',
      },
    ],
    cta: QUOTE,
    keywords: ['private chef dinner Hualalai', 'Kukio private chef'],
  },
  {
    slug: 'locations/keauhou/catering',
    category: 'location',
    parent: 'catering',
    title: 'Catering Keauhou — Villa and Resort Events South of Kona',
    h1: 'Catering, Keauhou.',
    meta: {
      description:
        'Event catering in Keauhou on the Big Island — staffed service 10–75 guests from $150 a guest plus published staffing. Fifteen minutes from base, no travel line.',
    },
    intro:
      'Keauhou’s resort condos and villas host a steady run of reunions, birthdays, and small wedding weeks — all inside the base zone, fifteen minutes from our kitchen.',
    sections: [
      {
        heading: 'The Keauhou event',
        body: [
          'Family-style and plated formats dominate here — big tables on big lanais. From $150 a guest for food, staffing on the $55/$75 hourly lines, four-hour floor, fee stack itemized.',
        ],
        links: [{ label: 'Catering formats', href: 'catering' }],
      },
      {
        heading: 'Resort coordination',
        body: [
          'For events inside resort-managed properties, we confirm house rules and load-in with the association or manager before quoting — no surprises on event day.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cater a 50-person birthday at a Keauhou rental?',
        a: 'Yes — inside the staffed 10–75 band. The written quote fixes format, crew count, and every line before the deposit.',
      },
    ],
    cta: QUOTE,
    keywords: ['catering Keauhou', 'Keauhou event catering'],
  },
  {
    slug: 'locations/captain-cook/stay-chef',
    category: 'location',
    parent: 'stay-chef',
    title: 'Stay Chef South Kona — Coffee-Belt Farm Stays',
    h1: 'Stay Chef, South Kona.',
    meta: {
      description:
        'Stay Chef service for South Kona farm stays and coffee-country rentals — from $950 a day plus groceries at cost. 30–45 minutes from Kona; travel posture stated in the quote.',
    },
    intro:
      'South Kona’s farm stays and coffee-belt houses are the island’s quiet luxury: misty mornings, lanai breakfasts, and a chef who shops the farms around you.',
    sections: [
      {
        heading: 'The coffee-belt week',
        body: [
          'From $950 a day plus groceries at cost — and here, “at cost” means the farms on your road. Kona coffee, South Kona fruit, Hāmākua mushrooms on the menu the day they are picked.',
        ],
        links: [{ label: 'Stay Chef', href: 'stay-chef' }],
      },
      {
        heading: 'Travel posture',
        body: [
          'Captain Cook sits 30–45 minutes from base. Most South Kona addresses fall inside the corridor or carry the from-$75 line for single evenings; multi-day Stay Chef bookings typically absorb it — either way, the quote states it.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cook on a working farm property?',
        a: 'Yes — farm-stay kitchens are a regular stage. We confirm power, water, and kitchen specs with the host before quoting.',
      },
    ],
    cta: QUOTE,
    keywords: ['stay chef South Kona', 'chef for farm stay Big Island'],
  },
  {
    slug: 'locations/hilo/catering',
    category: 'location',
    parent: 'catering',
    title: 'Catering Hilo — Resident Events at the Premium End',
    h1: 'Catering, Hilo.',
    meta: {
      description:
        'Premium event catering in Hilo, Hawaiʻi Island — parties, graduations, and life-cycle gatherings, quoted in writing with the Saddle drive stated as its own line.',
    },
    intro:
      'Hilo’s events market is resident and real — birthdays, graduations, gatherings after services — and its premium end is nearly unserved. We cater it, quoted honestly.',
    sections: [
      {
        heading: 'The honest quote',
        body: [
          'The food prices off the same published card as Kona — from $150 a guest, staffing $55/$75 hourly. The difference is the drive: 2.5–3 hours over the Saddle, stated as a crew-travel line in the written quote instead of hidden in the per-guest price.',
        ],
        links: [{ label: 'East-side quotes, explained', href: 'pricing/east-side-quote' }],
      },
      {
        heading: 'Formats that work east-side',
        body: [
          'Family-style and buffet-adjacent formats travel best over the Saddle — plated coursed service is possible with early load-in, and the quote will tell you which your venue supports. Covered backup is mandatory for outdoor events: Hilo’s 100+ inches of annual rain are not a rounding error.',
        ],
        links: [{ label: 'Weather backup planning', href: 'guides/weather-backup' }],
      },
    ],
    faq: [
      {
        q: 'Is there a minimum for Hilo events?',
        a: 'Effectively, the logistics line makes very small events uneconomic — the quote will show you. Past a dozen guests the per-person math usually beats every local alternative at the premium tier.',
      },
    ],
    cta: QUOTE,
    keywords: ['catering Hilo', 'Hilo event catering'],
  },
  {
    slug: 'locations/volcano/retreat-chef',
    category: 'location',
    parent: 'retreat-catering',
    title: 'Retreat Chef Volcano — Lodge and Retreat-House Service',
    h1: 'Retreat chef, Volcano.',
    meta: {
      description:
        'A retreat chef for Volcano Village lodges and Puna retreat houses on Hawaiʻi Island — protocol-labeled multi-day menus, chef-in-residence arrangements, quoted in writing.',
    },
    intro:
      'Volcano’s retreat houses sleep 8–30+ and feed everyone on-site. A chef-in-residence week usually prices better than daily Saddle runs — and the quote shows both.',
    sections: [
      {
        heading: 'Chef-in-residence vs daily service',
        body: [
          'At 2 hr 20 min+ from Kona, daily travel burns budget and freshness. For retreats of three days or more we quote a chef-in-residence arrangement — the published Stay Chef rate from $950 a day plus groceries at cost, with lodging arranged through the host.',
        ],
        links: [{ label: 'Retreat meal plans', href: 'retreat-catering/meal-plans' }],
      },
      {
        heading: 'The wellness register',
        body: [
          'Volcano and Puna programs lean plant-forward, raw, and cleansing — a culinary tradition this side of the island has run for decades. Menus are protocol-labeled per plate with separate allergen prep.',
        ],
        links: [{ label: 'Wellness menus', href: 'services/wellness-menus' }],
      },
    ],
    faq: [
      {
        q: 'Do you serve HVNP-area lodges?',
        a: 'Yes — rental homes and lodges that allow outside chefs. Park-adjacent venues with captive catering are respected; we tell you plainly which properties work.',
      },
    ],
    cta: QUOTE,
    keywords: ['retreat chef Volcano', 'Volcano retreat catering'],
  },
  /* ---- Retreat cluster (Table 4.2.4b) ---- */
  {
    slug: 'retreat-catering/volcano-puna',
    category: 'service',
    parent: 'retreat-catering',
    title: 'Volcano–Puna Retreat Catering — The Wellness Corridor',
    h1: 'Retreat catering, Volcano–Puna.',
    meta: {
      description:
        'Retreat catering for the Volcano–Puna wellness corridor on Hawaiʻi Island — protocol-labeled menus, chef-in-residence weeks, and written quotes that include the drive.',
    },
    intro:
      'The Puna–Volcano corridor is Hawaiʻi Island’s wellness heartland — retreat houses in the rainforest, one premium incumbent, and room for a published-price alternative.',
    sections: [
      {
        heading: 'The corridor',
        body: [
          'From Volcano Village down through Puna’s retreat centers, programs run three to seven days with every meal on-site. We cater them on protocol-labeled menus — plant-forward, raw, cleansing, gluten-free — with the east side’s whole-food fluency.',
        ],
        links: [{ label: 'Dietary protocols', href: 'retreat-catering/dietary-protocols' }],
      },
      {
        heading: 'Logistics in the quote',
        body: [
          'The Saddle drive is 2.5–3 hours — for multi-day programs, chef-in-residence arrangements from $950 a day plus groceries at cost almost always price better and cook better. The quote shows both structures so you can choose with numbers.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cater an off-grid retreat house?',
        a: 'Often, yes — we audit power, water, and kitchen specs before quoting and bring what the site lacks. Where a site genuinely cannot support safe service, we say so.',
      },
    ],
    cta: QUOTE,
    keywords: ['Volcano retreat catering', 'Puna retreat chef'],
  },
  {
    slug: 'retreat-catering/hilo',
    category: 'service',
    parent: 'retreat-catering',
    title: 'Retreat Catering Hilo — East-Side Retreat Centers',
    h1: 'Retreat catering, Hilo side.',
    meta: {
      description:
        'Retreat catering for Hilo-side and Hāmākua retreat centers on Hawaiʻi Island — multi-day programs, protocol menus, and chef-in-residence arrangements quoted in writing.',
    },
    intro:
      'Hilo-side retreat centers — from town-adjacent studios to Hāmākua coast properties — get the same protocol-labeled multi-day service as the Volcano corridor.',
    sections: [
      {
        heading: 'Programs we serve',
        body: [
          'Yoga and meditation weeks, writing and arts retreats, corporate offsites at Hāmākua properties. Menus run plant-forward by default with the full eleven-flag dietary system; meal timing follows your session schedule, not ours.',
        ],
      },
      {
        heading: 'Pricing structure',
        body: [
          'Per-person per-day meal plans for host-contracted programs, or the Stay Chef day rate from $950 plus groceries at cost for chef-in-residence weeks. East-side logistics are stated in the quote — never buried.',
        ],
        links: [{ label: 'Meal-plan pricing', href: 'retreat-catering/meal-plans' }],
      },
    ],
    faq: [
      {
        q: 'Do you charge extra for Hilo?',
        a: 'Travel is stated as its own line in the written quote — the food and staffing prices are identical to the west side. For multi-day programs, residence arrangements usually absorb the difference.',
      },
    ],
    cta: QUOTE,
    keywords: ['retreat catering Hilo', 'Hamakua retreat chef'],
  },
  {
    slug: 'retreat-catering/meal-plans',
    category: 'service',
    parent: 'retreat-catering',
    title: 'Retreat Meal Plan Pricing Big Island — Per Person, Per Day, In Writing',
    h1: 'Retreat meal plans, priced plainly.',
    meta: {
      description:
        'How retreat meal plans price on Hawaiʻi Island: per-person per-day structures and the Stay Chef day rate from $950, assembled from published lines into one written quote.',
    },
    intro:
      'Retreat pricing has two honest structures. Both assemble from published lines; both end in a written quote that is the confirmed total.',
    sections: [
      {
        heading: 'Structure one: per-person per-day',
        body: [
          'Host-contracted programs price per guest per day across the full meal schedule — breakfast, lunch, dinner, and the snacks in between. The per-day figure depends on protocols, headcount, and program length, and it is fixed in the written quote before the retreat is announced to guests.',
        ],
      },
      {
        heading: 'Structure two: chef-in-residence',
        body: [
          'Smaller retreats and chef-forward programs run on the published Stay Chef rate — from $950 a day — plus groceries at cost with receipts. For groups under about twelve, this structure usually wins; the quote shows the crossover point for your headcount.',
        ],
        links: [{ label: 'Stay Chef', href: 'stay-chef' }],
      },
      {
        heading: 'What every structure includes',
        list: [
          'Protocol-labeled menus across eleven dietary flags',
          'Groceries at cost with receipts',
          '20% service charge and GET up to 4.7120% on their own lines',
          'East-side logistics stated as a readable line',
        ],
      },
    ],
    faq: [
      {
        q: 'Can we see a sample three-day plan?',
        a: 'Yes — with your inquiry we send a sample menu arc and the pricing structure it implies, so you can budget before committing to dates.',
      },
    ],
    cta: QUOTE,
    keywords: ['retreat meal plan pricing Big Island', 'retreat catering cost Hawaii'],
  },
  {
    slug: 'retreat-catering/for-hosts',
    category: 'service',
    parent: 'retreat-catering',
    title: 'Cater My Retreat — The Big Island Host’s Page',
    h1: 'For retreat hosts.',
    meta: {
      description:
        'You run retreats on Hawaiʻi Island; we run the food. Protocol-labeled menus, dietary matrices handled, per-day pricing in writing, and a crew fluent in east-side logistics.',
    },
    intro:
      'You carry the program, the guests, and the venue. The food should be the part you stop worrying about — here is exactly how we take it off your desk.',
    sections: [
      {
        heading: 'The host handoff',
        body: [
          'Send dates, headcount, venue kitchen specs, and your dietary matrix. We return a written quote — per-day structure or chef-in-residence, both priced — with a sample menu arc. Your guests’ dietary flags become labeled plates, not a spreadsheet you manage.',
        ],
      },
      {
        heading: 'Repeat programs',
        body: [
          'Hosts running recurring retreats get a standing menu framework, documented kitchen protocol per venue, and re-booking priority in compressed seasons. The second retreat is faster than the first; by the third, the food runs itself.',
        ],
      },
      {
        heading: 'The honesty clause',
        body: [
          'If your venue’s kitchen cannot support your program safely, we tell you before you sell a single seat — with the specific fix (rental equipment, adjusted format, different meal structure) priced into the quote.',
        ],
        links: [{ label: 'Corporate retreats', href: 'retreat-catering/corporate-retreats' }],
      },
    ],
    faq: [
      {
        q: 'Can you bill the host rather than the guests?',
        a: 'Yes — host-contracted billing is the standard retreat structure, one invoice, groceries at cost with receipts attached.',
      },
    ],
    cta: QUOTE,
    keywords: ['cater my retreat Big Island', 'retreat host catering Hawaii'],
  },
  {
    slug: 'retreat-catering/dietary-protocols',
    category: 'service',
    parent: 'retreat-catering',
    title: 'Plant-Based & Detox Retreat Catering Big Island — Protocols, Labeled',
    h1: 'Protocols, cooked properly.',
    meta: {
      description:
        'Raw, vegan, cleansing, and detox-protocol retreat catering on Hawaiʻi Island — the east side’s whole-food tradition, protocol-labeled per plate, with separate allergen prep.',
    },
    intro:
      'Puna’s raw and cleansing tradition, Volcano’s wellness programs, the east side’s whole-food fluency — protocol catering here is a cuisine, not a concession.',
    sections: [
      {
        heading: 'The protocol shelf',
        list: [
          'RAW — dehydration, fermentation, and preparation below threshold temperatures',
          'VEGAN / PLANT-FORWARD — the east-side default, sourced from island farms',
          'CLEANSING / DETOX — structured menus matched to your program’s protocol',
          'GLUTEN-FREE / CELIAC — separate prep surfaces, separate oil, stated chain of custody',
        ],
      },
      {
        heading: 'Sourced where it grows',
        body: [
          'ʻUlu, kalo, and ʻuala from east-side farms; Hāmākua mushrooms and greens; Waimea strawberries; Kona coffee. Farm names appear on menus only when the produce verifiably came from that farm — provenance is printed, not performed.',
        ],
      },
      {
        heading: 'Mixed tables',
        body: [
          'Most retreats mix protocols at one table. Every plate is labeled; allergens are prepped separately; the dietary matrix you send at booking is the matrix on the pass at service.',
        ],
        links: [{ label: 'Dietary service', href: 'services/dietary' }],
      },
    ],
    faq: [
      {
        q: 'Can you match a specific cleanse protocol?',
        a: 'Yes — send the protocol document and we build menus to it exactly, flagging any ingredient that cannot be sourced reliably on-island for your dates.',
      },
    ],
    cta: QUOTE,
    keywords: ['plant-based detox retreat catering Big Island', 'raw food retreat chef Hawaii'],
  },
  {
    slug: 'retreat-catering/corporate-retreats',
    category: 'service',
    parent: 'retreat-catering',
    title: 'Corporate Retreat Catering Big Island — Estate Buyouts, Itemized',
    h1: 'Corporate retreats, on the ledger.',
    meta: {
      description:
        'Corporate retreat catering on Hawaiʻi Island — estate buyouts and offsite programs, staffed 10–75, from $150 a guest with every fee on its own line for clean expensing.',
    },
    intro:
      'Offsites and estate buyouts need two things from catering: food that keeps a program moving, and an invoice finance can actually read. We are built for both.',
    sections: [
      {
        heading: 'The program day, fed',
        body: [
          'Working breakfasts, lunches that do not stall the afternoon, and dinners that close the day properly. Staffed service runs from $150 a guest with the four-hour staffing floor; multi-day programs price on the retreat structures.',
        ],
        links: [{ label: 'Meal-plan structures', href: 'retreat-catering/meal-plans' }],
      },
      {
        heading: 'The readable invoice',
        body: [
          'Food, staffing, travel, 20% service, GET up to 4.7120% — each on its own line, groceries at cost with receipts attached. Your finance team will not have to call us.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cater a buyout at a west-side estate?',
        a: 'Yes — estate buyouts inside the Kona–Kohala corridor are base-zone work. Over 75 attendees is a written exception, quoted per event.',
      },
    ],
    cta: QUOTE,
    keywords: ['corporate retreat catering Big Island', 'offsite catering Kona'],
  },
  /* ---- Occasions (Table 4.2.4b) ---- */
  {
    slug: 'occasions',
    category: 'occasion',
    parent: '',
    title: 'Private Chef for Events on the Big Island — Every Occasion',
    h1: 'The occasion index.',
    meta: {
      description:
        'Birthdays, anniversaries, proposals, reunions, holiday tables, and Ironman week — private chef service for every Big Island occasion, priced off the published card.',
    },
    intro:
      'Every occasion below runs on the same published rate card — what changes is the menu, the timing, and the table. Pick yours.',
    sections: [
      {
        heading: 'The occasions',
        list: [
          'BIRTHDAY — the milestone table, cooked at home',
          'ANNIVERSARY — Date Night economics, from $550',
          'PROPOSAL — the ring, then the dinner',
          'FAMILY REUNION — twelve chairs, one kitchen',
          'HOLIDAY DINNER — December books first',
          'IRONMAN WEEK — October, Kona, compressed',
          'WHALE SEASON — December through April',
          'VILLA PARTY — the house, full',
        ],
        links: [
          { label: 'Birthday', href: 'occasions/birthday' },
          { label: 'Anniversary', href: 'occasions/anniversary' },
          { label: 'Proposal', href: 'occasions/proposal' },
          { label: 'Family reunion', href: 'occasions/family-reunion' },
          { label: 'Holiday dinner', href: 'occasions/holiday-dinner' },
          { label: 'Ironman week', href: 'occasions/ironman-week' },
          { label: 'Whale season', href: 'occasions/whale-season-dinner' },
          { label: 'Villa party', href: 'occasions/villa-party' },
        ],
      },
    ],
    cta: QUOTE,
    keywords: ['private chef for events Big Island', 'special occasion chef Kona'],
  },
  {
    slug: 'occasions/birthday',
    category: 'occasion',
    parent: 'occasions',
    title: 'Birthday Private Chef Kona — The Milestone Table at Home',
    h1: 'The birthday table.',
    meta: {
      description:
        'Birthday private chef service on the Big Island — milestone dinners in your villa from the published CORE band, $150–$225 a guest, with the cake logistics handled.',
    },
    intro:
      'The fortieth, the sixtieth, the eightieth with four generations at one table — milestone birthdays belong in the villa, not a banquet room.',
    sections: [
      {
        heading: 'How it runs',
        body: [
          'Menu call a week out, cake coordination if you want it, early seating for any kids, and a coursed dinner timed around the toast. From the published card — CORE $150–$225 a guest, ENTRY from $110.',
        ],
      },
      {
        heading: 'The price anchor',
        body: [
          'A birthday dinner for ten runs from $1,100–$2,250 on the per-guest bands, plus any staffing on the published hourly lines. The written quote shows every line before the deposit.',
        ],
        links: [{ label: 'Family-style menu', href: 'menus/family-style' }],
      },
    ],
    faq: [
      {
        q: 'Can you handle a surprise?',
        a: 'Yes — we coordinate arrival and setup with your co-conspirator, and the kitchen gives nothing away.',
      },
    ],
    cta: QUOTE,
    keywords: ['birthday private chef Kona', 'birthday dinner Big Island'],
  },
  {
    slug: 'occasions/anniversary',
    category: 'occasion',
    parent: 'occasions',
    title: 'Anniversary Dinner Private Chef Kona — From $550 for Two',
    h1: 'The anniversary dinner.',
    meta: {
      description:
        'Anniversary private chef dinners on the Big Island — Date Night from $550 for two, coursed and sunset-timed on the Kona–Kohala coast. The written quote is the confirmed total.',
    },
    intro:
      'Same table where you got engaged, or a new one above the lava coast — an anniversary dinner runs on Date Night economics: from $550, coursed, timed to the light.',
    sections: [
      {
        heading: 'The evening',
        body: [
          'Your chef shops that morning, cooks in your kitchen, serves each course, and leaves it clean. The menu call covers the dishes that mean something — the meal from your wedding, the thing you ate in Rome — and the timeline wraps around sunset.',
        ],
        links: [{ label: 'Date Night', href: 'services/date-night' }],
      },
      {
        heading: 'For bigger anniversaries',
        body: [
          'When the whole family flies in for the fiftieth, the format scales to a CORE dinner for the table — $150–$225 a guest, staffed on published lines.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you recreate a dish from our wedding menu?',
        a: 'Send a photo or a description and the chef will build toward it — stated honestly in the menu call if a faithful recreation needs an ingredient we cannot source that week.',
      },
    ],
    cta: QUOTE,
    keywords: ['anniversary dinner private chef Kona', 'anniversary chef Big Island'],
  },
  {
    slug: 'occasions/proposal',
    category: 'occasion',
    parent: 'occasions',
    title: 'Proposal Dinner Private Chef Big Island — The Yes, Then Dinner',
    h1: 'The proposal dinner.',
    meta: {
      description:
        'Proposal dinners on the Big Island — a private chef dinner for two from $550, timed around the question, with discreet coordination before and a celebration menu after.',
    },
    intro:
      'The question happens at sunset on the lava coast; dinner is already underway back at the villa. From $550, coordinated to the minute with whoever is holding the ring.',
    sections: [
      {
        heading: 'The choreography',
        body: [
          'We coordinate with your photographer or co-conspirator on timing: the table set, the first course holding, the chef invisible until the yes. Then a coursed dinner that lets the evening slow down.',
        ],
      },
      {
        heading: 'Logistics',
        body: [
          'From $550 inside the Kona–Kohala base zone. East-side proposals — a waterfall, a Volcano lodge — are quoted with travel stated. Weather backups are planned, not hoped for.',
        ],
        links: [{ label: 'Weather backup planning', href: 'guides/weather-backup' }],
      },
    ],
    faq: [
      {
        q: 'Can you keep it secret?',
        a: 'That is the entire job until the question is asked. Booking communications go only to the person who books.',
      },
    ],
    cta: QUOTE,
    keywords: ['proposal dinner private chef Big Island', 'engagement dinner Kona'],
  },
  {
    slug: 'occasions/family-reunion',
    category: 'occasion',
    parent: 'occasions',
    title: 'Family Reunion Catering Big Island — Twelve Chairs, One Kitchen',
    h1: 'The reunion table.',
    meta: {
      description:
        'Family reunion catering on the Big Island — multi-generation tables of 8–20+ at Kona and Kohala Coast rentals, priced per guest off the published card with kids’ plates itemized.',
    },
    intro:
      'Twelve-person reunion queries land every week from Kona to Mauna Kea. The Big Island rental stock sleeps the whole family — the published card feeds them.',
    sections: [
      {
        heading: 'The reunion week pattern',
        body: [
          'Arrival-night family-style dinner, one or two chef dinners mid-week, a big final-night table. Per-guest band pricing (CORE $150–$225, ENTRY from $110) with kids’ plates shown on their own line — the quote splits the table honestly.',
        ],
        links: [{ label: 'Family-style menu', href: 'menus/family-style' }],
      },
      {
        heading: 'Dietary pluralism, solved',
        body: [
          'Reunions are where every dietary flag shows up at once. Eleven flags, one kitchen, separate prep for allergens, every plate labeled — the grandma who eats everything and the nephew who cannot are both fed properly.',
        ],
        links: [{ label: 'Dietary service', href: 'services/dietary' }],
      },
    ],
    faq: [
      {
        q: 'What size group can you handle at a rental?',
        a: 'Up to 75 staffed as a written exception; 8–20 is the reunion sweet spot and prices cleanly on the per-guest bands plus staffing.',
      },
    ],
    cta: QUOTE,
    keywords: ['family reunion catering Big Island', 'reunion chef Kona'],
  },
  {
    slug: 'occasions/holiday-dinner',
    category: 'occasion',
    parent: 'occasions',
    title: 'Christmas & Holiday Private Chef Big Island — December Books First',
    h1: 'The holiday table.',
    meta: {
      description:
        'Holiday private chef service on the Big Island — Christmas and New Year villa dinners from the published card. The December–April window fills first; book six-plus weeks out.',
    },
    intro:
      'The December–April window is the island’s fullest — whale season, holidays, snowbird season stacked together. Holiday tables are the first dates to go.',
    sections: [
      {
        heading: 'The holiday booking window',
        body: [
          'Christmas-week and New Year dinners book six-plus weeks out in normal years. The price stays the published card — CORE $150–$225 a guest — but the calendar does not wait. A 50% deposit locks the date, after you have seen the written quote.',
        ],
        links: [{ label: 'Booking lead times', href: 'guides/booking-lead-times' }],
      },
      {
        heading: 'The menu register',
        body: [
          'Holiday menus lean on the island’s own season: Hāmākua mushrooms, ranch-country beef, the first of the winter citrus. Traditional formats — the roast, the goose, the whole fish — are all on the table, literally.',
        ],
        links: [{ label: 'Holiday menu', href: 'menus/holiday' }],
      },
    ],
    faq: [
      {
        q: 'Is there a holiday surcharge?',
        a: 'No holiday multiplier exists on the published card. Peak dates book out; they do not mark up. Any premium for a specific date appears in the written quote, plainly.',
      },
    ],
    cta: QUOTE,
    keywords: ['Christmas private chef Big Island', 'holiday catering Kona'],
  },
  {
    slug: 'occasions/ironman-week',
    category: 'occasion',
    parent: 'occasions',
    title: 'Ironman Kona Private Chef — Race-Week Tables, October',
    h1: 'Ironman week, fed.',
    meta: {
      description:
        'Private chef service during Ironman World Championship week in Kona — athlete-focused menus, recovery tables, and early bookings for October’s compressed calendar.',
      ogImage: '/img/bigisland/occasions.jpg',
    },
    intro:
      'Every October the Ironman World Championship compresses Kona — rentals full, restaurants slammed, athletes eating on schedules no kitchen staff improvises. We book race week early for a reason.',
    sections: [
      {
        heading: 'The athlete table',
        body: [
          'Race-week menus are built around the training calendar: carbohydrate-periodized dinners, recovery brunches, the pre-race meal timed to the hour. Macro-tracked protocols are standard — this is the one week where the dietary matrix is the menu.',
        ],
        media: { src: '/img/bigisland/occasions.jpg', alt: 'A morning recovery breakfast table on a dark stone lanai in hard early sunlight, Kona', ratio: '16/10' },
      },
      {
        heading: 'The logistics of a compressed week',
        body: [
          'October in Kona is the island’s tightest booking window — chef supply, groceries, and even parking compress. We publish no Ironman surcharge; we publish a lead time. Book race week eight-plus weeks out.',
        ],
        links: [
          { label: 'Booking lead times', href: 'guides/booking-lead-times' },
          { label: 'Seasonality on the Big Island', href: 'guides/seasonality' },
        ],
      },
    ],
    faq: [
      {
        q: 'Do you cook for support crews and families too?',
        a: 'Yes — the athlete eats the protocol menu; the rest of the house eats the CORE band. One kitchen, two menus, labels on everything.',
      },
    ],
    cta: QUOTE,
    keywords: ['Ironman Kona private chef', 'Ironman week catering'],
  },
  {
    slug: 'occasions/whale-season-dinner',
    category: 'occasion',
    parent: 'occasions',
    title: 'Whale Season Private Chef Big Island — December to April',
    h1: 'Whale season at the table.',
    meta: {
      description:
        'Private chef dinners during Big Island whale season, December–April — the island’s peak window, with humpbacks breaching off the Kohala Coast and dinner booked weeks ahead.',
    },
    intro:
      'December through April the humpbacks work the Kohala Coast and the island fills. Dinner on the lanai with a breach mid-course is not a promise we can make — but we book the table under it.',
    sections: [
      {
        heading: 'The peak-window truth',
        body: [
          'Whale season is the island’s demand peak, and it compresses chef calendars first. The rate card does not change — CORE $150–$225 a guest — but December–March dates want six weeks of lead, and the holiday weeks want more.',
        ],
        links: [{ label: 'Seasonality guide', href: 'guides/seasonality' }],
      },
      {
        heading: 'The winter menu',
        body: [
          'Winter service on the west side runs outside nearly every night — Kona’s coast sees 9–12 inches of rain a year. Long sunsets, cool evenings, the grill working: the season cooks well.',
        ],
      },
    ],
    faq: [
      {
        q: 'When exactly is whale season?',
        a: 'December through April, with January–March the peak. Dinner tables face the water; the whales handle their own scheduling.',
      },
    ],
    cta: QUOTE,
    keywords: ['whale season private chef Big Island', 'winter dinner Kona'],
  },
  {
    slug: 'occasions/villa-party',
    category: 'occasion',
    parent: 'occasions',
    title: 'Villa Party Catering Kona — The House, Full',
    h1: 'The villa party.',
    meta: {
      description:
        'Villa party catering on the Big Island — pupus, stations, and staffed bar service for house parties at Kona–Kohala rentals, 10–75 guests, from the published card.',
    },
    intro:
      'Not a dinner, not a wedding — the villa party is its own format: pupus circulating, a station or two, the bar cart working, nobody seated for long.',
    sections: [
      {
        heading: 'The format',
        body: [
          'Pupu service and stations from the event band, bar cart from $725 per four hours, servers on the $55 hourly line. Ten to seventy-five guests staffed; the rental’s house rules on events are confirmed before we quote.',
        ],
        links: [
          { label: 'Pupu and grazing menu', href: 'menus/pupu-and-grazing' },
          { label: 'The bar cart', href: 'services/mobile-bar' },
        ],
      },
      {
        heading: 'House rules first',
        body: [
          'Many Big Island rentals restrict events — we confirm what your property allows before quoting a party format. Where the house caps the guest count, the quote respects the cap.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you do a poolside format?',
        a: 'Yes — stations and pupus work poolside with proper setup. Glass near water is swapped for the right ware; the quote notes it.',
      },
    ],
    cta: QUOTE,
    keywords: ['villa party catering Kona', 'house party chef Big Island'],
  },
  /* ---- Wedding cluster (Table 4.2.4b) ---- */
  {
    slug: 'weddings/wedding-week',
    category: 'wedding',
    parent: 'weddings',
    title: 'Big Island Wedding Week Chef — Five Meals, One Written Quote',
    h1: 'The wedding week, as a ledger.',
    meta: {
      description:
        'A chef for your whole Big Island wedding week — welcome dinner, rehearsal, reception, recovery brunch — from $150 a guest plus staffing, one written quote, 20% service on its own line.',
      ogImage: '/img/bigisland/panel-wedding.jpg',
    },
    intro:
      'Five meals across the week, one crew, one contract, one number you approved before anyone cooked. No Big Island competitor publishes an equivalent — here it is, itemized.',
    sections: [
      {
        heading: 'The arc',
        list: [
          'WELCOME DINNER — family-style, the ice-breaker, from $150/guest',
          'REHEARSAL DINNER — plated or family-style, the private-chef lane',
          'CEREMONY-ADJACENT — pupus and bar cart during photos',
          'RECEPTION — staffed, CORE band $150–$225/guest',
          'RECOVERY BRUNCH — the morning after, slow and good',
        ],
        body: [
          'Book all five or any subset. The week prices as one ledger — you see every event’s food lines, staffing lines, and the shared logistics once.',
        ],
      },
      {
        heading: 'A worked week, illustrative',
        body: [
          'Welcome 60 guests × $150 = $9,000 · rehearsal 30 × $150 = $4,500 · reception 60 × $200 (mid-band) = $12,000 · brunch 40 × $150 = $6,000 → food lines $31,500. Plus staffing on published hourlys, 20% service on its own line, GET up to 4.7120% on its own. Illustrative math on published rates — your quote fixes your numbers.',
        ],
      },
      {
        heading: 'Against the resort alternative',
        body: [
          'Resort circuits on this coast run F&B minimums of $7,500–$15,000 per event plus 23–25% service. Four catered events at a resort can carry $30,000–$60,000 in minimums before a single staffing hour. The villa wedding week undercuts that structure, not by discounting — by not having minimums at all.',
        ],
        links: [{ label: 'The full comparison', href: 'compare/resort-wedding-vs-estate' }],
      },
      {
        heading: 'Booking the week',
        body: [
          'Wedding weeks in the December–April window and around October’s Ironman compress first. Six-plus weeks of lead is the floor; peak dates want three months. The 50% deposit locks all five dates at once.',
        ],
        links: [{ label: 'Lead times', href: 'guides/booking-lead-times' }],
      },
    ],
    faq: [
      {
        q: 'Do we have to book all five meals?',
        a: 'No — any subset books on the same terms. The week structure exists so the meals you do book share one crew, one quote, and one deposit.',
      },
      {
        q: 'Can the reception be at one venue and the rest at our villa?',
        a: 'Yes — that is the most common shape. The reception runs wherever your venue allows outside catering; everything else happens at the rental.',
      },
      {
        q: 'What does the recovery brunch cost?',
        a: 'From $150 a guest on the published card, typically the lightest staffing footprint of the week. Coffee is taken seriously — this is Kona.',
        links: [{ label: 'Brunch menu', href: '/bigisland/menus/breakfast-and-brunch' }],
      },
    ],
    cta: { ...QUOTE, secondaryLabel: 'Rehearsal dinners', secondaryHref: 'weddings/rehearsal-dinner' },
    keywords: ['Big Island wedding week chef', 'wedding week catering Hawaii'],
  },
  {
    slug: 'weddings/rehearsal-dinner',
    category: 'wedding',
    parent: 'weddings/wedding-week',
    title: 'Rehearsal Dinner Big Island — The Private-Chef Lane',
    h1: 'The rehearsal dinner.',
    meta: {
      description:
        'Rehearsal dinner catering on the Big Island — villa dinners for 20–40 from $150 a guest, plated or family-style, the night before the wedding done properly.',
    },
    intro:
      'The rehearsal dinner is the private-chef lane of the wedding week: thirty people at a villa, one long table, no venue minimum in sight.',
    sections: [
      {
        heading: 'Format and spec',
        body: [
          'Twenty to forty guests, plated or family-style, one server per ten to twelve on the published hourly lines. From $150 a guest; the CORE band covers the standard menu and Premium is there if the night before deserves the full register.',
        ],
      },
      {
        heading: 'How it fits the week',
        body: [
          'The rehearsal dinner is usually the second event of the wedding-week ledger — after the welcome dinner, before the reception. Booked alone it stands fine; booked in the week it shares crew, deposit, and quote.',
        ],
        links: [
          { label: 'The wedding week', href: 'weddings/wedding-week' },
          { label: 'Welcome dinner', href: 'weddings/welcome-dinner' },
        ],
      },
    ],
    faq: [
      {
        q: 'Can we do speeches and a slideshow?',
        a: 'Yes — the format plans for them. Toasts run between courses; we time service to the program, not the other way around.',
      },
    ],
    cta: QUOTE,
    keywords: ['rehearsal dinner Big Island', 'rehearsal dinner Kona'],
  },
  {
    slug: 'weddings/welcome-dinner',
    category: 'wedding',
    parent: 'weddings/wedding-week',
    title: 'Welcome Dinner Big Island — The First Meal of the Wedding Week',
    h1: 'The welcome dinner.',
    meta: {
      description:
        'Welcome dinner catering on the Big Island — family-style arrival meals for wedding guests at Kona–Kohala villas, from $150 a guest on the published card.',
    },
    intro:
      'The week’s first meal sets its tone: family-style platters, introductions across the table, nobody checking a watch. From $150 a guest.',
    sections: [
      {
        heading: 'Format and spec',
        body: [
          'Family-style is the default — it forces the two families into one another’s conversations, which is the point. Twenty to sixty guests, one or two servers, the CORE band, and a menu built to survive an hour of hugging before anyone sits.',
        ],
      },
      {
        heading: 'How it fits the week',
        body: [
          'First event in the wedding-week ledger. It doubles as the kitchen’s shakedown run — by the reception, the crew knows the venue cold.',
        ],
        links: [{ label: 'The wedding week', href: 'weddings/wedding-week' }],
      },
    ],
    faq: [
      {
        q: 'Can guests with late flights still eat?',
        a: 'Yes — family-style holds gracefully. We plan a holding course for late arrivals and it is noted in the event spec.',
      },
    ],
    cta: QUOTE,
    keywords: ['welcome dinner Big Island', 'wedding welcome dinner Kona'],
  },
  {
    slug: 'weddings/reception-catering',
    category: 'wedding',
    parent: 'weddings',
    title: 'Big Island Wedding Reception Catering — Staffed, Itemized',
    h1: 'The reception, staffed.',
    meta: {
      description:
        'Wedding reception catering on the Big Island — plated or family-style service for 10–75 guests from $150 a guest, with staffing, service charge, and GET on their own lines.',
    },
    intro:
      'The main event: plated or family-style service, a full crew, and an invoice you can audit line by line. Ten to seventy-five guests; over 75 is a written exception.',
    sections: [
      {
        heading: 'Format and spec',
        body: [
          'Plated reception service runs the CORE band ($150–$225 a guest) with a server per ten to twelve and a sous chef above twenty — $55 and $75 an hour, four-hour floor. Family-style drops the staffing count; stations re-shape it. The quote maps crew to format.',
        ],
      },
      {
        heading: 'Against the ballroom',
        body: [
          'Resort receptions on this coast carry $7,500–$15,000 F&B minimums and 23–25% service. An estate reception at from $150 a guest with 20% service itemized is the same caliber of table without the structure charge.',
        ],
        links: [{ label: 'The comparison, quantified', href: 'compare/resort-wedding-vs-estate' }],
      },
    ],
    faq: [
      {
        q: 'Who handles rentals and tables?',
        a: 'We coordinate rental orders — tables, ware, linen — as itemized pass-throughs in the quote, or work with your planner’s vendors.',
      },
    ],
    cta: QUOTE,
    keywords: ['Big Island wedding reception catering', 'reception catering Kona'],
  },
  {
    slug: 'weddings/recovery-brunch',
    category: 'wedding',
    parent: 'weddings/wedding-week',
    title: 'Day-After Wedding Brunch Big Island — The Recovery Meal',
    h1: 'The recovery brunch.',
    meta: {
      description:
        'Day-after wedding brunch on the Big Island — a slow morning table at your villa from $150 a guest, Kona coffee taken seriously, the wedding week closed out properly.',
    },
    intro:
      'The morning after: coffee that earns the name Kona, a slow table, the stories from last night. The wedding week’s soft landing, from $150 a guest.',
    sections: [
      {
        heading: 'Format and spec',
        body: [
          'Brunch runs lighter — one server, a brunch spread plus a cooked-to-order station if the group wants it. From $150 a guest on the published card; the lightest staffing footprint of the week.',
        ],
        links: [{ label: 'Breakfast and brunch menu', href: 'menus/breakfast-and-brunch' }],
      },
      {
        heading: 'How it fits the week',
        body: [
          'Last line in the wedding-week ledger. It is also the event departing guests can actually make — we time service to checkout and flights honestly.',
        ],
        links: [{ label: 'The wedding week', href: 'weddings/wedding-week' }],
      },
    ],
    faq: [
      {
        q: 'How early can brunch start?',
        a: 'As early as your house allows — load-in and coffee service can run from 7:00. The timeline is set in the event spec, around your departures.',
      },
    ],
    cta: QUOTE,
    keywords: ['day after wedding brunch Big Island', 'recovery brunch Kona'],
  },
  {
    slug: 'weddings/elopement',
    category: 'wedding',
    parent: 'weddings',
    title: 'Elopement Private Chef Big Island — Two Seats, Whole Island',
    h1: 'The elopement dinner.',
    meta: {
      description:
        'Elopement dinners on the Big Island — a private chef for two from $550, from lava-coast sunsets to Volcano rainforest lodges. Timed to your ceremony, priced off the published card.',
    },
    intro:
      'The Big Island elopes well: a waterfall above Hilo, a black-sand beach, a Volcano lodge with a fireplace. The dinner after runs from $550 — Date Night economics, wedding-day gravity.',
    sections: [
      {
        heading: 'Format and spec',
        body: [
          'Two guests, coursed service, timed around your ceremony and photographer. The chef works invisibly until plates land; the kitchen is left clean and the evening is yours.',
        ],
      },
      {
        heading: 'Where it works',
        body: [
          'West-side rentals are base zone. Volcano and east-side elopements carry the drive in the written quote — the fireplace-lodge dinner after a rainforest ceremony is worth the line item, and you will see it before you commit.',
        ],
        links: [
          { label: 'Date Night', href: 'services/date-night' },
          { label: 'Volcano service', href: 'locations/volcano' },
        ],
      },
    ],
    faq: [
      {
        q: 'Can you coordinate with our photographer?',
        a: 'Yes — we time courses to golden hour and hold plates while the light is used. The schedule is written into the event spec.',
      },
    ],
    cta: QUOTE,
    keywords: ['elopement private chef Big Island', 'elopement dinner Volcano'],
  },
  {
    slug: 'weddings/estate-wedding',
    category: 'wedding',
    parent: 'weddings',
    title: 'Big Island Estate Wedding Catering — Under the Resort Minimums',
    h1: 'The estate wedding.',
    meta: {
      description:
        'Estate wedding catering on the Big Island — private-property receptions from $150 a guest plus staffing, below resort F&B minimums of $7,500–$15,000 and their 23–25% service charges.',
    },
    intro:
      'The estate wedding is the structural arbitrage of Big Island weddings: private property, outside caterer allowed, no F&B minimum — and a published per-guest price instead.',
    sections: [
      {
        heading: 'The arithmetic',
        body: [
          'Resort F&B minimums on the Kohala Coast run $7,500–$15,000 per event with 23–25% service charges. A 60-guest estate reception at $200 mid-band runs $12,000 for food with 20% service itemized — the same spend, but every dollar is food and crew, not a minimum you had to hit.',
        ],
        links: [{ label: 'Resort vs estate, the full math', href: 'compare/resort-wedding-vs-estate' }],
      },
      {
        heading: 'What an estate needs',
        body: [
          'A real kitchen (or room for a field kitchen), event permission from the property, power and water access, and a rain plan if any service is outdoor. We audit all four before quoting — the audit is free and the honesty is the point.',
        ],
        links: [{ label: 'Venue notes', href: 'weddings/venues' }],
      },
    ],
    faq: [
      {
        q: 'Can you build a field kitchen at an estate without one?',
        a: 'Yes — rental equipment, prep tents, and power solutions price as itemized pass-throughs in the quote. Many estates need nothing but their own kitchen.',
      },
    ],
    cta: QUOTE,
    keywords: ['Big Island estate wedding catering', 'private estate wedding Kona'],
  },
  {
    slug: 'weddings/wedding-cost',
    category: 'wedding',
    parent: 'weddings',
    title: 'Big Island Wedding Catering Cost — The Honest Breakdown',
    h1: 'What wedding catering costs here.',
    meta: {
      description:
        'Big Island wedding catering costs explained: myCHEF from $150 a guest plus staffing and 20% service, against a market running $75/pp floors to $120–$250/pp resort pricing with 23–25% service.',
    },
    intro:
      'The Big Island wedding food market runs from a $75-per-person floor to $120–$250 a person at resorts — before service charges of 23–25%. Here is where every number sits, including ours.',
    sections: [
      {
        heading: 'The market, sourced',
        body: [
          'Venue-caterers anchor the floor — one major Kona venue publishes food from $75 a person with a 23% service charge and F&B minimums of $1,500–$2,000. Kohala Coast resorts publish F&B minimums of $7,500–$15,000 with meals $120 a person and up and service at 25%. Planner guidance puts independent catering at roughly $50–$150 a person for food.',
        ],
      },
      {
        heading: 'Our lines',
        list: [
          'FOOD — FROM $150/GUEST (WEDDING WEEK / RECEPTION)',
          'STAFFING — SERVER $55/HR · SOUS $75/HR · 4-HR FLOOR',
          'SERVICE — 20%, ITS OWN LINE',
          'GET — UP TO 4.7120%, ITS OWN LINE',
          'TRAVEL — BASE ZONE FREE · OUTSIDE FROM $75 · EAST SIDE QUOTED',
        ],
      },
      {
        heading: 'Worked example',
        body: [
          'Sixty guests at $200 mid-band = $12,000 food · four servers + two sous chefs, five hours ≈ $1,850 · service 20% · GET ≤4.7120%. Every figure reconciles to the published card — the written quote is the confirmed total.',
        ],
        links: [{ label: 'Resort vs estate comparison', href: 'compare/resort-wedding-vs-estate' }],
      },
    ],
    faq: [
      {
        q: 'Why publish when competitors do not?',
        a: 'Because a price you can check is a price you can trust. The resort circuit’s 23–25% service charges are also published — the comparison is arithmetic, and arithmetic does not need hiding.',
      },
    ],
    cta: QUOTE,
    keywords: ['Big Island wedding catering cost', 'wedding catering prices Hawaii'],
  },
  {
    slug: 'weddings/venues',
    category: 'wedding',
    parent: 'weddings',
    title: 'Big Island Wedding Venues with Catering — Notes from the Field',
    h1: 'Venue notes, honestly written.',
    meta: {
      description:
        'Big Island wedding venue notes for catered events — ranch venues, coffee farms, Volcano lodges, and estates: which allow outside caterers, what the kitchens are like, what to ask.',
    },
    intro:
      'We do not sell venues. We cook in them — so these notes cover the only things that matter to your caterer: outside-vendor rules, kitchen reality, and access.',
    sections: [
      {
        heading: 'The independent circuit',
        body: [
          'Ranch-heritage venues in Waimea, coffee-farm properties in South Kona, Volcano-area lodges, and private estates up and down the Kohala Coast — this circuit allows outside catering and is where the wedding week lives. Venue rental fees are set by the venues; our lines stay the published card.',
        ],
      },
      {
        heading: 'The captive circuit',
        body: [
          'The big resorts run in-house catering with published packages and F&B minimums — beautiful rooms, captive food. If you marry at one, the surrounding meals (welcome, rehearsal, brunch) can still run with us at your villa.',
        ],
        links: [{ label: 'The wedding week', href: 'weddings/wedding-week' }],
      },
      {
        heading: 'What to ask any venue',
        list: [
          'Are outside caterers permitted, and is there a buyout or preferred list?',
          'What are the kitchen specs — range, refrigeration, power, water?',
          'Load-in windows, noise curfews, and vendor insurance requirements?',
          'The rain plan, in writing, for any outdoor service?',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you recommend a venue?',
        a: 'We will tell you plainly which properties cook well — kitchens, access, rules — once we know your guest count and side of the island. We take no venue commissions, so the answer is clean.',
      },
    ],
    cta: QUOTE,
    keywords: ['Big Island wedding venues with catering', 'Kona wedding venues outside catering'],
  },
  /* ---- Menus (Table 4.2.4b) ---- */
  {
    slug: 'menus',
    category: 'menu',
    parent: '',
    title: 'Private Chef Menus Big Island — From the Kohala Coast to the Coffee Belt',
    h1: 'The menus.',
    meta: {
      description:
        'Private chef menus on Hawaiʻi Island — signature three-course, family-style, tasting, pupu, provenance, brunch, and dietary menus, priced on the published tiers. Eleven dietary flags, one kitchen.',
    },
    intro:
      'Every menu adapts: eleven dietary flags, one kitchen, separate prep for allergens. Prices follow the published tiers — ENTRY from $110, CORE $150–$225, PREMIUM $190–$275, Chef’s Table $275–$400+.',
    sections: [
      {
        heading: 'Signature Three-Course',
        body: ['The default villa dinner: starter, main, dessert, built on the week’s market. CORE band.'],
        links: [{ label: 'See the menu', href: 'menus/signature-three-course' }],
      },
      {
        heading: 'Family-Style',
        body: ['Platters down the middle of the table — the reunion and welcome-dinner format.'],
        links: [{ label: 'See the menu', href: 'menus/family-style' }],
      },
      {
        heading: 'Tasting Menu',
        body: ['Seven-plus courses, chef-led — Premium and Chef’s Table tiers.'],
        links: [{ label: 'See the menu', href: 'menus/tasting-menu' }],
      },
      {
        heading: 'Pupu & Grazing',
        body: ['The party format: circulating plates and boards for villa events.'],
        links: [{ label: 'See the menu', href: 'menus/pupu-and-grazing' }],
      },
      {
        heading: 'Kona Provenance — “Kohala Coast”',
        body: ['Parker Ranch beef, Hāmākua mushrooms, Kona Cold lobster, Waimea strawberries, a Kona coffee finish.'],
        links: [{ label: 'See the menu', href: 'menus/kona-provenance' }],
      },
      {
        heading: 'The Kona Coffee Dinner',
        body: ['The origin belt’s bean, treated as a course-by-course ingredient.'],
        links: [{ label: 'See the menu', href: 'menus/kona-coffee' }],
      },
      {
        heading: 'Breakfast & Brunch',
        body: ['Recovery brunches, wedding-week mornings, slow Stay Chef starts.'],
        links: [{ label: 'See the menu', href: 'menus/breakfast-and-brunch' }],
      },
      {
        heading: 'Vegetarian & Vegan',
        body: ['Plant-forward menus in the east-side whole-food register.'],
        links: [{ label: 'See the menu', href: 'menus/vegetarian-vegan' }],
      },
      {
        heading: 'Gluten-Free',
        body: ['Full menus with separate prep — celiac protocol supported.'],
        links: [{ label: 'See the menu', href: 'menus/gluten-free' }],
      },
      {
        heading: 'Kids',
        body: ['Real food, scaled for small hands, served early.'],
        links: [{ label: 'See the menu', href: 'menus/kids' }],
      },
      {
        heading: 'Holiday',
        body: ['The December table — roasts, whole fish, winter citrus.'],
        links: [{ label: 'See the menu', href: 'menus/holiday' }],
      },
    ],
    cta: QUOTE,
    keywords: ['private chef menus Big Island', 'Kona chef menus'],
  },
  {
    slug: 'menus/signature-three-course',
    category: 'menu',
    parent: 'menus',
    title: 'Big Island Signature Dinner Menu — The CORE Three-Course',
    h1: 'The Signature three-course.',
    meta: {
      description:
        'The myCHEF Big Island signature dinner: three courses built on the week’s Kona-side market, CORE band $150–$225 a guest, groceries inside, fee stack itemized.',
    },
    intro:
      'The default villa dinner — starter, main, dessert — written after your menu call and the chef’s morning shop. CORE band: $150–$225 a guest, groceries inside.',
    sections: [
      {
        heading: 'A representative arc',
        list: [
          'First — Hāmākua mushroom tartine, or the day’s fish crudo with lilikoʻi',
          'Main — Parker Ranch beef or Kona Cold lobster when the boats ran',
          'Finish — Waimea strawberry, or a Kona coffee dessert',
        ],
        body: [
          'Menus are written per booking, not laminated — provenance lines name the farm only when the produce verifiably came from it.',
        ],
      },
      {
        heading: 'Price and tier context',
        body: [
          'Inside the CORE band the menu moves with protein and course ambition. ENTRY (from $110) simplifies the arc; PREMIUM ($190–$275) extends it. Dietary flags apply across all tiers at no surcharge.',
        ],
        links: [{ label: 'The rate card', href: 'pricing' }],
      },
      {
        heading: 'How service runs',
        body: [
          'Shop that morning, cook in your kitchen, plate and serve each course, leave the kitchen clean. Three courses typically span ninety minutes at the table.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can we see the menu before booking?',
        a: 'The menu is written after booking from your call and the market week — you approve it before service day. A sample arc comes with your quote.',
      },
      {
        q: 'What if someone at the table eats vegan?',
        a: 'Mixed tables are standard: the vegan arc runs parallel, labeled, at the same tier. No surcharge, separate prep.',
      },
    ],
    cta: QUOTE,
    keywords: ['Big Island signature dinner menu', 'three course private chef Kona'],
  },
  {
    slug: 'menus/family-style',
    category: 'menu',
    parent: 'menus',
    title: 'Family-Style Menu Big Island — Platters Down the Middle',
    h1: 'The family-style table.',
    meta: {
      description:
        'Family-style private chef menus on the Big Island — shared platters for reunions and wedding-week tables, from $150 a guest with kids’ plates itemized in the quote.',
    },
    intro:
      'Platters down the middle, elbows allowed. Family-style is the reunion, the welcome dinner, and the villa-week default — and the format that feeds twelve as gracefully as six.',
    sections: [
      {
        heading: 'A representative spread',
        list: [
          'Whole fish or Parker Ranch tri-tip, carved at the table',
          'Hāmākua mushroom and Waimea greens sides',
          'Rice, ʻulu, and the starch of the season',
          'Family-style dessert — the big platter, no plating ceremony',
        ],
      },
      {
        heading: 'Price and tier context',
        body: [
          'Family-style prices on the CORE band from $150 a guest, with kids’ plates itemized on their own line in the written quote. Staffing runs lighter than plated service — the quote shows the difference.',
        ],
      },
      {
        heading: 'How service runs',
        body: [
          'Platters land in waves, timed to the table’s appetite. The chef and a server run the room; seconds exist; leftovers are packed and labeled in your fridge.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is family-style cheaper than plated?',
        a: 'The food prices the same; the staffing count usually drops one server. The written quote shows both formats if you want to compare.',
      },
    ],
    cta: QUOTE,
    keywords: ['family style menu Big Island', 'family style catering Kona'],
  },
  {
    slug: 'menus/tasting-menu',
    category: 'menu',
    parent: 'menus',
    title: 'Tasting Menu Private Chef Kona — Premium & Chef’s Table',
    h1: 'The tasting progression.',
    meta: {
      description:
        'Tasting menus from a private chef on the Big Island — seven-plus courses at Premium ($190–$275) and Chef’s Table ($275–$400+) tiers, built on island provenance.',
      ogImage: '/img/bigisland/menu-kohala.jpg',
    },
    intro:
      'Seven-plus courses, sequenced by the chef, written the week of your dinner. Tasting menus live in the PREMIUM ($190–$275) and CHEF’S TABLE ($275–$400+) tiers.',
    sections: [
      {
        heading: 'The progression',
        list: [
          'Cold open — crudo or chilled soup, the palate set',
          'Vegetable course — Hāmākua mushrooms, treated like the main event they are',
          'From the water — Kona Cold lobster or the day’s fish',
          'From the ranch — Parker Ranch beef, ember and salt',
          'Finish — Kona coffee and Waimea strawberry in some argument',
        ],
        media: { src: '/img/bigisland/menu-kohala.jpg', alt: 'A sliced seared beef course on a matte black plate with an ember-red sauce swipe', ratio: '16/10' },
      },
      {
        heading: 'Price and tier context',
        body: [
          'PREMIUM covers the standard progression; CHEF’S TABLE adds courses, counter seating where the kitchen allows, and the chef narrating. Both carry groceries inside the band.',
        ],
        links: [{ label: 'Chef’s Table service', href: 'services/chefs-table' }],
      },
      {
        heading: 'How service runs',
        body: [
          'Two to three hours at the table, a sous chef on the $75 hourly line above four guests. The pace is yours — courses wait for conversation, not the reverse.',
        ],
      },
    ],
    faq: [
      {
        q: 'How many guests work for a tasting menu?',
        a: 'Two to eight is ideal. Above eight the format shifts to a plated Premium menu with the same arc — the quote explains the tradeoff.',
      },
    ],
    cta: QUOTE,
    keywords: ['tasting menu private chef Kona', 'Big Island tasting menu'],
  },
  {
    slug: 'menus/pupu-and-grazing',
    category: 'menu',
    parent: 'menus',
    title: 'Pupu Platters Kona — Grazing Menus for Villa Parties',
    h1: 'Pupus and grazing.',
    meta: {
      description:
        'Pupu platters and grazing menus for Big Island villa parties — circulating plates and boards from the event band, staffed on published hourly lines.',
    },
    intro:
      'The standing-up menu: circulating pupus, boards that rebuild themselves, and nothing that needs a knife. Built for villa parties and ceremony-adjacent hours.',
    sections: [
      {
        heading: 'The spread',
        list: [
          'Cold — island fish poke-style spoons, Waimea vegetable crudo',
          'Hot — laulau-inspired bites, ember-grilled skewers',
          'Boards — Hawaiʻi Island cheeses, fruit, and charcuterie, rebuilt through the evening',
        ],
      },
      {
        heading: 'Price and format',
        body: [
          'Pupu service prices from the event band — quoted per head by format with staffing on the $55/$75 hourly lines. For parties past two hours, plan eight to ten pieces per guest; the quote does this math with you.',
        ],
        links: [{ label: 'Villa parties', href: 'occasions/villa-party' }],
      },
    ],
    faq: [
      {
        q: 'Can pupus replace dinner?',
        a: 'Yes, at the right piece count — a heavy pupu service runs dinner-equivalent pricing and the quote states it plainly.',
      },
    ],
    cta: QUOTE,
    keywords: ['pupu platters Kona', 'grazing catering Big Island'],
  },
  {
    slug: 'menus/kona-provenance',
    category: 'menu',
    parent: 'menus',
    title: 'Kona Farm to Table Dinner Menu — “Kohala Coast” Provenance',
    h1: '“Kohala Coast” — the provenance menu.',
    meta: {
      description:
        'The Big Island provenance menu: Parker Ranch beef, Hāmākua mushrooms, Kona Cold lobster, Waimea strawberries, Kona coffee — farm names printed only when verified.',
      ogImage: '/img/bigisland/menu-kohala.jpg',
    },
    intro:
      'One menu that reads like the island’s map: ranch country, the Hāmākua coast, the cold-water boats, the coffee belt. Farm names appear only when the produce verifiably came from that farm.',
    sections: [
      {
        heading: 'The courses and their sources',
        list: [
          'Hāmākua mushrooms — grown on the wet side, seared hard',
          'Kona Cold lobster — when the boats ran; the menu says when they did not',
          'Parker Ranch beef — Waimea’s ranch, the island’s herd',
          'Waimea strawberries — the upcountry crop',
          'Kona coffee finish — 100% Kona, origin law respected',
        ],
        body: [
          'Provenance is a promise with a paper trail. If a source is out of season, the menu names the substitute honestly — or drops the course.',
        ],
      },
      {
        heading: 'Price and tier context',
        body: [
          'The provenance menu runs PREMIUM ($190–$275 a guest) as standard; a shortened arc fits the top of CORE. Kona Cold lobster and out-of-season requests move the quote, and the quote says so.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is everything always available?',
        a: 'No — that is what provenance means. Kona Cold lobster is boat-dependent; strawberries are seasonal. Your menu is written the week of your dinner against actual supply.',
      },
    ],
    cta: QUOTE,
    keywords: ['Kona farm to table dinner menu', 'Big Island provenance menu'],
  },
  {
    slug: 'menus/kona-coffee',
    category: 'menu',
    parent: 'menus/kona-provenance',
    title: 'Kona Coffee Dinner Experience — The Bean, Taken Seriously',
    h1: 'The Kona coffee dinner.',
    meta: {
      description:
        'A Kona coffee dinner experience on the Big Island — 100% Kona coffee as a course-by-course ingredient, with the origin-labeling literacy the belt deserves.',
      ogImage: '/img/bigisland/menu-coffee.jpg',
    },
    intro:
      'Kona coffee is protected by state origin-labeling law and abused by blend marketing everywhere else. This dinner treats the real bean as an ingredient, not a souvenir.',
    sections: [
      {
        heading: 'The experience',
        list: [
          'A brewed tasting of the week’s estate lots — the belt’s differences, in cups',
          'Coffee as ingredient — rubbed, cured, and sauced through the savory courses',
          'The finish — a dessert built on the bean, not beside it',
        ],
        media: { src: '/img/bigisland/menu-coffee.jpg', alt: 'A dark ceramic cup of Kona coffee and scattered beans on raw black basalt in hard light', ratio: '16/10' },
      },
      {
        heading: 'The literacy part',
        body: [
          'Hawaiʻi law requires blends to disclose their Kona percentage — “Kona blend” can legally mean mostly other beans. We serve 100% Kona from named estates, and the menu says which.',
        ],
      },
      {
        heading: 'Price and tier',
        body: [
          'Runs as a PREMIUM-tier dinner ($190–$275 a guest) or an add-on flight to any CORE menu. South Kona farm settings are the natural stage.',
        ],
        links: [{ label: 'Captain Cook / South Kona', href: 'locations/captain-cook' }],
      },
    ],
    faq: [
      {
        q: 'Can the dinner run at a coffee farm?',
        a: 'Yes — several South Kona farms host private events. We coordinate with the farm on facilities and quote the venue logistics plainly.',
      },
    ],
    cta: QUOTE,
    keywords: ['Kona coffee dinner experience', 'Kona coffee farm dinner'],
  },
  {
    slug: 'menus/breakfast-and-brunch',
    category: 'menu',
    parent: 'menus',
    title: 'Brunch Menu Private Chef Kona — Mornings, Done Properly',
    h1: 'Breakfast and brunch.',
    meta: {
      description:
        'Private chef breakfast and brunch menus on the Big Island — recovery brunches, wedding-week mornings, and Stay Chef starts. Kona coffee, island fruit, real pastry.',
    },
    intro:
      'The wedding-week recovery, the Stay Chef morning, the day nobody wants to leave the lanai — brunch is where the Big Island’s fruit and coffee do the talking.',
    sections: [
      {
        heading: 'The spread',
        list: [
          'Kona coffee service — brewed properly, refilled without asking',
          'Island fruit — whatever the markets were actually selling that morning',
          'Hot line — eggs any way, ʻulu hash, the griddle working',
          'Pastry — made that morning, not unboxed',
        ],
      },
      {
        heading: 'Price and tier',
        body: [
          'Brunch runs from $150 a guest on the published card for staffed service; inside Stay Chef days it is simply part of the rhythm. Timing flexes to checkout and flights.',
        ],
        links: [{ label: 'Recovery brunch', href: 'weddings/recovery-brunch' }],
      },
    ],
    faq: [
      {
        q: 'How early can service start?',
        a: 'From 7:00 where the house allows — load-in before the house wakes is standard practice.',
      },
    ],
    cta: QUOTE,
    keywords: ['brunch menu private chef Kona', 'private breakfast chef Big Island'],
  },
  {
    slug: 'menus/vegetarian-vegan',
    category: 'menu',
    parent: 'menus',
    title: 'Vegan Private Chef Menu Big Island — The Whole-Food Register',
    h1: 'The plant-forward menu.',
    meta: {
      description:
        'Vegan and vegetarian private chef menus on Hawaiʻi Island — the east side’s whole-food tradition applied to the full dinner register, at the same published tiers.',
    },
    intro:
      'Plant-forward on this island is a cuisine with a history, not a restriction. ʻUlu, kalo, Hāmākua mushrooms, and Waimea produce carry a full coursed dinner without apology.',
    sections: [
      {
        heading: 'A representative arc',
        list: [
          'Hāmākua mushroom course — the east side’s answer to a main',
          'ʻUlu and kalo, treated with the respect starches deserve',
          'Waimea greens and strawberry finishes',
        ],
      },
      {
        heading: 'Same tiers, same card',
        body: [
          'Plant-forward menus run the identical published bands — CORE $150–$225 a guest, no dietary surcharge. At mixed tables the vegan arc runs parallel and labeled.',
        ],
        links: [{ label: 'Dietary service', href: 'services/dietary' }],
      },
    ],
    faq: [
      {
        q: 'Can you do fully raw dinners?',
        a: 'Yes — raw protocols are part of the wellness repertoire and price at the same tiers, with the format noted in the quote.',
      },
    ],
    cta: QUOTE,
    keywords: ['vegan private chef menu Big Island', 'vegetarian chef Hawaii'],
  },
  {
    slug: 'menus/gluten-free',
    category: 'menu',
    parent: 'menus',
    title: 'Gluten-Free Private Chef Big Island — Celiac-Safe, Fully Coursed',
    h1: 'The gluten-free menu.',
    meta: {
      description:
        'Gluten-free private chef menus on the Big Island with celiac protocol — separate prep surfaces, dedicated oil, and a stated chain from shopping bag to plate.',
    },
    intro:
      'Gluten-free here is not a pasta apology. The menu is built celiac-safe from the first course — separate prep, dedicated oil, and every sauce checked.',
    sections: [
      {
        heading: 'The protocol',
        body: [
          'Celiac bookings get a stated chain of custody: shopping list audited, prep surfaces separated, fryer oil dedicated or eliminated, plates labeled at mixed tables. The quote repeats the protocol so it is contractual, not conversational.',
        ],
      },
      {
        heading: 'The menu itself',
        body: [
          'Naturally gluten-free formats — the island’s fish, rice, ʻulu, and kalo base — make this the easiest dietary flag to cook luxuriously. Breads and pastry come from dedicated preparation or verified producers.',
        ],
        links: [{ label: 'The dietary guide', href: 'guides/dietary' }],
      },
    ],
    faq: [
      {
        q: 'Is there a gluten-free surcharge?',
        a: 'No. Dietary flags never carry a surcharge on the published card; if a specialty ingredient moves grocery cost, it shows at cost with receipts.',
      },
    ],
    cta: QUOTE,
    keywords: ['gluten free private chef Big Island', 'celiac-safe chef Hawaii'],
  },
  {
    slug: 'menus/kids',
    category: 'menu',
    parent: 'menus',
    title: 'Kids Menu Private Chef Big Island — Real Food, Early Seating',
    h1: 'The kids menu.',
    meta: {
      description:
        'Kids menus from a Big Island private chef — early seatings, real food scaled down, allergen discipline, and plates priced on their own line in the written quote.',
    },
    intro:
      'The early seating at six, real food scaled for small hands, and plates that get eaten — then the adults’ dinner begins in peace.',
    sections: [
      {
        heading: 'The approach',
        body: [
          'Kids’ plates come from the same market bag as the adult menu — milder, simpler, recognizable, but real. Allergen protocols hold on the kids’ side with separate prep, and the quote prices kids’ plates on their own line.',
        ],
      },
      {
        heading: 'For the long stay',
        body: [
          'On Stay Chef weeks the kids’ rhythm sets the household’s: early dinners, lunch provisioning, snacks that survive the beach. The week’s menu plan accounts for who actually eats chicken tenders and who is ready for the fish.',
        ],
        links: [{ label: 'Kid-friendly service', href: 'services/kids-menus' }],
      },
    ],
    faq: [
      {
        q: 'Do kids’ plates cost the same as adults’?',
        a: 'Typically less — the split is shown plainly in the written quote against your actual menu.',
      },
    ],
    cta: QUOTE,
    keywords: ['kids menu private chef Big Island', 'family chef Kona'],
  },
  {
    slug: 'menus/holiday',
    category: 'menu',
    parent: 'menus',
    title: 'Holiday Catering Menu Big Island — The December Table',
    h1: 'The holiday menu.',
    meta: {
      description:
        'Holiday private chef menus on the Big Island — Christmas and New Year tables built on the island’s winter season, on the published card with no holiday markup.',
    },
    intro:
      'The roast, the whole fish, the winter citrus — holiday tables on the island lean on what December actually grows here. No holiday markup; the calendar is the only thing that tightens.',
    sections: [
      {
        heading: 'The register',
        list: [
          'The roast — Parker Ranch beef or a proper bird, with the trimmings',
          'The whole fish — the island’s own centerpiece tradition',
          'Winter sides — Hāmākua mushrooms, upcountry vegetables, the first citrus',
        ],
      },
      {
        heading: 'Booking posture',
        body: [
          'Holiday-week dates book six-plus weeks out; the menu call happens once your date is locked. Pricing stays on the published card — peak dates fill, they do not mark up.',
        ],
        links: [{ label: 'Holiday dinners', href: 'occasions/holiday-dinner' }],
      },
    ],
    faq: [
      {
        q: 'Can you do a traditional holiday format?',
        a: 'Yes — traditional, island-leaning, or both at one table. The menu call settles it weeks before the shop.',
      },
    ],
    cta: QUOTE,
    keywords: ['holiday catering menu Big Island', 'Christmas dinner chef Kona'],
  },
  /* ---- Pricing & decision (Table 4.2.4b) ---- */
  {
    slug: 'private-chef-cost',
    category: 'pricing',
    parent: 'pricing',
    title: 'How Much Does a Private Chef Cost on the Big Island?',
    h1: 'What a private chef costs here, in numbers.',
    meta: {
      description:
        'Private chef cost on the Big Island: $110–$225 a guest on the published card against a marketplace band of $106–$176 and independent floors of $175. The full anatomy, in writing.',
    },
    intro:
      'The direct answer: $110–$225 a guest for dinner service, groceries inside. The useful answer is what the rest of the market charges and what every option actually includes.',
    sections: [],
    priceTable: {
      title: 'The Big Island price landscape',
      rows: [
        { label: 'Marketplace platforms (group tiers)', value: '$106–$176/guest', note: 'Aggregated listings; average booked menu ~$176' },
        { label: 'Independent premium floor (published)', value: 'from $175/guest', note: 'The island’s only other published per-person price' },
        { label: 'myCHEF ENTRY', value: 'from $110/guest', note: 'Groceries inside the band' },
        { label: 'myCHEF CORE', value: '$150–$225/guest', note: 'The standard villa dinner' },
        { label: 'myCHEF PREMIUM', value: '$190–$275/guest', note: 'Coursed fine dining' },
        { label: 'myCHEF CHEF’S TABLE', value: '$275–$400+/guest', note: 'Chef-led progression' },
      ],
      footnote: 'Plus 20% service and Hawaiʻi GET up to 4.7120%, each on its own line. The written quote is the confirmed total.',
    },
    cta: { ...QUOTE, secondaryLabel: 'The full rate card', secondaryHref: 'pricing' },
    keywords: ['how much does a private chef cost Big Island', 'private chef cost Hawaii'],
  },
  {
    slug: 'pricing/stay-chef-cost',
    category: 'pricing',
    parent: 'pricing',
    title: 'Stay Chef Big Island Cost Per Day — From $950, Worked',
    h1: 'Stay Chef cost, worked.',
    meta: {
      description:
        'Stay Chef on the Big Island from $950 a day plus groceries at cost — the worked math for three-, five-, and seven-day stays, itemized before you commit.',
    },
    intro:
      'From $950 a day for the chef, plus groceries at cost with receipts. Here is what a stay actually totals before you book it.',
    sections: [
      {
        heading: 'The worked week',
        list: [
          '3 DAYS — FROM $2,850 + GROCERIES AT COST',
          '5 DAYS — FROM $4,750 + GROCERIES AT COST',
          '7 DAYS — FROM $6,650 + GROCERIES AT COST',
        ],
        body: [
          'Grocery spend varies with your table — a family of six eating simply and a four-course household differ, and receipts show the difference. There is no published weekly discount; the written quote is the total.',
        ],
      },
      {
        heading: 'What the day rate covers',
        body: [
          'The chef’s day: shopping, cooking, serving, and cleanup across the agreed meal rhythm. Extra hosted evenings add staffing on the $55/$75 hourly lines. Extra meals beyond the plan are quoted same-day.',
        ],
        links: [{ label: 'Stay Chef service', href: 'stay-chef' }],
      },
    ],
    faq: [
      {
        q: 'Is Stay Chef cheaper than nightly dinners?',
        a: 'Usually past three dinners a week, yes — and the quote shows both structures against your actual headcount so you can compare honestly.',
      },
    ],
    cta: QUOTE,
    keywords: ['stay chef Big Island cost per day', 'weekly chef cost Hawaii'],
  },
  {
    slug: 'pricing/fee-stack',
    category: 'pricing',
    parent: 'pricing',
    title: 'The Fee Stack Explained — Service Charge, GET, Deposit',
    h1: 'The fee stack, line by line.',
    meta: {
      description:
        'Big Island private chef fees itemized: 20% service charge, Hawaiʻi GET up to 4.7120% through 12/31/2030, 50% deposit, voluntary gratuity, groceries at cost. Every line explained.',
    },
    intro:
      'Every myCHEF invoice carries the same five lines. Here is what each one is, why it exists, and why it sits on its own line instead of inside the price.',
    sections: [
      {
        heading: 'The five lines',
        list: [
          '20% SERVICE CHARGE — always its own line, disclosed conspicuously per Hawaiʻi’s service-charge statute posture',
          'HAWAIʻI GET UP TO 4.7120% — the maximum visible pass-on, valid through 12/31/2030, never the obsolete 4.166%',
          '50% DEPOSIT — locks the date, only after you have seen the numbers',
          'GRATUITY — always voluntary, never bundled',
          'GROCERIES — at cost, receipts on request',
        ],
      },
      {
        heading: 'Why itemized',
        body: [
          'Because a bundled price is a price you cannot audit. Hawaiʻi law requires service charges to be disclosed rather than disguised as gratuity; the GET is a tax with an actual rate; and your deposit should never precede the numbers it commits you to. Itemization is not a style — it is the compliance posture and the trust posture at once.',
        ],
        links: [{ label: 'The legal page', href: 'legal' }],
      },
      {
        heading: 'Against the market norm',
        body: [
          'Resort circuits charge 23–25% service; some venues add mandatory “gratuity” lines on top. Twenty percent, disclosed, with GET at its true rate, is the readable alternative.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the 20% service charge a tip?',
        a: 'No — it is a disclosed service charge, which Hawaiʻi law treats differently from gratuity. Tipping is always voluntary and separate.',
      },
      {
        q: 'Why 4.7120% and not 4.5%?',
        a: '4.5% is the GET owed; 4.7120% is the maximum rate a business may visibly pass on, accounting for the tax-on-tax effect, and it is valid through 12/31/2030. We publish the pass-on rate because that is what appears on your invoice.',
      },
    ],
    cta: QUOTE,
    keywords: ['Big Island service charge and GET explained', 'Hawaii GET private chef'],
  },
  {
    slug: 'pricing/travel-zones',
    category: 'pricing',
    parent: 'pricing',
    title: 'Big Island Private Chef Travel Fees — The Zone Map, Published',
    h1: 'Travel zones, published.',
    meta: {
      description:
        'Big Island private chef travel zones: Kona–Kohala base zone free, outside-corridor travel from $75, east side quoted in writing. The only published travel policy on the island.',
    },
    intro:
      'The island is 4,028 square miles. Nobody else on it publishes a travel policy; here is ours, as ledger lines.',
    sections: [
      {
        heading: 'The zones',
        list: [
          'BASE ZONE — KAILUA-KONA · KEAUHOU · HOLUALOA · WAIKOLOA · MAUNA LANI · MAUNA KEA · PUAKO — $0',
          'ZONE EDGE — CAPTAIN COOK / SOUTH KONA / NORTH KOHALA — FROM $75',
          'GATED — HUALĀLAI · KUKIO · KOHANAIKI — REFERRAL ACCESS, NO SURCHARGE',
          'EAST SIDE — WAIMEA · HILO · VOLCANO — QUOTED IN WRITING',
        ],
      },
      {
        heading: 'Why the east side is quoted',
        body: [
          'Kona to Hilo is 2.5–3 hours over the Saddle — roughly 76–95 miles. A flat surcharge would either overcharge Waimea (60–75 minutes) or underprice Volcano (2 hr 20 min+). So east-side work is priced per engagement, in writing, with the crew logistics stated as a readable line.',
        ],
        links: [{ label: 'The east-side quote page', href: 'pricing/east-side-quote' }],
      },
      {
        heading: 'Drive times from Kona',
        list: [
          'KONA → KEAUHOU · 15 MIN',
          'KONA → WAIKOLOA · 35 MIN',
          'KONA → MAUNA LANI · 40 MIN',
          'KONA → MAUNA KEA / HAPUNA · 45 MIN',
          'KONA → WAIMEA · 60–75 MIN',
          'KONA → HILO · 2 HR 30 MIN – 3 HR',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the travel fee per event or per day?',
        a: 'Per service day, stated in the quote. Multi-day Stay Chef bookings east-side usually fold travel into a residence arrangement — the quote shows both.',
      },
    ],
    cta: QUOTE,
    keywords: ['Big Island private chef travel fee', 'Kona Hilo chef travel'],
  },
  {
    slug: 'pricing/estimate',
    category: 'pricing',
    parent: 'pricing',
    title: 'Private Chef Big Island Price Estimate — Run the Numbers',
    h1: 'Estimate, then the real number.',
    meta: {
      description:
        'Estimate your Big Island private chef cost from published rates: guests × band, staffing lines, travel zone, then +20% service and GET. Estimate only — the written quote is the confirmed total.',
    },
    intro:
      'Run your own arithmetic on the published card. Every figure below is computed from the rate card — and labeled ESTIMATE ONLY, because the written quote is the confirmed total.',
    sections: [
      {
        heading: 'The quick math',
        list: [
          'DINNER FOR 2 (CORE) — $300–$450 · DATE NIGHT FIXED FROM $550',
          'DINNER FOR 4 (CORE) — $600–$900',
          'DINNER FOR 8 (CORE) — $1,200–$1,800',
          'DINNER FOR 12 (CORE) — $1,800–$2,700',
          'STAY CHEF WEEK (5 DAYS) — FROM $4,750 + GROCERIES',
        ],
        body: [
          'Add staffing where the format needs it ($55/$75 hourly, four-hour floor), travel where your address sits (from $75 outside the corridor), then 20% service and GET up to 4.7120% — each on its own line.',
        ],
      },
      {
        heading: 'Why estimates stop here',
        body: [
          'Menu choice, date, and kitchen reality move the final number — so the estimator stays honest and stops at arithmetic on published rates. The written quote is where the number becomes a commitment.',
        ],
        links: [{ label: 'Get the written quote', href: 'quote' }],
      },
    ],
    faq: [
      {
        q: 'How accurate is the estimate?',
        a: 'It is exact arithmetic on published rates — what it cannot know is your menu, your date’s demand, and your kitchen. The written quote resolves all three before you pay anything.',
      },
    ],
    cta: { label: 'Get the written quote', href: 'quote' },
    keywords: ['private chef Big Island price estimate', 'Big Island chef cost calculator'],
  },
  {
    slug: 'pricing/east-side-quote',
    category: 'pricing',
    parent: 'pricing/travel-zones',
    title: 'Hilo & East-Side Private Chef Cost — The Honest Quote Posture',
    h1: 'The east-side quote, explained.',
    meta: {
      description:
        'Why east-side Big Island chef service (Hilo, Volcano, Waimea) is quoted in writing: the 2.5–3 hour Saddle drive, crew logistics, and the same published food prices.',
    },
    intro:
      'East-side service is not a surcharge and not a refusal — it is a written quote that shows you the Saddle. Here is exactly why, and what it costs.',
    sections: [
      {
        heading: 'The geography, stated',
        body: [
          'Kona to Hilo is 2.5–3 hours over the Saddle; Volcano runs 2 hr 20 min and up; Waimea is 60–75 minutes. A crew cannot dodge that drive, so we price it as a readable line instead of inflating the per-guest rate for everyone.',
        ],
      },
      {
        heading: 'What stays identical',
        body: [
          'The food prices off the same published card — CORE $150–$225 a guest, ENTRY from $110, staffing $55/$75 hourly. The quote adds only the logistics: crew travel time, and for multi-day work, a residence arrangement that usually beats daily drives.',
        ],
        links: [{ label: 'Travel zones', href: 'pricing/travel-zones' }],
      },
      {
        heading: 'When east-side service makes sense',
        body: [
          'Events of a dozen guests and up, retreat programs of three days and up, and Stay Chef weeks all price well east-side. A dinner for two in Hilo from a Kona crew is the honest exception — the quote will show you why, and we will say so.',
        ],
        links: [{ label: 'Hilo service', href: 'locations/hilo' }],
      },
    ],
    faq: [
      {
        q: 'Do you ever decline east-side work?',
        a: 'Same-day east-side requests, yes — a crew cannot cross the Saddle responsibly on a few hours’ notice. With lead time, east-side service is regular work.',
      },
    ],
    cta: QUOTE,
    keywords: ['Hilo private chef cost', 'east side Big Island chef'],
  },
  {
    slug: 'compare/private-chef-vs-restaurant',
    category: 'guide',
    parent: 'private-chef-cost',
    title: 'Private Chef vs Restaurant in Kona — The Honest Comparison',
    h1: 'Chef at the villa, or a table in town.',
    meta: {
      description:
        'Private chef vs restaurant in Kona: per-person math, the sunset you cannot reserve, dietary control, and when the restaurant genuinely wins.',
    },
    intro:
      'A fair comparison, including the cases where the restaurant wins. The villa dinner is not always the answer — but for groups, occasions, and kitchens with a view, the math usually flips.',
    sections: [
      {
        heading: 'The per-person math',
        body: [
          'A Kona fine-dining table for eight runs entrees, drinks, tax, and tip into $120–$180 a person before anyone orders a second bottle. A CORE chef dinner for eight runs $150–$225 a guest with groceries inside, the menu built for your table, and no drive home.',
        ],
      },
      {
        heading: 'Where the restaurant wins',
        body: [
          'Two people who want the room’s energy, a last-minute evening with no booking lead, a night you want to be out. We say so plainly — Date Night starts from $550, and some Tuesdays the right answer is a good restaurant.',
        ],
      },
      {
        heading: 'Where the villa wins',
        body: [
          'Groups of six-plus, any dietary matrix, any occasion with a toast, any kitchen with a view, and any week where the restaurant circuit is the thing you came here to escape. The sunset from your lanai does not take reservations.',
        ],
        links: [{ label: 'What it costs', href: 'private-chef-cost' }],
      },
    ],
    faq: [
      {
        q: 'Is a private chef more expensive than dining out?',
        a: 'For two, often yes — Date Night is a fixed from-$550. For groups of six to twelve, the per-person gap narrows to nothing once restaurant drinks, tax, and tip are counted.',
      },
    ],
    cta: QUOTE,
    keywords: ['private chef vs restaurant Kona', 'private chef vs eating out Big Island'],
  },
  {
    slug: 'compare/private-vs-personal-chef',
    category: 'guide',
    parent: 'private-chef-cost',
    title: 'Private vs Personal Chef on the Big Island — Which Do You Need?',
    h1: 'Private or personal?',
    meta: {
      description:
        'The difference between a private and personal chef on the Big Island: events vs weekly service, per-guest pricing vs cook days, and how to choose.',
    },
    intro:
      'Same craft, different calendar. A private chef cooks your events; a personal chef cooks your week. Many Big Island households use both.',
    sections: [
      {
        heading: 'The private chef — the event',
        body: [
          'Dinners, wedding weeks, parties: per-guest pricing on the published card ($110–$225), the full shop-cook-serve-clean arc, one evening at a time. This is the vacation register.',
        ],
      },
      {
        heading: 'The personal chef — the calendar',
        body: [
          'Weekly cook days, meal prep, a stocked fridge: quoted per household, groceries at cost. This is the resident register — Kona–Kohala households and second-home owners who want the week handled.',
        ],
        links: [{ label: 'Personal chef service', href: 'services/personal-chef' }],
      },
      {
        heading: 'The overlap',
        body: [
          'Stay Chef sits between: the private chef’s service level on the personal chef’s schedule, from $950 a day for visitors and estate weeks.',
        ],
        links: [{ label: 'Stay Chef', href: 'stay-chef' }],
      },
    ],
    faq: [
      {
        q: 'Can one booking cover both?',
        a: 'Yes — a household week often mixes cook days and one plated dinner. The written quote prices each format on its own line.',
      },
    ],
    cta: QUOTE,
    keywords: ['difference between private and personal chef Big Island', 'private vs personal chef'],
  },
  {
    slug: 'compare/freelance-vs-mychef',
    category: 'guide',
    parent: 'trust',
    title: 'Hire a Chef Directly vs myCHEF Big Island — What the Fee Buys',
    h1: 'Direct hire, or the network.',
    meta: {
      description:
        'Hiring a freelance Big Island chef directly vs booking myCHEF: published prices, vetted crew, backup coverage, and the written quote — versus the direct-hire gamble.',
    },
    intro:
      'A direct-hire chef can be excellent. The question is what happens to your booking when they are sick, double-booked, or unreachable — and what you can check before you pay.',
    sections: [
      {
        heading: 'What the network adds',
        list: [
          'Published prices you can audit before inquiry — most independents quote blind',
          'Vetted, insured crew with documented kitchen standards',
          'Backup coverage — a bench, not a single point of failure',
          'The written quote as the confirmed total, with the fee stack itemized',
        ],
      },
      {
        heading: 'What direct hire can offer',
        body: [
          'A specific chef’s personal style, and occasionally a lower headline number — with the groceries, service charge, and cancellation risk reassembled later. If you know and trust the chef, direct can be right. If you are booking from the mainland for a date that cannot move, the network exists for you.',
        ],
        links: [{ label: 'How we vet chefs', href: 'how-we-vet-chefs' }],
      },
    ],
    faq: [
      {
        q: 'Is myCHEF more expensive than hiring directly?',
        a: 'Headline to headline, sometimes. Invoice to invoice, rarely — the direct quote often re-adds groceries, service, and travel after the fact. Ours are published before you ask.',
      },
    ],
    cta: QUOTE,
    keywords: ['hire a chef directly vs myCHEF Big Island', 'freelance chef Kona'],
  },
  {
    slug: 'compare/resort-wedding-vs-estate',
    category: 'guide',
    parent: 'weddings/wedding-cost',
    title: 'Resort Wedding vs Estate Catering on the Big Island — The Math',
    h1: 'Resort or estate: the arithmetic.',
    meta: {
      description:
        'Resort wedding catering vs estate catering on the Big Island, quantified: $7,500–$15,000 F&B minimums and 23–25% service, against from-$150/guest with 20% service on its own line.',
    },
    intro:
      'We publish both sides of this comparison because we win it. Here is the arithmetic nobody else on the island will print.',
    sections: [
      {
        heading: 'The resort side, from their own publications',
        list: [
          'KOHALA COAST RESORT PACKAGES — $5,000–$21,500+ BY TIER',
          'F&B MINIMUMS — $7,500–$15,000 PER EVENT (DAY-OF-WEEK DEPENDENT)',
          'SERVICE CHARGE — 23–25%',
          'MEALS PRICED SEPARATELY — FROM ~$120/PERSON AND UP',
        ],
        body: [
          'The resort package buys a beautiful, captive room: the food, the staff, and the rules come with it. For some couples that convenience is the product — say so honestly and book it.',
        ],
      },
      {
        heading: 'The estate side, from our rate card',
        list: [
          'FOOD — FROM $150/GUEST, GROCERIES INSIDE THE BAND',
          'STAFFING — $55/HR SERVER · $75/HR SOUS · 4-HR FLOOR',
          'SERVICE CHARGE — 20%, ITS OWN LINE',
          'GET — UP TO 4.7120%, ITS OWN LINE',
          'MINIMUMS — NONE PUBLISHED; SMALL WEDDINGS WELCOME',
        ],
        body: [
          'A 60-guest estate reception at $200 mid-band: $12,000 food, ~$1,850 staffing, 20% service, GET. The equivalent resort event starts at a $15,000 weekend minimum before the first staffing hour.',
        ],
      },
      {
        heading: 'What the estate path demands',
        body: [
          'A venue that allows outside catering, a kitchen or field-kitchen plan, rentals, and a rain decision in writing. The resort bundles all of it; the estate path itemizes all of it. Itemization is where the savings live.',
        ],
        links: [
          { label: 'Estate weddings', href: 'weddings/estate-wedding' },
          { label: 'Venue notes', href: 'weddings/venues' },
        ],
      },
    ],
    faq: [
      {
        q: 'Are resort packages ever the better value?',
        a: 'For large, formal receptions wanting one contract and a ballroom — yes, and we say so. For wedding weeks, rehearsals, and receptions under 75 at a private property, the estate path usually wins by thousands.',
      },
    ],
    cta: QUOTE,
    keywords: ['resort wedding catering vs estate catering Big Island', 'Kohala wedding cost comparison'],
  },
  /* ---- Guides (Table 4.2.4b) ---- */
  {
    slug: 'guides',
    category: 'guide',
    parent: '',
    title: 'Big Island Private Chef Guides — The Field Notes',
    h1: 'Guides and field notes.',
    meta: {
      description:
        'Big Island private chef guides: how the service works, lead times, Kona–Hilo logistics, groceries, kitchens, weather backup, and the island’s seasonality.',
    },
    intro:
      'Long-form answers to the questions that actually decide a Big Island booking — distances, dates, kitchens, and weather included.',
    sections: [
      {
        heading: 'Start here',
        list: [
          'How it works — the dinner, end to end',
          'How to hire a private chef on the Big Island',
          'What kitchen a private chef needs',
          'Are groceries included?',
        ],
        links: [
          { label: 'How it works', href: 'guides/how-it-works' },
          { label: 'How to hire', href: 'guides/how-to-hire' },
          { label: 'The villa kitchen', href: 'guides/villa-kitchen' },
          { label: 'Groceries at cost', href: 'guides/groceries-at-cost' },
        ],
      },
      {
        heading: 'The Big Island specials',
        list: [
          'Kona → Hilo: the 2.5–3 hour truth',
          'Booking lead times — when the calendar compresses',
          'Seasonality: whales, Ironman, Merrie Monarch',
          'Weather backup: 9 inches of rain vs 100',
        ],
        links: [
          { label: 'Kona–Hilo logistics', href: 'guides/kona-hilo-logistics' },
          { label: 'Booking lead times', href: 'guides/booking-lead-times' },
          { label: 'Seasonality', href: 'guides/seasonality' },
          { label: 'Weather backup', href: 'guides/weather-backup' },
        ],
      },
      {
        heading: 'The fine print, made readable',
        links: [
          { label: 'Dietary restrictions', href: 'guides/dietary' },
          { label: 'The cleanup standard', href: 'guides/cleanup-standard' },
          { label: 'Alcohol and your event', href: 'guides/alcohol-and-bar' },
        ],
      },
    ],
    cta: QUOTE,
    keywords: ['Big Island private chef guides'],
  },
  {
    slug: 'guides/how-it-works',
    category: 'guide',
    parent: '',
    title: 'How Does a Private Chef Work on the Big Island?',
    h1: 'How it works, end to end.',
    meta: {
      description:
        'How a Big Island private chef booking works: five quote fields, a written quote, a 50% deposit, then a chef who shops, cooks, serves, and leaves the kitchen clean.',
    },
    intro:
      'The whole arc fits in four steps — and none of them is “call for pricing.”',
    sections: [
      {
        heading: 'The four steps',
        list: [
          'FIVE FIELDS, TWO MINUTES — date, area, guests, dietary flags, the occasion',
          'THE WRITTEN QUOTE — menu, staffing, travel, 20% service, GET: the confirmed total',
          '50% DEPOSIT — locks the date, only after you have seen the numbers',
          'WE COOK. WE CLEAN. WE GO. — shop that morning, serve that evening, leave it clean',
        ],
      },
      {
        heading: 'The day itself',
        body: [
          'Your chef shops that morning — Kona markets and island producers where the menu calls for it — arrives before service, cooks in your kitchen, serves each course, and leaves the kitchen clean. You never see a box, a bag, or a bill you have not already approved.',
        ],
      },
      {
        heading: 'What we need from you',
        body: [
          'A real kitchen, a headcount that can flex by a couple, and your dietary flags at booking. Everything else — rentals, staffing, bar, timing — lives in the written quote.',
        ],
        links: [{ label: 'The villa kitchen', href: 'guides/villa-kitchen' }],
      },
    ],
    faq: [
      {
        q: 'How fast do quotes come back?',
        a: 'The flow takes two minutes on your side; the written quote follows after we check date, crew, and your kitchen — you will never receive a chat estimate dressed as a price.',
      },
    ],
    cta: { label: 'Start the five fields', href: 'quote' },
    keywords: ['how does a private chef work Big Island'],
  },
  {
    slug: 'guides/how-to-hire',
    category: 'guide',
    parent: 'guides',
    title: 'How to Hire a Private Chef on the Big Island',
    h1: 'How to hire, without regret.',
    meta: {
      description:
        'How to hire a private chef on the Big Island: what to check (published prices, insurance, the fee stack), what to ask, and the red flags worth walking away from.',
    },
    intro:
      'The Big Island chef market is mostly “call for a quote.” Here is how to hire well inside it — whoever you book.',
    sections: [
      {
        heading: 'What to check',
        list: [
          'Published prices — a number you can audit before you inquire',
          'The fee stack — service charge and GET on their own lines, at real rates',
          'Insurance and food-safety certification, stated plainly',
          'A written quote before any deposit — never the reverse',
        ],
      },
      {
        heading: 'What to ask',
        body: [
          'Ask about the kitchen requirement, the travel policy (on a 4,028-square-mile island, everyone has one — most just do not publish it), what happens if the chef is sick, and when the menu is written. The answers tell you whether you are hiring a business or a favor.',
        ],
      },
      {
        heading: 'Red flags',
        body: [
          'Prices that arrive only after a deposit, “service included” with no rate stated, review walls with no names, and anyone who says the east side is “no problem” without mentioning the drive.',
        ],
        links: [{ label: 'How we vet chefs', href: 'how-we-vet-chefs' }],
      },
    ],
    faq: [
      {
        q: 'How far ahead should I hire?',
        a: 'Two to four weeks normally; six-plus for December–March and Ironman week. The deposit locks the date only after you have seen the quote.',
      },
    ],
    cta: QUOTE,
    keywords: ['how to hire a private chef Big Island'],
  },
  {
    slug: 'guides/villa-kitchen',
    category: 'guide',
    parent: 'guides',
    title: 'What Kitchen Does a Private Chef Need? The Big Island Guide',
    h1: 'The kitchen gate.',
    meta: {
      description:
        'What kitchen a private chef needs on the Big Island: the honest spec list, why hotel rooms are declined, and why the island’s villa stock is ideal.',
    },
    intro:
      'We will not pretend a coffee maker and a minibar are a pass. Here is the actual spec — and the good news about Big Island rentals.',
    sections: [
      {
        heading: 'The spec',
        list: [
          'A full stove and oven — four burners minimum for coursed service',
          'Counter space — two clear meters is enough for most menus',
          'A working refrigerator with room for the day’s shop',
          'Running water and a sink that drains — the bar is that low, and some rooms miss it',
        ],
      },
      {
        heading: 'Why Big Island rentals pass',
        body: [
          'The Kona–Kohala corridor is built on villas, resort-residences, and condos with full kitchens — the island’s lodging stock is effectively designed for chef service. Hotel rooms without kitchens are declined, politely, every time.',
        ],
      },
      {
        heading: 'The check takes one message',
        body: [
          'Send your rental listing link with the inquiry. We confirm the kitchen from the photos and specs before quoting — and if it will not work, you hear that before money moves, not on service day.',
        ],
        links: [{ label: 'Start the quote', href: 'quote' }],
      },
    ],
    faq: [
      {
        q: 'Can you bring equipment?',
        a: 'Yes — we travel with the kit the menu needs. What we cannot substitute is a real stove and cold storage; those the venue must have.',
      },
    ],
    cta: QUOTE,
    keywords: ['what kitchen does a private chef need Big Island', 'villa kitchen requirements'],
  },
  {
    slug: 'guides/groceries-at-cost',
    category: 'guide',
    parent: 'guides',
    title: 'Are Groceries Included? Big Island Private Chef Costs Explained',
    h1: 'Groceries, at cost, with receipts.',
    meta: {
      description:
        'Are groceries included with a Big Island private chef? Dinners: inside the per-guest band. Stay Chef: at cost with receipts. Here is exactly how each works.',
    },
    intro:
      'Two honest answers depending on the product — and both end with receipts on request.',
    sections: [
      {
        heading: 'Dinners: inside the band',
        body: [
          'On per-guest service (ENTRY from $110, CORE $150–$225, and up), groceries are inside the band. The price you approved includes the food — that is the point of a per-guest price. Hawaiʻi groceries run roughly 31–53% above mainland prices; the band absorbs that, not you.',
        ],
      },
      {
        heading: 'Stay Chef: at cost, with receipts',
        body: [
          'Multi-day service bills groceries at cost because a week’s shopping honestly varies with your table. The chef shops, you pay what the market charged, and receipts are available on request — every one, itemized.',
        ],
        links: [{ label: 'Stay Chef', href: 'stay-chef' }],
      },
      {
        heading: 'Why this is unusual',
        body: [
          'The market norm is “food cost separate from hourly labor,” settled after the event. An all-in band or an at-cost pass-through with receipts are the two structures that cannot surprise you; we run only those two.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can I see the receipts?',
        a: 'Always — on request, every receipt, for any booking. Groceries at cost only works as a promise if it is auditable.',
      },
    ],
    cta: QUOTE,
    keywords: ['are groceries included private chef Big Island', 'private chef grocery cost'],
  },
  {
    slug: 'guides/booking-lead-times',
    category: 'guide',
    parent: 'guides',
    title: 'How Far in Advance to Book a Private Chef Big Island',
    h1: 'Lead times, honestly stated.',
    meta: {
      description:
        'How far ahead to book a Big Island private chef: two to four weeks normally, six-plus for December–March and wedding dates, eight-plus for Ironman week.',
    },
    intro:
      'The honest answer is a calendar, not a number. Here is the Big Island booking calendar as we actually experience it.',
    sections: [
      {
        heading: 'The ledger',
        list: [
          'NORMAL WEEKS — 2–4 WEEKS OF LEAD IS COMFORTABLE',
          'DECEMBER–MARCH (WHALE SEASON) — 6+ WEEKS; HOLIDAY WEEKS MORE',
          'WEDDING WEEKS — 3 MONTHS PREFERRED',
          'IRONMAN WEEK (OCTOBER) — 8+ WEEKS; KONA COMPRESSES FIRST',
          'MERRIE MONARCH (SPRING, HILO) — EAST-SIDE DATES COMPRESS',
        ],
      },
      {
        heading: 'Why the peaks compress',
        body: [
          'December to April stacks whale season, holidays, and snowbird season on one calendar. October’s Ironman fills Kona rentals and dinner tables in the same week. The rate card never changes with demand — but availability does, and the 50% deposit is what locks your date.',
        ],
      },
      {
        heading: 'Short-notice reality',
        body: [
          'Inside a week, the answer is often yes on the west side and honestly assessed east-side. Same-day east-side requests are declined — the Saddle does not negotiate.',
        ],
        links: [{ label: 'Seasonality guide', href: 'guides/seasonality' }],
      },
    ],
    faq: [
      {
        q: 'Can I book for next year?',
        a: 'Yes — far-out dates book at the current published card with the deposit locking the date. If rates are republished before your date, your written quote stands.',
      },
    ],
    cta: QUOTE,
    keywords: ['how far in advance to book a private chef Big Island', 'Big Island chef availability'],
  },
  {
    slug: 'guides/kona-hilo-logistics',
    category: 'guide',
    parent: 'guides',
    title: 'Kona to Hilo Private Chef Logistics — The 2.5–3 Hour Truth',
    h1: 'Kona → Hilo: the truth.',
    meta: {
      description:
        'The Kona–Hilo logistics truth for private chef service: 2.5–3 hours over the Saddle, same-day refusal honesty, and how east-side events are actually staffed and priced.',
    },
    intro:
      'The question that loses bookings on this island is not price — it is “will you actually come to Hilo?” Here is the complete, unhedged answer.',
    sections: [
      {
        heading: 'The distance ledger',
        list: [
          'KONA → HILO · 2 HR 30 MIN – 3 HR · SADDLE RD / DANIEL K. INOUYE HWY · 76–95 MI',
          'KONA → VOLCANO · 2 HR 20 MIN – 2 HR 40 MIN',
          'KONA → WAIMEA · 60–75 MIN · KOHALA MOUNTAIN RD',
        ],
        body: [
          'The Saddle crosses between Mauna Kea and Mauna Loa at over 6,000 feet. It is a real drive, in weather that is often different on the other side, and any operator who does not mention it is not planning it.',
        ],
      },
      {
        heading: 'The same-day refusal',
        body: [
          'We decline same-day east-side requests. Not from reluctance — from arithmetic: shop, load, cross the Saddle, cook, serve, clean, and return is a fourteen-hour day that produces bad service. A booking we cannot do well is a booking we do not take.',
        ],
      },
      {
        heading: 'How east-side service actually runs',
        body: [
          'With lead time, east-side work is regular: early load-in, shopping split between Kona and Hilo-side suppliers, and for multi-day programs, a chef-in-residence arrangement from $950 a day that usually beats the daily drive. The written quote states the logistics as readable lines.',
        ],
        links: [
          { label: 'East-side quote posture', href: 'pricing/east-side-quote' },
          { label: 'Hilo service', href: 'locations/hilo' },
        ],
      },
    ],
    faq: [
      {
        q: 'Is the food the same price east-side?',
        a: 'Yes — the published card applies island-wide. The quote adds only the crew logistics, stated as its own line.',
      },
      {
        q: 'Would you ever base a crew east-side?',
        a: 'For retreat programs and Stay Chef weeks, effectively yes — the chef stays east. That is the residence arrangement, and it is usually the best-priced structure past three days.',
      },
    ],
    cta: QUOTE,
    keywords: ['Kona to Hilo private chef logistics', 'Kona Hilo drive chef service'],
  },
  {
    slug: 'guides/seasonality',
    category: 'guide',
    parent: 'guides',
    title: 'Big Island Seasonality — Ironman, Merrie Monarch, Whale Season',
    h1: 'The island’s calendar.',
    meta: {
      description:
        'Big Island seasonality for chef bookings: whale season December–April, Ironman week in October, Merrie Monarch in spring — when demand compresses and how to plan.',
    },
    intro:
      'Three events govern this island’s booking calendar. Know them and the availability puzzle solves itself.',
    sections: [
      {
        heading: 'The mono datelines',
        list: [
          'WHALE SEASON — DEC → APR · PEAK VISITOR DEMAND, DEC/JAN FULLEST',
          'IRONMAN WORLD CHAMPIONSHIP — OCT · KONA RENTALS AND TABLES COMPRESS',
          'MERRIE MONARCH — SPRING · HILO FILLS; EAST-SIDE DATES TIGHTEN',
          'SEPTEMBER — THE QUIETEST MONTH; THE EASIEST BOOKINGS',
        ],
      },
      {
        heading: 'What compresses first',
        body: [
          'Chef calendars, premium rentals, and the Saturday dinner slots — in that order. December through March and Ironman week move six-plus weeks out early. The published rate card never changes with season; only the calendar tightens.',
        ],
        links: [{ label: 'Lead times', href: 'guides/booking-lead-times' }],
      },
      {
        heading: 'Weather as seasonality',
        body: [
          'The west side is the dry side — 9–12 inches of rain a year at the coast — while Hilo runs 100+. Outdoor service is the Kona default and the Hilo calculated risk, all year, every year.',
        ],
        links: [{ label: 'Weather backup', href: 'guides/weather-backup' }],
      },
    ],
    faq: [
      {
        q: 'Is there a best-value season?',
        a: 'September and the shoulder weeks of May and October (outside race week) offer the easiest availability at the same published prices — value here is measured in dates, not discounts.',
      },
    ],
    cta: QUOTE,
    keywords: ['Big Island seasonality Ironman Merrie Monarch', 'Big Island whale season'],
  },
  {
    slug: 'guides/dietary',
    category: 'guide',
    parent: 'guides',
    title: 'Dietary Restrictions & Private Chefs on the Big Island',
    h1: 'Dietary restrictions, handled.',
    meta: {
      description:
        'How a Big Island private chef handles dietary restrictions: eleven flags, separate allergen prep, protocol-labeled plates, and no dietary surcharge on the published card.',
    },
    intro:
      'The short version: tell us at booking, see it repeated in your written quote, watch it arrive labeled on the plate. The long version, below.',
    sections: [
      {
        heading: 'The eleven flags',
        body: [
          'Vegan, vegetarian, gluten-free, dairy-free, nut-free, shellfish-free, keto, paleo, low-FODMAP, halal-conscious, and celiac protocol. Flags are set in the quote fields, confirmed on the menu call, and labeled at the table — the chain is documented, not verbal.',
        ],
      },
      {
        heading: 'Allergen discipline',
        body: [
          'Anaphylactic allergies and celiac protocol get separate prep surfaces and dedicated oil. Where a rental kitchen cannot support a protocol safely, we say so at quote stage — that conversation is free and it is final.',
        ],
      },
      {
        heading: 'No dietary surcharge',
        body: [
          'The published bands apply to every flag. If a protocol moves grocery cost materially, it appears at cost with receipts — a receipt is a fact, a surcharge is a choice, and we do not make that choice.',
        ],
        links: [{ label: 'Dietary service', href: 'services/dietary' }],
      },
    ],
    faq: [
      {
        q: 'Can you handle multiple flags at one table?',
        a: 'Yes — mixed tables are the norm, especially reunions and retreats. Each plate is labeled; nobody announces their diet to the room.',
      },
    ],
    cta: QUOTE,
    keywords: ['dietary restrictions private chef Big Island', 'allergy-friendly chef Hawaii'],
  },
  {
    slug: 'guides/weather-backup',
    category: 'guide',
    parent: 'guides',
    title: 'Big Island Outdoor Dinner Weather Backup — 9 Inches vs 100',
    h1: 'The weather plan.',
    meta: {
      description:
        'Weather backup for outdoor private chef dinners on the Big Island: Kona’s 9–12 inches of annual rain vs Hilo’s 100+, and how every outdoor service carries a written plan B.',
    },
    intro:
      'One island, two climates: 9–12 inches of rain a year on the Kona coast, 100+ in Hilo. Outdoor service is planned per side of the Saddle, not per wish.',
    sections: [
      {
        heading: 'West side: the default is outside',
        body: [
          'The Kona–Kohala coast is one of the driest resort zones in the state. Outdoor tables are the default, and a backup is still written into every event spec — usually the covered lanai three steps away.',
        ],
      },
      {
        heading: 'East side: the backup is the plan',
        body: [
          'In Hilo and Volcano, covered service is designed first and the open-air version is the upgrade when the sky allows. This is not pessimism; at 100+ inches a year it is just reading the climate.',
        ],
      },
      {
        heading: 'Wind, and the decision point',
        body: [
          'Trade-wind afternoons affect exposed coast tables more than rain does west-side. Every event spec carries a decision time — typically midday — when the setup commits to plan A or plan B, with the call made on the forecast, not hope.',
        ],
      },
    ],
    faq: [
      {
        q: 'What happens if weather ruins the dinner?',
        a: 'Service moves under cover per the plan in your event spec. In genuinely severe weather we reschedule rather than serve a broken dinner — terms are on the legal page.',
        links: [{ label: 'Booking terms', href: '/bigisland/legal' }],
      },
    ],
    cta: QUOTE,
    keywords: ['Big Island outdoor dinner weather backup', 'Kona rain private chef'],
  },
  {
    slug: 'guides/cleanup-standard',
    category: 'guide',
    parent: 'guides',
    title: 'Private Chef Cleanup: What to Expect on the Big Island',
    h1: 'We cook. We clean. We go.',
    meta: {
      description:
        'What cleanup a Big Island private chef booking includes: the kitchen left service-clean, rentals handled, trash managed to house rules — the standard, in writing.',
    },
    intro:
      '“We cook. We clean. We go.” is a spec, not a slogan. Here is exactly what the kitchen looks like when we leave.',
    sections: [
      {
        heading: 'The standard',
        list: [
          'Cooking equipment washed, dried, put away — during service, not after midnight',
          'Counters, range, and sink left service-clean',
          'Leftovers packed, labeled, refrigerated',
          'Trash and recycling handled to the property’s house rules',
          'Rental items counted and staged for pickup',
        ],
      },
      {
        heading: 'What “service-clean” means',
        body: [
          'The kitchen returns to the state your rental agreement expects — typically better than check-in. Deep cleaning beyond service use (a week of family cooking before we arrived, say) is the house’s, honestly.',
        ],
      },
      {
        heading: 'Why it is in writing',
        body: [
          'Cleanup is the number-one anxiety in first-time bookings and the easiest to contract away. The standard above appears in every event spec, so it is owed to you, not hoped for.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do you clean between courses?',
        a: 'Yes — the wash-up runs continuously through service. When dessert lands, most of the kitchen is already done.',
      },
    ],
    cta: QUOTE,
    keywords: ['private chef cleanup what to expect Big Island'],
  },
  {
    slug: 'guides/alcohol-and-bar',
    category: 'guide',
    parent: 'guides',
    title: 'Can a Private Chef Serve Alcohol in Hawaiʻi County?',
    h1: 'Alcohol, answered carefully.',
    meta: {
      description:
        'Alcohol at private chef events on the Big Island: what Hawaiʻi County rules allow, host-supplied vs purchased service, and the bar cart option from $725/4hr.',
    },
    intro:
      'Liquor rules in Hawaiʻi are county-level and real. The honest answer is structured: what we pour, what you supply, and where the lines sit.',
    sections: [
      {
        heading: 'The working model',
        body: [
          'Most private events run on host-supplied alcohol with our bartenders or the bar cart providing service — you buy the bottles (or we buy at cost with receipts), we serve them professionally. The written quote states which model applies and why.',
        ],
      },
      {
        heading: 'The compliance line',
        body: [
          'Selling alcohol requires licensing; serving host-supplied alcohol at a private event in a private residence is a different matter. Where a format drifts toward sale — tickets, public admission, cash bars — we tell you it needs a permitted structure, and we do not book it as-is.',
        ],
      },
      {
        heading: 'The bar cart',
        body: [
          'The packaged cart runs from $725 per four hours, staffed, with the alcohol model written into the quote. Wine pairings for coursed dinners are quoted per bottle at cost.',
        ],
        links: [{ label: 'The bar cart', href: 'services/mobile-bar' }],
      },
    ],
    faq: [
      {
        q: 'Can you just handle all the alcohol for us?',
        a: 'We can purchase at cost with receipts as a provisioning service and serve it at your private event — the quote documents the arrangement so everyone, including the county’s rules, is respected.',
      },
    ],
    cta: QUOTE,
    keywords: ['can a private chef serve alcohol Hawaii County', 'private event bartender rules Kona'],
  },
  /* ---- Trust (Table 4.2.4b) ---- */
  {
    slug: 'about',
    category: 'trust',
    parent: '',
    title: 'About myCHEF Big Island — Kona–Kohala First',
    h1: 'About the Big Island team.',
    meta: {
      description:
        'myCHEF Big Island: a Kona-based chef crew serving the Kona–Kohala corridor first, the east side quoted honestly — part of one network across four Hawaiian islands.',
    },
    intro:
      'A Kona-based crew, one published rate card, and a simple operating posture: Kona–Kohala first, east side quoted, everything in writing.',
    sections: [
      {
        heading: 'Why the posture is the product',
        body: [
          'This island is 4,028 square miles with two markets 2.5–3 hours apart. Most operators blur that; we print it. The corridor is the base zone, the east side is quoted, gated communities run on referrals, and every number is published. Operating honestly about geography is what lets the prices be honest too.',
        ],
      },
      {
        heading: 'Part of one network',
        body: [
          'myCHEF runs four island teams — Oʻahu, Maui, Kauaʻi, and Hawaiʻi Island — on one standard: published prices, the fee stack itemized, the written quote as the confirmed total, no fake reviews ever.',
        ],
        links: [
          { label: 'The statewide hub', href: '/' },
          { label: 'How we vet chefs', href: 'how-we-vet-chefs' },
        ],
      },
      {
        heading: 'The naming note',
        body: [
          'We say Big Island because you search it. Hawaiʻi Island is its name. Both are correct here — titles lead with the visitor term; the island’s proper name runs through everything else.',
        ],
      },
    ],
    cta: QUOTE,
    keywords: ['about myCHEF Big Island'],
  },
  {
    slug: 'trust',
    category: 'trust',
    parent: '',
    title: 'The Honesty Register — myCHEF Big Island',
    h1: 'The honesty register.',
    meta: {
      description:
        'myCHEF Big Island’s trust page: published prices, the written quote as confirmed total, no fake reviews, and the island-specific things we tell you that competitors will not.',
    },
    intro:
      'Trust is not a testimonial wall. It is a list of commitments you can check — and a list of things we say that cost us bookings.',
    sections: [
      {
        heading: 'The four claims',
        list: [
          'Published prices, honored — the rate card is public and the quote matches it',
          'The written quote is the confirmed total — never a chat estimate',
          '20% service + GET up to 4.7120% on their own lines — always',
          'No fake reviews — ever — which is why this page has no testimonial carousel',
        ],
      },
      {
        heading: 'The Big Island additions',
        list: [
          'Kona → Hilo is 2.5–3 hours — we publish the drive, not a dodge',
          'East side is quoted in writing — distance and roster depth are stated, not hidden',
          'Gated communities need your referral — access is a process, not a promise',
          'Same-day east-side requests are declined — a booking we cannot do well is a booking we do not take',
        ],
      },
      {
        heading: 'Canonical policies',
        body: [
          'The network’s canonical trust corpus — vetting, reviews policy, what we do not do — lives on the hub; our copies carry the island substance and link up.',
        ],
        links: [
          { label: 'What we don’t do', href: 'what-we-dont-do' },
          { label: 'Network trust page', href: '/trust' },
        ],
      },
    ],
    cta: QUOTE,
    keywords: ['myCHEF honesty register Big Island', 'trust myCHEF'],
  },
  {
    slug: 'legal',
    category: 'trust',
    parent: '',
    title: 'Booking Terms — myCHEF Big Island',
    h1: 'Booking terms.',
    meta: {
      description:
        'myCHEF Big Island booking terms: written quote as confirmed total, 50% deposit, 20% service charge disclosure, GET up to 4.7120%, cancellation and weather posture.',
    },
    intro:
      'The terms, in field-manual order. The rate card leads with CORE $150–$225 and ENTRY from $110 — the same numbers everywhere on this site, including here.',
    sections: [
      {
        heading: 'The quote and the deposit',
        body: [
          'Every engagement is confirmed by a written quote itemizing menu, staffing, travel, the 20% service charge, and Hawaiʻi GET up to 4.7120% — that quote is the confirmed total. A 50% deposit locks the date, taken only after you have seen the numbers.',
        ],
      },
      {
        heading: 'The service charge, disclosed',
        body: [
          'The 20% service charge is disclosed conspicuously and itemized on its own line, consistent with Hawaiʻi’s service-charge disclosure posture. It is not a gratuity; gratuity is always voluntary and never bundled.',
        ],
      },
      {
        heading: 'Cancellation and weather',
        body: [
          'Cancellation terms are stated in your written quote by date and scale. Severe weather reschedules rather than serves a broken dinner — the decision point and plan are written into every event spec.',
        ],
        links: [{ label: 'The fee stack, explained', href: 'pricing/fee-stack' }],
      },
    ],
    cta: QUOTE,
    keywords: ['myCHEF booking terms Big Island'],
  },
  {
    slug: 'faq',
    category: 'trust',
    parent: '',
    title: 'Private Chef Big Island FAQ — Every Question, Answered',
    h1: 'Questions, answered.',
    meta: {
      description:
        'Big Island private chef FAQ: cost, groceries, travel zones, east-side service, dietary handling, alcohol, lead times, and what the written quote guarantees.',
    },
    intro:
      'The questions that arrive every week, answered the way we answer them on the phone.',
    sections: [],
    faq: [
      {
        q: 'How much does a private chef cost on the Big Island?',
        a: 'Dinner service runs $110–$225 a guest on the published card (ENTRY from $110, CORE $150–$225), Premium $190–$275, Chef’s Table $275–$400+. Date Night starts from $550, Stay Chef from $950 a day. Plus 20% service and GET up to 4.7120%, each on its own line.',
        links: [{ label: 'The rate card', href: '/bigisland/pricing' }],
      },
      {
        q: 'Do you serve Hilo and the east side?',
        a: 'Yes — quoted in writing. Kona to Hilo is 2.5–3 hours over the Saddle, so east-side service carries the crew logistics as a readable line. The food prices are identical island-wide.',
        links: [{ label: 'East-side quote posture', href: '/bigisland/pricing/east-side-quote' }],
      },
      {
        q: 'Are groceries included?',
        a: 'On per-guest dinners, yes — inside the band. On Stay Chef engagements, groceries bill at cost with receipts. Either way: receipts on request.',
      },
      {
        q: 'What kitchens do you work in?',
        a: 'Villas, condos, resort-residences, and estates with full kitchens. Hotel rooms without kitchens are declined — a coffee maker and a minibar are not a pass.',
        links: [{ label: 'The kitchen spec', href: '/bigisland/guides/villa-kitchen' }],
      },
      {
        q: 'How far ahead should I book?',
        a: 'Two to four weeks in normal weeks, six-plus for December–March, three months for wedding weeks, eight-plus for Ironman week. The 50% deposit locks the date after you have seen the quote.',
      },
      {
        q: 'Can you handle dietary restrictions?',
        a: 'Eleven dietary flags, separate prep for allergens, protocol-labeled plates, and no dietary surcharge on the published card.',
      },
      {
        q: 'Can you serve alcohol?',
        a: 'We serve host-supplied alcohol at private events and run a staffed bar cart from $725 per four hours. The quote states which model applies — county rules are respected, not skirted.',
        links: [{ label: 'Alcohol, explained', href: '/bigisland/guides/alcohol-and-bar' }],
      },
      {
        q: 'Is the quote really the final price?',
        a: 'Yes. The written quote itemizes everything — menu, staffing, travel, 20% service, GET — and that document is the confirmed total. Nothing appears on the invoice that was not in the quote.',
      },
    ],
    cta: QUOTE,
    keywords: ['private chef Big Island FAQ'],
  },
  {
    slug: 'contact',
    category: 'trust',
    parent: '',
    title: 'Contact myCHEF Big Island — Quote Form + WhatsApp',
    h1: 'Contact, two ways.',
    meta: {
      description:
        'Contact myCHEF Big Island: the five-field quote form for a written quote, or WhatsApp for a fast conversation. Kona–Kohala first; east side quoted.',
    },
    intro:
      'There is no phone queue and no “request info” black hole. Two channels, both answered by the people who will actually cook.',
    sections: [
      {
        heading: 'The quote form',
        body: [
          'Five fields, two minutes: date, area, guests, dietary flags, the occasion. What comes back is a written quote — the confirmed total, itemized.',
        ],
        links: [{ label: 'Start the quote', href: 'quote' }],
      },
      {
        heading: 'WhatsApp',
        body: [
          'For the fast question — “is this date open,” “does this rental’s kitchen work,” “can you do Hilo” — WhatsApp (+971 55 174 4849) gets you a direct answer, usually with the quote flow attached when the answer turns into a booking.',
        ],
        links: [
          { label: 'WhatsApp +971 55 174 4849', href: 'https://wa.me/971551744849' },
          { label: 'Open the quote flow', href: 'quote' }
        ],
      },
      {
        heading: 'For managers, concierges, and planners',
        body: [
          'Villa managers, gated-community concierges, and wedding planners have a partner channel with direct lines and standing arrangements.',
        ],
        links: [{ label: 'Partners', href: 'partners' }],
      },
    ],
    cta: QUOTE,
    keywords: ['contact myCHEF Big Island'],
  },
  {
    slug: 'what-we-dont-do',
    category: 'trust',
    parent: 'trust',
    title: 'What myCHEF Will Not Do on the Big Island',
    h1: 'What we don’t do.',
    meta: {
      description:
        'What myCHEF Big Island will not do: fake reviews, hidden fees, hotel-room “kitchens,” same-day east-side promises, and quotes that change after the deposit.',
    },
    intro:
      'The negative space of a business is its real shape. These are the refusals, in writing.',
    sections: [
      {
        heading: 'The refusals',
        list: [
          'NO FAKE REVIEWS — no testimonial carousel exists on this site because none is verified',
          'NO HIDDEN FEES — every line itemized before the deposit',
          'NO HOTEL-ROOM DINNERS — a coffee maker and a minibar are not a kitchen',
          'NO SAME-DAY EAST-SIDE SERVICE — the Saddle does not negotiate',
          'NO PRICE DRIFT AFTER THE QUOTE — the written quote is the confirmed total',
          'NO OBSOLETE TAX RATES — GET is up to 4.7120%, never the expired 4.166%',
        ],
      },
      {
        heading: 'Why publish refusals',
        body: [
          'Because each of these is a thing a competitor quietly does. The cheapest trust we build is the kind that costs us a booking — so the refusals are printed where you will find them before you ask.',
        ],
        links: [{ label: 'The honesty register', href: 'trust' }],
      },
    ],
    cta: QUOTE,
    keywords: ['what myCHEF will not do Big Island'],
  },
  {
    slug: 'coverage',
    category: 'trust',
    parent: 'locations',
    title: 'Big Island Service Area Map — Kona–Kohala First, East Side Quoted',
    h1: 'Coverage, mapped.',
    meta: {
      description:
        'myCHEF Big Island coverage: the Kona–Kohala base zone with drive times, the from-$75 zone edge, gated-community referral access, and east-side (Hilo, Volcano, Waimea) quoted service.',
    },
    intro:
      'One island, two markets, 4,028 square miles. This is the complete map of where we cook and what each zone does to the quote.',
    sections: [
      {
        heading: 'WEST — base zone, no travel line',
        list: [
          'KAILUA-KONA · 19.64° N — THE BASE',
          'KEAUHOU · 15 MIN · HOLUALOA · 20 MIN',
          'WAIKOLOA · 35 MIN · MAUNA LANI · 40 MIN · MAUNA KEA/HAPUNA · 45 MIN',
          'HUALĀLAI / KUKIO / KOHANAIKI · GATED — REFERRAL ACCESS, NO SURCHARGE',
        ],
      },
      {
        heading: 'ZONE EDGE — from $75',
        body: [
          'Captain Cook and South Kona’s coffee belt, North Kohala toward Hawi — single-evening service carries the published from-$75 line; multi-day bookings often absorb it.',
        ],
      },
      {
        heading: 'EAST — its own written quote',
        list: [
          'WAIMEA / KAMUELA · 60–75 MIN',
          'HILO · 2 HR 30 MIN – 3 HR',
          'VOLCANO · 2 HR 20 MIN – 2 HR 40 MIN',
        ],
        body: [
          'East-side food prices are identical to the west; the quote adds crew logistics as a readable line. Retreat and multi-day programs usually run chef-in-residence, which prices better than the daily drive.',
        ],
        links: [{ label: 'Travel zones in full', href: 'pricing/travel-zones' }],
      },
    ],
    faq: [
      {
        q: 'Do you cover Kaʻū or the far south?',
        a: 'Quoted case by case — Kaʻū is beyond even the east-side envelope, and the quote will reflect the real logistics or decline honestly.',
      },
    ],
    cta: QUOTE,
    keywords: ['Big Island service area map', 'myCHEF coverage Hawaii Island'],
  },
  {
    slug: 'how-we-vet-chefs',
    category: 'trust',
    parent: 'trust',
    title: 'How myCHEF Vets Chefs on the Big Island',
    h1: 'How chefs make the roster.',
    meta: {
      description:
        'How myCHEF vets Big Island chefs: credential checks, trial services, insurance, kitchen-standard documentation, and the bench that makes backup coverage real.',
    },
    intro:
      'The roster is the product. Here is how a chef gets on it — and how they stay.',
    sections: [
      {
        heading: 'The gate',
        list: [
          'Verified professional kitchen history — references called, not read',
          'Food-safety certification current and documented',
          'Trial services cooked for the network before client dates',
          'Insurance carried; documentation renewed on schedule',
        ],
      },
      {
        heading: 'The bench',
        body: [
          'A network exists so one chef’s flu is not your cancelled anniversary. The Big Island roster is built for backup coverage — the written quote names a standard, not a single point of failure.',
        ],
      },
      {
        heading: 'Staying on',
        body: [
          'Post-service debriefs on every booking, documented kitchen standards, and a simple rule: a chef who would not re-book the client does not stay on the roster.',
        ],
        links: [{ label: 'The honesty register', href: 'trust' }],
      },
    ],
    cta: QUOTE,
    keywords: ['how myCHEF vets chefs Big Island'],
  },
  /* ---- Partners (Table 4.2.4b) ---- */
  {
    slug: 'partners',
    category: 'partner',
    parent: '',
    title: 'Partner with myCHEF Big Island — Managers, Concierges, Planners',
    h1: 'The partner channel.',
    meta: {
      description:
        'Partner with myCHEF Big Island: villa managers, gated-community concierges, and wedding planners get direct lines, itemized quotes, and published prices their clients can check.',
    },
    intro:
      'Three partner rails run the Big Island: the managers who control the villa funnel, the concierges who hold the gated gates, and the planners who own the wedding calendar.',
    sections: [
      {
        heading: 'Villa managers',
        body: [
          'Chef packages your guests can verify — published prices, kitchen-spec checks on your listings, and checkout-condition kitchens after every service.',
        ],
        links: [{ label: 'For villa managers', href: 'partners/villa-managers' }],
      },
      {
        heading: 'Concierges',
        body: [
          'The referral channel into Hualālai, Kukio, and Kohanaiki — we come with the paperwork and leave with the kitchen clean.',
        ],
        links: [{ label: 'For concierges', href: 'partners/concierges' }],
      },
      {
        heading: 'Wedding planners',
        body: [
          'Itemized quotes that drop straight into your budget deck, crew that knows the corridor venues, and a published 20% service line your clients can audit.',
        ],
        links: [{ label: 'For wedding planners', href: 'partners/wedding-planners' }],
      },
    ],
    cta: QUOTE,
    keywords: ['partner with myCHEF Big Island'],
  },
  {
    slug: 'partners/villa-managers',
    category: 'partner',
    parent: 'partners',
    title: 'Private Chef Partner for Big Island Villa Managers',
    h1: 'For villa managers.',
    meta: {
      description:
        'A private chef partner for Big Island villa and vacation-rental managers: guest-facing chef packages with published prices, kitchen-spec audits, and clean checkouts.',
    },
    intro:
      'Rental companies already bundle chef referrals into concierge packages — the gap is a partner whose prices your guests can check and whose kitchens your inspectors will not flag.',
    sections: [
      {
        heading: 'What your guests get',
        body: [
          'The published card: villa dinners $150–$225 a guest, ENTRY from $110, Stay Chef from $950 a day, Date Night from $550. Your concierge quotes real numbers instead of “we know a guy,” and the written quote is the confirmed total.',
        ],
      },
      {
        heading: 'What you get',
        list: [
          'Kitchen-spec audits on your listings — we tell you which units pass the gate',
          'House-rules compliance confirmed before every event-format booking',
          'Checkout-condition kitchens — service-clean is the written standard',
          'One contact, documented load-in and access for every service',
        ],
      },
      {
        heading: 'The arrangement',
        body: [
          'Referral structures are set partner by partner and documented — no hidden markups on the guest-facing card, ever. The published prices stay the published prices.',
        ],
      },
    ],
    cta: { label: 'Start a partner conversation', href: 'quote' },
    keywords: ['private chef partner for Big Island villa managers', 'Kona rental chef package'],
  },
  {
    slug: 'partners/concierges',
    category: 'partner',
    parent: 'partners',
    title: 'Concierge Chef Referral Program Big Island — The Gated Gate',
    h1: 'For concierges.',
    meta: {
      description:
        'The myCHEF concierge referral program on the Big Island: gated-community access handled (Hualālai, Kukio, Kohanaiki), published prices for your members, paperwork in order.',
    },
    intro:
      'You hold the gate — Hualālai, Kukio, Kohanaiki, the club communities. We come through it correctly: your referral, our paperwork, the published card.',
    sections: [
      {
        heading: 'The referral mechanics',
        body: [
          'Your member or guest connects us; we complete vendor registration, insurance documentation, and gate coordination through your office. Entry, parking, and load-in run on your house rules — the process is routine because we do it constantly.',
        ],
        links: [{ label: 'Gated-community service', href: 'locations/hualalai' }],
      },
      {
        heading: 'Why published prices matter to you',
        body: [
          'A concierge’s risk is the referral that embarrasses. Published prices ($150–$225 a guest, Stay Chef from $950/day), an itemized written quote, and a 20% service line your members can audit mean the number they see is the number they pay.',
        ],
      },
    ],
    cta: { label: 'Open the referral channel', href: 'quote' },
    keywords: ['concierge chef referral program Big Island', 'Hualalai concierge chef'],
  },
  {
    slug: 'partners/wedding-planners',
    category: 'partner',
    parent: 'partners',
    title: 'Big Island Wedding Planner Catering Partner',
    h1: 'For wedding planners.',
    meta: {
      description:
        'A catering partner for Big Island wedding planners: itemized written quotes for your budget deck, the independent-venue circuit, and wedding-week service from $150 a guest.',
    },
    intro:
      'The independent-venue circuit — ranches, coffee farms, estates, Volcano lodges — runs on planners who need a caterer whose numbers survive client scrutiny. Ours are published.',
    sections: [
      {
        heading: 'What lands in your budget deck',
        body: [
          'An itemized written quote: food from $150 a guest, staffing $55/$75 hourly with the four-hour floor, 20% service on its own line, GET up to 4.7120% on its own. Your client can audit every line against the public rate card — the comparison against resort minimums writes itself.',
        ],
        links: [{ label: 'Resort vs estate math', href: 'compare/resort-wedding-vs-estate' }],
      },
      {
        heading: 'The working relationship',
        body: [
          'We take your timeline as the spec: ceremony-adjacent service, photo-window holds, the recovery brunch timed to checkout. East-side venues are quoted with the drive stated — no day-of surprises from our side, ever.',
        ],
        links: [{ label: 'The wedding week', href: 'weddings/wedding-week' }],
      },
    ],
    cta: { label: 'Start a planner conversation', href: 'quote' },
    keywords: ['Big Island wedding planner catering partner'],
  },
];
