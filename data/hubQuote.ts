import type { IslandId } from './islands';
import { islandOrder } from './islands';

export type HubQuoteKey = 'default' | IslandId | 'multi';

export interface HubQuoteCopy {
  key: HubQuoteKey;
  title: string;
  description: string;
  h1: string;
  lede: string;
  kicker: string;
  /** Island host to canonicalize to, or hub `/quote`. */
  canonicalIsland: IslandId | 'root';
}

/**
 * Hub `/quote` variants. Distinct from each island host `/quote` document.
 * Query `?island=` and `?itinerary=multi` change title / H1 / lede.
 * Canonical: island set → that island host `/quote`; otherwise hub `/quote`.
 */
export const hubQuoteVariants: Record<HubQuoteKey, HubQuoteCopy> = {
  default: {
    key: 'default',
    title: 'Get a quote — myCHEF Hawaii',
    description: 'Five fields, two minutes. WhatsApp or this form. Typical reply in Hawaii business hours.',
    h1: 'Tell us where you’re dining.',
    lede: 'Five fields. A human reply. Typical response in Hawaii business hours.',
    kicker: 'Four islands',
    canonicalIsland: 'root',
  },
  oahu: {
    key: 'oahu',
    title: 'Hawaii desk — Oʻahu villa quote, written total | myCHEF',
    description:
      'Statewide form aimed at an Oʻahu house. Corridor, kitchen, dates. A written quote follows. Prefer the Oʻahu desk when the villa is already chosen.',
    h1: 'Oʻahu villa — start the statewide quote here.',
    lede:
      'This is the Hawaii desk, not the Oʻahu host form. Name Honolulu, Waikīkī, Kahala, Kailua, Ko Olina, or the North Shore. Open oahu.mychef-hawaii.com/quote when you want that island desk.',
    kicker: 'Hawaii desk · Oʻahu first',
    canonicalIsland: 'oahu',
  },
  maui: {
    key: 'maui',
    title: 'Hawaii desk — Maui villa quote, written total | myCHEF',
    description:
      'Statewide form aimed at a Maui house. Shore, kitchen, dates. A written quote follows. Prefer the Maui desk when the villa is already chosen.',
    h1: 'Maui villa — start the statewide quote here.',
    lede:
      'This is the Hawaii desk, not the Maui host form. Name Wailea, Kīhei, Kāʻanapali, Kapalua, or Makena. Open maui.mychef-hawaii.com/quote when you want that island desk.',
    kicker: 'Hawaii desk · Maui first',
    canonicalIsland: 'maui',
  },
  kauai: {
    key: 'kauai',
    title: 'Hawaii desk — Kauaʻi inquiry, both shores | myCHEF',
    description:
      'Statewide inquiry form aimed at Kauaʻi. Log the shore and dates. We write back when a crew exists. Not a Book-now button. Prefer the Kauaʻi desk when the house is already chosen.',
    h1: 'Kauaʻi inquiry — log the shore on the Hawaii form.',
    lede:
      'Inquiry, not instant book. Name Princeville, Poʻipū, Hanalei, or Kapaʻa. We log the shore and write back when we can staff. Open kauai.mychef-hawaii.com/quote for the island inquiry desk.',
    kicker: 'Hawaii desk · Kauaʻi inquiry',
    canonicalIsland: 'kauai',
  },
  bigisland: {
    key: 'bigisland',
    title: 'Hawaii desk — Hawaiʻi Island west-side inquiry | myCHEF',
    description:
      'Statewide inquiry form aimed at west-side Hawaiʻi Island. Log Kona–Kohala dates. We write back when a crew exists. Not a Book-now button. Prefer the island desk when the house is already chosen.',
    h1: 'West-side inquiry — start on the Hawaii form.',
    lede:
      'Inquiry, not instant book. Name Kona, Waimea, Waikoloa, or Kohala. East side is a different day. Open bigisland.mychef-hawaii.com/quote for the west-side inquiry desk.',
    kicker: 'Hawaii desk · Hawaiʻi Island inquiry',
    canonicalIsland: 'bigisland',
  },
  multi: {
    key: 'multi',
    title: 'Multi-island quote — one coordinator across islands | myCHEF',
    description:
      'One coordinator across islands. Resident chefs cook on each island — no fly-in surcharge. Tell us the itinerary; we sequence the crews. Same five fields.',
    h1: 'One coordinator across islands.',
    lede:
      'One coordinator. One written total. Name the first island and each later shore. We will not cook two islands the same day. Oʻahu and Maui get a quote; Kauaʻi and Hawaiʻi Island stay inquiry. Bands: /pricing.',
    kicker: 'Hawaii desk · Multi-island',
    canonicalIsland: 'root',
  },
};

