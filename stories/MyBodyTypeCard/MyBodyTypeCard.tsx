import { Button } from '@heroui/react';
import React from 'react';
import { EditIcon } from '../Icons';



export interface MyBodyTypeCardProps {

}




export const MyBodyTypeCard = (props: MyBodyTypeCardProps) => {
const {} = props;
        
    return (
        <div className="flex justify-between w-full border border-primary/10 rounded-2xl p-2">
            <div className='flex items-center gap-4'>
                <div>
                {/* Image */}
                </div>
                <div className='flex flex-col gap-4'>
                    <span className='text-sm text-secondary'>
                    عکس فرم بدن شمـــا
                    </span>
                    <span className='text-xs text-secondary/50'>
                        {/* body type ro az componentesh begir */}
                        ساعت شنی
                    </span>
                </div>
            </div>
            <div>
                <Button
                variant='light'
                startContent={
                    <EditIcon size={18}/>
                }
                className='text-primary flex items-center gap-1'
                >
                    ویرایش
                </Button>
            </div>
        </div>
    )
}
