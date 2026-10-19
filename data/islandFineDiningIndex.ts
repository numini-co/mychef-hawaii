import type { IslandId } from './islands';
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
      'Kahala rooms and Ko Olina villas: romantic dinner, tasting menu, chef’s table evening, celebration dinner. Not a star.',
    lede: 'Oʻahu in-villa formats in Kahala rooms and Ko Olina villas: romantic dinner, tasting menu, chef’s table evening, celebration dinner. Halo posture, not a star.',
    kicker: 'Oʻahu · Fine dining',
    photo: 'fineIndexOahu',
    body: [
      'We do not claim stars we do not have.',
      'A Kahala or Ko Olina house is a dining room with a cooktop, not a hotel suite. Sourcing is written on the menu or it is not claimed.',
      'Pick the night, then the format. Two people who want the evening named as romance use [romantic dinner](/fine-dining/romantic-dinner). A written sequence of courses is the [tasting menu](/fine-dining/tasting-menu). Guests at the counter while the cook works is the [chef’s table evening](/fine-dining/chefs-table-evening). A seated dining room for a marked night is the [celebration dinner](/fine-dining/celebration-dinner). A published two-top is [honeymoon dinners](/honeymoon-dinners). A birthday or anniversary as the occasion is [events](/events). The per-guest band, then 20% service and Hawaiʻi GET up to 4.712% on their own lines, is on [pricing](/pricing). Request a written quote on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which format fits a weeknight for two in a Kahala dining room?',
        a: 'Romantic dinner, if you want that name on the night. Honeymoon dinners is the published two-top if you want the product instead of the format. Say which when you request a written quote.',
      },
      {
        q: 'When should I open events instead of the celebration dinner?',
        a: 'Open events when the occasion is the point: a birthday or an anniversary. The celebration dinner is the seated dining-room format. They can share a coordinator and still stay separate totals.',
      },
      {
        q: 'What has to be in the note before you write an Oʻahu total?',
        a: 'The house, the date, the seats, the format, and any restriction. A tower freight window or a Ko Olina gate time belongs there. Request a written quote on [the quote form](/quote).',
      },
      {
        q: 'How does the per-guest band work with the fee lines?',
        a: 'The band is the food, groceries inside it, on [pricing](/pricing). 20% service and Hawaiʻi GET up to 4.712% print after it, each alone. A 50% deposit follows acceptance. Gratuity is never required.',
      },
      {
        q: 'Does a Ko Olina villa change the format, or only the arrival?',
        a: 'The four formats stay the same. The villa changes the gate time and the wind plan for the lānai. A hotel suite without a cooktop is declined.',
      },
      {
        q: 'Will a menu from this list name a fisherman?',
        a: 'Only when the invoice stands behind the name. Otherwise the dish is the dish. We do not claim a star, and we do not invent a boat for a Kahala draft.',
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
      'We do not claim stars we do not have.',
      'Wailea and Kapalua dining rooms are the usual rooms. Sourcing is written on the menu or it is not claimed.',
      'Match the night to a format. A lānai for two is the [romantic dinner](/fine-dining/romantic-dinner). A written sequence is the [tasting menu](/fine-dining/tasting-menu). Seats at the counter are the [chef’s table evening](/fine-dining/chefs-table-evening). A dining room for a marked night is the [celebration dinner](/fine-dining/celebration-dinner). The published two-top is [honeymoon dinners](/honeymoon-dinners). An occasion with a reason is [events](/events). The band and the fee lines are on [pricing](/pricing). Quotes are open on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which of the four fits a blue-hour table for two in Wailea?',
        a: 'Romantic dinner. If you want the published two-top instead, use honeymoon dinners. Kapalua is often that two-top. Quotes are open. Name the shore.',
      },
      {
        q: 'When is a West Maui anniversary better on the events pages?',
        a: 'When the year-mark is the reason you are gathering. Celebration dinner is only the seated format. A lawn party is neither. Say which on the quote.',
      },
      {
        q: 'What should a Villa Week note include so the total can be written?',
        a: 'Shore, villa, date, seats, format, and restrictions. Saturday traffic between Wailea and Kapalua belongs in the same note. Quotes are open on [the quote form](/quote).',
      },
      {
        q: 'Where do I see the per-guest band and the charges after it?',
        a: 'On [pricing](/pricing). Groceries for this dinner sit inside the band. 20% service and Hawaiʻi GET up to 4.712% are separate lines. A 50% deposit follows acceptance. Gratuity is never required.',
      },
      {
        q: 'Does a wet lānai force a different format?',
          a: 'The format stays. The plates move to the indoor table written as backup. We do not add a tent after you accept. Tell us the house can do that.',
      },
      {
        q: 'Can the draft name a boat if I ask for local fish?',
        a: 'Only when the invoice stands behind it. A related kitchen’s name is not ours. The dish can stand without a borrowed credit.',
      },
    ],
  },
  kauai: {
    h1: 'Both-shore estate formats at inquiry — when we can staff.',
    title: 'Both-shore estate formats — inquiry, not a star | myCHEF',
    description:
      'Kauaʻi estate formats at inquiry on both shores: romantic dinner, tasting menu, chef’s table evening, celebration dinner. Not a Michelin claim.',
    lede: 'Kauaʻi estate formats at inquiry on both shores: romantic dinner, tasting menu, chef’s table evening, celebration dinner. Not a Michelin claim. Not an instant-booking button.',
    kicker: 'Kauaʻi · Fine dining',
    photo: 'fineIndexKauai',
    body: [
      'Request availability. We do not claim stars we do not have.',
      'A named shore is not a confirmation. Hanalei-bridge weather is a clause.',
      'Choose a format, then request availability for that shore. Two seats as romance are the [romantic dinner](/fine-dining/romantic-dinner). A written sequence is the [tasting menu](/fine-dining/tasting-menu). The estate counter at night is the [chef’s table evening](/fine-dining/chefs-table-evening). A seated estate table is the [celebration dinner](/fine-dining/celebration-dinner). The published two-top is [honeymoon dinners](/honeymoon-dinners). An occasion is [events](/events). The band and fee lines are on [pricing](/pricing). Request availability on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'What do I send if I want one of these formats on a Princeville date?',
        a: 'Request availability with the shore, the estate, and the format. A named date is not a held crew. We write back when that shore can be staffed. There is no instant confirmation.',
      },
      {
        q: 'Which format is a Poʻipū night for two, and which is the honeymoon dinner?',
        a: 'Romantic dinner is the format. Honeymoon dinners is the published two-top. Request availability for the one you mean. Far-North houses still carry the bridge clause.',
      },
      {
        q: 'When should the events pages replace a celebration dinner?',
        a: 'When the night is a birthday or an anniversary and that occasion is the brief. Celebration dinner is the seated table. Request availability for either, and do not assume they are one total.',
      },
      {
        q: 'How does the per-guest band sit next to the other charges?',
        a: 'The band, groceries inside it, is on [pricing](/pricing). 20% service and Hawaiʻi GET up to 4.712% follow, each alone. A 50% deposit waits for a written yes. Gratuity is never required.',
      },
      {
        q: 'If the Hanalei bridge is closed, which shore does the format move to?',
        a: 'It does not silently move to Poʻipū. The night shifts with the closure, on the shore you requested. Rain backup under cover is a separate sentence in the reply.',
      },
      {
        q: 'What is the difference between a tasting menu and the chef’s table evening here?',
        a: 'The tasting menu is the written sequence of courses. The chef’s table evening is guests at the estate counter while the cook works. Request availability for one. A counter that cannot face the cook is declined.',
      },
    ],
  },
  bigisland: {
    h1: 'Kona-to-Kohala formats at inquiry — Hilo never on this list.',
    title: 'Fine dining at home — Kona to Kohala | myCHEF',
    description:
      'West-side Hawaiʻi Island formats at inquiry, Kona to Kohala. Not a Michelin claim. Hilo is a separate east-side day.',
    lede: 'West-side Hawaiʻi Island formats at inquiry, Kona to Kohala. Not a Michelin claim. Hilo never on this list.',
    kicker: 'Hawaiʻi Island · Fine dining',
    photo: 'fineIndexBigisland',
    body: [
      'West side first. We do not claim stars we do not have.',
      'Hilo is a separate dedicated east-side day, quoted in writing. Named Kaʻū and Kona coffee follow Act 198.',
      'Join the inquiry list for a west-side format only. Two on a terrace are the [romantic dinner](/fine-dining/romantic-dinner). A written sequence is the [tasting menu](/fine-dining/tasting-menu). The counter while the cook fires is the [chef’s table evening](/fine-dining/chefs-table-evening). A seated table is the [celebration dinner](/fine-dining/celebration-dinner). The published two-top is [honeymoon dinners](/honeymoon-dinners). An occasion is [events](/events). The band and fee lines are on [pricing](/pricing). Join the inquiry list on [the quote form](/quote).',
    ],
    faqs: [
      {
        q: 'Which format should a Kohala terrace for two use?',
        a: 'Romantic dinner, or honeymoon dinners if you want the published two-top. Join the inquiry list with a west-side address. Hilo is a separate dedicated east-side day, quoted in writing.',
      },
      {
        q: 'When do I use events instead of the celebration dinner?',
        a: 'When the brief is a birthday or an anniversary. Celebration dinner is the seated Kona or Kohala format. Join the inquiry list for one of them. Do not attach Hilo to that night.',
      },
      {
        q: 'What has to be on the inquiry before a west-side total is written?',
        a: 'Kona, Waikoloa, or Kohala — the address, the dates, the seats, and the format. Join the inquiry list on [the quote form](/quote). A Hilo line in the same note is a different day.',
      },
      {
        q: 'How is the per-guest band applied on this side of the island?',
        a: 'The band is on [pricing](/pricing), groceries inside it. 20% service and Hawaiʻi GET up to 4.712% are their own lines. A 50% deposit follows a written yes. Gratuity is never required.',
      },
      {
        q: 'Can the four formats be cooked in Hilo on the back of a Kona night?',
          a: 'Hilo is a separate dedicated east-side day, quoted in writing. Join the inquiry list for the west side, or send the east side alone. The two are not stacked on one night.',
      },
      {
        q: 'How do I choose between a tasting menu and a counter evening in Kona?',
        a: 'The tasting menu is the written course sequence. The chef’s table evening is the counter facing the cook. Seats are confirmed in the reply. Join the inquiry list with the kitchen you have.',
      },
    ],
  },
};
