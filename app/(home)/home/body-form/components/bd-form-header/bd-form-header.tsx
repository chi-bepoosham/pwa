import MagicTextBackground from '@/components/common/magic-text-background';
import { MinorButton } from '@/stories/MinorButton';
import { CrossIcon} from '@/stories/Icons';


const BdFormHeader = () => {




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
        // onClick={}
        />      
    </header>



  );
};
export default BdFormHeader;
