import InVillaServicesView from '@/components/views/InVillaServicesView';
import { hubMetadata } from '@/lib/pageSeo';

export const generateMetadata = () => hubMetadata('/in-villa-services/weekly-private-chef');

export default function Page() {
  return <InVillaServicesView id="weekly-private-chef" />;
}