/**
 * Hub `/quote?itinerary=multi` accordion + FAQPage.
 * Island money keywords stay on island hosts. This URL owns the itinerary.
 */
export const hubMultiQuoteFaqs: { q: string; a: string }[] = [
  {
    q: 'One coordinator — one written total?',
    a: 'Yes. One Hawaii desk sequences a resident crew on each island and sends one written total. We do not fly one chef island-to-island. Oʻahu and Maui get a quote now. Kauaʻi and Hawaiʻi Island stay on the inquiry list. 20% service and Hawaiʻi GET up to 4.712% print as their own lines.',
  },
  {
    q: 'Why decline same-day inter-island cooking?',
    a: 'A same-day hop skips a shop, a range, and a cleanup. A crew that cooks dinner on Oʻahu cannot land a Maui villa the same calendar. We sequence nights. We will not sell a same-day inter-island kitchen.',
  },
  {
    q: 'How should dates and shores be listed?',
    a: 'Name the first island you dine on, then each later shore and date — Wailea then Princeville, or Kahala then Kona. Put the house type. An ambiguous “Hawaii week” waits. Island desks: oahu.mychef-hawaii.com/quote, maui.mychef-hawaii.com/quote, kauai.mychef-hawaii.com/quote, bigisland.mychef-hawaii.com/quote.',
  },
  {
    q: 'Do per-island published bands still apply?',
    a: 'Yes. Each night uses that island’s published card — we do not invent a multi-island midpoint. Oʻahu $195–$290. Maui and Kauaʻi $225–$375. Hawaiʻi Island CORE $210–$325, ENTRY from $165. Stay Chef from: Oʻahu $1,250 / Maui $1,550 / Kauaʻi $1,650 / Hawaiʻi Island $1,450. Line-by-line: /pricing.',
  },
  {
    q: 'Kauaʻi or Hawaiʻi Island on the itinerary?',
    a: 'Those islands stay inquiry-stage even inside a multi-island week. We log the shore and dates and write back when a crew exists. Not a Book-now. Oʻahu and Maui nights on the same itinerary still get a written quote. Inquiry desks: kauai.mychef-hawaii.com/quote and bigisland.mychef-hawaii.com/quote.',
  },
  {
    q: 'What happens after I submit?',
    a: 'A coordinator in Hawaii Standard Time replies on a working day — typically within one business day. You get a sequence, a crew plan, and one written total with 20% service and GET up to 4.712% on their own lines. No account. No payment to ask.',
  },
  {
    q: 'If the house is already chosen, which form?',
    a: 'This hub form is the multi-island coordinator. When the villa is already on one island, open that host quote: oahu.mychef-hawaii.com/quote, maui.mychef-hawaii.com/quote, kauai.mychef-hawaii.com/quote, or bigisland.mychef-hawaii.com/quote. Those pages keep island keyword ownership. This URL keeps the itinerary.',
  },
];

export function isIslandQuery(value: string | undefined | null): value is IslandId {
  return Boolean(value && (islandOrder as string[]).includes(value));
}

export function parseHubQuoteSearch(
  search: string | URLSearchParams | { island?: string; itinerary?: string } | null | undefined,
): HubQuoteCopy {
  let island = '';
  let itinerary = '';
  if (!search) return hubQuoteVariants.default;
  if (typeof search === 'string') {
    const q = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search);
    island = q.get('island') ?? '';
    itinerary = q.get('itinerary') ?? '';
  } else if (search instanceof URLSearchParams) {
    island = search.get('island') ?? '';
    itinerary = search.get('itinerary') ?? '';
  } else {
    island = search.island ?? '';
    itinerary = search.itinerary ?? '';
  }
  if (itinerary === 'multi') return hubQuoteVariants.multi;
  if (isIslandQuery(island)) return hubQuoteVariants[island];
  return hubQuoteVariants.default;
}
