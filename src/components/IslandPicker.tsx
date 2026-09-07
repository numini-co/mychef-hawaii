import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Check, ChevronDown } from 'lucide-react';
import { useSite } from '@/platform/IslandProvider';
import { ISLAND_IDS, SITE_META } from '@/platform/tokens';
import type { SiteId } from '@/platform/tokens';
import { RATES } from '@/platform/config';
import IslandMark from './IslandMark';

/** Menu order: the statewide desk first, then the islands. */
const OPTIONS: { id: SiteId; note: string }[] = [
  { id: 'hub', note: 'All four islands — compare and choose' },
  ...ISLAND_IDS.map((id) => ({
    id,
    note: `${RATES[id].coreBand}/guest · Stay Chef from $${RATES[id].stayChefDay}/day`,
  })),
];

/**
 * The island chip beside the wordmark. It reads as the current site and opens
 * the switcher, so the network is reachable from the top of every page without
 * spending a nav slot on it.
 */
export default function IslandPicker() {
  const { siteId } = useSite();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement | null>(null);
  const button = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const label = siteId === 'hub' ? 'All islands' : SITE_META[siteId].shortName;

  return (
    <div ref={wrap} className="relative shrink-0">
      <button
        ref={button}
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="motion-site inline-flex min-h-11 items-center gap-2 text-ink"
      >
        <IslandMark siteId={siteId} className="h-8 w-8 shrink-0" />
        <span className="eyebrow-site !mb-0 hidden !leading-none sm:inline">{label}</span>
        <ChevronDown
          aria-hidden="true"
          className={`motion-site h-4 w-4 shrink-0 opacity-60 ${open ? 'rotate-180' : ''}`}
        />
        <span className="sr-only">Change island</span>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Choose an island"
          className="card-site absolute left-0 top-full z-50 mt-2 w-[min(88vw,22rem)] overflow-hidden p-1"
        >
          {OPTIONS.map((o) => {
            const active = o.id === siteId;
            return (
              <button
                key={o.id}
                type="button"
                role="menuitem"
                onClick={() => {
                  setOpen(false);
                  const isLiveDomain =
                    typeof window !== 'undefined' &&
                    window.location.hostname.includes('mychef-hawaii.com');
                  if (isLiveDomain) {
                    if (o.id === 'hub') {
                      window.location.href = 'https://mychef-hawaii.com/';
                    } else {
                      window.location.href = `https://${o.id}.mychef-hawaii.com/`;
                    }
                  } else {
                    navigate(SITE_META[o.id].basePath || '/');
                  }
                }}
                aria-current={active ? 'true' : undefined}
                className="motion-site flex w-full items-center gap-3 p-3 text-left hover:bg-surface-site"
              >
                <IslandMark siteId={o.id} className="h-7 w-7 shrink-0" />
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-base leading-tight">
                    {o.id === 'hub' ? 'Hawaiʻi — the desk' : SITE_META[o.id].name}
                  </span>
                  <span className="tabular-site block text-xs text-ink-2">{o.note}</span>
                </span>
                {active ? <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-accent-site" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
