import JsonLd from '@/components/JsonLd';
import { IslandSupportView } from '@/components/views/IslandDocumentView';
import { islandPageMetadata } from '@/lib/pageSeo';
import { islandFaq } from '@/data/islandSupport';
import { canonicalUrl } from '@/lib/site';
import { islandProps } from '../params';

export function generateMetadata({ params }: { params: Promise<{ island: string }> }) {
  return islandPageMetadata(params, '/faq');
}

export default async function Page({ params }: { params: Promise<{ island: string }> }) {
  const { islandId, hostMode } = await islandProps(params);
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: canonicalUrl(islandId, '/') },
            { '@type': 'ListItem', position: 2, name: 'FAQ', item: canonicalUrl(islandId, '/faq') },
          ],
        }}
      />
      <IslandSupportView islandId={islandId} hostMode={hostMode} copy={islandFaq[islandId]} />
    </>
  );
}
