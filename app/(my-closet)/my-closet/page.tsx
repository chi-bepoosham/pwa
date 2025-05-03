"use client";
import { Category } from "@/stories/Category";
import MyClosetHeader from "../components/my-closet-header/my-closet-header";
import ShopProductList from "@/app/(shop)/components/shop-product-list";
import { BottomNavigation } from "@/stories/BottomNavigation";
import { useEffect, useState } from "react";
import { TryOnClothVector } from "@/stories/Vectors";
import { PlusIcon } from "@/stories/Icons";
import { MinorButton } from "@/stories/MinorButton";
import { sacramento } from "@/lib/font";
import { VoiceAssistant } from "@/stories/VoiceAssistant";
import { Drawer } from "@heroui/react";



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

  return (
    <main className="flex flex-col gap-8 w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="sticky top-0 z-10 bg-white pb-5">
        <MyClosetHeader isMyClosetEmpty={!isMyClosetEmpty} />
      </div>

      {!isMyClosetEmpty && (
        <div className="w-full">
        <Category theme="light" />
      </div>
    )}

      <div className="px-8 py-6 h-full">
        {isMyClosetEmpty ? (
          <div 
          className="flex flex-col gap-20 w-full px-5 relative"
          >
            <div className="flex justify-center items-center">
                <TryOnClothVector
                   />
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
    </main>
  );
}
