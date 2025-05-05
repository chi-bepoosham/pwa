"use client";
import { Category } from "@/stories/Category";
import MyClosetHeader from "../components/my-closet-header/my-closet-header";
import ShopProductList from "@/app/(shop)/components/shop-product-list";
import { BottomNavigation } from "@/stories/BottomNavigation";
import { useEffect, useState } from "react";
import { CometStarVector, TryOnClothVector } from "@/stories/Vectors";
import { PlusIcon } from "@/stories/Icons";
import { MinorButton } from "@/stories/MinorButton";
import { sacramento } from "@/lib/font";
import { VoiceAssistant } from "@/stories/VoiceAssistant";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from "@heroui/react";
import { Uploader } from "@/stories/Uploader";
import { MinorInput } from "@/stories/MinorInput";



export default function Page() {
  const [openDrawer, setOpenDrawer] = useState(false);



  const objectt = [
    
    // {
    //     price: '859.000',
    //     description: 'XL. 2X. 3X',
    //     title: 'کلاه پشم‌گاو',
    //     imageUrl: 'img.svg',
    //     variant: 'solid',
    //     colors: ['##8E9880', '#47A3FF', '#DB9155', '#F5A623'],
    //     withArrow: false,
    //   },
    //   {
    //     price: '859.000',
    //     description: 'XL. 2X. 3X',
    //     title: 'کلاه پشم‌گاو',
    //     imageUrl: 'img.svg',
    //     variant: 'bordered',
    //     colors: ['##8E9880', '#47A3FF', '#DB9155', '#F5A623'],
    //     withArrow: false,
    //   },
    //   {
    //     price: '859.000',
    //     description: 'XL. 2X. 3X',
    //     title: 'کلاه پشم‌گاو',
    //     imageUrl: 'img.svg',
    //     variant: 'bordered',
    //     colors: ['##8E9880', '#47A3FF', '#DB9155', '#F5A623'],
    //     withArrow: false,
    //   },
    //   {
    //     price: '859.000',
    //     description: 'XL. 2X. 3X',
    //     title: 'کلاه پشم‌گاو',
    //     imageUrl: 'img.svg',
    //     variant: 'solid',
    //     colors: ['##8E9880', '#47A3FF', '#DB9155', '#F5A623'],
    //     withArrow: false,
    //   },
  ];

  const typedObjectt = objectt.map((item) => ({
    ...item,
    variant: item.variant as "bordered" | "solid",
  }));

  const isMyClosetEmpty = typedObjectt.length === 0;


  const categoryOptions = [
    { title: 'همۀ لباس‌ها' },
    { title: 'بالا پوش' },
    { title: 'پایین پوش' },
  ];

  const modalCategoryOptions = [
    { title: 'بالا پوش' },
    { title: 'پایین پوش' },
    { title: 'زیــرپــوش' },
  ];

  return (
    <main className="flex flex-col gap-8 w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="sticky top-0 z-10 bg-white pb-5">
        <MyClosetHeader isMyClosetEmpty={!isMyClosetEmpty} />
      </div>

      {!isMyClosetEmpty && (
        <div className="w-full">
          <Category
      variant="primary"
      options={categoryOptions}
      // onChange={handleCategoryChange}
      className="flex justify-center items-center"
      defaultSelected="همۀ لباس‌ها"
    />
        </div>
      )}

      <div className="px-8 py-6 h-full">
        {isMyClosetEmpty ? (
          <div className="flex flex-col gap-20 w-full px-5 relative">
            <div className="flex justify-center items-center">
              <TryOnClothVector />
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <span className={`${sacramento.className} text-2xl font-bold text-secondary-200`}>Your closet is empty</span>
              <span className="text-lg text-secondary">کمد لباس شما خالی هست!</span>
              <MinorButton
                variant="flat"
                className="px-4 py-2 bg-[#68BAA6]/15 border-2 border-[#68BAA6]"
                buttonTitle={
                  <div className="flex flex-row gap-2 justify-center items-center">
                    <i className="text-[#68BAA6]">
                      <PlusIcon size={24} />
                    </i>
                    <span className="text-secondary">
                      افــزودن لـبــاس
                    </span>
                  </div>
                }
                onClick={() => setOpenDrawer(true)}
              />
            </div>
          </div>
        ) : (
          <ShopProductList
            secondTitle="مـناسب هـوای بـرفی..."
            title="Winter"
            listItems={typedObjectt}
            link="/my-closet/id"
          />
        )}
      </div>

      {isMyClosetEmpty && (
        <div className="mt-auto">
          <VoiceAssistant />
        </div>
      )}                                                    

      <div className="sticky z-10 bottom-0 w-full py-2.5 bg-white">
        <BottomNavigation />
      </div>

<Drawer 
      isOpen={openDrawer} 
      placement="bottom"
      size="5xl"
      className="w-fit max-w-full left-auto right-auto flex flex-col justify-center items-center h-[80vh]"
      onClose={() => setOpenDrawer(false)}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-row gap-2 justify-center items-center pb-5 sticky top-0 z-10 bg-white">
                <i className="text-secondary-300 rotate-180">
                  <CometStarVector/>
                </i>
                اضافه کردن لباس به کمد
                <i className="text-secondary-300">
                  <CometStarVector/>
                </i>
                </DrawerHeader>
              <DrawerBody
              className="flex flex-col justify-between h-full  w-[640px] max-w-full items-center"
              >
                <div className="w-full flex flex-col gap-5 justify-center items-center">
                  <span className="text-secondary-300">
                  تصویر لباس خودت رو اینجا اضافه کن!
                  </span>
                  <Uploader
                  size="large"
                  title="تصویر لباس شما"
                  />
                </div>
                
                
                
                <div className="w-full">
                  <MinorInput
                  label="نام لباس"
                  placeholder="مثلا دورس اسپرت"
                  />
                </div>
                
                <div className="w-full">
                <Category
      variant="secondary"
      options={modalCategoryOptions}
      // onChange={handleCategoryChange}
      defaultSelected="بالا پوش"
    />
                </div>
                
                
                
                

              </DrawerBody>
              <DrawerFooter
              className="sticky bottom-0 z-10"
              >
                <MinorButton
                variant="solid"
                color="primary"
                buttonTitle="افزودن لباس به کمدم"
                className="w-full px-4 py-2"
                onClick={() => setOpenDrawer(false)}
                />
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
      
    </main>
  );
}
