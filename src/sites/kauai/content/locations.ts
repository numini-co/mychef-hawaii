import type { ContentRecord } from '@/platform/types';
import { CTA_QUOTE, CTA_RETREAT, BRIDGE_SECTION, SEASON_NORTH, SEASON_SOUTH, PROVENANCE } from './shared';

/** Kauaʻi locations cluster (Table 4.2.3a rows 27–43): index + 6 areas + 10 service×location. */
export const locations: ContentRecord[] = [
  {
    slug: 'locations',
    category: 'location',
    title: 'Private Chef Kauaʻi — Areas Served, Both Shores',
    h1: 'Two shores, one east side, honestly mapped.',
    parent: '',
    meta: {
      description:
        'Where myCHEF cooks on Kauaʻi: North Shore (Princeville, Hanalei, Kīlauea), South Shore (Poʻipū, Kōloa), East Side (Kāpaʻa–Līhuʻe) — with drive times, shore surcharges, and the far-North bridge clause.',
      ogImage: '/img/kauai/shore-north.jpg',
    },
    intro:
      'Kauaʻi is one island and two commitments. North Shore estates peak June through September; the South Shore carries November through March; the East Side is the year-round residential belt. Surcharges and closure rules are published, not discovered.',
    sections: [
      {
        eyebrow: 'North Shore',
        heading: 'Princeville · Hanalei · Kīlauea',
        body: [
          SEASON_NORTH,
          'Bluff estates and plantation houses above the bay; $50–$75 shore surcharge from our base; everything past the Hanalei bridge runs on 72-hour notice with the written closure clause.',
        ],
        media: { src: '/img/kauai/shore-north.jpg', alt: 'Hanalei taro fields backed by waterfall-striped mountains in morning mist', ratio: '4/5' },
        links: [
          { label: 'Princeville', href: 'locations/princeville' },
          { label: 'Hanalei', href: 'locations/hanalei' },
          { label: 'Kīlauea', href: 'locations/kilauea' },
        ],
      },
      {
        eyebrow: 'South Shore',
        heading: 'Poʻipū · Kōloa',
        body: [
          SEASON_SOUTH,
          'The dry side: garden estates, plantation architecture, the Kukuiʻula belt. Same $50–$75 shore surcharge; no bridge between us and dinner.',
        ],
        media: { src: '/img/kauai/shore-south.jpg', alt: 'A Poʻipū estate garden under soft post-rain light', ratio: '4/5' },
        links: [
          { label: 'Poʻipū', href: 'locations/poipu' },
          { label: 'Kōloa', href: 'locations/koloa' },
        ],
      },
      {
        eyebrow: 'East Side',
        heading: 'Kāpaʻa · Līhuʻe',
        body: [
          'The island’s largest towns and its residential heart: base-zone service with no surcharge, the strongest year-round availability, and the island’s only combined East Side page — because that’s how the demand actually reads.',
        ],
        links: [{ label: 'Kāpaʻa–Līhuʻe', href: 'locations/kapaa-lihue' }],
      },
      {
        eyebrow: 'The honest edges',
        heading: 'Far North and the west',
        body: [
          'Wainiha and Hāʻena are served under the bridge clause: 72-hour notice, documented closures reschedule rather than forfeit. West-side requests — Waimea, Hanapēpē, Kalāheo — are quoted at inquiry; the rental stock there is thin and we’d rather say so than imply a fleet.',
        ],
        links: [
          { label: 'The bridge clause', href: 'guides/hanalei-bridge-clause' },
          { label: 'Coverage and travel zones', href: 'coverage' },
        ],
      },
    ],
    faq: [
      {
        q: 'Do you charge travel fees on Kauaʻi?',
        a: 'Kāpaʻa–Līhuʻe and near corridors are base zone. Princeville and Poʻipū carry a $50–$75 shore surcharge per service day. Far-North service past Hanalei is quoted at inquiry with 72-hour notice.',
        links: [{ label: 'Travel zones, line by line', href: '/kauai/pricing/travel-zones' }],
      },
      {
        q: 'Which shore should we stay on?',
        a: 'Summer and holidays: North Shore, at its best June–September. November through March: the South Shore is drier and calmer. The seasons invert, which is exactly why our coverage runs both.',
        links: [{ label: 'The two-shore season guide', href: '/kauai/guides/shore-seasonality' }],
      },
      {
        q: 'Do you serve Waimea or Hanapēpē?',
        a: 'At inquiry, honestly: the west side has thin luxury rental stock, so we quote per event rather than imply standing coverage. If we can crew it, the written quote says exactly what it costs.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef Kauai areas served', 'Kauai private chef coverage'],
  },
  {
    slug: 'locations/princeville',
    category: 'location',
    title: 'Private Chef Princeville — Bluff Estates, Summer Prime',
    h1: 'Private chef Princeville.',
    parent: 'locations',
    meta: {
      description:
        'Private chef service in Princeville, Kauaʻi: bluff-estate dinners $150–$250/guest, Stay Chef weeks from $1,100/day, estate portfolios from the concierge belt. Shore surcharge $50–$75, published.',
      ogImage: '/img/kauai/shore-north.jpg',
    },
    intro:
      'The North Shore’s planned bluff community: estate portfolios, resort-adjacent villas, and the island’s summer-prime tables. Shore surcharge $50–$75, published up front; summer books first.',
    sections: [
      {
        eyebrow: 'North Shore',
        heading: 'The bluff-estate table',
        body: [
          'Princeville’s stock is made for private dining: big kitchens, long verandas, dining rooms built for twelve. The concierge desks at the estate agencies arrange chef dinners today — booking direct gets you the written quote instead of the phone chain.',
          SEASON_NORTH,
        ],
        media: { src: '/img/kauai/shore-north.jpg', alt: 'Morning mist over Hanalei taro fields below the Princeville bluffs', ratio: '4/5' },
      },
      {
        heading: 'What gets booked here',
        body: ['Princeville’s rhythm, in order of frequency:'],
        list: [
          'Stay Chef weeks — estates sleeping 8–16, from $1,100/day + groceries at cost',
          'Arrival-night Signature dinners — $150–$250/guest, groceries inside the band',
          'Estate-week buyouts — one chef, one contract, event nights crewed at published rates',
          'Date Nights and elopement dinners — $650–$950 fixed',
        ],
        links: [
          { label: 'Stay Chef in Princeville', href: 'locations/princeville/stay-chef' },
          { label: 'Vacation chef in Princeville', href: 'locations/princeville/vacation-chef' },
        ],
      },
      {
        heading: 'Logistics, Princeville-specific',
        body: [
          'The shore surcharge ($50–$75) covers the drive with a cooler and a kit; it’s on the quote’s own line. Gate access and house rules settle before service day. December compresses: holiday weeks book months out and price honestly.',
          PROVENANCE,
        ],
      },
    ],
    faq: [
      {
        q: 'What does a private chef in Princeville cost?',
        a: 'Signature dinners $150–$250 per guest with groceries inside the band, plus the $50–$75 shore surcharge, 20% service, and GET up to 4.7120% on their own lines. Stay Chef weeks run from $1,100 a day plus groceries at cost.',
      },
      {
        q: 'Can you cook in our Princeville rental’s kitchen?',
        a: 'Princeville kitchens are among the island’s best — full ranges, real counters. We confirm the kitchen before quoting and bring the kit it lacks.',
      },
      {
        q: 'How far ahead for a summer week?',
        a: 'June through September is the North Shore’s prime: a month ahead is comfortable, two is safer for estate weeks. The 50% deposit locks the date after you’ve seen the written quote.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef Princeville', 'Princeville chef', 'estate chef Princeville Kauai'],
  },
  {
    slug: 'locations/hanalei',
    category: 'location',
    title: 'Private Chef Hanalei — The Bay, the Bridge, the Clause',
    h1: 'Private chef Hanalei.',
    parent: 'locations',
    meta: {
      description:
        'Private chef service in Hanalei, Kauaʻi: veranda dinners $150–$250/guest, chef-for-a-week from $1,100/day, and the written Hanalei bridge clause — 72-hour notice, closures reschedule rather than forfeit.',
      ogImage: '/img/kauai/shore-north.jpg',
    },
    intro:
      'Hanalei is the island’s postcard and its logistics exam: one bridge in, the best summer tables on Kauaʻi, and a written closure clause nobody else publishes. We cook here weekly in the prime — and we put the road rules in writing.',
    sections: [
      {
        eyebrow: 'North Shore',
        heading: 'The bay and its season',
        body: [
          'Hanalei’s stock is plantation houses, bay-front estates, and the wellness-flagship resort corridor. Summer is the prime: calm water, long light, and taro fields going green below the waterfalls.',
          'Winter is honest here: rain, swell, and road risk November through March. We serve Hanalei year-round — but winter far-North bookings carry the clause, not crossed fingers.',
        ],
        media: { src: '/img/kauai/shore-north.jpg', alt: 'Rain-washed taro fields in Hanalei with mist on the mountains', ratio: '4/5' },
      },
      {
        heading: 'What gets booked here',
        body: ['Hanalei’s table, by frequency:'],
        list: [
          'Chef-for-a-week stays — from $1,100/day, groceries at cost',
          'Estate wedding weeks — from $175/guest + staffing',
          'Signature veranda dinners — $150–$250/guest',
          'Elopement dinners for two — $650–$950 fixed',
        ],
        links: [
          { label: 'A chef for the week in Hanalei', href: 'locations/hanalei/stay-chef' },
          { label: 'Hanalei estate weddings', href: 'locations/hanalei/estate-wedding' },
        ],
      },
      BRIDGE_SECTION,
    ],
    faq: [
      {
        q: 'What happens to our booking if the Hanalei bridge closes?',
        a: 'The written clause governs: documented HDOT closures reschedule your service rather than forfeit the deposit. We track the road, we plan the shopping before crossings, and the 72-hour notice window exists precisely so the plan holds.',
        links: [{ label: 'The full clause', href: '/kauai/guides/hanalei-bridge-clause' }],
      },
      {
        q: 'Is Hanalei service more expensive?',
        a: 'Hanalei sits inside the standard $50–$75 North Shore surcharge. Far-North addresses past the bridge — Wainiha, Hāʻena — are quoted at inquiry because the road, not the distance, is the variable.',
      },
      {
        q: 'Can you cater our Hanalei wedding week?',
        a: 'Yes — estate wedding weeks are a Hanalei specialty: welcome dinner through recovery brunch, from $175/guest plus staffing, one contract. Summer dates book first.',
        links: [{ label: 'Hanalei estate weddings', href: '/kauai/locations/hanalei/estate-wedding' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef Hanalei', 'Hanalei chef', 'chef for a week Hanalei'],
  },
  {
    slug: 'locations/kilauea',
    category: 'location',
    title: 'Private Chef Kīlauea — The Estate & Retreat Corridor',
    h1: 'Private chef Kīlauea.',
    parent: 'locations',
    meta: {
      description:
        'Private chef service in Kīlauea, Kauaʻi: the estate and retreat corridor — hundred-acre retreat houses, lakeside estates, bluff properties at $3,750–$8,250/night. Dinners, estate weeks, retreat tables.',
      ogImage: '/img/kauai/band-retreat.jpg',
    },
    intro:
      'Kīlauea is Kauaʻi’s quiet power corridor: hundred-acre retreat houses, lakeside eco-estates, bluff properties renting at $3,750–$8,250 a night — and, until now, nobody serving them with a published rate card.',
    sections: [
      {
        eyebrow: 'North Shore',
        heading: 'Estates and retreat houses',
        body: [
          'The corridor’s properties sleep 8–30: faith retreats, wellness weeks, family buyouts, corporate offsites that want to feel like neither. The food has historically been ad hoc — a hired cook, a restaurant run, a hopeful host. The retreat table fixes that: one contract, every meal, dietary depth included.',
        ],
        media: { src: '/img/kauai/band-retreat.jpg', alt: 'Mist in trees above a communal retreat table at a Kīlauea estate', ratio: '4/5' },
        links: [{ label: 'Retreat catering in Kīlauea', href: 'locations/kilauea/retreat-catering' }],
      },
      {
        heading: 'The estate-week play',
        body: [
          'At $3,750–$8,250 a night with seven-night minimums, these houses already spend like resorts — but chef service arrives one concierge call at a time. The estate week bundles it: Stay Chef from $1,100/day, event nights crewed at published rates, one written quote for the whole stay.',
        ],
        links: [{ label: 'The estate-week chef', href: 'services/estate-week-chef' }],
      },
      {
        heading: 'Logistics on the corridor',
        body: [
          'Kīlauea sits inside the standard North Shore surcharge ($50–$75) and before the bridge — no far-North clause required. Farm stands and the Saturday market are minutes away; the sourcing is as short as the drive.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cater a full retreat at a Kīlauea property?',
        a: 'Yes — 8–30 guests across 3–7 days is the retreat product’s exact envelope, priced from the published Stay Chef rate with per-person/day meal plans. One contract, dietary protocols labeled, kitchen check before the contract.',
        links: [{ label: 'Retreat catering in Kīlauea', href: '/kauai/locations/kilauea/retreat-catering' }],
      },
      {
        q: 'What does chef service cost for a Kīlauea estate week?',
        a: 'Stay Chef from $1,100 a day plus groceries at cost; staffed event nights add servers ($55/hr) and sous chefs ($75/hr). The $50–$75 North Shore surcharge applies per service day. All of it itemized in the written quote.',
      },
      {
        q: 'Do Kīlauea bookings need the bridge clause?',
        a: 'No — Kīlauea sits town-side of the Hanalei bridge. The clause applies to Wainiha and Hāʻena, past the bridge; Kīlauea bookings carry the standard terms.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef Kilauea Kauai', 'Kilauea estate chef', 'retreat house chef Kauai'],
  },
  {
    slug: 'locations/poipu',
    category: 'location',
    title: 'Private Chef Poʻipū — The Dry Side, Year-Round',
    h1: 'Private chef Poʻipū.',
    parent: 'locations',
    meta: {
      description:
        'Private chef service in Poʻipū, Kauaʻi: garden-estate dinners $150–$250/guest, Stay Chef from $1,100/day, wedding catering from $175/guest. The South Shore carries winter — drier November through March.',
      ogImage: '/img/kauai/shore-south.jpg',
    },
    intro:
      'The South Shore is Kauaʻi’s winter answer: when the North gets its rain, Poʻipū stays dry. Garden estates, plantation architecture, the resort belt — and the island’s steadiest year-round table.',
    sections: [
      {
        eyebrow: 'South Shore',
        heading: 'The dry side’s season',
        body: [
          SEASON_SOUTH,
          'Poʻipū is where winter bookings should land, and we say so in the inquiry reply when your dates argue for it. The two-shore seasonality guide is the honest version of the brochure.',
        ],
        media: { src: '/img/kauai/shore-south.jpg', alt: 'A Poʻipū estate garden in soft post-rain light, table set under tree cover', ratio: '4/5' },
        links: [{ label: 'North vs South, month by month', href: 'guides/shore-seasonality' }],
      },
      {
        heading: 'What gets booked here',
        body: ['Poʻipū’s table, by frequency:'],
        list: [
          'Vacation-chef weeks in the Poipu Kapili and villa-belt rentals — from $1,100/day',
          'Wedding catering across the South Shore venue corridor — from $175/guest + staffing',
          'Garden-event catering, 10–75 guests — per-guest bands + published staffing',
          'Signature dinners — $150–$250/guest, groceries inside the band',
        ],
        links: [
          { label: 'Vacation chef in Poʻipū', href: 'locations/poipu/vacation-chef' },
          { label: 'Wedding catering in Poʻipū', href: 'locations/poipu/wedding-catering' },
          { label: 'Catering in Poʻipū', href: 'locations/poipu/catering' },
        ],
      },
      {
        heading: 'Logistics, Poʻipū-specific',
        body: [
          'The $50–$75 South Shore surcharge covers the drive; no bridges, no clauses — the dry side’s logistics are as calm as its winters. Resort-belt events coordinate with house managers on load-in; we’ve worked the plantation venues’ kitchens before.',
          PROVENANCE,
        ],
      },
    ],
    faq: [
      {
        q: 'What does a private chef in Poʻipū cost?',
        a: 'Signature dinners $150–$250 per guest, groceries inside the band, plus the $50–$75 South Shore surcharge; Stay Chef weeks from $1,100 a day. The fee stack — 20% service, GET up to 4.7120% — is itemized on every quote.',
      },
      {
        q: 'We’re coming in February — is Poʻipū the right call?',
        a: 'Almost certainly: the South Shore is the dry side November through March, and Poʻipū’s gardens and plantation houses are at their best when the North Shore is underwater. Book the shore for the season.',
        links: [{ label: 'The seasonality guide', href: '/kauai/guides/shore-seasonality' }],
      },
      {
        q: 'Can you cater a wedding near the resort belt?',
        a: 'Yes — the South Shore venue corridor is core ground: estate gardens, plantation venues, villa receptions to 75 guests, from $175/guest plus staffing. Venue vendor rules settle in the quote phase.',
        links: [{ label: 'Poʻipū wedding catering', href: '/kauai/locations/poipu/wedding-catering' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef Poipu', 'Poipu chef', 'South Shore Kauai private chef'],
  },
  {
    slug: 'locations/koloa',
    category: 'location',
    title: 'Private Chef Kōloa — Old Town to Kukuiʻula',
    h1: 'Private chef Kōloa.',
    parent: 'locations/poipu',
    meta: {
      description:
        'Private chef service in Kōloa, Kauaʻi: plantation-town dinners, Kukuiʻula rental weeks for non-member guests, and wedding catering from $175/guest. South Shore surcharge $50–$75, published.',
    },
    intro:
      'One of Hawaiʻi’s oldest plantation towns, now the South Shore’s estate belt: Old Kōloa’s wooden storefronts below, Kukuiʻula’s plantation-style luxury above. We cook both — and the Kukuiʻula play is built for non-member guests.',
    sections: [
      {
        eyebrow: 'South Shore',
        heading: 'The Kukuiʻula opening',
        body: [
          'The Club at Kukuiʻula runs its own dining for members — which leaves the non-member guests in Kukuiʻula’s rental villas with beautiful kitchens and no table. That gap is exactly our product: Stay Chef weeks from $1,100/day, arrival dinners from $150/guest, all of it in writing.',
          SEASON_SOUTH,
        ],
      },
      {
        heading: 'What gets booked here',
        body: ['Kōloa’s table, by frequency:'],
        list: [
          'Stay Chef weeks in Kukuiʻula rentals — from $1,100/day + groceries at cost',
          'Plantation-house celebration dinners — $150–$250/guest',
          'Wedding catering at Kukuiʻula-adjacent estates — from $175/guest + staffing',
          'Holiday-week full-board — December books first, island-wide',
        ],
        links: [{ label: 'Wedding catering in Kōloa', href: 'locations/koloa/wedding-catering' }],
      },
      {
        heading: 'Plantation kitchens, honestly assessed',
        body: [
          'Kōloa’s older plantation houses have character and occasionally 1960s ovens; the newer estate kitchens are among the island’s best. The kitchen check before the quote tells you which you have — and what we bring to close the gap.',
        ],
        links: [{ label: 'What a kitchen needs', href: 'guides/villa-kitchen' }],
      },
    ],
    faq: [
      {
        q: 'We’re renting in Kukuiʻula but aren’t members — can you cook for us?',
        a: 'That is precisely the opening: the Club’s dining serves members, while non-member rental guests have the island’s best kitchens and no chef. Stay Chef weeks, dinners, and stocking all serve Kukuiʻula rentals directly.',
      },
      {
        q: 'What does a Kōloa wedding dinner cost?',
        a: 'Wedding lines start at $175/guest plus staffing ($55/hr servers, $75/hr sous, 4-hour floor), with the $50–$75 South Shore surcharge and the fee stack itemized. The written quote is the confirmed total.',
        links: [{ label: 'Kōloa wedding catering', href: '/kauai/locations/koloa/wedding-catering' }],
      },
      {
        q: 'Is Kōloa covered in winter?',
        a: 'Fully — the South Shore carries November through March, and Kōloa’s garden estates are winter’s best rooms. Book December early; it compresses first.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef Koloa', 'Kukuiula private chef', 'Koloa catering'],
  },
  {
    slug: 'locations/kapaa-lihue',
    category: 'location',
    title: 'Private Chef Kāpaʻa & Līhuʻe — The East Side, Base Zone',
    h1: 'Private chef Kāpaʻa–Līhuʻe.',
    parent: 'locations',
    meta: {
      description:
        'Private chef service in Kāpaʻa and Līhuʻe, Kauaʻi: base-zone pricing with no shore surcharge, resident weekly service $550–$1,200/week, event catering 10–75 guests, Royal Sonesta-corridor weddings.',
      ogImage: '/img/kauai/card-stay-chef.jpg',
    },
    intro:
      'The island’s largest towns and its residential heart — and our base zone, which means no shore surcharge and the strongest year-round availability. One combined East Side page because that’s how the demand honestly reads.',
    sections: [
      {
        eyebrow: 'East Side',
        heading: 'The year-round table',
        body: [
          'East Side demand is different from the shores: more residents, more condo kitchens, more Tuesday-night reasons. The kamaʻāina weekly line ($550–$1,200/week) lives here, alongside family celebrations, condo dinners, and the Royal Sonesta corridor’s weddings.',
          'Base zone means the rate card applies clean: no surcharge, no 72-hour clause, the fee stack itemized as always.',
        ],
        media: { src: '/img/kauai/card-stay-chef.jpg', alt: 'A Kauaʻi estate kitchen with worn wood counters and open windows to green outside', ratio: '4/5' },
      },
      {
        heading: 'What gets booked here',
        body: ['East Side bookings, by frequency:'],
        list: [
          'Resident weekly service — $550–$1,200/week, groceries at cost',
          'Family and milestone catering, 10–75 guests — per-guest bands + staffing',
          'Condo and vacation-rental dinners — $125–$250/guest',
          'Wedding catering across the Līhuʻe resort corridor — from $175/guest + staffing',
        ],
        links: [
          { label: 'Catering in Kāpaʻa–Līhuʻe', href: 'locations/kapaa-lihue/catering' },
          { label: 'Meal prep service', href: 'services/meal-prep' },
        ],
      },
      {
        heading: 'Condo kitchens, respectfully',
        body: [
          'East Side condos often have better kitchens than rental villas — full ranges, dishwashers, real counters. The kitchen check still applies, and hotel rooms without kitchens are still declined; but the East Side’s stock passes more often than anywhere on the island.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is there a travel fee for Kāpaʻa or Līhuʻe?',
        a: 'No — the East Side is base zone. The rate card applies clean: per-guest bands, published staffing, the fee stack itemized. Surcharges begin at the shores ($50–$75 to Princeville or Poʻipū).',
      },
      {
        q: 'Do you serve residents, or only visitors?',
        a: 'Residents are the East Side’s core: weekly cook days, meal prep, and family events book month to month, protected from the visitor season’s compression.',
        links: [{ label: 'Weekly meal prep', href: '/kauai/services/meal-prep' }],
      },
      {
        q: 'Can you cater our Līhuʻe wedding?',
        a: 'Yes — the Līhuʻe resort corridor’s weddings and resident celebrations are regular ground: from $175/guest plus staffing, venue coordination included in the quote phase.',
        links: [{ label: 'East Side catering', href: '/kauai/locations/kapaa-lihue/catering' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['private chef Kapaa', 'private chef Lihue', 'East Side Kauai chef'],
  },
  {
    slug: 'locations/princeville/stay-chef',
    category: 'location',
    title: 'Stay Chef Princeville — The Week, from $1,100/Day',
    h1: 'A Stay Chef week in Princeville.',
    parent: 'stay-chef',
    meta: {
      description:
        'Stay Chef weeks in Princeville, Kauaʻi: from $1,100/day plus groceries at cost in bluff-estate kitchens — the service the estate-agency concierges arrange, booked direct with a written quote.',
    },
    intro:
      'Princeville’s estate portfolios run from $450 a night to five figures a week — and their concierges arrange chef service one dinner at a time. A Stay Chef week books the same island crew direct: from $1,100 a day, itemized, in writing.',
    sections: [
      {
        heading: 'Why Princeville weeks work',
        body: [
          'The stock is ideal: big kitchens, veranda dining, houses that sleep 8–16. The season is known: June through September plus the holidays. And the drive to the Saturday Hanalei market is measured in minutes, which means the week’s greens are that morning’s.',
          'The $50–$75 North Shore surcharge applies per service day; it’s on the quote, not discovered on the invoice.',
        ],
      },
      {
        heading: 'A Princeville week, sketched',
        body: ['Seven days, one chef:'],
        list: [
          'Day 1 — arrival dinner timed to your landing; fridge already stocked',
          'Day 2 — breakfast, beach-day cooler, family-style dinner',
          'Day 3 — rest-day brunch; evening free for the house',
          'Day 4 — Signature coursed dinner for the whole table',
          'Day 5 — kids’ early seating, parents’ late Date Night',
          'Day 6 — pūpū hour on the veranda, light supper after',
          'Day 7 — farewell brunch; the kitchen left cleaner than arrival',
        ],
      },
      {
        heading: 'Booking it',
        body: [
          'Send dates, the house (or its manager), and headcount. The written quote itemizes the day rate, expected staffing for event nights, the surcharge, and the fee stack. The 50% deposit locks the week only after you’ve read every line.',
        ],
        links: [{ label: 'Stay Chef cost, worked', href: 'pricing/stay-chef-cost' }],
      },
    ],
    faq: [
      {
        q: 'What does a Stay Chef week in Princeville cost?',
        a: 'Seven days run from $7,700 for the chef’s time plus groceries at cost, the North Shore surcharge per service day, and any staffed event nights — then 20% service and GET on their own lines. The quote itemizes all of it.',
      },
      {
        q: 'Do you work with our villa agency’s house rules?',
        a: 'Yes — gate access, quiet hours, and kitchen rules settle before service. We work cleanly with Princeville’s estate agencies; booking direct simply puts the written quote in your hands first.',
      },
      {
        q: 'Can the week include one big celebration night?',
        a: 'That’s the common pattern: rhythm days on the day rate, one event night with servers and a sous at published hourlys. One contract covers both.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['stay chef Princeville', 'chef for the week Princeville', 'Princeville estate chef'],
  },
  {
    slug: 'locations/princeville/vacation-chef',
    category: 'location',
    title: 'Vacation Chef Princeville — Dinners in Your Rental',
    h1: 'A vacation chef in Princeville.',
    parent: 'services/vacation-chef',
    meta: {
      description:
        'A vacation chef for your Princeville rental: arrival dinners from $150/guest, pre-arrival stocking at cost, Date Nights $650–$950 — booked direct, quoted in writing.',
    },
    intro:
      'The concierge version of this service costs you a phone chain and an opaque markup. The direct version: a written quote, published rates, and a chef who’s cooked in Princeville kitchens all season.',
    sections: [
      {
        heading: 'The first night, handled',
        body: [
          'Landing day on Kauaʻi ends early — the light goes, the jet lag lands, and nobody wants a forty-minute drive to dinner. The arrival-night dinner is Princeville’s most-booked service: $125–$250 a guest depending on tier, groceries inside, on the table at the hour you name.',
          'Add pre-arrival stocking and the week starts fed: breakfast things, fruit, coffee, the good poke — at cost, receipts attached.',
        ],
        links: [{ label: 'Villa pre-stocking', href: 'services/grocery-stocking' }],
      },
      {
        heading: 'The rest of the week, your call',
        body: [
          'Some tables want one great dinner and the grill; some want three evenings and a Date Night; some want the whole Stay Chef rhythm. All of it prices from the same published card, and the written quote shows every line before the deposit.',
        ],
        links: [
          { label: 'Stay Chef weeks', href: 'stay-chef' },
          { label: 'Date Night $650–$950', href: 'services/date-night' },
        ],
      },
      {
        heading: 'Princeville logistics',
        body: [
          'The $50–$75 North Shore surcharge applies per service day. Gate codes and house rules settle before service day. December books first — holiday weeks in Princeville deserve months, not weeks, of lead.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is booking direct really the same service the concierge offers?',
        a: 'The same island crew pool, yes — with the difference that our rates are published and the written quote is the confirmed total. Concierge desks add a layer; direct inquiry removes it.',
      },
      {
        q: 'What’s the minimum booking?',
        a: 'A single dinner — no stay minimum. Per-guest bands apply from two guests up; two-person evenings price as Date Night ($650–$950 fixed).',
      },
      {
        q: 'Can you stock the villa before we land?',
        a: 'Yes — groceries at cost with receipts plus a quoted service line, timed to your landing window. The fridge is full before you turn the key.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['vacation chef Princeville', 'chef for vacation rental Princeville'],
  },
  {
    slug: 'locations/hanalei/stay-chef',
    category: 'location',
    title: 'Chef for a Week Hanalei — Summer’s Best Table',
    h1: 'A chef for the week in Hanalei.',
    parent: 'stay-chef',
    meta: {
      description:
        'A chef for the week in Hanalei, Kauaʻi: Stay Chef from $1,100/day in bay-side and plantation kitchens, the Saturday market minutes away, and the bridge clause in writing for far-North houses.',
    },
    intro:
      'Hanalei in summer is the island’s best week: calm bay, long light, the Saturday market a morning walk away. Stay Chef from $1,100 a day turns the rental into the reservation you can’t get.',
    sections: [
      {
        heading: 'The market at the end of the road',
        body: [
          'Hanalei weeks shop themselves: the Saturday farmers’ market sets the week’s greens, Kunana Dairy is up the road, and the fish question is answered by which boats went out. The menu follows the boxes — that’s not a slogan, it’s how a Hanalei week actually cooks.',
          PROVENANCE,
        ],
      },
      {
        heading: 'Summer prime, winter honesty',
        body: [
          'June through September, Hanalei is the island’s prime table and books accordingly — a month ahead minimum, more for estate weeks. Winter stays are beautiful and wetter: we serve them with the pantry plan built around the road, and the clause in writing for houses past the bridge.',
        ],
        links: [{ label: 'The bridge clause', href: 'guides/hanalei-bridge-clause' }],
      },
      {
        heading: 'The week’s numbers',
        body: [
          'From $1,100 a day plus groceries at cost; staffed event nights add servers ($55/hr) and sous chefs ($75/hr); the $50–$75 North Shore surcharge applies per service day. Far-North houses — Wainiha, Hāʻena — quote at inquiry with 72-hour notice.',
        ],
        links: [{ label: 'Stay Chef cost, worked', href: 'pricing/stay-chef-cost' }],
      },
    ],
    faq: [
      {
        q: 'We’re past the bridge in Hāʻena — can you do a full week?',
        a: 'Yes, with the clause: 72-hour notice, shopping sequenced before crossings, and documented closures reschedule rather than forfeit. The pantry plan is built so the road can’t starve the week.',
      },
      {
        q: 'What does the week cost all-in?',
        a: 'Seven days from $7,700 for the chef plus groceries at cost, the shore surcharge per service day, and staffed nights at published hourlys — itemized in the written quote, which is the confirmed total.',
      },
      {
        q: 'How early should a summer Hanalei week book?',
        a: 'June–September is the North Shore’s prime: a month is the floor, six to eight weeks is comfortable, and the holidays deserve more. The 50% deposit locks the dates after you’ve seen the quote.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['chef for a week Hanalei', 'stay chef Hanalei', 'Hanalei vacation chef'],
  },
  {
    slug: 'locations/hanalei/estate-wedding',
    category: 'location',
    title: 'Hanalei Estate Wedding Catering — Bluff Lawns, Written Terms',
    h1: 'Estate weddings in Hanalei.',
    parent: 'weddings/estate-wedding',
    meta: {
      description:
        'Estate wedding catering in Hanalei, Kauaʻi: bluff-lawn receptions from $175/guest plus staffing, the full wedding week under one contract, and the bridge clause in writing for far-North venues.',
    },
    intro:
      'The bluff lawns above Hanalei Bay are Kauaʻi’s definitive wedding ground — and its most logistically honest one. From $175 a guest plus staffing, with the bridge clause written into every far-North contract.',
    sections: [
      {
        heading: 'The Hanalei wedding week',
        body: [
          'Welcome dinner on the veranda Thursday, rehearsal in the garden Friday, the reception on the bluff lawn Saturday, recovery brunch whenever Sunday allows. Five events, one crew, one contract — from $175/guest plus staffing, every line published.',
          'Summer is the prime: June through September gives the bay its calm and the lawns their light. Winter Hanalei weddings are beautiful and wetter — tents and timing are part of the quote, not an afterthought.',
        ],
        links: [{ label: 'The wedding-week formats', href: 'weddings/wedding-week' }],
      },
      {
        heading: 'The clause, at the altar',
        body: [
          'For venues past the bridge — and the planner should always ask — our written terms: 72-hour notice, shopping sequenced before crossings, documented HDOT closures reschedule rather than forfeit. Your deposit does not evaporate over a landslide.',
          'Nobody else on the island publishes this. Your planner will recognize why it matters.',
        ],
        links: [{ label: 'The full bridge clause', href: 'guides/hanalei-bridge-clause' }],
      },
      {
        heading: 'Working with your venue and planner',
        body: [
          'Estate venues run on house rules: load-in windows, kitchen access, sound curfews. We coordinate with your planner and the estate manager in the quote phase — vendor lists, insurance paperwork, and the rain plan all settle before the deposit.',
        ],
        links: [{ label: 'For wedding planners', href: 'partners/wedding-planners' }],
      },
    ],
    faq: [
      {
        q: 'What does a Hanalei estate wedding cost?',
        a: 'From $175/guest plus staffing (servers $55/hr, sous $75/hr, 4-hour floor), against the island’s ~$75/plate caterer average — the difference is the estate-week format and a written quote that is the confirmed total. A 50-guest week is worked out on our cost page.',
        links: [{ label: 'Wedding costs, worked', href: '/kauai/weddings/wedding-cost' }],
      },
      {
        q: 'What’s the guest ceiling on a bluff estate?',
        a: 'Seventy-five staffed is the standard envelope; over 75 is a written exception quoted explicitly. Bluff lawns also carry their own realities — wind, access, power — settled in the site check before the quote.',
      },
      {
        q: 'What if it rains on the reception?',
        a: 'On the North Shore, the rain plan is the plan: tenting coordinated with your rentals vendor, menus that survive cover, and a weather call 48 hours out. Waiʻaleʻale’s rainfall is not a rumor; we cook accordingly.',
        links: [{ label: 'Weather backup planning', href: '/kauai/guides/weather-backup' }],
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['Hanalei estate wedding catering', 'Hanalei wedding caterer', 'North Shore Kauai wedding'],
  },
  {
    slug: 'locations/kilauea/retreat-catering',
    category: 'location',
    title: 'Retreat Catering Kīlauea — The Corridor’s Missing Table',
    h1: 'Retreat catering in Kīlauea.',
    parent: 'retreat-catering',
    meta: {
      description:
        'Retreat catering in Kīlauea, Kauaʻi: hundred-acre retreat houses and lakeside estates fed under one contract — 8–30 guests, 3–7 days, protocol-labeled menus from published rates.',
      ogImage: '/img/kauai/hero-retreats.jpg',
    },
    intro:
      'Kīlauea’s retreat corridor — hundred-acre properties, lakeside eco-estates, faith and wellness houses — hosts retreats year-round and feeds them ad hoc. This page exists because the corridor deserves a table, not a workaround.',
    sections: [
      {
        heading: 'Built for the corridor’s houses',
        body: [
          'The retreat houses here sleep 8–30 and run 3–7 day programs: morning practice, working afternoons, the long communal dinner. Our retreat product maps exactly: Stay Chef from $1,100/day, full-board plans in the $250–$300+ per-person/day range, every meal under one contract.',
          'Kitchens on these properties range from excellent estate ranges to camp-adjacent certified kitchens — the kitchen standard check happens before the contract, and we bring what the kitchen lacks.',
        ],
        media: { src: '/img/kauai/hero-retreats.jpg', alt: 'A retreat breakfast spread on a Kīlauea veranda, steam rising in morning mist', ratio: '4/5' },
        links: [{ label: 'Retreat meal plans and pricing', href: 'retreat-catering/meal-plans' }],
      },
      {
        heading: 'Protocols the corridor asks for',
        body: [
          'Plant-based weeks, Ayurvedic-fluent programs, detox formats, the omnivore staff table alongside — menus labeled dish by dish, allergens on separate prep. Kīlauea’s faith and wellness houses get the same dietary depth as the yoga estates; the labels are the product.',
        ],
        links: [{ label: 'The protocol matrix', href: 'retreat-catering/dietary-protocols' }],
      },
      {
        heading: 'Logistics on the corridor',
        body: [
          'Kīlauea sits town-side of the Hanalei bridge — no far-North clause, the standard $50–$75 North Shore surcharge. The Saturday market is minutes away; mid-program restocks are a short drive, not an expedition.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you cater a 20-person retreat for five days in Kīlauea?',
        a: 'That is the product’s center of gravity: 8–30 guests, 3–7 days, every meal under one contract priced from published rates. The written quote itemizes each day before the deposit.',
      },
      {
        q: 'The property’s kitchen is basic — is that a problem?',
        a: 'The kitchen check exists for exactly this: we assess before the contract, bring the kit the kitchen lacks, and tell you honestly if the space can’t support the program. Most corridor kitchens pass with a gear list.',
      },
      {
        q: 'Do hosts get one invoice?',
        a: 'One contract, one itemized quote, one invoice sequence — deposit, balance, receipts for groceries. Hosts re-book; the paperwork is built to be re-booked.',
        links: [{ label: 'For retreat hosts', href: '/kauai/retreat-catering/for-hosts' }],
      },
    ],
    cta: CTA_RETREAT,
    keywords: ['retreat catering Kilauea', 'Kilauea retreat chef', 'retreat house catering Kauai'],
  },
  {
    slug: 'locations/poipu/catering',
    category: 'location',
    title: 'Catering Poʻipū — Garden Events on the Dry Side',
    h1: 'Catering in Poʻipū.',
    parent: 'catering',
    meta: {
      description:
        'Event catering in Poʻipū, Kauaʻi: garden estates and plantation venues, 10–75 guests staffed, per-guest bands from $125–$350, 20% service itemized — the dry side’s year-round table.',
    },
    intro:
      'Poʻipū’s event ground is gardens and plantation architecture, and its season is year-round — winter especially, when the North Shore is underwater and the South stays dry. Staffed events 10–75 guests; over 75 by written exception.',
    sections: [
      {
        heading: 'The Poʻipū event shapes',
        body: ['What the dry side books, by frequency:'],
        list: [
          'Garden celebration dinners — Signature $150–$250/guest, plated and staffed',
          'Villa receptions and pūpū hours — quoted per event, tray pass included',
          'Family reunions in the rental belt — Table band $125–$150/guest, family-style',
          'Corporate offsite dinners — Premium band, itemized like everything else',
        ],
      },
      {
        heading: 'Venue coordination, included in the quote phase',
        body: [
          'The resort and plantation venue corridor runs on house rules — load-in windows, preferred rentals, kitchen access. We settle all of it before the quote is written, so the number you approve already contains the logistics.',
          'Staffing is published math: servers $55/hr, sous $75/hr, 4-hour floor, one server per 10–12 seated guests.',
        ],
        links: [{ label: 'Event staffing', href: 'services/staffing' }],
      },
      {
        heading: 'The fee honesty paragraph',
        body: [
          'Our service charge is 20%, itemized. Island venues commonly run 23–25%, and at least one local caterer adds 25% gratuity across food and drink. On a 50-guest event the difference is real money — our quote is built to be compared line by line.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does catering for 40 in Poʻipū cost?',
        a: 'Forty guests at the Signature mid-band is $8,000 for food, plus three to four servers and a sous at published hourlys (roughly $1,300–$1,600), the $50–$75 shore surcharge, then 20% service and GET on their own lines. The written quote fixes every figure.',
      },
      {
        q: 'Can you cater at our Poʻipū rental rather than a venue?',
        a: 'Yes — the villa-belt rentals are core ground. The kitchen and access check happens before the quote; most Poʻipū houses pass easily.',
      },
      {
        q: 'What about a winter event?',
        a: 'Winter is Poʻipū’s season — drier and calmer November through March while the North gets its rain. December still books first island-wide; a month’s lead is the floor.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['catering Poipu', 'Poipu event catering', 'South Shore Kauai catering'],
  },
  {
    slug: 'locations/poipu/wedding-catering',
    category: 'location',
    title: 'Wedding Catering Poʻipū — The South Shore Corridor',
    h1: 'Wedding catering in Poʻipū.',
    parent: 'weddings',
    meta: {
      description:
        'Wedding catering in Poʻipū, Kauaʻi: estate and plantation-venue receptions from $175/guest plus staffing, winter-reliable weather, the full wedding week under one written contract.',
    },
    intro:
      'The South Shore’s venue corridor — plantation estates, garden venues, the resort belt — with the island’s most reliable weather. From $175 a guest plus staffing; November through March dates are the dry side’s home ground.',
    sections: [
      {
        heading: 'Why winter weddings land here',
        body: [
          'When the North Shore takes its winter rain, Poʻipū keeps its light — which is why November-to-March wedding weeks route south, and why we say so in the inquiry reply when your dates argue for it. The corridor’s venues know the drill; so do we.',
        ],
        links: [{ label: 'The two-shore season guide', href: 'guides/shore-seasonality' }],
      },
      {
        heading: 'The week, one contract',
        body: [
          'Welcome dinner at the rental, rehearsal in a garden, reception on the estate lawn, recovery brunch on the veranda. From $175/guest plus staffing across the week — five events, one crew, one itemized quote.',
          'Receptions run plated (two to three courses) or premium buffet for 30–75 guests; over 75 is a written exception, never implied.',
        ],
        links: [
          { label: 'The wedding-week formats', href: 'weddings/wedding-week' },
          { label: 'Reception catering', href: 'weddings/reception-catering' },
        ],
      },
      {
        heading: 'Venue and planner coordination',
        body: [
          'Vendor lists, load-in windows, kitchen access, rentals coordination — settled in the quote phase with your planner and the venue, so the approved number already contains the logistics. 20% service, itemized, against the corridor’s 23–25% norms.',
        ],
        links: [{ label: 'For wedding planners', href: 'partners/wedding-planners' }],
      },
    ],
    faq: [
      {
        q: 'What does a Poʻipū wedding reception cost?',
        a: 'From $175/guest plus staffing — a 60-guest reception at mid-band runs about $13,500 for food, plus crew at published hourlys, the shore surcharge, 20% service, and GET, every line itemized before the deposit.',
        links: [{ label: 'Wedding costs, worked', href: '/kauai/weddings/wedding-cost' }],
      },
      {
        q: 'Can you work at [our venue]?',
        a: 'If it’s an estate, garden, or plantation venue on the South Shore, almost certainly — vendor-list venues are handled in the quote phase with your planner, and we say early if a venue’s exclusivity blocks outside catering.',
      },
      {
        q: 'How far ahead should a Poʻipū wedding book?',
        a: 'Three to six months is comfortable; December and holiday weeks compress to more. The 50% deposit locks dates only after the written quote.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['wedding catering Poipu', 'Poipu wedding caterer', 'South Shore Kauai wedding catering'],
  },
  {
    slug: 'locations/poipu/vacation-chef',
    category: 'location',
    title: 'Vacation Chef Poʻipū — The Villa-Belt Table',
    h1: 'A vacation chef in Poʻipū.',
    parent: 'services/vacation-chef',
    meta: {
      description:
        'A vacation chef for your Poʻipū rental: arrival dinners from $150/guest, Stay Chef weeks from $1,100/day, pre-arrival stocking at cost — the concierge service, booked direct.',
    },
    intro:
      'The Poipu Kapili concierge desk has offered “Private Gourmet Chef” for years — proof the demand is real and the markup is too. Book the same island service direct: published rates, written quote, your kitchen.',
    sections: [
      {
        heading: 'The villa-belt week',
        body: [
          'Poipu Kapili, the Villas at Poipu Kai, the plantation rentals above the green — the South Shore’s condo-and-villa belt is built for chef service: real kitchens, big lānai tables, and a dry evening nearly every night of winter.',
          'The shapes: an arrival dinner the first night ($125–$250/guest), a midweek Date Night for the parents ($650–$950 fixed), or the full Stay Chef rhythm from $1,100 a day.',
        ],
        links: [
          { label: 'Stay Chef weeks', href: 'stay-chef' },
          { label: 'Date Night', href: 'services/date-night' },
        ],
      },
      {
        heading: 'Stocking the condo before you land',
        body: [
          'South Shore groceries are closer than the North’s, but landing day still shouldn’t cost you a store run. Pre-arrival stocking fills the fridge at cost — receipts attached — timed to your landing window.',
        ],
        links: [{ label: 'Villa pre-stocking', href: 'services/grocery-stocking' }],
      },
      {
        heading: 'Logistics, the easy version',
        body: [
          'The $50–$75 South Shore surcharge applies per service day; no bridges, no clauses. Condo access and parking settle in the inquiry exchange. December books first — the dry side at the holidays is not a secret.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does a vacation chef cost in Poʻipū?',
        a: 'Dinners run $125–$250 per guest with groceries inside the band; Stay Chef from $1,100/day plus groceries at cost. The $50–$75 South Shore surcharge and the fee stack appear on their own lines.',
      },
      {
        q: 'Our condo kitchen is small — workable?',
        a: 'Usually yes — Poʻipū’s condo kitchens are compact but real. The kitchen check before the quote confirms it, and we bring the kit that’s missing.',
      },
      {
        q: 'Can we book just one dinner?',
        a: 'Yes — no stay minimum. A single arrival dinner is the most-booked Poʻipū service we run.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['vacation chef Poipu', 'chef for vacation rental Poipu', 'Poipu private chef'],
  },
  {
    slug: 'locations/koloa/wedding-catering',
    category: 'location',
    title: 'Wedding Catering Kōloa — Plantation Estates & Kukuiʻula',
    h1: 'Wedding catering in Kōloa.',
    parent: 'weddings',
    meta: {
      description:
        'Wedding catering in Kōloa, Kauaʻi: plantation-estate receptions and Kukuiʻula-adjacent events from $175/guest plus staffing, 20% service itemized, the wedding week under one contract.',
    },
    intro:
      'Kōloa’s wedding ground is plantation architecture and estate lawns — the 1930s plantation-house venues, the Kukuiʻula belt’s private events, Old Town’s wooden charm. From $175 a guest plus staffing, itemized to the line.',
    sections: [
      {
        heading: 'The Kukuiʻula-adjacent event',
        body: [
          'Club venues serve members; the weddings that happen around the club — estate lawns, rental villas, private property — need an outside caterer who quotes like a professional. From $175/guest plus staffing, with 20% service itemized against the 23–25% venue norm.',
          'Plantation venues bring character and constraints: kitchen access, load-in windows, historic-house rules. All of it settles in the quote phase, before the deposit.',
        ],
      },
      {
        heading: 'The week in Kōloa',
        body: [
          'Rehearsal dinner in a plantation garden, reception on the estate lawn, recovery brunch at the rental. The wedding-week contract covers all of it from $175/guest plus staffing — one crew that knows the kitchen by the reception.',
        ],
        links: [
          { label: 'The wedding-week formats', href: 'weddings/wedding-week' },
          { label: 'Rehearsal dinners', href: 'weddings/rehearsal-dinner' },
        ],
      },
      {
        heading: 'Season and logistics',
        body: [
          `${SEASON_SOUTH} The $50–$75 South Shore surcharge applies; Old Kōloa’s venues are minutes from our logistics base, and none of it involves a bridge.`,
        ],
      },
    ],
    faq: [
      {
        q: 'What does a Kōloa estate wedding cost?',
        a: 'From $175/guest plus staffing (servers $55/hr, sous $75/hr, 4-hour floor), against the island’s ~$75/plate average — the gap buys the estate-week format and an itemized written quote. Worked examples live on the wedding-cost page.',
        links: [{ label: 'Wedding costs, worked', href: '/kauai/weddings/wedding-cost' }],
      },
      {
        q: 'Can you cater at a historic plantation venue?',
        a: 'Yes, within the house rules — kitchen access and load-in are settled with the venue in the quote phase, and menus adapt to the kitchen the house actually has.',
      },
      {
        q: 'Is December in Kōloa bookable?',
        a: 'Yes — the dry side carries winter, and December is the island’s compression point. Book three to six months out for December wedding weeks.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['wedding catering Koloa', 'Kukuiula wedding catering', 'plantation wedding Kauai'],
  },
  {
    slug: 'locations/kapaa-lihue/catering',
    category: 'location',
    title: 'Catering Kāpaʻa & Līhuʻe — Resident Events, Base Zone',
    h1: 'Catering in Kāpaʻa–Līhuʻe.',
    parent: 'catering',
    meta: {
      description:
        'Event catering in Kāpaʻa and Līhuʻe, Kauaʻi: resident celebrations, resort-corridor weddings, and community events, 10–75 guests — base-zone pricing, no shore surcharge, 20% service itemized.',
    },
    intro:
      'The East Side’s events are the island’s resident backbone: milestone birthdays, church-hall-adjacent celebrations, resort-corridor weddings, office parties that deserve better than trays. Base zone — no surcharge, the card applies clean.',
    sections: [
      {
        heading: 'The East Side event shapes',
        body: ['What Kāpaʻa–Līhuʻe books, by frequency:'],
        list: [
          'Milestone birthdays and graduations — Table band $125–$150/guest, family-style',
          'Resort-corridor weddings and rehearsals — from $175/guest + staffing',
          'Office and team dinners — Signature band, itemized for the company card',
          'Celebration-of-life gatherings — handled quietly, priced plainly',
        ],
        links: [{ label: 'Celebration of life', href: 'occasions/celebration-of-life' }],
      },
      {
        heading: 'Base-zone pricing, spelled out',
        body: [
          'No shore surcharge, no 72-hour clause: per-guest bands from $125–$350, servers $55/hr and sous $75/hr with a 4-hour floor, 20% service and GET up to 4.7120% on their own lines. The written quote is the confirmed total.',
        ],
        links: [{ label: 'The full rate card', href: 'pricing' }],
      },
      {
        heading: 'Venues and kitchens, East Side',
        body: [
          'From resort event rooms to church halls to backyard lānai, the East Side’s venues share one trait: kitchens that range from commercial to none. The site check in the quote phase determines what we cook on-site and what arrives ready — the quote reflects the real logistics either way.',
        ],
      },
    ],
    faq: [
      {
        q: 'What does catering for 30 in Kāpaʻa cost?',
        a: 'Thirty guests at the Table band top ($150) is $4,500 for food, plus two to three servers at published hourlys (roughly $700–$1,000), then 20% service and GET on their own lines. No surcharge — the East Side is base zone.',
      },
      {
        q: 'Do you cater resident events, or only visitor bookings?',
        a: 'Resident events are the East Side’s core — monthly, year-round, protected from the visitor season’s compression. The kamaʻāina weekly line lives here too.',
        links: [{ label: 'Weekly resident service', href: '/kauai/services/meal-prep' }],
      },
      {
        q: 'Can you handle a celebration of life with care?',
        a: 'Yes — those pages and those bookings drop the sales register entirely. Calm planning, plain pricing, and a table that lets the family be together.',
      },
    ],
    cta: CTA_QUOTE,
    keywords: ['catering Kapaa', 'catering Lihue', 'East Side Kauai catering'],
  },
];
