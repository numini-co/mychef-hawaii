import { FEE_STACK_LINES } from '@/platform/config';

/**
 * Fee-stack footnote (design.md §4) — identical words network-wide (legal).
 * Skin only per site tokens. Big Island renders it in mono via font-accent-site.
 */
export default function FeeStack({ className = '', mono = false }: { className?: string; mono?: boolean }) {
  return (
    <div className={`rule-t pt-4 ${className}`}>
      <p className="eyebrow-site mb-3">The fee stack, itemized</p>
      <ul className={`space-y-1.5 text-sm text-ink-2 ${mono ? 'font-accent-site' : ''}`}>
        {FEE_STACK_LINES.map((line) => (
          <li key={line} className="flex gap-2">
            <span aria-hidden="true" className="text-accent-site">·</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
