import type { ContentRecord } from '@/platform/types';
import { CTA_QUOTE } from './shared';

/** Kauaʻi occasions cluster (Table 4.2.3b rows 8–16): index + 8 occasions. */
export const occasions: ContentRecord[] = [
  {
    slug: 'occasions',
    category: 'occasion',
    title: 'Private Chef for Events Kauaʻi — Every Occasion, One Standard',
    h1: 'Point us at the table.',
    parent: '',
    meta: {
      description:
        'Private chef occasions on Kauaʻi: birthdays, anniversaries, proposals, family reunions, holiday dinners, villa parties, corporate offsites, celebrations of life — every one quoted in writing.',
      ogImage: '/img/kauai/card-estate-dinner.jpg',
    },
    intro:
      'Whatever the table is for, the shape is the same: published prices, a written quote, a kitchen left clean. Tell us the occasion and the headcount; we name the package.',
    sections: [
      {
        heading: 'The occasions, one by one',
        body: ['Each occasion has its own page, its own price anchor, its own honest notes:'],
        links: [
          { label: 'Birthday dinners', href: 'occasions/birthday' },
          { label: 'Anniversaries', href: 'occasions/anniversary' },
          { label: 'Proposals', href: 'occasions/proposal' },
          { label: 'Family reunions', href: 'occasions/family-reunion' },
          { label: 'Holiday dinners', href: 'occasions/holiday-dinner' },
          { label: 'Villa parties', href: 'occasions/villa-party' },
          { label: 'Corporate offsites', href: 'occasions/corporate-offsite' },
          { label: 'Celebrations of life', href: 'occasions/celebration-of-life' },
        ],
      },
      {
        heading: 'The price anchors, up front',
        body: ['From the published Kauaʻi card:'],
        list: [
          'Dinners for two (proposals, anniversaries) — Date Night $650–$950 fixed',
          'Family tables (birthdays, reunions) — $125–$250/guest by tier',
          'Big gatherings (villa parties, offsites) — per-guest bands + staffing, 10–75 guests',
          'Holiday weeks — the same card, honestly compressed calendars',
        ],
      },
      {
        heading: 'One promise across all of them',
        body: [
          'The written quote is the confirmed total. No occasion page on this site ends in a number that changes later — 20% service and GET up to 4.7120% on their own lines, every time, before you commit.',
        ],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef for events Kauai', 'Kauai event chef'],
  },
  {
    slug: 'occasions/birthday',
    category: 'occasion',
    title: 'Birthday Private Chef Kauaʻi — The Milestone Table',
    h1: 'The birthday dinner, at the house.',
    parent: 'occasions',
    meta: {
      description:
        'Birthday private chef on Kauaʻi: milestone dinners at your rental or estate, $125–$250 per guest, kids’ tables and dietary flags handled — the kitchen left clean, the evening yours.',
    },
    intro:
      'Sixty deserves better than a reservation for twelve at seven-oh-whatever-they-have. The birthday dinner happens at the house: the menu written around the guest of honor, the kitchen invisible, the dishes not your problem.',
    sections: [
      {
        heading: 'The evening, shaped',
        body: [
          'Family-style for the loud tables — Table band $125–$150 a guest, platters down the middle, seconds guaranteed. Coursed for the milestone evenings — Signature $150–$250, the guest of honor’s favorite food elevated by someone who cooks for a living.',
          'The menu call covers the person, not just the palate: what they order when nobody’s watching, the dish from the trip they still talk about. That’s the brief.',
        ],
      },
      {
        heading: 'The logistics of a good surprise',
        body: [
          'We’ve done the “everyone hide in the kitchen” arrival and the quiet dinner that turns out to have a second seating of cousins. Timing, parking, the decoy plan — settled in the inquiry exchange, invisible on the night.',
        ],
      },
      {
        heading: 'Kids, grandparents, one kitchen',
        body: [
          'Birthday tables are the most generationally mixed we cook: early kids’ seating, the grandparent who needs low-sodium, the vegan cousin. All standard, all inside the same quote.',
        ],
        links: [{ label: 'Kids’ menus', href: 'services/kids-menus' }],
      },
    ],
    faq: [
      {
        q: 'What does a birthday dinner for 12 cost?',
        a: 'Twelve at the Signature mid-band ($200) is $2,400 for food and service, plus the fee stack on its own lines and any shore surcharge. The written quote fixes the number before the date is held.',
      },
      {
        q: 'Can you do a cake?',
        a: 'A birthday dessert course, absolutely — and we coordinate with island bakers when the occasion wants a proper cake, quoted separately with no mystery markup.',
      },
      {
        q: 'How far ahead for a December birthday?',
        a: 'December compresses the whole island: a month minimum, six weeks comfortable. Other seasons, two to three weeks usually finds the date.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['birthday private chef Kauai', 'birthday dinner chef Kauai'],
  },
  {
    slug: 'occasions/anniversary',
    category: 'occasion',
    title: 'Anniversary Dinner Private Chef Kauaʻi — No Reservation App',
    h1: 'Twenty years in, dinner shouldn’t need an app.',
    parent: 'occasions',
    meta: {
      description:
        'Anniversary dinners on Kauaʻi: Date Night $650–$950 fixed for two, or a family anniversary table $150–$250/guest — cooked in your villa, at the hour the light is right.',
    },
    intro:
      'Your chef cooks the meal you talked about on the flight over, in the villa, at the hour the light is right. Date Night runs $650–$950 fixed for two; bigger family anniversaries price per guest from the published bands.',
    sections: [
      {
        heading: 'For two',
        body: [
          'A coursed menu written around the two of you — the dish from your first trip, the wine you actually like, the pace the evening wants. $650–$950 fixed, groceries inside, kitchen left clean. On a Hanalei veranda or a Poʻipū lānai, the restaurant is wherever you’re staying.',
        ],
        links: [{ label: 'Date Night, in detail', href: 'services/date-night' }],
      },
      {
        heading: 'For the whole family',
        body: [
          'The 40th with kids and grandkids is a different and better chaos: one big table, family-style platters, the anniversary toast before dessert. $125–$250 a guest by tier, kids’ plates priced honestly, everyone’s flags settled before the shopping.',
        ],
      },
      {
        heading: 'The details that mark it',
        body: [
          'The menu printed for the table as a keepsake. The first-dance song era’s food, if you’re game. A next-morning brunch for the ones staying over. All quoted in writing; nothing appears on the invoice that wasn’t on the quote.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does an anniversary dinner for two cost on Kauaʻi?',
        a: 'Date Night is $650–$950 fixed with groceries included; 20% service and GET up to 4.7120% appear on their own lines. Princeville and Poʻipū add the $50–$75 shore surcharge.',
      },
      {
        q: 'Can you recreate a dish from our wedding?',
        a: 'Send the memory — the menu, a photo, a description — and the menu call turns it into courses. Recreation with better fish is one of the great anniversary formats.',
      },
      {
        q: 'Is a vow-renewal dinner different?',
        a: 'In format, no; in feeling, entirely. Vow renewals usually run as a small family table with a Date Night’s care — tell us the shape and the quote follows it.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['anniversary dinner private chef Kauai', 'anniversary chef Kauai'],
  },
  {
    slug: 'occasions/proposal',
    category: 'occasion',
    title: 'Proposal Dinner Private Chef Kauaʻi — Timed to the Yes',
    h1: 'The dinner where the ring lands.',
    parent: 'occasions',
    meta: {
      description:
        'Proposal dinners on Kauaʻi: Date Night $650–$950 fixed, courses timed around the question, photographer coordination, complete discretion — verandas and gardens on both shores.',
    },
    intro:
      'We’ve timed dessert courses around rings before. A proposal dinner is a Date Night with choreography: $650–$950 fixed, the courses built around your signal, and a kitchen that knows how to be invisible until it matters.',
    sections: [
      {
        heading: 'The choreography',
        body: [
          'You tell us the plan in the inquiry — the moment, the signal, the photographer’s hiding spot. The menu is written around it: nothing flambéed during the question, the toast wine poured before, dessert timed to the yes rather than the clock.',
          'If the plan changes mid-evening — nerves, weather, a spontaneous sunset walk — the kitchen flexes. The proposal runs the dinner, not the reverse.',
        ],
      },
      {
        heading: 'Where it works',
        body: [
          'Your veranda or garden, honestly, beats any overlook: private, controllable, and dinner follows the yes without a drive. Hanalei bay-side houses in summer, Poʻipū gardens in winter, Kīlauea estates year-round. We cook where you’re staying.',
        ],
        links: [{ label: 'North Shore tables', href: 'locations/hanalei' }],
      },
      {
        heading: 'After the yes',
        body: [
          'Some couples book the elopement dinner for later in the week — same $650–$950 fixed format, this time with the paperwork done. Some book the engagement announcement dinner for the family flying in. Both are our favorite kind of repeat customer.',
        ],
        links: [{ label: 'Elopement dinners', href: 'weddings/elopement' }],
      },
    ],
    faq: [
      {
        q: 'Can you keep it a secret from my partner?',
        a: 'Discretion is the format: inquiry by your channel only, arrival while they’re out or “the rental’s welcome dinner,” and a crew that has absolutely done this before.',
      },
      {
        q: 'What does a proposal dinner cost?',
        a: 'Date Night pricing: $650–$950 fixed, groceries inside, fee stack itemized. Photographer timing coordination is free; the photographer is yours to book.',
      },
      {
        q: 'What if it rains?',
        a: 'On Kauaʻi, the rain plan is the plan: covered veranda service as default, and the menu doesn’t care about weather. We make the call with you 48 hours out.',
        links: [{ label: 'Weather backup planning', href: '/kauai/guides/weather-backup' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['proposal dinner private chef Kauai', 'Kauai proposal chef'],
  },
  {
    slug: 'occasions/family-reunion',
    category: 'occasion',
    title: 'Family Reunion Catering Kauaʻi — Ten People, One Table',
    h1: 'The reunion table, without the cooking rotation.',
    parent: 'occasions',
    meta: {
      description:
        'Family reunion catering on Kauaʻi: 10-person rental-house groups fed family-style from $125–$150/guest, both-shore logistics, kids’ tables and dietary flags handled.',
    },
    intro:
      'The Kauaʻi reunion shape is known: ten to sixteen people, one big rental house, and a cooking rotation somebody always loses. We end the rotation — family-style dinners from $125–$150 a guest, or the whole week under a Stay Chef.',
    sections: [
      {
        heading: 'Built for the rental-house group',
        body: [
          'The forums are full of ten-person families asking how to feed everyone in a Princeville house — this page is the answer. Family-style platters down a long table, kids fed early, the dietary flags (there are always flags) settled before the shopping.',
          'Two or three dinners across the week is the common pattern: arrival night, the midweek celebration, the farewell. Each prices from the same published card.',
        ],
        links: [{ label: 'Stay Chef for the whole week', href: 'stay-chef' }],
      },
      {
        heading: 'Both shores, one contract',
        body: [
          'Reunions split across two rentals — one Princeville, one Poʻipū — are a Kauaʻi specialty of ours: dinners on alternating shores, surcharges itemized per service day, one quote covering the whole family’s week.',
        ],
        links: [{ label: 'Two-shore coverage', href: 'pricing/two-shore-coverage' }],
      },
      {
        heading: 'The money, split fairly',
        body: [
          'Per-guest pricing makes the family math clean: the quote shows per-person lines, and splitting it is arithmetic, not negotiation. Groceries inside the band on dinners; at cost with receipts on weeks.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does feeding a 14-person reunion cost?',
        a: 'Family-style at the Table band ($125–$150/guest): fourteen guests runs $1,750–$2,100 per dinner, groceries included, plus staffing if you want full service and the fee stack on its own lines.',
      },
      {
        q: 'Can you handle three generations’ dietary needs?',
        a: 'Weekly — the eleven standard flags, separate allergen prep, kids’ plates, and the grandparent’s low-sodium line all settle in the menu call, labeled per dish.',
      },
      {
        q: 'We have two houses on different shores — one contract?',
        a: 'Yes — one quote, alternating-shore dinners, surcharges itemized per service day. Simpler for you, and honestly easier for us than pretending a single shore fits everyone.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['family reunion catering Kauai', 'family reunion chef Kauai', 'group dinner Kauai rental'],
  },
  {
    slug: 'occasions/holiday-dinner',
    category: 'occasion',
    title: 'Christmas Private Chef Kauaʻi — Holiday Tables, Booked Early',
    h1: 'The holiday table, without the holiday kitchen.',
    parent: 'occasions',
    meta: {
      description:
        'Holiday private chef on Kauaʻi: Christmas and New Year estate dinners, Thanksgiving tables, December week-long Stay Chef service — December compresses first; the calendar truth, published.',
    },
    intro:
      'December is Kauaʻi’s compression point: peak rates, full estates, and every kitchen on the island booked. The holiday table is our most valuable and most honest page: same published card, earlier deadlines.',
    sections: [
      {
        heading: 'The December truth',
        body: [
          'Holiday weeks are when the island’s rental stock peaks — December daily rates run well above fall — and when chef demand compresses hardest. We don’t add holiday surcharges to the published card; we do run out of dates. Sixty days out is the honest floor for Christmas week; ninety is comfortable.',
          'The 50% deposit locks the date after the written quote — and in December, the quote window matters more than the menu.',
        ],
      },
      {
        heading: 'The holiday table itself',
        body: [
          'Christmas dinner as a Signature coursed evening or a Premium tasting; Thanksgiving as the island’s best family-style table — local farms’ squash, the good bird, pies that didn’t travel. New Year’s Eve with the bar cart ($850/4hr + $60/guest, alcohol client-supplied or via licensed referral).',
          'Estate weeks over the holidays fold the feasts into the Stay Chef rhythm: from $1,100/day, with the celebration nights crewed at published hourlys.',
        ],
        links: [{ label: 'Estate-week chef', href: 'services/estate-week-chef' }],
      },
      {
        heading: 'Both shores at the holidays',
        body: [
          'December is South Shore season — drier, calmer, the reliable holiday bet — but North Shore estate weeks over Christmas are their own tradition, booked with the pantry plan and the bridge clause where applicable.',
        ],
        links: [{ label: 'Shore seasonality', href: 'guides/shore-seasonality' }],
      },
    ],
    faq: [
      {
        q: 'Is there a holiday surcharge?',
        a: 'No invented surcharges — the published card holds. The honest December cost is availability: dates compress, so early inquiry and a locked deposit are the whole game.',
      },
      {
        q: 'How early should Christmas week book?',
        a: 'Sixty days minimum, ninety comfortable. Christmas-week estate service is the first thing on the island to sell out, every year, without exception.',
      },
      {
        q: 'Can you cook a traditional holiday meal?',
        a: 'Yes — the full traditional table, or the island version of it, or both across the week. Dietary flags and kids’ tables fold in as always.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Christmas private chef Kauai', 'holiday catering Kauai', 'Thanksgiving chef Kauai'],
  },
  {
    slug: 'occasions/villa-party',
    category: 'occasion',
    title: 'Villa Party Catering Kauaʻi — Pūpū Hours to Full Receptions',
    h1: 'The house party, professionally fed.',
    parent: 'occasions',
    meta: {
      description:
        'Villa party catering on Kauaʻi: pūpū and grazing formats, chef-attended stations, the bar cart — 10–75 guests staffed, per-guest pricing, house rules respected.',
    },
    intro:
      'The villa party is its own format: not a seated dinner, not a venue event — a house full of people who should never see the kitchen working. Pūpū hours, grazing tables, attended stations, 10–75 guests.',
    sections: [
      {
        heading: 'Formats that fit a house',
        body: ['By energy level:'],
        list: [
          'The pūpū hour that becomes the evening — grazing and tray pass, quoted per event',
          'Chef-attended stations — Premium band + staffing; the poke station alone justifies the party',
          'Family-style big table — $125–$150/guest for the sit-down version',
          'The bar cart alongside — $850/4hr + $60/guest, alcohol client-supplied or via licensed referral',
        ],
        links: [{ label: 'Pūpū & grazing menus', href: 'menus/pupu-and-grazing' }],
      },
      {
        heading: 'House rules are part of the quote',
        body: [
          'Rental houses have rules — guest counts, quiet hours, parking limits — and the party works inside them or doesn’t work. We settle the house rules in the inquiry exchange; a party that violates the rental agreement is a bad night for everyone, including us.',
          'Load-in, power, and the rain plan are assessed in the quote phase. Kauaʻi evenings are kind; the covered lānai is the default dance floor.',
        ],
      },
      {
        heading: 'The staffing math',
        body: [
          'Standing formats run one server per 15–20 guests; the bar runs its own line; a sous holds the stations. All of it published — $55/hr servers, $75/hr sous, 4-hour floor — and itemized before the deposit.',
        ],
        links: [{ label: 'Event staffing', href: 'services/staffing' }],
      },
    ],
    faq: [
      {
        q: 'What does a villa party for 30 cost?',
        a: 'Thirty guests on a pūpū-and-stations format runs roughly $4,500–$7,500 for food depending on depth, plus two to three servers and a sous at published hourlys, the bar cart if you want it, and the fee stack on its own lines.',
      },
      {
        q: 'Will our rental allow a catered party?',
        a: 'Check the house rules first — most allow catered gatherings within guest-count limits, many prohibit events beyond occupancy. We work inside the rules; the quote phase includes the access conversation.',
      },
      {
        q: 'How late can service run?',
        a: 'The crew works to your timeline within house rules and county noise norms; late-night formats quote the extended hours honestly in advance.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['villa party catering Kauai', 'house party chef Kauai', 'pupu catering Kauai'],
  },
  {
    slug: 'occasions/corporate-offsite',
    category: 'occasion',
    title: 'Corporate Offsite Catering Kauaʻi — The Working Table',
    h1: 'Offsites that eat like they matter.',
    parent: 'occasions',
    meta: {
      description:
        'Corporate offsite catering on Kauaʻi: team dinners, retreat-week full board, celebration evenings — itemized per-person pricing, dietary census handled, invoices finance teams approve.',
    },
    intro:
      'The offsite’s food should be the easy part: itemized per-person pricing, every dietary flag handled without a meeting about it, and an invoice your finance team approves without a follow-up email.',
    sections: [
      {
        heading: 'The offsite formats',
        body: ['By agenda:'],
        list: [
          'Team dinners at the rental — Signature $150–$250/guest, plated or family-style',
          'Full-board retreat weeks — $250–$300+/person/day, the whole program fed',
          'Working lunches during sessions — built to not sedate the afternoon',
          'The closing celebration — Premium band, bar cart, the toast that lands',
        ],
        links: [{ label: 'Corporate retreats, in depth', href: 'retreat-catering/corporate-retreats' }],
      },
      {
        heading: 'The dietary census, solved',
        body: [
          'We send the template; your coordinator collects flags at registration; the menus come back labeled per dish. Allergen prep is separate; nobody eats a visibly “special” plate in front of colleagues. It’s infrastructure, not accommodation theater.',
        ],
      },
      {
        heading: 'Paperwork, designed for finance',
        body: [
          'One written quote, itemized by line — food, staffing, travel, 20% service, GET up to 4.7120% — and the quote is the confirmed total. The expense report becomes a photocopy; the receipts envelope covers the groceries.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does an offsite dinner for 20 cost?',
        a: 'Twenty at the Signature mid-band ($200) is $4,000 for food and service, plus any staffing and the bar cart if you want it — then 20% service and GET on their own lines. The written quote fixes everything.',
      },
      {
        q: 'Can you cater a multi-day offsite?',
        a: 'Yes — that’s the retreat product: one contract, every meal, 8–30 guests across 3–7 days, priced per person per day from published rates.',
      },
      {
        q: 'Alcohol policy?',
        a: 'Client-supplied or via licensed bartending referral; we do not sell alcohol. The posture prints on the quote — HR-friendly by default.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['corporate offsite catering Kauai', 'company retreat Kauai chef', 'team dinner Kauai'],
  },
  {
    slug: 'occasions/celebration-of-life',
    category: 'occasion',
    title: 'Celebration of Life Catering Kauaʻi — We Handle the Food',
    h1: 'So the family can be together.',
    parent: 'occasions',
    meta: {
      description:
        'Celebration of life catering on Kauaʻi: calm planning, plain pricing, quiet service for family gatherings on both shores. We handle the food so the family can be together.',
    },
    intro:
      'Some gatherings shouldn’t have to think about food. We plan quietly, price plainly, serve gently, and leave the kitchen clean — the family’s day belongs to the family.',
    sections: [
      {
        heading: 'How we work these days',
        body: [
          'One planning call, kept short. A menu shaped around the person — the dishes they were known for, the table they’d have set. Service that reads the room: present when needed, invisible when not.',
          'Pricing is the same published card, stated plainly: family-style from $125–$150 a guest, staffing at $55 an hour, the fee stack itemized. No packages, no upsells, no follow-up calls.',
        ],
      },
      {
        heading: 'The practical parts, handled',
        body: [
          'We coordinate with the house, the church hall, or the beachside park pavilion on access and timing. Dietary needs of elderly guests and kids are handled quietly. Leftovers are packed for the family — tomorrow should be easier too.',
          'East Side and South Shore gatherings are base-zone; North Shore carries the standard surcharge. Far-North family land past Hanalei — we know the road, and we plan for it.',
        ],
      },
      {
        heading: 'Timing',
        body: [
          'These gatherings rarely plan months out, and we hold flexibility for them: tell us the date and the headcount and we answer honestly — yes or no — within a day. If we can crew it, the written quote follows immediately.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cater on short notice?',
        a: 'We answer within a day, honestly. When the roster allows, yes — and we keep the planning burden near zero: one short call, one written quote, and we take it from there.',
      },
      {
        q: 'What does it cost?',
        a: 'Family-style service from $125–$150 per guest, staffing $55/hr, 20% service and GET itemized. The written quote is the confirmed total; nothing is added later.',
      },
      {
        q: 'Can you serve at a beachside pavilion or family property?',
        a: 'Yes — we coordinate access, power, and water needs with the venue or the family beforehand, and we keep the setup quiet and quick.',
      },
    ],
    cta: { label: 'Talk to us', href: 'quote', note: 'One short call or message is enough. We answer within a day, honestly — and if we can crew your date, the written quote follows immediately.' },
    keywords: ['celebration of life catering Kauai', 'memorial catering Kauai', 'funeral reception Kauai'],
  },
];
