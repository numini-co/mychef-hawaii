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
      {
        q: 'Does a Honolulu weekly cook use the Signature grocery model?',
        a: 'No. Signature dinners ($195–$290 a guest) keep groceries inside the band. A Kahala or Honolulu weekly cook day is the chef fee plus groceries at cost, same dual-model as Stay Chef from $1,250 a day. We do not fold a household week into a visitor night. Resident door: /personal-chef. Stack: /private-chef-cost.',
      },
      {
        q: 'Is a tower COI a surcharge on this Oʻahu card?',
        a: 'No. Freight windows and building COIs are logistics, not a hidden food line. Town and west CORE stay $195–$290 a guest. North Shore remains the published drive surcharge on /coverage. 20% service and GET up to 4.712% still print after the band.',
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
      {
        q: 'Is this villa-week band a competitor midpoint?',
        a: 'No. Wailea and West Maui share CORE $225–$375 a guest. A midpoint that folds service into food is not this card. 20% service and Hawaiʻi GET up to 4.712% print after the band. We publish our premium; we do not rank other kitchens.',
      },
      {
        q: 'Signature night or Stay Chef week — which line am I on?',
        a: 'Signature is the hero per-guest night ($225–$375, groceries inside the band). Stay Chef from $1,550 a day is the multi-day cook with groceries at cost. They never blend. How each line prints: /private-chef-cost.',
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
      {
        q: 'Is this Kauaʻi band a live Book-now?',
        a: 'No. CORE $225–$375 a guest and Stay Chef from $1,650 a day are inquiry floors. We staff the estate when a crew exists. A published band is not a confirmation. Send dates on /quote. Far-North inherits /hanalei-bridge. 20% service and GET up to 4.712% print after the food.',
      },
      {
        q: 'Date Night $975–$1,425 or the Signature band on Kauaʻi?',
        a: 'Two seats use Date Night as a fixed evening. A family list uses Signature $225–$375 a guest, groceries inside that band. Stay Chef from $1,650 a day bills groceries at cost. 20% service and Hawaiʻi GET up to 4.712% print after the food. They never blend.',
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
      {
        q: 'ENTRY from $165 or CORE $210–$325 — which west-side line?',
        a: 'ENTRY from $165 is the open west-side table. CORE $210–$325 is the usual Kona–Kohala villa night. Stay Chef inquiry from $1,450 a day bills groceries at cost. They never blend. 20% service and Hawaiʻi GET up to 4.712% print after the food. A band is not a Book-now. Card: this page. Stack: /private-chef-cost.',
      },
      {
        q: 'Does Ironman week change this west-side tariff?',
        a: 'No. CORE stays $210–$325 a guest. Stay Chef stays from $1,450 a day. Ironman compresses lodging and crew days — it is not a hidden food line. Flag those dates on /quote. East side remains a dedicated day. See /ironman-weeks.',
      },
    ],
  },
};
