import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Check, ChevronDown, X } from 'lucide-react';
import { useSite } from '@/platform/IslandProvider';
import { SITE_META } from '@/platform/tokens';
import type { SiteId } from '@/platform/tokens';
import { RATES } from '@/platform/config';
import { getIslandHref, navigateToIsland } from '@/platform/navigation';
import IslandMark from './IslandMark';

/** Menu order: the statewide desk first, then the four islands. */
const OPTIONS: { id: SiteId; title: string; subtitle: string; note: string }[] = [
  {
    id: 'hub',
    title: 'Statewide Coordination Hub',
    subtitle: 'All Four Hawaiian Islands',
    note: 'Multi-island trips, corporate retreats, statewide quotes',
  },
  {
    id: 'oahu',
    title: 'Oʻahu Flagship',
    subtitle: 'Honolulu · Waikīkī · Kahala · North Shore',
    note: `${RATES.oahu.coreBand}/guest · Stay Chef from $${RATES.oahu.stayChefDay}/day`,
  },
  {
    id: 'maui',
    title: 'Maui Flagship',
    subtitle: 'Wailea · Mākena · Kapalua · Upcountry',
    note: `${RATES.maui.coreBand}/guest · Stay Chef from $${RATES.maui.stayChefDay}/day`,
  },
  {
    id: 'kauai',
    title: 'Kauaʻi Flagship',
    subtitle: 'Hanalei · Princeville · Poʻipū · Kōloa',
    note: `${RATES.kauai.coreBand}/guest · Stay Chef from $${RATES.kauai.stayChefDay}/day`,
  },
  {
    id: 'bigisland',
    title: 'Big Island Flagship',
    subtitle: 'Kona–Kohala · Kūkiʻo · Hualālai · Mauna Lani',
    note: `${RATES.bigisland.coreBand}/guest · Stay Chef from $${RATES.bigisland.stayChefDay}/day`,
  },
];

/**
 * The island selector chip beside the wordmark.
 * Visible on all screens: displays the active island with its custom SVG mark,
 * and opens a responsive, touch-optimized picker sheet on mobile and dropdown on desktop.
 */
export default function IslandPicker() {
  const { siteId } = useSite();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement | null>(null);
  const button = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const label = siteId === 'hub' ? 'All Islands' : SITE_META[siteId].shortName;

  return (
    <div ref={wrap} className="relative shrink-0">
      <button
        ref={button}
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={`Current island: ${label}. Tap to change island.`}
        className="motion-site inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-line-site/70 bg-surface-site/60 px-2.5 py-1 text-ink shadow-xs transition-colors hover:border-accent-site/50 hover:bg-surface-site active:scale-[0.98]"
      >
        <IslandMark siteId={siteId} className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
        <span className="eyebrow-site !mb-0 font-medium tracking-wider text-ink text-xs">
          {label}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`motion-site h-3.5 w-3.5 shrink-0 opacity-70 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open ? (
        <>
          {/* Backdrop: dims page and closes dialog on mobile & desktop */}
          <div
            className="fixed inset-0 z-50 bg-black/45 backdrop-blur-[2px] transition-opacity"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Floating dialog: perfectly positioned in viewport on mobile & desktop */}
          <div
            role="dialog"
            aria-label="Choose an island site"
            className="card-site fixed inset-x-3 top-[calc(var(--nav-bar)+env(safe-area-inset-top,0px)+8px)] z-50 mx-auto max-h-[calc(100dvh-5.5rem)] w-auto max-w-sm overflow-y-auto rounded-2xl border border-line-site bg-surface-site p-2.5 shadow-2xl sm:absolute sm:inset-x-auto sm:left-0 sm:top-full sm:mt-2 sm:max-h-[34rem] sm:w-88 sm:rounded-xl sm:p-2 sm:shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-line-site pb-2 px-2 pt-1 mb-1.5">
              <div>
                <p className="eyebrow-site !mb-0 text-[11px] font-semibold uppercase tracking-wider text-ink-2">
                  Choose Island Site
                </p>
                <p className="text-xs text-ink-2">Local resident chefs & published pricing</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded-lg text-xs font-medium text-ink-2 hover:bg-black/5 hover:text-ink"
                aria-label="Close island picker"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Island Options */}
            <div className="space-y-1">
              {OPTIONS.map((o) => {
                const active = o.id === siteId;
                return (
                  <a
                    key={o.id}
                    href={getIslandHref(o.id)}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      navigateToIsland(o.id, navigate);
                    }}
                    aria-current={active ? 'true' : undefined}
                    className={`motion-site flex min-h-[52px] w-full items-center gap-3 rounded-xl p-2.5 text-left transition-colors ${
                      active
                        ? 'bg-accent-site/10 text-ink ring-1 ring-accent-site/35'
                        : 'text-ink hover:bg-black/5 active:bg-black/10'
                    }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-site border border-line-site/80 shadow-xs">
                      <IslandMark siteId={o.id} className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="block font-display text-[15px] font-medium leading-tight">
                          {o.title}
                        </span>
                        {active ? (
                          <span className="rounded bg-accent-site/20 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-accent-site">
                            Active
                          </span>
                        ) : null}
                      </div>
                      <span className="block text-[11px] text-ink-2 truncate">{o.subtitle}</span>
                      <span className="tabular-site block text-[11px] font-medium text-accent-site truncate mt-0.5">
                        {o.note}
                      </span>
                    </div>
                    {active ? (
                      <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-accent-site ml-1" />
                    ) : null}
                  </a>
                );
              })}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
