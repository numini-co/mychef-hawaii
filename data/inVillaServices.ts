import type { IslandId } from './islands';

/**
 * In-Villa Services silo — guest-facing, stay-based food, beverage and service
 * staffing for the whole stay. Adapted from the provided Villa Operations copy
 * package to Hawaiʻi (four islands, USD, published rate card).
 *
 * Additive registry — NOT read by scripts/unique-audit.mjs, so it cannot fight
 * the audit's per-registry uniqueness counts. Pages use the NO-PHOTO paper
 * header (like /estimate), so no unique hero file is required; `heroPhotoKey`
 * is reserved so a generated hero can drop in later.
 *
 * Honesty guardrails baked in: no reviews/ratings/testimonials, zero fabricated
 * counts. Every published number is derived from data/rateCard.ts. Barista and
 * provisioning carry NO published price (no Hawaiʻi benchmark) and are quoted in
 * writing. Signature dinners = groceries inside the per-guest band; stay chef /
 * weekly / multi-day = chef fee + groceries at cost with receipts.
 */

export type InVillaId =
  | 'hub'
  | 'villa-team'
  | 'weekly-private-chef'
  | 'butlers'
  | 'waiters'
  | 'bartenders'
  | 'barista'
  | 'villa-provisioning'
  | 'breakfast-service';

/** Which published rate-card blocks a page renders. Quote-only pages omit all. */
export type RateBlockKind = 'stay-chef' | 'staffing' | 'bar' | 'vacation-chef' | 'weekly-meal-prep';

export interface InVillaSection {
  h2: string;
  paras: string[];
}

export interface InVillaFaq {
  q: string;
  a: string;
}

export interface InVillaLink {
  label: string;
  path: string;
}

export interface InVillaPage {
  id: InVillaId;
  /** Slug under /in-villa-services ('' for the hub). */
  slug: string;
  /** Full apex path. */
  path: string;
  /** JSON-LD Service serviceType. */
  serviceType: string;
  /** Breadcrumb leaf name (hub omits). */
  breadcrumbName: string;
  kicker: string;
  h1: string;
  lede: string;
  /** /quote?service= value. */
  quoteService: string;
  primaryCtaLabel: string;
  /** WhatsApp opener intent. */
  waIntent: string;
  sections: InVillaSection[];
  rateBlocks: RateBlockKind[];
  rateHeading?: string;
  rateIntro?: string;
  /** For barista/provisioning: honest "no published price" note. */
  quoteOnlyNote?: string;
  faqs: InVillaFaq[];
  related: InVillaLink[];
  /** Reserved for a future generated hero. Null today (paper header). */
  heroPhotoKey?: string | null;
  /** What a generated hero should depict when one is produced. */
  wantsHeroImage: string;
}

const HUB = '/in-villa-services';

/** Honest trust chips — published policy only, no invented counts or ratings. */
export const IN_VILLA_TRUST: readonly string[] = [
  'Published starting prices',
  'Written quote is the total',
  'Groceries at cost with receipts',
  '20% service + Hawaiʻi GET, itemized',
  '50% deposit locks the date',
  'Gratuity always voluntary',
];

/** Named villa zones we cook in, by island (for copy + Service areaServed). */
export const IN_VILLA_AREAS: Record<IslandId, string[]> = {
  oahu: ['Honolulu', 'Waikīkī', 'Kāhala', 'Kailua', 'Ko Olina', 'North Shore'],
  maui: ['Wailea', 'Kāʻanapali', 'Lahaina', 'Kīhei', 'Kapalua', 'Mākena'],
  kauai: ['Princeville', 'Hanalei', 'Poʻipū', 'Kapaʻa'],
  bigisland: ['Kona', 'Kohala Coast', 'Waimea', 'Waikoloa'],
};

const STAY_DUAL_MODEL =
  'Two honest grocery models sit side by side. A one-night signature dinner is priced per guest with the food inside that band. A stay service — a chef for the week, breakfast every morning, a full villa team — bills the staff at published rates and the groceries separately at cost, with receipts, never marked up.';

const CATERING_VS_STAY =
  'Know the two products. One-off catering — a single event dinner, a wedding reception, a party — is a per-person quote with the food included. Stay service — this silo — staffs your villa across the stay: staff time at published rates, groceries extra at cost with receipts. Not sure which fits? Tell us the occasion and we quote the right one, or both side by side.';

