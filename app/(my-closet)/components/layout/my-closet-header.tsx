import MagicTextBackground from '@/components/common/magic-text-background';
import { MinorButton } from '@/stories/MinorButton';
import { PlusIcon, ShoppingBagIcon } from '@/stories/Icons';
import { Search } from '@/stories/Search';

const MyClosetHeader = () => {
  return (
    <header className="flex flex-col gap-1">
      <div className="flex justify-between px-7 py-5 relative">
        <MagicTextBackground title={'کــمد لبــاس مــن!'} />
        <div className="flex flex-row gap-2">
          <MinorButton
            buttonTitle={<i className="text-[#68BAA6]"><PlusIcon size={25} /> </i>}
            variant="flat"
            radius="lg"
            color="success"
            className="px-2 py-4"
          />
          <MinorButton
            buttonTitle={<i className="text-text-white"><ShoppingBagIcon size={25} /> </i>}
            variant="solid"
            radius="lg"
            color="primary"
            className="px-2 py-4"
          />
        </div>
      </div>


      <div className="flex w-full px-7">
        <Search withFilter={true} />
      </div>
    </header>



  );
};
export default MyClosetHeader;
