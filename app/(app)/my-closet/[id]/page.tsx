"use client"

// import { Category } from '@/stories/Category';
// import { ClosetSlider } from '@/stories/ClosetSlider';
// import { BottomNavigation } from '@/stories/BottomNavigation';
// import { SuggestedSet } from '@/stories/SuggestedSet';
import { PlusIcon, StarIcon } from '@/stories/Icons';
// import { Title } from '@/stories/Title';
// import { SubImage } from '@/stories/SubImage';
import { Button, useDisclosure } from '@heroui/react';
import Header from '../../components/Header';
// import { useGetUser } from '@/api/user';
// import { useState } from 'react';


export default function Page({params}: {params: Promise<{ id: string }>}) {
  const {  } = params;



  // const sampleItems = [
  //   {
  //     variant: 'primary' as const,
  //     imageUrl: '/path/to/image1.jpg',
  //     matchPercentage: '80% مناسب با فرم بدن',
  //     title: 'کاپشن بادی کتان'
  //   },
  //   {
  //     variant: 'secondary' as const,
  //     imageUrl: '/path/to/image2.jpg',
  //     matchPercentage: '75% مناسب با فرم بدن',
  //     title: 'کلاه پشم‌گاو'
  //   },
  //   {
  //     variant: 'primary' as const,
  //     imageUrl: '/path/to/image3.jpg',
  //     matchPercentage: '90% مناسب با فرم بدن',
  //     title: 'کاپشن بادی کتان'
  //   },
  //   {
  //     variant: 'secondary' as const,
  //     imageUrl: '/path/to/image2.jpg',
  //     matchPercentage: '75% مناسب با فرم بدن',
  //     title: 'کلاه پشم‌گاو'
  //   },
  // ];

  
  return (
    <div className="flex flex-col w-full h-full">
      <Header
        variant="side"
        title="کـمد لبـاس مـن!"
        endContent={(
          <Button
            variant='flat'
            color='primary'
            size='md'
            startContent={(
              <PlusIcon size={36} />
            )}
            className='h-14 rounded-2xl shrink-0'
            // onPress={() => addClothesDrawer.onOpen()}
          >
            افزودن لباس
          </Button>
        )}
      />
      {/* <div className="px-8 py-6 flex justify-center w-full">
        <div className="p-4">
          <ClosetSlider items={sampleItems} />
        </div>
      </div>
      
  
       <div className='w-full flex flex-row justify-center items-center gap-5'>
       <SubImage
        subImageUrl="/path/to/image1.jpg"
        percentNumber={80}
       />

       </div>
               

      <div className="w-full h-full flex flex-col gap-10 justify-center items-center pb-32">
        <div className="flex flex-row justify-center items-center gap-2">
          <i className="text-primary">
            <StarIcon size={20} />
          </i>
          <Title
            withStar={false}
            text="Recommended sets"
            description="ســـت‌هایی پـــیشنهـــادی"
          />
          <i className="text-primary">
            <StarIcon size={20} />
          </i>
        </div>
        <SuggestedSet
          mainImage="img.svg"
          subImages={['img.svg', 'img.svg', 'img.svg']}
          matchPercent={50}
        />
      </div>

      <div className="fixed bottom-0 z-20 py-2.5 bg-white w-full max-w-screen-sm mx-auto">
        <BottomNavigation />
      </div> */}
    </div>
  );
}