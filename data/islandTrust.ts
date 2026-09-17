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
    title: 'Oʻahu quotes-open register — prices on paper, no invented reviews | myCHEF',
    description:
      'Oʻahu quotes-open register: published town and west prices, written quotes, no invented Honolulu reviews. Distinct from /what-we-dont-do and hub /trust.',
    lede:
      '/what-we-dont-do is the claim list. Hub /trust is statewide. This page is quotes-open Oʻahu proof — prices we publish, reviews we will not invent, farm names only after writing.',
    kicker: 'Oʻahu · Trust',
    photo: 'trustOahu',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. This register does not steal that title.`,
      'Hawaiʻi guest reviews: none yet on this island. They publish after verified events — never bought, never written in-house. Proof today is the rate card, the sample menu, cleanup, and a written quote.',
      'Named Kahuku or Waimānalo farms print only after written verification — /blog/named-farms. We do not invent a street office. The published line is (808) 468-7748.',
    ],
    faqs: [
      {
        q: 'Same as /what-we-dont-do?',
        a: 'That page is the claim list. This page is the Oahu proof register — what we can show today.',
      },
      {
        q: 'Same as hub /trust?',
        a: 'The hub is statewide. This page is the Oahu register.',
      },
    ],
  },
  maui: {
    h1: 'Wailea-to-Kapalua quotes stay open. Reviews wait for verified villa nights.',
    title: 'Maui quotes-open proof — Wailea card, no invented reviews | myCHEF',
    description:
      'Maui quotes-open proof: Wailea and West villa-week prices, written quotes, no invented Wailea reviews. Distinct from /what-we-dont-do and hub /trust.',
    lede:
      '/what-we-dont-do is the claim list. Hub /trust is statewide. This page is quotes-open Maui proof — villa-week prices we publish, reviews we will not invent, Upcountry farm names only after writing.',
    kicker: 'Maui · Trust',
    photo: 'trustMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. This register does not steal that title.`,
      'Hawaiʻi guest reviews: none yet on this island. They publish after verified events — never bought, never written in-house. Proof today is the rate card, the sample menu, cleanup, and a written quote.',
      'Named Kula or Hāna farms print only after written verification — /blog/named-farms. Lahaina is a town on this host, not a mystery fee.',
    ],
    faqs: [
      {
        q: 'Same as /what-we-dont-do?',
        a: 'That page is the claim list. This page is the Maui proof register — what we can show today.',
      },
      {
        q: 'Same as hub /trust?',
        a: 'The hub is statewide. This page is the Maui register.',
      },
    ],
  },
  kauai: {
    h1: 'Inquiry proof on both shores — published bands, no Book-now, no invented Princeville reviews.',
    title: 'Kauaʻi inquiry register — both-shore bands, no invented reviews | myCHEF',
    description:
      'Kauaʻi inquiry register: both-shore published bands, no Book-now button, no invented Princeville reviews. Distinct from /what-we-dont-do and hub /trust.',
    lede:
      '/what-we-dont-do is the claim list. Hub /trust is statewide. This page is both-shore inquiry proof — bands we publish, a roster we will not fake, reviews we will not invent.',
    kicker: 'Kauaʻi · Trust',
    photo: 'trustKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This register does not steal that title. Inquiry stage.`,
      'Hawaiʻi guest reviews: none yet on this island. They publish after verified events. Proof today is published starting prices and a written inquiry reply. A named shore is not a live Book-now button.',
      'Named Kīlauea or Kōloa farms print only after written verification — /blog/named-farms. Hanalei-bridge weather is a clause, not a shrug — /hanalei-bridge.',
    ],
    faqs: [
      {
        q: 'Same as /what-we-dont-do?',
        a: 'That page is the claim list. This page is the Kauai proof register at inquiry.',
      },
      {
        q: 'Are you pretending to be live?',
        a: 'No. Inquiry. Send the dates on /quote. We write back when we can staff.',
      },
    ],
  },
  bigisland: {
    h1: 'Kona–Kohala inquiry proof — west-side bands, Hilo never implied, no invented reviews.',
    title: 'Kona–Kohala inquiry register — west-side proof, no invented reviews | myCHEF',
    description:
      'Kona–Kohala inquiry register: west-side bands, Hilo never implied, no invented Kona reviews. Distinct from /what-we-dont-do, /coffee-act-198, and hub /trust.',
    lede:
      '/what-we-dont-do is the claim list. /coffee-act-198 is the origin rule. This page is Kona–Kohala inquiry proof — bands we publish, an east-side day we will not pretend is Kona.',
    kicker: 'Hawaiʻi Island · Trust',
    photo: 'trustBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) stays a dinner door. This register does not steal that title. West side first.`,
      'Hawaiʻi guest reviews: none yet on this island. They publish after verified events. Proof today is published starting prices and a written inquiry reply. Hilo is a dedicated day — /east-side — never a same-day round trip.',
      'Named coffee follows Act 198 — /coffee-act-198. Produce farm names print only after written verification — /blog/named-farms.',
    ],
    faqs: [
      {
        q: 'Same as /what-we-dont-do?',
        a: 'That page is the claim list. This page is the west-side proof register at inquiry.',
      },
      {
        q: 'Same as /coffee-act-198?',
        a: 'That page is the coffee origin rule. This page is the broader honesty register.',
      },
    ],
  },
};
