import MagicTextBackground from '@/components/common/magic-text-background';
import { MinorButton } from '@/stories/MinorButton';
import { Search } from '@/stories/Search';
import { BadgeOutlined } from '@mui/icons-material';

const MainHeader = () => {
  return (
    <div className="p-7 relative">
      <div className="flex justify-between items-center ">
        <MagicTextBackground title={"اسـتایل خـودتو بـساز!"}/>
        <div className="flex gap-2">
          <MinorButton color="primary" buttonTitle={<BadgeOutlined width={14} />} />
          <MinorButton color="primary" variant='flat' buttonTitle={<BadgeOutlined width={14} />} />
        </div>
      </div>
      <div className='w-full mt-4'>
        <Search withFilter={true} />
      </div>
    </div>
  );
};
export default MainHeader;
