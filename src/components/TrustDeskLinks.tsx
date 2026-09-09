/**
 * Shared trust-proof door links — Maps desks + network sisters.
 * Absolute https hrefs so prerendered HTML stays crawlable.
 */
import { GBP_DESKS, NETWORK_PROOF, type GbpDesk } from '@/data/trust-proof';
import type { IslandId } from '@/platform/tokens';

export function TrustDeskLinks({
  accentIsland,
  className = '',
}: {
  /** Highlight / lead with this island desk when on a flagship. */
  accentIsland?: IslandId;
  className?: string;
}) {
  const desks = Object.values(GBP_DESKS) as GbpDesk[];
  const ordered = accentIsland
    ? [...desks.filter((d) => d.id === accentIsland), ...desks.filter((d) => d.id !== accentIsland)]
    : desks;

  return (
    <aside className={`mx-auto max-w-3xl px-6 ${className}`} aria-label="Verify on Google Maps">
      <p className="eyebrow-site">Verify the desk</p>
      <p className="mt-2 text-sm text-ink-2">
        Open the Google Maps search for the island desk that matches your trip. Network sister sites
        substantiate the worldwide dinner record.
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {ordered.map((desk) => (
          <li key={desk.id}>
            <a
              href={desk.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-site font-medium"
            >
              {desk.label} →
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-ink-2">
        Worldwide:{' '}
        {NETWORK_PROOF.map((n, i) => (
          <span key={n.href}>
            {i > 0 ? ' · ' : null}
            <a href={n.href} target="_blank" rel="noopener noreferrer" className="link-site">
              {n.label}
            </a>
          </span>
        ))}
      </p>
    </aside>
  );
}
