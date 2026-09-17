import type { IslandId } from './islands';

/**
 * Island /estimate documents — title + H1 are structurally different per island,
 * not `{Island} private chef cost estimator`.
 */

export interface IslandEstimatePage {
  h1: string;
  title: string;
  description: string;
  lede: string;
  kicker: string;
}

export const islandEstimate: Record<IslandId, IslandEstimatePage> = {
  oahu: {
    h1: 'Slide town and west bands — an Oʻahu range, not a quote.',
    title: 'Town & west cost range — Oʻahu estimator | myCHEF',
    description:
      'Estimate an Oʻahu villa dinner or Stay Chef week from town and west CORE bands ($195–$290 a guest, Stay Chef from $1,250). Groceries dual-model, 20% service and GET itemized. Not a quote.',
    lede:
      'Town and west CORE $195–$290 a guest. Stay Chef from $1,250 a day. Slide tier, guests and days. The written quote is the total — this range is not it.',
    kicker: 'Oʻahu · Cost estimator',
  },
  maui: {
    h1: 'Wailea-to-West range from the villa-week card.',
    title: 'Villa-week cost range — Maui estimator | myCHEF',
    description:
      'Estimate a Maui villa-week dinner or Stay Chef stay from Wailea and West bands ($225–$375 a guest, Stay Chef from $1,550). Groceries dual-model, 20% service and GET itemized. Not a quote.',
    lede:
      'Villa-week CORE $225–$375 a guest. Stay Chef from $1,550 a day. Saturday West Maui is timing, not a hidden fee. The written quote is the total.',
    kicker: 'Maui · Cost estimator',
  },
  kauai: {
    h1: 'Both-shore inquiry range — bands, not a Book-now.',
    title: 'Both-shore inquiry range — Kauaʻi estimator | myCHEF',
    description:
      'Estimate a Kauaʻi inquiry dinner or week from both-shore bands ($225–$375 a guest, Stay Chef from $1,650). Inquiry stage. Groceries dual-model, 20% service and GET itemized. The written quote is the total.',
    lede:
      'Both-shore CORE $225–$375 a guest — Maui-class. Stay Chef from $1,650 a day. Inquiry: a band is not a live Book-now. Hanalei-bridge weather is a clause.',
    kicker: 'Kauaʻi · Cost estimator',
  },
  bigisland: {
    h1: 'West-side inquiry range — Kona–Kohala first.',
    title: 'West-side inquiry range — Hawaiʻi Island estimator | myCHEF',
    description:
      'Estimate a west-side Hawaiʻi Island dinner or week (CORE $210–$325 a guest, Stay Chef from $1,450). Inquiry. Hilo is not in this range. Groceries dual-model, 20% service and GET itemized.',
    lede:
      'West-side CORE $210–$325 a guest. Stay Chef from $1,450 a day. Inquiry. East side is a dedicated day — do not read Hilo into this slider.',
    kicker: 'Hawaiʻi Island · Cost estimator',
  },
};
