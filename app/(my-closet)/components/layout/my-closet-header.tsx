import MagicTextBackground from '@/components/common/magic-text-background';
import { MinorButton } from '@/stories/MinorButton';

const MyClosetHeader = () => {
  return (
    <div className="flex justify-between p-7 relative">
      <MagicTextBackground title={'اسـتایل خـودتو بـساز!'} />
      <MinorButton buttonTitle={'+'} variant="flat" color="success" />
    </div>
  );
};
export default MyClosetHeader;
