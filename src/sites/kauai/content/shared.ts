import type { CtaBlock, ContentSection, FaqItem } from '@/platform/types';

/**
 * Shared Kauaʻi copy constants — approved numbers only (info.md / Ch.5).
 * Fee-stack words are fixed network-wide; the figures below are the
 * published Kauaʻi rate card and nothing else.
 */

export const FEE_FOOTNOTE =
  '20% service charge and Hawaiʻi GET up to 4.7120% always appear on their own lines (GET valid through 12/31/2030). 50% deposit locks the date. Gratuity is always voluntary. Groceries at cost, receipts on request.';

export const CTA_QUOTE: CtaBlock = {
  label: 'Begin an inquiry',
  href: 'quote',
  secondaryLabel: 'See the rate card',
  secondaryHref: 'pricing',
  note: 'Kauaʻi runs inquiry-first: you tell us the table, we send a written quote — and that quote is the confirmed total. We never hold a date we can’t crew.',
};

export const CTA_RETREAT: CtaBlock = {
  label: 'Plan a retreat table',
  href: 'quote',
  secondaryLabel: 'For retreat hosts',
  secondaryHref: 'retreat-catering/for-hosts',
  note: 'One contract, every meal, dietary depth included. The written quote is the confirmed total.',
};

/** The one-bridge logistics panel, reusable as a section body. */
export const BRIDGE_SECTION: ContentSection = {
  eyebrow: 'Logistics honesty',
  heading: 'One bridge. One road.',
  body: [
    'Everything past Hanalei — Wainiha, Hāʻena, the end of the road — crosses one one-lane bridge and one stretch of Kūhiō Highway. HDOT closures are documented reality: nightly full closures and slope-stabilization work happen, and heavy rain can close the road with little warning.',
    'We plan around it in writing: far-North service requires 72-hour notice, and if a closure lands on your date we reschedule rather than forfeit. No competitor puts this clause on a webpage. We do.',
  ],
  links: [
    { label: 'The Hanalei bridge clause, in full', href: 'guides/hanalei-bridge-clause' },
    { label: 'Travel zones and shore surcharges', href: 'pricing/travel-zones' },
  ],
};

/** Provenance sentence reused across Kauaʻi pages (named farms, verified market vocabulary). */
export const PROVENANCE =
  'Sourcing is named, not implied: goat cheese from Kunana Dairy, greens from the Saturday Hanalei Farmers’ Market and its growers, Kauaʻi grass-fed beef, day-boat fish when the boats go out.';

export const SEASON_NORTH = 'Summer is the North Shore’s prime — calm water, long light, June through September and the holidays.';
export const SEASON_SOUTH = 'The South Shore carries the winter — drier and calmer November through March, when the North gets its rain.';

export const INQUIRY_FAQ: FaqItem = {
  q: 'Why does Kauaʻi run inquiry-first?',
  a: 'Because the island’s chef pool is thin and we will not hold a date we cannot crew. You send dates, shore, and headcount; we answer with a written quote that is the confirmed total — or an honest no. The 50% deposit only ever follows the written quote.',
  links: [{ label: 'The honesty register', href: '/kauai/trust' }],
};
