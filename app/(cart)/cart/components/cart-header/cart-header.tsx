"use client";
import { MinorButton } from '@/stories/MinorButton';
import { ArrowRightIcon, PlusIcon, RecycleIcon, ShoppingBagIcon } from '@/stories/Icons';
import { useRouter } from 'next/navigation';

const CartHeader = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <header className="flex flex-row justify-between items-center gap-1 p-5">
        <MinorButton
        onClick={handleGoBack}
        variant='bordered'
        color='secondary'
        className='px-2 py-4'
        buttonTitle={
            <i className='text-secondary'>
                <ArrowRightIcon size={24}/>
            </i>
        }
        isIconOnly={true}
        />
        
        <div className='flex justify-center items-center'>
            <h1 className='text-large'>
            سبــد خریــد شمــا
            </h1>
        </div>

        <MinorButton
        variant='flat'
        color='secondary'
        className='px-2 py-4'
        buttonTitle={
            <i className='text-secondary'>
                <RecycleIcon size={24}/>
            </i>
        }
        />

    </header>
  );
};

export default CartHeader;
