/**
 * In-content cross-host sell modules (re-audit §3.3).
 * Always emits absolute https hrefs so prerendered HTML carries crawl equity.
 */
import { getIslandHref } from '@/platform/navigation';
import type { SiteId } from '@/platform/tokens';
import { SITE_META } from '@/platform/tokens';

const ISLAND_DIFF: Record<Exclude<SiteId, 'hub'>, { anchor: string; blurb: string }> = {
  oahu: {
    anchor: 'Private chef on Oʻahu — Waikīkī to North Shore',
    blurb: 'Metro depth, Honolulu Fish Auction mornings, from $125/guest.',
  },
  maui: {
    anchor: 'Private chef on Maui — Wailea to Kapalua',
    blurb: 'Resort villas and the network’s deepest wedding week, from $150/guest.',
  },
  kauai: {
    anchor: 'Private chef on Kauaʻi — Hanalei to Poʻipū',
    blurb: 'Two-shore estates and unhurried retreat catering, from $150/guest.',
  },
  bigisland: {
    anchor: 'Private chef on the Big Island — Kona to Kohala',
    blurb: 'Gated-community protocol and discreet villa dinners, from $150/guest.',
  },
};

/** Island homepage + /quote: sell multi-island hub coordination. */
export function MultiIslandCrossSell() {
  return (
    <aside
      className="mx-auto mt-12 max-w-3xl border-t border-line-site px-6 pt-10"
      aria-label="Multi-island planning"
    >
      <p className="eyebrow-site">Statewide coordination</p>
      <h2 className="h2-site mt-2">Visiting more than one island?</h2>
      <p className="measure-site mt-3 text-ink-2">
        One coordinator covers all four Hawaiian islands with one written proposal, one dietary ledger,
        and resident culinary leads on each shore.
      </p>
      <p className="mt-5">
        <a
          href="https://mychef-hawaii.com/multi-island-catering-hawaii"
          className="cta-site inline-flex"
        >
          Multi-island catering Hawaii →
        </a>
      </p>
    </aside>
  );
}

/** Island weddings: sell hub multi-island wedding week. */
export function WeddingMultiIslandCrossSell() {
  return (
    <aside
      className="mx-auto mt-12 max-w-3xl rounded-xl border border-line-site bg-surface-site px-6 py-8"
      aria-label="Multi-island wedding week"
    >
      <p className="eyebrow-site">Wedding week across islands</p>
      <h2 className="h2-site mt-2">Wedding week spanning Maui + Oʻahu?</h2>
      <p className="measure-site mt-3 text-ink-2">
        Welcome dinner on one island, reception on another — still one coordinator and one itemized
        written quote across the itinerary.
      </p>
      <p className="mt-5">
        <a href="https://mychef-hawaii.com/multi-island-catering-hawaii" className="link-site font-medium">
          See multi-island catering →
        </a>
      </p>
    </aside>
  );
}

/** Hub /islands: rich cards with descriptive anchors to each flagship. */
export function IslandFlagshipCards() {
  const ids = ['oahu', 'maui', 'kauai', 'bigisland'] as const;
  return (
    <section className="mx-auto mt-10 max-w-3xl px-6" aria-label="Island flagship sites">
      <h2 className="h2-site mb-6">Choose your dedicated local site</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {ids.map((id) => {
          const d = ISLAND_DIFF[id];
          return (
            <li key={id}>
              <a
                href={getIslandHref(id)}
                className="block min-h-11 border border-line-site px-4 py-4 transition-colors hover:border-accent-site/40"
              >
                <span className="eyebrow-site">{SITE_META[id].shortName}</span>
                <span className="mt-2 block font-medium text-ink">{d.anchor}</span>
                <span className="mt-1 block text-sm text-ink-2">{d.blurb}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/** Island guides: planning a second island. */
export function SiblingGuideCrossSell({ siteId }: { siteId: Exclude<SiteId, 'hub'> }) {
  const siblings = (['oahu', 'maui', 'kauai', 'bigisland'] as const).filter((id) => id !== siteId);
  return (
    <aside
      className="mx-auto mt-10 max-w-3xl border border-dashed border-line-site px-5 py-6"
      aria-label="Planning a second island"
    >
      <p className="eyebrow-site">Planning a second island?</p>
      <p className="mt-2 text-sm text-ink-2">
        Open the sibling guide on another flagship, or coordinate both under one statewide proposal.
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {siblings.map((id) => (
          <li key={id}>
            <a href={`${getIslandHref(id).replace(/\/$/, '')}/guides`} className="link-site">
              {ISLAND_DIFF[id].anchor.split('—')[0].trim()} guides →
            </a>
          </li>
        ))}
        <li>
          <a href="https://mychef-hawaii.com/multi-island-catering-hawaii" className="link-site font-medium">
            Multi-island catering →
          </a>
        </li>
      </ul>
    </aside>
  );
}
