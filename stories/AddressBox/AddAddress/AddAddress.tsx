import React, { useState } from 'react';
import { Card, CardBody, DrawerBody, DrawerContent, DrawerHeader } from '@heroui/react';
import { EditIcon, LocationIcon } from '@/stories/Icons';
import { Drawer } from '@heroui/react';
import { CometStarVector } from '@/stories/Vectors';
import { MinorInput } from '@/stories/MinorInput';
import { MapContainer } from '@/stories/Map';
import { MinorButton } from '@/stories/MinorButton';

export interface AddAddressProps {
    onAdd?: () => void;
}

export const AddAddress = (props: AddAddressProps) => {
    const { onAdd } = props;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [position, setPosition] = useState({ latitude: 35.700153, longitude: 51.338378 });

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true);
        if (onAdd) onAdd();
    };

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    };

    const handleMapChange = (newPosition: { latitude: number; longitude: number }) => {
        setPosition(newPosition);
    };

    const handleSubmit = () => {
        // Here you can add any logic for submitting the address
        handleCloseDrawer();
    };

    return (
        <div className="w-full max-w-lg mx-auto flex flex-col gap-3">
            <h2 className="text-lg font-semibold">آدرس و کد پستی گیرنده</h2>
            <Card isPressable className="w-full shadow-none border-2 border-primary-100" onClick={handleOpenDrawer}>
                <CardBody className="flex flex-row items-center justify-between">
                    <div className="shrink-0 w-28 h-28 aspect-square rounded-lg border-2 border-secondary flex items-center justify-center">
                        <i className='text-primary'>
                        <LocationIcon size={28} />
                        </i>
                    </div>
                    <div className="flex-1 flex flex-col items-center truncate">
                        <p className="text-secondary font-semibold">انتخاب آدرس</p>
                        <p className="text-secondary-300 text-sm">جزئیات آدرس گیرنده را وارد کنید</p>
                    </div>
                    <div className="flex flex-row gap-1 justify-center items-center shrink-0">
                        <i className='text-primary'>
                        <EditIcon size={22} />
                        </i>
                        <div className="text-primary font-semibold">افزودن</div>
                    </div>
                </CardBody>
            </Card>
            
            
            
            
            <Drawer 
            disableAnimation={false} 
            isOpen={isDrawerOpen}
             onClose={handleCloseDrawer} 
             placement="bottom" 
             size="full" 
             hideCloseButton
             >
                <DrawerContent>
                    <DrawerHeader
                     className="flex flex-row gap-4 justify-center items-center sticky top-0 z-10 pb-5"
                     >
                        <i className='text-secondary-200'>
                            <CometStarVector/>
                        </i>
                        <span>
                        آدرس و کــد پستـــی
                        </span>
                        <i className='text-secondary-200 rotate-180'>
                            <CometStarVector/>
                        </i>
                    </DrawerHeader>
                    <DrawerBody className='flex flex-col items-start gap-20' dir='rtl'>
                            <div className='flex flex-col gap-7 justify-center items-center w-full'>
                            <MinorInput
                                label='انتخاب شهر'
                                placeholder='انتخاب کنید'
                                type='select'
                                options={[
                                    { label: 'تهران', value: 'tehran' },
      { label: 'اصفهان', value: 'isfahan' },
      { label: 'شیراز', value: 'shiraz' },
      { label: 'مشهد', value: 'mashhad' }, 
                                ]}
                            />

                            <MinorInput
                            type='description'
                            placeholder='خیابان، کوچه، جزئیات آدرس'
                            />
                            </div>
                            <div className='flex flex-row justify-center items-center gap-3 w-full'>
                                <MinorInput
                                type='plate'
                                placeholder='پلاک'
                                />
                                <MinorInput
                                type='unit'
                                placeholder='واحد'
                                />
                            </div>
                            <div className='w-full'>
                                <MinorInput
                                type='discount'
                                label='کدپستی گیرنده'
                                placeholder='کد پستی'
                                />
                            </div>

                        <div className='w-full flex justify-center items-center'>
                            <MapContainer
                                position={position}
                                zoom={15}
                                onChange={handleMapChange}
                                withSearchBox={true}
                            />
                        </div>
<div className='w-full flex justify-center items-center p-5'>
    <MinorButton
    variant='solid'
    color='secondary'
    buttonTitle='ثبت و ذخیره آدرس تحویل گیرنده'
   className='w-full max-w-md mx-auto text-white p-3'
   onClick={handleSubmit}
   />
</div>


                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}