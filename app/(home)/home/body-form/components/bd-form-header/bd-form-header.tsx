"use client";
import MagicTextBackground from '@/components/common/magic-text-background';
import { MinorButton } from '@/stories/MinorButton';
import { CrossIcon } from '@/stories/Icons';
import { useRouter } from 'next/navigation';

const BdFormHeader = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <header className="flex flex-row justify-between items-center w-full gap-1">
      <div className="flex flex-col gap-1 justify-end text-xl">
        <MagicTextBackground title={'انــواع فــرم بــدن!'} />
      </div>
      
      <MinorButton
        variant='bordered'
        color='secondary'
        className='px-1 py-2'
        buttonTitle={<i className='text-secondary'><CrossIcon size={36}/></i>}
        isIconOnly
        onClick={handleGoBack}
      />      
    </header>
  );
};

export default BdFormHeader;
