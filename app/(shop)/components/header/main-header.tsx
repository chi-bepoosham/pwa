import MagicTextBackground from '@/components/common/magic-text-background';
import { Search } from '@/stories/Search';
import { NotificationIcon, ShoppingBagIcon } from '@/stories/Icons';
import { MinorButton } from '@/stories/MinorButton';

const MainHeader = () => {
  return (
    <div className="p-7 relative">
      <div className="flex justify-between items-center ">
        <MagicTextBackground title={"اسـتایل خـودتو بـساز!"}/>
        <div className="flex gap-2">
          <MinorButton 
          color="primary" 
          buttonTitle={<ShoppingBagIcon size={28} />}
          className="px-2 py-4"
          />
          <MinorButton 
          color="primary"
           variant='flat'
            buttonTitle={<NotificationIcon size={28} />} 
            className="px-2 py-4"
            />
        </div>
      </div>
      <div className='w-full mt-4'>
        <Search withFilter={true} />
      </div>
    </div>
  );
};
export default MainHeader;
