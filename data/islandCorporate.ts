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
  { path: '/corporate-catering', label: 'Meals across the stay' },
  { path: '/events/corporate-events', label: 'One company dinner' },
  { path: '/help/corporate-guide', label: 'How to brief it' },
  { path: '/retreat-catering', label: 'Full-board retreat food' },
  { path: '/events/retreats', label: 'Retreat occasion' },
  { path: '/quote', label: 'Quote / inquiry form' },
];

export const islandCorporate: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Company offsite in an Oahu rental house.',
    title: 'Company offsite in an Oahu house | myCHEF',
    description:
      'A company offsite or retreat in a Kahala, Ko Olina, Kailua, or Honolulu house. One dinner and meals across the stay have a page. Request a written quote.',
    lede: 'Oahu villa offsites: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
    kicker: 'Oʻahu · Offsites',
    photo: 'corpIndexOahu',
    body: [
      `HCC citywides are closed through 2027.`,
      'Board dinners and house offsites sit in residences we can actually cook in. We do not staff a ballroom because a conference is in town.',
      'This page is the overview: a company offsite or a retreat cooked in the rented house. One company dinner night is [one company dinner](/events/corporate-events). Catered meals for the team across the stay are [meals across the stay](/corporate-catering). How to brief the house, the dates, and the dietary notes is [how to brief it](/help/corporate-guide).',
      `Staffing is not folded into the dinner. A server and a sous chef show as their own lines on the quote. A bartender or butler is quoted in writing. There is no hourly figure for either. Open [staffing](/staffing) before you assume a floor. The card is [pricing](/pricing). Quotes are open on [the quote form](/quote). A Gold Coast dining room and a Ko Olina villa do not share a freight plan. Write the building with the format. Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'Is one Kahala executive dinner the same booking as a house offsite night?',
        a: 'No. One company dinner night is [one company dinner](/events/corporate-events). Catered meals for the team across the stay are [meals across the stay](/corporate-catering). The same residence can hold either. The quote uses the format you name.',
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
        q: 'How are server and sous-chef hours added to an Oʻahu offsite quote?',
        a: 'As their own lines, beside the food, not inside it. Open [staffing](/staffing) for the roles. 20% service and Hawaiʻi GET up to 4.712% follow those lines, each alone. A 50% deposit comes after you accept. Gratuity is never required.',
      },
      {
        q: 'If the house wants a bar, how is the bartender priced?',
        a: 'A bartender is quoted in writing. There is no bartender hour on the card. Say you want the pour on [the quote form](/quote). If no one is free, the quote says so before a deposit.',
      },
      {
        q: 'Can one coordinator arrange a Kahala dinner and a later Ko Olina retreat day?',
        a: 'Yes, on one thread, as separate lines. The dinner night is [one company dinner](/events/corporate-events). Days of cooking are [retreats](/events/retreats). Town freight and a villa arrival stay different notes. Quotes are open.',
      },
      {
        q: 'What does a Kahala board-dinner kitchen need that a Ko Olina offsite kitchen does not?',
        a: 'Kahala is often a dining room and, in town, a freight window. Ko Olina is a villa kitchen with a longer evening because the house is the venue. Both need a cooktop. A hotel suite is declined either way.',
      },
      {
        q: 'What else should a Honolulu tower quote include for a dinner or an offsite?',
        a: `The freight window, written next to the format. A Kahala dining room and a Ko Olina villa do not share that slot. Send the building note on [the quote form](/quote). Quotes are open. Desk: ${desk}.`,
      },
    ],
  },
  maui: {
    h1: 'Company offsite in a Maui villa.',
    title: 'Company offsite in a Maui villa | myCHEF',
    description:
      'A company offsite or retreat in a Wailea, Kapalua, or Kāʻanapali villa. One dinner and stay meals each have a page. Request a written quote.',
    lede: 'Maui villa offsites: practical notes from myCHEF Hawaii for a private chef night in your villa or vacation rental. Send your dates for a written quote.',
    kicker: 'Maui · Offsites',
    photo: 'corpIndexMaui',
    body: [
      `Saturday West Maui traffic is planned on the West Maui page.`,
      'Villa offsites and crew meals sit in residences. We do not staff a resort banquet room because the group is already on property.',
      'This page is the Villa Week overview: a company offsite or a retreat cooked in the rented house. One company dinner night is [one company dinner](/events/corporate-events). Catered meals for the team across the stay are [meals across the stay](/corporate-catering). How to brief the shore, the dates, and the dietary notes is [how to brief it](/help/corporate-guide).',
      `The quote lists people separately from food. Server hours and sous-chef hours are their own lines. A lanai bartender is quoted in writing, with no hourly figure on the card. Read [staffing](/staffing). Numbers are on [pricing](/pricing). A wet lawn stays in the house you named. It does not become a hotel ballroom. Quotes are open. Put Wailea or West Maui on [the quote form](/quote). Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'Is a Wailea leadership dinner the same booking as a lawn night for the whole group?',
        a: 'One company dinner night is [one company dinner](/events/corporate-events). Catered meals across the stay are [meals across the stay](/corporate-catering). Both stay in the rental. We do not move either into a resort banquet room.',
      },
      {
        q: 'When does a West Maui stay need full-board cooking instead of one crew dinner?',
        a: 'When the group eats across the days of the rental, not for a single evening. Open [retreats](/events/retreats). Saturday traffic between the shores changes the call time. It does not change the format.',
      },
      {
        q: 'What should a Maui brief include before anyone writes dishes?',
        a: 'The shore, the dates, the seats, dietary limits, and whether Saturday crosses West Maui. That note is [how to brief an offsite](/help/corporate-guide). A resort name is not a kitchen.',
      },
      {
        q: 'How are server and sous-chef hours charged on a Villa Week offsite?',
        a: 'Server hours and sous-chef hours are separate from the food. A lanai bartender is a written line, not an hourly figure. See [staffing](/staffing). 20% service and GET up to 4.712% print after. A 50% deposit follows acceptance. Gratuity is never required.',
      },
      {
        q: 'Can one Maui request cover an executive dinner and a retreat day?',
        a: 'Yes. One coordinator, two lines. The dinner night stays on [one company dinner](/events/corporate-events). The days stay on [retreats](/events/retreats). Quotes are open. Do not ask the banquet office to blend them.',
      },
      {
        q: 'What does a Wailea rental kitchen need that a hotel banquet room cannot stand in for?',
        a: 'A cooktop, a fridge, and a table or lawn the list can use. If the listing is a hotel room, we decline. Being on property is not a kitchen. Say which room on the quote.',
      },
      {
        q: 'If the trade winds close the lawn, do we switch to a different kind of booking?',
        a: 'No. The format stays the offsite or the dinner you booked. The backup is the dining room or a covered lanai, written before you accept. We do not switch you into a ballroom because the lawn is wet.',
      },
      {
        q: 'Why is Saturday West Maui traffic part of the offsite quote, not a later surprise?',
        a: `The call time changes if the group drives from Wailea toward Kapalua. Put that drive in the same note as the format. We will not discover it on the day. Quotes are open. Desk: ${desk}.`,
      },
    ],
  },
  kauai: {
    h1: 'Company offsite on a Kauai estate.',
    title: 'Company offsite on Kauai | myCHEF',
    description:
      'A company offsite or retreat in a rented Kauaʻi estate. One dinner, stay meals, and the brief each have a page. Request availability for the shore.',
    lede: 'Kauai estate offsites at inquiry. Not an instant-booking button.',
    kicker: 'Kauaʻi · Offsites',
    photo: 'corpIndexKauai',
    body: [
      `Inquiry stage. Kauaʻi is not a MICE island.`,
      'A named shore is not a confirmation. Send dates on the quote form.',
      'This page is the overview for a Garden Isle company offsite or retreat in the rented estate. One company dinner night is [one company dinner](/events/corporate-events). Catered meals for the team across the stay are [meals across the stay](/corporate-catering). How to brief the shore, the bridge, and the dietary notes is [how to brief it](/help/corporate-guide).',
      `Request availability. If you want people beyond the chef, say so: server and sous-chef lines are written apart from the menu, and a bartender is quoted in writing. See [staffing](/staffing). The card is [pricing](/pricing). Use [the quote form](/quote) and request availability for one shore. A closure on the Hanalei bridge moves a north-shore night. It does not silently become Poʻipū. Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'Should a Princeville request start as one executive dinner, a group night, or full-board days?',
        a: 'One company dinner night is [one company dinner](/events/corporate-events). Catered meals across the stay are [meals across the stay](/corporate-catering). Full-board days on that shore are [retreats](/events/retreats). Request availability for one of those. A shore name is not a yes.',
      },
      {
        q: 'How does the Hanalei bridge change a north-shore offsite?',
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
        q: 'Can you cook a company dinner in a Līhuʻe meeting room?',
        a: 'No. These formats are estate houses with kitchens. Kauaʻi is not a convention product. If the address has no cooktop, we decline in the reply. Request availability for a house, not a meeting floor.',
      },
      {
        q: 'What does a kitchen on either Kauaʻi shore still need?',
        a: 'A cooktop, a fridge, and seats. The north adds the covered backup and the bridge. The south is the shorter drive from Līhuʻe and still needs a wet-weather line. Neither shore is an instant confirm.',
      },
      {
        q: 'Besides the meal, what should a north-shore availability request mention?',
        a: `The Hanalei-bridge clause, when the house is past the bridge. A closure moves that night. It does not cancel a Poʻipū line, and it does not confirm a crew. Request availability with the shore named. Desk: ${desk}.`,
      },
    ],
  },
  bigisland: {
    h1: 'Company retreat in a Kona or Kohala house.',
    title: 'Company retreat in a Kona house | myCHEF',
    description:
      'A company offsite or retreat in a rented Kona, Waikoloa, or Kohala house. Hilo is a separate day. Join the inquiry list. One dinner night has its own page.',
    lede: 'Hawaiʻi Island west-side villa offsites at inquiry.',
    kicker: 'Hawaiʻi Island · Offsites',
    photo: 'corpIndexBigisland',
    body: [
      `West side first.`,
      'East side is a dedicated day. Ironman weeks compress lodging, not a fake kitchen promise.',
      'This page is the overview for a company offsite or retreat in a rented west-side house. One company dinner night is [one company dinner](/events/corporate-events). Catered meals for the team across the stay are [meals across the stay](/corporate-catering). How to brief the address, the dates, and the dietary notes is [how to brief it](/help/corporate-guide). Hilo is a dedicated day, and it is not implied.',
      `Join the inquiry list. Staffing, if you need it, is requested as lines: a server, a sous chef, and any bartender quoted in writing. Open [staffing](/staffing). The card is [pricing](/pricing). Send the west-side address on [the quote form](/quote). Ironman weeks need an early flag because lodging and grocery windows compress. They do not add a kitchen we have not seen. Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'On the west side, which booking is a leadership dinner and which is the group night?',
        a: 'One company dinner night is [one company dinner](/events/corporate-events). Catered meals across the stay are [meals across the stay](/corporate-catering). Both are Kona, Waikoloa, or the Kohala Coast. Join the inquiry list with the format named. Hilo is not either URL.',
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
        q: 'How do I ask for servers and a sous chef on a Big Island offsite inquiry?',
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
        q: 'Why doesn’t a Kona offsite quote include Hilo?',
        a: 'Hilo is a dedicated east-side day. It is not a format here and not a same-day add-on to Kona or Kohala. Join the inquiry list for the west side, or send the east side as its own day. We will not imply both.',
      },
      {
        q: 'If I ask for a Kona or Kohala dinner, should Hilo be in that same request?',
        a: `Hilo. A Kona or Kohala format does not include the east side. Join the inquiry list with the west-side address only, or send Hilo as its own day. There is no instant-booking button. Desk: ${desk}.`,
      },
    ],
  },
};
