import { Link } from 'react-router';
import { Globe, Sparkles, Building2, Palmtree, Mountain } from 'lucide-react';
import { useSite } from '@/platform/IslandProvider';
import { ISLAND_IDS, SITE_META } from '@/platform/tokens';
import { getIslandHref } from '@/platform/navigation';
import { IslandSwitcher } from './Navbar';
import BrandLockup from './BrandLockup';

/**
 * Footer — five variants (design.md §2.3), all token-driven.
 * Hub: light 4-column directory + island switcher + sister-network line.
 * Islands: band-ground directory with per-site notes + fee-stack line.
 */
export default function Footer() {
  const { siteId, link, isHub } = useSite();

  if (isHub) {
    return (
      <footer className="footer-site rule-t">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
            <FooterCol
              title="Islands"
              links={[
                { label: 'Choose your island', to: '/islands' },
                ...ISLAND_IDS.map((id) => ({ label: SITE_META[id].shortName, to: getIslandHref(id) })),
              ]}
            />
            <FooterCol
              title="Pricing & Scope"
              links={[
                { label: 'Multi-Island Catering', to: '/multi-island-catering-hawaii' },
                { label: 'The statewide tariff', to: '/pricing' },
                { label: 'Event Pricing Calculator', to: '/calculator' },
                { label: 'Cost by island', to: '/pricing/cost-by-island' },
                { label: 'The fee stack', to: '/pricing/fee-stack' },
                { label: 'What a private chef costs', to: '/private-chef-cost' },
              ]}
            />
            <FooterCol
              title="Guides"
              links={[
                { label: 'All guides', to: '/guides' },
                { label: 'How it works', to: '/guides/how-it-works' },
                { label: 'Which island', to: '/guides/which-island' },
                { label: 'Tipping', to: '/guides/tipping' },
              ]}
            />
            <FooterCol
              title="Trust"
              links={[
                { label: 'The honesty register', to: '/trust' },
                { label: 'What we don’t do', to: '/what-we-dont-do' },
                { label: 'FAQ', to: '/faq' },
                { label: 'Contact', to: '/contact' },
              ]}
            />
          </div>
          <div className="rule-t mt-12 pt-6">
            <IslandSwitcher />
          </div>
          <GroupNetwork />
          <p className="mt-4 text-xs text-ink-2">
            20% service charge and Hawaiʻi GET up to 4.7120% always appear on their own lines. The written quote is the confirmed total.
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer-site rule-t">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Link to={link('')} className="text-ink" aria-label="Home">
              <BrandLockup />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-ink-2">
              {siteId === 'maui' ? 'We buy from Maui farmers and fishers first.' : null}
              {siteId === 'bigisland' ? 'Big Island / Hawaiʻi Island — one island, both names; the Kona–Kohala corridor and the east side.' : null}
              {siteId === 'oahu' ? 'Waikīkī to the North Shore — one published rate card.' : null}
              {siteId === 'kauai' ? 'North Shore · South Shore · East — one estate standard.' : null}
            </p>
          </div>
          <FooterCol
            title="Explore"
            links={[
              { label: 'Private chef', to: link('private-chef') },
              { label: 'Stay Chef', to: link('stay-chef') },
              { label: 'Pricing', to: link('pricing') },
              { label: 'Catering', to: link('catering') },
              ...(siteId === 'oahu' ? [{ label: 'Corporate', to: link('corporate') }] : []),
              ...(siteId === 'maui' ? [{ label: 'Date Night', to: link('services/date-night') }] : []),
              ...(siteId === 'kauai' ? [{ label: 'Retreats', to: link('retreat-catering') }] : []),
              { label: 'Weddings', to: link('weddings') },
              { label: 'Locations', to: link('locations') },
              { label: 'Get a quote', to: link('quote') },
            ]}
          />
          {siteId === 'kauai' ? (
            <FooterCol
              title="Shore by shore"
              links={[
                { label: 'North Shore — Hanalei · Princeville', to: link('locations') },
                { label: 'South Shore — Poʻipū · Kōloa', to: link('locations') },
                { label: 'East — Kapaʻa · Līhuʻe', to: link('locations') },
                { label: 'The one-bridge clause', to: link('trust') },
              ]}
            />
          ) : siteId === 'bigisland' ? (
            <FooterCol
              title="Kona–Kohala & Coast"
              links={[
                { label: 'Kailua-Kona', to: link('locations/kona') },
                { label: 'Kohala Coast', to: link('locations/kohala-coast') },
                { label: 'Hualālai & Kūkiʻo', to: link('locations/hualalai') },
                { label: 'Waikoloa & Mauna Lani', to: link('locations/waikoloa') },
              ]}
            />
          ) : (
            <FooterCol
              title="Network"
              links={[
                { label: 'Statewide hub', to: getIslandHref('hub') },
                ...ISLAND_IDS.filter((id) => id !== siteId).map((id) => ({
                  label: SITE_META[id].shortName,
                  to: getIslandHref(id),
                })),
              ]}
            />
          )}
        </div>
        <GroupNetwork />
        <p className={`rule-t mt-12 pt-6 text-xs text-ink-2 ${siteId === 'bigisland' ? 'font-accent-site' : ''}`}>
          20% service charge and Hawaiʻi GET up to 4.7120% always appear on their own lines. The written quote is the confirmed total.
        </p>
      </div>
    </footer>
  );
}

/**
 * The group block — on every page, hub and islands alike. It is a trust signal
 * as much as a link: the same vetting and the same published-price standard
 * run in four markets, and the kitchens share sourcing and training.
 */
function GroupNetwork() {
  return (
    <section className="rule-t mt-12 pt-8" aria-labelledby="group-network">
      <div className="flex items-center gap-2 mb-3">
        <Globe className="h-4 w-4 text-accent-site" aria-hidden="true" />
        <p className="eyebrow-site !mb-0 font-medium tracking-widest text-xs" id="group-network">
          myCHEF International Luxury Network
        </p>
      </div>
      <p className="measure-site text-sm text-ink-2">
        Hawaiʻi is one kitchen in an international private culinary group. Dubai, Bali, Cape Town, and Hawaiʻi operate to the same
        rigorous Michelin-caliber chef vetting and transparent published-price standard, sharing global techniques, seasonal sourcing, and discrete hospitality standards.
      </p>
      <ul className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <li>
          <a
            href="https://mychef.ae"
            className="link-site inline-flex items-center gap-1.5 font-medium transition-colors hover:text-accent-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Building2 className="h-3.5 w-3.5 text-accent-site/80" aria-hidden="true" />
            <span>myCHEF Dubai</span>
            <span className="text-xs text-ink-2 font-normal">mychef.ae</span>
          </a>
        </li>
        <li>
          <a
            href="https://mychef.id"
            className="link-site inline-flex items-center gap-1.5 font-medium transition-colors hover:text-accent-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Palmtree className="h-3.5 w-3.5 text-accent-site/80" aria-hidden="true" />
            <span>myCHEF Bali</span>
            <span className="text-xs text-ink-2 font-normal">mychef.id</span>
          </a>
        </li>
        <li>
          <a
            href="https://mychefs.co.za"
            className="link-site inline-flex items-center gap-1.5 font-medium transition-colors hover:text-accent-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mountain className="h-3.5 w-3.5 text-accent-site/80" aria-hidden="true" />
            <span>myCHEF Cape Town</span>
            <span className="text-xs text-ink-2 font-normal">mychefs.co.za</span>
          </a>
        </li>
        <li aria-current="true" className="inline-flex items-center gap-1.5 rounded-full border border-accent-site/35 bg-accent-site/10 px-3 py-1 text-xs font-semibold text-accent-site">
          <Sparkles className="h-3.5 w-3.5 text-accent-site" aria-hidden="true" />
          <span>myCHEF Hawaiʻi</span>
          <span className="font-normal opacity-80">(mychef-hawaii.com — you are here)</span>
        </li>
      </ul>
    </section>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <nav aria-label={title}>
      <p className="eyebrow-site mb-4">{title}</p>
      <ul className="space-y-2 text-sm">
        {links.map((l) => {
          const isExternal = l.to.startsWith('http://') || l.to.startsWith('https://');
          return (
            <li key={l.to + l.label}>
              {isExternal ? (
                <a href={l.to} className="link-site inline-flex min-h-11 items-center">
                  {l.label}
                </a>
              ) : (
                <Link to={l.to} className="link-site inline-flex min-h-11 items-center">
                  {l.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
