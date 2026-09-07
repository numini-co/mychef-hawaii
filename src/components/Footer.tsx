import { Link } from 'react-router';
import { useSite } from '@/platform/IslandProvider';
import { ISLAND_IDS, SITE_META } from '@/platform/tokens';
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
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <FooterCol
              title="Islands"
              links={[
                { label: 'Choose your island', to: '/islands' },
                ...ISLAND_IDS.map((id) => ({ label: SITE_META[id].shortName, to: SITE_META[id].basePath })),
              ]}
            />
            <FooterCol
              title="Pricing"
              links={[
                { label: 'The statewide tariff', to: '/pricing' },
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
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
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
              { label: 'Pricing', to: link('pricing') },
              { label: 'Catering', to: link('catering') },
              { label: 'Weddings', to: link('weddings') },
              { label: 'Guides', to: link('guides') },
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
          ) : (
            <FooterCol
              title="Network"
              links={[
                { label: 'Statewide hub', to: '/' },
                ...ISLAND_IDS.filter((id) => id !== siteId).map((id) => ({
                  label: SITE_META[id].shortName,
                  to: SITE_META[id].basePath,
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

/** Sister brands in the myCHEF group. Ordered by city, Hawaiʻi marked as here. */
const GROUP = [
  { city: 'Dubai', country: 'United Arab Emirates', href: 'https://mychef.ae', domain: 'mychef.ae' },
  { city: 'Bali', country: 'Indonesia', href: 'https://mychef.id', domain: 'mychef.id' },
  { city: 'Cape Town', country: 'South Africa', href: 'https://mychefs.co.za', domain: 'mychefs.co.za' },
];

/**
 * The group block — on every page, hub and islands alike. It is a trust signal
 * as much as a link: the same vetting and the same published-price standard
 * run in four markets, and the kitchens share sourcing and training.
 */
function GroupNetwork() {
  return (
    <section className="rule-t mt-12 pt-8" aria-labelledby="group-network">
      <p className="eyebrow-site mb-3" id="group-network">
        myCHEF around the world
      </p>
      <p className="measure-site text-sm text-ink-2">
        Hawaiʻi is one kitchen in an international group. Dubai, Bali, Cape Town and Hawaiʻi work to the same
        chef vetting and the same published-price standard, and share menus, sourcing and training across the
        network.
      </p>
      <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm">
        {GROUP.map((g) => (
          <li key={g.domain}>
            <a href={g.href} className="link-site" target="_blank" rel="noopener">
              myCHEF {g.city}
            </a>
            <span className="ml-2 text-ink-2">{g.domain}</span>
          </li>
        ))}
        <li aria-current="true" className="text-ink-2">
          myCHEF Hawaiʻi <span className="ml-2">mychef-hawaii.com — you are here</span>
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
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link to={l.to} className="link-site">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
