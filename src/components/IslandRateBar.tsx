import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { RATES } from '@/platform/config';
import type { IslandId } from '@/platform/tokens';

/**
 * Published-rate reminder on every island page.
 * Fixed to the bottom on small screens so full-bleed heroes stay intact.
 */
export default function IslandRateBar() {
  const { siteId, link, isHub } = useSite();
  if (isHub) return null;
  const rates = RATES[siteId as IslandId];
  if (!rates) return null;

  return (
    <div className="rate-bar-site fixed inset-x-0 bottom-0 z-40 border-t border-line-site px-4 py-2.5 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 text-xs sm:text-sm">
        <p className="tabular-site min-w-0 truncate text-ink-2">
          <span className="text-ink">Signature {rates.coreBand}</span>
          <span aria-hidden="true"> · </span>
          Stay Chef from ${rates.stayChefDay}/day
          <span className="hidden sm:inline">
            <span aria-hidden="true"> · </span>
            Date Night {rates.dateNight}
          </span>
        </p>
        <Link to={link('pricing')} className="link-site shrink-0">
          Rate card →
        </Link>
      </div>
    </div>
  );
}
