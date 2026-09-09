/**
 * Verifiable trust endpoints — owner-owned Place URLs replace the Maps search
 * fallbacks below when Google Business Profile Place IDs are confirmed.
 * Do not invent Place IDs; search URLs are honest interim verify doors.
 */
import type { IslandId } from '@/platform/tokens';

export interface GbpDesk {
  id: IslandId;
  label: string;
  areas: string;
  /** Public Maps URL for this island desk (Place URL preferred when available). */
  mapsUrl: string;
}

export const GBP_DESKS: Record<IslandId, GbpDesk> = {
  oahu: {
    id: 'oahu',
    label: 'Oʻahu desk',
    areas: 'Honolulu · Waikīkī · North Shore',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=myCHEF+Hawaii+Private+Chef+Oahu+Honolulu',
  },
  maui: {
    id: 'maui',
    label: 'Maui desk',
    areas: 'Wailea · Mākena · Kapalua',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=myCHEF+Hawaii+Private+Chef+Maui+Wailea',
  },
  kauai: {
    id: 'kauai',
    label: 'Kauaʻi desk',
    areas: 'Hanalei · Princeville · Poʻipū',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=myCHEF+Hawaii+Private+Chef+Kauai',
  },
  bigisland: {
    id: 'bigisland',
    label: 'Big Island desk',
    areas: 'Kona · Kohala Coast · Kūkiʻo',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=myCHEF+Hawaii+Private+Chef+Kona+Kohala',
  },
};

/** Network sister sites for worldwide dinner-count substantiation. */
export const NETWORK_PROOF = [
  { label: 'myCHEF Dubai', href: 'https://mychef.ae' },
  { label: 'myCHEF Bali', href: 'https://mychef.id' },
  { label: 'myCHEF Cape Town', href: 'https://mychefs.co.za' },
] as const;

export function gbpForReviewSite(
  siteId: 'oahu' | 'maui' | 'kauai' | 'bigisland' | 'hub',
): GbpDesk {
  if (siteId === 'hub') return GBP_DESKS.maui;
  return GBP_DESKS[siteId];
}
