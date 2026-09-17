import type { IslandId } from './islands';
import { SEARCH_VOLUMES } from './offers';
import type { PhotoKey } from './photos';

/**
 * Island /pricing documents — the rate card with unique stills and FAQs.
 * Distinct from /private-chef-cost (the fee-stack explainer).
 * Title + H1 are structurally different per island (corridor / stage / offer),
 * not a “What a night costs on {Island}” token swap.
 */

export interface IslandPricingPage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
  photo: PhotoKey;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const islandPricing: Record<IslandId, IslandPricingPage> = {
  oahu: {
    h1: 'Town and west CORE bands — $195–$290 a guest. Stay Chef from $1,250.',
    title: 'Oʻahu town & west CORE bands — Stay Chef from $1,250 | myCHEF',
    description:
      'Oʻahu town and west CORE $195–$290 a guest. Stay Chef from $1,250 a day. Date Night from $675. Service and GET print after the band. Distinct from /private-chef-cost.',
    lede:
      'USD. Line by line. CORE $195–$290 a guest. Stay Chef from $1,250 a day. The written quote is the confirmed total. How those lines stack: /private-chef-cost.',
    kicker: 'Oʻahu · Rate card',
    photo: 'pricingOahu',
    body: [
      `Private chef Oahu (${SEARCH_VOLUMES['private chef oahu']}) stays on this host’s home. This page is the tariff so that title stays clean. Groceries sit inside the dinner band. Stay Chef groceries are billed at cost.`,
      'Kahala, Ko Olina, Kailua, and Waikīkī residences with kitchens are base. North Shore is a published surcharge — /coverage. After the band: 20% service, GET up to 4.712%, 50% deposit. Gratuity is voluntary.',
      'The fee-stack explainer is /private-chef-cost. The form is /quote. First-booking checklist: /help/getting-started.',
    ],
    faqs: [
      {
        q: 'Same as /private-chef-cost?',
        a: 'That page is how service, GET, travel, and deposit print after the band. This page is the tariff itself.',
      },
      {
        q: 'Are groceries included?',
        a: 'Two models, never blended. On a Signature or per-guest dinner ($195–$290 a guest on Oʻahu), food and grocery procurement sit inside the published band — there is no separate “+ groceries” line. On a Stay Chef, multi-day or weekly-cook booking (from $1,250 a day), it is the chef fee plus groceries at cost, with original merchant receipts and zero markup. The fee stack is /private-chef-cost.',
      },
      {
        q: 'Is North Shore inside CORE?',
        a: 'The food band holds. Travel is a published surcharge. See /coverage and /north-shore.',
      },
    ],
  },
  maui: {
    h1: 'Wailea and West Maui villa-week bands — $225–$375 a guest.',
    title: 'Maui villa-week bands — Wailea & West from $225 | myCHEF',
    description:
      'Maui villa-week CORE $225–$375 a guest. Stay Chef from $1,550 a day. Upcountry and West Maui travel print as their own lines. Distinct from /private-chef-cost.',
    lede:
      'USD. Line by line. CORE $225–$375 a guest. Stay Chef from $1,550 a day. Saturday West Maui traffic is planned into arrival, not hidden in the band.',
    kicker: 'Maui · Rate card',
    photo: 'pricingMaui',
    body: [
      `Private chef Maui (${SEARCH_VOLUMES['private chef maui']}) stays on this host’s home. Private chef Maui cost is a related search (${SEARCH_VOLUMES['private chef maui cost']} monthly) — we do not invent a second volume. This page is the tariff.`,
      'Wailea, Kapalua, Kāʻanapali, and Makena are base. Upcountry is a published surcharge. West Maui timing: /west-maui. Lahaina is a town — /lahaina.',
      'After the band: 20% service, GET up to 4.712%, 50% deposit. The stack: /private-chef-cost. The form: /quote.',
    ],
    faqs: [
      {
        q: 'Same as /private-chef-cost?',
        a: 'That page is the stack. This page is the tariff. Upcountry is the usual surcharge; Saturday West Maui is timing, not a mystery fee.',
      },
      {
        q: 'Are groceries included?',
        a: 'Two models, never blended. On a Signature or per-guest dinner ($225–$375 a guest on Maui), food and grocery procurement sit inside the published band — no separate “+ groceries” line. On a Stay Chef, multi-day or weekly-cook booking (from $1,550 a day), it is the chef fee plus groceries at cost, with original merchant receipts and zero markup. How each line prints: /private-chef-cost.',
      },
      {
        q: 'Is Wailea cheaper than Kāʻanapali?',
        a: 'Same CORE band. The Saturday drive is planned into arrival. See /west-maui.',
      },
    ],
  },
  kauai: {
    h1: 'Inquiry bands on both shores — $225–$375 a guest. Not a Book-now.',
    title: 'Kauaʻi inquiry rate card — both shores, $225–$375 | myCHEF',
    description:
      'Kauaʻi inquiry CORE $225–$375 a guest. Stay Chef from $1,650 a day. Date Night $975–$1,425. Both-shore travel prints. A band is not a live Book-now. Distinct from /private-chef-cost.',
    lede:
      'USD. Line by line. CORE $225–$375 a guest — Maui-class. Stay Chef from $1,650 a day. Inquiry: a band is not a live Book-now button. Far-North inherits /hanalei-bridge.',
    kicker: 'Kauaʻi · Rate card',
    photo: 'pricingKauai',
    body: [
      `Private chef Kauai (${SEARCH_VOLUMES['private chef kauai']}) stays on this host’s home. This page is the tariff at inquiry. Līhuʻe and Kapaʻa are base. Both shores are a published surcharge.`,
      'Princeville, Hanalei, Poʻipū. Bridge weather reschedules rather than forfeits — /hanalei-bridge. After the band: 20% service, GET up to 4.712%. The stack: /private-chef-cost.',
      'The inquiry form is /quote. We will not hold a fake roster.',
    ],
    faqs: [
      {
        q: 'Same as /private-chef-cost?',
        a: 'That page is the stack, including both-shore travel. This page is the tariff.',
      },
      {
        q: 'Are groceries included?',
        a: 'Two models, never blended, even at inquiry. On a Signature or per-guest dinner ($225–$375 a guest on Kauaʻi), food and grocery procurement sit inside the published band — no separate “+ groceries” line. On a Stay Chef, multi-day or weekly-cook booking (from $1,650 a day), it is the chef fee plus groceries at cost, with original merchant receipts and zero markup. The stack is /private-chef-cost.',
      },
      {
        q: 'Does a closed bridge change the band?',
        a: 'The food band holds. We reschedule. See /hanalei-bridge.',
      },
    ],
  },
  bigisland: {
    h1: 'West-side first: CORE $210–$325. Stay Chef inquiry from $1,450.',
    title: 'West-side rate card — Kona–Kohala CORE $210–$325 | myCHEF',
    description:
      'West-side Hawaiʻi Island CORE $210–$325 a guest. Stay Chef inquiry from $1,450 a day. ENTRY from $165. Hilo is a dedicated day, never a Kona round trip. Distinct from /private-chef-cost.',
    lede:
      'USD. Line by line. CORE $210–$325 a guest. Stay Chef from $1,450 a day. West-side first. Hilo is not a west-side round trip.',
    kicker: 'Hawaiʻi Island · Rate card',
    photo: 'pricingBigisland',
    body: [
      `Private chef Kona (${SEARCH_VOLUMES['private chef kona']}) and private chef Big Island (${SEARCH_VOLUMES['private chef big island']}) stay dinner doors. This page is the west-side tariff at inquiry.`,
      'Kona–Kohala is base. Waimea and Hāmākua are a surcharge. East side: /east-side. Ironman weeks change lodging, not a hidden fee — /ironman-weeks.',
      'After the band: 20% service, GET up to 4.712%. The stack: /private-chef-cost. The inquiry form: /quote.',
    ],
    faqs: [
      {
        q: 'Same as /private-chef-cost?',
        a: 'That page is the stack, including east-side days. This page is the west-side tariff.',
      },
      {
        q: 'Are groceries included?',
        a: 'Two models, never blended. On a Signature or per-guest dinner ($210–$325 a guest, Table from $165), food and grocery procurement sit inside the published band — no separate “+ groceries” line. On a Stay Chef, multi-day or weekly-cook booking (from $1,450 a day), it is the chef fee plus groceries at cost, with original merchant receipts and zero markup. The fee stack is /private-chef-cost.',
      },
      {
        q: 'Is Hilo inside CORE?',
        a: 'No. East side is a dedicated day with its own travel line. See /east-side.',
      },
    ],
  },
};
