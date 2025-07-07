import { Brand } from '@/stories/Brand';
import { MinorButton } from '@/stories/MinorButton';
import { Search } from '@/stories/Search';
import { ArrowRightIcon , ShoppingBagIcon , ShopIcon } from '@/stories/Icons';

const ShopItemHeader = () => {
  return (
    <div className="p-7 rounded-b-3xl relative bg-primary">
      <div className='flex justify-between'>
        <MinorButton
          variant="bordered"
          className='border-white rounded-2xl px-2 py-5'
          icon={<i className="text-white"><ArrowRightIcon size={28} /></i>}
        />
        <Brand 
        className=''
        titleEnColor='text-white/30'
        titleFaColor='text-white'
        titleEn={"jeanwest"}
        titleFa={"جـــین‌وســـت"}
        titleFaIcon={<ShopIcon size={20} />}
          />
        <MinorButton
          variant="flat"
          color='secondary'
          className='px-2 py-4'
          icon={<i className="text-white"><ShoppingBagIcon size={28} /></i>}
        />
      </div>
      <div className='mt-5'>
        <Search withFilter={true} />
      </div>
    </div>
  );
};
export default ShopItemHeader;
