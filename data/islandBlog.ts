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
      'Short posts for people already looking at this island’s dinner doors. Not a statewide feed, and not the longer corridor notes on /journal.',
    kicker: 'Oʻahu · Blog',
    photo: 'blogOahu',
    body: [
      'If you want the longer corridor notes, read /journal. This page stays closer to booking questions.',
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
      `This page is the shorter companion.`,
      'Wedding-week pacing and kitchen-constraint notes belong on /journal; this page stays closer to booking questions.',
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
      'If you need the Hanalei-bridge weather note at length, /journal is the better page.',
    ],
  },
  bigisland: {
    h1: 'Hawaiʻi Island blog — Kona first, Hilo later.',
    title: 'Hawaiʻi Island blog — Kona first | myCHEF',
    description:
      'West side first. East side is a different day.',
    lede:
      'Short posts beside west-side kitchens. East side is a different day — that sentence belongs here too.',
    kicker: 'Hawaiʻi Island · Blog',
    photo: 'blogBigisland',
    body: [
      `This page is the shorter companion.`,
      'West-side kitchens and Kohala travel show up in the shorter posts; /journal keeps the longer corridor notes.',
    ],
  },
};
