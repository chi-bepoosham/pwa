import { InfoIcon, UserIcon } from '@/stories/Icons';
import { MinorButton } from '@/stories/MinorButton';
import { StarIcon } from '@/stories/Icons';
import Link from "next/link"

const MainHeader = () => {
  return (
    <div className="p-7 relative">
      <div className="flex flex-row justify-between items-center">
      <MinorButton
        variant='solid'
        className='px-2 py-4'
        buttonTitle={<i className='text-white'><UserIcon size={28} /></i>}
        />
        <div className="flex flex-col gap-2 items-center">
          <h1 className="flex flex-row gap-2">
            <i className='text-secondary'>
              <StarIcon size={20} />
            </i>
            فــــرم بـــــدن شـــــما
            <i className='text-secondary'>
              <StarIcon size={20} />
            </i>
          </h1>
          {/*ToDo: add a prop to take it from back-end*/}
          <h2 className='text-primary'>
          ســــاعت شنــی
          </h2>
        </div>
        <Link
        href="/home/body-form">
<MinorButton
        variant='flat'
        color='secondary'
        className='px-2 py-4'
        buttonTitle={<i className='text-white'><InfoIcon size={28} /></i>}
        />
        </Link>
        
      </div>
    </div>
  );
};
export default MainHeader;
