import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import type { CtaBlock } from '@/platform/types';

/**
 * QuoteCTA — the one primary + one secondary action per page (design.md §4).
 * Microcopy law: never "Book now" — you get a written quote.
 */
export default function QuoteCTA({
  cta,
  heading = 'Get a written quote',
  className = '',
}: {
  cta: CtaBlock;
  heading?: string;
  className?: string;
}) {
  const { link } = useSite();
  const href = cta.href.startsWith('/') ? cta.href : link(cta.href);
  const secondaryHref = cta.secondaryHref
    ? cta.secondaryHref.startsWith('/')
      ? cta.secondaryHref
      : link(cta.secondaryHref)
    : undefined;
  return (
    <div className={`band-site ${className}`}>
      <div className="section-pad mx-auto max-w-6xl px-6">
        <h2 className="h2-site max-w-2xl">{heading}</h2>
        <p className="mt-4 max-w-xl text-ink-2">
          {cta.note ?? "The button is not “Book now.” You tell us the table; we send a written quote — and that quote is the confirmed total."}
        </p>
        <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-5">
          <Link to={href} className="cta-site w-full sm:w-auto">
            {cta.label}
          </Link>
          {cta.secondaryLabel && secondaryHref ? (
            <Link to={secondaryHref} className="cta-secondary-site justify-center sm:justify-start">
              {cta.secondaryLabel} →
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
