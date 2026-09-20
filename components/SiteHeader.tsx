'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import BrandMark from '@/components/BrandMark';
import { EnquireCta } from '@/components/Cta';
import HostLink from '@/components/HostLink';
import IslandSwitcher from '@/components/IslandSwitcher';
import { MobileDisclosure, NavMenu, type NavTarget } from '@/components/NavMenu';
import { useIsland } from '@/components/IslandProvider';
import { islandOrder, islands, type IslandId } from '@/data/islands';
import { moneyNeighborhoods } from '@/data/offers';
import { inVillaPages } from '@/data/inVillaServices';
import { DURATION, EASE_STANDARD } from '@/lib/motion';
import { hubSwitchPath, islandSwitchPath, isHomePath, localPathFromPathname } from '@/lib/switchPath';
import { cn } from '@/lib/utils';

const IN_VILLA_NAV: NavTarget[] = inVillaPages.map((p) => ({
  label: p.id === 'hub' ? 'All in-villa services' : p.breadcrumbName,
  island: 'root',
  path: p.path,
}));

const HUB_GUIDE_ITEMS: NavTarget[] = [
  { label: 'FAQ', island: 'root', path: '/faq' },
  { label: 'How it works', island: 'root', path: '/how-it-works' },
  { label: 'Menus', island: 'root', path: '/menus' },
  { label: 'Coverage', island: 'root', path: '/coverage' },
  { label: 'Pricing', island: 'root', path: '/pricing' },
  { label: 'Contact', island: 'root', path: '/contact' },
  { label: 'About', island: 'root', path: '/about' },
];

function areaItems(islandId: NonNullable<ReturnType<typeof useIsland>['islandId']>): NavTarget[] {
  return [
    { label: 'Map notes', island: islandId, path: '/areas' },
    { label: 'Live corridors', island: islandId, path: '/locations' },
    ...moneyNeighborhoods[islandId].map((hood) => ({
      label: hood.name,
      island: islandId,
      path: `/${hood.slug}`,
    })),
  ];
}

function MobileLink({ item, onPick }: { item: NavTarget; onPick: () => void }) {
  return (
    <HostLink
      island={item.island}
      path={item.path ?? '/'}
      onClick={onPick}
      className="flex min-h-11 items-baseline justify-between gap-3 py-2 text-sm text-ink hover:underline"
    >
      <span>{item.label}</span>
      {item.note ? <span className="text-[13px] text-mute">{item.note}</span> : null}
    </HostLink>
  );
}

function DrawerIslandSwitcher({
  local,
  islandId,
  onPick,
}: {
  local: string;
  islandId: IslandId | null;
  onPick: () => void;
}) {
  const rowCls =
    'flex min-h-11 items-center justify-between gap-3 rounded-sm border px-3.5 py-2 text-sm text-ink';
  return (
    <div className="border-t border-line px-5 py-4">
      <p className="pb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-mute">
        Change island
      </p>
      <div className="flex flex-col gap-1.5">
        <HostLink
          island="root"
          path={hubSwitchPath(local)}
          onClick={onPick}
          className={cn(rowCls, !islandId ? 'border-brass bg-sand' : 'border-line')}
        >
          <span>All Islands</span>
          {!islandId ? (
            <span className="text-[11px] uppercase tracking-[0.14em] text-brass">Here</span>
          ) : null}
        </HostLink>
        {islandOrder.map((id) => (
          <HostLink
            key={id}
            island={id}
            path={islandSwitchPath(local, id)}
            onClick={onPick}
            className={cn(rowCls, islandId === id ? 'border-brass bg-sand' : 'border-line')}
          >
            <span>{islands[id].name}</span>
            {islandId === id ? (
              <span className="text-[11px] uppercase tracking-[0.14em] text-brass">Here</span>
            ) : islands[id].state === 'inquiry' ? (
              <span className="text-[11px] uppercase tracking-[0.14em] text-mute">Inquiry</span>
            ) : null}
          </HostLink>
        ))}
      </div>
    </div>
  );
}

const linkCls = 'text-sm font-medium text-[var(--nav-fg)] hover:underline underline-offset-4';
const mobilePrimaryCls =
  'flex min-h-11 items-center border-b border-line py-2.5 text-lg font-medium text-ink';

