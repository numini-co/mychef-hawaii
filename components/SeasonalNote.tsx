import type { IslandId } from '@/data/islands';
import { islandHref } from '@/lib/paths';

/**
 * Time-boxed seasonal link from island money pages to that island's
 * Thanksgiving 2026 post. Renders only on builds dated on or before
 * 27 Nov 2026 (Hawaii time); the daily build after that drops it.
 */
const THANKSGIVING_2026_LAST_DAY = '2026-11-27';

const THANKSGIVING: Record<IslandId, { path: string; anchor: string; line: string }> = {
  oahu: {
    path: '/blog/thanksgiving-dinner-oahu',
    anchor: 'Thanksgiving dinner on Oʻahu',
    line: 'Restaurant buffet or a chef-cooked dinner at the house, and what the house version includes.',
  },
  maui: {
    path: '/blog/thanksgiving-dinner-maui',
    anchor: 'Thanksgiving dinner on Maui',
    line: 'Three ways to do the meal, and how the villa you are staying in changes the plan.',
  },
  kauai: {
    path: '/blog/thanksgiving-dinner-kauai',
    anchor: 'Thanksgiving on Kauaʻi',
    line: 'North Shore or South Shore, resort buffet, pick-up meal or a chef at the rental.',
  },
  bigisland: {
    path: '/blog/thanksgiving-dinner-kona',
    anchor: 'Thanksgiving dinner in Kona',
    line: 'Resort buffet, to-go meal or a chef at the rental, and where you stay on the west side.',
  },
};

function hawaiiToday(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Pacific/Honolulu' }).format(new Date());
}

export default function SeasonalNote({ islandId, hostMode }: { islandId: IslandId; hostMode: boolean }) {
  if (hawaiiToday() > THANKSGIVING_2026_LAST_DAY) return null;
  const t = THANKSGIVING[islandId];
  if (!t) return null;
  return (
    <aside aria-label="Thanksgiving 2026" className="border-b border-line bg-sand">
      <div className="mx-auto w-full max-w-container px-5 py-5 lg:px-10">
        <p className="max-w-[80ch] text-[15px] leading-[1.6] text-ink">
          <span className="font-medium">Thanksgiving is Thursday 26 November 2026.</span>{' '}
          Planning the meal at your rental? Read{' '}
          <a className="underline underline-offset-4" href={islandHref(islandId, hostMode, t.path)}>
            {t.anchor}
          </a>
          : {t.line}
        </p>
      </div>
    </aside>
  );
}
