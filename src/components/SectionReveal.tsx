import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

/**
 * Scroll-reveal primitive — motion per site token signature
 * (--site-motion-ms / --site-motion-ease / --site-reveal-rise), collapsing to
 * instant under prefers-reduced-motion (handled in CSS).
 */
export default function SectionReveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: {
  children: ReactNode;
  /** Stagger delay in ms (e.g. 60ms steps for card grids). */
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [revealed]);

  // All supported tags share the HTMLElement observer contract; typed as div.
  const Tag = as as 'div';
  return (
    <Tag
      ref={ref}
      className={`reveal-site${revealed ? ' is-revealed' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
