import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { IslandNestedIndexPage } from './islandHelpIndex';

/**
 * Island /gatherings indexes. Distinct from hub /gatherings, from /events,
 * /blog/family-reunions, /events/birthdays, and /rehearsal-dinners.
 * Titles must not use money keywords.
 */

export const GATHERINGS_INDEX_LINKS: { path: string; label: string }[] = [
  { path: '/events', label: 'Occasions' },
  { path: '/events/birthdays', label: 'Birthdays' },
  { path: '/blog/family-reunions', label: 'Family reunions' },
  { path: '/rehearsal-dinners', label: 'Rehearsal dinners' },
  { path: '/events/brunch', label: 'Day-after brunch' },
  { path: '/guest-counts', label: 'Guest counts we staff' },
  { path: '/quote', label: 'Quote / inquiry form' },
];

export const islandGatherings: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Oahu gatherings — the house, not a Gold Coast ballroom.',
    title: 'Oahu house gatherings — birthdays & reunions | myCHEF',
    description:
      'Oʻahu parties: birthdays, reunions, multi-family weeks. Family-style, buffet, or seated. Dinners 2–15, receptions about 10–75. Children count on the quote.',
    lede:
      'A family week in the rental is a house party: birthday, reunion, or several families sharing one kitchen. The room decides the service. The headcount decides the crew.',
    kicker: 'Oʻahu · Gatherings',
    photo: 'gatherIndexOahu',
    body: [
      'Family-style means platters down a Kahala dining table. A buffet is a line the house can hold, usually a Ko Olina lawn or a long counter. Seated is courses at the table, which a Honolulu condo can do only if the galley and the building rules allow the seats.',
      'Dinners run from two to fifteen. Receptions are about ten to seventy-five. A larger format is quoted, not promised. Children are part of the headcount on the quote. There is no separate published kids’ price and no age cut-off.',
      'What that count does to the total is on the written quote, with a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. Occasion pages hold the night type. Seat rules are on [guest counts](/guest-counts). Request a written quote on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Is a multi-family week in a Ko Olina villa a house party or a banquet?',
        a: 'It is a house party in the rental. Birthdays and reunions stay in that kitchen. A banquet room is not the product. The night type, if you need the occasion page, is under [gatherings by occasion](/events). Request a written quote for the house you have.',
      },
      {
        q: 'When is family-style the right service for a Kahala birthday?',
        a: 'When the dining room can take platters and the group is passing them. A seated birthday is courses at that same table. A buffet needs a line the house can hold. Say which one on [the quote form](/quote). We do not pick a ballroom format for a residence.',
      },
      {
        q: 'What changes when an Oʻahu family dinner grows past the dining table?',
        a: 'The headcount is written again. Dinners run from two to fifteen. Receptions are about ten to seventy-five, and a larger list is quoted, not promised. A plated reception can add a server as its own line. Seat rules are on [guest counts](/guest-counts).',
      },
      {
        q: 'Do children at a Honolulu reunion count on the quote?',
        a: 'They are part of the headcount on the quote. There is no separate published kids’ price and no age cut-off. What the count does to the total is set out in the written quote. A child’s plate is planned with the adults, not left off the list.',
      },
      {
        q: 'Can a Waikīkī condo hold a seated family dinner?',
        a: 'Only when the cooktop, the galley, and the building rules can take the seats. A freight window still applies to that tower. If the room cannot hold the list, we say so before you accept. We do not promise a lawn the condo does not have.',
      },
      {
        q: 'Where do fees sit on an Oʻahu house-party quote?',
        a: 'After the food: a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. A 50% deposit holds the date after you accept. Gratuity is never required. Bands are on [pricing](/pricing). There is no separate published price for a gathering.',
      },
    ],
  },
  maui: {
    h1: 'Maui gatherings — the villa, not a Wailea banquet.',
    title: 'Maui villa gatherings — family weeks & birthdays | myCHEF',
    description:
      'Maui family weeks in Wailea, Kāʻanapali, and Kapalua. Family-style, buffet, or seated. Arrival night is one meal in the week. Request a written quote.',
    lede:
      'The gathering is the family already in the villa: a birthday on night three, a reunion at the long table, arrival night as one meal in that week.',
    kicker: 'Maui · Gatherings',
    photo: 'gatherIndexMaui',
    body: [
      'Family-style on Maui is platters on a Wailea lānai or a Kapalua dining table. A buffet is stations the lawn can hold. Seated is courses for the people in the house, not a banquet reset.',
      'As the group grows, a dinner of two to fifteen stays the chef in that kitchen. A reception of about ten to seventy-five is a staffed service. Larger formats are quoted, not promised. Children are part of the headcount on the quote. There is no separate published kids’ price and no age cut-off.',
      'Arrival night can be the casual meal. A later birthday can be seated. Both are lines on one written quote, with a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. How many seats is [guest counts](/guest-counts). The lawn party page is [villa parties](/events/villa-parties). Quotes are open.',
    ],
    faqs: [
      {
        q: 'Can arrival night in a Wailea villa be the family gathering?',
        a: 'It can be the easy meal the evening you land, family-style, while a later birthday in the same week is seated. Both are lines on the written quote. Saturday landing time belongs in the note. Request a written quote on [the quote form](/quote).',
      },
      {
        q: 'What is the difference between family-style, buffet, and seated in a Kapalua house?',
        a: 'Family-style is platters on the table. A buffet is stations the house can hold. Seated is courses at the chairs you have. The villa kitchen decides which of those fits. We do not turn a dining room into a ballroom.',
      },
      {
        q: 'What changes when a Maui family week grows from a table of eight to a lawn?',
        a: 'The headcount is rewritten before the deposit. Dinners run from two to fifteen. Receptions are about ten to seventy-five. A larger lawn is quoted, not promised. Seat rules are on [guest counts](/guest-counts). A staffed lawn is a different service from the weeknight table.',
      },
      {
        q: 'How are children counted on a Kāʻanapali reunion quote?',
        a: 'They are part of the headcount on the quote. There is no separate published kids’ price and no age cut-off. What the count does to the total is in the written quote. Their plates are planned with the adults for that villa week.',
      },
      {
        q: 'Does a multi-family week use one Maui quote or a quote per family?',
        a: 'One house, one written total, with each meal named. Two villas are two quotes. A shared Wailea kitchen does not split the headcount by family. Children in every family are on that same count.',
      },
      {
        q: 'Where are the fee lines on a Maui gathering quote?',
        a: 'After the food: a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. A 50% deposit holds the dates after you accept. Gratuity is never required. Bands are on [pricing](/pricing). A gathering has no separate published price.',
      },
    ],
  },
  kauai: {
    h1: 'Kauai gatherings — the estate at inquiry, not a ballroom.',
    title: 'Kauai estate gatherings — both shores | myCHEF',
    description:
      'Kauaʻi gatherings, both shores. Request availability. Family-style, buffet, or seated. Rain can move the table indoors. A shore name is not a confirmation.',
    lede:
      'Request availability for a family gathering in the estate. Princeville rain can move the table inside. A Poʻipū lawn and a Hanalei great room are not the same plan.',
    kicker: 'Kauaʻi · Gatherings',
    photo: 'gatherIndexKauai',
    body: [
      'Family-style on the north shore is platters under a covered lānai, with the dining room named as the rain plan. A buffet needs a line the estate can keep dry. Seated is the great-room table. On the south shore the same three services exist, but Poʻipū can keep an outdoor setup when the house allows it.',
      'Dinners run from two to fifteen. Receptions are about ten to seventy-five. Larger formats are quoted, not promised. Children are part of the headcount on the quote. There is no separate published kids’ price and no age cut-off.',
      'A house past the Hanalei bridge still carries the written bridge clause. Request availability on [the quote form](/quote). A named shore is not a confirmation. Seat rules are on [guest counts](/guest-counts). Fee lines are a 20% service charge and Hawaiʻi GET up to 4.712%, each on its own line, after a written yes.',
    ],
    faqs: [
      {
        q: 'How do I request availability for a Princeville family reunion?',
        a: 'Send the shore, the dates, the estate address, and the headcount, and request availability on [the quote form](/quote). That request is not a confirmation. We staff the house when a crew exists. Both shores can be asked. Neither is an instant booking.',
      },
      {
        q: 'Where does a north-shore birthday go if it rains?',
        a: 'Under the covered lānai or into the dining room, whichever the quote named before the shop. The rain plan is part of the request for availability. We do not invent a tent the estate does not have. Poʻipū may keep the lawn when that house allows it.',
      },
      {
        q: 'Family-style, buffet, or seated — which fits a Hanalei great room?',
        a: 'Family-style and seated both use that table. A buffet needs a line the room can hold when the weather moves everyone inside. Tell us the room with the request. A south-shore lawn is a different drawing.',
      },
      {
        q: 'What changes when a Kauaʻi family group grows past fifteen?',
        a: 'It leaves the dinner range. Dinners run from two to fifteen. Receptions are about ten to seventy-five, and a larger format is quoted, not promised. The new count is written before any deposit. Rules are on [guest counts](/guest-counts).',
      },
      {
        q: 'Are children included when we request availability for a Kapaʻa house?',
        a: 'They are part of the headcount on the quote. There is no separate published kids’ price and no age cut-off. What the count does to the total is in the written quote. Name them in the request for availability so the shop matches the table.',
      },
      {
        q: 'Does a gathering past the Hanalei bridge use the same request?',
        a: 'Request availability the same way, and add the bridge note. The 72-hour clause is already on our quotes for far-north houses. A closure reschedules rather than forfeits. The south shore does not inherit that clause. There is no separate published gathering price.',
      },
    ],
  },
  bigisland: {
    h1: 'West-side gatherings — the house at inquiry. Hilo not implied.',
    title: 'Big Island house gatherings — Kona & Kohala | myCHEF',
    description:
      'Kona-to-Kohala parties. Join the inquiry list. Family-style, buffet, or seated. Hilo is a separate dedicated east-side day, not on the west-side night.',
    lede:
      'Join the inquiry list for a family gathering on the west side. A Kona terrace and a Kohala dining room are the rooms we plan. Hilo is not a second stop that evening.',
    kicker: 'Hawaiʻi Island · Gatherings',
    photo: 'gatherIndexBigisland',
    body: [
      'Family-style is platters on a west-side terrace or at the dining table. A buffet is stations that terrace can hold in the hard sun, with an indoor room named if you need one. Seated is courses for the people in the house.',
      'Dinners run from two to fifteen. Receptions are about ten to seventy-five. Larger formats are quoted, not promised. Children are part of the headcount on the quote. There is no separate published kids’ price and no age cut-off.',
      'Hilo is a separate dedicated east-side day and is never stacked onto this west-side party. Ironman week in Kailua-Kona compresses the calendar, so flag it when you join the inquiry list on [the quote form](/quote). Seat rules are on [guest counts](/guest-counts). A 20% service charge and Hawaiʻi GET up to 4.712% sit on their own lines after the food.',
    ],
    faqs: [
      {
        q: 'How do I join the inquiry list for a Kohala family reunion?',
        a: 'Send the west-side address, the dates, and the headcount on [the quote form](/quote), and join the inquiry list. Kona, Waikoloa, and Kohala are the usual houses. The inquiry is not a held date. We write a total when that day can be staffed.',
      },
      {
        q: 'Can a Hilo birthday be added to a Kona gathering?',
        a: 'Hilo is a separate dedicated east-side day. It is not a course added after a west-side party, and it is not stacked onto that crew. Join the inquiry list for the side the house is actually on. Volcano sits with the east-side request.',
      },
      {
        q: 'Which service fits a Waikoloa terrace: family-style, buffet, or seated?',
        a: 'Family-style and seated both use the table. A buffet needs stations the terrace can hold, plus an indoor room if you want one named. Hard sun is real. Tell us the service with the inquiry. We do not promise a lawn the house does not have.',
      },
      {
        q: 'What changes when a west-side family group grows?',
        a: 'The headcount is written again before any deposit. Dinners run from two to fifteen. Receptions are about ten to seventy-five. A larger format is quoted, not promised. Those ranges are on [guest counts](/guest-counts). The growth does not pull Hilo into the same day.',
      },
      {
        q: 'Do children count on a Kona house-party inquiry?',
        a: 'They are part of the headcount on the quote. There is no separate published kids’ price and no age cut-off. What the count does to the total is in the written quote. Put them on the inquiry so the west-side shop matches the chairs.',
      },
      {
        q: 'Where do the fee lines sit on a west-side gathering?',
        a: 'After the food: a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. A 50% deposit follows a written yes, not the inquiry itself. Gratuity is never required. Bands are on [pricing](/pricing). A gathering has no separate published price.',
      },
    ],
  },
};
