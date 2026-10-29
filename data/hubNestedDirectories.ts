import { SEARCH_VOLUMES } from './offers';
import type { HubDirectory } from './hubDirectories';
import { STAFFING } from './rateCard';
import { DESK_EMAIL, DESK_PHONE_DISPLAY, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';

const serverHr = STAFFING.serverHourly;
const sousHr = STAFFING.sousHourly;
const minHours = STAFFING.minimumHours;
const desk = `${DESK_EMAIL}, +1 ${DESK_PHONE_DISPLAY} (${DESK_TEL}), WhatsApp ${DESK_WHATSAPP}`;

/** Nested hub pickers for island-only occasion, format, fine-dining, staffing, menu, and help URLs. */
export const HUB_NESTED_PATHS = [
  '/events/birthdays',
  '/events/welcome-dinners',
  '/events/retreats',
  '/events/anniversaries',
  '/events/corporate-events',
  '/events/villa-parties',
  '/events/brunch',
  '/catering/bbq',
  '/catering/plated',
  '/catering/family-style',
  '/catering/buffet',
  '/catering/grazing',
  '/catering/drop-off',
  '/fine-dining/romantic-dinner',
  '/fine-dining/tasting-menu',
  '/fine-dining/chefs-table-evening',
  '/fine-dining/celebration-dinner',
  '/staffing/servers',
  '/staffing/bartenders',
  '/staffing/butlers',
  '/menus/three-course',
  '/menus/family-style-menu',
  '/menus/breakfast',
  '/menus/lunch',
  '/help/getting-started',
  '/help/menu-guide',
  '/help/wedding-guide',
  '/help/corporate-guide',
  '/help/managing-booking',
] as const;

export type HubNestedId =
  | 'occBirthdays'
  | 'occWelcome'
  | 'occRetreats'
  | 'occAnniversaries'
  | 'occCorporate'
  | 'occParties'
  | 'occBrunch'
  | 'fmtBbq'
  | 'fmtPlated'
  | 'fmtFamily'
  | 'fmtBuffet'
  | 'fmtGrazing'
  | 'fmtDropoff'
  | 'fineRomantic'
  | 'fineTasting'
  | 'fineChefsev'
  | 'fineCeleb'
  | 'staffServers'
  | 'staffBartenders'
  | 'staffButlers'
  | 'menuThree'
  | 'menuFamily'
  | 'menuBreakfast'
  | 'menuLunch'
  | 'helpStart'
  | 'helpMenu'
  | 'helpWedding'
  | 'helpCorp'
  | 'helpManage';

export const hubNestedDirectories: Record<HubNestedId, HubDirectory> = {
  occBirthdays: {
    path: '/events/birthdays',
    h1: 'Birthday dinner cooked in your Hawaii house',
    title: 'Birthday dinner with a private chef in Hawaii | myCHEF',
    description:
      'Birthday dinner in a Hawaii rental, with the cake plan in the note. Groceries sit inside the per-guest band. Open an island, then pricing.',
    lede:
      'Each island writes the room.',
    kicker: 'Statewide · Birthdays',
    photo: 'hubOccBirthdays',
    cardLabel: 'Birthdays',
    body: [
      'A birthday dinner is the night the house is marking, cooked in the rental kitchen. Say if people sit for courses or gather after the cake. The chef shops, cooks, and clears. The signature band on [pricing](/pricing) includes the groceries. A simpler plate is written before the shop.',
      'Resident’s Island quiet hours in Honolulu, Kahala, Ko Olina, or Kailua belong in the same note as the cake when you request a written quote. A Maui Villa Week in Wailea, Kapalua, or Kāʻanapali can keep the birthday to one evening. Quotes are open. A Garden Isle Retreat asks you to request availability for Princeville or Poʻipū and to say if the cake stays indoors when rain or the Hanalei bridge is in play. An Expedition joins the inquiry list for a Kona–Kohala cake. Hilo is a separate dedicated east-side day.',
      'Open [Oʻahu birthday dinners](oahu:/events/birthdays), [Maui birthday dinners](maui:/events/birthdays), [Kauaʻi birthday dinners](kauai:/events/birthdays), or [Big Island birthday dinners](bigisland:/events/birthdays), then [pricing](/pricing) and [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which island should I open if the cake matters more than the courses?',
        a: 'Open the birthday page on the island that has the kitchen. Name the cake and who speaks in that note. Oʻahu and Maui return a written quote. Kauaʻi returns a request-availability reply. The Big Island uses the inquiry list, west side first.',
      },
      {
        q: 'Are birthday groceries inside the band, or a second receipt?',
        a: 'They are inside the signature per-guest band for that dinner. Do not expect a separate grocery invoice for a signature night. 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows acceptance. Gratuity is never required. See [pricing](/pricing).',
      },
      {
        q: 'Can a Kauaʻi birthday and a Maui birthday share one hub total?',
        a: 'No shared total. Request availability on [Kauaʻi birthday dinners](kauai:/events/birthdays) and request a written quote on [Maui birthday dinners](maui:/events/birthdays). Two islands stay two notes, even if one person watches both replies on [the quote form](/quote).',
      },
      {
        q: 'How do I name a simpler plate without turning the birthday into a kids’ menu?',
        a: 'Say who needs a simpler plate in the birthday note so the shop covers it. The island children’s-plate page is where that plate is planned. This statewide page does not print ages or a separate birthday price.',
      },
      {
        q: 'When should a birthday stay here instead of moving to a villa party?',
        a: 'Stay on the birthday page when the night is the person and the cake. Move to the island villa-party page when the list is the larger house gathering. The two briefs are not one URL.',
      },
      {
        q: 'Who answers a birthday note, and how do I reach the desk?',
        a: `Oʻahu and Maui answer with a written quote. Kauaʻi answers a request for availability. The Big Island answers from the inquiry list. Send one island on [the quote form](/quote). Desk: ${desk}.`,
      },
    ],
  },
  occWelcome: {
    path: '/events/welcome-dinners',
    h1: 'Arrival-night dinner at your Hawaii rental',
    title: 'Arrival dinner with a private chef in Hawaii | myCHEF',
    description:
      'Arrival-night dinner in a Hawaii rental, the first evening after you land. Groceries sit inside the per-guest band. Open an island page, then pricing.',
    lede:
      'First night in the house. Not a full wedding week. Each island writes the arrival dinner.',
    kicker: 'Statewide · Welcome nights',
    photo: 'hubOccWelcome',
    cardLabel: 'Welcome nights',
    body: [
      'An arrival dinner is the first night in the rental after people land, not a full wedding week. The chef uses the kitchen you just collected, plates dinner, and clears the pass. The signature per-guest band on [pricing](/pricing) includes the groceries. Later nights are separate lines.',
      'Resident’s Island arrivals in Honolulu, Kahala, Ko Olina, or Kailua still depend on the building letting the crew in when you request a written quote. A Maui Villa Week often is that landing night in Wailea, Kapalua, or Kāʻanapali, and quotes are open. A Garden Isle Retreat asks you to request availability for Princeville or Poʻipū, with a Hanalei-bridge note if the house sits past it. An Expedition joins the inquiry list on the Kona–Kohala side the day you land. Hilo is a separate dedicated east-side day.',
      'Open [Oʻahu arrival dinners](oahu:/events/welcome-dinners), [Maui arrival dinners](maui:/events/welcome-dinners), [Kauaʻi arrival dinners](kauai:/events/welcome-dinners), or [Big Island arrival dinners](bigisland:/events/welcome-dinners), then [pricing](/pricing) and [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which island page is the first night in the rental?',
        a: 'The welcome page where you land, not this directory. Oʻahu and Maui can write a quote. Kauaʻi asks you to request availability and name the shore. The Big Island asks you to join the inquiry list, west side first.',
      },
      {
        q: 'What does an arrival-night band cover if the flight is late?',
        a: 'The signature band includes groceries for that dinner. Say the landing time so the island can say whether the kitchen window still works. 20% service and Hawaiʻi GET up to 4.712% are separate lines. A 50% deposit follows acceptance. Gratuity is never required. See [pricing](/pricing).',
      },
      {
        q: 'Can the welcome be on Oʻahu and the rest of the week on Maui?',
        a: 'Only as two bookings. The Oʻahu landing is [Oʻahu arrival dinners](oahu:/events/welcome-dinners). The Maui days are a Maui note. [The quote form](/quote) does not merge a crew across the channel.',
      },
      {
        q: 'How is an arrival night different from booking the whole wedding week?',
        a: 'This route is the first evening alone. A week of welcome, rehearsal, reception, and brunch is [wedding week](/weddings). Do not file the week under the arrival URL. Open the island welcome page for a single landing.',
      },
      {
        q: 'What should the arrival note say about the flight and the kitchen?',
        a: 'The landing date, one island and area, how many seats, the house kitchen, and dietary limits. If the house is past the Hanalei bridge, say so on the Kauaʻi note. One island per form.',
      },
      {
        q: 'How do Kauaʻi and Big Island arrival replies differ?',
        a: `Kauaʻi replies when you request availability. The Big Island replies from the inquiry list, Kona–Kohala first, with Hilo as its own day. Neither reply holds a crew until that island says so. Desk: ${desk}.`,
      },
    ],
  },
  occRetreats: {
    path: '/events/retreats',
    h1: 'Retreat meals cooked in a Hawaii house',
    title: 'Retreat meals with a private chef in Hawaii | myCHEF',
    description:
      'Retreat meals in one Hawaii house over several days. Signature nights include groceries. Stay Chef days bill groceries at cost with receipts.',
    lede:
      'Days in the house, food as a constraint.',
    kicker: 'Statewide · Retreat notes',
    photo: 'hubOccRetreats',
    cardLabel: 'Retreat notes',
    body: [
      'A retreat is several days of cooking in one rental, not one supper and not a ballroom. Name which meals repeat. A signature dinner inside the week includes groceries in the per-guest band on [pricing](/pricing). A Stay Chef day is the daily chef fee plus groceries at cost with receipts. Those lines stay apart.',
      'Resident’s Island days in Honolulu, Kahala, Ko Olina, or Kailua follow quiet hours, and you request a written quote for the span. A Maui Villa Week in Wailea, Kapalua, or Kāʻanapali is the usual full-board shape, and quotes are open. A Garden Isle Retreat asks you to request availability for Princeville or Poʻipū, with rain and the Hanalei bridge written per day. An Expedition week joins the inquiry list for Kona–Kohala. Hilo is a separate dedicated east-side day.',
      'Open [Oʻahu retreats](oahu:/events/retreats), [Maui retreats](maui:/events/retreats), [Kauaʻi retreats](kauai:/events/retreats), or [Big Island retreats](bigisland:/events/retreats), then [pricing](/pricing) and [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which island fits several days of meals in one house?',
        a: 'The retreat page where the group actually stays. This directory does not assign chefs to a week. Oʻahu and Maui write the quote. Kauaʻi asks you to request availability. The Big Island asks you to join the inquiry list, west side first.',
      },
      {
        q: 'When is a retreat day Stay Chef, and when is a night a signature dinner?',
        a: 'A signature dinner includes groceries inside the per-guest band. Stay Chef is the daily chef fee plus groceries at cost with receipts. A week can contain both, as separate lines. Do not label the signature night as groceries at cost. See [pricing](/pricing).',
      },
      {
        q: 'Can a retreat hop from Maui to Kauaʻi with the same crew?',
        a: 'It cannot. Request a written quote for the Maui days on [Maui retreats](maui:/events/retreats) and request availability for the Kauaʻi days on [Kauaʻi retreats](kauai:/events/retreats). [The quote form](/quote) takes one island per note.',
      },
      {
        q: 'How is a multi-meal retreat total assembled?',
        a: 'Each meal type is named: which breakfasts, which dinners. Signature dinners keep groceries inside the band. Stay Chef days keep receipts. Then 20% service and Hawaiʻi GET up to 4.712% stand alone. A 50% deposit follows acceptance. Gratuity is never required.',
      },
      {
        q: 'Can a west-side Big Island retreat add Hilo without a second day?',
        a: 'It cannot. Join the inquiry list for Kona–Kohala. Hilo is a separate dedicated east-side day, quoted in writing. Do not attach it to a Waikoloa week and call it the same crew.',
      },
      {
        q: 'What does a retreat note need that a single dinner does not?',
        a: `The span of days, which meals repeat, one island and area, headcount, the kitchen, and dietary limits. Send that on [the quote form](/quote). Desk: ${desk}.`,
      },
    ],
  },
  occAnniversaries: {
    path: '/events/anniversaries',
    h1: 'Anniversary dinner at your Hawaii rental',
    title: 'Anniversary dinner with a private chef in Hawaii | myCHEF',
    description:
      'Anniversary dinner in a Hawaii rental, usually two seats. Groceries sit inside the per-guest band. Open an island page, then pricing, and send one date.',
    lede:
      'A marked night in the dining room. Not a wedding week. Each island writes the table.',
    kicker: 'Statewide · Anniversaries',
    photo: 'hubOccAnniversaries',
    cardLabel: 'Anniversaries',
    body: [
      'An anniversary dinner is one marked night in the rental dining room, usually two seats, not a wedding week. The chef cooks in that kitchen, plates the courses, and clears the pass. The signature per-guest band on [pricing](/pricing) includes the groceries, so the shop is not a second bill.',
      'Oʻahu, Resident’s Island, needs the Honolulu, Kahala, Ko Olina, or Kailua building rule when you request a written quote. Maui, a Villa Week, often puts the year-mark on arrival night in Wailea, Kapalua, or Kāʻanapali, and quotes are open. Kauaʻi, a Garden Isle Retreat, asks you to request availability for Princeville or Poʻipū and to name Hanalei-bridge or rain plans. The Big Island, an Expedition, starts when you join the inquiry list for Kona–Kohala. Hilo is a separate dedicated east-side day.',
      'Open [Oʻahu anniversary dinners](oahu:/events/anniversaries), [Maui anniversary dinners](maui:/events/anniversaries), [Kauaʻi anniversary dinners](kauai:/events/anniversaries), or [Big Island anniversary dinners](bigisland:/events/anniversaries), then [pricing](/pricing) and [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which island fits a two-seat anniversary if the house is not chosen yet?',
        a: 'Match the house you will actually rent. Oʻahu and Maui can send a written quote. Kauaʻi asks you to request availability and name the shore. The Big Island asks you to join the inquiry list, west side first. This page does not hold a table.',
      },
      {
        q: 'What does the anniversary band cover, and what is a separate line?',
        a: 'The signature per-guest band includes grocery procurement for that dinner. It is not a second shop bill. 20% service and Hawaiʻi GET up to 4.712% then stand on their own lines. A 50% deposit follows acceptance. Gratuity is never required. Read [pricing](/pricing).',
      },
      {
        q: 'Can an anniversary on Maui Friday and Oʻahu Saturday share one crew?',
        a: 'They cannot. A crew does not cross islands the same day, and the next day is still a second crew. Send [Maui anniversary dinners](maui:/events/anniversaries) and [Oʻahu anniversary dinners](oahu:/events/anniversaries) as two notes on [the quote form](/quote).',
      },
      {
        q: 'How is an anniversary total built when each island replies differently?',
        a: 'Oʻahu and Maui write a quote for the seats and the kitchen. Kauaʻi replies when you request availability. The Big Island replies from the inquiry list, Kona–Kohala before any east-side day. This hub adds the threads. It does not blend the totals.',
      },
      {
        q: 'When is an anniversary the occasion, not the celebration-dinner format?',
        a: 'Use the island anniversary page when the year-mark is the brief: who sits, and that it is not a wedding. The celebration dinner is a format under fine dining. They can point at each other and still stay separate notes.',
      },
      {
        q: 'What should a one-night anniversary note contain?',
        a: `The date, one island, the area, two seats or a small table, the kitchen, and dietary limits. One note per island on [the quote form](/quote). Desk: ${desk}.`,
      },
    ],
  },
  occCorporate: {
    path: '/events/corporate-events',
    h1: 'Company dinner in a Hawaii rental house',
    title: 'Company dinner with a private chef in Hawaii | myCHEF',
    description:
      'A company dinner in a Hawaii rental, not a convention floor. The person who can approve is named on the note. Open an island, then pricing.',
    lede:
      'A night in a house, not HCC citywides.',
    kicker: 'Statewide · Offsite nights',
    photo: 'hubOccCorporate',
    cardLabel: 'Offsite nights',
    body: [
      'A company dinner is one night for the team in a rental, not a convention floor. Say if people sit or stand. The chef sets the kitchen, sends the food, and clears. The per-guest band on [pricing](/pricing) includes the groceries. Server hours, if needed, are a separate line. Name the person who can approve.',
      'A Resident’s Island offsite in Honolulu, Kahala, Ko Olina, or Kailua still carries the building rule when you request a written quote. A Maui Villa Week offsite in Wailea, Kapalua, or Kāʻanapali is one leadership night, and quotes are open. A Garden Isle Retreat asks you to request availability and name Princeville or Poʻipū. Rain and the Hanalei bridge do not move the meeting. An Expedition joins the inquiry list for Kona–Kohala. Hilo is a separate dedicated east-side day.',
      'Open [Oʻahu company dinners](oahu:/events/corporate-events), [Maui company dinners](maui:/events/corporate-events), [Kauaʻi company dinners](kauai:/events/corporate-events), or [Big Island company dinners](bigisland:/events/corporate-events), then [pricing](/pricing) and [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which island fits a company dinner in a house rather than a convention hall?',
        a: 'The house-offsite page where the team is sleeping or meeting. This hub does not book a convention floor. Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability. The Big Island takes an inquiry, west side first.',
      },
      {
        q: 'Who accepts the company total, and which lines print on it?',
        a: 'Name the person who can approve. That person accepts the written quote. Lines are the food band, groceries inside it, then 20% service and Hawaiʻi GET up to 4.712% alone. A 50% deposit follows acceptance. Gratuity is never required. See [pricing](/pricing).',
      },
      {
        q: 'Can Friday’s Oʻahu offsite and Saturday’s Maui offsite be one signature?',
        a: 'They cannot. Two islands are two approvals. Open [Oʻahu company dinners](oahu:/events/corporate-events) and [Maui company dinners](maui:/events/corporate-events), and send each building on [the quote form](/quote). A coordinator can watch both threads.',
      },
      {
        q: 'How do server hours show up without being folded into the food?',
        a: 'They are their own line when you ask for a floor, apart from the dinner band. The published hour is on [pricing](/pricing) and on the servers page. A bartender has no published hour and is quoted in writing. This page does not restate those figures.',
      },
      {
        q: 'Where do several days of leadership meals go if this page is one night?',
        a: 'On that island’s retreat page. This route is a single company night. Full-board days are a different brief. Do not stretch one dinner URL across a week of breakfasts.',
      },
      {
        q: 'What has to be in the company note before an island prices the night?',
        a: `Dates, one island and area, headcount, the house kitchen, dietary limits, and the person who can approve. One island per note. Desk: ${desk}.`,
      },
    ],
  },
  occParties: {
    path: '/events/villa-parties',
    h1: 'Villa party dinner at a Hawaii rental',
    title: 'Villa party with a private chef in Hawaii | myCHEF',
    description:
      'A villa party cooked in a Hawaii rental for the list you actually have. Groceries sit inside the per-guest band. Open an island page, then pricing.',
    lede:
      'Extra glasses in the house. Each island writes the party.',
    kicker: 'Statewide · Villa parties',
    photo: 'hubOccParties',
    cardLabel: 'Villa parties',
    body: [
      'A villa party is the larger list in the rental, cooked in that house, not a two-seat anniversary. Say if the night is seated or looser. The chef uses the kitchen, serves, and clears. The per-guest band on [pricing](/pricing) includes the groceries. Extra hands are a staffing line apart from the food.',
      'Resident’s Island still needs the Ko Olina, Kahala, Honolulu, or Kailua building rule in the note when you request a written quote. A Maui Villa Week in Wailea, Kapalua, or Kāʻanapali chooses lawn or dining room up front, and quotes are open. A Garden Isle Retreat asks you to request availability for Princeville or Poʻipū. Rain stays under cover on that shore and does not cross the Hanalei bridge. An Expedition joins the inquiry list for a Kona–Kohala terrace. Hilo is a separate dedicated east-side day.',
      'Open [Oʻahu villa parties](oahu:/events/villa-parties), [Maui villa parties](maui:/events/villa-parties), [Kauaʻi villa parties](kauai:/events/villa-parties), or [Big Island villa parties](bigisland:/events/villa-parties), then [pricing](/pricing) and [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which island fits a house party rather than a two-seat dinner?',
        a: 'The villa-party page for the rental you hold. This hub only routes the list. Oʻahu and Maui send a written quote. Kauaʻi sends an availability reply after you request it. The Big Island uses the inquiry list, west side first.',
      },
      {
        q: 'What does the party band include, and where do extra hands go?',
        a: 'The signature band includes groceries for the food. Servers, if you ask, are a separate line on [pricing](/pricing). A bartender is quoted in writing, with no hour printed here. 20% service and Hawaiʻi GET up to 4.712% follow alone. A 50% deposit follows acceptance. Gratuity is never required.',
      },
      {
        q: 'Can one party note cover a Maui Friday and an Oʻahu Saturday?',
        a: 'It cannot. Send [Maui villa parties](maui:/events/villa-parties) and [Oʻahu villa parties](oahu:/events/villa-parties) separately on [the quote form](/quote). There is no same-day crossing, and the next day is still another crew.',
      },
      {
        q: 'How do Oʻahu building rules change a party note compared with a Maui lawn?',
        a: 'Oʻahu needs the tower or house rule in the same request as the list, then a written quote. Maui quotes are open for a Wailea, Kapalua, or Kāʻanapali lawn or dining room, chosen before anyone accepts. This page does not measure either lawn.',
      },
      {
        q: 'Does rain on Kauaʻi move a villa party to the other shore?',
        a: 'It does not. Request availability and name Princeville or Poʻipū. Rain moves the party under cover on that shore. A Hanalei-bridge issue stays with the north-shore house. It is not a transfer to the south.',
      },
      {
        q: 'What do I send for a villa party, and where is the desk?',
        a: `Dates, one island and area, the list, the kitchen, and dietary limits. One island only on [the quote form](/quote). Desk: ${desk}.`,
      },
    ],
  },
  occBrunch: {
    path: '/events/brunch',
    h1: 'Morning brunch in a Hawaii rental kitchen',
    title: 'Brunch with a private chef at a Hawaii rental | myCHEF',
    description:
      'Morning brunch in a Hawaii rental, after the kitchen was used the night before. No separate brunch price is published. Open your island, then pricing.',
    lede:
      'Mid-morning in the villa, not a standing carte.',
    kicker: 'Statewide · Brunch',
    photo: 'hubOccBrunch',
    cardLabel: 'Brunch',
    body: [
      'Brunch is a morning in the rental, often the day after dinner, not a restaurant carte. Eggs are cooked then. Fruit and coffee can be set out. Last night’s service is still its own line. No brunch price is published. Signature dinners on [pricing](/pricing) include groceries. Stay Chef is the daily fee plus groceries at cost with receipts.',
      'Resident’s Island brunch waits on a Honolulu freight window or a Kahala, Ko Olina, or Kailua kitchen when you request a written quote. A Maui Villa Week brunch is the morning after arrival in Wailea, Kapalua, or Kāʻanapali, and quotes are open. A Garden Isle Retreat asks you to request availability and to say if Princeville rain or the Hanalei bridge kept last night indoors. An Expedition brunch joins the inquiry list on the Kona–Kohala side. Hilo is a separate dedicated east-side morning.',
      'Open [Oʻahu brunch](oahu:/events/brunch), [Maui brunch](maui:/events/brunch), [Kauaʻi brunch](kauai:/events/brunch), or [Big Island brunch](bigisland:/events/brunch), then [pricing](/pricing) and [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which island fits a morning-after brunch if the kitchen cooked last night?',
        a: 'The brunch page on the island that has that kitchen. Say the dinner was the night before so the morning is planned as its own line. Oʻahu and Maui write a quote. Kauaʻi asks you to request availability. The Big Island uses the inquiry list.',
      },
      {
        q: 'What is cooked in the morning, and what must be true of the kitchen?',
        a: 'Eggs are cooked then. Fruit and coffee can be set out. The counters have to be usable after whatever happened the night before. We do not publish a brunch carte. Dietary limits belong in the note before the shop.',
      },
      {
        q: 'Can one crew cook Maui dinner and Oʻahu brunch the next morning?',
        a: 'It cannot. The channel is still two crews. Book [Maui brunch](maui:/events/brunch) or the Maui dinner on Maui, and book the Oʻahu morning on [Oʻahu brunch](oahu:/events/brunch). Use [the quote form](/quote) twice.',
      },
      {
        q: 'Where does a wedding-week brunch go if this page is the villa morning?',
        a: 'On [wedding week](/weddings), as its own line. This route is a rental morning that is not that week. Same kind of kitchen, separate notes. Do not fold the wedding morning into this URL.',
      },
      {
        q: 'Is there a published brunch price on this statewide page?',
        a: 'There is not. Do not borrow the dinner band and call it brunch. Signature dinners on [pricing](/pricing) include groceries. A Stay Chef morning is the daily fee plus groceries at cost with receipts. Gratuity is never required.',
      },
      {
        q: 'What belongs in the brunch note before any island prices the morning?',
        a: `The morning’s date, one island and area, headcount, the kitchen, and dietary limits. Say if a dinner used that kitchen the night before. Desk: ${desk}.`,
      },
    ],
  },
  fmtBbq: {
    path: '/catering/bbq',
    h1: 'Lawn BBQ service, by island.',
    title: 'Lawn BBQ service, by island | myCHEF Hawaii',
    description: 'Lawn BBQ service across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'Each island writes the grill.',
    kicker: 'Statewide · BBQ',
    photo: 'hubFmtBbq',
    cardLabel: 'BBQ',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Is this a restaurant BBQ page?',
        a: 'No. We cook in the house. Open the island format.',
      },
    ],
  },
  fmtPlated: {
    path: '/catering/plated',
    h1: 'Plated villa service, by island.',
    title: 'Plated villa service, by island | myCHEF Hawaii',
    description:
      'Plated villa service across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'Identical courses in the house.',
    kicker: 'Statewide · Plated',
    photo: 'hubFmtPlated',
    cardLabel: 'Plated',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  fmtFamily: {
    path: '/catering/family-style',
    h1: 'Family-style service, by island.',
    title: 'Family-style service, by island | myCHEF Hawaii',
    description: 'Family-style service across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'Shared platters, not a standing carte.',
    kicker: 'Statewide · Family-style',
    photo: 'hubFmtFamily',
    cardLabel: 'Family-style',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Same as plated?',
        a: 'Plated is identical courses. Family-style is shared platters.',
      },
    ],
  },
  fmtBuffet: {
    path: '/catering/buffet',
    h1: 'Buffet service, by island.',
    title: 'Buffet service, by island | myCHEF Hawaii',
    description: 'A staffed buffet in the house, not a hotel ballroom. Each island writes the line.',
    lede:
      'A staffed buffet in the house, not a hotel ballroom. Each island writes the line.',
    kicker: 'Statewide · Buffet',
    photo: 'hubFmtBuffet',
    cardLabel: 'Buffet',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Same as drop-off?',
        a: 'Drop-off is not staffed. Buffet is staffed in the house.',
      },
    ],
  },
  fmtGrazing: {
    path: '/catering/grazing',
    h1: 'Grazing boards, by island.',
    title: 'Grazing boards, by island | myCHEF Hawaii',
    description: 'Boards, not a fake standing carte. Each island writes how.',
    lede:
      'Boards, not a fake standing carte. Each island writes how.',
    kicker: 'Statewide · Grazing',
    photo: 'hubFmtGrazing',
    cardLabel: 'Grazing',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Same as a villa party?',
        a: 'Villa parties is the occasion.',
      },
    ],
  },
  fmtDropoff: {
    path: '/catering/drop-off',
    h1: 'Drop-off is not staffed, by island.',
    title: 'Drop-off is not staffed, by island | myCHEF Hawaii',
    description:
      'Each island says drop-off is not staffed service.',
    lede:
      'Food left, crew gone. Not a staffed room. Each island writes that honesty.',
    kicker: 'Statewide · Drop-off',
    photo: 'hubFmtDropoff',
    cardLabel: 'Drop-off',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Is this staffed catering?',
        a: 'No. Drop-off is not staffed. Open the island page.',
      },
    ],
  },
  fineRomantic: {
    path: '/fine-dining/romantic-dinner',
    h1: 'Romantic dinner for two in a Hawaii rental',
    title: 'Romantic dinner for two with a Hawaii chef | myCHEF',
    description:
      'A two-seat romantic dinner in a Hawaii rental. Groceries sit inside the per-guest band. Open an island page, then pricing, and send the house.',
    lede:
      'Two seats as a format, not a Michelin claim.',
    kicker: 'Statewide · Romantic dinner',
    photo: 'hubFineRomantic',
    cardLabel: 'Romantic dinner',
    body: [
      'Two seats are a format: paced plates for a couple in the house. A celebration dinner can be a larger marked table. A tasting menu is more courses. Open [Oʻahu romantic dinners](oahu:/fine-dining/romantic-dinner), [Maui romantic dinners](maui:/fine-dining/romantic-dinner), [Kauaʻi romantic dinners](kauai:/fine-dining/romantic-dinner), or [Big Island romantic dinners](bigisland:/fine-dining/romantic-dinner).',
      'Oʻahu and Maui accept a written quote. Kauaʻi wants a request for availability, with the shore named. The Big Island wants an inquiry, and the west side comes first. Fee items sit on [pricing](/pricing). Send the house and the date on [the quote form](/quote). We do not claim a star.',
      'Two seats still change with the island. Resident’s Island couples wait on a Honolulu freight slot or a Kahala, Ko Olina, or Kailua room, and you request a written quote. A Maui Villa Week sets the pair on a Wailea, Kapalua, or Kāʻanapali lānai the night they arrive, and quotes are open. A Garden Isle Retreat asks you to request availability and choose Princeville mist or Poʻipū sun, with rain and the Hanalei bridge named first. An Expedition joins the inquiry list for two plates on a Kona–Kohala terrace. Hilo is a separate dedicated east-side day, not a second seating after dark.',
    ],
    faqs: [
      {
        q: 'Which island page is the two-seat dinner?',
        a: 'The romantic-dinner page on the island that has the villa. Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability. The Big Island takes an inquiry, west side first. This statewide page does not seat anyone.',
      },
      {
        q: 'How is a romantic dinner different from a celebration dinner?',
        a: 'Romantic dinner is paced plates for two. A celebration dinner is the format for a marked night and can be a fuller table. If the night is a birthday occasion, use the occasion page on that island. Use this format when the booking is the couple.',
      },
      {
        q: 'Does Kauaʻi confirm two seats because the format is listed?',
        a: 'A listing is not a crew. Request availability and name the shore. Princeville and Poʻipū are different asks. A reply is not a hold. The band on the pricing page is the shape of the dinner when a crew exists.',
      },
      {
        q: 'What do I send for two seats, and where are the fees?',
        a: 'The island, the house, the date, and dietary limits on the quote form. The signature band keeps groceries inside it. 20% service and Hawaiʻi GET up to 4.712% stand alone on the pricing page. A 50% deposit follows acceptance. Gratuity is never required.',
      },
      {
        q: 'Can two seats on Maui one night and Oʻahu the next share a crew?',
        a: 'They cannot. Request a written quote on [Maui romantic dinners](maui:/fine-dining/romantic-dinner) and another on [Oʻahu romantic dinners](oahu:/fine-dining/romantic-dinner). [The quote form](/quote) keeps the notes apart. One cook does not cross the channel for a second sunset.',
      },
      {
        q: 'Do groceries for two seats sit inside the band?',
        a: 'Grocery procurement for a signature dinner sits inside the per-guest band. It is not a second shop bill. 20% service and Hawaiʻi GET up to 4.712% are their own lines on [pricing](/pricing). A 50% deposit follows acceptance. Gratuity is never required.',
      },
    ],
  },
  fineTasting: {
    path: '/fine-dining/tasting-menu',
    h1: 'Tasting menu cooked in a Hawaii rental',
    title: 'Tasting menu with a private chef in Hawaii | myCHEF',
    description:
      'A tasting menu in a Hawaii rental: a longer arc than three courses. No statewide course count is printed here. Open an island, then pricing.',
    lede:
      'A longer arc in the villa. Not a restaurant omakase brand, and not a three-course.',
    kicker: 'Statewide · Tasting menu',
    photo: 'hubFineTasting',
    cardLabel: 'Tasting menu',
    body: [
      'A tasting menu is the longer arc. A three-course is fewer plates. Omakase at home is a different product, with sourcing gates, on its own statewide page. Open [Oʻahu tastings](oahu:/fine-dining/tasting-menu), [Maui tastings](maui:/fine-dining/tasting-menu), [Kauaʻi tastings](kauai:/fine-dining/tasting-menu), or [Big Island tastings](bigisland:/fine-dining/tasting-menu).',
      'A written quote is open on Oʻahu and on Maui. Kauaʻi is a request for availability. Hawaiʻi Island is an inquiry that starts in Kona–Kohala. The band and the fee items are on [pricing](/pricing). Name the arc on [the quote form](/quote).',
      'The arc is longer than a first, a main, and a close, and this page does not print a statewide course count. Resident’s Island writes that sequence after you request a written quote for a Honolulu, Kahala, Ko Olina, or Kailua kitchen. A Maui Villa Week writes it for Wailea, Kapalua, or Kāʻanapali, and quotes are open. A Garden Isle Retreat asks you to request availability and name Princeville or Poʻipū before any pass is promised. Rain stays on that shore. An Expedition joins the inquiry list for a Kona–Kohala arc. Hilo is a separate dedicated east-side day, not extra courses on a west-side night.',
    ],
    faqs: [
      {
        q: 'Which island page holds the tasting arc?',
        a: 'The tasting-menu page for the island with the house. This page only points there. Oʻahu and Maui write a quote. Kauaʻi takes a request for availability. The Big Island takes an inquiry that starts on the west side.',
      },
      {
        q: 'How is a tasting menu different from a three-course?',
        a: 'A tasting is more passes through the kitchen. A three-course is a first, a main, and a close, on the menus side of the site. Pick one. We will not stretch a three-course into a tasting after the shop without writing it again.',
      },
      {
        q: 'Is omakase at home the same product as this arc?',
        a: 'It is not. Omakase at home has its own sourcing gates and its own statewide page. This arc is a written tasting in the villa. We do not borrow a restaurant’s name for it, and we do not claim a star.',
      },
      {
        q: 'How do booking rules change a tasting request?',
        a: 'Oʻahu and Maui can take a written quote now. Kauaʻi needs a request for availability. The Big Island needs an inquiry, Kona–Kohala first. Hilo is a separate dedicated east-side day, quoted in writing. Fees are on the pricing page.',
      },
      {
        q: 'Is a course count published on this statewide tasting page?',
        a: 'It is not. The wording stays what the repo already uses: a tasting is more passes than a three-course, and a three-course is a first, a main, and a close. This hub does not add a number the island page did not already print.',
      },
      {
        q: 'Can one tasting arc be cooked on two islands in one trip?',
        a: 'Only as two requests. A Friday arc on Oʻahu and a Saturday arc on Maui are different kitchens. Send each on [the quote form](/quote). This hub can order the dates. It cannot put one cook on both islands.',
      },
    ],
  },
  fineChefsev: {
    path: '/fine-dining/chefs-table-evening',
    h1: 'Chef’s-table evening at a Hawaii counter',
    title: 'Chef’s-table evening in a Hawaii rental | myCHEF',
    description:
      'A chef’s-table evening at your Hawaii rental counter. Not a star claim. Groceries sit inside the per-guest band. Open an island, then pricing.',
    lede: 'An evening at the kitchen counter, routed by island. Not a star claim.',
    kicker: 'Statewide · Chef’s-table evening',
    photo: 'hubFineChefsev',
    cardLabel: 'Evening format',
    body: [
      'An evening at the kitchen counter is this format. The chef’s table page is the broader door. Guests watch the pass, and the courses are still written for that kitchen. Open [Oʻahu counter evenings](oahu:/fine-dining/chefs-table-evening), [Maui counter evenings](maui:/fine-dining/chefs-table-evening), [Kauaʻi counter evenings](kauai:/fine-dining/chefs-table-evening), or [Big Island counter evenings](bigisland:/fine-dining/chefs-table-evening).',
      'Quote the evening in writing on Oʻahu or Maui. Ask Kauaʻi for availability. Ask the Big Island to join the inquiry list, west side first. Hilo is not inside that ask. [Pricing](/pricing) holds the band and the fee items. Send the counter and the date on [the quote form](/quote).',
      'The evening is the counter, not a star and not every stool in the state. On Resident’s Island you request a written quote and say whether the Honolulu, Kahala, Ko Olina, or Kailua island faces the cook. A Maui Villa Week puts guests at a Wailea, Kapalua, or Kāʻanapali pass, and quotes are open. A Garden Isle Retreat asks you to request availability for a Princeville or Poʻipū counter and to name rain or the Hanalei bridge. An Expedition joins the inquiry list for a west-side counter in Kona–Kohala. A Hilo counter is a separate dedicated east-side day.',
    ],
    faqs: [
      {
        q: 'Which island page is the evening at the counter?',
        a: 'The chef’s-table evening page on that island. Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability. The Big Island joins the inquiry list, west side first. This page does not staff the pass.',
      },
      {
        q: 'How is a counter evening different from the chef’s table page?',
        a: 'The chef’s table page is the broad door. This format is one evening, guests at the counter, watching the cook. Seats depend on the kitchen you have. We do not print a statewide stool count. The island page says what that house can hold.',
      },
      {
        q: 'Does a Big Island counter evening include Hilo?',
        a: 'It does not. Join the inquiry list for Kona, Waikoloa, or the Kohala Coast. Hilo is a separate dedicated east-side day, quoted in writing. Do not add it after a west-side seating. Send it alone if that is the house.',
      },
      {
        q: 'What should the note say, and where do fees sit?',
        a: 'Say the island, the kitchen, the date, and how many people are actually at the counter. The band and 20% service, GET up to 4.712%, and the 50% deposit are on the pricing page. Gratuity is never required. We do not claim a star.',
      },
      {
        q: 'Can one counter evening be split across two islands?',
        a: 'It cannot. Book [Oʻahu counter evenings](oahu:/fine-dining/chefs-table-evening) and [Maui counter evenings](maui:/fine-dining/chefs-table-evening) as separate notes. How many people fit is whatever that kitchen faces, confirmed on the island page, not as a statewide stool count.',
      },
      {
        q: 'Where do I read the band without treating this page as a star listing?',
        a: 'On [pricing](/pricing). The signature band includes groceries. 20% service and Hawaiʻi GET up to 4.712% stand alone. A 50% deposit follows acceptance. Gratuity is never required. We do not claim a star.',
      },
    ],
  },
  fineCeleb: {
    path: '/fine-dining/celebration-dinner',
    h1: 'Celebration dinner in a Hawaii rental',
    title: 'Celebration dinner with a private chef in Hawaii | myCHEF',
    description:
      'A celebration dinner in a Hawaii rental dining room, as a format. Birthdays stay on occasion pages. Open an island, then pricing, for the band.',
    lede:
      'The format for a marked night in the house. Birthdays and anniversaries stay on the occasion pages.',
    kicker: 'Statewide · Celebration dinner',
    photo: 'hubFineCeleb',
    cardLabel: 'Celebration dinner',
    body: [
      'A celebration dinner is the format for a marked night in the dining room. Birthdays and anniversaries, as occasions, stay on the occasion pages. This page does not retell them. Open [Oʻahu celebrations](oahu:/fine-dining/celebration-dinner), [Maui celebrations](maui:/fine-dining/celebration-dinner), [Kauaʻi celebrations](kauai:/fine-dining/celebration-dinner), or [Big Island celebrations](bigisland:/fine-dining/celebration-dinner).',
      'Oʻahu and Maui are written-quote islands. Kauaʻi is a request for availability until a crew is real. The Big Island inquiry starts on the west side. We do not claim a star. Bands and fee items are on [pricing](/pricing). Name the mark on [the quote form](/quote).',
      'This format is the marked night’s structure. The birthday or anniversary occasion stays on its own page. Resident’s Island requests a written quote for a Honolulu, Kahala, Ko Olina, or Kailua dining room, building rule included. A Maui Villa Week uses the arrival night in Wailea, Kapalua, or Kāʻanapali when that is the toast, and quotes are open. A Garden Isle Retreat asks you to request availability and name Princeville or Poʻipū. The Hanalei bridge does not slide the toast to the other shore. An Expedition joins the inquiry list for Kona–Kohala. Hilo is a separate dedicated east-side day.',
    ],
    faqs: [
      {
        q: 'Which island page is a celebration dinner?',
        a: 'The celebration-dinner page where the house sits. Use it for the format. Use the island’s birthday or anniversary page if you want the occasion itself. Oʻahu and Maui write quotes. Kauaʻi takes a request for availability. The Big Island takes an inquiry, west side first.',
      },
      {
        q: 'When should a birthday use the occasion page instead?',
        a: 'When the night is the birthday itself — cake timing, who speaks, the shape of the party. Use this format when you only need the dinner structure. The two can point at each other. They are not the same brief.',
      },
      {
        q: 'How do Oʻahu and Kauaʻi differ when I ask for a marked night?',
        a: 'Oʻahu takes a written quote. Kauaʻi takes a request for availability, and the shore has to be named. A published format is not a held table on Kauaʻi. Maui follows the Oʻahu posture. The Big Island follows an inquiry, west side first.',
      },
      {
        q: 'What do I send if the night is a toast rather than a wedding?',
        a: 'The island, the house, the date, and that this is a celebration dinner, not a reception. Weddings have their own pages. Fees and the per-guest band are on the pricing page. Gratuity is never required. Send it on the quote form.',
      },
      {
        q: 'What does the celebration band include when the night is a toast?',
        a: 'Grocery procurement sits inside the signature per-guest band. Weddings stay on their own pages. The 20% service charge, Hawaiʻi GET up to 4.712%, and the 50% deposit are on [pricing](/pricing). Gratuity is never required.',
      },
      {
        q: 'Can a celebration on two islands share one hub total?',
        a: 'It cannot. A Kahala toast and a Wailea toast are two formats on two hosts. Open each island’s celebration page and send two notes on [the quote form](/quote). Someone may watch both threads. The totals stay apart.',
      },
    ],
  },
  staffServers: {
    path: '/staffing/servers',
    h1: 'Server add-ons, by island.',
    title: 'Server add-ons, by island | myCHEF Hawaii',
    description: `Server add-ons by island at $${serverHr}/hr on the written quote, plus 20% service and GET. The full guide is the statewide waiters page, then your island.`,
    lede: `Servers are an hourly line on the written quote: $${serverHr}/hr, minimum ${minHours} hours, with 20% service and Hawaiʻi GET up to 4.712% on their own lines. A sous chef is a separate $${sousHr}/hr line. The full guide for a villa dinner, a week, or a party is [waiters](/in-villa-services/waiters). Use this page only to pick the island. Oʻahu and Maui quotes are open. Kauaʻi and the Big Island are request availability.`,
    kicker: 'Statewide · Servers',
    photo: 'hubStaffServers',
    cardLabel: 'Servers',
    body: [
      `Open [Oʻahu servers](oahu:/staffing/servers), [Maui servers](maui:/staffing/servers), [Kauaʻi servers](kauai:/staffing/servers), or [Big Island servers](bigisland:/staffing/servers) after the statewide guide. The hour is the same figure. The booking posture is not. A 50% deposit follows a written yes. Gratuity is never required. Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'Which page do I open for a Honolulu or Kahala server?',
        a: `[Oʻahu servers](oahu:/staffing/servers). The line is $${serverHr}/hr with a ${minHours}-hour minimum, plus 20% service and GET up to 4.712%. Quotes are open. The how-to is [waiters](/in-villa-services/waiters), not this chooser.`,
      },
      {
        q: 'Where do Maui lanai server hours get written?',
        a: `On [Maui servers](maui:/staffing/servers), as $${serverHr}/hr, separate from the food and from the $${sousHr}/hr sous chef. 20% service and GET up to 4.712% follow. Wailea and West Maui quotes are open.`,
      },
      {
        q: 'How do I request a Kauaʻi server while the shore is still an inquiry?',
        a: `Join the inquiry list on [Kauaʻi servers](kauai:/staffing/servers). Request availability and name the shore. $${serverHr}/hr plus 20% service and GET up to 4.712% is the line when a crew exists. It is not a confirmation.`,
      },
      {
        q: 'Does the Big Island server line cover Hilo?',
        a: `No. [Big Island servers](bigisland:/staffing/servers) are Kona to Kohala, by request for availability, at $${serverHr}/hr plus 20% service and GET up to 4.712%. Hilo is a different day. Do not add it to a west-side server ask.`,
      },
    ],
  },
  staffBartenders: {
    path: '/staffing/bartenders',
    h1: 'Bartender hourly lines, by island.',
    title: 'Bartender hourly lines, by island | myCHEF Hawaii',
    description:
      'Bartender add-ons by island are quoted in writing. No hourly rate is published. The full guide is the statewide bartenders page, then your island.',
    lede: `Bartenders are quoted in writing. No hourly bartender rate is published on the card or on this page. The full guide — a villa bar, glassware, and how a night is scoped — is [bartenders](/in-villa-services/bartenders). This page only routes you to an island. Oʻahu and Maui take a written quote. Kauaʻi and the Big Island are request availability, not a confirmed pour.`,
    kicker: 'Statewide · Bartenders',
    photo: 'hubStaffBartenders',
    cardLabel: 'Bartenders',
    body: [
      `Open [Oʻahu bartenders](oahu:/staffing/bartenders), [Maui bartenders](maui:/staffing/bartenders), [Kauaʻi bartenders](kauai:/staffing/bartenders), or [Big Island bartenders](bigisland:/staffing/bartenders). A 50% deposit applies only after you accept the written total. 20% service and Hawaiʻi GET up to 4.712% are their own lines on that total. Gratuity is never required. Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'Which island do I open if the bar is in Wailea or West Maui?',
        a: `[Maui bartenders](maui:/staffing/bartenders). The line is quoted in writing. No hourly rate is published. Quotes are open. Scope and setup live on [bartenders](/in-villa-services/bartenders), not on this chooser.`,
      },
      {
        q: 'Why is there no bartender hour on the Oʻahu card?',
        a: `Because none is published. [Oʻahu bartenders](oahu:/staffing/bartenders) are a written quote. The only published staffing hours are the server at $${serverHr}/hr and the sous chef at $${sousHr}/hr, plus 20% service and GET up to 4.712%.`,
      },
      {
        q: 'How do I request a Kauaʻi bartender without treating inquiry as a confirmation?',
        a: `Request availability on [Kauaʻi bartenders](kauai:/staffing/bartenders) and name the shore. A reply is not a held pour. Hanalei-bridge weather can move a North Shore night. The amount is quoted in writing.`,
      },
      {
        q: 'Does a Big Island bartender request include Hilo?',
        a: `No. [Big Island bartenders](bigisland:/staffing/bartenders) are Kona to Kohala, quoted in writing, and only by request for availability. Hilo is not implied. Send it as its own east-side day if that is the house.`,
      },
    ],
  },
  staffButlers: {
    path: '/staffing/butlers',
    h1: 'Quoted butler lines, by island.',
    title: 'Butler service by island | myCHEF Hawaii',
    description:
      'Butlers are a written line on the island with the house. Open that butler page. Oʻahu and Maui quote. Kauaʻi and the Big Island confirm in writing.',
    lede:
      'Quoted in writing, and only when that island can staff the night. This page routes you. It does not send a crew.',
    kicker: 'Statewide · Butlers',
    photo: 'hubStaffButlers',
    cardLabel: 'Butlers',
    body: [
      'A butler is a written line on the island that can staff the night. This page does not dispatch anyone. [Oʻahu butlers](oahu:/staffing/butlers) cover Honolulu, Kahala, and Ko Olina. Request a written quote. [Maui butlers](maui:/staffing/butlers) cover Wailea and West Maui villa weeks. Quotes are open.',
      '[Kauaʻi butlers](kauai:/staffing/butlers) cover both shores. Request availability. [Big Island butlers](bigisland:/staffing/butlers) are Kona–Kohala first. Join the inquiry list. Hilo is a separate dedicated day, not a butler added to a west-side night. If you need a server instead, open [Oʻahu servers](oahu:/staffing/servers), [Maui servers](maui:/staffing/servers), [Kauaʻi servers](kauai:/staffing/servers), or [Big Island servers](bigisland:/staffing/servers).',
    ],
    faqs: [
      {
        q: 'Do you book a butler from this hub page?',
        a: 'You do not. Open the island that has the house. A butler is a written line there, and only when that island can staff the night. This page only routes you.',
      },
      {
        q: 'Which page is a Honolulu, Kahala, or Ko Olina butler?',
        a: '[Oʻahu butlers](oahu:/staffing/butlers). Request a written quote and name the house. Quotes are open. A Wailea butler is [Maui butlers](maui:/staffing/butlers), not this Oʻahu line.',
      },
      {
        q: 'How do I request a Kauaʻi butler without treating it as confirmed?',
        a: 'Request availability on [Kauaʻi butlers](kauai:/staffing/butlers) and name the shore. A reply is not a held night. Hanalei-bridge weather can move a far-north date. The amount is written on the quote.',
      },
      {
        q: 'Does a Big Island butler request include Hilo?',
        a: 'It does not. [Big Island butlers](bigisland:/staffing/butlers) are Kona–Kohala first. Join the inquiry list. Hilo is a separate dedicated day. Do not add a butler to a west-side night and call it Hilo.',
      },
    ],
  },
  menuThree: {
    path: '/menus/three-course',
    h1: 'Three-course dinner at a Hawaii rental table',
    title: 'Three-course dinner with a Hawaii private chef | myCHEF',
    description:
      'A three-course dinner in a Hawaii rental: a first, a main, and a close. Groceries sit inside the per-guest band. Open an island page, then pricing.',
    lede:
      'Designed per table, not a fake standing carte.',
    kicker: 'Statewide · Three-course',
    photo: 'hubMenuThree',
    cardLabel: 'Three-course',
    body: [
      'A three-course is the designed dinner: a first, a main, and a close. Plated service is the catering format, not this menu. The sample on an island menus page is an example of length. Open [Oʻahu three-course menus](oahu:/menus/three-course), [Maui three-course menus](maui:/menus/three-course), [Kauaʻi three-course menus](kauai:/menus/three-course), or [Big Island three-course menus](bigisland:/menus/three-course).',
      'Send Oʻahu or Maui for a written quote. Send Kauaʻi as a request for availability. Send the Big Island as an inquiry, west side before any east-side day. The signature band, groceries inside it, is on [pricing](/pricing). Tell us the house on [the quote form](/quote).',
      'Three courses means a first, a main, and a close, designed for the kitchen in front of you. It is not a tasting arc and not plated catering. Resident’s Island asks you to request a written quote for Honolulu, Kahala, Ko Olina, or Kailua burners. A Maui Villa Week designs the trio for Wailea, Kapalua, or Kāʻanapali, and quotes are open. A Garden Isle Retreat asks you to request availability and say whether Princeville rain or the Hanalei bridge moves the close indoors. Poʻipū is a different shore. An Expedition joins the inquiry list for Kona–Kohala. Hilo is a separate dedicated east-side day.',
    ],
    faqs: [
      {
        q: 'Which island page designs the three-course?',
        a: 'The three-course page on the island with the kitchen. Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability. The Big Island takes an inquiry, west side first. Hilo is a separate dedicated east-side day, quoted in writing.',
      },
      {
        q: 'How is that menu different from plated catering?',
        a: 'This menu is what the kitchen cooks: three courses, designed for the table. Plated catering is the service format, with staffing written apart from the food. Open plated service if you need the floor. Stay here if you need the menu.',
      },
      {
        q: 'Is the sample on the menus page the dinner I get?',
        a: 'It shows length, not your plates. Every table is still designed after we know the kitchen. A tasting menu is a longer arc and lives under fine dining. Do not treat the sample as a carte you can tick.',
      },
      {
        q: 'Where do I see the band, and what do I send?',
        a: 'The signature per-guest band is on the pricing page, groceries inside it. 20% service and Hawaiʻi GET up to 4.712% stand alone. A 50% deposit follows acceptance. Gratuity is never required. Send the house, the date, and who eats on the quote form.',
      },
      {
        q: 'Can I book a three-course on two islands from this hub?',
        a: 'Only as two menus. Three courses are a first, a main, and a close in one kitchen. Oʻahu and Maui each take a written quote. Kauaʻi is a request for availability. The Big Island is an inquiry that starts on the west side. Hilo is its own day.',
      },
      {
        q: 'What does the three-course band include?',
        a: 'The signature per-guest band includes groceries for that dinner. Plated catering, if you also need people on the floor, is a separate format. 20% service and Hawaiʻi GET up to 4.712% stand alone on [pricing](/pricing). A 50% deposit follows acceptance. Gratuity is never required.',
      },
    ],
  },
  menuFamily: {
    path: '/menus/family-style-menu',
    h1: 'Family-style platters for a Hawaii rental',
    title: 'Family-style dinner with a Hawaii private chef | myCHEF',
    description:
      'Family-style platters for a Hawaii rental table. The shared menu is not the staffed floor. Groceries sit inside the band. Open an island, then pricing.',
    lede:
      'The designed menu, not the service format.',
    kicker: 'Statewide · Family-style menu',
    photo: 'hubMenuFamily',
    cardLabel: 'Family-style menu',
    body: [
      'This menu is the platters on the table. Family-style service is the staffed format, with floor hours apart from the food. Children get plates written beside the adults. Open [Oʻahu platter menus](oahu:/menus/family-style-menu), [Maui platter menus](maui:/menus/family-style-menu), [Kauaʻi platter menus](kauai:/menus/family-style-menu), or [Big Island platter menus](bigisland:/menus/family-style-menu).',
      'Oʻahu and Maui will write the quote. Kauaʻi will take a request for availability. The Big Island will take an inquiry that begins on the Kona–Kohala side. No separate platter price is published. See [pricing](/pricing). Say sharing, not a buffet, on [the quote form](/quote).',
      'Platters down the middle are the menu. People on the floor are a different booking. Resident’s Island writes the bowls for a Honolulu, Kahala, Ko Olina, or Kailua table when you request a written quote, and a simpler plate is named before the shop. A Maui Villa Week shares that table in Wailea, Kapalua, or Kāʻanapali, often on arrival night, and quotes are open. A Garden Isle Retreat asks you to request availability for Princeville or Poʻipū and to keep rain and the Hanalei bridge on that shore. An Expedition joins the inquiry list for Kona–Kohala bowls. Hilo is a separate dedicated east-side day.',
    ],
    faqs: [
      {
        q: 'Which island page is the platter menu?',
        a: 'The family-style menu page for that island. It designs the bowls. It does not staff the floor. Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability. The Big Island takes an inquiry, west side first.',
      },
      {
        q: 'How is the platter menu different from family-style service?',
        a: 'Service is the catering format: people on the floor, hours apart from the food. This page is only what goes down the table. Ask for both if you need them, and keep the hours on the staffing page. Do not expect one price to cover both.',
      },
      {
        q: 'Where do children fit when the table is shared?',
        a: 'On plates written before the shop, beside the adults, not after the bowls are gone. The island kids’ menus page is where that plate is planned. Tell the island page the ages only so portions make sense.',
      },
      {
        q: 'How does the ask change from Maui to the Big Island?',
        a: 'Maui takes a written quote for South or West. The Big Island takes an inquiry that starts in Kona–Kohala. Hilo is a separate dedicated east-side day, quoted in writing. Kauaʻi, if that is the house, takes a request for availability instead.',
      },
      {
        q: 'What does a shared-platter band include?',
        a: 'Groceries for the signature dinner sit inside the per-guest band. Servers, if you need a floor, are not inside that band. Read [pricing](/pricing). 20% service and Hawaiʻi GET up to 4.712% are their own lines. A 50% deposit follows acceptance. Gratuity is never required.',
      },
      {
        q: 'Can platters on Maui and platters on Oʻahu be one quote?',
        a: 'They cannot. A Villa Week share in Wailea is a Maui quote. A Resident’s Island share in Kahala is an Oʻahu quote. Send both through [the quote form](/quote). Bowls do not travel between islands.',
      },
    ],
  },
  menuBreakfast: {
    path: '/menus/breakfast',
    h1: 'Breakfast cooked in a Hawaii rental kitchen',
    title: 'Breakfast with a private chef in a Hawaii house | myCHEF',
    description:
      'Breakfast cooked in a Hawaii rental kitchen, designed for that morning. No breakfast price is published. Open the island page, then pricing.',
    lede:
      'Morning in the villa, designed per table. Brunch as an occasion is on the Brunch page.',
    kicker: 'Statewide · Breakfast',
    photo: 'hubMenuBreakfast',
    cardLabel: 'Breakfast',
    body: [
      'House breakfast is the morning meal. Brunch is the occasion. Stay Chef is the day rate, and a morning inside that day is not its own card. No breakfast price is published. Open [Oʻahu breakfast](oahu:/menus/breakfast), [Maui breakfast](maui:/menus/breakfast), [Kauaʻi breakfast](kauai:/menus/breakfast), or [Big Island breakfast](bigisland:/menus/breakfast).',
      'A written quote is the Oʻahu and Maui path. A request for availability is the Kauaʻi path. An inquiry, west side first, is the Big Island path. Day rates and fee items are on [pricing](/pricing). Send the hour and the house on [the quote form](/quote).',
      'House breakfast is the morning meal in the rental, not the brunch occasion and not a published breakfast price. Resident’s Island writes it for Honolulu, Kahala, Ko Olina, or Kailua after you request a written quote, once the building allows the crew in. A Maui Villa Week can include the morning inside Wailea, Kapalua, or Kāʻanapali days, and quotes are open. A Garden Isle Retreat asks you to request availability and say if Princeville mist or the Hanalei bridge changes the hour. Poʻipū is named separately. An Expedition joins the inquiry list for a Kona–Kohala morning. Hilo is a separate dedicated east-side day.',
    ],
    faqs: [
      {
        q: 'Which island page is house breakfast?',
        a: 'The breakfast page on the island where you wake up. Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability. The Big Island takes an inquiry, west side first. This page does not cook the eggs.',
      },
      {
        q: 'How is breakfast different from brunch and from Stay Chef?',
        a: 'Breakfast is the morning in the house. Brunch is the occasion, with its own page. Stay Chef is the day rate on the vacation chef page. A morning inside a Stay Chef day has no separate card. Groceries on that day are at cost with receipts.',
      },
      {
        q: 'Is there a published breakfast price?',
        a: 'There is not. A morning is quoted in writing. Dinner’s signature band is a different meal, groceries inside it, on the pricing page. Do not invent a breakfast band from the dinner figures. Gratuity is never required.',
      },
      {
        q: 'What do I send for a morning, island by island?',
        a: 'The house, the date, the hour, and who eats. Oʻahu and Maui want that as a written quote. Kauaʻi wants it as a request for availability, shore named. The Big Island wants it as an inquiry, and Hilo is not folded into a Kona morning.',
      },
      {
        q: 'Can breakfast on two islands be one written total?',
        a: 'It cannot. A Kailua morning and a Wailea morning are two kitchens. Request a written quote on each island’s breakfast page. Kauaʻi still needs a request for availability. The Big Island still starts when you join the inquiry list on the west side.',
      },
      {
        q: 'How does a Hilo breakfast differ from a Kona breakfast here?',
        a: 'Hilo is a separate dedicated east-side day. Join the inquiry list for Kona–Kohala only. Do not attach an east-side morning to a west-side note and expect one crew to cover both.',
      },
    ],
  },
  menuLunch: {
    path: '/menus/lunch',
    h1: 'Midday lunch cooked in a Hawaii rental',
    title: 'Lunch with a private chef in a Hawaii rental | myCHEF',
    description:
      'Lunch cooked at midday in a Hawaii rental, then the stove is cleared. No lunch price is published. Open the island page, then pricing, and send the hour.',
    lede:
      'Midday in the house, designed per table. Meal prep is a fridge program, and it is not sold yet.',
    kicker: 'Statewide · Lunch',
    photo: 'hubMenuLunch',
    cardLabel: 'Lunch',
    body: [
      'House lunch is cooked at midday and cleared. Meal prep is a fridge program that is not sold yet, not this menu. The cook is shorter than dinner and still written out. Open [Oʻahu lunch](oahu:/menus/lunch), [Maui lunch](maui:/menus/lunch), [Kauaʻi lunch](kauai:/menus/lunch), or [Big Island lunch](bigisland:/menus/lunch).',
      'Oʻahu and Maui quotes are open. Kauaʻi availability is a request, not a hold. The Big Island inquiry covers the west side first. No lunch band is published. See [pricing](/pricing) for the dinner band and the day rate. Send the hour on [the quote form](/quote).',
      'Midday lunch is a cook at the burner, then a clear stove. It is not the fridge program, which is not sold yet. Resident’s Island asks you to request a written quote for a Honolulu, Kahala, Ko Olina, or Kailua midday, building rule included. A Maui Villa Week quotes an open lunch in Wailea, Kapalua, or Kāʻanapali. A Garden Isle Retreat asks you to request availability and name Princeville or Poʻipū, including rain or the Hanalei bridge. An Expedition joins the inquiry list for Kona–Kohala. Volcano and Hilo are a separate dedicated east-side day, not a same-day add from Waikoloa.',
    ],
    faqs: [
      {
        q: 'Which island page is house lunch?',
        a: 'The lunch page for the island with the stove. Oʻahu and Maui take a written quote. Kauaʻi takes a request for availability. The Big Island takes an inquiry, west side first. A park or a hotel room without burners is declined on the island page, not here.',
      },
      {
        q: 'How is lunch different from meal prep?',
        a: 'Lunch is a cook in the house at midday, then a clean stove. Meal prep is the fridge program that is not sold yet. If you wanted bags left behind, open that page. If you wanted someone at the burner, open the island lunch page.',
      },
      {
        q: 'Why is a shorter midday service still a written total?',
        a: 'Because no lunch price is published. A shorter cook is not an automatic discount off dinner. The signature band, groceries inside it, stays on the pricing page for dinner. A Stay Chef midday sits in the day rate. Gratuity is never required.',
      },
      {
        q: 'What do I send, and which islands quote rather than request?',
        a: 'Send the house, the date, and the hour you want to eat. Oʻahu and Maui turn that into a written quote. Kauaʻi turns it into a request for availability. The Big Island turns it into an inquiry, and Volcano is not a same-day add-on from Waikoloa.',
      },
      {
        q: 'Can a Kauaʻi lunch and an Oʻahu dinner on the same day share a crew?',
        a: 'They cannot. Request availability for the Kauaʻi midday and request a written quote for the Oʻahu dinner. A shorter lunch does not make a same-day crossing. Send two notes on [the quote form](/quote).',
      },
      {
        q: 'Is house lunch the fridge program under another name?',
        a: 'It is not. Lunch is someone at the burner at midday, then a clean stove. The fridge program is not sold yet. Bags left behind are a different page, and they are not this midday cook.',
      },
    ],
  },
  helpStart: {
    path: '/help/getting-started',
    h1: 'First booking notes, by island.',
    title: 'First booking notes, by island | myCHEF Hawaii',
    description:
      'What to send in a first note, by island: dates, address, guests, dietary limits, and the occasion. Then open that island’s guide.',
    lede:
      'The first note is dates, the house, who is eating, dietary limits, and the occasion. Open the island guide. This page only routes.',
    kicker: 'Statewide · Getting started',
    photo: 'hubHelpStart',
    cardLabel: 'Getting started',
    body: [
      'Each island guide says what happens after that note. Oʻahu and Maui turn it into a written quote. Kauaʻi turns it into a request for availability. Hawaiʻi Island turns it into the inquiry list, west side first.',
      'Do not brief two islands in one note. Hilo is a separate dedicated east-side day, quoted in writing. Prices stay on [pricing](/pricing). The form is [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which getting-started guide matches the house?',
        a: 'Open the host that has the kitchen. Use the [Oʻahu getting-started guide](oahu:/help/getting-started), the [Maui getting-started guide](maui:/help/getting-started), the [Kauaʻi getting-started guide](kauai:/help/getting-started), or the [Hawaiʻi Island getting-started guide](bigisland:/help/getting-started).',
      },
      {
        q: 'What belongs in the first note, whichever island I pick?',
        a: 'Dates, the address or the area, who is eating, dietary notes, and the occasion. Leave resort slogans out. The island guide adds whatever that host still needs, such as a freight slot or a shore.',
      },
      {
        q: 'Who answers a first note with a quote, and who answers with availability?',
        a: 'Oʻahu and Maui answer with a written quote. Kauaʻi answers a request for availability. Hawaiʻi Island answers from the inquiry list, west side first. This page does not hold a date.',
      },
      {
        q: 'Where do I send that first note?',
        a: `On [the quote form](/quote), one island per note, or through the getting-started guide linked above. Bands and fee lines are on [pricing](/pricing). Desk: ${desk}.`,
      },
    ],
  },
  helpMenu: {
    path: '/help/menu-guide',
    h1: 'How to read a menu draft, by island.',
    title: 'How to read a menu draft, by island | myCHEF Hawaii',
    description:
      'How a menu draft is written and revised for one house on each island. A supplier is named only when that day’s receipt supports it. Open the island guide.',
    lede:
      'The draft is written for one house. It is not a standing carte, and it does not name a supplier we cannot show.',
    kicker: 'Statewide · Menu guide',
    photo: 'hubHelpMenu',
    cardLabel: 'Menu guide',
    body: [
      'Revisions, dietary notes, and children’s plates are handled on the island guide. A sample on a menus page is an example. A boat or a farm appears only when that day’s receipt supports the name.',
      'Oʻahu and Maui write the draft after a complete quote request. Kauaʻi writes it after a request for availability if a crew can take the shore. The Big Island writes it from the inquiry list, west side first.',
    ],
    faqs: [
      {
        q: 'Which menu guide should I read?',
        a: 'The guide for the island with the stove: the [Oʻahu menu guide](oahu:/help/menu-guide), the [Maui menu guide](maui:/help/menu-guide), the [Kauaʻi menu guide](kauai:/help/menu-guide), or the [Hawaiʻi Island menu guide](bigisland:/help/menu-guide).',
      },
      {
        q: 'Is there one statewide draft I can approve here?',
        a: 'There is not. Each house gets its own draft on its own host. Approving a plate list on this directory does nothing. Open the island guide, then reply in writing on that thread.',
      },
      {
        q: 'Will the draft name a fisherman, a farm, or a market?',
        a: 'Only when that day’s receipt supports the name. Otherwise the dish is the dish. We do not decorate a draft with a boat we cannot show. The island guide says the same limit in that host’s words.',
      },
      {
        q: 'Where do dietary notes and children’s plates go before the draft?',
        a: 'In the first note, with the island, before anyone shops. The island menu guide is where revisions are answered. Prices for the night stay on [pricing](/pricing), not inside the draft.',
      },
    ],
  },
  helpWedding: {
    path: '/help/wedding-guide',
    h1: 'Wedding-week planning notes, by island.',
    title: 'Wedding-week planning notes, by island | myCHEF Hawaii',
    description: 'Wedding-week planning notes across Oʻahu, Maui, Kauaʻi and the Big Island, with published prices and a written quote.',
    lede:
      'How the week is planned.',
    kicker: 'Statewide · Wedding guide',
    photo: 'hubHelpWedding',
    cardLabel: 'Wedding guide',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
    ],
  },
  helpCorp: {
    path: '/help/corporate-guide',
    h1: 'Offsite planning notes, by island.',
    title: 'Offsite planning notes, by island | myCHEF Hawaii',
    description: 'Offsite planning notes across Oʻahu, Maui, Kauaʻi and the Big Island: how myCHEF Hawaii handles it, with published starting prices and a written quote.',
    lede:
      'How to plan a house offsite. Not HCC citywides.',
    kicker: 'Statewide · Offsite guide',
    photo: 'hubHelpCorp',
    cardLabel: 'Offsite guide',
    body: [
      'Choose your island below. Kauaʻi and the Big Island are taking enquiries.',
    ],
    faqs: [
      {
        q: 'Do I send one offsite brief for the whole state, or one brief per island?',
        a: 'One brief per island. Each house is planned on its own host. Open the guide where the house sits: [Oʻahu](oahu:/help/corporate-guide), [Maui](maui:/help/corporate-guide), [Kauaʻi](kauai:/help/corporate-guide), or [Hawaiʻi Island](bigisland:/help/corporate-guide).',
      },
      {
        q: 'Which islands answer a brief with a written quote, and which answer with availability?',
        a: 'Oʻahu and Maui answer with a written quote. Kauaʻi answers a request for availability. Hawaiʻi Island answers from the inquiry list, west side first. This page does not hold a date.',
      },
      {
        q: 'What must every offsite brief contain, whichever island the house is on?',
        a: 'Dates, headcount, the house address, kitchen photos, the dietary list, and the person who can approve. Leave resort slogans out. The island guide adds whatever that host still needs. Start on [the quote form](/quote).',
      },
      {
        q: 'How far ahead should the brief be sent?',
        a: 'Once the house and the dates are held. We reply in Hawaii business hours. A menu draft follows about 48 hours after a complete brief. A 50% deposit holds the date only after that island accepts in writing.',
      },
      {
        q: 'Why is each island planned and quoted separately?',
        a: 'The kitchen, the drive, and the crew do not transfer. One coordinator can keep the thread. The totals stay separate. There is no same-day crossing and no blended statewide package.',
      },
      {
        q: 'Where do I send the brief?',
        a: `On [the quote form](/quote), one island per note, or through the island guide linked above. Desk: ${desk}.`,
      },
    ],
  },
  helpManage: {
    path: '/help/managing-booking',
    h1: 'After the quote, by island.',
    title: 'After the quote, by island | myCHEF Hawaii',
    description:
      'How to change a date, a headcount, or an address after you accept, by island. The 50% deposit and the service lines stay on the quote.',
    lede:
      'Changes after you accept are written on the island that holds the house. This directory does not move a deposit.',
    kicker: 'Statewide · After the quote',
    photo: 'hubHelpManage',
    cardLabel: 'After the quote',
    body: [
      'A 50% deposit locks a date only after you accept the written total. Guest count, date, and address changes go back to that island in writing. A verbal note does not rewrite the quote. Gratuity is never required.',
      'Oʻahu and Maui take the change against a written quote. Kauaʻi takes it against a request for availability. Hawaiʻi Island takes it on the inquiry list, west side first. Service at 20% and Hawaiʻi GET up to 4.712% stay their own lines. The card is [pricing](/pricing).',
    ],
    faqs: [
      {
        q: 'Which page explains a change after I have accepted?',
        a: 'Use the guide for the island that holds the house. That is [Oʻahu managing a booking](oahu:/help/managing-booking), [Maui managing a booking](maui:/help/managing-booking), [Kauaʻi managing a booking](kauai:/help/managing-booking), or [Hawaiʻi Island managing a booking](bigisland:/help/managing-booking).',
      },
      {
        q: 'Does a message on this page move the date or the headcount?',
        a: 'It does not. Write the island that issued the total. The quote is the record, not a chat on the statewide desk. A new headcount rewrites the total before anything else is locked.',
      },
      {
        q: 'Where do the service charge and the tax sit after I accept?',
        a: 'On the written total, as their own lines: 20% service and Hawaiʻi GET up to 4.712%. A 50% deposit locks a date the island can staff, and only after you accept. Gratuity is never required. The card is [pricing](/pricing).',
      },
      {
        q: 'What if the house moves to another island after the deposit?',
        a: `That is a new booking on the new island, not an edit of the first total. One crew does not cross the channel the same day. Start the second note on [the quote form](/quote). Desk: ${desk}.`,
      },
    ],
  },
};

/** Parent hub indexes that already have nested pickers — list those stills, do not invent URLs. */
const HUB_PARENT_NESTED: Record<string, HubNestedId[]> = {
  '/events': [
    'occBirthdays',
    'occWelcome',
    'occRetreats',
    'occAnniversaries',
    'occCorporate',
    'occParties',
    'occBrunch',
  ],
  '/catering': ['fmtBbq', 'fmtPlated', 'fmtFamily', 'fmtBuffet', 'fmtGrazing', 'fmtDropoff'],
  '/fine-dining': ['fineRomantic', 'fineTasting', 'fineChefsev', 'fineCeleb'],
  '/staffing': ['staffServers', 'staffBartenders', 'staffButlers'],
  '/menus': ['menuThree', 'menuFamily', 'menuBreakfast', 'menuLunch'],
  '/help': ['helpStart', 'helpMenu', 'helpWedding', 'helpCorp', 'helpManage'],
};

export function nestedHubDirectories(parentPath: string): HubDirectory[] {
  const ids = HUB_PARENT_NESTED[parentPath];
  if (!ids) return [];
  return ids.map((id) => hubNestedDirectories[id]);
}

