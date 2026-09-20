'use client';

import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import HostLink from '@/components/HostLink';
import { DURATION, EASE_STANDARD } from '@/lib/motion';
import { cn } from '@/lib/utils';
import type { IslandId } from '@/data/islands';

export interface NavTarget {
  label: string;
  island: IslandId | 'root';
  path?: string;
  note?: string;
}

export function NavMenu({
  label,
  items,
  align = 'left',
}: {
  label: string;
  items: NavTarget[];
  align?: 'left' | 'right';
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const leave = useRef<number>(0);
  const reduce = useReducedMotion();
  const menuId = useId();

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const show = () => {
    window.clearTimeout(leave.current);
    setOpen(true);
  };
  const hide = () => {
    leave.current = window.setTimeout(() => setOpen(false), 140);
  };

  return (
    <div ref={ref} className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-8 items-center gap-1 py-1 text-sm font-medium text-[var(--nav-fg)] hover:underline underline-offset-4"
      >
        {label}
        <span className="text-[11px] text-mute" aria-hidden>
          {open ? '–' : '+'}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            role="menu"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 8 }}
            transition={{ duration: DURATION.fast, ease: EASE_STANDARD }}
            className={cn(
              'absolute top-full z-50 mt-1.5 min-w-[14rem] border border-line bg-paper py-1.5 text-ink shadow-[0_12px_28px_rgba(22,20,18,0.10)]',
              align === 'right' ? 'right-0' : 'left-0',
            )}
          >
            {items.map((item) => (
              <HostLink
                key={`${item.island}-${item.path ?? '/'}-${item.label}`}
                island={item.island}
                path={item.path ?? '/'}
                className="flex min-h-9 items-baseline justify-between gap-3 px-3.5 py-2 text-left text-sm text-ink hover:bg-sand hover:underline underline-offset-4"
              >
                <span>{item.label}</span>
                {item.note ? <span className="text-[12px] text-mute">{item.note}</span> : null}
              </HostLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MobileDisclosure({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-11 w-full items-center justify-between gap-3 py-2.5 text-left"
      >
        <span className="text-lg font-medium text-ink">{label}</span>
        <span className="text-sm text-mute">{open ? '–' : '+'}</span>
      </button>
      {open ? <div className="flex flex-col pb-2.5">{children}</div> : null}
    </div>
  );
}
