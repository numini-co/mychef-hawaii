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
          a: 'Food band is still the island signature card. Staffing changes. Quote in writing.',
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
          a: 'Food band is the signature card. Staffing is usually lighter than plated. Quote in writing.',
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
        'If a night needs trays and no staff, ask. Do not expect the signature dinner band.',
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
        'A Maui BBQ is a staffed grill night on the lawn or lānai of the house: wood-grilled catch, a ranch or vegetable plate so the table is not one fish, coconut rice, island greens, and a crew that keeps the fire, plates and clears. It suits a reunion lawn in Kīhei, a Wailea pool deck, or a Kāʻanapali estate where people would rather stand near the grill than sit through courses.',
        'Wind shapes the plan. The grill is set where the trade winds drop, pans stay lidded, and an indoor or covered table is written into the quote before a deposit. Saturday Honoapiʻilani traffic is built into crew arrival for West Maui houses, and Upcountry addresses carry their published travel line.',
        'This page is the format note. Guest counts of about 10–75, the $225–$375 food band and the staffing lines live on the island [Maui catering](/catering) page. Trays left at the door are a different product — see Drop-off. For eight or fewer around one grill, a villa dinner on [private chef Maui](/) is usually the better fit.',
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
        {
          q: 'What does a Maui BBQ cost?',
          a: 'Food follows the Maui signature card, $225–$375 a guest, with servers at $80 an hour and a sous-chef at $105 on four- to five-hour minimums. 20% service and GET up to 4.712% are added once. The written total comes from [Maui catering](/catering).',
        },
        {
          q: 'Can a Kīhei condo host a BBQ?',
          a: 'Only if the building allows a grill and there is a real place to plate. Many Kīhei condos suit a buffet or family-style night better, and we will say so before you commit.',
        },
      ],
      related: [
        { path: '/catering', label: 'Maui catering' },
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
        'Plated Maui catering is a coursed, seated dinner served to each guest: a first course such as kanpachi crudo, a main of wood-grilled catch or a ranch plate, and a lilikoi or haupia close. It suits Wailea dining rooms, sheltered Kapalua terraces and rehearsal dinners where the toasts need the table to stay seated.',
        'Plated needs more people on the floor than a buffet for the same guest list, so the staffing line grows while the food band stays the same. Servers are $80 an hour and a sous-chef $105, on four- to five-hour minimums. A Wailea condo with a galley kitchen can be the wrong room for twenty plated covers — we will suggest family-style or a buffet before you pay a deposit.',
        'Guest counts, the $225–$375 food band and the written quote live on the island [Maui catering](/catering) page. A plated dinner for two to eight in the villa is booked as a private dinner on [private chef Maui](/), not as catering.',
      ],
      faqs: [
        {
          q: 'Lawn plated in wind?',
          a: 'We write a backup. Plated wants a table that holds.',
        },
        {
          q: 'Two of us?',
          a: 'Yes — but a dinner for two is a private chef night, not catering. Open [private chef Maui](/).',
        },
        {
          q: 'How many guests can a plated Maui dinner seat?',
          a: 'As many as the dining room or terrace and the kitchen can hold, within the usual 10–75 range for staffed events. The staffing plan is sized to the covers and printed on the quote from [Maui catering](/catering).',
        },
      ],
      related: [
        { path: '/catering', label: 'Maui catering' },
        { path: '/rehearsal-dinners', label: 'Rehearsal dinners' },
        { path: '/catering/family-style', label: 'Family-style' },
      ],
    },
    {
      slug: 'family-style',
      name: 'Family-style',
      h1: 'Family-style service in Maui villas — platters on the lanai.',
      title: 'Family-style service in Maui villas | myCHEF',
      description:
        'Shared platters in Wailea, Kapalua and Kīhei. Usual villa night for about 10–20 under Maui catering.',
      lede:
        'Platters down the table on a Wailea or West Maui lānai. Welcome dinners and reunion nights often run this way under staffed Maui catering.',
      photo: 'fmtFamilyMaui',
      body: [
        'Family-style on Maui is a seated format: whole fish, salads and sides travel down the table, and guests serve themselves. It sits between a plated restaurant arc and a buffet station line. Most Wailea and Kīhei lists of about 10–20 prefer it for welcome nights because conversation stays at the table and service can stay lighter than a full plated pass.',
        'West Maui houses in Kāʻanapali and Kapalua use the same format when the deck table holds the guest list. Saturday Honoapiʻilani traffic is planned into crew arrival, not into a silent fee. Wind and spray on an open ocean deck get a written indoor or covered backup — the same clause we use for other Maui catering formats.',
        'This page is the format note. Headcount, staffing hours and the food band live on the island [Maui catering](/catering) page, with published starting prices from $225 a guest for staffed villa events of about 10–75. For eight or fewer, open [private chef Maui](/) instead of a catering format.',
      ],
      faqs: [
        {
          q: 'Same as grazing?',
          a: 'No. Grazing is boards and passed pūpū while people still stand. Family-style is seated platters on a Wailea or Kapalua table.',
        },
        {
          q: 'How many guests suit family-style on Maui?',
          a: 'About 10–20 at one long table is the usual sweet spot. Larger lawn lists often move to buffet. Under about eight, book a villa dinner on [private chef Maui](/).',
        },
        {
          q: 'Does family-style cost less than plated Maui catering?',
          a: 'The food band is still the Maui signature card from $225 a guest. Staffing is usually lighter than a full plated pass. Exact hours print on the written quote from [Maui catering](/catering).',
        },
      ],
      related: [
        { path: '/catering', label: 'Maui catering' },
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/catering/grazing', label: 'Grazing' },
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
        'A Maui buffet is stations in the house, staffed: hot pans that stay hot when the breeze comes through the sliders, a carving or grill station when the menu wants one, and a crew that refills, clears and runs the kitchen. It is the usual choice for a Wailea great room full of people standing, a reunion week on a South Maui lawn, or a West Maui party of about twenty and up.',
        'We set stations where the wind drops and keep lids on. Outdoor buffets get a written covered or indoor backup before a deposit. Kīhei condos with smaller kitchens often run better as a buffet than a plated dinner; the food price does not change, only the format and the staffing plan.',
        'The $225–$375 food band, the 10–75 guest range and staffing at $80 an hour per server are on the island [Maui catering](/catering) page. Ballroom banquets in hotels are not the product — this is catering in residences and villas.',
      ],
      faqs: [
        {
          q: 'Hotel conference buffet?',
          a: 'No. Residences and villas.',
        },
        {
          q: 'Cheaper than plated?',
          a: 'Food band is the signature card. Staffing is usually lighter. Quote in writing.',
        },
        {
          q: 'From how many guests does a Maui buffet make sense?',
          a: 'Usually from about twenty. Below that, a family-style table often feels better and needs a similar crew. The quote from [Maui catering](/catering) names the format that fits the house.',
        },
      ],
      related: [
        { path: '/catering', label: 'Maui catering' },
        { path: '/guest-counts', label: 'Guest counts' },
        { path: '/retreat-catering', label: 'Retreat kitchens' },
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
        'Grazing on Maui is the first hour: styled boards with ahi poke, local crudités and fruit, plus passed small plates while people are still in travel clothes. Welcome dinners often start here, and family-style is the seated course that may follow.',
        'Boards run around $750–$950 as a market reference, and passed bites are $5–$7 a piece with a twenty-piece minimum. On an open Wailea or Kapalua lānai, boards are set out of the wind and refreshed rather than left to sit in the sun.',
        'Tell us on the brief whether grazing is the hour or the whole evening, and we write the quantities to match. Full staffed events — headcount, staffing and the written total — sit on the island [Maui catering](/catering) page.',
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
        {
          q: 'Can grazing be added to a Maui catering dinner?',
          a: 'Yes. It prints as its own line on the same written quote from [Maui catering](/catering), before the seated or buffet course.',
        },
      ],
      related: [
        { path: '/catering', label: 'Maui catering' },
        { path: '/events/welcome-dinners', label: 'Welcome dinners' },
        { path: '/bar', label: 'Bar add-on' },
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
        'Drop-off means food delivered to the villa door and no crew staying behind: nobody at the pass, nobody clearing, no cleanup. On Maui it is inquiry only, because the staffed format is what we actually run. If you ask, we will tell you in writing whether trays are possible for that date and address.',
        'If you want a chef in the kitchen and service at the table, that is staffed [Maui catering](/catering) for about 10–75 guests from $225 a guest, or a villa dinner on [private chef Maui](/) for a smaller table.',
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
        { path: '/catering', label: 'Maui catering' },
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
        { path: '/catering', label: 'Kauai catering' },
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
        { path: '/catering', label: 'Kauai catering' },
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
        'Family-style on Kauaʻi is a seated estate dinner with platters down the middle of one long table: wood-grilled catch with mango and coconut rice, island greens, a ranch or vegetable main, and a lilikoi or haupia close. Guests pass and serve themselves, so conversation stays at the table and the crew stays lighter than a full plated pass.',
        'It suits rehearsal-sized tables of under about twenty — a welcome dinner for a wedding group in Poʻipū, a reunion night in a Princeville estate, a retreat week’s last supper. On the North Shore the long table gets a covered lānai backup from November to March; South Shore lawns can usually stay outdoors on more nights of the year.',
        'Kauaʻi is by inquiry. Name the shore and the town on the first note. Princeville, Hanalei and Poʻipū carry the published $50–$75 travel line, and the Hanalei bridge clause applies to the far North. Guest counts, the $225–$375 food band and staffing live on the island [Kauai catering](/catering) page; a table of eight or fewer is a villa dinner on [private chef Kauai](/).',
      ],
      faqs: [
        {
          q: 'Kids?',
          a: 'Yes — kids’ plates go on the same platters plan. Weather still applies on the North.',
        },
        {
          q: 'Same as grazing?',
          a: 'Grazing is boards. This is seated platters.',
        },
        {
          q: 'How many guests suit family-style on Kauaʻi?',
          a: 'Usually ten to about twenty at one table. Bigger lists often move to a buffet under cover on the North Shore or a plated lawn dinner on the South Shore. The written reply comes from [Kauai catering](/catering).',
        },
        {
          q: 'What does family-style cost on Kauaʻi?',
          a: 'The food band is the Kauaʻi signature card, $225–$375 a guest. Servers are $80 an hour and a sous-chef $105, on four- to five-hour minimums. 20% service and GET up to 4.712% are added once; a 50% deposit holds the date when a crew is confirmed.',
        },
      ],
      related: [
        { path: '/catering', label: 'Kauai catering' },
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
        { path: '/catering', label: 'Kauai catering' },
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
        { path: '/catering', label: 'Kauai catering' },
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
        { path: '/catering', label: 'Kauai catering' },
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
