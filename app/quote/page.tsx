import QuoteView from '@/components/views/QuoteView';
import { requestHostMode, requestIsland } from '@/lib/request';
import { hubMetadata } from '@/lib/pageSeo';
import { parseHubQuoteSearch } from '@/data/hubQuote';

type QuoteSearch = { island?: string; itinerary?: string };

function searchString(q: QuoteSearch): string {
  const params = new URLSearchParams();
  if (q.island) params.set('island', q.island);
  if (q.itinerary) params.set('itinerary', q.itinerary);
  const s = params.toString();
  return s ? `?${s}` : '';
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<QuoteSearch>;
}) {
  return hubMetadata('/quote', searchString(await searchParams));
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<QuoteSearch>;
}) {
  const islandId = await requestIsland();
  const hostMode = await requestHostMode();
  const variant = parseHubQuoteSearch(await searchParams);
  return <QuoteView islandId={islandId} hostMode={hostMode} variant={variant} />;
}
