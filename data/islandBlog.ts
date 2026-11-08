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
      'Short, plain-language posts on Oʻahu home and villa dinners — Honolulu kitchens, timing, cleanup and what goes on the written quote.',
    lede:
      'Short posts in plain language. Longer notes from the island are in the Oahu journal.',
    kicker: 'Oʻahu · Blog',
    photo: 'blogOahu',
    body: [
      'For the longer notes — Gold Coast counters, convention weeks, short-stay villas — read the journal.',
      'New this month: [the Hawaiʻi Kai restaurants guide](/blog/hawaii-kai-restaurants-east-honolulu-guide) — marina dining, Hanauma Bay mornings, Kalanianaʻole traffic, the 30-day rental rule and when a [private chef Honolulu](/private-chef) dinner at the house is better. Recently: [the Kāneʻohe restaurants guide](/blog/kaneohe-restaurants-windward-guide) and [the Oʻahu wedding venues guide](/blog/oahu-wedding-venues-guide).',
    ],
  },
  maui: {
    h1: 'Maui blog — short notes on villa nights.',
    title: 'Maui blog — villa nights | myCHEF',
    description:
      'Short posts on Maui villa dinners in Wailea and Kāʻanapali — timing, kitchens, cleanup and what goes on the written quote.',
    lede:
      'Short posts beside villa nights on Maui. Wailea and Kāʻanapali come up most.',
    kicker: 'Maui · Blog',
    photo: 'blogMaui',
    body: [
      'Short posts from Wailea, Kīhei and West Maui kitchens: breakfast and lunch in the villa, cleanup, groceries at cost, and what goes on the written quote. The longer notes, including the Maui price guide, live in the journal.',
      'New this month: [the Pāʻia restaurants guide](/blog/paia-restaurants-north-shore-maui-guide) — fish counters, cafés and oceanfront dinners on the North Shore, parking, wind, Road to Hāna days and when a [personal chef Maui](/private-chef) dinner at the house is better. Recently: [the Maui wedding venues guide](/blog/maui-wedding-venues-guide), with where [wedding catering Maui](/weddings) fits, and [the Maui grocery stores guide](/blog/maui-grocery-stores-villa-guide).',
    ],
  },
  kauai: {
    h1: 'Kauai blog — inquiry notes, not a staffed calendar.',
    title: 'Kauai blog — inquiry notes | myCHEF',
    description:
      'Short posts for Kauaʻi villa dinners in Princeville and Poʻipū — how inquiry dates work, kitchens, and what the written quote includes.',
    lede:
      'Short posts for guests planning a Kauaʻi dinner. Every date is quoted before a chef is confirmed; Princeville and Poʻipū come up most.',
    kicker: 'Kauaʻi · Blog',
    photo: 'blogKauai',
    body: [
      'If you need the Hanalei-bridge weather note at length, the journal is the better page.',
      'New this month: [the Kauaʻi vacation rentals guide](/blog/kauai-vacation-rentals-kitchen-guide) — where short stays are legal, how to check a permit, which shore to rent on, kitchens and tables for groups, and where a [personal chef Kauai](/private-chef) night fits. Recently: [the Kauaʻi wedding venues guide](/blog/kauai-wedding-venues-guide), with where [Kauai wedding catering](/weddings) fits, and [the Hanapēpē restaurants guide](/blog/hanapepe-restaurants-west-kauai-guide).',
    ],
  },
  bigisland: {
    h1: 'Hawaiʻi Island blog — Kona first, Hilo later.',
    title: 'Hawaiʻi Island blog — Kona first | myCHEF',
    description:
      'Short posts from Hawaiʻi Island west-side kitchens in Kona and Kohala. East-side Hilo dinners are quoted as a separate day.',
    lede:
      'Short posts from west-side kitchens on Hawaiʻi Island. East side is a different day.',
    kicker: 'Hawaiʻi Island · Blog',
    photo: 'blogBigisland',
    body: [
      'West-side kitchens and Kohala travel show up in the shorter posts; the journal keeps the longer notes.',
      'New this month: [the Volcano restaurants guide](/blog/volcano-hawaii-restaurants-guide) — a small village by the national park, early closing, cold wet nights, night glow visits and groceries from Hilo, and why the east side is its own chef day. Recently: [the Big Island wedding venues guide](/blog/big-island-wedding-venues-guide), with where [wedding catering Big Island](/weddings) or a [private chef Kona](/private-chef) fits, and [the Big Island luau guide](/blog/big-island-luau-villa-dinner-guide).',
      'Looking to book rather than read? Dinner prices, dinners from $165 a guest and signature dinners and Stay Chef days are on the [private chef Big Island](/) page, and staffed villa parties for ten to seventy-five are [Big Island catering](/catering).',
    ],
  },
};
