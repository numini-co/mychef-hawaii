import { useState } from 'react';
import { Link } from 'react-router';
import type { FaqItem } from '@/platform/types';

/**
 * FAQAccordion — full-prose answers with internal links. FAQPage JSON-LD is
 * wired by the SEO layer of the page that owns the faq[] (PageFactory does it).
 * Keyboard-complete: buttons with aria-expanded/aria-controls.
 */
export default function FAQAccordion({ items, className = '' }: { items: FaqItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className={`rule-t ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        return (
          <div key={item.q} className="rule-b">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="motion-site flex w-full items-center justify-between gap-4 py-4 text-left font-medium hover:text-ink-2"
              >
                <span>{item.q}</span>
                <span aria-hidden="true" className="text-accent-site">{isOpen ? '−' : '+'}</span>
              </button>
            </h3>
            <div id={panelId} hidden={!isOpen} className="pb-5">
              <p className="measure-site text-ink-2">{item.a}</p>
              {item.links?.length ? (
                <p className="mt-3 flex flex-wrap gap-4 text-sm">
                  {item.links.map((l) => (
                    <Link key={l.href} to={l.href} className="link-site">
                      {l.label}
                    </Link>
                  ))}
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
