import type { IslandId } from './islands';

/**
 * Hero stills for the /estimate cost-estimator pages (hub + four islands).
 *
 * Additive registry — deliberately separate from data/photos.ts so this wave's
 * generated imagery does not collide with parallel edits to the shared photo
 * map, and NOT read by scripts/unique-audit.mjs (the estimator tool pages are
 * not money/document pages). Each file is a unique, area-specific still so the
 * paper-header estimator pages can render a photographic hero without changing
 * any URL.
 */
export interface EstimateStill {
  file: string;
  alt: string;
}

export const estimateHubStill: EstimateStill = {
  file: '/photos/heroes/hero-estimate-hub.jpg',
  alt: 'A private-chef table laid with fresh island produce on an open Hawaiian villa lānai above the Pacific — the four-island planning still.',
};

export const estimateIslandStills: Record<IslandId, EstimateStill> = {
  oahu: {
    file: '/photos/heroes/hero-estimate-oahu.jpg',
    alt: 'An Oʻahu Gold Coast terrace table at twilight with citrus and plumeria, Diamond Head and the Waikīkī lights beyond.',
  },
  maui: {
    file: '/photos/heroes/hero-estimate-maui.jpg',
    alt: 'A Wailea villa terrace table at west-side sunset — heliconia, tropical fruit and a candle above an infinity pool.',
  },
  kauai: {
    file: '/photos/heroes/hero-estimate-kauai.jpg',
    alt: 'A Kauaʻi estate table at golden hour looking into a misted valley of fluted green mountains near Hanalei.',
  },
  bigisland: {
    file: '/photos/heroes/hero-estimate-bigisland.jpg',
    alt: 'A Kohala Coast lava-terrace table on Hawaiʻi Island at sunset, tropical fruit and wine glasses with Mauna Kea beyond.',
  },
};

export function estimateStill(islandId: IslandId | null): EstimateStill {
  return islandId ? estimateIslandStills[islandId] : estimateHubStill;
}
