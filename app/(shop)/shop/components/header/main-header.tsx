import TextBackground from '@/components/common/text-background';
import { MinorButton } from '@/stories/MinorButton';
import { Search } from '@/stories/Search';
import { BadgeOutlined } from '@mui/icons-material';

const MainHeader = () => {
  return (
    <div className="p-7 relative">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-1">
          <img src="/static/images/icon/shop/stars.svg" alt="" />
          <TextBackground className="text-sm" bgColor="#0c0d1158">
            اسـتایل خـودتو بـساز!
          </TextBackground>
        </div>
        <div className="flex gap-2">
          <MinorButton color="primary" buttonTitle={<BadgeOutlined width={14} />} />
          <MinorButton color="warning" buttonTitle={<BadgeOutlined width={14} />} />
        </div>
      </div>
      <div className='w-full mt-4'>
        <Search withFilter={true} />
      </div>
    </div>
  );
};
export default MainHeader;
