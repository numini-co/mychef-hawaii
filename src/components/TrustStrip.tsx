import SectionReveal from './SectionReveal';
import { TRUST_CLAIMS } from '@/platform/config';

/**
 * TrustStrip — the four fixed claims (design.md §4). Ruled 4-up on desktop,
 * 2×2 on mobile. Skin per site tokens; words never change.
 */
export default function TrustStrip({ className = '' }: { className?: string }) {
  return (
    <div className={`rule-y ${className}`}>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px lg:grid-cols-4">
        {TRUST_CLAIMS.map((claim, i) => (
          <SectionReveal
            key={claim}
            delay={i * 60}
            className="border-line-site px-5 py-6 text-center text-sm font-medium lg:border-l lg:first:border-l-0"
          >
            {claim}
          </SectionReveal>
        ))}
      </div>
    </div>
  );
}
