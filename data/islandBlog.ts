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
      'New this month: [the Oʻahu sunset dinner guide](/blog/oahu-sunset-dinner-guide) — which coasts face the sunset, sunset times by month, why we cook at the house rather than on a public beach, and a [private chef Honolulu](/private-chef) table on your lānai. Recently: [the Oʻahu grocery delivery guide](/blog/oahu-grocery-delivery-villa-guide), [the Oʻahu bachelorette party guide](/blog/oahu-bachelorette-party-guide) and [the Kahala restaurants guide](/blog/kahala-diamond-head-restaurants-guide).',
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
      'New this month: [the Maui family vacation guide](/blog/maui-family-vacation-guide) — the coast to stay on with kids, Haleakalā and ʻĪao Valley reservations, ocean safety, feeding the group and a [personal chef Maui](/private-chef) dinner at the house. Recently: [Maui in December](/blog/maui-in-december-guide), [the Maui brunch guide](/blog/maui-brunch-guide) and [the Makawao restaurants guide](/blog/makawao-restaurants-upcountry-maui-guide).',
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
      'New this month: [New Year’s Eve on Kauaʻi](/blog/new-years-eve-kauai-dinner-guide) — what the night is like on each shore, county fireworks and permit rules, local New Year food and booking a [personal chef Kauai](/private-chef) dinner at the house. Recently: [the Kōloa restaurants guide](/blog/koloa-restaurants-south-shore-kauai-guide), [the Kauaʻi family vacation guide](/blog/kauai-family-vacation-planning-guide) and [the Kauaʻi vacation rentals guide](/blog/kauai-vacation-rentals-kitchen-guide).',
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
      'New this month: [the Big Island in December](/blog/big-island-in-december-guide) — Kona vs Hilo weather by the numbers, Volcano and Maunakea cold, whale season, the holiday rush and a [private chef Kona](/private-chef) dinner at the villa. Recently: [the Big Island golf trip guide](/blog/big-island-golf-trip-guide), [the Kona brunch guide](/blog/kona-brunch-guide) and [Christmas on the Big Island](/blog/christmas-on-the-big-island-holiday-dinner).',
      'Looking to book rather than read? Dinner prices, dinners from $165 a guest and signature dinners and Stay Chef days are on the [private chef Big Island](/) page, and staffed villa parties for ten to seventy-five are [Big Island catering](/catering).',
    ],
  },
};
