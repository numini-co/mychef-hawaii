import EstimateView from '@/components/views/EstimateView';
import { requestHostMode, requestIsland } from '@/lib/request';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/estimate');

export default async function Page() {
  const islandId = await requestIsland();
  const hostMode = await requestHostMode();
  return <EstimateView islandId={islandId} hostMode={hostMode} />;
}
