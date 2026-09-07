import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { ISLAND_IDS, SITE_META } from '@/platform/tokens';
import type { SiteId } from '@/platform/tokens';
import IslandMark from './IslandMark';
import IslandPicker from './IslandPicker';
import Wordmark from './Wordmark';

/** Header links per site — commercial doors first, then depth. */
const NAV_LINKS: Record<SiteId, { label: string; slug: string }[]> = {
  hub: [
    { label: 'Islands', slug: 'islands' },
    { label: 'Pricing', slug: 'pricing' },
    { label: 'Guides', slug: 'guides' },
    { label: 'Trust', slug: 'trust' },
    { label: 'Quote', slug: 'quote' },
  ],
  oahu: [
    { label: 'Private chef', slug: 'private-chef' },
    { label: 'Pricing', slug: 'pricing' },
    { label: 'Catering', slug: 'catering' },
    { label: 'Locations', slug: 'locations' },
    { label: 'Guides', slug: 'guides' },
    { label: 'Quote', slug: 'quote' },
  ],
  maui: [
    { label: 'Private chef', slug: 'private-chef' },
    { label: 'Pricing', slug: 'pricing' },
    { label: 'Weddings', slug: 'weddings' },
    { label: 'Catering', slug: 'catering' },
    { label: 'Guides', slug: 'guides' },
    { label: 'Quote', slug: 'quote' },
  ],
  kauai: [
    { label: 'Private chef', slug: 'private-chef' },
    { label: 'Stays', slug: 'stay-chef' },
    { label: 'Retreats', slug: 'retreat-catering' },
    { label: 'Weddings', slug: 'weddings' },
    { label: 'Pricing', slug: 'pricing' },
    { label: 'Quote', slug: 'quote' },
  ],
  bigisland: [
    { label: 'Private chef', slug: 'private-chef' },
    { label: 'Pricing', slug: 'pricing' },
    { label: 'Catering', slug: 'catering' },
    { label: 'Corridor', slug: 'locations' },
    { label: 'Guides', slug: 'guides' },
    { label: 'Quote', slug: 'quote' },
  ],
};

/** Island switcher — marks + names, no keyword anchors. */
export function IslandSwitcher({ className = '' }: { className?: string }) {
  const { siteId } = useSite();
  return (
    <nav aria-label="Island sites" className={className}>
      <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
        <li>
          <Link
            to="/"
            className={`inline-flex min-h-11 items-center gap-1.5 ${siteId === 'hub' ? 'text-accent-site' : 'link-site'}`}
          >
            <IslandMark siteId="hub" className="h-5 w-5" />
            Hub
          </Link>
        </li>
        {ISLAND_IDS.map((id) => (
          <li key={id}>
            <Link
              to={SITE_META[id].basePath || '/'}
              className={`inline-flex min-h-11 items-center gap-1.5 ${siteId === id ? 'text-accent-site' : 'link-site'}`}
            >
              <IslandMark siteId={id} className="h-5 w-5" />
              {SITE_META[id].shortName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Navbar() {
  const { siteId, basePath, link, tokens } = useSite();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const transparent = tokens.navTransparentOverHero && !scrolled;

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!tokens.navTransparentOverHero) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [tokens.navTransparentOverHero]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const position = tokens.navTransparentOverHero ? 'fixed inset-x-0 top-0' : 'sticky top-0';
  // Over a hero the nav keeps its page ink, so it carries a scrim cut from the
  // page ground — dark ground darkens the photo, light ground lightens it.
  const ground = transparent ? 'nav-scrim-site' : 'rule-b';
  const groundStyle = transparent ? undefined : { backgroundColor: 'var(--site-bg)' };

  return (
    <header
      className={`${position} z-50 motion-site transition-colors ${ground}`}
      style={groundStyle}
    >
      <div className="mx-auto flex h-[var(--nav-h)] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Wordmark links home; the island chip beside it opens the switcher. */}
        <div className="flex min-w-0 shrink items-center gap-2.5 text-ink">
          <Link to={basePath || '/'} className="shrink-0 text-ink" aria-label={`${SITE_META[siteId].name} home`}>
            <Wordmark className="h-7 w-auto" />
          </Link>
          <span className="h-7 w-px shrink-0 bg-current opacity-25" aria-hidden="true" />
          <IslandPicker />
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV_LINKS[siteId].filter((l) => l.slug !== 'quote').map((l) => (
            <NavLink
              key={l.slug}
              to={link(l.slug)}
              className={({ isActive }) =>
                `motion-site whitespace-nowrap text-sm ${isActive ? 'text-accent-site' : 'text-ink hover:text-accent-site'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          {siteId === 'oahu' ? (
            <span className="flex items-center gap-1 text-sm text-ink-2" aria-label="Language">
              <Link to={basePath} className="link-site">EN</Link>
              <span aria-hidden="true">/</span>
              <Link to={`${basePath}/ja`} lang="ja" className="link-site">日本語</Link>
            </span>
          ) : null}
          <Link to={link('quote')} className="cta-site !px-4 !py-2.5">
            Get a quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="rule-t bg-site px-4 py-5 sm:px-6 lg:hidden"
          style={{ maxHeight: 'calc(100dvh - var(--nav-h))', overflowY: 'auto' }}
        >
          <nav aria-label="Primary mobile">
            <ul className="space-y-1">
              {NAV_LINKS[siteId].map((l) => (
                <li key={l.slug}>
                  <Link
                    to={link(l.slug)}
                    className="flex min-h-11 items-center text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              {siteId === 'oahu' ? (
                <li>
                  <Link to={`${basePath}/ja`} lang="ja" className="flex min-h-11 items-center text-ink" onClick={() => setOpen(false)}>
                    日本語
                  </Link>
                </li>
              ) : null}
              <li className="pt-3">
                <Link to={link('quote')} className="cta-site w-full" onClick={() => setOpen(false)}>
                  Get a quote
                </Link>
              </li>
            </ul>
          </nav>
          <div className="rule-t mt-5 pt-4">
            <p className="eyebrow-site mb-2">The four islands</p>
            <IslandSwitcher />
          </div>
        </div>
      ) : null}
    </header>
  );
}