export const inVillaPages: InVillaPage[] = [
  // ── HUB ──────────────────────────────────────────────────────────────────
  {
    id: 'hub',
    slug: '',
    path: HUB,
    serviceType: 'In-villa hospitality services',
    breadcrumbName: 'In-Villa Services',
    kicker: 'Four islands · In-villa services',
    h1: 'In-Villa Services in Hawaiʻi: chefs, butlers and complete villa teams for your stay',
    lede: 'You rent the villa. We run the food, drinks and hospitality service inside it — for one dinner, or for every day of your stay. One coordinator, one written quote, groceries at cost with receipts.',
    quoteService: 'villa-team',
    primaryCtaLabel: 'Build my villa team',
    waIntent: 'a villa team for our whole stay',
    sections: [
      {
        h2: 'The gap most Hawaiʻi villas leave open',
        paras: [
          'Most vacation-rental homes on Oʻahu, Maui, Kauaʻi and Hawaiʻi Island come with a beautiful kitchen and almost no one to run it. The pool is serviced, the yard is trimmed — but breakfast, lunch, dinner, coffee, drinks and table service are left to whoever in your group draws the short straw.',
          'myCHEF in-villa services close that gap. We supply the chefs, servers, bar staff, baristas and kitchen support that turn a rented estate into a fully serviced place to stay. You tell us your dates, your house and how you like to eat; we build the team around your stay, run it under one coordinator, and charge groceries at cost with receipts. One quote, one coordinator, one service standard — from the first morning coffee to the last cleared plate.',
        ],
      },
      {
        h2: 'What the service covers',
        paras: [
          'A chef and kitchen team working from your villa kitchen — menu planning before you arrive, daily cooking, and a kitchen left clean after every service. Looking for a chef for a single evening instead? That is a one-night signature dinner; this silo is staffing for the whole stay.',
          'Groceries and provisioning: we shop for you, before arrival and mid-stay, charging ingredients at cost with every receipt handed over — no markup, no handling fee buried in the food bill.',
          'Breakfast, lunch and dinner, from an early chef-cooked breakfast to multi-course evenings; coffee and drinks, from a morning barista to sunset bar service; table service and guest care from servers who set, serve and clear every meal; and full kitchen cleanup after each service.',
        ],
      },
      {
        h2: 'Who it is for',
        paras: [
          'Families who want their holiday mornings back — breakfast cooked, kids fed first, no supermarket runs. Groups of friends sharing a house who want restaurant-level dinners without splitting up for cars and reservations. Guests who chose a private estate over a resort and expect the service to match.',
          'Executive and corporate groups using a villa as a working base, with timed meals around the agenda. Wedding-week parties filling a house for the days around the ceremony — welcome dinners, recovery breakfasts, the night-before gathering. And multi-generational stays, where feeding grandparents, parents and children three times a day is a logistics problem, not a holiday.',
          'If your group is eight people or eighty, the model is the same: tell us the stay, we build the team.',
        ],
      },
      {
        h2: 'How it works',
        paras: [
          'One — tell us your stay: dates, island and area, headcount, which meals you want covered, any dietary requirements. A message is enough to start.',
          'Two — we build the team: within a day you receive one written quote showing which roles, which days and what it costs, built from published rates with groceries at cost on top. Adjust the roster until it fits.',
          'Three — one coordinator runs it: once confirmed (50% deposit, balance the day before), a single coordinator manages the roster, the shopping, the timing and any changes. You never manage staff — you talk to one person.',
        ],
      },
      {
        h2: 'Pricing methodology',
        paras: [
          'There are no invented package prices on this page. Every quote is assembled from the published rate card, in three tiers that map to how groups actually book.',
          'Essential Stay — chef and kitchen assistant: the published Stay Chef day rate, groceries at cost. For groups who want the food handled and will pour their own drinks. Full Service Stay — chef, assistant and servers or a lead host: the kitchen plus the table, meals served, cleared, and the day run for you. Complete F&B Team — custom: chef, assistant, servers, barista mornings, bar on selected evenings, built line by line from the rate table so you see exactly what each role costs.',
          STAY_DUAL_MODEL,
        ],
      },
      {
        h2: 'Stay service vs one-off catering',
        paras: [CATERING_VS_STAY],
      },
    ],
    rateBlocks: ['stay-chef', 'staffing', 'bar', 'vacation-chef'],
    rateHeading: 'The published roster',
    rateIntro:
      'Every in-villa team is assembled from these roles. Where a rate is published, it is shown here — the same rate applies whether you book a role alone or inside a team. Barista and provisioning carry no published price yet and are quoted in writing.',
    faqs: [
      {
        q: 'Do Hawaiʻi vacation rentals come with staff?',
        a: 'Most include housekeeping and a property manager — but not a trained chef, server, barista or bar team. That layer is exactly what we supply, staffed around your dates rather than the property’s own roster.',
      },
      {
        q: 'Can you staff our villa for a whole week or longer?',
        a: 'Yes. Multi-day and full-stay staffing is the core of this service. The team rhythm continues for as long as your stay runs, and multi-day rosters are quoted as one written package.',
      },
      {
        q: 'Are groceries included in the price?',
        a: 'For stay services, no — and deliberately so. Staff time is billed at published rates and groceries are charged at cost with receipts, no markup. For a one-night signature dinner, the food is inside the per-guest band instead.',
      },
      {
        q: 'Can you handle dietary requirements?',
        a: 'Yes — vegan, gluten-free, allergies, kids’ meals and mixed tables are routine, collected in the quote process and built into the menu plan before day one.',
      },
      {
        q: 'What is added on top of the published rates?',
        a: 'A 20% service charge and Hawaiʻi general excise tax, up to 4.712%, each shown as its own line, plus a travel-zone fee only outside base zones. A 50% deposit locks the date; the written quote is the total. Gratuity stays voluntary.',
      },
      {
        q: 'Do the staff live in the villa?',
        a: 'No. All staff are daily-service professionals who arrive for their shifts and leave after cleanup. Your villa stays private. Long-term or live-in placement is an owner-side service handled by our staffing silo.',
      },
      {
        q: 'Are Kauaʻi and Hawaiʻi Island available?',
        a: 'Oʻahu and Maui are live for written quotes. Kauaʻi and Hawaiʻi Island are inquiry-stage while the island teams build out — we confirm exactly what we can staff, and the total, in writing before you commit.',
      },
      {
        q: 'Villa owners looking for permanent staff — is this the right page?',
        a: 'No. This silo is for guests during their stay. Owners seeking long-term or live-in household placement should see the staffing silo instead — the two are kept deliberately separate.',
      },
    ],
    related: [
      { label: 'Complete villa team', path: `${HUB}/villa-team` },
      { label: 'Private chef for your whole stay', path: `${HUB}/weekly-private-chef` },
      { label: 'Daily breakfast service', path: `${HUB}/breakfast-service` },
      { label: 'Villa provisioning', path: `${HUB}/villa-provisioning` },
      { label: 'Vacation chef', path: '/vacation-chef' },
      { label: 'Villa owners: staff placement', path: '/staffing' },
    ],
    heroPhotoKey: null,
    wantsHeroImage:
      'Editorial wide shot of a Hawaiʻi villa hospitality team (chef, host, server) on a lānai walkway at golden hour — negative space top-third for headline overlay.',
  },

  // ── VILLA TEAM (flagship) ──────────────────────────────────────────────────
  {
    id: 'villa-team',
    slug: 'villa-team',
    path: `${HUB}/villa-team`,
    serviceType: 'Complete villa team',
    breadcrumbName: 'Complete villa team',
    kicker: 'In-villa services · Flagship',
    h1: 'Your complete villa team in Hawaiʻi — one team for your whole stay',
    lede: 'You book the villa; we run the food, drinks and service staff throughout your stay — chef and kitchen team, a lead host, servers, a barista at breakfast, a bartender on selected evenings. One quote, one coordinator, one service standard, arrival dinner to departure breakfast.',
    quoteService: 'villa-team',
    primaryCtaLabel: 'Build my villa team',
    waIntent: 'a complete villa team for our stay',
    sections: [
      {
        h2: 'Tell us your stay. We build the team.',
        paras: [
          'Most Hawaiʻi vacation homes come with a housekeeper — and nothing else. The chef, the shopping, the coffee, the drinks, the table setting and clearing — none of it exists until someone arranges it, and arranging it supplier by supplier is the part of a villa holiday nobody wants to manage.',
          'A myCHEF villa team replaces it. You tell us dates, guest count, island and area, meals, dietary needs, coffee and bar preferences, service hours. We build the roster — chef and assistant, a lead host, servers, a barista at breakfast, a bartender on selected evenings — and run it under one coordinator for the whole booking. You are not hiring individuals; you are booking an outcome: your villa, fully serviced, every day of your stay.',
        ],
      },
      {
        h2: 'What a villa team includes',
        paras: [
          'A head chef and kitchen assistant cooking in your villa kitchen, with menus planned around your group and dietary requirements handled from day one. A lead host running table setting, meal and drinks service, and the kitchen-to-table coordination that makes a house feel staffed rather than catered.',
          'Servers scaled to guest count for lunch and dinner, clearing and reset. A morning barista for espresso-based coffee. A bartender on selected evenings for sunset cocktails or a quiet pour. All grocery shopping by the team, at cost, with receipts. And one coordinator as your single point of contact for roster, schedule and changes.',
        ],
      },
      {
        h2: 'Who this is for',
        paras: [
          'Families on a five-to-fourteen-night stay who want the ease of a staffed resort without leaving the villa: kids’ meals handled, breakfast ready early, nobody on cooking duty. Groups of friends and multi-family stays where meal coordination is the biggest friction point — and the kitchen becomes the social centre once properly run.',
          'Corporate retreats and off-sites needing reliable food and beverage service across a working week, with a coordinator who absorbs schedule changes. Wedding-week house parties where hosting would otherwise consume the couple and their families. And guests in self-booked vacation rentals — share your listing link; if the house has a working kitchen, we can staff it.',
        ],
      },
      {
        h2: 'How it works — three steps',
        paras: [
          'One — tell us your stay. Dates, island and area or listing link, adults and children, meals wanted, dietary requirements, coffee and bar preferences, service hours. The form takes three minutes; a message works just as well.',
          'Two — we build the roster and send one quote. Within a day you receive a proposed team — roles, days, hours — itemised from published rates. Adjust until it fits: drop the bartender, add a birthday dinner. Nothing is locked until you approve it.',
          'Three — arrive to a running operation. Your coordinator confirms the schedule, the fridge is stocked if requested, and the team briefs on-site before your first service. From then on, the only thing you manage is your holiday.',
        ],
      },
      {
        h2: 'How a team is priced',
        paras: [
          'No invented team price: every quote is built line by line from the published rates below, confirmed in writing. Three tiers anchor; tailoring closes.',
          'Essential Stay — the kitchen, run: chef and kitchen assistant, groceries at cost, at the published Stay Chef day rate. Full Service Stay — the kitchen and the table: Essential Stay plus a lead host or servers for daily lunch and dinner. Complete F&B Team — the villa, fully run: chef, assistant, servers scaled to your group, morning barista, bartender on selected evenings, grocery management and a dedicated coordinator, custom-quoted from published rates.',
          'Payment terms: 50% deposit to confirm, balance the day before the stay begins. A 20% service charge and Hawaiʻi GET are itemized; gratuity stays voluntary.',
        ],
      },
      {
        h2: 'Replacement, cover and the coordinator',
        paras: [
          'Ask most providers what happens if your chef cannot make a confirmed date and there is often no written answer. Ours: your coordinator arranges a briefed replacement from our bench, or that service is refunded. Any role that becomes unavailable is reassigned — you are informed, never left short. One coordinator owns the problem, so one message resolves it and you never chase an individual staff member.',
          CATERING_VS_STAY,
        ],
      },
    ],
    rateBlocks: ['stay-chef', 'staffing', 'bar'],
    rateHeading: 'What your team is built from',
    rateIntro:
      'Teams are assembled from these published roles; the tiers above show how they combine. Each role can also be booked on its own — this page is for when you want them combined, managed and run as one team.',
    faqs: [
      {
        q: 'Can one company handle chef, breakfast, coffee, drinks and service staff for the whole stay?',
        a: 'Yes — that is exactly what a myCHEF villa team is. You brief us once; we build one roster covering kitchen, morning coffee, table service and evening bar, price it in one written quote, and run it under one coordinator. No five suppliers, no five threads — one message adjusts the whole team.',
      },
      {
        q: 'How many staff do I need for my group?',
        a: 'Working guide: a chef and assistant cover cooking for about ten guests (add a second assistant beyond that); roughly one server per ten guests; a lead host from six guests upward; barista and bartender scheduled, not full-time. Send your guest count and we propose the roster for approval.',
      },
      {
        q: 'What happens if someone on the team is unavailable?',
        a: 'Your coordinator replaces them from our bench or refunds that service. Backup cover applies to every role — that is the difference between a managed team and hired individuals.',
      },
      {
        q: 'Is a villa team the same as hiring a private chef?',
        a: 'A private chef is one component — usually the most important one. The team adds the kitchen assistant, shopping, table service, coffee, bar, groceries and coordination. If you only need cooking, see the chef-for-your-whole-stay page; for a fully serviced villa, this page.',
      },
      {
        q: 'What is the minimum stay?',
        a: 'No fixed minimum; the model is built for stays of three nights or more. For a single dinner, our catering formats fit better.',
      },
      {
        q: 'Can the team handle dietary requirements and children?',
        a: 'Yes. Vegan, gluten-free, allergies and medical diets are built into the menu plan from day one; children’s meals and earlier kids’ sittings are standard in family rosters.',
      },
      {
        q: 'Do you work in homes we booked ourselves?',
        a: 'Yes — most stay bookings are in vacation rentals. You do not need to own the property. Share the listing link so we can check the kitchen and coordinate access with the host or manager.',
      },
      {
        q: 'Villa owners seeking long-term staff — is this the page?',
        a: 'No. This page staffs a guest stay. Owners seeking long-term or live-in placement should use the staffing silo instead.',
      },
    ],
    related: [
      { label: 'Chef for your whole stay', path: `${HUB}/weekly-private-chef` },
      { label: 'Butler & lead host service', path: `${HUB}/butlers` },
      { label: 'Waiters & service staff', path: `${HUB}/waiters` },
      { label: 'Bartenders & bar service', path: `${HUB}/bartenders` },
      { label: 'Villa barista', path: `${HUB}/barista` },
      { label: 'All in-villa services', path: HUB },
    ],
    heroPhotoKey: null,
    wantsHeroImage:
      'Five-person Hawaiʻi hospitality team briefing before service on an open lānai pavilion at golden hour — candid, unposed, negative space left third.',
  },

  // ── WEEKLY / STAY CHEF ─────────────────────────────────────────────────────
  {
    id: 'weekly-private-chef',
    slug: 'weekly-private-chef',
    path: `${HUB}/weekly-private-chef`,
    serviceType: 'Multi-day private chef',
    breadcrumbName: 'Private chef for your whole stay',
    kicker: 'In-villa services · Stay chef',
    h1: 'A private chef for your whole stay in Hawaiʻi',
    lede: 'One chef team, every day of your holiday. Breakfast, lunch and dinner cooked in your villa kitchen, menus planned around your group, groceries bought fresh and billed at cost with every receipt handed over. You book the villa — we run the kitchen for as long as you are in it.',
    quoteService: 'weekly-chef',
    primaryCtaLabel: 'Plan my stay',
    waIntent: 'a private chef for our whole stay',
    sections: [
      {
        h2: 'The week you don’t cook, shop, or clean up after',
        paras: [
          'Most private-chef bookings in Hawaiʻi are one dinner. This page is about the other way to do it: a chef and a dedicated assistant who come to your villa every day of your stay, cook flexible meals, do all the shopping, and leave the kitchen spotless after every service.',
          'It is the difference between booking a restaurant meal at your villa once, and having the kitchen run properly for the whole trip. No supermarket runs in the heat. No arguments about where to eat with eight people. No breakfast panic before a sunrise hike. You tell us how your group eats; we build the week around it.',
          'If you are looking for a single dinner, a party or a celebration meal, that is a different product — a one-night signature dinner or catering. This page is for stays of three days and longer, and it is priced for them: a chef and assistant by the day, groceries at cost.',
        ],
      },
      {
        h2: 'What the stay-chef service includes',
        paras: [
          'A professional chef plus a dedicated assistant at your villa — two staff, so cooking, service and cleanup happen together. Flexible meals per day: use each as breakfast, lunch or dinner however you like — two meals one day, three the next, a late lunch after a day trip.',
          'Menu planning around your group: cuisines, spice levels, allergies, kids’ plates and preferences briefed before you arrive and adjusted daily. All grocery shopping and sourcing — island fish, farm produce, specialty items — so you never set foot in a supermarket. Table service and full kitchen cleanup after every meal.',
          'Groceries billed at cost, no markup, every receipt handed over. We do not mark food up and we do not take a supplier commission — the sourcing work is already covered by the day rate.',
        ],
      },
      {
        h2: 'Who books a chef for the whole stay',
        paras: [
          'Families on a seven-night stay: three meals a day for six to ten people is a logistics job, and with a chef team in the kitchen the villa actually works the way it looked in the listing photos. Groups of friends, 8–12 guests, with split bills, a dietary mix and different schedules — usually cheaper per head than eating out three times a day, and nobody has to book a car.',
          'Long-stay guests and remote workers over two, three or four weeks, where the menu rotation is planned so the food never repeats into boredom. Multi-generational trips — grandparents who eat early, teenagers who eat constantly, one coeliac, one vegetarian — the booking where a chef pays for itself in avoided friction alone. And retreats and workations, where our retreat catering team handles structured multi-day meal plans and a stay chef runs the villa kitchen around it.',
        ],
      },
      {
        h2: 'The weekly rhythm: you never eat the same dish twice',
        paras: [
          'The most common worry about a chef for a week is repetition. It does not happen, because the menu is planned as a rotation, not a list. Before you arrive we map the whole stay — cuisines you like, dishes you want to try in Hawaiʻi, the one dish the kids will demand again — and build the week so no main dish appears twice.',
          'A typical seven-night arc moves through island seafood, a live-fire night, a Japanese night, a Mediterranean or Italian night, a poolside grill, and one guest’s-choice night where the family picks the theme. Breakfasts rotate through Western, Asian and lighter starts; lunches stay flexible because half of them end up next to a pool.',
        ],
      },
      {
        h2: 'Families and groups: kids, picky eaters, split sittings',
        paras: [
          'Children are planned into the brief, not accommodated as an afterthought. Ages, allergies and known likes and dislikes go into the menu plan before you arrive — milder spice and familiar formats alongside the adult menu, not instead of it.',
          'Early kids’ sittings are standard: children eat at 17:30, adults dine later — two sittings, one kitchen, no negotiation. Picky eaters are handled quietly; the chef learns in the first two days what actually gets eaten, and the week adjusts. High chairs and snack prep on request — tell us the ages and we plan accordingly.',
        ],
      },
      {
        h2: 'Pricing: the published rate, no surprises',
        paras: [
          'The stay chef is a day rate for staff, not a per-person food package. The published Stay Chef day rate covers a chef and assistant for one meal a day with menu design, shopping, cooking, service and cleanup; extra meals are quoted the same day. Groceries are always extra, billed at cost with receipts.',
          'For multi-day stays we also publish a per-person, per-day vacation-chef band, shown below by island. A one-off dinner is the opposite model — a per-person quote with the food included — so for one special night, book a signature dinner or catering; for the kitchen run for the week, this page.',
          STAY_DUAL_MODEL,
        ],
      },
    ],
    rateBlocks: ['stay-chef', 'vacation-chef'],
    rateHeading: 'Published stay-chef rates',
    rateIntro:
      'The Stay Chef day rate is a chef-and-assistant, one-meal rate; add meals and they are quoted the same day. The vacation-chef band is the published per-person, per-day figure for multi-day stays. Groceries bill separately at cost with receipts.',
    faqs: [
      {
        q: 'How much does a private chef for a week in Hawaiʻi cost?',
        a: 'The Stay Chef service is a published day rate for a chef and assistant (one meal a day, with shopping, cooking, service and cleanup), from $1,250/day on Oʻahu and island-adjusted on Maui, Kauaʻi and Hawaiʻi Island. Extra meals are quoted the same day. For multi-day stays there is also a published per-person, per-day vacation-chef band. Groceries are extra at cost with receipts.',
      },
      {
        q: 'Are groceries included in the daily rate?',
        a: 'The shopping work is included; the ingredients are not. Groceries are billed at cost, no markup, and every receipt is handed over. Before your stay we agree a written food budget so the week’s spending is predictable.',
      },
      {
        q: 'Can I book a chef for just one night?',
        a: 'You can, but it is a different product. One dinner is a signature dinner or catering — food included in a per-person quote — and it is usually better value for a single event. The stay-chef day rate makes sense from about three days upward.',
      },
      {
        q: 'How do you handle dietary requirements and allergies?',
        a: 'They go into the brief before you arrive — allergies, coeliac, vegetarian, vegan, kids’ preferences — and menus are planned around them daily. Complex mixes are routine for us, not an exception.',
      },
      {
        q: 'What does our villa kitchen need?',
        a: 'A standard villa kitchen is enough for most menus. We check the kitchen before confirming — in person or from your listing link — and flag anything missing in advance. The team brings the small specialist kit they need.',
      },
      {
        q: 'Do you work in vacation rentals and homes we booked ourselves?',
        a: 'Yes — most stay bookings are in vacation rentals. You do not need to own the property. Share the listing link so we can check the kitchen and plan arrival logistics with the host or manager.',
      },
      {
        q: 'Will we end up eating the same dishes all week?',
        a: 'No. The menu is planned as a rotation before you arrive — no main dish repeats across the week unless you ask for it again.',
      },
      {
        q: 'Can the chef also handle one bigger night mid-stay?',
        a: 'Yes. A celebration dinner or cocktail night can scale up inside your stay — extra servers, a bartender — quoted before it happens and run by the same team you already know.',
      },
    ],
    related: [
      { label: 'Complete villa team', path: `${HUB}/villa-team` },
      { label: 'Daily breakfast service', path: `${HUB}/breakfast-service` },
      { label: 'Morning barista', path: `${HUB}/barista` },
      { label: 'Villa provisioning', path: `${HUB}/villa-provisioning` },
      { label: 'Vacation chef', path: '/vacation-chef' },
      { label: 'Pricing', path: '/pricing' },
    ],
    heroPhotoKey: null,
    wantsHeroImage:
      'Chef plating a bright breakfast spread at a modern open Hawaiʻi villa kitchen island, assistant beside — soft morning light, left-third negative space.',
  },

  // ── BUTLERS / LEAD HOST ────────────────────────────────────────────────────
  {
    id: 'butlers',
    slug: 'butlers',
    path: `${HUB}/butlers`,
    serviceType: 'Villa butler and lead host service',
    breadcrumbName: 'Butler & lead host service',
    kicker: 'In-villa services · Table & host',
    h1: 'Villa butler & lead host service in Hawaiʻi — hired by the day',
    lede: 'A myCHEF lead host runs the food-and-drink service of your villa stay: breakfast set before you wake, tables prepared and served, drinks poured by the pool, snacks through the afternoon, and the kitchen-to-table coordination that makes a rented house feel properly staffed. Book by the day, by the shift, for an event, or for your whole stay.',
    quoteService: 'butler',
    primaryCtaLabel: 'Get a villa hospitality quote',
    waIntent: 'a villa butler or lead host for our stay',
    sections: [
      {
        h2: 'What a lead host does',
        paras: [
          'Our lead hosts are food-and-beverage service professionals, and that scope is deliberate. Breakfast setup and morning service — the table set before the household wakes, coffee and morning dishes served and cleared. Table preparation for every meal, indoors, poolside or in the garden, with glassware and tableware matched to anything from a family lunch to a celebration dinner.',
          'Meal service — plated, family-style or buffet, courses timed with the kitchen, plates cleared between courses. Drinks service through the day, from morning coffee to pre-dinner aperitifs and wine at the table. Snacks and afternoon service brought out at the right moment. Coordination with the kitchen — the link between chef and table. And clearing and reset, so service areas are left tidy after every meal.',
        ],
      },
      {
        h2: 'What a lead host does not do',
        paras: [
          'Clear boundaries make for better service. A lead host is not a housekeeper — bedrooms, bathrooms, laundry and general cleaning belong to the property’s housekeeping; the host clears and resets service areas only. Not a driver or security. Not a property manager — maintenance, pool and yard care sit outside the role. Not a chef; the host serves while the chef cooks. And not a nanny or childcare provider.',
          'If you are a villa owner or resident looking for permanent household staff — a manager, housekeeper or long-term placement — that is a different service, handled by our staffing silo, not this guest-facing stay service.',
        ],
      },
      {
        h2: 'Butler or waiter — which do you need?',
        paras: [
          'The short answer to our most common staffing question: a server serves a meal; a lead host runs your day. A server is table service for one meal or event — a dinner party, a reception — booked hourly, roughly one per ten guests. A lead host is continuous food-and-drink service across the day — breakfast setup, drinks all day, snacks, kitchen coordination, clearing — best for full stays, families and multi-meal days.',
          'Rule of thumb: for one meal, hire servers. For a house that feels hosted from breakfast to nightcap, hire a lead host. For one big evening inside a longer stay, the usual pattern is a lead host across the stay plus extra servers for that night, quoted together.',
        ],
      },
      {
        h2: 'How it works',
        paras: [
          'Send your dates, island and area, guest count and how you plan to use the host; we reply with availability and a fixed written quote. We match a host whose experience fits your group — family stays, formal service or events — and brief them before arrival on wake-up times, dietary requirements, children’s preferences, drinks and the meal schedule.',
          'On the day, they work in uniform, on time, to the agreed shift pattern; changes go through your coordinator, not across the table. On longer bookings we follow up, and anything short of the standard is fixed.',
        ],
      },
    ],
    rateBlocks: ['staffing'],
    rateHeading: 'Published service-staff rates',
    rateIntro:
      'Hawaiʻi service staff are published on an hourly, minimum-hours basis — the same rate whether the role is configured as a server or as a lead host across the day. Multi-day and full-stay host patterns are quoted from these published rates as one written package.',
    faqs: [
      {
        q: 'What does a lead host actually do in a villa?',
        a: 'Runs the food-and-drink service of your stay: breakfast setup, table preparation, meal service, drinks through the day, snacks, clearing and coordination with the kitchen. Not housekeeping, driving, security or property management.',
      },
      {
        q: 'What is the difference between a lead host and a server?',
        a: 'A server serves one meal or event, booked hourly at roughly one per ten guests. A lead host runs the whole day — breakfast to dinner, drinks, snacks and kitchen coordination — booked by the day or for your whole stay. Many stays use both: a host throughout, plus servers for one large dinner.',
      },
      {
        q: 'Are your staff trained?',
        a: 'Yes — experienced hospitality professionals in table service, wine service, guest relations and food safety, briefed on your household before arrival.',
      },
      {
        q: 'Can I book for an event or a single evening?',
        a: 'Yes. Hourly bookings suit dinners, parties, weddings and corporate functions; the published minimum-hours booking applies.',
      },
      {
        q: 'Can I book for my whole stay?',
        a: 'Yes — the most common booking. Multi-day stays use a per-day pattern with the same host retained throughout wherever possible, quoted as one written package.',
      },
      {
        q: 'Is the host live-in?',
        a: 'No — hosts work per shift and leave after service. Live-in placement is an owner-side service handled by the staffing silo.',
      },
      {
        q: 'How does payment work?',
        a: 'A fixed written quote first, then a 50% deposit to confirm, balance the day before service. A 20% service charge and Hawaiʻi GET are itemized on the quote.',
      },
      {
        q: 'Can the host work alongside our villa’s own staff?',
        a: 'Yes. The host handles guest-facing food-and-drink service; housekeeping and property operations stay with the villa’s staff. The division of roles is confirmed at booking.',
      },
    ],
    related: [
      { label: 'Waiters & service staff', path: `${HUB}/waiters` },
      { label: 'Complete villa team', path: `${HUB}/villa-team` },
      { label: 'Bartenders & bar service', path: `${HUB}/bartenders` },
      { label: 'All in-villa services', path: HUB },
      { label: 'Villa owners: staff placement', path: '/staffing' },
    ],
    heroPhotoKey: null,
    wantsHeroImage:
      'Lead host setting a long teak dining table on a Hawaiʻi villa lānai, folded linen and glassware in late-afternoon light — one person, calm and concentrated.',
  },

  // ── WAITERS / SERVICE STAFF ────────────────────────────────────────────────
  {
    id: 'waiters',
    slug: 'waiters',
    path: `${HUB}/waiters`,
    serviceType: 'Villa waiters and service staff',
    breadcrumbName: 'Waiters & service staff',
    kicker: 'In-villa services · Service staff',
    h1: 'Waiter hire in Hawaiʻi — professional service staff for your villa',
    lede: 'Uniformed, professional servers for villa dinners, parties, weddings and multi-day stays across the islands — trained to set, serve and clear to a real standard. Booked by the event or across your stay, coordinating with whoever is cooking.',
    quoteService: 'waiters',
    primaryCtaLabel: 'Get a villa hospitality quote',
    waIntent: 'waiters and service staff for a villa event',
    sections: [
      {
        h2: 'What service staff cover',
        paras: [
          'Servers handle the table, not the kitchen: setup and briefing before guests arrive, plated, family-style or buffet service, pouring and timing, clearing between courses, and a clean-down after dessert. They coordinate with whoever is cooking — your chef, a third-party caterer or your own villa cook — so you are booking professional service, not a food package.',
          'Formats range from a seated dinner to a canapé reception. For cocktail mixing and a full bar, add a bartender; for wine pairing design, add a sommelier session.',
        ],
      },
      {
        h2: 'How many servers you need',
        paras: [
          'Plan on roughly one server per ten guests for standard table service — one per eight to ten for plated formal dinners, one per fifteen for buffets, one per fifteen to twenty for canapé receptions. Above twenty guests we add a lead server. Send your guest count and service style and we size the team in your quote.',
          'The team arrives 60–90 minutes before guests for setup and briefing and stays 30–45 minutes after dessert for clean-down, so a typical dinner books four to five hours from setup start to final pack-down.',
        ],
      },
      {
        h2: 'Stays, weeks and repeat teams',
        paras: [
          'Multi-day and full-stay bookings are common — especially breakfast-and-dinner service across a family holiday. We hold the same team for your dates wherever possible, and multi-day rates are quoted as one written package. On return bookings we do our best to reassign your preferred team.',
          'Booking a chef for your whole stay? Fold servers for the nights that matter into a complete villa team — one quote, one coordinator, one team that knows your house by the second visit.',
        ],
      },
    ],
    rateBlocks: ['staffing'],
    rateHeading: 'Published service-staff rates',
    rateIntro:
      'Servers are published on an hourly basis with a minimum-hours booking. Booked time runs from agreed setup start to final pack-down. Multi-day stay patterns are quoted as one written package.',
    faqs: [
      {
        q: 'How many waiters do I need?',
        a: 'Plan on one server per ten guests for standard table service — one per eight to ten for plated formal dinners, one per fifteen for buffets, one per fifteen to twenty for canapé receptions. Above twenty guests we add a lead server.',
      },
      {
        q: 'What is the minimum booking?',
        a: 'The published minimum-hours booking applies. Booked time runs from agreed setup start to final pack-down, so a typical dinner books four to five hours.',
      },
      {
        q: 'What do the servers wear?',
        a: 'Black trousers, white shirt and black apron as standard. Custom dress codes — including wedding palettes — can be arranged at booking.',
      },
      {
        q: 'Can I book waiters without catering?',
        a: 'Yes. Self-catered events and third-party caterers are normal — our servers coordinate with whoever is cooking, including your own villa cook. You are booking professional service staff, not a food package.',
      },
      {
        q: 'Can I book waiters for a whole week or a long stay?',
        a: 'Yes — multi-day and full-stay bookings are common, especially breakfast-and-dinner service across a family holiday. We hold the same team for your dates wherever possible and quote multi-day rates as a package.',
      },
      {
        q: 'What happens if a server is unavailable before my event?',
        a: 'Your booking is covered. Every team carries replacement cover: a trained, briefed replacement steps in, and your confirmed team size and service standard do not change.',
      },
      {
        q: 'Do servers handle wine and drinks?',
        a: 'Yes — pouring, timing and temperature management are included. For cocktail mixing and a full bar, add a bartender; for pairing design, add a sommelier session.',
      },
      {
        q: 'How much does waiter hire cost in Hawaiʻi?',
        a: 'Servers are published on an hourly basis from the rate below, with a minimum-hours booking; a 20% service charge and Hawaiʻi GET are itemized and the written quote is the total. A 50% deposit confirms your date.',
      },
    ],
    related: [
      { label: 'Butler & lead host service', path: `${HUB}/butlers` },
      { label: 'Bartenders & bar service', path: `${HUB}/bartenders` },
      { label: 'Complete villa team', path: `${HUB}/villa-team` },
      { label: 'All in-villa services', path: HUB },
      { label: 'Weddings', path: '/weddings' },
    ],
    heroPhotoKey: null,
    wantsHeroImage:
      'Two uniformed servers finishing a candlelit long table beside an infinity pool at a Hawaiʻi villa at blue hour — unposed, elevated 35mm look.',
  },

  // ── BARTENDERS / BAR ───────────────────────────────────────────────────────
  {
    id: 'bartenders',
    slug: 'bartenders',
    path: `${HUB}/bartenders`,
    serviceType: 'Villa bartender and bar service',
    breadcrumbName: 'Bartenders & bar service',
    kicker: 'In-villa services · Bar',
    h1: 'Bartender hire in Hawaiʻi — a private bar in your villa',
    lede: 'A professional bartender sets up a real working bar in your villa — tools, glassware, ice, mixers and garnishes — and runs it for the evening while you host. Bring your own bottles or book the packaged bar with spirits at cost. One evening, a party night, or selected evenings across your stay.',
    quoteService: 'bartender',
    primaryCtaLabel: 'Get a villa bar quote',
    waIntent: 'a private bartender for a villa evening',
    sections: [
      {
        h2: 'Why go out when the bar comes to you',
        paras: [
          'The best bar seat in Hawaiʻi is ten steps from your pool. No driver, no minimum-spend table, no taxi queue. A private bartender sets up a real working bar in your villa — tools, glassware, ice, mixers, garnishes — and runs it for the evening while you host.',
          'Not a person who turns up empty-handed — a bar operation scaled to your group. And because we are a food-and-beverage company first, the bar connects to everything else: a cocktail hour before your chef dinner, table wine service as dinner runs, all on one quote.',
        ],
      },
      {
        h2: 'What bar service includes',
        paras: [
          'Every booking covers the complete bar, not just the person: a professional bartender scaled to your headcount, complete bar setup and station layout positioned for your villa, cocktail glassware matched to your menu, ice delivered and managed through the window, standard mixers and fresh juices, fresh garnishes and house syrups.',
          'Your cocktail menu is agreed in advance — typically four cocktails, so service stays fast — and mocktails and zero-proof serves are built to cocktail standard, never an afterthought. The window includes setup, continuous service, then breakdown and cleanup, with the bar area handed back as found.',
        ],
      },
      {
        h2: 'Two ways to buy the bar',
        paras: [
          'By the hour, from the published rate below with a minimum-hours booking: you supply the spirits (BYO) and we bring everything else — bartender, kit, glassware, ice, mixers, garnishes, setup, service and cleanup. The right buy for villa evenings, small groups and pre-dinner cocktail hours.',
          'Or the packaged four-hour bar: a published per-guest package that stacks with a chef night or books as a terrace cocktail hour, with spirits billed at cost or BYO. Which to choose? A short window or a small group: hourly. A longer party or spirits supplied: the package. If it is close, we quote both.',
        ],
      },
      {
        h2: 'How many bartenders you need',
        paras: [
          'One bartender serves about fifteen guests; two for fifteen to thirty or for shaken-drink-heavy menus; a bar-back joins at thirty or more. We staff for the peak — a twenty-minute sunset rush is where under-staffed bars fall over. Your window includes setup and breakdown, with first pour roughly 30–45 minutes after arrival.',
          'All bar staff follow responsible service: no minors, no visibly intoxicated guests, and packaged formats run with agreed stock planning and pacing.',
        ],
      },
    ],
    rateBlocks: ['bar'],
    rateHeading: 'Published bar rates',
    rateIntro:
      'The bar is published two ways per island: an hourly bartender-plus-setup rate (spirits BYO or at cost) and a four-hour packaged bar with a per-guest add-on. Kauaʻi and Hawaiʻi Island are inquiry-stage while the island teams build out.',
    faqs: [
      {
        q: 'Do we supply the alcohol, or do you?',
        a: 'Your choice: on hourly hire you supply the bottles (BYO) and we supply everything else; on the packaged bar, spirits are billed at cost or you supply them.',
      },
      {
        q: 'How many cocktails should we plan per guest?',
        a: 'Three to four per guest over a two-to-three-hour window, including a welcome pour — and for BYO shopping, one 750ml bottle makes roughly fifteen pours.',
      },
      {
        q: 'Is glassware really included?',
        a: 'Yes — glassware matched to your menu and headcount, plus tools and ice buckets. No raiding the villa kitchen.',
      },
      {
        q: 'Can you do short-notice bookings?',
        a: 'Often, yes — message us and we confirm availability. Menus are tighter at short notice; the standard is not.',
      },
      {
        q: 'Which areas do you cover, and are there travel fees?',
        a: 'Base villa zones on each island at standard rates; areas outside the base zone can carry a published travel line, itemized in your quote — never silent.',
      },
      {
        q: 'How does the deposit work?',
        a: 'A 50% deposit confirms your date, the balance is due the day before, and your quote states the full total with the 20% service charge and Hawaiʻi GET itemized.',
      },
      {
        q: 'Do you serve mocktails and non-drinkers?',
        a: 'Properly, yes — every menu includes zero-proof serves built to cocktail standard, with quantities planned around your non-drinkers.',
      },
      {
        q: 'Can we book a bartender for just two evenings of our stay?',
        a: 'Absolutely — selected evenings are a common booking alongside a weekly chef: one quote, one coordinator, a team that knows your villa by the second visit.',
      },
      {
        q: 'Can the bartender also serve wine during dinner?',
        a: 'Yes — many bookings run a cocktail hour straight into table drinks service while your chef team serves, at the same hourly rate.',
      },
    ],
    related: [
      { label: 'Complete villa team', path: `${HUB}/villa-team` },
      { label: 'Waiters & service staff', path: `${HUB}/waiters` },
      { label: 'Mobile bar', path: '/mobile-bar' },
      { label: 'All in-villa services', path: HUB },
      { label: 'Pricing', path: '/pricing' },
    ],
    heroPhotoKey: null,
    wantsHeroImage:
      'Bartender shaking a cocktail at a portable bar beside a Hawaiʻi villa pool at sunset, garnishes and glassware in warm backlight — candid working moment.',
  },

  // ── BARISTA (quote-only) ───────────────────────────────────────────────────
  {
    id: 'barista',
    slug: 'barista',
    path: `${HUB}/barista`,
    serviceType: 'Villa barista and morning coffee service',
    breadcrumbName: 'Villa barista & morning coffee',
    kicker: 'In-villa services · Coffee',
    h1: 'Villa barista & morning coffee service in Hawaiʻi',
    lede: 'A professional barista at your villa each morning of the stay — a real espresso machine, freshly ground beans, and oat, almond and soy milks as standard. Flat whites before the sunrise hike, iced lattes by the pool, babycinos for the children, and the kitchen left as found.',
    quoteService: 'barista',
    primaryCtaLabel: 'Get a coffee-service quote',
    waIntent: 'a morning barista for our villa stay',
    sections: [
      {
        h2: 'Proper coffee, at the villa, before anyone drives anywhere',
        paras: [
          'A barista arrives for the morning window with a commercial espresso machine, grinder, cups and every consumable, sets up on a counter and one power socket, and makes coffee to order for the group — then packs down and leaves the kitchen as found. Nothing is rented to you, and nothing is left for you to operate.',
          'Espresso-based drinks the way a good café makes them: flat whites, cappuccinos, lattes hot or iced, plus quality teas, chai, proper hot chocolate and babycinos for the children. It is the small thing that makes a villa morning feel genuinely serviced.',
        ],
      },
      {
        h2: 'What the barista brings',
        paras: [
          'A commercial espresso machine, grinder, cups, glassware and every consumable arrive with the barista each morning and leave each midday. Your villa supplies a counter and one standard power socket; the machine draws about what a kettle does, and bottled water for the machine comes as standard, so no plumbing connection is needed.',
          'Oat, almond and soy milks are stocked for the whole stay at no surcharge, alongside fresh dairy and, on request, lactose-free. Alternative milks are roughly a third of the orders we see; they are part of the service, not an exception to it. Where island roasters make it available, we can feature Hawaiʻi-grown coffee — Kona and Kaʻū among them — so the cup reflects where you are staying.',
        ],
      },
      {
        h2: 'How many baristas, and how early',
        paras: [
          'One barista comfortably serves a villa group of up to roughly twenty coffee drinkers across a morning window — in practice thirty to fifty drinks — which is exactly a busy family or group stay. Above that, or for retreats and events where everyone arrives at once after morning practice, we quote a second barista so nobody queues for coffee on holiday.',
          'Service can start earlier than the standard window for dive boats, surf guides, tee times and sunrise treks — a station open before a 06:45 pickup is normal work, confirmed against your villa location when we quote.',
        ],
      },
      {
        h2: 'Booking and events',
        paras: [
          'Weekly bookings hold the same barista for your whole stay wherever operationally possible — by day three your order is being made as you walk toward the machine, which is the entire point. Single-session bookings also work well for brunches, wedding mornings and corporate gatherings, quoted per session. For large guest counts or all-day service, ask about an event coffee-station add-on.',
        ],
      },
    ],
    rateBlocks: [],
    quoteOnlyNote:
      'There is no published Hawaiʻi barista price yet — no local benchmark exists — so morning coffee service is confirmed in writing per session, with the barista, machine, beans, milks and consumables all included and a lower per-morning rate on weekly stays. Send your dates and guest count and you will have a number in your quote. When bundled with a chef for your whole stay, the morning coffee brief folds into the team quote.',
    faqs: [
      {
        q: 'What does a private barista cost in Hawaiʻi?',
        a: 'It is confirmed at quote, per morning session, with the barista, machine, beans, milks and consumables all included and a lower per-morning rate on weekly stays. We do not publish a barista price because no Hawaiʻi benchmark exists yet — send your dates and guest count and you will have a number in your written quote.',
      },
      {
        q: 'Is the espresso machine included?',
        a: 'Yes — a commercial espresso machine, grinder, cups, glassware and every consumable arrive with the barista each morning and leave each midday. Your villa supplies a counter and one standard power socket.',
      },
      {
        q: 'Do you offer oat, almond or soy milk?',
        a: 'All three, stocked as standard for the whole stay at no surcharge, plus fresh dairy and, on request, lactose-free.',
      },
      {
        q: 'How many cups or guests can one barista handle?',
        a: 'One barista comfortably serves up to roughly twenty coffee drinkers across the morning window — thirty to fifty drinks. Above that, or for retreats where everyone arrives at once, we quote a second barista.',
      },
      {
        q: 'What power and water does the machine need?',
        a: 'One standard socket and about 1.5 metres of counter — the machine draws about what a kettle does. We bring bottled water for the machine, so no plumbing connection is needed.',
      },
      {
        q: 'Can we book the barista for an event, not a stay?',
        a: 'Yes — single-session bookings work well for brunches, wedding mornings and corporate gatherings, quoted per session. For large guest counts, ask about the event coffee-station add-on.',
      },
      {
        q: 'Can we book every morning for a week or longer?',
        a: 'That is the core of the service. Weekly bookings carry a lower per-morning rate and hold the same barista for your whole stay wherever operationally possible.',
      },
      {
        q: 'Can service start earlier than the standard window?',
        a: 'Yes — for dive boats, surf guides, tee times and sunrise treks we run earlier starts, confirmed against your villa location when we quote.',
      },
    ],
    related: [
      { label: 'Daily breakfast service', path: `${HUB}/breakfast-service` },
      { label: 'Private chef for your whole stay', path: `${HUB}/weekly-private-chef` },
      { label: 'Complete villa team', path: `${HUB}/villa-team` },
      { label: 'All in-villa services', path: HUB },
    ],
    heroPhotoKey: null,
    wantsHeroImage:
      'Barista pouring latte art at a compact espresso station on a Hawaiʻi villa counter at breakfast, blurred family table behind — crisp morning light.',
  },

  // ── PROVISIONING (quote-only) ──────────────────────────────────────────────
  {
    id: 'villa-provisioning',
    slug: 'villa-provisioning',
    path: `${HUB}/villa-provisioning`,
    serviceType: 'Villa provisioning and fridge stocking',
    breadcrumbName: 'Villa provisioning & fridge stocking',
    kicker: 'In-villa services · Provisioning',
    h1: 'Villa provisioning & fridge stocking in Hawaiʻi',
    lede: 'The professional stocking of your villa kitchen before and during your stay — the shopping, the sourcing, the fridge and pantry setup, and the top-ups in between. You skip the supermarket after a long flight; the holiday starts on arrival. Groceries at cost with receipts, always.',
    quoteService: 'provisioning',
    primaryCtaLabel: 'Get a provisioning quote',
    waIntent: 'villa provisioning and fridge stocking before arrival',
    sections: [
      {
        h2: 'What villa provisioning is',
        paras: [
          'Villa provisioning is how a staffed resort operates — except you booked the house yourself. The alternative most visitors know: land after a long flight, sit in traffic, then spend the first evening in an unfamiliar supermarket, or gamble on a delivery app and hope the substitution for your toddler’s formula is acceptable.',
          'This service removes that errand. You send your preferences or a full list; we source from markets, specialty stores and import suppliers, and have the refrigerator stocked, the pantry set, fruit prepared and beverages chilled before you open the front door.',
        ],
      },
      {
        h2: 'What the service includes',
        paras: [
          'Pre-arrival fridge stocking — fresh produce, dairy, snacks and beverages put away before check-in. Pantry setup — oils, spices, condiments, coffee and the staples a working kitchen needs. Breakfast readiness — everything for your first few mornings. Beverage stocking including beer, wine, spirits and mixers chilled on arrival; a bottle on arrival is a common request, purchased at cost like everything else.',
          'Kids’ and family specifics — formula, particular snack brands, specific milks; if a brand matters to your child, we source that brand. Dietary and allergen labelling — gluten-free, nut-free, dairy-free and vegan items segregated and clearly labelled so the whole group can navigate the fridge safely. Mid-stay top-ups so you never come back from the beach to an empty fridge. And full receipts, every item, line by line.',
        ],
      },
      {
        h2: 'Who it is for',
        paras: [
          'Pre-arrival stockers who want cold drinks in the fridge and breakfast sorted the moment they walk in. Families with specific kids’ brands — we source exact brands, imported ones included, and flag early if something is unavailable. Retreat organisers needing arrival-day provisioning for a full house — bulk produce, beverage stations, dietary-labelled storage. And villa managers who want to offer guest arrival provisioning without running it themselves.',
        ],
      },
      {
        h2: 'Groceries at cost — the firm position',
        paras: [
          'Our position on groceries is the same across every myCHEF service: groceries are charged at cost, receipts are handed over, and we take no supplier commission. There is no markup on a single item in your fridge. A stocked fridge should cost what the fridge costs — the service is the fee, agreed with you upfront.',
          'If you book a chef for your whole stay, daily shopping is already part of the chef’s day rate — you would not be charged for separate provisioning runs. We say that explicitly so there is never a double-charge question.',
        ],
      },
      {
        h2: 'Booking timeline',
        paras: [
          'Lead time of 48–72 hours before arrival is enough to confirm the list, source specialty items and schedule stocking around check-in; tell us about imported or niche items early. Peak weeks fill arrival-day slots first, so book earlier. A 50% deposit confirms, balance the day before the first run. Mid-stay top-ups need only a day’s notice.',
        ],
      },
    ],
    rateBlocks: [],
    quoteOnlyNote:
      'There is no live published price for villa provisioning yet. Your provisioning cost is confirmed at quote, based on your island and zone, the size of your list, and the number of runs. Groceries themselves are always billed at cost with receipts — that part never changes — and provisioning folds in free when you book a chef for your whole stay, because the shopping is already inside the Stay Chef day rate.',
    faqs: [
      {
        q: 'How far in advance should I book villa provisioning?',
        a: '48–72 hours before arrival at minimum; a week is better for peak season or import-heavy lists. Mid-stay top-ups need only a day’s notice.',
      },
      {
        q: 'Can I send my own shopping list?',
        a: 'Yes — it is the most common way to book. Send a detailed list, a rough one, or just your family’s preferences and dietary profile; we turn any of the three into a confirmed shopping plan.',
      },
      {
        q: 'What happens if an item on my list is unavailable?',
        a: 'We tell you before purchase, never after — a message with the closest alternatives, and you decide. Brand-critical items such as formula are flagged at the confirmation stage.',
      },
      {
        q: 'Can you stock alcohol, wine and beer?',
        a: 'Yes. Beer, wine, spirits and mixers are sourced at cost and chilled before you arrive. Give us labels or a budget and we will match it.',
      },
      {
        q: 'How do you handle dietary requirements and allergies?',
        a: 'Dietary items — gluten-free, nut-free, dairy-free, vegan — are purchased to your specification, stored separately and clearly labelled, so everyone can use the fridge safely.',
      },
      {
        q: 'Do I see the actual receipts?',
        a: 'Always. Every run is documented line by line and the receipts are handed to you — groceries billed at cost, no markup, no supplier commission.',
      },
      {
        q: 'How much does villa provisioning cost?',
        a: 'Groceries are always at cost. The service fee depends on zone, list size and number of runs, and is confirmed at quote. It folds in free when you also book a chef for your whole stay.',
      },
      {
        q: 'Can you provision a home I booked myself?',
        a: 'Yes. Share your listing link and arrival time and we coordinate access with your host or property manager.',
      },
    ],
    related: [
      { label: 'Private chef for your whole stay', path: `${HUB}/weekly-private-chef` },
      { label: 'Daily breakfast service', path: `${HUB}/breakfast-service` },
      { label: 'Complete villa team', path: `${HUB}/villa-team` },
      { label: 'All in-villa services', path: HUB },
    ],
    heroPhotoKey: null,
    wantsHeroImage:
      'Overhead flat-lay on a Hawaiʻi villa counter: fresh island produce, eggs and bread in reusable bags beside a neat stack of receipts — no people, clean editorial styling.',
  },

  // ── BREAKFAST SERVICE ──────────────────────────────────────────────────────
  {
    id: 'breakfast-service',
    slug: 'breakfast-service',
    path: `${HUB}/breakfast-service`,
    serviceType: 'Daily villa breakfast service',
    breadcrumbName: 'Daily breakfast service',
    kicker: 'In-villa services · Breakfast',
    h1: 'Breakfast chef in Hawaiʻi — chef-cooked breakfast in your villa, every morning',
    lede: 'A breakfast chef arrives before your group wakes, shops, cooks and serves breakfast every morning of your stay — and leaves the kitchen spotless before the day begins. Eggs any style, pancakes for the children, tropical fruit cut fresh, proper coffee, groceries at cost with receipts.',
    quoteService: 'breakfast',
    primaryCtaLabel: 'Plan my mornings',
    waIntent: 'daily breakfast service for our villa stay',
    sections: [
      {
        h2: 'The first morning sets the whole week',
        paras: [
          'The first morning of a villa holiday decides how the rest of the week feels. Either somebody stands in an unfamiliar kitchen hunting for a frying pan while six people ask for coffee — or breakfast appears on the lānai at eight, and nobody thinks about it again.',
          'A breakfast chef is the second version: a professional arrives at your villa in the early morning, brews real coffee, cooks breakfast to order for the whole group, handles the shopping, and has the kitchen cleaned and reset by mid-morning. Nobody spends a single morning of the holiday cooking, shopping or washing up.',
        ],
      },
      {
        h2: 'What daily breakfast service covers',
        paras: [
          'A chef and assistant cooking breakfast to order in your villa kitchen — eggs any style, pancakes, island fruit, and hot dishes made for the whole table rather than a laminated menu. Proper coffee from early, and an earlier start for dive boats, surf guides or sunrise hikes.',
          'All the morning shopping, groceries at cost with receipts, and full kitchen cleanup so the space is handed back before your day starts. Kids’ breakfasts and earlier sittings are standard, and dietary requirements — allergies, vegan, gluten-free — are built into the menu plan before the first shop.',
        ],
      },
      {
        h2: 'How breakfast is priced',
        paras: [
          'Breakfast-only service uses the published one-meal Stay Chef day rate: a chef and assistant, one meal a day, with shopping, cooking, service and cleanup. Groceries bill separately at cost with receipts — for most families, far less than eight café breakfasts out. The per-island Stay Chef rates are shown below.',
          'It is the natural gateway to a fuller stay: adding lunch or dinner later is the most common upgrade path, and where you want dinner most nights the weekly private-chef framing is usually better value — we show it alongside.',
          STAY_DUAL_MODEL,
        ],
      },
      {
        h2: 'Breakfast chef vs a floating breakfast',
        paras: [
          'A floating breakfast is a styled tray served in your pool — a one-off, photogenic add-on. This service is a chef cooking in your kitchen every morning: hot food to order, kids fed first, coffee early, groceries shopped, kitchen cleaned. Many guests book both — the tray once, for the photograph; the chef every day, for the holiday.',
        ],
      },
    ],
    rateBlocks: ['stay-chef'],
    rateHeading: 'Published breakfast-chef rates',
    rateIntro:
      'Breakfast-only service uses the published one-meal Stay Chef day rate (chef and assistant), shown by island. Add lunch or dinner and it is quoted the same day. Groceries bill separately at cost with receipts.',
    faqs: [
      {
        q: 'How early can breakfast service start?',
        a: 'The chef and assistant arrive early as standard, coffee ready shortly after, full breakfast typically from 08:00. For surf, dive or tour departures we start earlier — a cooked breakfast before an early pickup is normal. Tell us your earliest morning when you enquire.',
      },
      {
        q: 'What does a breakfast chef cost per morning?',
        a: 'Breakfast-only service uses the published one-meal Stay Chef day rate for a chef and assistant, shown by island below, with groceries extra at cost with receipts. A 20% service charge and Hawaiʻi GET are itemized and the written quote is the total.',
      },
      {
        q: 'Are groceries included in the price?',
        a: 'No — groceries are charged at cost, with receipts, no markup. The chef shops each morning; you pay exactly what the food costs — for most families, far less than eight café breakfasts out.',
      },
      {
        q: 'Can you do kids’ breakfasts and fussy eaters?',
        a: 'Yes — it is most of the job on family stays. Earlier kids’ sittings, plain-pancake children, one who eats only fruit and toast: the chef learns it on day one and it simply happens every morning after.',
      },
      {
        q: 'Do you handle allergies, vegan and gluten-free?',
        a: 'Yes. Requirements are captured in the pre-arrival brief and built into the menu plan before the first shop — allergies flagged to the whole team, vegan and gluten-free rotation planned across the week.',
      },
      {
        q: 'Can we book just one morning?',
        a: 'You can, quoted at the standard daily rate — but the service is built for rhythm, and the chef learning your group is half the value.',
      },
      {
        q: 'Can we add lunch or dinner later in the stay?',
        a: 'Yes — the most common upgrade path. Added meals are quoted the same day, and where you want dinner most nights the weekly private-chef framing is usually better value; we show it alongside.',
      },
      {
        q: 'Does our villa kitchen matter?',
        a: 'It needs to work, not to be luxurious. A functioning cooktop, fridge space and power are enough; we check kitchen photos before confirming. Vacation rentals are fine — we coordinate access with the host or manager.',
      },
    ],
    related: [
      { label: 'Morning barista', path: `${HUB}/barista` },
      { label: 'Private chef for your whole stay', path: `${HUB}/weekly-private-chef` },
      { label: 'Villa provisioning', path: `${HUB}/villa-provisioning` },
      { label: 'Complete villa team', path: `${HUB}/villa-team` },
      { label: 'All in-villa services', path: HUB },
    ],
    heroPhotoKey: null,
    wantsHeroImage:
      'Family breakfast served on a Hawaiʻi villa lānai at 8am — host placing island fruit and coffee, pool and palms behind, candid morning light.',
  },
];

export const IN_VILLA_PATHS: readonly string[] = inVillaPages.map((p) => p.path);

export function getInVillaPage(slug: string): InVillaPage | undefined {
  return inVillaPages.find((p) => p.slug === slug);
}

export function inVillaChildren(): InVillaPage[] {
  return inVillaPages.filter((p) => p.id !== 'hub');
}
