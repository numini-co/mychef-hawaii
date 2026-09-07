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
    name: 'The Hawaiʻi desk',
    role: 'Four islands, one team',
    initials: 'HI',
  },
  oahu: {
    name: 'Your Oʻahu host',
    role: 'Private chef · Waikīkī to the North Shore',
    photo: '/img/hosts/host-oahu.webp',
    alt: 'The Oʻahu service host in a villa kitchen',
    initials: 'OA',
  },
  maui: {
    name: 'Your Maui host',
    role: 'Private chef · Wailea to Kapalua',
    photo: '/img/hosts/host-maui.webp',
    alt: 'The Maui service host on a villa lānai',
    initials: 'MA',
  },
  kauai: {
    name: 'Your Kauaʻi host',
    role: 'Private chef · both shores',
    photo: '/img/hosts/host-kauai.webp',
    alt: 'The Kauaʻi service host on a plantation veranda',
    initials: 'KA',
  },
  bigisland: {
    name: 'Your Big Island host',
    role: 'Private chef · Kona–Kohala',
    initials: 'BI',
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

  const place = isHub ? 'Hawaiʻi' : SITE_META[siteId].name;
  const band = isHub ? 'Signature dinners $125–$250 a guest' : `Signature dinners ${RATES[siteId as IslandId].coreBand} a guest`;

  // The greeting a host would actually send — island-specific, not a form.
  const GREETINGS: Record<SiteId, string> = {
    hub: `Aloha! I'm helping a family plan a week in Hawaiʻi and I'd love to talk through a chef for the stay.`,
    oahu: `Aloha! We're staying on Oʻahu and I'd love to talk through a chef for the house.`,
    maui: `Aloha! We're staying on Maui and I'd love to talk through a chef for the villa.`,
    kauai: `Aloha! We're staying on Kauaʻi and I'd love to talk through a chef for the estate.`,
    bigisland: `Aloha! We're staying on the Big Island and I'd love to talk through a chef for the house.`,
  };
  const waText = encodeURIComponent(GREETINGS[siteId]);

  return (
    <div ref={wrap} className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      {open ? (
        <div
          role="dialog"
          aria-label={`Contact the ${place} desk`}
          className="card-site mb-4 w-[min(88vw,20rem)] overflow-hidden"
        >
          <div className="flex items-center gap-4 p-5">
            <span className="h-14 w-14 shrink-0 overflow-hidden rounded-full">
              <Avatar host={host} size={56} />
            </span>
            <div className="min-w-0">
              <p className="font-display text-lg leading-tight">{host.name}</p>
              <p className="text-sm text-ink-2">{host.role}</p>
            </div>
          </div>
          <div className="rule-t px-5 py-4">
            <p className="text-sm text-ink-2">
              Aloha — I run the {place} desk. Tell me the island, the dates and the table, and I'll come back
              with a written quote. {band}.
            </p>
            <p className="mt-2 text-xs text-ink-2 tabular-site">
              WhatsApp: <a href={`https://wa.me/${CONTACT.whatsappNumber}?text=${waText}`} target="_blank" rel="noopener noreferrer" className="text-ink font-medium underline underline-offset-2 hover:text-accent-site">+971 55 174 4849</a>
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
              <span>WhatsApp <span className="hidden sm:inline font-normal text-xs text-ink-2">(+971 55 174 4849)</span></span>
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

      <button
        ref={button}
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? 'Close contact panel' : `Contact the ${place} desk`}
        className="motion-site ml-auto flex h-14 w-14 items-center justify-center overflow-hidden rounded-full shadow-lg transition-transform hover:scale-105"
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
    </div>
  );
}
