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
      'New this month: [the Honolulu restaurants guide](/blog/honolulu-restaurants-neighborhood-guide) — Chinatown, Kakaʻako, Ala Moana, Mōʻiliʻili and Kaimukī, what to eat, parking and reservations, and when a [private chef Honolulu](/private-chef) dinner at home is easier. Recently: [the Oʻahu elopement guide](/blog/oahu-elopement-planning-guide), [the Hawaiʻi Kai restaurants guide](/blog/hawaii-kai-restaurants-east-honolulu-guide) and [the Oʻahu wedding venues guide](/blog/oahu-wedding-venues-guide).',
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
      'New this month: [the Kahului restaurants guide](/blog/kahului-restaurants-central-maui-guide) — plate lunch and local kitchens by the airport, old Wailuku, arrival and departure days, ʻĪao Valley and when a [personal chef Maui](/private-chef) dinner on arrival night is better. Recently: [the Maui whale watching season guide](/blog/maui-whale-watching-season-guide), [the Pāʻia restaurants guide](/blog/paia-restaurants-north-shore-maui-guide) and [the Maui wedding venues guide](/blog/maui-wedding-venues-guide), with where [wedding catering Maui](/weddings) fits.',
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
      'New this month: [the Kōloa restaurants guide](/blog/koloa-restaurants-south-shore-kauai-guide) — Old Kōloa Town counters and shave ice, Kalāheo and the road west, parking and early closing, and where a [personal chef Kauai](/private-chef) night fits on the South Shore. Recently: [the Kauaʻi family vacation guide](/blog/kauai-family-vacation-planning-guide), [the Kauaʻi vacation rentals guide](/blog/kauai-vacation-rentals-kitchen-guide) and [the Kauaʻi wedding venues guide](/blog/kauai-wedding-venues-guide), with where [Kauai wedding catering](/weddings) fits.',
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
      'New this month: [Christmas on the Big Island](/blog/christmas-on-the-big-island-holiday-dinner) — Kona weather in December, planning the week, three ways to do Christmas dinner, New Year’s Eve fireworks rules and a [private chef Kona](/private-chef) holiday dinner at the villa. Recently: [the Kona manta ray night snorkel guide](/blog/kona-manta-ray-night-snorkel-guide), [the Volcano restaurants guide](/blog/volcano-hawaii-restaurants-guide) and [the Big Island wedding venues guide](/blog/big-island-wedding-venues-guide), with where [wedding catering Big Island](/weddings) fits.',
      'Looking to book rather than read? Dinner prices, dinners from $165 a guest and signature dinners and Stay Chef days are on the [private chef Big Island](/) page, and staffed villa parties for ten to seventy-five are [Big Island catering](/catering).',
    ],
  },
};
