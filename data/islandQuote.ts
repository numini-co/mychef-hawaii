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
        q: 'Waikīkī hotel room?',
        a: 'If there is no stove, we decline. Residences and villas are the product.',
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
        q: 'Can I move from Wailea to Lahaina after I submit?',
        a: 'Write us. Lahaina is a different town — and the travel line may change.',
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
        q: 'Are you live on Kauaʻi?',
        a: 'Inquiry. We crew when we can staff. We will not invent a now-serving line.',
      },
      {
        q: 'Hanalei this weekend?',
        a: 'Weather can close the road. We reschedule; we do not pretend.',
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
        q: 'Can you cook in Hilo the same day as Waikoloa?',
        a: 'No. Crossing the island is a different day.',
      },
      {
        q: 'Are you are on the west side?',
        a: 'Inquiry. We crew when we can staff.',
      },
    ],
  },
};
