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
    h1: 'Send the Oahu quote — corridor, kitchen, a written total.',
    title: 'Oahu quote form — corridor, kitchen, written total | myCHEF',
    description:
      'Five fields for an Oahu villa dinner or staffed room. Name Honolulu, Waikīkī, Kailua, North Shore, Kahala, or Ko Olina. A written quote follows.',
    lede:
      'Live corridors, a working stove, dates. We reply in writing.',
    kicker: 'Oʻahu · Quote',
    photo: 'quoteOahu',
    body: [
      `It is how a Kahala or Ko Olina night becomes a written total.`,
      'We cook in Honolulu, Waikīkī, Kailua and Lanikai, North Shore, Kahala and Gold Coast and Ko Olina. Hotel suites without a cooktop are declined.',
      'Five fields. No account. No payment to ask. Fifty percent locks the date only after you accept the written total.',
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
    ],
  },
  maui: {
    h1: 'Send the Maui quote — shore, kitchen, a written total.',
    title: 'Maui quote form — shore, kitchen, written total | myCHEF',
    description:
      'Five fields for a Maui villa dinner or staffed room. Name Wailea, Kāʻanapali, Lahaina, Kīhei, Kapalua, or Makena. Saturday West Maui traffic is planned in.',
    lede:
      'South or West, a working stove, dates. Lahaina is a town — not a second island.',
    kicker: 'Maui · Quote',
    photo: 'quoteMaui',
    body: [
      'We cook in Wailea, Kāʻanapali, Lahaina and West Maui, Kīhei, Kapalua and Makena.',
      'Five fields. No account. Saturday Kāʻanapali nights still need the same window.',
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
    ],
  },
  kauai: {
    h1: 'Send the Kauai inquiry — shore, dates, we write back.',
    title: 'Kauai inquiry form — both shores, written reply | myCHEF',
    description:
      'Inquiry form for Kauai estate dinners. Name Princeville, Poʻipū, Hanalei, or Kapaʻa. Hanalei-bridge weather is a clause. We will not fake a live instant-booking button.',
    lede:
      'North or South, a working stove, dates. Closures reschedule rather than forfeit.',
    kicker: 'Kauaʻi · Inquiry',
    photo: 'quoteKauai',
    body: [
      `The form is the same five fields. The button is not Book now.`,
      'We cook in Princeville, Poʻipū, Hanalei and Kapaʻa.',
      'We log the shore and the dates and write back with what we can staff. No fake roster.',
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
    ],
  },
  bigisland: {
    h1: 'Send the west-side inquiry — Kona–Kohala address, dates.',
    title: 'Big Island chef inquiry — written reply | myCHEF',
    description:
      'Inquiry form for west-side Hawaiʻi Island dinners. Name Kona, Waimea, Waikoloa, or Kohala. East side is a different day. We will not fake a live instant-booking button.',
    lede:
      'West-side address, a working stove, dates. Hilo is not implied.',
    kicker: 'Hawaiʻi Island · Inquiry',
    photo: 'quoteBigisland',
    body: [
      'We cook in Kailua-Kona and Keauhou, Waimea, Waikoloa and Kohala Coast.',
      'We log the west-side address and write back with what we can staff. Crossing the island is a dedicated day.',
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
    ],
  },
};
