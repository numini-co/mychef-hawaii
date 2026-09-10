import IslandPhotoPicker from '@/components/IslandPhotoPicker';
import { hubChrome } from '@/data/chromeCopy';

export default function IslandChooser() {
  return (
    <div id="choose-island">
      <IslandPhotoPicker heading={hubChrome.chooserH2} intro={hubChrome.chooserIntro} />
    </div>
  );
}
