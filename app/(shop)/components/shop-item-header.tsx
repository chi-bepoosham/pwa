import { Brand } from '@/stories/Brand';
import { MinorButton } from '@/stories/MinorButton';
import { Search } from '@/stories/Search';
import { ArrowRight } from '@mui/icons-material';

const ShopItemHeader = () => {
  return (
    <div className="p-7 rounded-b-3xl relative bg-[#4141F9]">
      <div className='flex justify-between'>
        <MinorButton
          variant="bordered"
          className={'border-white rounded-2xl'}
          icon={<ArrowRight />}
        />
        <Brand titleEn={"jeanwest"} titleFa={"جـــین‌وســـت"} />
        <MinorButton
          variant="flat"
          color='secondary'
          // className={'border-white rounded-2xl'}
          icon={<ArrowRight />}
        />
      </div>
      <div className='mt-5'>
        <Search withFilter={true} />
      </div>
    </div>
  );
};
export default ShopItemHeader;
