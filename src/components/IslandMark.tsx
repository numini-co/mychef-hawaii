import type { SiteId } from '@/platform/tokens';

/**
 * Per-island brand marks — sit beside the myCHEF wordmark.
 * Each world gets a distinct silhouette; all inherit currentColor.
 */
export default function IslandMark({
  siteId,
  className = 'h-8 w-8',
}: {
  siteId: SiteId;
  className?: string;
}) {
  const common = {
    viewBox: '0 0 40 40',
    className,
    fill: 'none',
    stroke: 'currentColor',
    role: 'img' as const,
    'aria-hidden': true,
  };

  switch (siteId) {
    case 'oahu':
      return (
        <svg {...common} aria-label="Oʻahu mark">
          {/* Diamond Head ridge + metropolitan horizon */}
          <path
            d="M3 29h34M6 29 14 18l4 5 8-14 5 9 4 11"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M8 29v-4M13 29v-7M18 29v-3M23 29v-9M28 29v-5" strokeWidth="1.2" />
          <circle cx="31" cy="10" r="2.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'maui':
      return (
        <svg {...common} aria-label="Maui mark">
          {/* Haleakalā arc + golden-hour sun */}
          <path d="M4 30c6-12 10-18 16-18s10 6 16 18" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M8 30c4-8 7-12 12-12s8 4 12 12" strokeWidth="1.2" opacity="0.7" />
          <circle cx="20" cy="11" r="3" strokeWidth="1.4" />
        </svg>
      );
    case 'kauai':
      return (
        <svg {...common} aria-label="Kauaʻi mark">
          {/* Botanical canopy + estate ridge */}
          <path
            d="M20 34V18M20 18c-7-1-11-7-9-13 5 1 8 6 9 13 1-7 4-12 9-13 2 6-2 12-9 13Z"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M6 34c5-6 9-8 14-8s9 2 14 8" strokeWidth="1.4" />
        </svg>
      );
    case 'bigisland':
      return (
        <svg {...common} aria-label="Big Island mark">
          {/* Volcanic peak on basalt — hard geometry */}
          <path d="M4 32h32M8 32 20 6l12 26" strokeWidth="1.6" strokeLinejoin="miter" />
          <path d="M14 32 20 18l6 14" strokeWidth="1.2" />
          <path d="M20 6v4" strokeWidth="1.4" />
        </svg>
      );
    default:
      return (
        <svg {...common} aria-label="Four-island mark">
          {/* Atlas: four islands, geographic-ish */}
          <circle cx="11" cy="16" r="3.2" strokeWidth="1.5" />
          <circle cx="27" cy="13" r="3.6" strokeWidth="1.5" />
          <circle cx="14" cy="28" r="2.6" strokeWidth="1.5" />
          <circle cx="29" cy="27" r="3" strokeWidth="1.5" />
        </svg>
      );
  }
}
