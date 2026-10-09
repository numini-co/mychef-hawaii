import { QuoteCta } from '@/components/Cta';
import DocumentPhotoGrid from '@/components/DocumentPhotoGrid';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import LineReveal from '@/components/LineReveal';
import { LongFaq, Longform, SiblingCluster } from '@/components/Longform';
import QuoteTeaser from '@/components/QuoteTeaser';
import { privateChefLongform } from '@/data/longformPrivateChef';
import { islands, type IslandId } from '@/data/islands';
import { photos } from '@/data/photos';
import { formatBand, getTiers } from '@/data/rateCard';
import { islandHref } from '@/lib/paths';
import { costAnchor, homeAnchor } from '@/lib/ownerAnchors';

const H1: Record<IslandId, string> = {
  maui: 'Personal chef Maui — dinners in the villa, Wailea to West Maui.',
  oahu: 'Private chef Honolulu — dinners in your house, Gold Coast to Ko Olina.',
  kauai: 'Personal chef Kauai — villa dinners on both shores, by inquiry.',
  bigisland: 'Private chef Kona — villa dinners on the Kona–Kohala coast, by inquiry.',
};

const LEDE: Record<IslandId, string> = {
  oahu: 'A private chef in your Honolulu house or Oʻahu villa: menu, same-day shopping, cooking, service and a clean kitchen.',
  maui: 'A personal chef in your Maui villa: menu, same-day shopping, cooking, service and a clean kitchen.',
  kauai: 'A personal chef for your Kauaʻi villa, north shore or south: menu, shopping, cooking, service and cleanup, by inquiry.',
  bigisland: 'A private chef for your Kona or Kohala Coast villa: menu, west-side shopping, cooking, service and cleanup, by inquiry.',
};

const HERO: Record<IslandId, { file: string; alt: string }> = {
  maui: photos.chefMaui,
  oahu: photos.chefOahu,
  kauai: photos.chefKauai,
  bigisland: photos.chefBigisland,
};

export default function PrivateChefView({ islandId, hostMode }: { islandId: IslandId; hostMode: boolean }) {
  const copy = privateChefLongform[islandId];
  const hero = HERO[islandId];
  const href = (path: string) => islandHref(islandId, hostMode, path);
  const core = getTiers(islandId).find((t) => t.tier === 'CORE');

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: copy.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Hero src={hero.file} alt={hero.alt}>
        <p className="text-[13px] text-mute">myCHEF {islands[islandId].name}</p>
        <LineReveal
          text={H1[islandId]}
          className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-[1.05] text-ink"
        />
        <p className="mt-5 max-w-[48ch] text-[17px] leading-[1.65] text-ink">
          {LEDE[islandId]} {core ? `${formatBand(core)} a guest CORE.` : ''}
        </p>
        <div className="mt-8">
          <QuoteCta island={islandId} service="private-chef" variant="light" />
        </div>
      </Hero>
      <Longform sections={copy.sections} />
      <DocumentPhotoGrid
        islandId={islandId}
        eyebrow={`${islands[islandId].shortName} · Related`}
        heading="Related pages."
        intro="Related pages to help you plan your dinner, event or stay."
        columns={2}
        items={[
          { path: '/personal-chef', label: 'Household week', detail: '/personal-chef' },
          { path: '/vacation-chef', label: 'Stay Chef week', detail: '/vacation-chef' },
          { path: '/quote', label: 'The quote form', detail: '/quote' },
          { path: '/pricing', label: costAnchor(islandId), detail: 'Published rate card' },
          { path: '/', label: homeAnchor(islandId), detail: 'Every town on the island' },
        ]}
      />
      <SiblingCluster island={islandId} current="chef" href={href} />
      <LongFaq items={copy.faqs} />
      <QuoteTeaser island={islandId} />
    </>
  );
}