export default function SiteHeader() {
  const { islandId, hostMode } = useIsland();
  const pathname = usePathname();
  const local = localPathFromPathname(pathname || '/', islandId, hostMode);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onHero, setOnHero] = useState(isHomePath(local));
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOnHero(Boolean(document.querySelector('.hero-bleed')));
  }, [pathname]);

  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);

  const overlay = onHero && !scrolled && !drawerOpen;

  return (
    <header
      data-chrome={overlay ? 'overlay' : 'solid'}
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-14 border-b transition-[background-color,border-color,color] duration-300',
        overlay ? 'border-transparent bg-transparent' : 'border-line bg-paper/92 backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-spread items-center justify-between gap-3 px-5 lg:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <HostLink
            island={islandId ?? 'root'}
            aria-label={islandId ? `myCHEF ${islands[islandId].name} home` : 'myCHEF Hawaii home'}
            className="flex items-center gap-2 font-display text-[1.1875rem] font-light tracking-tight text-[var(--nav-fg)]"
          >
            <BrandMark className="h-6 w-6" />
            <span>
              my<span className="text-brass">CHEF</span>
            </span>
          </HostLink>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-4 lg:flex">
          {islandId ? (
            <>
              <HostLink island={islandId} path="/" className={linkCls}>
                Private chef
              </HostLink>
              <HostLink island={islandId} path="/catering" className={linkCls}>
                Catering
              </HostLink>
              <HostLink island={islandId} path="/weddings" className={linkCls}>
                Weddings
              </HostLink>
              <HostLink island={islandId} path="/mobile-bar" className={linkCls}>
                Bar
              </HostLink>
              <NavMenu label="Areas" items={areaItems(islandId)} />
              <NavMenu
                label="Guide"
                items={[
                  { label: 'FAQ', island: islandId, path: '/faq' },
                  { label: 'How it works', island: islandId, path: '/how-it-works' },
                  { label: 'Menus', island: islandId, path: '/menus' },
                  { label: 'Coverage', island: islandId, path: '/coverage' },
                  { label: 'Pricing', island: islandId, path: '/pricing' },
                  { label: 'Contact', island: islandId, path: '/contact' },
                  { label: 'About', island: islandId, path: '/about' },
                ]}
              />
            </>
          ) : (
            <>
              <HostLink island="root" path="/" className={linkCls}>
                Private chef
              </HostLink>
              <HostLink island="root" path="/catering" className={linkCls}>
                Catering
              </HostLink>
              <HostLink island="root" path="/weddings" className={linkCls}>
                Weddings
              </HostLink>
              <HostLink island="root" path="/mobile-bar" className={linkCls}>
                Bar
              </HostLink>
              <NavMenu label="Villa Services" items={IN_VILLA_NAV} />
              <NavMenu label="Guide" items={HUB_GUIDE_ITEMS} />
            </>
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <IslandSwitcher />
          <EnquireCta island={islandId} variant={overlay ? 'light' : 'primary'} size="compact" />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <IslandSwitcher />
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center px-2 text-sm font-medium text-[var(--nav-fg)]"
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setDrawerOpen((v) => !v)}
          >
            {drawerOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {drawerOpen && (
              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: DURATION.fast, ease: EASE_STANDARD }}
                className="fixed inset-x-0 bottom-0 top-14 z-40 flex flex-col bg-paper lg:hidden"
              >
                <div className="flex flex-1 flex-col overflow-y-auto overscroll-contain">
                  <nav aria-label="Mobile" className="flex flex-col px-5 py-3">
              {islandId ? (
                <>
                  <HostLink island={islandId} path="/" className={mobilePrimaryCls}>
                    Private chef
                  </HostLink>
                  <HostLink island={islandId} path="/catering" className={mobilePrimaryCls}>
                    Catering
                  </HostLink>
                  <HostLink island={islandId} path="/weddings" className={mobilePrimaryCls}>
                    Weddings
                  </HostLink>
                  <HostLink island={islandId} path="/mobile-bar" className={mobilePrimaryCls}>
                    Bar
                  </HostLink>
                  <MobileDisclosure label="Areas">
                    {areaItems(islandId).map((item) => (
                      <MobileLink key={item.path} item={item} onPick={() => setDrawerOpen(false)} />
                    ))}
                  </MobileDisclosure>
                  <MobileDisclosure label="Guide">
                    {(
                      [
                        { label: 'FAQ', path: '/faq' },
                        { label: 'How it works', path: '/how-it-works' },
                        { label: 'Menus', path: '/menus' },
                        { label: 'Coverage', path: '/coverage' },
                        { label: 'Pricing', path: '/pricing' },
                        { label: 'Contact', path: '/contact' },
                        { label: 'About', path: '/about' },
                      ] as const
                    ).map((item) => (
                      <MobileLink
                        key={item.path}
                        item={{ label: item.label, island: islandId, path: item.path }}
                        onPick={() => setDrawerOpen(false)}
                      />
                    ))}
                  </MobileDisclosure>
                </>
              ) : (
                <>
                  <HostLink island="root" path="/" className={mobilePrimaryCls}>
                    Private chef
                  </HostLink>
                  <HostLink island="root" path="/catering" className={mobilePrimaryCls}>
                    Catering
                  </HostLink>
                  <HostLink island="root" path="/weddings" className={mobilePrimaryCls}>
                    Weddings
                  </HostLink>
                  <HostLink island="root" path="/mobile-bar" className={mobilePrimaryCls}>
                    Bar
                  </HostLink>
                  <MobileDisclosure label="Villa Services">
                    {IN_VILLA_NAV.map((item) => (
                      <MobileLink key={item.path} item={item} onPick={() => setDrawerOpen(false)} />
                    ))}
                  </MobileDisclosure>
                  <MobileDisclosure label="Guide">
                    {HUB_GUIDE_ITEMS.map((item) => (
                      <MobileLink key={item.path} item={item} onPick={() => setDrawerOpen(false)} />
                    ))}
                  </MobileDisclosure>
                </>
              )}
                  </nav>
                  <DrawerIslandSwitcher
                    local={local}
                    islandId={islandId}
                    onPick={() => setDrawerOpen(false)}
                  />
                </div>
                <div className="border-t border-line px-5 py-4">
                  <EnquireCta island={islandId} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  );
}
