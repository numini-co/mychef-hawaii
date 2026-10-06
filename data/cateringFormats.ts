import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { UniqueCell } from './uniqueCells';

/**
 * Catalog CATERING_SLUGS as unique format documents.
 * Titles must never be “{island} catering {format}”.
 */

export const CATERING_FORMAT_SLUGS = ['bbq', 'plated', 'family-style', 'buffet', 'grazing', 'drop-off'] as const;
export type CateringFormatSlug = (typeof CATERING_FORMAT_SLUGS)[number];

export interface CateringFormatPage extends UniqueCell {
  slug: CateringFormatSlug;
}

export const cateringFormats: Record<IslandId, CateringFormatPage[]> = {
  oahu: [
    {
      slug: 'bbq',
      name: 'BBQ',
      h1: 'BBQ on an Oahu lawn — Ko Olina and Kahala.',
      title: 'BBQ on an Oahu lawn — Ko Olina and Kahala | myCHEF',
      description:
        'Staffed BBQ in Ko Olina villas and Kahala gardens.',
      lede:
        'Whole fish on the grill, a lawn, the trade wind. Not a restaurant patio. Staffing still sits on the quote.',
      photo: 'fmtBbqOahu',
      body: [
        'Drop-off is a different product. Wet-weather backup is written for lawns.',
      ],
      faqs: [
        {
          q: 'Is this cheaper than plated?',
          a: 'Food band is still the island CORE card. Staffing changes. Quote in writing.',
        },
        {
          q: 'Hotel grill?',
          a: 'If the house has a grill we can work. Most suites do not.',
        },
      ],
      related: [
        { path: '/catering', label: 'Staffed catering' },
        { path: '/ko-olina', label: 'Ko Olina' },
        { path: '/catering/drop-off', label: 'Drop-off' },
      ],
    },
    {
      slug: 'plated',
      name: 'Plated',
      h1: 'Plated villa service on Oahu — a restaurant arc in the house.',
      title: 'Plated villa service on Oahu | myCHEF',
      description:
        'Coursed seated service in Kahala dining rooms and Ko Olina villas. Needs more servers than a buffet.',
      lede:
        'Courses paced to the table. The Gold Coast dining room is the usual room. Staffing is a different line from the food band.',
      photo: 'fmtPlatedOahu',
      body: [
        'Rehearsal dinners often run plated.',
      ],
      faqs: [
        {
          q: 'How many servers?',
          a: 'More than a buffet for the same headcount. We write it on the quote.',
        },
        {
          q: 'Can two of us sit plated?',
          a: 'Yes.',
        },
      ],
      related: [
        { path: '/rehearsal-dinners', label: 'Rehearsal dinners' },
        { path: '/catering/family-style', label: 'Family-style' },
        { path: '/kahala', label: 'Kahala' },
      ],
    },
    {
      slug: 'family-style',
      name: 'Family-style',
      h1: 'Family-style service in Oahu houses — platters down the table.',
      title: 'Family-style service in Oahu houses | myCHEF',
      description:
        'Shared platters in Kahala dining rooms and Ko Olina villas. Usual estate night when the list is about 10–20.',
      lede:
        'Platters, not a pass. Welcome dinners often run this way.',
      photo: 'fmtFamilyOahu',
      body: [
      ],
      faqs: [
        {
          q: 'Kids at a family-style table?',
          a: 'Same platters, simpler plates beside.',
        },
        {
          q: 'Same as grazing?',
          a: 'Grazing is boards and pūpū.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/catering/grazing', label: 'Grazing' },
        { path: '/kids-menus', label: 'Kids at the table' },
      ],
    },
    {
      slug: 'buffet',
      name: 'Buffet',
      h1: 'Buffet service in Oahu houses — stations that stay hot.',
      title: 'Buffet service in Oahu houses | myCHEF',
      description:
        'Staffed buffet in Kahala and Ko Olina houses. Best from about 20 guests. Not a hotel banquet.',
      lede:
        'Guests move. Stations stay hot. A hundred-guest lawn is still quoted, not promised from a Tuesday dinner.',
      photo: 'fmtBuffetOahu',
      body: [
        'Drop-off is not this product.',
      ],
      faqs: [
        {
          q: 'Is buffet cheaper?',
          a: 'Food band is the CORE card. Staffing is usually lighter than plated. Quote in writing.',
        },
        {
          q: 'Convention buffet?',
          a: 'No. HCC citywides are closed through 2027.',
        },
      ],
      related: [
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/retreat-catering', label: 'Retreat kitchens' },
        { path: '/conventions', label: 'Not MICE' },
      ],
    },
    {
      slug: 'grazing',
      name: 'Grazing',
      h1: 'Grazing boards in an Oahu villa — pūpū, not a seated dinner.',
      title: 'Grazing boards in an Oahu villa | myCHEF',
      description:
        'Styled boards and passed small plates in Ko Olina and Kahala. Cocktail hour or terrace welcome.',
      lede:
        'Boards, passed pieces, the room still landing. A seated dinner is a different format. Grazing tables are a market reference, labeled when we quote them.',
      photo: 'fmtGrazingOahu',
      body: [
        'Welcome dinners often start here. Family-style is seated platters.',
      ],
      faqs: [
        {
          q: 'Is grazing enough for dinner?',
          a: 'Say so on the brief. Grazing can be the night or the first hour. We write which.',
        },
        {
          q: 'Pūpū piece minimums?',
          a: 'Quoted. Market references are labeled. Not invented as a standing carte.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/catering/family-style', label: 'Family-style' },
        { path: '/bar', label: 'Bar add-on' },
      ],
    },
    {
      slug: 'drop-off',
      name: 'Drop-off',
      h1: 'Trays at a Honolulu door are not a staffed Kahala night.',
      title: 'Drop-off catering Honolulu vs staffed catering | myCHEF',
      description:
        'Oʻahu drop-off is trays at the door, not a staffed Kahala brigade. Inquiry only. We will not sell drop-off as if a chef stays.',
      lede:
        'Trays at the door, no pass, no cleanup crew. If you want a chef in the house, that is the catering page or /.',
      photo: 'fmtDropoffOahu',
      body: [
        'Private chef dinner is this site’s home.',
        'If a night needs trays and no staff, ask. Do not expect the CORE dinner band.',
      ],
      faqs: [
        {
          q: 'Can you leave trays and go?',
          a: 'Inquiry only. It is not the staffed product and it is not priced as one.',
        },
        {
          q: 'Is this cheaper catering?',
          a: 'It is a different product. We will not discount staffed service into drop-off language.',
        },
      ],
      related: [
        { path: '/catering', label: 'Staffed catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/guest-counts', label: 'Guest counts' },
      ],
    },
  ],
  maui: [
    {
      slug: 'bbq',
      name: 'BBQ',
      h1: 'BBQ on a Maui lawn — Wailea and West Maui.',
      title: 'BBQ on a Maui lawn — Wailea and West Maui | myCHEF',
      description:
        'Staffed BBQ in Wailea, Kīhei and West Maui houses. Grill as a format. Wet-weather backup written.',
      lede:
        'Grill, grass, identical plates. Saturday Honoapiʻilani traffic is planned into arrival. Not a hotel luau we do not run.',
      photo: 'fmtBbqMaui',
      body: [
        'Drop-off is the Drop-off catering format — a different product.',
      ],
      faqs: [
        {
          q: 'Luau on the lawn?',
          a: 'We grill. We do not sell a theatrical luau we do not staff.',
        },
        {
          q: 'Rain?',
          a: 'Backup is written.',
        },
      ],
      related: [
        { path: '/catering', label: 'Staffed catering' },
        { path: '/south-maui', label: 'South Maui' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
    {
      slug: 'plated',
      name: 'Plated',
      h1: 'Plated villa service on Maui — courses on a Wailea table.',
      title: 'Plated villa service on Maui | myCHEF',
      description:
        'Coursed seated service in Wailea dining rooms and Kapalua lanais. Needs more servers than a buffet.',
      lede:
        'A restaurant arc, off-site, to the table. Rehearsal dinners often run this way. Staffing is a separate line.',
      photo: 'fmtPlatedMaui',
      body: [
      ],
      faqs: [
        {
          q: 'Lawn plated in wind?',
          a: 'We write a backup. Plated wants a table that holds.',
        },
        {
          q: 'Two of us?',
          a: 'Yes.',
        },
      ],
      related: [
        { path: '/rehearsal-dinners', label: 'Rehearsal dinners' },
        { path: '/wailea', label: 'Wailea' },
        { path: '/catering/family-style', label: 'Family-style' },
      ],
    },
    {
      slug: 'family-style',
      name: 'Family-style',
      h1: 'Family-style service in Maui villas — platters on the lanai.',
      title: 'Family-style service in Maui villas | myCHEF',
      description:
        'Shared platters in Wailea, Kapalua and Kīhei. Usual villa night for about 10–20.',
      lede:
        'Platters down the table. Welcome dinners often run this way.',
      photo: 'fmtFamilyMaui',
      body: [
      ],
      faqs: [
        {
          q: 'Same as grazing?',
          a: 'This is seated platters in a Wailea villa.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/catering/grazing', label: 'Grazing' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
    {
      slug: 'buffet',
      name: 'Buffet',
      h1: 'Buffet service in Maui villas — stations on a South Maui lawn.',
      title: 'Buffet service in Maui villas | myCHEF',
      description:
        'Staffed buffet in Wailea, Kīhei and West Maui houses. Best from about 20 guests. Not a hotel banquet.',
      lede:
        'Guests move. Stations stay hot. Wet-weather backup is written. Ballrooms are not the product.',
      photo: 'fmtBuffetMaui',
      body: [
      ],
      faqs: [
        {
          q: 'Hotel conference buffet?',
          a: 'No. Residences and villas.',
        },
        {
          q: 'Cheaper than plated?',
          a: 'Food band is CORE. Staffing is usually lighter. Quote in writing.',
        },
      ],
      related: [
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/retreat-catering', label: 'Retreat kitchens' },
        { path: '/south-maui', label: 'South Maui' },
      ],
    },
    {
      slug: 'grazing',
      name: 'Grazing',
      h1: 'Grazing boards in a Maui villa — first hour on the lanai.',
      title: 'Grazing boards in a Maui villa | myCHEF',
      description:
        'Styled boards and passed small plates in Wailea and West Maui. Cocktail hour or arrival night.',
      lede:
        'Boards, travel clothes, the ice-breaker. A seated dinner is a different format.',
      photo: 'fmtGrazingMaui',
      body: [
        'Welcome dinners often start here. Family-style is seated.',
      ],
      faqs: [
        {
          q: 'Enough for dinner?',
          a: 'Say so on the brief. We write grazing-as-dinner or grazing-as-hour.',
        },
        {
          q: 'West Maui arrival grazing after OGG?',
          a: 'If we have the crew. Traffic is planned.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/bar', label: 'Bar add-on' },
        { path: '/west-maui', label: 'West Maui' },
      ],
    },
    {
      slug: 'drop-off',
      name: 'Drop-off',
      h1: 'Wailea drop-off is not a villa brigade. Inquiry only.',
      title: 'Wailea drop-off is not a villa brigade | myCHEF',
      description:
        'Maui drop-off is trays at a villa door, not a Wailea brigade. Inquiry only. We will not sell drop-off as if a chef stays.',
      lede:
        'Trays at the villa door. No pass. No cleanup. If you want a chef, that is the catering page or /. This page keeps the words honest.',
      photo: 'fmtDropoffMaui',
      body: [
        'We will not discount staffed service into drop-off language.',
      ],
      faqs: [
        {
          q: 'Can you leave trays in Kīhei and go?',
          a: 'Inquiry only. Not the staffed product in Kīhei.',
        },
        {
          q: 'Is this cheaper catering?',
          a: 'It is a different product. Ask; do not expect the dinner band.',
        },
      ],
      related: [
        { path: '/catering', label: 'Staffed catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
  ],
  kauai: [
    {
      slug: 'bbq',
      name: 'BBQ',
      h1: 'BBQ on a Kauai estate lawn — inquiry, both shores.',
      title: 'BBQ on a Kauai estate lawn — inquiry | myCHEF',
      description:
        'Staffed BBQ in Princeville, Hanalei and Poʻipū. Inquiry stage. Grill as a format. Far-North inherits the bridge clause.',
      lede:
        'Grill, kiawe, pale cliffs or misted mountains. Inquiry. We do not sell a theatrical luau we do not staff.',
      photo: 'fmtBbqKauai',
      body: [
        'Drop-off is a different product. Inquiry list with the shore.',
      ],
      faqs: [
        {
          q: 'Luau?',
          a: 'We grill. We do not staff a theatrical luau on a Princeville lawn.',
        },
        {
          q: 'Hanalei BBQ in surf season?',
          a: 'Bridge clause still applies.',
        },
      ],
      related: [
        { path: '/catering', label: 'Staffed catering' },
        { path: '/hanalei-bridge', label: 'Bridge clause' },
        { path: '/south-shore', label: 'South Shore' },
      ],
    },
    {
      slug: 'plated',
      name: 'Plated',
      h1: 'Plated estate service on Kauai — inquiry, both shores.',
      title: 'Plated estate service on Kauai — inquiry | myCHEF',
      description:
        'Coursed seated service in Princeville and Poʻipū. Inquiry stage. Needs more servers than a buffet.',
      lede:
        'Courses on an estate table. North mist or South sun. Inquiry. Rehearsal dinners often run this way.',
      photo: 'fmtPlatedKauai',
      body: [
      ],
      faqs: [
        {
          q: 'Can I book plated this month?',
          a: 'Inquiry list with the shore. We will not fake a live roster.',
        },
        {
          q: 'Two of us?',
          a: 'Yes.',
        },
      ],
      related: [
        { path: '/rehearsal-dinners', label: 'Rehearsal dinners' },
        { path: '/princeville', label: 'Princeville' },
        { path: '/catering/family-style', label: 'Family-style' },
      ],
    },
    {
      slug: 'family-style',
      name: 'Family-style',
      h1: 'Family-style service on Kauai estates — platters, both shores.',
      title: 'Family-style service on Kauai estates | myCHEF',
      description:
        'Shared platters in Princeville and Poʻipū. Inquiry stage. Usual estate night for about 10–20.',
      lede:
        'Platters down the table. Welcome dinners often run this way. Inquiry.',
      photo: 'fmtFamilyKauai',
      body: [
      ],
      faqs: [
        {
          q: 'Kids?',
          a: 'Weather still applies on the North.',
        },
        {
          q: 'Same as grazing?',
          a: 'Grazing is boards. This is seated platters.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/poipu', label: 'Poʻipū' },
        { path: '/catering/grazing', label: 'Grazing' },
      ],
    },
    {
      slug: 'buffet',
      name: 'Buffet',
      h1: 'Buffet service on Kauai estates — inquiry, stations that stay hot.',
      title: 'Buffet service on Kauai estates — inquiry | myCHEF',
      description:
        'Staffed buffet in Princeville and Poʻipū. Inquiry stage. Best from about 20 guests. Not a hotel banquet.',
      lede:
        'Guests move. Stations stay hot. Inquiry. Estate scale, not a ballroom.',
      photo: 'fmtBuffetKauai',
      body: [
        'Inquiry stage.',
      ],
      faqs: [
        {
          q: 'Līhuʻe hotel buffet?',
          a: 'No. Estates and villas.',
        },
        {
          q: 'Far-North buffet?',
          a: 'Bridge clause still applies.',
        },
      ],
      related: [
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/retreat-catering', label: 'Retreat kitchens' },
        { path: '/north-shore', label: 'North Shore' },
      ],
    },
    {
      slug: 'grazing',
      name: 'Grazing',
      h1: 'Grazing boards on a Kauai estate — first hour, both shores.',
      title: 'Grazing boards on a Kauai estate | myCHEF',
      description:
        'Styled boards and passed small plates in Poʻipū and Princeville. Inquiry stage. Arrival night or cocktail hour.',
      lede:
        'Boards after Līhuʻe. Family-style may follow. Inquiry.',
      photo: 'fmtGrazingKauai',
      body: [
        'Welcome dinners often start here.',
      ],
      faqs: [
        {
          q: 'Enough for dinner?',
          a: 'Say so on the brief. We write which — Princeville kitchen at inquiry.',
        },
        {
          q: 'Same day as the flight?',
          a: 'If the crew exists and the shore is named. Inquiry.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/bar', label: 'Bar add-on' },
        { path: '/south-shore', label: 'South Shore' },
      ],
    },
    {
      slug: 'drop-off',
      name: 'Drop-off',
      h1: 'Both-shore trays are inquiry — never sold as a staffed estate.',
      title: 'Both-shore drop-off inquiry — not a staffed estate | myCHEF',
      description:
        'Kauaʻi drop-off is inquiry-only trays, never sold as a staffed Princeville or Poʻipū estate.',
      lede:
        'Trays at the estate door. No pass. Inquiry. If you want a chef, that is on the catering page. This page keeps the words honest.',
      photo: 'fmtDropoffKauai',
      body: [
        'Far-North still inherits the Hanalei bridge notes even for a conversation about trays.',
      ],
      faqs: [
        {
          q: 'Leave trays in Poʻipū?',
          a: 'Inquiry only. Not the staffed product in Poʻipū.',
        },
        {
          q: 'Is this cheaper catering?',
          a: 'It is a different product. We will not blur them.',
        },
      ],
      related: [
        { path: '/catering', label: 'Staffed catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/vacation-chef', label: 'Vacation chef' },
      ],
    },
  ],
  bigisland: [
    {
      slug: 'bbq',
      name: 'BBQ',
      h1: 'BBQ on a Kohala lava terrace — west side, inquiry.',
      title: 'BBQ on a Kohala lava terrace — west side | myCHEF',
      description:
        'Staffed BBQ on Kona–Kohala terraces. Inquiry stage. Grill as a format. East side is a different day.',
      lede:
        'Grill on lava, hard sun, kanpachi. Not a Hilo add-on. We do not sell a theatrical luau we do not staff.',
      photo: 'fmtBbqBigisland',
      body: [
        'West-side: Kona–Kohala corridor.',
      ],
      faqs: [
        {
          q: 'Luau on lava?',
          a: 'We grill. We do not staff a theatrical luau on a Waikoloa terrace.',
        },
        {
          q: 'Hilo BBQ?',
          a: 'Quote-only dedicated staffing.',
        },
      ],
      related: [
        { path: '/catering', label: 'Staffed catering' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/waikoloa', label: 'Waikoloa' },
      ],
    },
    {
      slug: 'plated',
      name: 'Plated',
      h1: 'Plated villa service on the Kohala Coast — west-side courses.',
      title: 'Plated villa service on the Kohala Coast | myCHEF',
      description:
        'Coursed seated service in Kona and Kohala houses. Inquiry stage. Needs more servers than a buffet. East side is a different day.',
      lede:
        'Courses on lava, Mauna Kea faint. Inquiry. Rehearsal dinners often run this way.',
      photo: 'fmtPlatedBigisland',
      body: [
      ],
      faqs: [
        {
          q: 'Hilo plated?',
          a: 'Quote-only dedicated day.',
        },
        {
          q: 'Two of us?',
          a: 'Yes. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/rehearsal-dinners', label: 'Rehearsal dinners' },
        { path: '/kona', label: 'Kona' },
        { path: '/catering/family-style', label: 'Family-style' },
      ],
    },
    {
      slug: 'family-style',
      name: 'Family-style',
      h1: 'Family-style service on west-side Hawaiʻi Island — platters on lava.',
      title: 'Family-style service on west-side Hawaiʻi Island | myCHEF',
      description:
        'Shared platters in Kona and Kohala villas. Inquiry stage. Usual west-side night for about 10–20. East side is a different day.',
      lede:
        'Platters down the table. Welcome dinners often run this way. Hard sun still in the window.',
      photo: 'fmtFamilyBigisland',
      body: [
        'West-side: Kona–Kohala corridor.',
      ],
      faqs: [
        {
          q: 'Kids on lava at noon?',
          a: 'Shade is the house.',
        },
        {
          q: 'Hilo family-style?',
          a: 'Quote-only east side.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/kohala-corridor', label: 'West-side radius' },
        { path: '/catering/grazing', label: 'Grazing' },
      ],
    },
    {
      slug: 'buffet',
      name: 'Buffet',
      h1: 'Buffet service on the Kohala Coast — west-side stations.',
      title: 'Buffet service on the Kohala Coast | myCHEF',
      description:
        'Staffed buffet in Kona and Kohala houses. Inquiry stage. Best from about 20 guests. East side is a different day.',
      lede:
        'Guests move. Stations stay hot in hard sun. Inquiry. Not a Hilo add-on.',
      photo: 'fmtBuffetBigisland',
      body: [
      ],
      faqs: [
        {
          q: 'Ironman week buffet?',
          a: 'Flag dates. Town compresses.',
        },
        {
          q: 'Hilo buffet?',
          a: 'Quote-only dedicated staffing.',
        },
      ],
      related: [
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/ironman-weeks', label: 'Ironman weeks' },
        { path: '/retreat-catering', label: 'Retreat kitchens' },
      ],
    },
    {
      slug: 'grazing',
      name: 'Grazing',
      h1: 'Grazing boards on a Kohala terrace — first hour, west side.',
      title: 'Grazing boards on a Kohala terrace | myCHEF',
      description:
        'Styled boards and passed small plates in Kona and Kohala. Inquiry stage. Arrival night after KOA. East side is a different day.',
      lede:
        'Boards, travel clothes, lava still hot. A seated dinner is a different format.',
      photo: 'fmtGrazingBigisland',
      body: [
        'Welcome dinners often start here.',
      ],
      faqs: [
        {
          q: 'Landing and grazing in Waikoloa that night?',
          a: 'If we have the crew. West-side radius, not a round trip from Hilo.',
        },
        {
          q: 'Enough for dinner?',
          a: 'Say so on the brief. We write which — Waikoloa kitchen. Hilo is never implied.',
        },
      ],
      related: [
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/kona', label: 'Kona' },
        { path: '/bar', label: 'Bar add-on' },
      ],
    },
    {
      slug: 'drop-off',
      name: 'Drop-off',
      h1: 'West-side drop-off is not a Kona crew. Inquiry, and Hilo is another day.',
      title: 'West-side drop-off inquiry — not a Kona crew | myCHEF',
      description:
        'West-side drop-off is inquiry-only trays, not a Kona crew. Hilo is another day. We will not sell drop-off as if a chef stays.',
      lede:
        'Trays at the villa door. No pass. Inquiry. If you want a chef, that is on the catering page. East side is still a different day.',
      photo: 'fmtDropoffBigisland',
      body: [
        'East-side drop-off is not a west-side errand.',
      ],
      faqs: [
        {
          q: 'Leave trays in Waikoloa?',
          a: 'Inquiry only. Not the staffed product in Waikoloa.',
        },
        {
          q: 'Hilo drop-off from a Kona kitchen?',
          a: 'No. East side is dedicated staffing even for dinners.',
        },
      ],
      related: [
        { path: '/catering', label: 'Staffed catering' },
        { path: '/what-we-dont-do', label: 'What we will not claim' },
        { path: '/east-side', label: 'East side' },
      ],
    },
  ],
};

export function getCateringFormat(island: IslandId, slug: string): CateringFormatPage | undefined {
  return cateringFormats[island].find((row) => row.slug === slug);
}
