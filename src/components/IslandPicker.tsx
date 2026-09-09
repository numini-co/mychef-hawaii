import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router';
import { Check, ChevronDown, X } from 'lucide-react';
import { useSite } from '@/platform/IslandProvider';
import { SITE_META, TOKENS, tokensToCssVars } from '@/platform/tokens';
import type { SiteId } from '@/platform/tokens';
import { formatMoney, RATES } from '@/platform/config';
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
    note: `${RATES.oahu.coreBand}/guest · Stay Chef from ${formatMoney(RATES.oahu.stayChefDay)}/day`,
  },
  {
    id: 'maui',
    title: 'Maui Flagship',
    subtitle: 'Wailea · Mākena · Kapalua · Upcountry',
    note: `${RATES.maui.coreBand}/guest · Stay Chef from ${formatMoney(RATES.maui.stayChefDay)}/day`,
  },
  {
    id: 'kauai',
    title: 'Kauaʻi Flagship',
    subtitle: 'Hanalei · Princeville · Poʻipū · Kōloa',
    note: `${RATES.kauai.coreBand}/guest · Stay Chef from ${formatMoney(RATES.kauai.stayChefDay)}/day`,
  },
  {
    id: 'bigisland',
    title: 'Big Island Flagship',
    subtitle: 'Kona–Kohala · Kūkiʻo · Hualālai · Mauna Lani',
    note: `${RATES.bigisland.coreBand}/guest · Stay Chef from ${formatMoney(RATES.bigisland.stayChefDay)}/day`,
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
  // Portal renders on document.body (outside .site-shell), so re-apply site tokens
  // or --site-surface / ink colors resolve to nothing and the sheet stays transparent.
  const portalVars = tokensToCssVars(TOKENS[siteId]) as CSSProperties;

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

  /** Mobile pill stays short ("Islands"); desktop can show the full hub label. */
  const label = siteId === 'hub' ? 'Islands' : SITE_META[siteId].shortName;
  const labelDesktop = siteId === 'hub' ? 'All Islands' : SITE_META[siteId].shortName;

  const modalContent = open && typeof document !== 'undefined' ? (
    createPortal(
      <div style={portalVars}>
        {/* Backdrop: dims page and closes dialog on mobile & desktop */}
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Modal: Bottom sheet on mobile, elegant dialog on desktop */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Choose an island site"
          className="fixed inset-x-0 bottom-0 z-[101] max-h-[85dvh] overflow-y-auto rounded-t-3xl border border-line-site bg-card-site p-4 pb-8 text-ink shadow-2xl transition-all animate-in slide-in-from-bottom duration-200 sm:bottom-auto sm:left-1/2 sm:top-24 sm:-translate-x-1/2 sm:max-h-[36rem] sm:w-[440px] sm:rounded-2xl sm:p-3 sm:pb-3"
          style={{
            backgroundColor: 'var(--site-card, #F7F5F0)',
            color: 'var(--site-ink, #23201A)',
            paddingBottom: 'max(1.5rem, calc(env(safe-area-inset-bottom, 0px) + 1rem))',
          }}
        >
          {/* Mobile Sheet Drag Handle */}
          <div className="mx-auto mb-2.5 h-1 w-10 rounded-full bg-ink-2/20 sm:hidden" aria-hidden="true" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-line-site pb-2.5 px-2 mb-2">
            <div>
              <p className="eyebrow-site !mb-0 text-[11px] font-semibold uppercase tracking-wider text-ink-2">
                Select Island Site
              </p>
              <p className="text-xs text-ink-2">Local resident chefs & published pricing</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-[36px] min-w-[36px] items-center justify-center rounded-lg text-xs font-medium text-ink-2 hover:bg-black/5 hover:text-ink active:scale-95"
              aria-label="Close island picker"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* Island Options */}
          <div className="space-y-1.5">
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
                  className={`motion-site flex min-h-[56px] w-full items-center gap-3 rounded-xl p-3 text-left transition-all ${
                    active
                      ? 'bg-accent-site/15 text-ink ring-1 ring-accent-site/40'
                      : 'text-ink hover:bg-black/5 active:bg-black/10'
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-site border border-line-site/80 shadow-xs">
                    <IslandMark siteId={o.id} className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="block font-display text-sm font-medium leading-tight">
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
      </div>,
      document.body,
    )
  ) : null;

  return (
    <div ref={wrap} className="relative shrink-0">
      <button
        ref={button}
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={`Current island: ${labelDesktop}. Tap to change island.`}
        className="motion-site inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-line-site/70 bg-surface-site/60 px-2 py-0.5 text-ink shadow-xs transition-colors hover:border-accent-site/50 hover:bg-surface-site active:scale-[0.98] sm:min-h-[42px] sm:px-2.5 sm:py-1"
      >
        <IslandMark siteId={siteId} className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
        <span className="eyebrow-site !mb-0 font-medium tracking-wider text-ink text-xs truncate max-w-[72px] sm:hidden">
          {label}
        </span>
        <span className="eyebrow-site !mb-0 hidden font-medium tracking-wider text-ink text-xs sm:inline">
          {labelDesktop}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`motion-site h-3.5 w-3.5 shrink-0 opacity-70 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {modalContent}
    </div>
  );
}
