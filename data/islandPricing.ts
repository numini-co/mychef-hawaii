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
    h1: 'Oahu private chef cost — CORE $195–$290 a guest, Stay Chef from $1,250.',
    title: 'Oahu Private Chef Cost | $195–$290 a Guest | myCHEF',
    description:
      'What a private chef costs on Oahu: $195–$290 a guest with groceries inside, Date Night from $675, Stay Chef from $1,250 a day. Service and GET itemized.',
    lede:
      'USD. Line by line. CORE $195–$290 a guest. Stay Chef from $1,250 a day. The written quote is the confirmed total.',
    kicker: 'Oʻahu · Rate card',
    photo: 'pricingOahu',
    body: [
      `Groceries sit inside the dinner band. Stay Chef groceries are billed at cost.`,
      'Kahala, Ko Olina, Kailua, and Waikīkī residences with kitchens are base. North Shore is a published surcharge. After the band: 20% service, GET up to 4.712%, 50% deposit. Gratuity is voluntary.',
      'The fee-stack explainer is on the private chef cost page.',
    ],
    faqs: [
      {
        q: 'Are groceries included?',
        a: 'Two models, never blended. On a Signature or per-guest dinner ($195–$290 a guest on Oʻahu), food and grocery procurement sit inside the published band — there is no separate “+ groceries” line. On a Stay Chef, multi-day or weekly-cook booking (from $1,250 a day), it is the chef fee plus groceries at cost, with original merchant receipts and zero markup.',
      },
      {
        q: 'Is North Shore inside CORE?',
        a: 'The food band holds. Travel is a published surcharge.',
      },
      {
        q: 'Does a Honolulu weekly cook use the Signature grocery model?',
        a: 'No. Signature dinners ($195–$290 a guest) keep groceries inside the band. A Kahala or Honolulu weekly cook day is the chef fee plus groceries at cost, same dual-model as Stay Chef from $1,250 a day. We do not fold a household week into a visitor night.',
      },
      {
        q: 'Is a tower COI a surcharge on this Oʻahu card?',
        a: 'No. Freight windows and building COIs are logistics, not a hidden food line. Town and west CORE stay $195–$290 a guest. North Shore remains the published drive surcharge on the coverage map. 20% service and GET up to 4.712% still print after the band.',
      },
    ],
  },
  maui: {
    h1: 'Maui private chef cost — Wailea and West Maui, $225–$375 a guest.',
    title: 'Maui Private Chef Cost | Wailea & West Maui Rates | myCHEF',
    description:
      'What a private chef costs on Maui: $225–$375 a guest with groceries inside, Stay Chef from $1,550 a day. 20% service and GET print as their own lines.',
    lede:
      'USD. Line by line. CORE $225–$375 a guest. Stay Chef from $1,550 a day. Saturday West Maui traffic is planned into arrival, not hidden in the band.',
    kicker: 'Maui · Rate card',
    photo: 'pricingMaui',
    body: [
      'Wailea, Kapalua, Kāʻanapali, and Makena are base. Upcountry is a published surcharge.',
      'After the band: 20% service, GET up to 4.712%, 50% deposit.',
    ],
    faqs: [
      {
        q: 'Are groceries included?',
        a: 'Two models, never blended. On a Signature or per-guest dinner ($225–$375 a guest on Maui), food and grocery procurement sit inside the published band — no separate “+ groceries” line. On a Stay Chef, multi-day or weekly-cook booking (from $1,550 a day), it is the chef fee plus groceries at cost, with original merchant receipts and zero markup.',
      },
      {
        q: 'Is Wailea cheaper than Kāʻanapali?',
        a: 'Same CORE band. The Saturday drive is planned into arrival.',
      },
      {
        q: 'Is this villa-week band a competitor midpoint?',
        a: 'No. Wailea and West Maui share CORE $225–$375 a guest. A midpoint that folds service into food is not this card. 20% service and Hawaiʻi GET up to 4.712% print after the band. We publish our premium; we do not rank other kitchens.',
      },
      {
        q: 'Signature night or Stay Chef week — which line am I on?',
        a: 'Signature is the hero per-guest night ($225–$375, groceries inside the band). Stay Chef from $1,550 a day is the multi-day cook with groceries at cost. They never blend.',
      },
    ],
  },
  kauai: {
    h1: 'Kauai private chef cost — $225–$375 a guest on both shores, by inquiry.',
    title: 'Kauai Private Chef Cost | Both-Shore Rate Card | myCHEF',
    description:
      'What a private chef costs on Kauaʻi: $225–$375 a guest, Date Night $975–$1,425, Stay Chef from $1,650 a day. By inquiry, with every fee itemized.',
    lede:
      'USD. Line by line. CORE $225–$375 a guest — Maui-class. Stay Chef from $1,650 a day. Inquiry: a band is not a live instant-booking button.',
    kicker: 'Kauaʻi · Rate card',
    photo: 'pricingKauai',
    body: [
      `Līhuʻe and Kapaʻa are base. Both shores are a published surcharge.`,
      'Princeville, Hanalei, Poʻipū. Bridge weather reschedules rather than forfeits. After the band: 20% service, GET up to 4.712%.',
      'We will not hold a fake roster.',
    ],
    faqs: [
      {
        q: 'Are groceries included?',
        a: 'Two models, never blended, even at inquiry. On a Signature or per-guest dinner ($225–$375 a guest on Kauaʻi), food and grocery procurement sit inside the published band — no separate “+ groceries” line. On a Stay Chef, multi-day or weekly-cook booking (from $1,650 a day), it is the chef fee plus groceries at cost, with original merchant receipts and zero markup.',
      },
      {
        q: 'Does a closed bridge change the band?',
        a: 'The food band holds. We reschedule.',
      },
      {
        q: 'Can I book this Kauaʻi band instantly?',
        a: 'No. CORE $225–$375 a guest and Stay Chef from $1,650 a day are inquiry floors. We staff the estate when a crew exists. A published band is not a confirmation. Send dates on the quote form. 20% service and GET up to 4.712% print after the food.',
      },
      {
        q: 'Date Night $975–$1,425 or the Signature band on Kauaʻi?',
        a: 'Two seats use Date Night as a fixed evening. A family list uses Signature $225–$375 a guest, groceries inside that band. Stay Chef from $1,650 a day bills groceries at cost. 20% service and Hawaiʻi GET up to 4.712% print after the food. They never blend.',
      },
    ],
  },
  bigisland: {
    h1: 'Big Island private chef cost — Kona–Kohala CORE $210–$325 a guest.',
    title: 'Big Island Private Chef Cost | Kona–Kohala Rates | myCHEF',
    description:
      'What a private chef costs on the Big Island: ENTRY from $165, CORE $210–$325 a guest, Stay Chef from $1,450 a day. Hilo is quoted as its own day.',
    lede:
      'USD. Line by line. CORE $210–$325 a guest. Stay Chef from $1,450 a day. West-side first. Hilo is not a west-side round trip.',
    kicker: 'Hawaiʻi Island · Rate card',
    photo: 'pricingBigisland',
    body: [
      'Kona–Kohala is base. Waimea and Hāmākua are a surcharge. Ironman weeks change lodging, not a hidden fee.',
      'After the band: 20% service, GET up to 4.712%.',
    ],
    faqs: [
      {
        q: 'Are groceries included?',
        a: 'Two models, never blended. On a Signature or per-guest dinner ($210–$325 a guest, Table from $165), food and grocery procurement sit inside the published band — no separate “+ groceries” line. On a Stay Chef, multi-day or weekly-cook booking (from $1,450 a day), it is the chef fee plus groceries at cost, with original merchant receipts and zero markup.',
      },
      {
        q: 'Is Hilo inside CORE?',
        a: 'No. East side is a dedicated day with its own travel line.',
      },
      {
        q: 'ENTRY from $165 or CORE $210–$325 — which west-side line?',
        a: 'ENTRY from $165 is the open west-side table. CORE $210–$325 is the usual Kona–Kohala villa night. Stay Chef inquiry from $1,450 a day bills groceries at cost. They never blend. 20% service and Hawaiʻi GET up to 4.712% print after the food. A band is not instant booking. Card: this page.',
      },
      {
        q: 'Does Ironman week change this west-side tariff?',
        a: 'No. CORE stays $210–$325 a guest. Stay Chef stays from $1,450 a day. Ironman compresses lodging and crew days — it is not a hidden food line. Flag those dates on the quote form. East side remains a dedicated day.',
      },
    ],
  },
};
