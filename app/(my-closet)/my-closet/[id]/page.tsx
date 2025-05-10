import { Category } from '@/stories/Category';
import MyClosetHeader from '../../components/my-closet-header/my-closet-header';
import { ClosetSlider } from '@/stories/ClosetSlider';
import { BottomNavigation } from '@/stories/BottomNavigation';
import { SuggestedSet } from '@/stories/SuggestedSet';
import { StarIcon } from '@/stories/Icons';
import { Title } from '@/stories/Title';
import {  SubImageGrid } from '@/stories/SubImage';


export default async function Page({
                                     params,
                                   }: {
  params: Promise<{ id: string }>
}) {
  const {  } = await params;

  const categoryOptions = [
    { title: 'همۀ لباس‌ها' },
    { title: 'بالا پوش' },
    { title: 'پایین پوش' },
  ];


  const sampleItems = [
    {
      variant: 'primary' as const,
      imageUrl: '/path/to/image1.jpg',
      matchPercentage: '80% مناسب با فرم بدن',
      title: 'کاپشن بادی کتان'
    },
    {
      variant: 'secondary' as const,
      imageUrl: '/path/to/image2.jpg',
      matchPercentage: '75% مناسب با فرم بدن',
      title: 'کلاه پشم‌گاو'
    },
    {
      variant: 'primary' as const,
      imageUrl: '/path/to/image3.jpg',
      matchPercentage: '90% مناسب با فرم بدن',
      title: 'کاپشن بادی کتان'
    },
    {
      variant: 'secondary' as const,
      imageUrl: '/path/to/image2.jpg',
      matchPercentage: '75% مناسب با فرم بدن',
      title: 'کلاه پشم‌گاو'
    },
  ];

  // const handleCategoryChange = (selectedCategory: string) => {
  //   console.log('Selected category:', selectedCategory);
  // };
  return (

    <main className="flex flex-col gap-8 w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="sticky top-0 z-10 bg-white pb-5">
        <MyClosetHeader isMyClosetEmpty={true} />
      </div>
      <div className="w-full flex justify-center items-center">
        <Category
          variant="primary"
          options={categoryOptions}
          // onChange={handleCategoryChange}
          className="flex justify-center items-center"
          defaultSelected="همۀ لباس‌ها"
        />
      </div>
      <div className="px-8 py-6 flex justify-center w-full">
        <div className="p-4">
          <ClosetSlider items={sampleItems} />
        </div>
      </div>
      
  
       <div className='w-full flex flex-row justify-center items-center gap-5'>
       <SubImageGrid
    images={[
        { url: '/path/to/image1.jpg', percentNumber: 85 },
        { url: '/path/to/image2.jpg', percentNumber: 75 },
        { url: '/path/to/image3.jpg', percentNumber: 90 },
        // Add more images as needed
    ]}
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
      </div>
    </main>

  );
}