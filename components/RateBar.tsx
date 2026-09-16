'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { CtaLink } from '@/components/Cta';
import { useIsland } from '@/components/IslandProvider';
import { formatBand, formatFrom, getDayRate, getTiers } from '@/data/rateCard';
import { isInquiryIsland, primaryCtaLabel } from '@/data/islands';
import { DESK_MAILTO, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';
import { localPathFromPathname } from '@/lib/switchPath';

/**
 * Sticky mobile convert bar (hub + every island shell).
 * Primary: /quote on island hosts, /quote?island=oahu on the hub.
 * Secondary: tel + mailto + wa.me. Hidden on /quote (the form already covers submit).
 */
export default function RateBar() {
  const { islandId, hostMode, href } = useIsland();
  const pathname = usePathname();
  const local = localPathFromPathname(pathname || '/', islandId, hostMode);
  const onQuote = local === '/quote' || local.startsWith('/quote/');
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    const sync = () => {
      const hidden =
        onQuote || (typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches);
      document.documentElement.style.setProperty(
        '--rate-bar-h',
        hidden || !el ? '0px' : `${el.offsetHeight}px`,
      );
    };
    sync();
    if (!el) return;
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    const mq = window.matchMedia('(min-width: 768px)');
    mq.addEventListener('change', sync);
    return () => {
      ro.disconnect();
      mq.removeEventListener('change', sync);
      document.documentElement.style.setProperty('--rate-bar-h', '0px');
    };
  }, [onQuote, islandId]);

  if (onQuote) return null;

  const inquiry = isInquiryIsland(islandId);
  const quoteLabel = islandId ? (inquiry ? primaryCtaLabel(islandId) : 'Get a quote') : 'Get a quote';
  const quoteHref = islandId ? href(`/quote?island=${islandId}`) : href('/quote?island=oahu');

  let teaser: string;
  if (!islandId) {
    teaser = 'From $125/guest · Stay Chef from $850/day';
  } else {
    const core = getTiers(islandId).find((t) => t.tier === 'CORE');
    const day = getDayRate(islandId);
    const band = core ? formatBand(core) : '';
    teaser = `Signature ${band} · Stay Chef ${formatFrom(day.from)}/day`;
  }

  return (
    <div
      ref={barRef}
      data-rate-bar="sticky-mobile"
      className="rate-bar-site fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="mx-auto flex max-w-spread items-center justify-between gap-2 px-3 py-2">
        <div className="min-w-0">
          <p className="truncate text-[11px] leading-snug text-mute">{teaser}</p>
          <CtaLink href={quoteHref} variant="primary" className="mt-1 min-h-10 px-3 text-[13px]">
            {quoteLabel}
          </CtaLink>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <CtaLink href={DESK_TEL} variant="secondary" className="min-h-10 min-w-10 px-2.5 text-[12px]" aria-label="Call (808) 468-7748">
            Call
          </CtaLink>
          <CtaLink href={DESK_MAILTO} variant="secondary" className="min-h-10 min-w-10 px-2.5 text-[12px]" aria-label="Email quotes@mychef-hawaii.com">
            Email
          </CtaLink>
          <CtaLink
            href={DESK_WHATSAPP}
            variant="secondary"
            className="min-h-10 min-w-10 px-2.5 text-[12px]"
            aria-label="Message us on WhatsApp"
          >
            WA
          </CtaLink>
        </div>
      </div>
    </div>
  );
}
