/**
 * WeddingTimeline — the Maui signature module (design/home-maui.md §S4,
 * wedding.md Maui row): the five-meal wedding week as a horizontal timeline
 * in a dusk band. Desktop: hairline draws across the days on scroll progress
 * (GSAP-equivalent rAF scroll binding, GPU transform only). Mobile: side-
 * scroll snap track. Reduced-motion: fully static, hairline complete.
 */
import { useEffect, useRef } from 'react';
import SectionReveal from '@/components/SectionReveal';

interface TimelineDay {
  day: string;
  name: string;
  scope: string;
}

const WEDDING_WEEK_DAYS: TimelineDay[] = [
  { day: 'Day 1', name: 'Welcome dinner', scope: 'Family-style, 20–75 guests — from $150/guest + staffing' },
  { day: 'Day 2–3', name: 'Rehearsal dinner', scope: 'Plated, 12–40 guests — from $150/guest + staffing' },
  { day: 'Ceremony', name: 'Pūpū service', scope: 'The hour between the vows and the reception' },
  { day: 'Day 4', name: 'The reception', scope: 'Plated 2–3 courses or premium buffet, 30–75 guests' },
  { day: 'Day 5', name: 'Recovery brunch', scope: '10–40 guests, late morning, unhurried' },
];

export default function WeddingTimeline() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const line = lineRef.current;
    const track = trackRef.current;
    if (!root || !line || !track) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      line.style.transform = 'scaleX(1)';
      return;
    }

    let raf = 0;
    const desktop = window.matchMedia('(min-width: 768px)');

    const setProgress = (p: number) => {
      line.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
    };

    const onWindowScroll = () => {
      if (!desktop.matches) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = root.getBoundingClientRect();
        const vh = window.innerHeight;
        // Progress as the band travels through the viewport middle.
        const p = (vh * 0.85 - r.top) / (r.height + vh * 0.4);
        setProgress(p);
      });
    };

    const onTrackScroll = () => {
      if (desktop.matches) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = track.scrollWidth - track.clientWidth;
        setProgress(max > 0 ? track.scrollLeft / max : 1);
      });
    };

    onWindowScroll();
    onTrackScroll();
    window.addEventListener('scroll', onWindowScroll, { passive: true });
    window.addEventListener('resize', onWindowScroll, { passive: true });
    track.addEventListener('scroll', onTrackScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onWindowScroll);
      window.removeEventListener('resize', onWindowScroll);
      track.removeEventListener('scroll', onTrackScroll);
    };
  }, []);

  return (
    <div ref={rootRef}>
      {/* progress hairline */}
      <div className="relative mb-8 hidden h-px md:block" style={{ background: 'var(--site-line)' }} aria-hidden="true">
        <div
          ref={lineRef}
          className="maui-progress-line absolute inset-0"
          style={{ background: 'var(--site-accent)' }}
        />
      </div>
      <ol
        ref={trackRef}
        className="maui-timeline-track flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0"
      >
        {WEDDING_WEEK_DAYS.map((d, i) => (
          <SectionReveal as="li" key={d.name} delay={i * 120} className="min-w-[240px] md:min-w-0">
            <p className="font-display text-xl" style={{ color: 'var(--site-accent-text)', fontWeight: 400 }}>
              {d.day}
            </p>
            <h3 className="font-display mt-2 text-2xl" style={{ fontWeight: 400 }}>
              {d.name}
            </h3>
            <p className="mt-2 text-sm text-ink-2">{d.scope}</p>
          </SectionReveal>
        ))}
      </ol>
    </div>
  );
}
