import type { IslandId } from './islands';
import type { IslandNestedIndexPage } from './islandHelpIndex';
import { DESK_EMAIL, DESK_PHONE_DISPLAY, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';

const desk = `${DESK_EMAIL}, +1 ${DESK_PHONE_DISPLAY} (${DESK_TEL}), WhatsApp ${DESK_WHATSAPP}`;

/**
 * Island /corporate indexes. Distinct from hub /corporate, from
 * /corporate-catering (SKU), /events/corporate-events (occasion),
 * /help/corporate-guide, and /conventions. Titles must not use money keywords.
 */

export const CORPORATE_INDEX_LINKS: { path: string; label: string }[] = [
  { path: '/corporate-catering', label: 'Executive dinners' },
  { path: '/events/corporate-events', label: 'House offsites' },
  { path: '/help/corporate-guide', label: 'How to brief an offsite' },
  { path: '/retreat-catering', label: 'Full-board retreat food' },
  { path: '/events/retreats', label: 'Retreat occasion' },
  { path: '/quote', label: 'Quote / inquiry form' },
];

export const islandCorporate: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Oahu offsites — Kahala dining rooms, not the convention centre.',
    title: 'Oahu villa offsites — houses, not HCC citywides | myCHEF',
    description:
      'Oahu villa offsites: houses, not HCC citywides.',
    lede: 'Oahu villa offsites: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
    kicker: 'Oʻahu · Offsites',
    photo: 'corpIndexOahu',
    body: [
      `HCC citywides are closed through 2027.`,
      'Board dinners and house offsites sit in residences we can actually cook in. We do not staff a ballroom because a conference is in town.',
      'Pick the format before the menu. One executive dinner in a Kahala or Ko Olina house is [executive dinners](/corporate-catering). A single company night, still in the residence, is [house offsites](/events/corporate-events). Days of cooking for the same group are [retreats](/events/retreats). The brief that names the house, the dates, and the dietary limits is [how to brief an offsite](/help/corporate-guide). This page does not replace those three.',
      `Staffing is not folded into the dinner. A server and a sous chef show as their own lines on the quote. A bartender or butler is quoted in writing. There is no hourly figure for either. Open [staffing](/staffing) before you assume a floor. The card is [pricing](/pricing). Quotes are open on [the quote form](/quote). A Gold Coast dining room and a Ko Olina villa do not share a freight plan. Write the building with the format. Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'Is one Kahala executive dinner the same booking as a house offsite night?',
        a: 'No. One leadership table is [executive dinners](/corporate-catering). A single company night for the wider group, still in the house, is [house offsites](/events/corporate-events). Same residence can hold either. The quote uses the format you name.',
      },
      {
        q: 'When does a Honolulu offsite become full-board days instead of one dinner?',
        a: 'When the group stays and eats across days, not for one evening. That format is [retreats](/events/retreats). One night stays on the offsite page. Do not stretch a dinner URL across a week of meals.',
      },
      {
        q: 'What belongs in the Oʻahu planning brief before a menu exists?',
        a: 'The house, the dates, the seats, and the dietary limits, on [how to brief an offsite](/help/corporate-guide). A tower also needs the freight window. We do not draft a menu from a conference name.',
      },
      {
        q: 'How do server and sous-chef lines show on an Oʻahu offsite quote?',
        a: 'As their own lines, beside the food, not inside it. Open [staffing](/staffing) for the roles. 20% service and Hawaiʻi GET up to 4.712% follow those lines, each alone. A 50% deposit comes after you accept. Gratuity is never required.',
      },
      {
        q: 'Where does a pour sit if the house wants a bar and no hourly figure exists?',
        a: 'A bartender is quoted in writing. There is no bartender hour on the card. Say you want the pour on [the quote form](/quote). If no one is free, the quote says so before a deposit.',
      },
      {
        q: 'Can one coordinator hold a Kahala dinner and a later Ko Olina retreat day?',
        a: 'Yes, on one thread, as separate lines. The dinner is [executive dinners](/corporate-catering). The days are [retreats](/events/retreats). Town freight and a villa arrival stay different notes. Quotes are open.',
      },
      {
        q: 'What kitchen note does a Kahala board dinner need that a Ko Olina offsite does not?',
        a: 'Kahala is often a dining room and, in town, a freight window. Ko Olina is a villa kitchen with a longer evening because the house is the venue. Both need a cooktop. A hotel suite is declined either way.',
      },
      {
        q: 'What extra line does a Honolulu tower add after the format is chosen?',
        a: `The freight window, written next to the format. A Kahala dining room and a Ko Olina villa do not share that slot. Send the building note on [the quote form](/quote). Quotes are open. Desk: ${desk}.`,
      },
    ],
  },
  maui: {
    h1: 'Maui offsites — Wailea houses, not a banquet floor.',
    title: 'Maui villa offsites — houses, not hotel ballrooms | myCHEF',
    description:
      'Maui villa offsites: houses, not hotel ballrooms.',
    lede: 'Maui villa offsites: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
    kicker: 'Maui · Offsites',
    photo: 'corpIndexMaui',
    body: [
      `Saturday West Maui traffic is planned on the West Maui page.`,
      'Villa offsites and crew meals sit in residences. We do not staff a resort banquet room because the group is already on property.',
      'Villa Week offsites split by format, not by a resort name. One seated dinner for the leadership table is [executive dinners](/corporate-catering). A single night for the wider group, still in the rental, is [house offsites](/events/corporate-events). Cooking through the days of the stay is [retreats](/events/retreats). Write the shore, the Saturday west-side drive, and the dietary limits in [how to brief an offsite](/help/corporate-guide) before asking for a menu.',
      `The quote lists people separately from food. Server hours and sous-chef hours are their own lines. A lanai bartender is quoted in writing, with no hourly figure on the card. Read [staffing](/staffing). Numbers are on [pricing](/pricing). A wet lawn stays in the house you named. It does not become a hotel ballroom. Quotes are open. Put Wailea or West Maui on [the quote form](/quote). Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'Wailea leadership dinner or a lawn night for the whole group — which URL?',
        a: 'The leadership table is [executive dinners](/corporate-catering). The lawn night for the wider group is [house offsites](/events/corporate-events). Both stay in the rental. We do not move either into a resort banquet room.',
      },
      {
        q: 'When does a West Maui stay need full-board cooking instead of one crew dinner?',
        a: 'When the group eats across the days of the rental, not for a single evening. Open [retreats](/events/retreats). Saturday traffic between the shores changes the call time. It does not change the format.',
      },
      {
        q: 'What must the Maui brief name before anyone writes dishes?',
        a: 'The shore, the dates, the seats, dietary limits, and whether Saturday crosses West Maui. That note is [how to brief an offsite](/help/corporate-guide). A resort name is not a kitchen.',
      },
      {
        q: 'How do staffing lines appear next to a Villa Week offsite menu?',
        a: 'Server hours and sous-chef hours are separate from the food. A lanai bartender is a written line, not an hourly figure. See [staffing](/staffing). 20% service and GET up to 4.712% print after. A 50% deposit follows acceptance. Gratuity is never required.',
      },
      {
        q: 'Can the same Maui thread hold an executive dinner and a retreat day?',
        a: 'Yes. One coordinator, two lines. The dinner stays on [executive dinners](/corporate-catering). The days stay on [retreats](/events/retreats). Quotes are open. Do not ask the banquet office to blend them.',
      },
      {
        q: 'What does a Wailea rental kitchen need that a banquet floor does not replace?',
        a: 'A cooktop, a fridge, and a table or lawn the list can use. If the listing is a hotel room, we decline. Being on property is not a kitchen. Say which room on the quote.',
      },
      {
        q: 'If the trade winds close the lawn, is the backup a different format?',
        a: 'No. The format stays the offsite or the dinner you booked. The backup is the dining room or a covered lanai, written before you accept. We do not switch you into a ballroom because the lawn is wet.',
      },
      {
        q: 'Why is Saturday West Maui traffic part of the offsite quote, not a later surprise?',
        a: `The call time changes if the group drives from Wailea toward Kapalua. Put that drive in the same note as the format. We will not discover it on the day. Quotes are open. Desk: ${desk}.`,
      },
    ],
  },
  kauai: {
    h1: 'Kauai offsites — estate tables at inquiry, not a convention product.',
    title: 'Kauai estate offsites — inquiry, not a MICE island | myCHEF',
    description:
      'Kauai estate offsites at inquiry. Not an instant-booking button.',
    lede: 'Kauai estate offsites at inquiry. Not an instant-booking button.',
    kicker: 'Kauaʻi · Offsites',
    photo: 'corpIndexKauai',
    body: [
      `Inquiry stage. Kauaʻi is not a MICE island.`,
      'A named shore is not a confirmation. Send dates on the quote form.',
      'Garden Isle company meals are an inquiry, and the format is the first choice. One executive table is [executive dinners](/corporate-catering). One estate night for the group is [house offsites](/events/corporate-events). Full-board days on a single shore are [retreats](/events/retreats). North and south stay separate drives, even when one coordinator holds the thread. The note that names the shore, the bridge risk, and the dietary limits is [how to brief an offsite](/help/corporate-guide). A named shore is still not a crew.',
      `Request availability. If you want people beyond the chef, say so: server and sous-chef lines are written apart from the menu, and a bartender is quoted in writing. See [staffing](/staffing). The card is [pricing](/pricing). Use [the quote form](/quote) and request availability for one shore. A closure on the Hanalei bridge moves a north-shore night. It does not silently become Poʻipū. Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'Which format should a Princeville inquiry name first?',
        a: 'One executive table is [executive dinners](/corporate-catering). One estate night for the group is [house offsites](/events/corporate-events). Full-board days on that shore are [retreats](/events/retreats). Request availability for one of those. A shore name is not a yes.',
      },
      {
        q: 'How does the Hanalei bridge change a north-shore offsite format?',
        a: 'It does not change the format. It moves the night. A closure is a written clause, not a forfeit, and not a quiet switch to Poʻipū. Say north or south in the brief before you ask for dishes.',
      },
      {
        q: 'What does a Garden Isle brief have to include that a town brief does not?',
        a: 'The shore, the bridge risk if you are north, and the dietary limits. That is [how to brief an offsite](/help/corporate-guide). Request availability with those facts. We do not staff from a conference title.',
      },
      {
        q: 'How should I ask for servers on a Kauaʻi offsite inquiry?',
        a: 'Name them. Server and sous-chef lines are separate from the menu. A bartender is quoted in writing, with no hourly figure. Open [staffing](/staffing). 20% service and GET up to 4.712% are their own lines. The 50% deposit waits for a written yes. Gratuity is never required.',
      },
      {
        q: 'Can one availability request cover Poʻipū one night and Princeville the next?',
        a: 'Only as two lines, one coordinator, and only if a crew can hold both shores. They are not one drive. Request availability for each shore. A bridge closure still applies to the north line alone.',
      },
      {
        q: 'Is a Līhuʻe meeting room a format on this page?',
        a: 'No. These formats are estate houses with kitchens. Kauaʻi is not a convention product. If the address has no cooktop, we decline in the reply. Request availability for a house, not a meeting floor.',
      },
      {
        q: 'What kitchen fact do both shores still share?',
        a: 'A cooktop, a fridge, and seats. The north adds the covered backup and the bridge. The south is the shorter drive from Līhuʻe and still needs a wet-weather line. Neither shore is an instant confirm.',
      },
      {
        q: 'What sentence has to sit on a north-shore availability request besides the format?',
        a: `The Hanalei-bridge clause, when the house is past the bridge. A closure moves that night. It does not cancel a Poʻipū line, and it does not confirm a crew. Request availability with the shore named. Desk: ${desk}.`,
      },
    ],
  },
  bigisland: {
    h1: 'West-side offsites — Kona houses at inquiry. Hilo not implied.',
    title: 'West-side villa offsites — inquiry, not citywides | myCHEF',
    description:
      'Hawaiʻi Island west-side villa offsites at inquiry.',
    lede: 'Hawaiʻi Island west-side villa offsites at inquiry.',
    kicker: 'Hawaiʻi Island · Offsites',
    photo: 'corpIndexBigisland',
    body: [
      `West side first.`,
      'East side is a dedicated day. Ironman weeks compress lodging, not a fake kitchen promise.',
      'West-side company cooking starts with the format, inside Kona, Waikoloa, and the Kohala Coast. One leadership dinner is [executive dinners](/corporate-catering). One house night for the group is [house offsites](/events/corporate-events). Multi-day cooking that stays on that side is [retreats](/events/retreats). Waikoloa and Kona town share a radius and still take two call times. The brief is [how to brief an offsite](/help/corporate-guide). Hilo is not a format on this page. It is a dedicated day, and it is not implied.',
      `Join the inquiry list. Staffing, if you need it, is requested as lines: a server, a sous chef, and any bartender quoted in writing. Open [staffing](/staffing). The card is [pricing](/pricing). Send the west-side address on [the quote form](/quote). Ironman weeks need an early flag because lodging and grocery windows compress. They do not add a kitchen we have not seen. Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'Which west-side format is a leadership dinner, and which is the group night?',
        a: 'One leadership dinner is [executive dinners](/corporate-catering). One house night for the wider group is [house offsites](/events/corporate-events). Both are Kona, Waikoloa, or the Kohala Coast. Join the inquiry list with the format named. Hilo is not either URL.',
      },
      {
        q: 'When is multi-day cooking a retreat instead of a repeated dinner?',
        a: 'When the same west-side house eats across days. That is [retreats](/events/retreats). Repeating a dinner title does not make a retreat. The inquiry should say days, not a stack of identical nights.',
      },
      {
        q: 'What does the west-side brief need before a menu is drafted?',
        a: 'The address on the Kona–Kohala side, the dates, the seats, and dietary limits. Use [how to brief an offsite](/help/corporate-guide). Flag Ironman if the week touches the race. Do not leave the side unstated.',
      },
      {
        q: 'How are staffing lines requested on a Big Island offsite inquiry?',
        a: 'As separate asks: server, sous chef, and a bartender only if you want one quoted in writing. See [staffing](/staffing). 20% service and Hawaiʻi GET up to 4.712% follow, each alone. A 50% deposit applies after a written yes. Gratuity is never required.',
      },
      {
        q: 'Can one inquiry hold a Kona dinner and a Kohala retreat day?',
        a: 'Yes, west side only, as two lines and one coordinator. The dinner and the retreat stay different formats. Join the inquiry list. A published rate is not a crew for either day.',
      },
      {
        q: 'What kitchen do we need in Waikoloa, and what do we turn down?',
        a: 'A cooktop, a fridge, and a table the list can use. A hotel room with a minibar is declined. Say terrace or great room. We confirm the room in the reply, before any deposit.',
      },
      {
        q: 'Why will a Kona offsite quote not mention Hilo?',
        a: 'Hilo is a dedicated east-side day. It is not a format here and not a same-day add-on to Kona or Kohala. Join the inquiry list for the west side, or send the east side as its own day. We will not imply both.',
      },
      {
        q: 'What must a west-side inquiry refuse to imply once the format is named?',
        a: `Hilo. A Kona or Kohala format does not include the east side. Join the inquiry list with the west-side address only, or send Hilo as its own day. There is no instant-booking button. Desk: ${desk}.`,
      },
    ],
  },
};
