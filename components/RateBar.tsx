'use client';

import { useEffect, useRef, type RefObject } from 'react';
import { usePathname } from 'next/navigation';
import { CtaLink } from '@/components/Cta';
import { useIsland } from '@/components/IslandProvider';
import { formatBand, formatFrom, getDayRate, getTiers } from '@/data/rateCard';
import { islandOffers } from '@/data/offers';
import { isInquiryIsland, primaryCtaLabel } from '@/data/islands';
import { DESK_MAILTO, DESK_TEL, DESK_WHATSAPP } from '@/lib/contact';
import { whatsappHref } from '@/lib/whatsapp';
import { localPathFromPathname } from '@/lib/switchPath';

/**
 * Sticky published-rate + convert bar (hub + every island shell).
 * Kauaʻi + Hawaiʻi Island: mobile inquiry CTA (not “Book now”), hidden on /quote.
 */
export default function RateBar() {
  const { islandId, hostMode, href } = useIsland();
  const pathname = usePathname();
  const local = localPathFromPathname(pathname || '/', islandId, hostMode);
  const onQuote = local === '/quote' || local.startsWith('/quote/');
  const barRef = useRef<HTMLDivElement>(null);
  const inquiry = isInquiryIsland(islandId);

  useEffect(() => {
    const el = barRef.current;
    const sync = () => {
      const hidden =
        onQuote ||
        (inquiry && typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches);
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
    if (inquiry) mq.addEventListener('change', sync);
    return () => {
      ro.disconnect();
      if (inquiry) mq.removeEventListener('change', sync);
      document.documentElement.style.setProperty('--rate-bar-h', '0px');
    };
  }, [onQuote, islandId, inquiry]);

  if (onQuote) return null;

  const quoteLabel = islandId ? (inquiry ? 'Inquiry' : primaryCtaLabel(islandId)) : 'Get a quote';
  const quoteHref = islandId ? href(`/quote?island=${islandId}`) : href('/quote');
  const pricingHref = href('/pricing');
  const waHref = whatsappHref(islandId);

  if (inquiry && islandId) {
    const from = islandOffers[islandId].fromPp;
    return (
      <div
        ref={barRef}
        data-rate-bar="sticky-mobile-inquiry"
        className="rate-bar-site fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper md:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div className="mx-auto flex max-w-spread items-center justify-between gap-2 px-3 py-2">
          <div className="min-w-0">
            <p className="truncate text-[11px] leading-snug text-mute">From ${from}/guest</p>
            <CtaLink href={quoteHref} variant="primary" className="mt-1 min-h-10 px-3 text-[13px]">
              Inquiry
            </CtaLink>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <CtaLink
              href={DESK_TEL}
              variant="secondary"
              className="min-h-10 min-w-10 px-2.5 text-[12px]"
              aria-label="Call (808) 468-7748"
            >
              Call
            </CtaLink>
            <CtaLink
              href={DESK_MAILTO}
              variant="secondary"
              className="min-h-10 min-w-10 px-2.5 text-[12px]"
              aria-label="Email quotes@mychef-hawaii.com"
            >
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

  let teaser: string;
  let desktopTeaser: string;
  if (!islandId) {
    teaser = 'Private chef from $195/guest · Stay Chef from $1,250/day';
    desktopTeaser = 'Statewide floors (Oʻahu) — Private chef from $195/guest · Stay Chef from $1,250/day';
  } else {
    const core = getTiers(islandId).find((t) => t.tier === 'CORE');
    const day = getDayRate(islandId);
    const band = core ? formatBand(core) : '';
    teaser = `Signature ${band} · Stay Chef ${formatFrom(day.from)}/day`;
    desktopTeaser = teaser;
  }

  return (
    <Bar
      barRef={barRef}
      teaser={teaser}
      desktopTeaser={desktopTeaser}
      quoteLabel={quoteLabel}
      quoteHref={quoteHref}
      waHref={waHref}
      pricingHref={pricingHref}
    />
  );
}

function Bar({
  barRef,
  teaser,
  desktopTeaser,
  quoteLabel,
  quoteHref,
  waHref,
  pricingHref,
}: {
  barRef: RefObject<HTMLDivElement | null>;
  teaser: string;
  desktopTeaser: string;
  quoteLabel: string;
  quoteHref: string;
  waHref: string;
  pricingHref: string;
}) {
  return (
    <div
      ref={barRef}
      className="rate-bar-site fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="mx-auto flex max-w-spread flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-2.5 lg:px-10">
        <p className="min-w-0 truncate text-[12px] leading-snug text-mute sm:text-[13px]">
          <span className="sm:hidden">{teaser}</span>
          <span className="hidden sm:inline">{desktopTeaser}</span>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <CtaLink href={quoteHref} variant="primary" className="min-h-11 px-4 text-[13px]">
            {quoteLabel}
          </CtaLink>
          <CtaLink href={waHref} variant="secondary" className="min-h-11 px-4 text-[13px]">
            WhatsApp
          </CtaLink>
          <CtaLink
            href={pricingHref}
            variant="secondary"
            className="hidden min-h-11 px-4 text-[13px] sm:inline-flex"
          >
            Rate card
          </CtaLink>
        </div>
      </div>
    </div>
  );
}
