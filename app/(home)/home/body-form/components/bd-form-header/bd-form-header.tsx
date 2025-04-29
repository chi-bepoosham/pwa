import MagicTextBackground from '@/components/common/magic-text-background';
import { MinorButton } from '@/stories/MinorButton';
import { CrossIcon, PlusIcon, ShoppingBagIcon } from '@/stories/Icons';
import { Search } from '@/stories/Search';

const BdFormHeader = () => {
  return (
    <header className="flex flex-row justify-between items-center w-full gap-1">
        <div className="flex flex-col gap-1 justify-end text-xl">
            <MagicTextBackground title={'انــواع فــرم بــدن!'} />
        </div>
        
        
        <MinorButton
        variant='bordered'
        color='secondary'
        className='px-1 py-3'
        buttonTitle={<i className='text-secondary'><CrossIcon size={36}/></i>}
        />      
    </header>



  );
};
export default BdFormHeader;
