"use client";
import { Category } from "@/stories/Category";
import MyClosetHeader from "../components/my-closet-header/my-closet-header";
import { BottomNavigation } from "@/stories/BottomNavigation";
import { useState } from "react";
import { CometStarVector, TryOnClothVector } from "@/stories/Vectors";
import { PlusIcon } from "@/stories/Icons";
import { MinorButton } from "@/stories/MinorButton";
import { sacramento } from "@/lib/font";
import { VoiceAssistant } from "@/stories/VoiceAssistant";
import {  Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from "@heroui/react";
import { Uploader } from "@/stories/Uploader";
import { MinorInput } from "@/stories/MinorInput";
import ClosetCardList from "../components/closet-card-list";


export default function Page() {
  const [openDrawer, setOpenDrawer] = useState(false);



  const objectt = [
    
    {
      variant: "primary",
      imageUrl: "/public/image.png",
      matchPercentage: "80% مناسب با فرم بدن",
      // onClick={handleCardClick}
      link: "/my-closet/id",
      },
      {
        variant: "secondary",
        imageUrl: "/public/image.png",
        matchPercentage: "80% مناسب با فرم بدن",
        // onClick={handleCardClick}
        link: "/my-closet/id",
        },
        {
          variant: "tertiary",
          imageUrl: "/public/image.png",
          matchPercentage: "80% مناسب با فرم بدن",
          // onClick={handleCardClick}
          link: "/my-closet/id",
          },
          {
            variant: "quaternary",
            imageUrl: "/public/image.png",
            matchPercentage: "80% مناسب با فرم بدن",
            // onClick={handleCardClick}
            link: "/my-closet/id",
            },
            {
              variant: "primary",
              imageUrl: "/public/image.png",
              matchPercentage: "80% مناسب با فرم بدن",
              // onClick={handleCardClick}
              link: "/my-closet/id",
              },
              {
                variant: "secondary",
                imageUrl: "/public/image.png",
                matchPercentage: "80% مناسب با فرم بدن",
                // onClick={handleCardClick}
                link: "/my-closet/id",
                },
                {
                  variant: "tertiary",
                  imageUrl: "/public/image.png",
                  matchPercentage: "80% مناسب با فرم بدن",
                  // onClick={handleCardClick}
                  link: "/my-closet/id",
                  },
                  {
                    variant: "quaternary",
                    imageUrl: "/public/image.png",
                    matchPercentage: "80% مناسب با فرم بدن",
                    // onClick={handleCardClick}
                    link: "/my-closet/id",
                  },
    ];

  const typedObjectt = objectt.map((item) => ({
    ...item,
    variant: item.variant as "primary" | "secondary" | "tertiary" | "quaternary",
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
    <main className="flex flex-col w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="sticky top-0 z-20 bg-white pb-5">
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

      <div className="px-8 pb-24 pt-6">
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
          <ClosetCardList
            secondTitle="مـناسب هـوای بـرفی..."
            title="All clothes"
            link="/my-closet/id"
            listItems={typedObjectt}
          />
        )}
      </div>

      <div className="fixed bottom-0 z-10 w-full max-w-screen-sm mx-auto">
        {isMyClosetEmpty && (
          <div className="mb-2.5">
            <VoiceAssistant />
          </div>
        )}
        <div className="py-2.5 bg-white">
          <BottomNavigation />
        </div>
      </div>

<Drawer 
      isOpen={openDrawer} 
      placement="bottom"
      size="5xl"
      className="w-fit max-w-full left-auto right-auto flex flex-col justify-center items-center h-[80vh] overflow-y-auto overflow-x-hidden"
      onClose={() => setOpenDrawer(false)}
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex flex-row gap-2 justify-center items-center pb-5 sticky top-0 z-10 bg-white truncate w-full">
                <i className="text-secondary-300 rotate-180">
                  <CometStarVector/>
                </i>
                اضافه کردن لباس به کمد
                <i className="text-secondary-300">
                  <CometStarVector/>
                </i>
                </DrawerHeader>
              <DrawerBody
              className="flex flex-col justify-start h-full w-[640px] max-w-full items-center gap-20 overflow-y-auto"
              >
                <div className="w-full flex flex-col gap-5 justify-center items-center pt-5">
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
              className="sticky bottom-0 z-10 w-full bg-white"
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
