import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /trust documents. Distinct from /what-we-dont-do (claim list),
 * /legal (GET and clauses), and hub /trust. Titles must not use money keywords.
 */

export interface IslandTrustPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandTrust: Record<IslandId, IslandTrustPage> = {
  oahu: {
    h1: 'Quotes-open proof — published Kahala-to-Ko Olina prices. Zero invented Honolulu reviews.',
    title: 'Oahu trust — published prices, no fake reviews | myCHEF',
    description:
      'Oʻahu quotes-open register: published town and west prices, written quotes, no invented Honolulu reviews.',
    lede: 'Oʻahu quotes-open register: published town and west prices, written quotes, no invented Honolulu reviews.',
    kicker: 'Oʻahu · Trust',
    photo: 'trustOahu',
    body: [
      'Hawaiʻi guest reviews: none yet on this island. They publish after verified events — never bought, never written in-house. Proof today is the rate card, the sample menu, cleanup, and a written quote.',
      'Named Kahuku or Waimānalo farms print only after written verification. We do not invent a street office. The published line is (808) 468-7748.',
    ],
    faqs: [
    ],
  },
  maui: {
    h1: 'Wailea-to-Kapalua quotes stay open. Reviews wait for verified villa nights.',
    title: 'Maui proof — prices on paper, no star ratings | myCHEF',
    description:
      'Maui quotes-open proof: Wailea and West villa-week prices, written quotes, no invented Wailea reviews.',
    lede: 'Maui quotes-open proof: Wailea and West villa-week prices, written quotes, no invented Wailea reviews.',
    kicker: 'Maui · Trust',
    photo: 'trustMaui',
    body: [
      'Hawaiʻi guest reviews: none yet on this island. They publish after verified events — never bought, never written in-house. Proof today is the rate card, the sample menu, cleanup, and a written quote.',
      'Named Kula or Hāna farms print only after written verification. Lahaina is a town on this site, not a mystery fee.',
    ],
    faqs: [
    ],
  },
  kauai: {
    h1: 'Inquiry proof on both shores — published bands, no instant booking, no invented Princeville reviews.',
    title: 'Kauai trust — both-shore bands, no invented reviews | myCHEF',
    description:
      'Kauaʻi inquiry register: both-shore published bands, no instant booking button, no invented Princeville reviews.',
    lede: 'Kauaʻi inquiry register: both-shore published bands, no instant booking button, no invented Princeville reviews.',
    kicker: 'Kauaʻi · Trust',
    photo: 'trustKauai',
    body: [
      `Inquiry stage.`,
      'Hawaiʻi guest reviews: none yet on this island. They publish after verified events. Proof today is published starting prices and a written inquiry reply. A named shore is not a live instant-booking button.',
      'Named Kīlauea or Kōloa farms print only after written verification. Hanalei-bridge weather is a clause, not a shrug.',
    ],
    faqs: [
      {
        q: 'Are you pretending to be live?',
        a: 'No. Inquiry. Send the dates on the quote form. We write back when we can staff.',
      },
    ],
  },
  bigisland: {
    h1: 'Kona–Kohala inquiry proof — west-side bands, Hilo never implied, no invented reviews.',
    title: 'Big Island trust — real prices, no fake reviews | myCHEF',
    description:
      'Kona–Kohala inquiry register: west-side bands, Hilo never implied, no invented Kona reviews.',
    lede: 'Kona–Kohala inquiry register: west-side bands, Hilo never implied, no invented Kona reviews.',
    kicker: 'Hawaiʻi Island · Trust',
    photo: 'trustBigisland',
    body: [
      `West side first.`,
      'Hawaiʻi guest reviews: none yet on this island. They publish after verified events. Proof today is published starting prices and a written inquiry reply. Hilo is a dedicated day — never a same-day round trip.',
      'Produce farm names print only after written verification.',
    ],
    faqs: [
    ],
  },
};
