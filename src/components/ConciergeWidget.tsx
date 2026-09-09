import { useEffect, useRef, useState } from 'react';
import { Mail, MessageCircle, X } from 'lucide-react';
import { useSite } from '@/platform/IslandProvider';
import { CONTACT, ISLAND_EMAIL, RATES } from '@/platform/config';
import { SITE_META } from '@/platform/tokens';
import type { IslandId, SiteId } from '@/platform/tokens';

/**
 * The floating concierge. One person per site, a portrait where the library
 * has one, and a monogram where it does not. Opens to who they are and two
 * ways to reach the desk — WhatsApp or email.
 *
 * The WhatsApp number is provisioned at launch (config.ts); the button goes
 * live the moment the real number lands there.
 */

interface Host {
  name: string;
  role: string;
  /** Present when a portrait exists; absent falls back to the monogram. */
  photo?: string;
  alt?: string;
  initials: string;
}

const HOSTS: Record<SiteId, Host> = {
  hub: {
    name: 'Executive Chef Keanu',
    role: 'Culinary Director · The Hawaiʻi Desk',
    photo: '/img/hosts/host-hub.webp',
    alt: 'Executive Chef Keanu in the estate kitchen',
    initials: 'KS',
  },
  oahu: {
    name: 'Chef Makana',
    role: 'Oʻahu Lead · Waikīkī to North Shore',
    photo: '/img/hosts/host-oahu.webp',
    alt: 'Chef Makana in an oceanview kitchen',
    initials: 'MC',
  },
  maui: {
    name: 'Chef Chloe',
    role: 'Maui Lead · Wailea to Kapalua',
    photo: '/img/hosts/host-maui.webp',
    alt: 'Chef Chloe on a sunset villa lānai',
    initials: 'CS',
  },
  kauai: {
    name: 'Chef Ikaika',
    role: 'Kauaʻi Lead · Both Shores',
    photo: '/img/hosts/host-kauai.webp',
    alt: 'Chef Ikaika on an estate veranda',
    initials: 'IL',
  },
  bigisland: {
    name: 'Chef Daniel',
    role: 'Big Island Lead · Kona–Kohala',
    photo: '/img/hosts/host-bigisland.webp',
    alt: 'Chef Daniel in an open-air villa kitchen',
    initials: 'DK',
  },
};

function Avatar({ host, size }: { host: Host; size: number }) {
  const cls = 'block h-full w-full rounded-full object-cover';
  if (host.photo) {
    return <img src={host.photo} alt={host.alt} width={size} height={size} className={cls} loading="lazy" decoding="async" />;
  }
  return (
    <span
      aria-hidden="true"
      className="flex h-full w-full items-center justify-center rounded-full font-accent-site"
      style={{
        background: 'color-mix(in srgb, var(--site-accent) 14%, var(--site-card))',
        color: 'var(--site-ink-base)',
        fontSize: size * 0.34,
      }}
    >
      {host.initials}
    </span>
  );
}

