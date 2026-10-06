import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { IslandNestedIndexPage } from './islandHelpIndex';

/**
 * Island /fine-dining indexes. Distinct from nested /fine-dining/:course
 * pages, from /honeymoon-dinners, /omakase-at-home, and /chefs-table.
 * Not a Michelin claim. Titles must not use money keywords.
 */

export const islandFineDiningIndex: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Kahala rooms and Ko Olina villas — four formats, still a house.',
    title: 'Fine dining at home — Kahala & Ko Olina | myCHEF',
    description:
      'Oʻahu in-villa formats in Kahala rooms and Ko Olina villas: romantic dinner, tasting menu, chef’s table evening, celebration dinner. Halo posture, not a star.',
    lede: 'Oʻahu in-villa formats in Kahala rooms and Ko Olina villas: romantic dinner, tasting menu, chef’s table evening, celebration dinner. Halo posture, not a star.',
    kicker: 'Oʻahu · Fine dining',
    photo: 'fineIndexOahu',
    body: [
      `We do not claim stars we do not have.`,
      'Kahala dining rooms and Ko Olina villas are the usual rooms. Gold Coast houses: Gold Coast. Sourcing is written on the menu or it is not claimed.',
    ],
    faqs: [
      {
        q: 'Same as a restaurant?',
        a: 'No. The table is the house. If you want a room you do not have, book a restaurant.',
      },
      {
        q: 'Same as honeymoon dinner?',
        a: 'This list’s romantic-dinner URL is the night as a format — still a Gold Coast house, still a written quote.',
      },
    ],
  },
  maui: {
    h1: 'Wailea dining rooms and West Maui lanais — four formats, not a star.',
    title: 'Fine dining at home — Wailea & West Maui | myCHEF',
    description:
      'Maui in-villa formats in Wailea dining rooms and West Maui lanais: romantic dinner, tasting menu, chef’s table evening, celebration dinner. Halo posture, not a star.',
    lede: 'Maui in-villa formats in Wailea dining rooms and West Maui lanais: romantic dinner, tasting menu, chef’s table evening, celebration dinner. Halo posture, not a star.',
    kicker: 'Maui · Fine dining',
    photo: 'fineIndexMaui',
    body: [
      `We do not claim stars we do not have.`,
      'Wailea and Kapalua dining rooms are the usual rooms. Sourcing is written on the menu or it is not claimed.',
    ],
    faqs: [
      {
        q: 'Same as a restaurant?',
        a: 'No. The table is the villa. If you want a room you do not have, book a restaurant.',
      },
      {
        q: 'Same as honeymoon dinner?',
        a: 'This list’s romantic-dinner URL is the night as a format — still a villa, still a written quote.',
      },
    ],
  },
  kauai: {
    h1: 'Both-shore estate formats at inquiry — when we can staff.',
    title: 'Both-shore estate formats — inquiry, not a star | myCHEF',
    description:
      'Kauaʻi estate formats at inquiry on both shores: romantic dinner, tasting menu, chef’s table evening, celebration dinner. Not a Michelin claim. Not an instant-booking button.',
    lede: 'Kauaʻi estate formats at inquiry on both shores: romantic dinner, tasting menu, chef’s table evening, celebration dinner. Not a Michelin claim. Not an instant-booking button.',
    kicker: 'Kauaʻi · Fine dining',
    photo: 'fineIndexKauai',
    body: [
      `Inquiry stage. We do not claim stars we do not have.`,
      'A named shore is not a confirmation. Hanalei-bridge weather is a clause. Send dates on the quote form.',
    ],
    faqs: [
      {
        q: 'Are you live?',
        a: 'Inquiry. These formats exist when we can staff. They are not an instant-booking button.',
      },
      {
        q: 'Same as honeymoon dinner?',
        a: 'This list’s romantic-dinner URL is the night as a format — both shores, when we can staff.',
      },
    ],
  },
  bigisland: {
    h1: 'Kona-to-Kohala formats at inquiry — Hilo never on this list.',
    title: 'Fine dining at home — Kona to Kohala | myCHEF',
    description:
      'West-side Hawaiʻi Island formats at inquiry, Kona to Kohala. Not a Michelin claim. Hilo never on this list.',
    lede: 'West-side Hawaiʻi Island formats at inquiry, Kona to Kohala. Not a Michelin claim. Hilo never on this list.',
    kicker: 'Hawaiʻi Island · Fine dining',
    photo: 'fineIndexBigisland',
    body: [
      `West side first. We do not claim stars we do not have.`,
      'East side is a dedicated day. Named Kaʻū and Kona coffee follow Act 198. Send dates on the quote form.',
    ],
    faqs: [
      {
        q: 'Does this cover Hilo?',
        a: 'No. These are west-side villa formats — Kona to Kohala. Hilo is a dedicated east-side day on the east-side page.',
      },
      {
        q: 'Same as honeymoon dinner?',
        a: 'This list’s romantic-dinner URL is the night as a format. Hilo is never implied.',
      },
    ],
  },
};
