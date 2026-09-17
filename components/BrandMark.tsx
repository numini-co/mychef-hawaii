import { cn } from '@/lib/utils';

/**
 * myCHEF brand mark — a fine-line medallion crest.
 *
 * Inside a thin ring, an "M" monogram doubles as twin Pacific island peaks
 * rising from an ocean horizon line, with a brass sun cradled in the saddle
 * (a Hawaiian sunrise that also echoes the ʻokina accent in the wordmark).
 * The ring, peaks and horizon are drawn in `currentColor` so the mark adapts
 * to the header's light overlay and solid ink states; only the sun carries the
 * fixed brass accent, keeping the mark refined rather than ornate.
 */
export default function BrandMark({
  className,
  accent = 'var(--color-brass)',
}: {
  className?: string;
  accent?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-hidden="true"
      className={cn('shrink-0', className)}
    >
      {/* medallion ring */}
      <circle cx="16" cy="16" r="13.4" stroke="currentColor" strokeWidth="1.15" />
      {/* brass sunrise cradled in the saddle of the peaks */}
      <circle cx="16" cy="12.7" r="1.95" fill={accent} />
      {/* ocean horizon / plate line */}
      <path d="M8.7 20.5h14.6" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
      {/* twin island peaks forming an M monogram */}
      <path
        d="M9 20.5 12.6 12 16 16 19.4 12 23 20.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
