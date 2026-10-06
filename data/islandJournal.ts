import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /journal index documents. Distinct from /blog (short form) and from
 * the hub journal directory. Titles must not use money keywords.
 */

export interface IslandJournalPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
}

export const islandJournal: Record<IslandId, IslandJournalPage> = {
  oahu: {
    h1: 'Oahu journal — corridor notes, not a statewide digest.',
    title: 'Oahu journal — corridor notes | myCHEF',
    description:
      'Not the hub digest.',
    lede:
      'Short notes from the places we cook.',
    kicker: 'Oʻahu · Journal',
    photo: 'journalOahu',
    body: [
      'Pieces stay close to the kitchen: Gold Coast counters, convention-week access, short-stay villas that still have to cook.',
    ],
  },
  maui: {
    h1: 'Maui journal — Wailea, Kāʻanapali, and the week between.',
    title: 'Maui journal — South and West | myCHEF',
    description:
      'Not Oahu, Kauaʻi, or Hawaiʻi Island.',
    lede:
      'Notes from South Maui, West Maui, and wedding-week houses.',
    kicker: 'Maui · Journal',
    photo: 'journalMaui',
    body: [
      'Expect kitchen-constraint notes, wedding-week pacing, and why a Wailea villa is a different night from a Kāʻanapali walk-up.',
    ],
  },
  kauai: {
    h1: 'Kauai journal — North Shore weather and South Shore kitchens.',
    title: 'Kauai journal — both shores | myCHEF',
    description:
      'Not a staffed calendar.',
    lede:
      'Inquiry-first notes from both shores. Private chef Kauai is measured; this page does not pretend we staff every night.',
    kicker: 'Kauaʻi · Journal',
    photo: 'journalKauai',
    body: [
      `This index is the reading list.`,
      'Hanalei-bridge weather and south-shore kitchens show up here because they change whether we can even quote a date.',
    ],
  },
  bigisland: {
    h1: 'Hawaiʻi Island journal — west side first, east side another day.',
    title: 'Hawaiʻi Island journal — west side first | myCHEF',
    description:
      'West side first. Hilo is a different day.',
    lede:
      'Notes from the west side.',
    kicker: 'Hawaiʻi Island · Journal',
    photo: 'journalBigisland',
    body: [
      `This index is the reading list.`,
      'Coffee Act 198 and Ironman weeks live here because they change access, not because they are marketing slogans.',
    ],
  },
};
