"use client";
import { MinorButton } from '@/stories/MinorButton';
import { ArrowRightIcon, PlusIcon, RecycleIcon, ShoppingBagIcon } from '@/stories/Icons';
import { useRouter, usePathname } from 'next/navigation';
import MagicTextBackground from '@/components/common/magic-text-background';
import { Search } from '@/stories/Search';

const MyClosetHeader = ({ isMyClosetEmpty }: { isMyClosetEmpty: boolean }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleGoBack = () => {
    router.back();
  };

  const isInMyClosetId = pathname.startsWith('/my-closet/') && pathname !== '/my-closet';

  return (
    <header className='flex flex-col gap-5 px-5'>
      <div className="flex flex-row justify-between items-center gap-1 p-5">
        <div className='flex justify-center items-center'>
          <MagicTextBackground
            title='کـمد لبـاس مـن!'
          />
        </div>

        {isMyClosetEmpty && (
          <div className='flex flex-row justify-center items-center gap-3'>
            {!isInMyClosetId && (
              <MinorButton
                variant='solid'
                color='primary'
                className='px-2 py-4'
                buttonTitle={
                  <i className='text-white'>
                    <ShoppingBagIcon size={24}/>
                  </i>
                }
              />
            )}
            {!isInMyClosetId && (
              <MinorButton
                variant='flat'
                className='px-2 py-4 bg-[#68BAA6]/15'
                buttonTitle={
                  <i className='text-[#68BAA6]'>
                    <PlusIcon size={24}/>
                  </i>
                }
                isIconOnly={true}
              />
            )}
            {isInMyClosetId && (
              <MinorButton
                onClick={handleGoBack}
                variant='flat' 
                className='px-2 py-4 border-2 border-[#68BAA6] bg-[#68BAA6]/15 w-full'
                buttonTitle={
                  <div className='flex flex-row gap-2 justify-center items-center'>
                    <i className='text-[#68BAA6]'>
                      <PlusIcon size={24}/>
                    </i>
                    <span className='text-secondary'>
                      افــزودن لـبــاس
                    </span>
                  </div>
                }
                isIconOnly={true}
              />
            )}
          </div>
        )}
      </div>

      {isMyClosetEmpty && !isInMyClosetId && (
        <Search
          withFilter={true}
        />
      )}
    </header>
  );
};

export default MyClosetHeader;
