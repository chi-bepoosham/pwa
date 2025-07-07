"use client";
import { MinorButton } from '@/stories/MinorButton';
import { ArrowRightIcon } from '@/stories/Icons';
import { useRouter } from 'next/navigation';

const PersonalHeader = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <header className="flex flex-row justify-between items-center p-5 sm:justify-start">
        <MinorButton
        onClick={handleGoBack}
        variant='bordered'
        color='secondary'
        className='px-2 py-4 shrink-0'
        buttonTitle={
            <i className='text-secondary'>
                <ArrowRightIcon size={24}/>
            </i>
        }
        isIconOnly={true}
        />
        
        <div className='w-full flex justify-center'>
            <h1 className='text-large truncate max-w-[]'>
            مشخصات گیرنده
            </h1>
        </div>

        

    </header>
  );
};

export default PersonalHeader;
