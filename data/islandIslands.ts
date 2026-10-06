import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { IslandNestedIndexPage } from './islandHelpIndex';

/**
 * Island /islands indexes. Distinct from hub /islands (the statewide picker)
 * and from /areas (map notes on this site). Titles must not use money keywords.
 */

export const islandIslands: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'You’re on our Oʻahu site. Maui, Kauaʻi and the Big Island each have their own.',
    title: 'The other islands from Oahu — Maui, Kauai, west-side Hawaiʻi | myCHEF',
    description:
      'You’re on our Oahu site. Maui, Kauai and the Big Island each have their own site.',
    lede: 'You’re on our Oahu site. Maui, Kauai and the Big Island each have their own site.',
    kicker: 'Oʻahu · Other islands',
    photo: 'islandsIndexOahu',
    body: [
      'Each island is its own host: own chefs, own zones, own quote vs inquiry posture. Kauaʻi and Hawaiʻi Island stay inquiry.',
    ],
    faqs: [
    ],
  },
  maui: {
    h1: 'You’re on our Maui site. Oʻahu, Kauaʻi and the Big Island each have their own.',
    title: 'The other islands from Maui — Oahu, Kauai, west-side Hawaiʻi | myCHEF',
    description:
      'You’re on our Maui site. Oahu, Kauai and the Big Island each have their own site.',
    lede: 'You’re on our Maui site. Oahu, Kauai and the Big Island each have their own site.',
    kicker: 'Maui · Other islands',
    photo: 'islandsIndexMaui',
    body: [
      'Each island has its own site. Kauaʻi and Hawaiʻi Island bookings start as an inquiry.',
    ],
    faqs: [
    ],
  },
  kauai: {
    h1: 'You’re on our Kauaʻi site. Oʻahu, Maui and the Big Island each have their own.',
    title: 'The other islands from Kauai — Oahu, Maui, west-side Hawaiʻi | myCHEF',
    description:
      'You’re on our Kauai site. Oahu, Maui and the Big Island each have their own site.',
    lede: 'You’re on our Kauai site. Oahu, Maui and the Big Island each have their own site.',
    kicker: 'Kauaʻi · Other islands',
    photo: 'islandsIndexKauai',
    body: [
      `Inquiry stage.`,
      'A named shore is not an instant-booking button. Oahu and Maui take written quotes. Hawaiʻi Island is also inquiry, west side first.',
    ],
    faqs: [
      {
        q: 'Are you live?',
        a: 'Inquiry. Send dates on the quote form. We write back when we can staff.',
      },
    ],
  },
  bigisland: {
    h1: 'You’re on our Big Island site. Oʻahu, Maui and Kauaʻi each have their own.',
    title: 'The other islands from the west side — Oahu, Maui, Kauai | myCHEF',
    description:
      'You’re on our Big Island site. Oahu, Maui and Kauai each have their own site.',
    lede:
      'Hilo is not another island; it is on the east-side page.',
    kicker: 'Hawaiʻi Island · Other islands',
    photo: 'islandsIndexBigisland',
    body: [
      `West side first.`,
      'The east side is a dedicated day from the west-side base. Oahu and Maui take written quotes. Kauaʻi is also taking enquiries.',
    ],
    faqs: [
      {
        q: 'Is Hilo another island?',
        a: 'No. It is a different chef day on this site.',
      },
    ],
  },
};
