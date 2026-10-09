import type { IslandId } from '@/data/islands';

/**
 * Keyword anchors for island owner pages (see hawaii-seo-master-map.md).
 * Island home owns `private chef {island}`; island /private-chef owns the
 * city / synonym modifier; island /pricing owns `private chef {island} cost`.
 */
export const ISLAND_PLAIN: Record<IslandId, string> = {
  oahu: 'Oahu',
  maui: 'Maui',
  kauai: 'Kauai',
  bigisland: 'Big Island',
};

export const PRIVATE_CHEF_PAGE_ANCHOR: Record<IslandId, string> = {
  oahu: 'Private chef Honolulu',
  maui: 'Personal chef Maui',
  kauai: 'Personal chef Kauai',
  bigisland: 'Private chef Kona',
};

export const homeAnchor = (id: IslandId) => `Private chef ${ISLAND_PLAIN[id]}`;
export const costAnchor = (id: IslandId) => `Private chef ${ISLAND_PLAIN[id]} cost`;
export const cateringAnchor = (id: IslandId) => `${ISLAND_PLAIN[id]} catering`;
