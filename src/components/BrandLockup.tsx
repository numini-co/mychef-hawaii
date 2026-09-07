import { useSite } from '@/platform/IslandProvider';
import { SITE_META } from '@/platform/tokens';
import Wordmark from './Wordmark';
import IslandMark from './IslandMark';

/** myCHEF wordmark + the current island's mark (and name from sm up). */
export default function BrandLockup({ className = '' }: { className?: string }) {
  const { siteId } = useSite();
  const name = SITE_META[siteId].shortName;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Wordmark className="h-7 w-auto" />
      <span className="h-7 w-px shrink-0 bg-current opacity-25" aria-hidden="true" />
      <IslandMark siteId={siteId} className="h-8 w-8 shrink-0" />
      {siteId !== 'hub' ? (
        <span className="eyebrow-site !mb-0 hidden !leading-none sm:inline">{name}</span>
      ) : null}
    </span>
  );
}
