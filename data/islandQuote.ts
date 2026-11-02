import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /quote documents. Distinct from /help/getting-started (first-booking
 * checklist) and from the hub form. Titles must not use money keywords.
 */

export interface IslandQuotePage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandQuote: Record<IslandId, IslandQuotePage> = {
  oahu: {
    h1: 'Request a written quote for an Oʻahu kitchen.',
    title: 'Request a private chef quote on Oʻahu | myCHEF',
    description:
      'Request a written Oʻahu quote. Name the corridor, the kitchen, and tower access. The reply lists the rate-card band, the fee lines, and what happens next.',
    lede: 'Honolulu to Ko Olina, a working stove, dates. We reply in writing.',
    kicker: 'Oʻahu · Quote',
    photo: 'quoteOahu',
    body: [
      'Put the dates, or mark them flexible, plus the party size and the service, in the five fields. In the note, name the corridor: Honolulu, Waikīkī, Kahala and Gold Coast, Kailua and Lanikai, the North Shore, or Ko Olina. When the kitchen is in a tower or a condo, add the freight window or the parking rule that building already uses. A hotel suite without a cooktop is declined. No account. No payment to ask.',
      'The written reply lists the rate-card band for the Oʻahu service you chose. A 20% service charge and Hawaiʻi GET up to 4.712% print on their own lines. A 50% deposit is named and holds the date only after you accept the written total. Gratuity is never required. If the house sits outside the base, travel is its own line. The amount is on [pricing](/pricing).',
      'Send the house once it is held. The desk replies in Hawaii business hours. The menu draft follows about 48 hours after the note is complete. A tower freight window belongs in that note. A verbal yes does not hold the calendar.',
    ],
    faqs: [
      {
        q: 'What should I put on the Oʻahu form?',
        a: 'The form already sits on Oʻahu. Add the dates or mark them flexible, the party size, the service, your name, and one way to reach you. No account and no payment. Name Honolulu, Kahala, Kailua, Ko Olina, or a North Shore day in the note you send with it.',
      },
      {
        q: 'What does the written Oʻahu reply include?',
        a: 'The rate-card band for the service you chose, then a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. A 50% deposit is named and holds the date only after you accept. Gratuity is never required. North Shore travel, when it applies, is its own line.',
      },
      {
        q: 'When should I send Honolulu or Ko Olina dates?',
        a: 'Send them once the house is held. The desk replies in Hawaii business hours. The menu draft follows about 48 hours after the note is complete. A tower freight window belongs in that note. A verbal yes does not hold the calendar.',
      },
      {
        q: 'Can I use WhatsApp or the phone instead of the form?',
        a: 'Call +1 (808) 468-7748, email quotes@mychef-hawaii.com, or WhatsApp https://wa.me/18084687748. Send the same facts the form asks for: dates, party size, service, and the neighborhood. Quotes are open. Request a written quote.',
      },
      {
        q: 'What building or condo access belongs in an Oʻahu request?',
        a: 'Put the freight window, parking, or loading rule the building already uses in the same note as the address when the kitchen is in a Honolulu tower or a condo. A hotel suite without a cooktop is declined. Name Kahala, Kailua, Ko Olina, or a North Shore day beside that access note.',
      },
      {
        q: 'Does sending the Oʻahu form hold a Kahala or Ko Olina date?',
        a: 'Sending the form does not hold the date. The desk replies in Hawaii business hours, and the menu draft follows about 48 hours after the note is complete. A 50% deposit holds the calendar only after you accept the written total. A verbal yes does not hold it.',
      },
    ],
  },
  maui: {
    h1: 'Request a written quote for a Maui villa week.',
    title: 'Request a written villa quote on Maui | myCHEF',
    description:
      'Request a written Maui villa quote. Name the shore, arrival night, and the kitchen. The reply lists the rate-card band, the fee lines, and the next step.',
    lede: 'South or West, a working stove, dates. Lahaina is a town — not a second island.',
    kicker: 'Maui · Quote',
    photo: 'quoteMaui',
    body: [
      'Name the shore with the five fields: Wailea, Kāʻanapali, Lahaina and West Maui, Kīhei, Kapalua, or Makena. Add the dates, or mark the week flexible, the party size, and whether arrival night is in the stay. Saturday crossing time between the south shore and West Maui belongs in that same note. No account. No payment to ask.',
      'A Wailea or Kapalua total lists the rate-card band, then service at 20% and Hawaiʻi GET up to 4.712%, each on its own line. A 50% deposit holds the dates after you accept. Gratuity is never required. Arrival night is its own line when you asked for it. Travel outside the base is its own line. Read the amount on [pricing](/pricing).',
      'Send the week when the villa contract is signed. We reply in Hawaii business hours. The menu draft follows about 48 hours after a complete request. A verbal yes does not hold the week. Saturday Kāʻanapali nights still need the same window.',
    ],
    faqs: [
      {
        q: 'What belongs in a Maui villa note?',
        a: 'Dates or flexible dates, party size, the service, your name, and one contact channel. The form is already on Maui. Add the shore in the message you send with it: Wailea, Kīhei, Kāʻanapali, Kapalua, or Makena. No account. No payment to ask.',
      },
      {
        q: 'What lines come back on a Wailea or Kapalua total?',
        a: 'The rate-card band, then service at 20% and Hawaiʻi GET up to 4.712%, each on its own line. A 50% deposit holds the dates after you accept. Gratuity is never required. Arrival night is its own line when you asked for it. Upcountry or Pāʻia travel is confirmed on that same total.',
      },
      {
        q: 'When should I send arrival-week dates?',
        a: 'Send them when the villa contract is signed. We reply in Hawaii business hours. The menu draft follows about 48 hours after a complete request. Saturday crossing time belongs in the note. A verbal yes does not hold the week.',
      },
      {
        q: 'How do I use the phone or WhatsApp for a Maui week?',
        a: 'Call +1 (808) 468-7748, email quotes@mychef-hawaii.com, or WhatsApp https://wa.me/18084687748. Name the shore, the dates, the party size, and whether arrival night is in the week. Quotes are open. Request a written quote.',
      },
      {
        q: 'How do I time arrival night on a Wailea or Kapalua week?',
        a: 'Name the landing day and say whether the first dinner is that night. Arrival night is its own line when you asked for it. Saturday crossing time between Wailea and Kapalua belongs in the same note. We reply in Hawaii business hours. A verbal yes does not hold the week.',
      },
      {
        q: 'What should a Maui villa note say about the kitchen?',
        a: 'Name the shore and say the cooktop and fridge will be free for the hours you want cooked. A resort room with a minibar is declined. The wind plan for an open lānai can sit in that same note. Quotes are open once the villa contract is signed.',
      },
    ],
  },
  kauai: {
    h1: 'Request Kauaʻi availability — shore, dates, a written reply.',
    title: 'Request private chef availability on Kauaʻi | myCHEF',
    description:
      'Request private chef availability on Kauaʻi. Name the shore, rain, or a Hanalei-bridge date. The written reply lists the band and the fee lines.',
    lede: 'North or South, a working stove, dates. Request availability. Closures reschedule rather than forfeit.',
    kicker: 'Kauaʻi · Availability',
    photo: 'quoteKauai',
    body: [
      'Request availability with the shore, the dates, the party size, and the service. Name Princeville, Hanalei, Poʻipū, or Kapaʻa in the note. If the house is north of the Hanalei bridge, say so, and say whether rain may close the road. The button is not Book now. A request is not a held crew.',
      'When that shore can be cooked, the written reply lists the rate-card band, then 20% service and Hawaiʻi GET up to 4.712% as their own lines. A 50% deposit follows a written yes. Gratuity is never required. Shore travel outside the base is its own line before any deposit. The amount is on [pricing](/pricing).',
      'Send the dates as soon as the house is held. Hawaii business hours bring a written total when we can staff. The draft follows about 48 hours after the request is complete. A far-north house also keeps the 72-hour notice and the bridge clause. We log the shore and write back with what we can staff. Nothing is confirmed until the written reply names the shore.',
    ],
    faqs: [
      {
        q: 'What do I put in a Kauaʻi availability request?',
        a: 'Dates or flexible dates, party size, the service, your name, and one contact channel. The form is already on Kauaʻi. Name Princeville, Hanalei, Poʻipū, or Kapaʻa with it. Request availability. A request is not a held crew.',
      },
      {
        q: 'What does the Kauaʻi written reply list?',
        a: 'The rate-card band for that service, then 20% service and Hawaiʻi GET up to 4.712% as their own lines. A 50% deposit follows a written yes. Gratuity is never required. Shore travel, when the house is outside Līhuʻe and Kapaʻa, is its own line before any deposit.',
      },
      {
        q: 'When should I send Princeville or Poʻipū dates?',
        a: 'Send them as soon as the house is held. If that shore can be cooked, Hawaii business hours bring a written total. The draft follows about 48 hours after the request is complete. A far-north house also keeps the 72-hour notice and the bridge clause.',
      },
      {
        q: 'How do I request availability by phone or WhatsApp?',
        a: 'WhatsApp https://wa.me/18084687748 is the fastest thread if the estate is already held. Phone +1 (808) 468-7748 and quotes@mychef-hawaii.com reach the same desk. Nothing is confirmed until the written reply names the shore.',
      },
      {
        q: 'What do I write if rain or the Hanalei bridge may close the date?',
        a: 'Name the shore and say the house is north of the bridge if it is. A closure reschedules the night rather than forfeiting it. A far-north house keeps the 72-hour notice and the bridge clause. Request availability. A named shore is not a held crew.',
      },
      {
        q: 'Is a Poʻipū availability request different from Princeville?',
        a: 'Both shores use one availability request, and you name which shore. Poʻipū still needs the indoor table named if rain is likely. Princeville and Hanalei need the bridge in the note. We write back with what we can staff. Nothing is confirmed until the reply names the shore.',
      },
    ],
  },
  bigisland: {
    h1: 'Join the inquiry list for Kona–Kohala dates.',
    title: 'Join the Kona–Kohala chef inquiry list | myCHEF',
    description:
      'Join the inquiry list for a Kona–Kohala dinner. Hilo is a separate day. The reply lists the band and the fee lines when that west-side day can be staffed.',
    lede: 'West-side address, a working stove, dates. Join the inquiry list. Hilo is not implied.',
    kicker: 'Hawaiʻi Island · Inquiry',
    photo: 'quoteBigisland',
    body: [
      'Join the inquiry list with a west-side address. The fields are the dates, the party size, the service, your name, and one contact. Write Kailua-Kona, Keauhou, Waikoloa, Waimea, or the Kohala Coast in the note, and flag Ironman if those roads will be tight. Leave Hilo off that note. An inquiry is not a held crew. There is no instant-booking button.',
      'When that west-side day can be staffed, the reply lists the rate-card band, then a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. A 50% deposit follows a written yes. Gratuity is never required. Travel outside the base is its own line. The amount, and the simpler open table published only on this island, are on [pricing](/pricing).',
      'Send the note once the west-side house is held. Hawaii business hours bring a written total if that day can be staffed. The draft follows about 48 hours after the note is complete. Crossing to Hilo is a dedicated day, not a line on the Kona night.',
    ],
    faqs: [
      {
        q: 'What do I put on a west-side inquiry?',
        a: 'Dates or flexible dates, party size, the service, your name, and one contact channel. The form is already on Hawaiʻi Island. Write Kona, Waikoloa, Kohala, or Waimea with it. Leave Hilo off that note. Join the inquiry list. An inquiry is not a held crew.',
      },
      {
        q: 'What does the Kona or Kohala reply include?',
        a: 'The rate-card band, then a 20% service charge and Hawaiʻi GET up to 4.712% on their own lines. A 50% deposit follows a written yes. Gratuity is never required. The simpler open table, published only on this island, is on the pricing page if that is the service you chose.',
      },
      {
        q: 'When should I send Kona dates, including Ironman week?',
        a: 'Send them once the west-side house is held. If that day can be staffed, Hawaii business hours bring a written total. The draft follows about 48 hours after the note is complete. Flag Ironman in the note. Those weeks compress the Kona calendar.',
      },
      {
        q: 'How do I join the inquiry list by phone or WhatsApp?',
        a: 'Call +1 (808) 468-7748, email quotes@mychef-hawaii.com, or WhatsApp https://wa.me/18084687748. Put the west-side town in the first line and join the inquiry list. A Hilo or Volcano address needs its own note. There is no instant-booking button.',
      },
      {
        q: 'Should Hilo sit on the same request as Kona or Kohala?',
        a: 'Leave Hilo off the west-side note. Kona, Waikoloa, Kohala, and Waimea are the inquiry you join first. Hilo is a separate dedicated day and needs its own note. Crossing the island is not added onto the Kona night. Join the inquiry list for the side the house is on.',
      },
      {
        q: 'What does an Ironman-week note need that a quiet Kona week does not?',
        a: 'Flag Ironman if the dates touch the race. Those weeks compress the Kona calendar. Name the town in the first line: Kailua-Kona, Keauhou, Waikoloa, or the Kohala Coast. Join the inquiry list once the house is held. An inquiry is not a held crew.',
      },
    ],
  },
};
