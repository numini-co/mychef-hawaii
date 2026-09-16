import type { InVillaId } from './inVillaServices';

/**
 * Hero stills for the In-Villa Services silo (hub + eight role pages).
 *
 * Additive registry — deliberately separate from data/photos.ts and from the
 * inVillaServices copy module so this wave's generated imagery drops in without
 * touching those shared files. Not read by scripts/unique-audit.mjs (the silo
 * is not part of the money/document uniqueness sets). Each file is a unique,
 * scene-specific still matching the page's reserved `wantsHeroImage` brief, so a
 * paper-header silo page can render a photographic hero without changing any URL.
 */
export interface InVillaStill {
  file: string;
  alt: string;
}

export const inVillaStills: Record<InVillaId, InVillaStill> = {
  hub: {
    file: '/photos/heroes/in-villa-hub.jpg',
    alt: 'A myCHEF villa hospitality team — chef, host and server — walking a Hawaiian villa lānai walkway toward the house at golden hour.',
  },
  'villa-team': {
    file: '/photos/heroes/in-villa-villa-team.jpg',
    alt: 'A five-person villa hospitality team gathered for a pre-service briefing on an open Hawaiian lānai pavilion at golden hour.',
  },
  'weekly-private-chef': {
    file: '/photos/heroes/in-villa-weekly-private-chef.jpg',
    alt: 'A chef plating a fresh island breakfast at a bright open Hawaiian villa kitchen island, an assistant alongside in soft morning light.',
  },
  butlers: {
    file: '/photos/heroes/in-villa-butlers.jpg',
    alt: 'A lead host setting a long teak table with linen and glassware on a Hawaiian villa lānai above the ocean in late-afternoon light.',
  },
  waiters: {
    file: '/photos/heroes/in-villa-waiters.jpg',
    alt: 'Two uniformed servers finishing a candlelit long table beside a Hawaiian villa infinity pool at blue hour.',
  },
  bartenders: {
    file: '/photos/heroes/in-villa-bartenders.jpg',
    alt: 'A bartender shaking a cocktail at a portable bar cart beside a Hawaiian villa pool at sunset, citrus and coupe glasses in warm light.',
  },
  barista: {
    file: '/photos/heroes/in-villa-barista.jpg',
    alt: 'A barista pouring latte art at a compact espresso station on a Hawaiian villa counter at breakfast, a family table beyond.',
  },
  'villa-provisioning': {
    file: '/photos/heroes/in-villa-villa-provisioning.jpg',
    alt: 'Fresh island produce, farm eggs and bread in canvas grocery bags beside a stack of receipts on a Hawaiian villa counter — provisioning laid out before arrival.',
  },
  'breakfast-service': {
    file: '/photos/heroes/in-villa-breakfast-service.jpg',
    alt: 'A chef-cooked family breakfast served on a Hawaiian villa lānai in the morning, pool and palms glowing beyond.',
  },
};

export function inVillaStill(id: InVillaId): InVillaStill {
  return inVillaStills[id];
}
