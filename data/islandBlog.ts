import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /blog index documents. Distinct from /journal (longer corridor notes)
 * and from the hub blog directory. Titles must not use money keywords.
 */

export interface IslandBlogPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
}

export const islandBlog: Record<IslandId, IslandBlogPage> = {
  oahu: {
    h1: 'Oahu blog — Honolulu kitchens in plain language.',
    title: 'Oahu blog — Honolulu kitchens | myCHEF',
    description:
      'Not a statewide feed.',
    lede:
      'Not a statewide feed, and not the longer corridor notes on the journal.',
    kicker: 'Oʻahu · Blog',
    photo: 'blogOahu',
    body: [
      'If you want the longer corridor notes, read the journal.',
    ],
  },
  maui: {
    h1: 'Maui blog — villa nights without a statewide feed.',
    title: 'Maui blog — villa nights | myCHEF',
    description:
      'Not a statewide feed.',
    lede:
      'Short posts beside villa nights on this island. Wailea and Kāʻanapali stay named; statewide Hawaii catering does not live here.',
    kicker: 'Maui · Blog',
    photo: 'blogMaui',
    body: [
    ],
  },
  kauai: {
    h1: 'Kauai blog — inquiry notes, not a staffed calendar.',
    title: 'Kauai blog — inquiry notes | myCHEF',
    description:
      'Princeville and Poʻipū named. Not a live roster.',
    lede:
      'Short posts for readers who still need to know we quote before we staff. Princeville and Poʻipū are named; we do not invent volume.',
    kicker: 'Kauaʻi · Blog',
    photo: 'blogKauai',
    body: [
      'If you need the Hanalei-bridge weather note at length, the journal is the better page.',
    ],
  },
  bigisland: {
    h1: 'Hawaiʻi Island blog — Kona first, Hilo later.',
    title: 'Hawaiʻi Island blog — Kona first | myCHEF',
    description:
      'West side first. East side is a different day.',
    lede:
      'Short posts from west-side kitchens on Hawaiʻi Island. East side is a different day.',
    kicker: 'Hawaiʻi Island · Blog',
    photo: 'blogBigisland',
    body: [
      'West-side kitchens and Kohala travel show up in the shorter posts; the journal keeps the longer notes.',
      'Looking to book rather than read? Dinner prices, the ENTRY and CORE bands and Stay Chef days are on the [private chef Big Island](/) page, and staffed villa parties for ten to seventy-five are [Big Island catering](/catering).',
    ],
  },
};
