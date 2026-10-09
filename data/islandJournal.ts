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
    h1: 'Oahu journal — notes from the kitchens we cook in.',
    title: 'Oahu journal — villa kitchen notes | myCHEF',
    description:
      'Notes from Oʻahu villa and home kitchens — Kahala and Gold Coast counters, Waikīkī apartments, Ko Olina villas — and how a written quote is built.',
    lede:
      'Short notes from the places we cook.',
    kicker: 'Oʻahu · Journal',
    photo: 'journalOahu',
    body: [
      'Pieces stay close to the kitchen: Gold Coast counters, convention-week access, short-stay villas that still have to cook.',
      'Start with the practical ones: how to hire a chef on Oʻahu, what a night includes, what an Oʻahu chef night costs line by line, and how far ahead to book in the December–March and wedding peaks. Each note links to the page that actually quotes the night, so reading never replaces a written total.',
    ],
  },
  maui: {
    h1: 'Maui journal — Wailea, Kāʻanapali, and the week between.',
    title: 'Maui journal — South and West | myCHEF',
    description:
      'Notes from Maui villa kitchens in Wailea and Kāʻanapali — kitchen limits, wedding-week pacing and how a written quote is built.',
    lede:
      'Notes from South Maui, West Maui, and wedding-week houses.',
    kicker: 'Maui · Journal',
    photo: 'journalMaui',
    body: [
      'Expect kitchen-constraint notes, wedding-week pacing, and why a Wailea villa is a different night from a Kāʻanapali walk-up.',
      'The price guide walks a Maui dinner from the $225–$375 a guest band to the final total, including Upcountry travel and the Saturday West Maui drive. The hiring and booking notes cover what to send so the menu draft fits the villa you rented.',
    ],
  },
  kauai: {
    h1: 'Kauai journal — North Shore weather and South Shore kitchens.',
    title: 'Kauai journal — both shores | myCHEF',
    description:
      'Notes from Kauaʻi kitchens on both shores — Hanalei-bridge weather in the north, Poʻipū villa kitchens in the south, and how inquiry dates are confirmed.',
    lede:
      'Inquiry-first notes from both shores. Every date is quoted in writing before a chef is confirmed.',
    kicker: 'Kauaʻi · Journal',
    photo: 'journalKauai',
    body: [
      `This index is the reading list.`,
      'Hanalei-bridge weather and south-shore kitchens show up here because they change whether we can even quote a date.',
      'If you are planning rather than browsing, read three notes first: how to hire a chef on Kauaʻi (name the shore, then the house), what a Kauaʻi dinner costs with shore travel, and how far ahead to enquire for Far-North dates that need 72 hours’ notice.',
    ],
  },
  bigisland: {
    h1: 'Hawaiʻi Island journal — west side first, east side another day.',
    title: 'Hawaiʻi Island journal — west side first | myCHEF',
    description:
      'Notes from Hawaiʻi Island west-side kitchens in Kona and Kohala — Ironman weeks, Kona coffee labeling, and why Hilo is quoted as its own day.',
    lede:
      'Notes from the west side.',
    kicker: 'Hawaiʻi Island · Journal',
    photo: 'journalBigisland',
    body: [
      `This index is the reading list.`,
      'Coffee Act 198 and Ironman weeks live here because they change access, not because they are marketing slogans.',
      'Planning a stay on the Kona side? The cost guide shows ENTRY from $165 and CORE $210–$325 a guest how the Waimea surcharge works and why Hilo is quoted as its own day. The hiring note covers the address, the kitchen and the five fields; the booking note covers Ironman weeks and east-side days.',
    ],
  },
};
