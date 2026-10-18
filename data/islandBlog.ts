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
      'New this month: [planning Thanksgiving dinner on Oʻahu](/blog/thanksgiving-dinner-oahu) — turkey, oven limits and timing when a [private chef Honolulu](/private-chef) cooks the holiday at your house — plus [the Ko Olina restaurants dining guide](/blog/ko-olina-restaurants-dining-guide).',
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
      'New this month: [Thanksgiving dinner on Maui](/blog/thanksgiving-dinner-maui) — resort buffet, pick-up meal or a [personal chef Maui](/private-chef) cooking in the villa — plus [the Kīhei restaurants dining guide](/blog/kihei-restaurants-dining-guide).',
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
      'New this month: [planning a Kauai elopement](/blog/kauai-elopement-dinner-guide) — license, beach permits, North or South Shore, and a [personal chef Kauai](/private-chef) dinner after the vows — plus [the Poʻipū restaurants dining guide](/blog/poipu-restaurants-dining-guide).',
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
      'New this month: [planning a Big Island elopement](/blog/big-island-elopement-guide) — Kona or Hilo side, permits, and a [private chef Kona](/private-chef) dinner at the rental after the vows — plus [Kona farmers markets](/blog/kona-farmers-market-villa-week).',
      'Looking to book rather than read? Dinner prices, dinners from $165 a guest and signature dinners and Stay Chef days are on the [private chef Big Island](/) page, and staffed villa parties for ten to seventy-five are [Big Island catering](/catering).',
    ],
  },
};
