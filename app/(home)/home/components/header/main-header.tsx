import { InfoIcon, UserIcon } from '@/stories/Icons';
import { MinorButton } from '@/stories/MinorButton';
import { StarIcon } from '@/stories/Icons';
import Link from "next/link"
import { Spinner } from '@heroui/react';


interface MainHeaderProps {
  bodyTypeDetails: any;
  isLoading: boolean;
  error: any;
}


const MainHeader = (props: MainHeaderProps) => {
  const { bodyTypeDetails, isLoading, error } = props;
  return (
    <div className="p-7 relative">
      <div className="flex flex-row justify-between items-center">
      <MinorButton
        variant='solid'
        className='px-2 py-4'
        buttonTitle={<i className='text-white'><UserIcon size={28} /></i>}
        />
      
        <div className="flex flex-col gap-2 items-center">
          <h1 className="flex flex-row gap-2 text-nowrap">
            <i className='text-secondary'>
              <StarIcon size={20} />
            </i>
            فــــرم بـــــدن شـــــما
            <i className='text-secondary'>
              <StarIcon size={20} />
            </i>
          </h1>
          <div className='text-primary'>
            {isLoading && (<Spinner size="sm" color="primary" />)}
            {!isLoading && bodyTypeDetails?.title}
          </div>
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
