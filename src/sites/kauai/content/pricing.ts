import type { ContentRecord } from '@/platform/types';
import { CTA_QUOTE, FEE_FOOTNOTE } from './shared';

/** Kauaʻi pricing cluster (Table 4.2.3e rows 1–6). */
export const pricingPages: ContentRecord[] = [
  {
    slug: 'private-chef-cost',
    category: 'pricing',
    title: 'How Much Does a Private Chef Cost on Kauaʻi? (2026 Rates)',
    h1: 'What a private chef costs on Kauaʻi.',
    parent: 'pricing',
    meta: {
      description:
        'Private chef cost on Kauaʻi in 2026: $125–$350 per guest by tier, Stay Chef from $1,100/day, Date Night $650–$950 — plus the honest cost drivers, island grocery reality, and the fee stack.',
    },
    intro:
      'The honest answer with the honest range: $125–$350 a guest depending on tier, or from $1,100 a day for multi-day service. Here’s what moves the number — and what a week actually totals.',
    sections: [
      {
        heading: 'The short answer',
        body: ['From the published Kauaʻi card:'],
        list: [
          'Table (family-style) — $125–$150 per guest',
          'Signature (coursed) — $150–$250 per guest',
          'Premium (tasting) — $250–$350 per guest',
          'Chef’s Table — from $350 per guest',
          'Date Night (two) — $650–$950 fixed',
          'Stay Chef (multi-day) — from $1,100 per day + groceries at cost',
        ],
      },
      {
        heading: 'The five cost drivers',
        body: ['In order of weight:'],
        list: [
          'Guest count — per-guest pricing means headcount is the multiplier',
          'Menu tier — Table to Chef’s Table spans $125–$350+ per guest',
          'Hawaiʻi grocery prices — 31–53% above mainland; why groceries sit inside dinner bands and at cost on stays',
          'Date — December and holiday weeks compress the calendar first',
          'Crew size — servers $55/hr, sous chefs $75/hr, 4-hour floor',
        ],
      },
      {
        heading: 'Worked examples (illustrative)',
        body: [
          'Four guests, Signature mid-band ($200): $800 for the evening, groceries included. Eight at Table top ($150) plus a server for four hours: $1,200 + $220. Twelve at Premium ($300) with a server and a sous: $3,600 + $520. Each then adds the shore surcharge where applicable, 20% service, and GET up to 4.7120% — on their own lines.',
          'A Stay Chef week (7 days) runs from $7,700 for the chef’s time plus groceries at cost — the full worked math lives on the Stay Chef cost page.',
        ],
        links: [{ label: 'Stay Chef cost, worked', href: 'pricing/stay-chef-cost' }],
      },
      {
        heading: 'What “all-inclusive” usually hides',
        body: [
          'One Kauaʻi competitor advertises all-inclusive at $200–$300 per person. Ask what the grocery allowance is, what the service charge covers, and what happens at twelve guests versus six. Our bands are published with groceries inside, the fee stack itemized, and the written quote fixed before the deposit — the comparison is invited.',
        ],
        links: [{ label: 'Us vs. the alternatives', href: 'compare/private-chef-vs-restaurant' }],
      },
    ],
    faq: [
      {
        q: 'Is a private chef cheaper than dining out on Kauaʻi?',
        a: 'For groups of 6–12 at dinner, often comparable or better — and nobody drives. A Signature dinner at $200/guest against a resort dining room’s entrees, wine markup, and transport is usually the better evening at a similar number.',
        links: [{ label: 'Chef vs. restaurant, compared', href: '/kauai/compare/private-chef-vs-restaurant' }],
      },
      {
        q: 'What’s the minimum spend?',
        a: 'Two-person evenings price as Date Night ($650–$950 fixed); per-guest bands apply from there up. There is no separate booking fee — the quote contains everything.',
      },
      {
        q: 'Do prices change by season?',
        a: 'The published card holds year-round. What changes in December is availability — dates compress — so early inquiry and the 50% deposit are the whole game.',
      },
    ],
    cta: { ...CTA_QUOTE, secondaryLabel: 'Estimate your table', secondaryHref: 'pricing/estimate' },
    keywords: ['how much does a private chef cost Kauai', 'private chef cost Kauai 2026'],
  },
  {
    slug: 'pricing/stay-chef-cost',
    category: 'pricing',
    title: 'Kauaʻi Chef Week Cost — Stay Chef Math, Worked by the Day',
    h1: 'What a chef week costs, worked.',
    parent: 'pricing',
    meta: {
      description:
        'Stay Chef cost on Kauaʻi worked day by day: from $1,100/day plus groceries at cost — a 7-day estate week itemized, with staffing, surcharges, and the fee stack on their own lines.',
    },
    intro:
      'Nobody else on the island publishes multi-day chef pricing. Here is a seven-day estate week worked line by line from the published card — the only weekly math on Kauaʻi.',
    sections: [
      {
        heading: 'The worked week (illustrative)',
        body: [
          'Seven days, ten guests, one staffed celebration night midweek. Every line traces to the published rate card; your quote itemizes your actual week the same way.',
        ],
      },
      {
        heading: 'Why day-rate beats per-meal',
        body: [
          'Pricing a week as fourteen separate “events” means fourteen minimums, fourteen setups, and a menu that never learns the table. The day rate prices the chef’s day once and lets the week breathe — breakfast appears, the beach cooler happens, dinner lands when the light does.',
          'Against the estate rental itself ($3,750–$8,250/night on the bluff corridor), the chef week is the line that makes the rest of the spend make sense.',
        ],
      },
      {
        heading: 'Groceries at cost, on an island',
        body: [
          'Kauaʻi food costs run 31–53% above the mainland. At-cost with receipts means you pay the true price of the week’s fish and greens — visible, auditable, never a padded allowance. The receipts envelope is part of the product.',
        ],
        links: [{ label: 'Groceries at cost, explained', href: 'guides/groceries-at-cost' }],
      },
    ],
    priceTable: {
      title: 'Illustrative 7-day estate week, 10 guests',
      rows: [
        { label: 'Stay Chef day rate × 7', value: 'from $7,700', note: 'From $1,100/day — planning, shopping, cooking, service, reset' },
        { label: 'Celebration-night staffing', value: '$520', note: 'Server ($55/hr) + sous ($75/hr) × 4-hr floor' },
        { label: 'Shore surcharge × 7', value: '$350–$525', note: '$50–$75/service day, Princeville or Poʻipū' },
        { label: 'Groceries', value: 'at cost', note: 'Receipts attached; island prices run 31–53% above mainland' },
        { label: 'Service charge', value: '20%', note: 'Itemized on its own line' },
        { label: 'Hawaiʻi GET', value: 'up to 4.7120%', note: 'On its own line, always' },
      ],
      footnote: `Illustrative math on published rates — not a quote. ${FEE_FOOTNOTE}`,
    },
    faq: [
      {
        q: 'Is there a weekly discount?',
        a: 'No invented discounts — the day rate is the published rate, and the written quote is the confirmed total. The honesty is the discount: you see every line.',
      },
      {
        q: 'Can the week include days off for the chef?',
        a: 'Yes — rest-day dinners you cook yourselves, restaurant nights you’ve booked: the quote charges only serviced days. The rhythm is yours; the math follows it.',
      },
      {
        q: 'What if our group is 16, not 10?',
        a: 'The day rate holds; staffing scales at published hourlys on bigger dinner nights, and groceries at cost scale honestly with appetites.',
      },
    ],
    cta: { ...CTA_QUOTE, secondaryLabel: 'The Stay Chef service', secondaryHref: 'stay-chef' },
    keywords: ['Kauai chef week cost', 'stay chef cost Kauai', 'weekly private chef Kauai'],
  },
  {
    slug: 'pricing/fee-stack',
    category: 'pricing',
    title: 'Service Charge & Tax Kauaʻi — The Fee Stack, Explained',
    h1: 'The fee stack, on its own lines.',
    parent: 'pricing',
    meta: {
      description:
        'myCHEF Kauaʻi fees explained: 20% service charge, Hawaiʻi GET up to 4.7120% (valid through 12/31/2030), 50% deposit — every fee on its own line, before you commit.',
    },
    intro:
      'Every myCHEF Kauaʻi quote shows the same fee stack on its own lines. This page is the long version of those lines — what they are, why they exist, and how they compare to the island’s norms.',
    sections: [
      {
        heading: 'The lines, verbatim',
        body: [
          FEE_FOOTNOTE,
          'That footnote appears on every quote and every rate card on this site. It is not marketing copy; it is the fee policy.',
        ],
      },
      {
        heading: 'The 20%, compared',
        body: [
          'Island venues and resorts commonly charge 23–25% service; at least one Kauaʻi caterer adds 25% gratuity across all food and drink. Our 20% is lower, and it is itemized — on a $10,000 event week, the five-point difference is $500 you can see.',
          'What it covers: coordination, menu writing, site and kitchen checks, the crew’s logistics, and the office that answers within a day. What it is not: a gratuity. Tips are voluntary, always, printed as such.',
        ],
      },
      {
        heading: 'GET, honestly',
        body: [
          'Hawaiʻi’s General Excise Tax applies to services including catering. We itemize it at the applicable rate — up to 4.7120%, valid through 12/31/2030 per current state guidance — rather than burying it in “prices.” If the law changes, the line changes; it will never be hidden.',
        ],
      },
      {
        heading: 'The 50% deposit',
        body: [
          'The deposit locks the date only after you have the written quote. Kauaʻi runs inquiry-first — we never hold a date we can’t crew — so the deposit conversation only happens when the quote and the crew both exist.',
        ],
        links: [{ label: 'Booking terms', href: 'legal' }],
      },
    ],
    faq: [
      {
        q: 'Is the 20% service charge a tip?',
        a: 'No — it covers coordination and operations, itemized on its own line. Gratuity is always voluntary and never assumed.',
      },
      {
        q: 'Why do some competitors’ quotes look cheaper?',
        a: 'Check the fee lines: 25% gratuity across all food and drink, bundled “service,” and grocery allowances are where the difference hides. Compare totals line by line — ours are built for it.',
      },
      {
        q: 'When is the balance due?',
        a: 'Booking terms render as proposed until counsel locks them: the 50% deposit locks dates; balance timing is stated in your quote. Terms page carries the cancellation and force-majeure details.',
        links: [{ label: 'Booking terms', href: '/kauai/legal' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Kauai catering service charge', 'Hawaii GET catering', 'private chef fees Kauai'],
  },
  {
    slug: 'pricing/travel-zones',
    category: 'pricing',
    title: 'Travel Zones Kauaʻi — Shore Surcharges, Published',
    h1: 'Travel zones, published like everything else.',
    parent: 'pricing',
    meta: {
      description:
        'Kauaʻi private chef travel zones: Kāpaʻa–Līhuʻe base (no surcharge), Princeville and Poʻipū $50–$75 per service day, far-North past Hanalei quoted at inquiry with the 72-hour bridge clause.',
    },
    intro:
      'Nobody on Kauaʻi publishes travel pricing. Here it is: base zone free, shores at $50–$75 per service day, far-North quoted at inquiry — and the bridge clause in writing.',
    sections: [
      {
        heading: 'The zones',
        body: ['Three zones, no fine print:'],
        list: [
          'Base — Kāpaʻa, Līhuʻe, and near corridors: no surcharge',
          'Shore — Princeville, Hanalei, Kīlauea, Poʻipū, Kōloa: $50–$75 per service day',
          'Far North — Wainiha, Hāʻena, past the Hanalei bridge: quoted at inquiry, 72-hour notice',
        ],
      },
      {
        heading: 'What the surcharge actually buys',
        body: [
          'An hour each way with a cooler, a kit, and a crew — priced as a flat line rather than a mileage formula, because a dinner quote shouldn’t require odometer math. On multi-day stays it applies per service day, itemized.',
        ],
      },
      {
        heading: 'The bridge clause, in context',
        body: [
          'Everything past Hanalei crosses one one-lane bridge and one stretch of highway that HDOT closes for documented work and weather. Far-North service therefore carries 72-hour notice and a written term: documented closures reschedule rather than forfeit. Your deposit does not evaporate over a landslide.',
        ],
        links: [{ label: 'The Hanalei bridge clause, in full', href: 'guides/hanalei-bridge-clause' }],
      },
      {
        heading: 'The west side, honestly',
        body: [
          'Waimea, Hanapēpē, Kalāheo: quoted at inquiry. The west side’s luxury rental stock is thin, and we’d rather quote the drive honestly per event than imply standing coverage we don’t run.',
        ],
        links: [{ label: 'Coverage, mapped', href: 'coverage' }],
      },
    ],
    faq: [
      {
        q: 'Is Hanalei “far North” for pricing?',
        a: 'No — Hanalei sits inside the standard $50–$75 shore surcharge. The far-North inquiry zone begins past the bridge: Wainiha and Hāʻena.',
      },
      {
        q: 'Do surcharges apply to multi-day stays?',
        a: 'Yes, per service day — a seven-day Princeville week carries seven surcharge lines, itemized. No bundling, no hiding.',
      },
      {
        q: 'What if the bridge closes mid-stay?',
        a: 'The written clause governs: documented closures reschedule the service rather than forfeit it. We track HDOT notices and plan shopping before crossings.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Kauai private chef travel fee', 'Princeville chef surcharge', 'Hanalei travel fee chef'],
  },
  {
    slug: 'pricing/estimate',
    category: 'pricing',
    title: 'Private Chef Estimate Kauaʻi — Two Minutes, Honest Ranges',
    h1: 'The Kauaʻi estimator.',
    parent: 'pricing',
    meta: {
      description:
        'Estimate a Kauaʻi private chef booking: pick service, tier, headcount, and shore — get an honest range built from published rates, then a written quote that is the confirmed total.',
    },
    intro:
      'An honest range, built from the published card — no email required. The estimator lives on the pricing page; the written quote it leads to is the confirmed total.',
    sections: [
      {
        heading: 'How the estimate works',
        body: [
          'Four inputs — service, menu tier, headcount, shore — multiplied against the published rate card, with the fee stack shown on its own lines. The output is a range, honestly labeled, and marked “estimate only” because the written quote is the confirmed total.',
          'Far-North service past Hanalei returns “quoted at inquiry” rather than a number — because the road, not the distance, is the variable, and we don’t fake precision.',
        ],
        links: [{ label: 'Open the estimator', href: 'pricing' }],
      },
      {
        heading: 'Why ranges, not point prices',
        body: [
          'Published bands exist because the fish and the farms set the week’s exact number inside them. A range that’s honest beats a point price that moves. The written quote converts the range into the fixed total before any deposit.',
        ],
      },
      {
        heading: 'What the estimate includes',
        body: ['Every line, like the quote it precedes:'],
        list: [
          'Per-guest or day-rate food pricing from the published bands',
          'Staffing at $55/hr servers, $75/hr sous where the format needs it',
          'Shore surcharges — $50–$75 to Princeville or Poʻipū',
          '20% service and GET up to 4.7120% on their own lines',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the estimate binding?',
        a: 'No — it’s labeled “estimate only” for exactly that reason. The written quote is the confirmed total, and it arrives before any deposit.',
      },
      {
      q: 'Do I need to give my email to see a price?',
        a: 'No. The estimator is open; the inquiry form is where the written quote begins. Price opacity is a sales tactic, not a necessity.',
      },
      {
        q: 'Why does far-North return no number?',
        a: 'Because past the Hanalei bridge the road is the variable — closures, notice windows, provisioning plans. We quote it at inquiry rather than invent precision.',
      },
    ],
    cta: { ...CTA_QUOTE, secondaryLabel: 'The full rate card', secondaryHref: 'pricing' },
    keywords: ['private chef estimate Kauai', 'Kauai chef price calculator'],
  },
  {
    slug: 'pricing/two-shore-coverage',
    category: 'pricing',
    title: 'Two-Shore Coverage Kauaʻi — North and South, One Quote',
    h1: 'Both shores, one written quote.',
    parent: 'pricing',
    meta: {
      description:
        'How two-shore coverage prices on Kauaʻi: split stays and reunion groups across North and South shores — surcharges itemized per service day, one contract, one written quote.',
    },
    intro:
      'Kauaʻi groups split across shores — a Princeville house and a Poʻipū house, or a stay that moves midweek. Two-shore coverage is one contract with surcharges itemized per service day.',
    sections: [
      {
        heading: 'The split-stay pattern',
        body: [
          'The classic Kauaʻi fortnight: a North Shore week in the summer prime, then a South Shore week for the dry-side finish — or the reverse, chasing the seasons. Chef service follows: same crew, same menu file, one contract covering both addresses.',
          'Pricing stays honest per day: the $50–$75 shore surcharge itemizes per service day at each address; base-zone days carry none. The quote shows the whole trip on one page.',
        ],
      },
      {
        heading: 'The multi-house reunion',
        body: [
          'Two rental houses, one family, dinners alternating shores — a Kauaʻi specialty. Per-guest pricing makes the family math clean; alternating service days keep surcharges minimal; one quote covers the whole reunion.',
        ],
        links: [{ label: 'Family reunions', href: 'occasions/family-reunion' }],
      },
      {
        heading: 'Where coverage honestly ends',
        body: [
          'Far-North past the Hanalei bridge runs on the 72-hour clause; the west side quotes at inquiry. Two-shore coverage means the whole island’s inhabited arc — with the edges stated, not implied.',
        ],
        links: [
          { label: 'Travel zones', href: 'pricing/travel-zones' },
          { label: 'Coverage, mapped', href: 'coverage' },
        ],
      },
    ],
    faq: [
      {
        q: 'Does switching shores mid-stay cost extra?',
        a: 'Only the published per-service-day surcharge at each shore address — no “transfer” fees. The quote itemizes the trip day by day.',
      },
      {
        q: 'Can one chef serve two houses on the same day?',
        a: 'One dinner service per evening per crew — alternating evenings across houses is the pattern that works. Larger groups wanting simultaneous service get a second crew quoted honestly.',
      },
      {
        q: 'Is two-shore coverage available for weddings?',
        a: 'Yes — rehearsal south, reception north happens. One wedding-week contract covers both, with surcharges itemized per event day.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Kauai two shore private chef', 'split stay chef Kauai', 'North South shore chef Kauai'],
  },
];

/** Kauaʻi compare pages (Table 4.2.3e rows 7–10) — category 'guide', CompareFrame voice. */
export const comparePages: ContentRecord[] = [
  {
    slug: 'compare/private-chef-vs-restaurant',
    category: 'guide',
    title: 'Private Chef vs Restaurant on Kauaʻi — The Honest Comparison',
    h1: 'Chef at the house, or the dining room?',
    parent: 'pricing',
    meta: {
      description:
        'Private chef vs restaurant on Kauaʻi: when each wins — per-person math, the drive factor, group economics, and the evenings where the restaurant is simply right.',
    },
    intro:
      'The honest comparison — including the evenings where we lose. A private chef isn’t always the answer on Kauaʻi; here’s when each wins.',
    sections: [
      {
        heading: 'When the restaurant wins',
        body: [
          'Two people wanting the scene and the walk along the water after. The night you want a bar’s energy. Spontaneity — restaurants take the 6:15 walk-in; we run inquiry-first. If the evening is about being out, be out.',
        ],
      },
      {
        heading: 'When the chef wins',
        body: [
          'Groups of 6–12: the restaurant version is a set menu, a long table the room resents, and a drive home in the dark on a two-lane road. The chef version is a coursed dinner at your own table — $150–$250 a guest against resort entrees, wine markup, and transport — where the kids’ bedtime doesn’t end the evening.',
          'Multi-night stays: seven restaurant dinners is a logistics chain; one Stay Chef week is a rhythm. And dietary-heavy tables: eleven flags handled in the menu call versus seven separate kitchen negotiations.',
        ],
      },
      {
        heading: 'The money, side by side (illustrative)',
        body: [
          'Eight guests, Signature mid-band: $1,600 + a server ($220) + fee stack, at your table. Eight at a resort dining room: entrees $45–$65 each, wine at restaurant markup, dessert, tax, tip, and two cars’ worth of driving. The totals land closer than expected; the evenings aren’t comparable.',
        ],
        links: [{ label: 'The published card', href: 'pricing' }],
      },
      {
        heading: 'The Kauaʻi-specific factor: the drive',
        body: [
          'The island’s best tables concentrate in a few corridors; the good rentals are everywhere else. Forty minutes of two-lane road each way is the real cost of dining out — and the reason “the restaurant is wherever you’re staying” lands so hard here.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is a private chef more expensive than eating out on Kauaʻi?',
        a: 'For couples at dinner, usually yes. For groups of 6–12, usually comparable — and the evening is better. For week-long stays, the Stay Chef math often wins outright once transport and markup count.',
      },
      {
        q: 'Can we mix — some dinners out, some in?',
        a: 'That’s the smart pattern: two or three chef dinners across the week, the food-truck lunches, the one great restaurant night. We’ll even tell you which restaurant night to keep.',
      },
      {
        q: 'What about the view?',
        a: 'Fair point — some rooms have the view your rental doesn’t. But bluff estates and bay-side verandas are their own dining rooms; the best view is often the one you already rented.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef vs restaurant Kauai', 'is a private chef worth it Kauai'],
  },
  {
    slug: 'compare/private-vs-personal-chef',
    category: 'guide',
    title: 'Private Chef vs Personal Chef on Kauaʻi — Which One You Need',
    h1: 'Private or personal? The honest split.',
    parent: 'pricing',
    meta: {
      description:
        'Private chef vs personal chef on Kauaʻi: event service ($125–$350/guest) vs recurring household service ($550–$1,200/week) — definitions, pricing, and which one your trip or household actually needs.',
    },
    intro:
      'The words blur online; the services don’t. Private chef means event service — dinners, stays, celebrations. Personal chef means recurring household rhythm. Here’s which one your situation actually needs.',
    sections: [
      {
        heading: 'The definitions that matter',
        body: [
          'A private chef cooks an event: the anniversary dinner, the wedding week, the Stay Chef estate stay. Pricing is per guest ($125–$350 by tier) or per day (from $1,100), with groceries inside dinner bands and at cost on stays.',
          'A personal chef runs a household’s food week: the weekly cook day, the stocked fridge, menus that learn the family. Pricing is the published weekly band — $550–$1,200 a week on Kauaʻi, groceries at cost.',
        ],
      },
      {
        heading: 'Which one you need, by situation',
        body: ['The decision tree, honestly:'],
        list: [
          'Visiting for a week, want dinners handled → private chef (Stay Chef or per-dinner)',
          'Living here, want the week’s meals cooked → personal chef (weekly band)',
          'One special evening → private chef (per-guest bands or Date Night)',
          'A retreat or wedding → private chef (event contracts)',
          'Both, alternating → both — many households run weekly service plus event dinners',
        ],
        links: [
          { label: 'Private chef service', href: 'private-chef' },
          { label: 'Personal chef service', href: 'services/personal-chef' },
        ],
      },
      {
        heading: 'The pricing comparison',
        body: [
          'A weekly personal-chef cook day ($550–$1,200/week) feeds a household for days; a single private-chef dinner ($150–$250/guest) feeds an evening. They’re not competitors — they’re different products that happen to share a stove.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can the same chef do both?',
        a: 'Yes — same kitchen standard, same written-quote discipline. Many Kauaʻi households run a weekly cook day and book event dinners separately when the occasion lands.',
      },
      {
        q: 'Is a personal chef worth it for a small household?',
        a: 'At the $550 end for a couple’s week of dinners, the math compares to takeout done properly — with better food and no containers. Whether that’s “worth it” is honestly a lifestyle call, not a savings play.',
      },
      {
        q: 'Do personal chefs cook on-site?',
        a: 'Yes — the weekly cook day happens in your kitchen, with the fridge stocked and labeled by early afternoon and the kitchen left clean.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef vs personal chef Kauai', 'personal chef cost Kauai'],
  },
  {
    slug: 'compare/freelance-vs-mychef',
    category: 'guide',
    title: 'Freelance Chef vs myCHEF Kauaʻi — The Honest Trade-Offs',
    h1: 'The Facebook chef vs. the written quote.',
    parent: 'pricing',
    meta: {
      description:
        'Freelance private chef vs myCHEF on Kauaʻi: price opacity vs published rates, no backup vs confirmed crews, handshake vs written quote — the honest trade-offs, including when a freelancer is right.',
    },
    intro:
      'Half of Kauaʻi’s private-chef market is one person with an Instagram and a Venmo. Sometimes that’s fine. Here’s the honest comparison — including the parts where the freelancer wins.',
    sections: [
      {
        heading: 'Where the freelancer wins',
        body: [
          'Price, sometimes: no office, no coordination layer. Flexibility, sometimes: a handshake can do things a contract can’t. And occasionally a brilliant cook working solo is exactly the right answer for a small casual dinner — we’ll say so.',
        ],
      },
      {
        heading: 'Where the structure wins',
        body: [
          'Everything that goes wrong at scale. The freelancer’s flu is your canceled anniversary dinner; our inquiry-first rule means we never hold a date we can’t crew, and the roster backs every booking. The freelancer’s price is a text message; ours is a written quote that is the confirmed total — 20% service and GET itemized, not discovered.',
          'Kauaʻi’s market reality sharpens this: half the island’s “chefs” don’t quote in writing at all. Of the fourteen operators we track, two publish any price. The written quote isn’t a feature; on this island it’s a category difference.',
        ],
        links: [{ label: 'How we vet chefs', href: 'how-we-vet-chefs' }],
      },
      {
        heading: 'The questions to ask either of us',
        body: ['Print this for any inquiry, ours included:'],
        list: [
          'Do I get a written quote that is the confirmed total?',
          'What happens if you’re sick on my date?',
          'Show me the service charge and tax lines.',
          'Who exactly is cooking, and what’s their background?',
          'What does the deposit lock, and when?',
        ],
      },
    ],
    faq: [
      {
        q: 'Is a freelancer cheaper?',
        a: 'Sometimes at the quote stage; the comparison that matters is total-at-the-end. Bundled “service,” grocery allowances, and day-of surprises are where informal pricing grows. Our written quote is the confirmed total.',
      },
      {
        q: 'What if my freelancer cancels?',
        a: 'That’s the structural risk: one person is one point of failure. Our roster model exists so a sick chef is a scheduling problem, not your problem.',
      },
      {
        q: 'Does myCHEF mark up the chef?',
        a: 'The 20% service charge is the coordination layer, itemized and lower than the island’s 23–25% norms. What it buys — vetting, backup, the written quote — is on this page to be judged.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['freelance chef vs service Kauai', 'hire private chef safely Kauai'],
  },
  {
    slug: 'compare/marketplace-vs-mychef',
    category: 'guide',
    title: 'Take a Chef vs myCHEF Kauaʻi — Marketplace vs Written Quote',
    h1: 'The marketplace vs. the written quote.',
    parent: 'pricing',
    meta: {
      description:
        'Chef marketplaces (Take a Chef and peers) vs myCHEF on Kauaʻi: bid-inbox pricing vs a published rate card, platform fees vs an itemized 20%, and why island logistics break marketplace models.',
    },
    intro:
      'The marketplace model: post a request, get bids from whoever’s available, hope the platform’s fee is the only surprise. The myCHEF model: published rates, a written quote, a roster we actually manage. On Kauaʻi, the difference is structural.',
    sections: [
      {
        heading: 'How the marketplace works — and where it bends',
        body: [
          'Marketplaces are matching engines: your request goes to a pool, bids come back, the platform takes its cut somewhere in the spread. On O‘ahu’s deep chef pool, matching works. On Kauaʻi — fourteen operators total, half without written quotes — the marketplace is matching you to the same thin pool with an extra fee in the middle.',
          'Bid pricing also hides the card: every proposal is its own universe of inclusions, and comparing them is work. Our rate card is one page; the quote is arithmetic on it.',
        ],
      },
      {
        heading: 'The Kauaʻi logistics problem',
        body: [
          'Marketplaces don’t know about the bridge. A chef bidding on your Hāʻena dinner from a profile photo has not necessarily thought about HDOT closures, 72-hour provisioning, or what happens when it rains on the one road. Our far-North clause exists because we run the road; the bid model has no place to put that clause.',
        ],
        links: [{ label: 'The bridge clause', href: 'guides/hanalei-bridge-clause' }],
      },
      {
        heading: 'Where the marketplace wins',
        body: [
          'Honesty requires this: breadth of choice for a casual dinner, sometimes price discovery at the budget end, and instant gratification — bids arrive fast. If your evening is low-stakes and price-led, a marketplace can be the right tool.',
          'For the estate week, the wedding, the retreat, or any date that must happen — the written quote and the managed roster exist for exactly those stakes.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is myCHEF more expensive than a marketplace?',
        a: 'Compare totals, not headlines: platform fees, bid variance, and grocery allowances blur marketplace totals. Our 20% service is itemized, the quote is the confirmed total, and the rate card is published.',
      },
      {
        q: 'Do marketplaces vet Kauaʻi chefs?',
        a: 'Profile-vetting varies by platform; our roster is managed directly — menus reviewed, kitchens assessed, insurance verified. The vetting page states the standard.',
        links: [{ label: 'How we vet chefs', href: '/kauai/how-we-vet-chefs' }],
      },
      {
        q: 'Why not just list on marketplaces too?',
        a: 'Because the written quote is the product. A bid inbox can’t carry the bridge clause, the fee-stack discipline, or the inquiry-first honesty rule.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['take a chef Kauai alternative', 'chef marketplace Kauai', 'hire a chef Kauai direct'],
  },
];
