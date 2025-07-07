"use client";
import { Category } from "@/stories/Category";
import { useState } from "react";
import { PlusIcon } from "@/stories/Icons";
import { Button, useDisclosure } from "@heroui/react";
import Header from "../components/Header";
import { TryOnClothVector } from "@/stories/Vectors";
import { sacramento } from "@/lib/font";
import { useGetUser } from "@/api/user";
import { AddClothesDrawer } from "./components/AddClothesDrawer";


export default function Page() {

  const { userInfo , userInfoError } = useGetUser(30000);

  const objectt = [
    {
      variant: "primary",
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
      variant: "primary",
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
                  {
                    variant: "quaternary",
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

  const isEmpty = true || typedObjectt.length === 0;

  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const handleCategoryChange = (v: string) => {
    setSelectedCategory(v)
  }

  const addClothesDrawer = useDisclosure({defaultOpen: false});

  const categoryItems = [
    { key: 'all', title: 'همۀ لباس‌ها' },
    { key: 'upper', title: 'بالا پوش' },
    { key: 'lower', title: 'پایین پوش' },
  ];


  
  return (
    <div className="flex flex-col w-full h-full">
      <Header
        variant="side"
        title="کـمد لبـاس مـن!"
        endContent={!isEmpty && (
          <Button
            variant='flat'
            color='primary'
            size='md'
            startContent={(
              <PlusIcon size={36} />
            )}
            className='h-14 rounded-2xl shrink-0'
            onPress={() => addClothesDrawer.onOpen()}
          >
            افزودن لباس
          </Button>
        )}
      />
      {isEmpty && (
        <div className="flex flex-col justify-center gap-10 h-full w-full px-5 relative">
          <div className="flex justify-center items-center">
            <TryOnClothVector />
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className={`${sacramento.className} text-3xl font-bold text-secondary-200`}>Your closet is empty</span>
            <span className="text-lg text-secondary font-semibold">{userInfo?.first_name || "کاربر"} عزیز!</span>
            <span className="text-lg text-secondary font-semibold">کمد لباس شما خالی هست!</span>
            <Button
              variant='flat'
              color='primary'
              size='md'
              startContent={(
                <PlusIcon size={36} />
              )}
              className='h-14 rounded-2xl shrink-0'
              onPress={() => addClothesDrawer.onOpen()}
            >
              افزودن لباس
            </Button>
          </div>
        </div>
      )}
      {!isEmpty && (
        <Category
          variant="primary"
          items={categoryItems}
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="flex justify-center items-center"
        />
      )}
      <AddClothesDrawer
        isOpen={addClothesDrawer.isOpen}
        onOpen={addClothesDrawer.onOpen}
        onClose={addClothesDrawer.onClose}
      />
    </div>
  )

}
