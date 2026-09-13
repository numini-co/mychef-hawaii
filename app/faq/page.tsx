import JsonLd from '@/components/JsonLd';
import { HubDirectoryView } from '@/components/views/SupportViews';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/faq');

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef-hawaii.com/' },
            { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://mychef-hawaii.com/faq' },
          ],
        }}
      />
      <HubDirectoryView id="faq" />
    </>
  );
}
