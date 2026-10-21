import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /help indexes. Distinct from nested /help/:slug articles, from
 * /faq, /how-it-works, and /quote. Titles must not use money keywords.
 */

export interface IslandNestedIndexPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandHelpIndex: Record<IslandId, IslandNestedIndexPage> = {
  oahu: {
    h1: 'Oʻahu help — which guide to open before you write.',
    title: 'Oʻahu help — first note, draft, changes | myCHEF',
    description:
      'Oʻahu help routes a first note, a menu draft, and changes after you accept. Request a written quote. Prices stay on the pricing page.',
    lede:
      'Three guides sit under this desk: what to send first, how to read the draft, and how a booking changes after you accept.',
    kicker: 'Oʻahu · Help',
    photo: 'helpIndexOahu',
    body: [
      'Getting started is the first note: corridor, kitchen, dates, guests, dietary limits. The menu guide is how that draft is written and revised. Managing a booking is the deposit and the written change. Wedding week and a house offsite have their own guides. A night’s sequence stays on how it works.',
    ],
    faqs: [
      {
        q: 'Which Oʻahu guide answers the first note, the draft, and a change?',
        a: 'The [getting-started guide](/help/getting-started) is the first note. The [menu guide](/help/menu-guide) is the draft. [Managing a booking](/help/managing-booking) is a change after you accept. Wedding week and a house offsite are the other two guides on this desk.',
      },
      {
        q: 'How do I start a written quote from the Oʻahu help desk?',
        a: 'Send dates, the address or the corridor, who is eating, dietary notes, and the occasion on [the quote form](/quote). A hotel suite without a cooktop is declined. Quotes are open. The steps after that live on [how it works](/how-it-works).',
      },
      {
        q: 'Where do Oʻahu prices and the service charge and tax lines live?',
        a: 'On [pricing](/pricing). A signature dinner keeps groceries inside the per-guest band. Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows acceptance. Gratuity is never required. How the lines stack is on [service and tax lines](/private-chef-cost).',
      },
      {
        q: 'How do I change a Kahala date or a Ko Olina headcount?',
        a: 'Write it on [managing a booking](/help/managing-booking). The quote is the record. A new headcount rewrites the total before the deposit moves. A chat message does not hold a different night.',
      },
    ],
  },
  maui: {
    h1: 'Maui help — shore first, then the draft, then the hold.',
    title: 'Maui help — shore, draft, and changes | myCHEF',
    description:
      'Maui help for a first villa note, the menu draft, and changes after you accept. Request a written quote. Saturday drives are planned in the note.',
    lede:
      'Name the shore before the menu. This desk points at the first note, the draft, and what changes after you accept.',
    kicker: 'Maui · Help',
    photo: 'helpIndexMaui',
    body: [
      'Getting started names Wailea, Kapalua, Kāʻanapali, or the other shore, plus the kitchen. The menu guide is how the draft is read and revised. Managing a booking is the deposit and a written change, including a move between towns. West Maui traffic is planned in the note, not discovered on the invoice.',
    ],
    faqs: [
      {
        q: 'Which Maui guide is the first note, and which is the draft?',
        a: 'Start with the [getting-started guide](/help/getting-started) for the shore and the kitchen. Read the [menu guide](/help/menu-guide) when a draft exists. Use [managing a booking](/help/managing-booking) after you accept. The other two guides are wedding week and a villa offsite.',
      },
      {
        q: 'How do I request a written quote for a Maui villa from this desk?',
        a: 'Put the shore, the dates, the address, who is eating, dietary notes, and the occasion on [the quote form](/quote). Say if Saturday crosses from Wailea toward Kapalua. Quotes are open. The night itself is on [how it works](/how-it-works).',
      },
      {
        q: 'Where do I read Maui prices and the charges that follow the food?',
        a: 'On [pricing](/pricing). Groceries for a signature dinner sit inside the per-guest band. Then 20% service and Hawaiʻi GET up to 4.712% each stand alone. A 50% deposit follows acceptance. Gratuity is never required.',
      },
      {
        q: 'How do I move a Maui date or a headcount after I accept?',
        a: 'Send the change in writing through [managing a booking](/help/managing-booking). A shift from Wailea to Lahaina can change the travel line. The total is rewritten before the deposit is treated as holding the new plan.',
      },
    ],
  },
  kauai: {
    h1: 'Kauaʻi help — request availability, then read the draft.',
    title: 'Kauaʻi help — request availability first | myCHEF',
    description:
      'Kauaʻi help for a first request for availability, the menu draft, and changes after a written yes. Name the shore. The bridge stays in the note.',
    lede:
      'Request availability and name the shore. These guides explain the note, the draft, and a change. They are not a held date.',
    kicker: 'Kauaʻi · Help',
    photo: 'helpIndexKauai',
    body: [
      'Getting started is the shore, the estate, and the first request for availability. The menu guide is how a draft is read if a crew can take that shore. Managing a booking covers the deposit and a weather move. A named shore is not an instant-booking button. Hanalei-bridge weather is a clause on the quote.',
    ],
    faqs: [
      {
        q: 'Which Kauaʻi guide do I open first, and which one is the draft?',
        a: 'The [getting-started guide](/help/getting-started) is the first request for availability. The [menu guide](/help/menu-guide) is the draft. [Managing a booking](/help/managing-booking) is a change after a written yes. Wedding week and an estate offsite are separate guides.',
      },
      {
        q: 'How do I request availability from the Kauaʻi help desk?',
        a: 'Send the shore, the dates, the estate address, who is eating, dietary notes, and the occasion on [the quote form](/quote). Say if the house is past the Hanalei bridge. A request for availability is not a confirmation. The night’s shape is on [how it works](/how-it-works).',
      },
      {
        q: 'Where are Kauaʻi prices and the service charge and tax lines?',
        a: 'On [pricing](/pricing). A published band is not a held crew. If a shore can be staffed, 20% service and Hawaiʻi GET up to 4.712% print alone, and a 50% deposit follows a written yes. Gratuity is never required.',
      },
      {
        q: 'How do I change a Princeville date if the road closes?',
        a: 'Write it through [managing a booking](/help/managing-booking). A bridge closure moves the night. We do not keep a deposit because the road shut. The change is in writing. It does not silently become Poʻipū.',
      },
    ],
  },
  bigisland: {
    h1: 'West-side help — join the inquiry list. Hilo is its own day.',
    title: 'West-side help — inquiry list, Hilo apart | myCHEF',
    description:
      'West-side help for a first inquiry, the menu draft, and changes after a written yes. Hilo is a separate dedicated east-side day.',
    lede:
      'Join the inquiry list with a Kona–Kohala address. Hilo is a separate dedicated east-side day, quoted in writing.',
    kicker: 'Hawaiʻi Island · Help',
    photo: 'helpIndexBigisland',
    body: [
      'Getting started is the west-side address and the first inquiry. The menu guide is how a draft is read if a crew can take that day. Managing a booking is the deposit and a written change. Ironman weeks compress Kona roads. They do not add Hilo onto a Waikoloa night.',
    ],
    faqs: [
      {
        q: 'Which west-side guide is the first inquiry, and which is the draft?',
        a: 'The [getting-started guide](/help/getting-started) is how you join the inquiry list. The [menu guide](/help/menu-guide) is the draft. [Managing a booking](/help/managing-booking) is a change after a written yes. The other guides cover a wedding week and a villa offsite.',
      },
      {
        q: 'How do I join the inquiry list without pulling Hilo into the same note?',
        a: 'Send a Kona, Waikoloa, or Kohala address, the dates, who is eating, dietary notes, and the occasion on [the quote form](/quote). Hilo is a separate dedicated east-side day, quoted in writing. The night’s shape is on [how it works](/how-it-works).',
      },
      {
        q: 'Where do west-side prices and the service charge and tax lines sit?',
        a: 'On [pricing](/pricing), including the simpler table on this island only. Groceries for a signature dinner sit inside the band. Then 20% service and Hawaiʻi GET up to 4.712% print alone. A 50% deposit follows a written yes. Gratuity is never required.',
      },
      {
        q: 'How do I change a Waikoloa date during Ironman week?',
        a: 'Write the new date through [managing a booking](/help/managing-booking). Flag Ironman in the same note. The total is rewritten before the deposit is treated as holding the new day. Hilo is not added as a same-day fix.',
      },
    ],
  },
};