export default function ConciergeWidget() {
  const { siteId, isHub } = useSite();
  const host = HOSTS[siteId];
  const [open, setOpen] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      return sessionStorage.getItem('mychef_chat_bubble_dismissed') === 'true';
    } catch {
      return false;
    }
  });
  const [docked, setDocked] = useState(true);
  const wrap = useRef<HTMLDivElement | null>(null);
  const button = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const sync = () => {
      if (!mq.matches) {
        setDocked(true);
        return;
      }
      setDocked(window.scrollY > 280);
    };
    sync();
    window.addEventListener('scroll', sync, { passive: true });
    mq.addEventListener('change', sync);
    return () => {
      window.removeEventListener('scroll', sync);
      mq.removeEventListener('change', sync);
    };
  }, []);

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

  const place = isHub ? 'Hawaiʻi' : SITE_META[siteId].name;
  const band = isHub ? 'Signature dinners $125–$250 a guest' : `Signature dinners ${RATES[siteId as IslandId].coreBand} a guest`;
  const dock = 'calc(var(--rate-bar-h) + 0.85rem)';

  // The greeting a host would actually send — island-specific, not a form.
  const GREETINGS: Record<SiteId, string> = {
    hub: `Aloha! I'm helping a family plan a week in Hawaiʻi and I'd love to talk through a chef for the stay.`,
    oahu: `Aloha! We're staying on Oʻahu and I'd love to talk through a chef for the house.`,
    maui: `Aloha! We're staying on Maui and I'd love to talk through a chef for the villa.`,
    kauai: `Aloha! We're staying on Kauaʻi and I'd love to talk through a chef for the estate.`,
    bigisland: `Aloha! We're staying on the Big Island and I'd love to talk through a chef for the house.`,
  };
  const waText = encodeURIComponent(GREETINGS[siteId]);

  if (!docked && !open) return null;

  return (
    <div
      ref={wrap}
      className="fixed z-50"
      style={{
        right: 'max(1.25rem, env(safe-area-inset-right, 0px))',
        bottom: dock,
      }}
    >
      {open ? (
        <div
          role="dialog"
          aria-label={`Contact the ${place} desk`}
          className="card-site mb-4 w-[min(88vw,20rem)] overflow-hidden"
        >
          <div className="flex items-center justify-between p-5 pb-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
                <Avatar host={host} size={48} />
              </span>
              <div className="min-w-0">
                <p className="font-display text-base leading-tight truncate">{host.name}</p>
                <p className="text-xs text-ink-2 truncate">{host.role}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close concierge panel"
              className="ml-2 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-ink-2 hover:bg-black/5 hover:text-ink active:scale-95 transition-colors"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <div className="rule-t px-5 py-4">
            <p className="text-sm text-ink-2">
              Aloha — I run the {place} desk. Tell me the island, the dates and the table, and I'll come back
              with a written quote. {band}.
            </p>
            <p className="mt-2 text-xs text-ink-2 tabular-site">
              WhatsApp: <a href={`https://wa.me/${CONTACT.whatsappNumber}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="text-ink font-medium underline underline-offset-2 hover:text-accent-site">{CONTACT.whatsappDisplay}</a>
            </p>
          </div>
          <div className="rule-t grid grid-cols-2">
            <a
              href={`https://wa.me/${CONTACT.whatsappNumber}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="motion-site flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-ink hover:bg-surface-site"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4 text-accent-site" />
              <span>WhatsApp <span className="hidden sm:inline font-normal text-xs text-ink-2">({CONTACT.whatsappDisplay})</span></span>
            </a>
            <a
              href={`mailto:${isHub ? CONTACT.email : ISLAND_EMAIL[siteId as IslandId]}?subject=${encodeURIComponent(`myCHEF Hawaiʻi — ${place} inquiry`)}`}
              className="motion-site flex items-center justify-center gap-2 border-l border-line-site px-4 py-3.5 text-sm font-medium text-ink hover:bg-surface-site"
            >
              <Mail aria-hidden="true" className="h-4 w-4 text-accent-site" />
              Email
            </a>
          </div>
        </div>
      ) : null}

      {/* Floating active chat bubble prompt with dismiss button */}
      {!open && !bubbleDismissed ? (
        <div
          className="motion-site group mb-2.5 ml-auto flex max-w-[270px] items-center gap-2 rounded-2xl border border-line-site/80 bg-surface-site p-2 pl-3 text-left text-xs font-medium text-ink shadow-xl transition-all hover:border-accent-site"
          style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.14)' }}
        >
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex flex-1 items-center gap-2 text-left cursor-pointer"
            aria-label="Open concierge chat"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="leading-snug">Hello! If there's anything we can help you with, chat with us 👋</span>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setBubbleDismissed(true);
              try {
                sessionStorage.setItem('mychef_chat_bubble_dismissed', 'true');
              } catch {}
            }}
            className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-ink-2/60 hover:bg-black/5 hover:text-ink active:scale-90 transition-colors"
            aria-label="Dismiss chat bubble"
            title="Dismiss"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      ) : null}

      <div className="relative ml-auto w-fit">
        <button
          ref={button}
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close contact panel' : `Contact ${host.name} on the ${place} desk`}
          className="motion-site relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
          style={{ boxShadow: 'var(--site-card-shadow, 0 8px 24px rgba(0,0,0,0.18))' }}
        >
          {open ? (
            <span className="flex h-full w-full items-center justify-center bg-card-site">
              <X aria-hidden="true" className="h-5 w-5 text-ink" />
            </span>
          ) : (
            <Avatar host={host} size={56} />
          )}
        </button>
        {!open ? (
          <span
            className="pointer-events-none absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xs"
            aria-hidden="true"
          >
            <MessageCircle className="h-3 w-3 fill-current" />
          </span>
        ) : null}
      </div>
    </div>
  );
}
