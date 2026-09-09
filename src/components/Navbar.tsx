import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { useSite } from '@/platform/IslandProvider';
import { ISLAND_IDS, SITE_META } from '@/platform/tokens';
import type { SiteId } from '@/platform/tokens';
import { getIslandHref, navigateToIsland } from '@/platform/navigation';
import IslandMark from './IslandMark';
import IslandPicker from './IslandPicker';
import Wordmark from './Wordmark';

/** Header links per site — commercial doors first, then depth. */
const NAV_LINKS: Record<SiteId, { label: string; slug: string }[]> = {
  hub: [
    { label: 'Multi-Island', slug: 'multi-island-catering-hawaii' },
    { label: 'Islands', slug: 'islands' },
    { label: 'Pricing', slug: 'pricing' },
    { label: 'Calculator', slug: 'calculator' },
    { label: 'Guides', slug: 'guides' },
    { label: 'Trust', slug: 'trust' },
    { label: 'Quote', slug: 'quote' },
  ],
  oahu: [
    { label: 'Private chef', slug: 'private-chef' },
    { label: 'Stay Chef', slug: 'stay-chef' },
    { label: 'Pricing', slug: 'pricing' },
    { label: 'Corporate', slug: 'corporate' },
    { label: 'Catering', slug: 'catering' },
    { label: 'Locations', slug: 'locations' },
    { label: 'Quote', slug: 'quote' },
  ],
  maui: [
    { label: 'Private chef', slug: 'private-chef' },
    { label: 'Stay Chef', slug: 'stay-chef' },
    { label: 'Pricing', slug: 'pricing' },
    { label: 'Weddings', slug: 'weddings' },
    { label: 'Date Night', slug: 'services/date-night' },
    { label: 'Catering', slug: 'catering' },
    { label: 'Quote', slug: 'quote' },
  ],
  kauai: [
    { label: 'Private chef', slug: 'private-chef' },
    { label: 'Stay Chef', slug: 'stay-chef' },
    { label: 'Retreats', slug: 'retreat-catering' },
    { label: 'Weddings', slug: 'weddings' },
    { label: 'Pricing', slug: 'pricing' },
    { label: 'Quote', slug: 'quote' },
  ],
  bigisland: [
    { label: 'Private chef', slug: 'private-chef' },
    { label: 'Stay Chef', slug: 'stay-chef' },
    { label: 'Pricing', slug: 'pricing' },
    { label: 'Catering', slug: 'catering' },
    { label: 'Corridor', slug: 'locations' },
    { label: 'Quote', slug: 'quote' },
  ],
};

