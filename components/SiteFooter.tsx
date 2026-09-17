import BrandMark from '@/components/BrandMark';
import ContactCluster from '@/components/ContactCluster';
import HostLink from '@/components/HostLink';
import { EnquireCta } from '@/components/Cta';
import { LocationsBlock } from '@/components/LocationsBlock';
import { WORLD_DESTINATIONS } from '@/data/destinations';
import { islandOrder, islands, type IslandId } from '@/data/islands';
import { islandHref } from '@/lib/paths';

export default function SiteFooter({
  islandId,
  hostMode,
}: {
  islandId: IslandId | null;
  hostMode: boolean;
}) {
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <LocationsBlock tone="ink" scope={islandId ?? 'all'} />

      <div className="mx-auto w-full max-w-container border-t border-white/10 px-5 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <HostLink
              island="root"
              className="flex items-center gap-2.5 font-display text-2xl font-light tracking-tight text-paper"
            >
              <BrandMark className="h-8 w-8" />
              <span>
                my<span className="text-brass">CHEF</span>
              </span>
            </HostLink>
            <p className="mt-4 max-w-xs text-[17px] leading-relaxed text-on-ink">
              A chef in your villa. Stay on one island — change it only when you mean to.
            </p>
            <div className="mt-6">
              <EnquireCta island={islandId} variant="secondary" />
            </div>
          </div>

          <nav aria-label="Islands">
            <p className="text-[13px] text-on-ink">Islands</p>
            <ul className="mt-4 space-y-2">
              {islandOrder.map((id) => (
                <li key={id}>
                  <HostLink island={id} className="text-base text-paper hover:underline underline-offset-4">
                    {islands[id].name}
                  </HostLink>
                </li>
              ))}
              <li>
                <HostLink island="root" className="text-base text-paper hover:underline underline-offset-4">
                  All Hawaiʻi
                </HostLink>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="text-[13px] text-on-ink">Company</p>
            <ul className="mt-4 space-y-2">
              <li>
                <HostLink
                  island={islandId ?? 'root'}
                  path="/about"
                  className="text-base text-paper hover:underline underline-offset-4"
                >
                  About
                </HostLink>
              </li>
              {islandId ? (
                <>
                  <li>
                    <HostLink island={islandId} path="/faq" className="text-base text-paper hover:underline underline-offset-4">
                      FAQ
                    </HostLink>
                  </li>
                  <li>
                    <HostLink
                      island={islandId}
                      path="/coverage"
                      className="text-base text-paper hover:underline underline-offset-4"
                    >
                      Coverage
                    </HostLink>
                  </li>
                  <li>
                    <HostLink
                      island={islandId}
                      path="/how-it-works"
                      className="text-base text-paper hover:underline underline-offset-4"
                    >
                      How it works
                    </HostLink>
                  </li>
                  <li>
                    <HostLink island={islandId} path="/menus" className="text-base text-paper hover:underline underline-offset-4">
                      Menus
                    </HostLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <HostLink island="root" path="/faq" className="text-base text-paper hover:underline underline-offset-4">
                      FAQ
                    </HostLink>
                  </li>
                  <li>
                    <HostLink island="root" path="/coverage" className="text-base text-paper hover:underline underline-offset-4">
                      Coverage
                    </HostLink>
                  </li>
                  <li>
                    <HostLink island="root" path="/contact" className="text-base text-paper hover:underline underline-offset-4">
                      Contact
                    </HostLink>
                  </li>
                  <li>
                    <HostLink island="root" path="/locations" className="text-base text-paper hover:underline underline-offset-4">
                      Live dinner doors
                    </HostLink>
                  </li>
                  <li>
                    <HostLink island="root" path="/menus" className="text-base text-paper hover:underline underline-offset-4">
                      Menus
                    </HostLink>
                  </li>
                  <li>
                    <HostLink island="root" path="/help" className="text-base text-paper hover:underline underline-offset-4">
                      Help desks
                    </HostLink>
                  </li>
                  <li>
                    <HostLink island="root" path="/events" className="text-base text-paper hover:underline underline-offset-4">
                      Villa occasions
                    </HostLink>
                  </li>
                  <li>
                    <HostLink
                      island="root"
                      path="/in-villa-services"
                      className="text-base text-paper hover:underline underline-offset-4"
                    >
                      In-villa services
                    </HostLink>
                  </li>
                </>
              )}
              <li>
                <HostLink
                  island={islandId ?? 'root'}
                  path="/pricing"
                  className="text-base text-paper hover:underline underline-offset-4"
                >
                  Pricing
                </HostLink>
              </li>
              <li>
                <HostLink
                  island={islandId ?? 'root'}
                  path="/legal"
                  className="text-base text-paper hover:underline underline-offset-4"
                >
                  Legal
                </HostLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6">
          <ContactCluster island={islandId} compact />
          <p className="mt-4 text-[13px] leading-relaxed text-on-ink">
            Published prices. Written quote. 20% service and Hawaiʻi GET are their own lines. Oʻahu Signature $195–$290 a
            guest. Maui and Kauaʻi $225–$375. Hawaiʻi Island $210–$325. Stay Chef from $1,250 Oʻahu / $1,550 Maui / $1,650
            Kauaʻi / $1,450 Hawaiʻi Island (inquiry). See each island rate card.{' '}
            <a href={href('/legal')} className="underline underline-offset-2">
              Legal
            </a>
            . © {year} myCHEF Hawaii.
          </p>
          <DestinationsStrip />
        </div>
      </div>
    </footer>
  );
}

function DestinationsStrip() {
  return (
    <nav aria-labelledby="world-destinations" className="mt-8 border-t border-white/15 pt-6">
      <p id="world-destinations" className="text-[13px] text-on-ink">
        myCHEF around the world
      </p>
      <ul className="mt-4 flex flex-wrap items-end gap-x-6 gap-y-5 sm:gap-x-0">
        {WORLD_DESTINATIONS.map((destination, index) => (
          <li key={destination.href} className="flex items-end">
            <p className="flex flex-col">
              <span className="text-[13px] leading-snug text-on-ink">{destination.label}</span>
              <a
                href={destination.href}
                className="text-base text-paper underline underline-offset-4 hover:text-brass"
                {...(destination.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                aria-label={`${destination.label} — ${destination.domain}`}
              >
                {destination.domain}
              </a>
            </p>
            {index < WORLD_DESTINATIONS.length - 1 ? (
              <span aria-hidden className="mx-4 hidden self-end pb-1 text-white/30 sm:inline">
                ·
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
