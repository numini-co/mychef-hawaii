import type { IslandId } from './islands';
import type { PhotoKey } from './photos';
import { bigIslandSimplerDinner, signatureGuestBand, stayChefUsd } from './rateCard';
import { DESK_EMAIL, DESK_PHONE_DISPLAY, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';

/**
 * Island /services indexes. Distinct from hub /services, from money doors
 * (/, /catering, /private-chef), and from /sitemap. Titles must not use
 * money keywords.
 */

export interface IslandServiceIndexPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_INDEX_LINKS: { path: string; label: string }[] = [
  { path: '/private-chef', label: 'What’s included' },
  { path: '/vacation-chef', label: 'Stay Chef week' },
  { path: '/personal-chef', label: 'Household line' },
  { path: '/catering', label: 'Staffed catering' },
  { path: '/weddings', label: 'Wedding week' },
  { path: '/events', label: 'Occasions' },
  { path: '/bar', label: 'Bartender add-on' },
  { path: '/mobile-bar', label: 'The packaged cart' },
  { path: '/fine-dining', label: 'In-villa formats' },
  { path: '/staffing', label: 'Staffing add-ons' },
  { path: '/help', label: 'Help desk' },
  { path: '/corporate', label: 'Villa offsites' },
  { path: '/gatherings', label: 'House gatherings' },
  { path: '/pricing', label: 'What a night costs' },
  { path: '/quote', label: 'Quote / inquiry form' },
];

const desk = `${DESK_EMAIL}, +1 ${DESK_PHONE_DISPLAY} (${DESK_TEL}), WhatsApp ${DESK_WHATSAPP}`;
const oahuBand = signatureGuestBand('oahu');
const mauiBand = signatureGuestBand('maui');
const kauaiBand = signatureGuestBand('kauai');
const biBand = signatureGuestBand('bigisland');
const biSimple = bigIslandSimplerDinner();
const oahuStay = stayChefUsd('oahu');
const mauiStay = stayChefUsd('maui');
const kauaiStay = stayChefUsd('kauai');
const biStay = stayChefUsd('bigisland');

export const islandServiceIndex: Record<IslandId, IslandServiceIndexPage> = {
  oahu: {
    h1: 'Oahu services — villa dinners, Stay Chef weeks, staffed rooms.',
    title: 'Oahu chef services — dinners & weeks | myCHEF',
    description:
      'Which Oʻahu service fits: one Honolulu dinner, a Stay Chef week, a household cook, staffed catering, or a bar. Quotes are open in Kahala and Ko Olina.',
    lede: 'Resident’s Island quotes are open. Pick the service from the trip you have: one Honolulu dinner, a Kahala week, the household you live in, a staffed party, or a bar beside the meal.',
    kicker: 'Oʻahu · Services',
    photo: 'svcIndexOahu',
    body: [
      `One villa dinner in Honolulu, Kahala, or Ko Olina is [what’s included](/private-chef): ${oahuBand} a guest, groceries inside that band. A visitor week, with a chef on the days the house cooks, is [Stay Chef](/vacation-chef) from ${oahuStay} a day, groceries at cost with receipts. A home you live in is the [household chef](/personal-chef), not that visitor week. A seated party of about ten to seventy-five is [staffed catering](/catering). A pour beside the dinner is the [bar add-on](/bar), quoted in writing, with no bartender hour on the card.`,
      `20% service and Hawaiʻi GET up to 4.712% are their own lines on every one of these. A 50% deposit follows the written total. Gratuity is never required. The list under this note is every live service URL on this island. If you are unsure, name dinner, week, household, catering, or bar on [the quote form](/quote). Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'We want one dinner in Honolulu. Which Oʻahu service is that?',
        a: `The villa dinner on [what’s included](/private-chef). That is one night, not a week and not a lawn party. Kahala and Ko Olina use the same door. Quotes are open.`,
      },
      {
        q: 'The house is ours all year. Is that a villa week or the household line?',
        a: `The household line, [personal chef](/personal-chef). Stay Chef on [vacation chef](/vacation-chef) is for visitors in a rental. Same crew, different rhythm. Say which one you mean.`,
      },
      {
        q: 'A Kahala seated party of twenty — dinner page or catering?',
        a: `Catering. About ten to seventy-five, with a staffed kitchen, is [staffed catering](/catering). A table of eight in the same house stays a villa dinner. Do not stretch one into the other.`,
      },
      {
        q: 'The dinner is already set. Where do I add a bartender without changing the menu?',
        a: `The [bar add-on](/bar). It is quoted in writing. It does not replace the dinner, and it is not an hourly figure on this list. Name it on the same quote.`,
      },
      {
        q: 'Ko Olina for six nights, with one larger welcome table. Two bookings?',
        a: `Usually yes. The nights you want a cook are [Stay Chef](/vacation-chef). The welcome table, if it is a staffed party, is [catering](/catering). One quote can list both. They are not the same line.`,
      },
      {
        q: 'Is this Oʻahu service list the pricing page?',
        a: `No. This page chooses the door. Bands, the 20% service charge, and GET up to 4.712% are on [pricing](/pricing). Open that after you know dinner, week, household, or catering.`,
      },
      {
        q: 'Visitors in our Kailua house for a month. Which door fits?',
        a: `If they are guests and the month needs a cook on chosen days, start with [Stay Chef](/vacation-chef). If you live there and want a standing cook, use [household chef](/personal-chef). Say Kailua on the form.`,
      },
      {
        q: 'I am unsure between an Oʻahu dinner and a week. What should the quote say?',
        a: `Write both ideas and the address. Honolulu, Kahala, or Ko Olina. We answer with one recommended door. [Quote form](/quote). Desk: ${desk}. Nothing is charged to ask.`,
      },
    ],
  },
  maui: {
    h1: 'Maui services — Wailea dinners, villa weeks, staffed rooms.',
    title: 'Maui chef services — villa dinners & weeks | myCHEF',
    description:
      'Pick a Maui service: one Wailea dinner, a Villa Week, a household cook, staffed catering, or a lanai bar. Quotes are open.',
    lede: 'Villa Week quotes are open. Choose from a single Wailea or West Maui dinner, a chef across the stay, the household you live in, a lawn party, or a bar on the lanai.',
    kicker: 'Maui · Services',
    photo: 'svcIndexMaui',
    body: [
      `A single arrival dinner in Wailea, or on a West Maui lanai, is [what’s included](/private-chef): ${mauiBand} a guest, shop inside the band. Cooking on the days you are in the house is a Villa Week, [Stay Chef](/vacation-chef) from ${mauiStay} a day, groceries at cost with receipts. If you live on Maui, the [household chef](/personal-chef) is a different door from that visitor week. A lawn of about ten to seventy-five is [staffed catering](/catering), not a stretched dinner. Cocktails before the meal are the [bar add-on](/bar), quoted in writing. No bartender hour is published.`,
      `20% service and GET up to 4.712% follow each of these as separate lines. Half is due as a deposit after you accept. A tip is never required. Every name in the list below is a live URL. Saturday traffic changes the call time, not which service you picked. Say the shore on [the quote form](/quote). Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'One arrival dinner in Wailea — which Maui service do I open?',
        a: `The villa dinner, [what’s included](/private-chef). One table, one night. A week of cooking is a different page. Quotes are open for Wailea and for West Maui.`,
      },
      {
        q: 'A seven-day Kapalua stay with a chef on the days we cook. Is that catering?',
        a: `No. That is a Villa Week on [Stay Chef](/vacation-chef). Catering is one staffed party. Do not book seven dinners as seven events if what you want is the house cook.`,
      },
      {
        q: 'We live in Kīhei. Which line is the household cook?',
        a: `[Household chef](/personal-chef). A Wailea rental week is [Stay Chef](/vacation-chef). Living in the house is the difference. Say Kīhei so the reply uses the resident door.`,
      },
      {
        q: 'A lawn reception for thirty in West Maui. Dinner page or staffed catering?',
        a: `[Staffed catering](/catering). Thirty on a lawn is past a villa dinner. The dinner page stays the smaller table. Saturday traffic belongs in the note. It does not pick the service.`,
      },
      {
        q: 'Cocktail hour on the lanai before a plated dinner. Where is the bar?',
        a: `Add the [bar add-on](/bar) to the dinner. It is quoted in writing, with no hourly bartender figure. The dinner page still owns the food. Name both on one quote.`,
      },
      {
        q: 'Can one Villa Week quote also carry a separate catering night?',
        a: `Yes. The week is [Stay Chef](/vacation-chef). The party night is [catering](/catering). Ask for both in the same message so the shore and the Saturday drive are planned once.`,
      },
      {
        q: 'Does Saturday traffic between Wailea and Kapalua pick the service?',
        a: `No. It picks the call time. A dinner, a week, and a lawn party are still three doors. Tell us which shore the house is on. We plan the drive. We do not change the product.`,
      },
      {
        q: 'I cannot tell Stay Chef from a Maui personal chef. What do I write first?',
        a: `Write whether you are visiting or you live there, plus the town. We point you to one door. [Quote form](/quote). Desk: ${desk}. Quotes are open. Nothing is due to ask.`,
      },
    ],
  },
  kauai: {
    h1: 'Kauai services — both-shore inquiry dinners and staffed rooms.',
    title: 'Kauai chef services — dinners & weeks | myCHEF',
    description:
      'Choose a Kauaʻi service at inquiry: a shore dinner, a Garden Isle week, household cooking, catering, or a bar. Request availability.',
    lede: 'Garden Isle services are a request for availability, not a button. Choose a shore dinner, a retreat week, household cooking, a staffed party, or a bar — then name Princeville, Hanalei, or Poʻipū.',
    kicker: 'Kauaʻi · Services',
    photo: 'svcIndexKauai',
    body: [
      `A single dinner on either shore is [what’s included](/private-chef): ${kauaiBand} a guest, groceries inside the band. A retreat with a cook on the days you are in the house is [Stay Chef](/vacation-chef) from ${kauaiStay} a day, groceries at cost with receipts. If you live on Kauaʻi, household cooking is the [personal chef](/personal-chef) line, not that guest week. A lawn or great room of about ten to seventy-five is [staffed catering](/catering). A bar with the supper is the [bar add-on](/bar), quoted in writing, with no bartender hour published.`,
      `20% service and Hawaiʻi GET up to 4.712% are separate lines after whichever service you pick. A 50% deposit waits for a written yes. Gratuity is never required. Hanalei-bridge weather can move a North Shore date. It does not switch you to another service. The names below are live URLs at inquiry. Join the inquiry list on [the quote form](/quote) and request availability. Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'A single Princeville dinner versus a week on the island — which inquiry do I start?',
        a: `One night starts on [what’s included](/private-chef). A retreat week starts on [Stay Chef](/vacation-chef). Both are requests for availability. Name the shore or the reply cannot tell them apart.`,
      },
      {
        q: 'We live on Kauaʻi. Is household cooking the same request as a guest retreat?',
        a: `No. Residents use [household chef](/personal-chef). Guests in a Princeville or Poʻipū rental use Stay Chef. Inquiry stage applies to both. Say that you live there.`,
      },
      {
        q: 'A Poʻipū lawn for forty. Which service owns that?',
        a: `[Staffed catering](/catering), not the villa dinner. Forty seats is a party. Request availability with Poʻipū in the first line so it is not read as a North Shore great room.`,
      },
      {
        q: 'What does inquiry stage mean when I have not chosen a Kauaʻi service yet?',
        a: `You can ask which door fits. You cannot treat the answer as a held date. Join the inquiry list. We write back when a crew can take that shore and that service.`,
      },
      {
        q: 'Hanalei-bridge weather is in the forecast. Which services can still be requested?',
        a: `Any of them, as an inquiry. A closure moves a North Shore dinner, week, or party. It does not cancel the ask, and it does not silently become Poʻipū. Say Hanalei if that is the house.`,
      },
      {
        q: 'Where does a bar add-on go if the supper is already a villa dinner?',
        a: `On the [bar add-on](/bar), quoted in writing, attached to the dinner inquiry. No bartender hour is published. The dinner page keeps the food. Name the pour or it will not be on the reply.`,
      },
      {
        q: 'Both shores in one week. One Kauaʻi service, or two inquiries?',
        a: `One inquiry, two addresses. A Princeville morning and a Poʻipū supper are not one drive. Stay Chef can hold the week only if both days are written. Do not assume we will cross.`,
      },
      {
        q: 'How do I request availability when I only know the Kauaʻi house, not the format?',
        a: `Send the address, the dates, and the seats. Say you have not picked dinner, week, or catering. [Quote form](/quote). Desk: ${desk}. We name the door in the reply. Nothing is charged to ask.`,
      },
    ],
  },
  bigisland: {
    h1: 'West-side services — inquiry dinners, weeks, staffed rooms. Hilo not implied.',
    title: 'Big Island chef services — Kona & Kohala | myCHEF',
    description:
      'Choose a west-side Big Island service at inquiry: a Kona dinner, a Kohala week, household cooking, catering, or a bar. Hilo is not on this list.',
    lede: 'Big Island Expedition services are west-side first and only by request for availability. Pick a Kona or Kohala dinner, a multi-day cook, household cooking, a staffed party, or a bar. Hilo is not on this list.',
    kicker: 'Hawaiʻi Island · Services',
    photo: 'svcIndexBigisland',
    body: [
      `A Kona or Kohala villa dinner is [what’s included](/private-chef): ${biBand} a guest, or from ${biSimple} on the simpler table, groceries inside either band. Several days of cooking on that west-side stay is [Stay Chef](/vacation-chef) from ${biStay} a day, groceries at cost with receipts. If you live in Kona or Waikoloa, the [household chef](/personal-chef) is not that guest expedition. A lawn of about ten to seventy-five is [staffed catering](/catering). A bar with the dinner is the [bar add-on](/bar), quoted in writing. No bartender hour is published. Hilo is not any of these doors.`,
      `20% service and Hawaiʻi GET up to 4.712% are their own lines. A 50% deposit applies only after a written yes. Gratuity is never required. Ironman weeks need the date named early. The list below is west-side URLs at inquiry. Join the inquiry list on [the quote form](/quote) and request availability. Desk: ${desk}.`,
    ],
    faqs: [
      {
        q: 'A Kona villa dinner for eight — which west-side service is the match?',
        a: `The villa dinner on [what’s included](/private-chef). Eight at a Kona or Kohala table is not catering and not a week. Request availability. Do not add Hilo to the same note.`,
      },
      {
        q: 'Kohala for five days of cooking. Stay Chef, or a row of dinners?',
        a: `[Stay Chef](/vacation-chef) if you want a cook on the days of the stay. Separate dinners only if each night is its own event. An expedition week is one inquiry, west side only.`,
      },
      {
        q: 'We live in Waikoloa. Is the household line the same as a guest stay?',
        a: `No. Living there is [household chef](/personal-chef). A rental week on the Kohala Coast is Stay Chef. Say that the house is yours so the inquiry uses the resident door.`,
      },
      {
        q: 'A resort lawn for fifty. Why is that catering and not the dinner page?',
        a: `Fifty guests is a staffed party on [Big Island catering](/catering). The dinner page is the smaller villa table. Both are west-side inquiries. Neither one covers Hilo.`,
      },
      {
        q: 'Where do I add a bar once the west-side dinner is chosen?',
        a: `The [bar add-on](/bar), quoted in writing, on the same inquiry as the dinner. There is no bartender hour to read. The food stays on the dinner page. Name the pour or it is left off.`,
      },
      {
        q: 'Does choosing a service on this Big Island list include Hilo?',
        a: `No. Dinner, Stay Chef, household cooking, catering, and the bar on this page are Kona to Kohala. Hilo is a dedicated east-side day. Picking a service here does not imply it.`,
      },
      {
        q: 'Ironman week. Which service should the inquiry name?',
        a: `Name the service and the race week together: a Kona dinner, a Kohala Stay Chef week, or a lawn party. Roads and shop hours compress. Request availability early. One crew holds one heavy week.`,
      },
      {
        q: 'The resort gate wants a vendor before I know the menu. What do I send?',
        a: `Request availability with the west-side resort, the dates, and the gate rule. You do not need the menu yet. We name dinner, week, or catering in the reply. Hilo gates are a separate message. [Quote form](/quote). Desk: ${desk}.`,
      },
    ],
  },
};