/** Island switcher — marks + names, interactive and touch-friendly. */
export function IslandSwitcher({
  className = '',
  onSelect,
}: {
  className?: string;
  onSelect?: () => void;
}) {
  const { siteId } = useSite();
  const navigate = useNavigate();

  return (
    <nav aria-label="Island sites" className={className}>
      <ul className="grid grid-cols-2 gap-2 text-sm sm:flex sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2">
        <li>
          <a
            href={getIslandHref('hub')}
            onClick={(e) => {
              e.preventDefault();
              onSelect?.();
              navigateToIsland('hub', navigate);
            }}
            className={`inline-flex min-h-[44px] w-full items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition-colors sm:w-auto ${
              siteId === 'hub'
                ? 'border-accent-site/40 bg-accent-site/15 font-semibold text-accent-site ring-1 ring-accent-site/30'
                : 'border-line-site/80 bg-surface-site text-ink hover:bg-black/5 active:bg-black/10'
            }`}
          >
            <IslandMark siteId="hub" className="h-5 w-5 shrink-0" />
            <span>Statewide Hub</span>
          </a>
        </li>
        {ISLAND_IDS.map((id) => (
          <li key={id}>
            <a
              href={getIslandHref(id)}
              onClick={(e) => {
                e.preventDefault();
                onSelect?.();
                navigateToIsland(id, navigate);
              }}
              className={`inline-flex min-h-[44px] w-full items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition-colors sm:w-auto ${
                siteId === id
                  ? 'border-accent-site/40 bg-accent-site/15 font-semibold text-accent-site ring-1 ring-accent-site/30'
                  : 'border-line-site/80 bg-surface-site text-ink hover:bg-black/5 active:bg-black/10'
              }`}
            >
              <IslandMark siteId={id} className="h-5 w-5 shrink-0" />
              <span>{SITE_META[id].shortName}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Navbar() {
  const { siteId, basePath, link, tokens } = useSite();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const transparent = tokens.navTransparentOverHero && !scrolled;

  // Close mobile nav on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Handle scroll state for transparent hero nav
  useEffect(() => {
    if (!tokens.navTransparentOverHero) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [tokens.navTransparentOverHero]);

  // Lock body scroll and listen for Escape key when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const position = tokens.navTransparentOverHero ? 'fixed inset-x-0 top-0' : 'sticky top-0';
  const ground = transparent ? 'nav-scrim-site' : 'rule-b';
  const groundStyle = transparent ? undefined : { backgroundColor: 'var(--site-bg)' };

  return (
    <>
      <header
        className={`${position} z-50 motion-site transition-colors ${ground}`}
        style={{
          ...(groundStyle ?? {}),
          paddingTop: 'env(safe-area-inset-top, 0px)',
        }}
      >
        <div className="mx-auto flex h-[var(--nav-bar)] max-w-6xl items-center justify-between gap-2.5 px-4 sm:gap-4 sm:px-6">
          {/* Wordmark + Island Picker Button */}
          <div className="flex min-w-0 shrink items-center gap-2 text-ink sm:gap-2.5">
            <Link
              to={basePath || '/'}
              className="inline-flex h-11 shrink-0 items-center text-ink"
              aria-label={`${SITE_META[siteId].name} home`}
            >
              <Wordmark className="h-6 w-auto sm:h-7" />
            </Link>
            <span className="h-5 w-px shrink-0 bg-current opacity-25 sm:h-7" aria-hidden="true" />
            <IslandPicker />
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex xl:gap-7">
            {NAV_LINKS[siteId]
              .filter((l) => l.slug !== 'quote')
              .map((l) => (
                <NavLink
                  key={l.slug}
                  to={link(l.slug)}
                  className={({ isActive }) =>
                    `motion-site whitespace-nowrap text-sm ${
                      isActive ? 'text-accent-site font-medium' : 'text-ink hover:text-accent-site'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            {siteId === 'oahu' ? (
              <span className="flex items-center gap-1 text-sm text-ink-2" aria-label="Language">
                <Link to={basePath} className="link-site">
                  EN
                </Link>
                <span aria-hidden="true">/</span>
                <Link to={`${basePath}/ja`} lang="ja" className="link-site">
                  日本語
                </Link>
              </span>
            ) : null}
            <Link to={link('quote')} className="cta-site !px-4 !py-2.5">
              Get a quote
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="motion-site inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink hover:bg-black/5 active:bg-black/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {open ? (
          <div
            id="mobile-nav"
            className="rule-t bg-site relative z-50 max-h-[calc(100dvh-var(--nav-h))] overflow-y-auto px-4 py-5 shadow-2xl sm:px-6 lg:hidden"
            style={{
              paddingBottom: 'max(2rem, calc(env(safe-area-inset-bottom, 0px) + 1.5rem))',
            }}
          >
            {/* Top Island Selector Card */}
            <div className="mb-6 rounded-2xl border border-line-site bg-surface-site p-4 shadow-xs">
              <div className="mb-3 flex items-center justify-between">
                <p className="eyebrow-site !mb-0 text-[11px] font-semibold uppercase tracking-wider text-ink-2">
                  Select Island Site
                </p>
                <span className="rounded bg-accent-site/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-site">
                  Active: {SITE_META[siteId].shortName}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={getIslandHref('hub')}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    navigateToIsland('hub', navigate);
                  }}
                  className={`col-span-2 flex min-h-[46px] items-center justify-between rounded-xl border p-2.5 text-xs transition-colors ${
                    siteId === 'hub'
                      ? 'border-accent-site/50 bg-accent-site/15 font-semibold text-accent-site ring-1 ring-accent-site/35'
                      : 'border-line-site/70 bg-surface-site text-ink hover:bg-black/5'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <IslandMark siteId="hub" className="h-5 w-5 shrink-0" />
                    <span className="font-medium">Statewide Hub (All Islands)</span>
                  </div>
                  <span className="text-[10px] text-ink-2">One Proposal →</span>
                </a>
                {ISLAND_IDS.map((id) => {
                  const isCurrent = siteId === id;
                  return (
                    <a
                      key={id}
                      href={getIslandHref(id)}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(false);
                        navigateToIsland(id, navigate);
                      }}
                      className={`flex min-h-[46px] items-center gap-2 rounded-xl border p-2.5 text-xs transition-colors ${
                        isCurrent
                          ? 'border-accent-site/50 bg-accent-site/15 font-semibold text-accent-site ring-1 ring-accent-site/35'
                          : 'border-line-site/70 bg-surface-site text-ink hover:bg-black/5 active:bg-black/10'
                      }`}
                    >
                      <IslandMark siteId={id} className="h-5 w-5 shrink-0" />
                      <span className="truncate">{SITE_META[id].shortName}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Primary Site Navigation Links */}
            <nav aria-label="Primary mobile" className="space-y-1">
              <p className="eyebrow-site mb-2 px-1 text-[11px] font-semibold uppercase tracking-wider text-ink-2">
                {SITE_META[siteId].name} Services & Rates
              </p>
              <ul className="space-y-1">
                {NAV_LINKS[siteId]
                  .filter((l) => l.slug !== 'quote')
                  .map((l) => {
                    const targetPath = link(l.slug);
                    const isActive =
                      location.pathname === targetPath ||
                      (l.slug === '' && location.pathname === (basePath || '/'));
                    return (
                      <li key={l.slug}>
                        <Link
                          to={targetPath}
                          className={`flex min-h-[48px] items-center justify-between rounded-xl px-3.5 py-2.5 text-base transition-colors ${
                            isActive
                              ? 'bg-accent-site/15 font-semibold text-accent-site'
                              : 'text-ink hover:bg-black/5 active:bg-black/10'
                          }`}
                          onClick={() => setOpen(false)}
                        >
                          <span>{l.label}</span>
                          {isActive ? (
                            <span
                              className="h-2 w-2 rounded-full bg-accent-site"
                              aria-hidden="true"
                            />
                          ) : (
                            <ChevronRight
                              className="h-4 w-4 text-ink-2 opacity-50"
                              aria-hidden="true"
                            />
                          )}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </nav>

            {/* Secondary Actions & CTAs */}
            <div className="mt-6 space-y-3 border-t border-line-site pt-4">
              {/* Oʻahu Japanese Language Switcher */}
              {siteId === 'oahu' ? (
                <div className="flex items-center justify-between rounded-xl border border-line-site bg-surface-site px-4 py-3 text-sm">
                  <span className="text-xs font-medium text-ink-2">Language</span>
                  <div className="flex items-center gap-3 text-xs font-semibold">
                    <Link
                      to={basePath}
                      className="text-ink hover:text-accent-site"
                      onClick={() => setOpen(false)}
                    >
                      English
                    </Link>
                    <span className="text-line-site" aria-hidden="true">
                      |
                    </span>
                    <Link
                      to={`${basePath}/ja`}
                      lang="ja"
                      className="text-ink hover:text-accent-site"
                      onClick={() => setOpen(false)}
                    >
                      日本語
                    </Link>
                  </div>
                </div>
              ) : null}

              {/* Primary Written Quote Button */}
              <Link
                to={link('quote')}
                className="cta-site flex min-h-[50px] w-full items-center justify-center text-center text-sm font-semibold uppercase tracking-wider shadow-sm"
                onClick={() => setOpen(false)}
              >
                Get a written quote →
              </Link>

              {/* WhatsApp Direct Concierge */}
              <a
                href="https://wa.me/971551744849?text=Aloha%2C%20I%20would%20like%20to%20inquire%20about%20a%20private%20chef%20in%20Hawaii."
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary-site flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                <span>WhatsApp Concierge (+971 55 174 4849)</span>
              </a>

              {/* Published fee stack guarantee */}
              <p className="px-1 text-center text-[11px] leading-relaxed text-ink-2">
                20% service charge & Hawaiʻi GET up to 4.7120% itemized on own lines · Groceries at cost ·
                The written quote is the confirmed total.
              </p>
            </div>
          </div>
        ) : null}
      </header>

      {/* Backdrop overlay for mobile navigation */}
      {open ? (
        <div
          className="fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px] lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      ) : null}
    </>
  );
}
