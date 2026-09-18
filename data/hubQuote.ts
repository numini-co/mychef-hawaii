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
      'One coordinator, one master quote. Name the first island you will dine on — we sequence the rest. Oʻahu and Maui receive a written quote. Kauaʻi and Hawaiʻi Island stay inquiry.',
    kicker: 'Hawaii desk · Multi-island',
    canonicalIsland: 'root',
  },
};

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
