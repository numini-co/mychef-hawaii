import type { IslandId } from './islands';
import type { IslandNestedIndexPage } from './islandHelpIndex';
import { bigIslandSimplerDinner, signatureGuestBand, STAFFING } from './rateCard';
import { DESK_EMAIL, DESK_PHONE_DISPLAY, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';

const serverHr = STAFFING.serverHourly;
const sousHr = STAFFING.sousHourly;
const minHours = STAFFING.minimumHours;
const desk = `${DESK_EMAIL}, +1 ${DESK_PHONE_DISPLAY} (${DESK_TEL}), WhatsApp ${DESK_WHATSAPP}`;
const oahuBand = signatureGuestBand('oahu');
const mauiBand = signatureGuestBand('maui');
const kauaiBand = signatureGuestBand('kauai');
const biBand = signatureGuestBand('bigisland');
const biSimple = bigIslandSimplerDinner();

/**
 * Island /staffing indexes. Distinct from nested /staffing/:role pages,
 * from /bar (bartender product) and /mobile-bar (4-hour package).
 * Titles must not use money keywords.
 */

export const islandStaffingIndex: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Oahu add-ons — servers, bartenders, butlers when a bench exists.',
    title: 'Oahu event staffing — servers & bartenders | myCHEF',
    description: `Honolulu, Kahala, and Ko Olina servers at $${serverHr}/hr on a written Oʻahu quote. The sous chef is a separate line. Bartenders and butlers are quoted in writing.`,
    lede: 'Resident’s Island quotes are open. A Honolulu or Kahala dinner adds a server when the courses are plated. Ko Olina bartenders and butlers are written lines, not a published hour.',
    kicker: 'Oʻahu · Staffing',
    photo: 'staffIndexOahu',
    body: [
      `A plated dinner in a Kahala dining room, or on the Gold Coast, needs a server once guests sit for courses. Family-style at the same Honolulu table sends platters out once, so the server call is shorter and the food band stays put. The chef remains the menu line. A server is $${serverHr}/hr. A sous chef is $${sousHr}/hr. Those hours are separate lines, each with a ${minHours}-hour minimum. 20% service and Hawaiʻi GET up to 4.712% print after the hours, each on its own line. A 50% deposit holds the date after you accept the written total. Gratuity is never required.`,
      `Bartenders and butlers have no hourly figure. Both are quoted in writing, and only when that Honolulu, Kahala, or Ko Olina night can be staffed. Open [servers](/staffing/servers), [bartenders](/staffing/bartenders), and [butlers](/staffing/butlers). Headcount rules are on [guest counts](/guest-counts). A staffed party is [Oʻahu catering](/catering). The signature dinner is ${oahuBand} a guest, groceries inside that band, on [pricing](/pricing). Send the house and plated or family-style on [the quote form](/quote). Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'When does a seated Kahala dinner need its own server?',
        a: `When guests sit for courses in a Kahala or Gold Coast dining room. Family-style at the same Honolulu table can stay with the chef. The server is $${serverHr}/hr, apart from the food. 20% service and Hawaiʻi GET up to 4.712% are their own lines.`,
      },
      {
        q: 'What changes on the crew if a Gold Coast dinner is plated instead of family-style?',
        a: `Plated service is a pass per course, so the server call runs longer. Family-style is one platter drop. The food band does not move. Server hours and the chef’s menu stay separate on the quote.`,
      },
      {
        q: 'Why is the sous chef not bundled into the Oʻahu server hour?',
        a: `They are different jobs. A server is $${serverHr}/hr. A sous chef is $${sousHr}/hr. Each line has a ${minHours}-hour minimum. 20% service and Hawaiʻi GET up to 4.712% follow both, each alone.`,
      },
      {
        q: 'Can I read a bartender hourly rate for a Honolulu lanai?',
        a: `No. A Honolulu or Ko Olina bartender is quoted in writing. There is no bartender hour on the card. The server hour is the only published staffing rate, at $${serverHr}/hr plus 20% service and GET up to 4.712%.`,
      },
      {
        q: 'What has to be true before a butler is written for Ko Olina?',
        a: `We can staff that villa night. A butler is a written line, not a standing promise, and not an hourly figure. If no one is free, the quote says so before any deposit.`,
      },
      {
        q: 'Does an Oʻahu catering total already contain the servers?',
        a: `No. [Oʻahu catering](/catering) is the food plan for a staffed party. Servers are added on this page and on [servers](/staffing/servers). The two lines meet on one written quote. They are not folded together.`,
      },
      {
        q: 'How should I use guest counts before I ask for Oʻahu staff?',
        a: `Name the seats on [guest counts](/guest-counts) first. A dinner for eight and a reception of forty do not take the same call. We write the hours from that number, not from a guess.`,
      },
      {
        q: 'What does the desk need to price servers on an Oʻahu quote?',
        a: `The house, the date, the headcount, and plated or family-style. Send them on [the quote form](/quote). Desk: ${desk}. Quotes are open. Nothing is charged to ask.`,
      },
    ],
  },
  maui: {
    h1: 'Maui add-ons — servers, lanai bartenders, butlers when a bench exists.',
    title: 'Maui event staffing — servers & bartenders | myCHEF',
    description:
      'Wailea and West Maui servers are an hourly line on the written quote. Bartenders and butlers are quoted in writing, with no published hour.',
    lede: 'Villa Week quotes are open. A Wailea lanai and a West Maui lawn do not take the same crew. The server hour is written. A bartender is not given an hourly figure here.',
    kicker: 'Maui · Staffing',
    photo: 'staffIndexMaui',
    body: [
      `On a Villa Week the crew follows the room. Eight at a Wailea dining table can eat family-style with the chef carrying platters. The same eight, plated on a West Maui lanai, need a server because each course is a separate pass. Saturday traffic between Wailea and Kapalua changes the call time. It does not change the hour. A server is $${serverHr}/hr and a sous chef is $${sousHr}/hr, written as two lines, ${minHours} hours minimum. Service at 20% and Hawaiʻi GET up to 4.712% sit beside those lines. Half the written total is the deposit. A tip is never required.`,
      `A bartender for that lanai, and a butler when the house wants one, are quoted in writing. Neither has an hourly figure on the card. The role pages are [servers](/staffing/servers), [bartenders](/staffing/bartenders), and [butlers](/staffing/butlers). How many seats you have is [guest counts](/guest-counts). Ten to seventy-five with a staffed kitchen is [Maui catering](/catering). Food for a signature night is ${mauiBand} a guest, shop included in the band, on [pricing](/pricing). Quotes are open. Put the shore and the service style on [the quote form](/quote). Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'Does eight on a Wailea lanai always need a server?',
        a: `Not if the meal is family-style and the chef can carry the platters. Plated courses on that lanai do need a server. The food price stays ${mauiBand} a guest, groceries inside the band, plus 20% service and GET up to 4.712%.`,
      },
      {
        q: 'Why do West Maui plated dinners book a longer server call than platters?',
        a: `Each plated course is its own pass from the kitchen to the seats. Platters down a Kapalua table go out once. More passes mean more hours. The menu band does not rise because the service style did.`,
      },
      {
        q: 'Where do server hours end and the sous-chef hour begin on a Villa Week quote?',
        a: `They are two lines. Server $${serverHr}/hr. Sous chef $${sousHr}/hr. Minimum ${minHours} hours each. 20% service and Hawaiʻi GET up to 4.712% print after both. Do not add them into one blended hour.`,
      },
      {
        q: 'Will a Kapalua ask show a bartender’s hourly figure?',
        a: `A Kapalua or Wailea bar is a written line, scoped to that lanai, not a number on this page. Ask for the pour with the shore. The reply names the night. It does not print an hour.`,
      },
      {
        q: 'What turns a Wailea butler into a line instead of a promise?',
        a: `A written quote, and only when someone can work that house. An empty night stays empty on the page. We do not print a butler hour, and we do not assume the resort next door will lend one.`,
      },
      {
        q: 'If I already opened Maui catering, do I still add staffing here?',
        a: `Yes. [Maui catering](/catering) holds the menu. This page holds the people. A server or a sous chef is itemised beside the food, not inside ${mauiBand} a guest. Fees stay 20% service and GET up to 4.712%.`,
      },
      {
        q: 'How does the headcount on the guest-count page set a lanai crew?',
        a: `Write the seats on [guest counts](/guest-counts) before the hours. A dining table of ten and a lawn of forty are different calls, even in the same Wailea estate. We size from that number.`,
      },
      {
        q: 'Which details turn a Maui staffing ask into a written total?',
        a: `Shore, date, seats, and plated or family-style. Saturday West Maui traffic belongs in the same note. Send it on [the quote form](/quote). Desk: ${desk}. Quotes are open.`,
      },
    ],
  },
  kauai: {
    h1: 'Kauai add-ons — hourly lines, inquiry, no fake roster.',
    title: 'Kauai staffing add-ons — hourly lines at inquiry | myCHEF',
    description:
      'Kauaʻi staffing is an inquiry on both shores. Servers are hourly when a crew exists. Bartenders and butlers are quoted in writing. Request availability.',
    lede: 'Garden Isle staffing is an inquiry on both shores. A named Princeville or Poʻipū date is a request for availability, not a confirmed crew. Hanalei-bridge weather can move the night.',
    kicker: 'Kauaʻi · Staffing',
    photo: 'staffIndexKauai',
    body: [
      `Garden Isle staffing starts as a request for availability, not a held crew. Say which shore. A plated supper in a Princeville great room needs a server for the passes. Family-style on a Poʻipū lawn moves food in platters, so the server hours are fewer while the menu price stays the same. If the Hanalei bridge is closed, the North Shore night moves. It is not forfeited, and it is not handed to the South Shore in silence. Server time is $${serverHr}/hr. Sous-chef time is $${sousHr}/hr. Ask for both and they print as two lines, ${minHours} hours at the shortest. Then 20% service and GET up to 4.712% each take a line. The 50% deposit waits until a written yes. Gratuity is never required.`,
      `Bartenders and butlers are quoted in writing. No hourly rate is published for either. Read [servers](/staffing/servers), [bartenders](/staffing/bartenders), and [butlers](/staffing/butlers) before you name the line. Seats are on [guest counts](/guest-counts). A larger staffed party is [Kauaʻi catering](/catering). The signature band is ${kauaiBand} a guest, groceries inside it, on [pricing](/pricing). Join the inquiry list on [the quote form](/quote) and request availability for the shore. Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'What does inquiry stage mean before a Princeville server is confirmed?',
        a: `The hour can be discussed. The person cannot be assumed. Join the inquiry list with the shore and the date. We write back when a crew exists. A published $${serverHr}/hr server rate, plus 20% service and GET up to 4.712%, is not a held booking.`,
      },
      {
        q: 'How should a Poʻipū plated supper be crewed compared with family-style under the same roof?',
        a: `Plated courses need a server for each pass. Family-style platters need less time on the floor. The menu band stays ${kauaiBand} a guest, groceries inside it. Staffing hours are the line that changes. 20% service and GET up to 4.712% stay separate.`,
      },
      {
        q: 'Are the server hour and the sous-chef hour one Garden Isle line?',
        a: `No. Server $${serverHr}/hr and sous chef $${sousHr}/hr are requested separately, ${minHours} hours minimum. 20% service and Hawaiʻi GET up to 4.712% follow. Inquiry does not merge them into a single blended rate.`,
      },
      {
        q: 'Does a Hanalei bar request publish an hourly bartender rate?',
        a: `No. North Shore and South Shore bartenders are quoted in writing. No bartender hour exists on the card. Request availability. Do not treat a named shore as a confirmed pour.`,
      },
      {
        q: 'If the Hanalei bridge is shut, what happens to a North Shore butler ask?',
        a: `The night moves with the closure. It is not forfeited, and it is not quietly switched to Poʻipū. A butler was already quote-only. The reply restates whether anyone can cross when the bridge reopens.`,
      },
      {
        q: 'Is staffing inside a Kauaʻi catering inquiry, or a line I must name?',
        a: `Name it. [Kauaʻi catering](/catering) is the menu. Servers, a sous chef, a bartender, or a butler are extra lines. Say which ones on the inquiry or they will not appear on the total.`,
      },
      {
        q: 'How do I state guest count so a south-shore crew is not guessed?',
        a: `Write the seats and whether it is a Poʻipū lawn or a Princeville dining room. [Guest counts](/guest-counts) is where headcount is defined. A great room of twelve is not a lawn of fifty. We will not guess the shore.`,
      },
      {
        q: 'How do I request availability for servers on either Kauaʻi shore?',
        a: `Join the inquiry list. Shore, date, seats, plated or family-style. Use [the quote form](/quote). Desk: ${desk}. There is no instant-booking button.`,
      },
    ],
  },
  bigisland: {
    h1: 'West-side add-ons — hourly lines, inquiry. Hilo not implied.',
    title: 'Big Island event staffing — servers & bartenders | myCHEF',
    description:
      'Big Island staffing is Kona–Kohala first, by inquiry. Servers are an hourly line. Bartenders and butlers are quoted in writing. Hilo is not included.',
    lede: 'Big Island Expedition staffing starts on the Kona–Kohala side and only as a request for availability. A Hilo lunch is not on this list and is not a same-day add-on to a Kona dinner.',
    kicker: 'Hawaiʻi Island · Staffing',
    photo: 'staffIndexBigisland',
    body: [
      `Expedition staffing is the west side first: Kona, Keauhou, Waikoloa, the Kohala Coast. A plated dinner at a Waikoloa table needs a server for each course. Family-style in that same house sends platters to the middle, so fewer server hours, same food band. Hilo is not on this page. An east-side day is its own inquiry, not an afternoon attached to a Kona dinner. The server line is $${serverHr}/hr. The sous chef is $${sousHr}/hr. They are separate, with a ${minHours}-hour minimum. The written total then adds 20% service and Hawaiʻi GET up to 4.712%, each alone. A 50% deposit applies only after you accept. Gratuity is never required. This is a request for availability, not instant booking.`,
      `A terrace bartender and a butler are quoted in writing. Do not look for an hourly figure for either. The lines live on [servers](/staffing/servers), [bartenders](/staffing/bartenders), and [butlers](/staffing/butlers). Write the headcount using [guest counts](/guest-counts). Staffed west-side parties are [Big Island catering](/catering). Signature dinners are ${biBand} a guest, or from ${biSimple} on the simpler table. Groceries sit inside either band, on [pricing](/pricing). Join the inquiry list on [the quote form](/quote). Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'Which west-side dinners are the ones that ask for a server first?',
        a: `Plated meals in Kona, Waikoloa, or along the Kohala Coast. Family-style at the same table may not need a separate server. Hilo is not in that choice. Request availability for the west-side house only.`,
      },
      {
        q: 'What crew difference should I expect between plated service at Waikoloa and family-style in the same house?',
        a: `Plated courses keep a server on the passes. Family-style shortens that call. The guest band stays ${biBand}, or from ${biSimple} on the simpler menu, groceries inside the band, plus 20% service and GET up to 4.712%.`,
      },
      {
        q: 'Why does a west-side inquiry list the sous chef apart from the server?',
        a: `Because the jobs bill apart. Server $${serverHr}/hr. Sous chef $${sousHr}/hr. Minimum ${minHours} hours. 20% service and Hawaiʻi GET up to 4.712% are added after, each on its own line. Inquiry does not blend them.`,
      },
      {
        q: 'Is there a published bartender hour for a Kohala terrace?',
        a: `A Kohala terrace bar is quoted in writing after you request availability. Do not borrow the server hour and call it a bartender rate. Hilo is not part of that terrace quote.`,
      },
      {
        q: 'Does a butler request on this staffing page include Hilo?',
        a: `No. Butlers here are a west-side written line, Kona to Kohala, and only when someone can work that night. Hilo is a dedicated east-side day. It is not implied by a Waikoloa request.`,
      },
      {
        q: 'How is staffing written beside a Kona catering menu?',
        a: `[Big Island catering](/catering) is the food. Servers and a sous chef are extra lines at $${serverHr}/hr and $${sousHr}/hr. 20% service and GET up to 4.712% follow. Say the lines on the inquiry or the menu quote will not invent them.`,
      },
      {
        q: 'What guest-count note stops a Kohala crew from being assumed?',
        a: `Write the seats and the town on [guest counts](/guest-counts) terms: Kona, Waikoloa, or Kohala. A twelve-seat terrace is not a fifty-guest lawn, and neither number covers Hilo.`,
      },
      {
        q: 'How do I request availability for west-side servers without implying the east side?',
        a: `Join the inquiry list with a Kona or Kohala address. Do not write Hilo in the same day. Use [the quote form](/quote). Desk: ${desk}. A rate on the card is not a confirmed crew.`,
      },
    ],
  },
};
