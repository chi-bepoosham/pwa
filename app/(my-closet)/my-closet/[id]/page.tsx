import { Category } from "@/stories/Category"
import MyClosetHeader from "../../components/my-closet-header/my-closet-header"
import { ClosetSlider } from "@/stories/ClosetSlider"
import { BottomNavigation } from "@/stories/BottomNavigation"
import { SuggestedSet } from "@/stories/SuggestedSet"
import { StarIcon } from "@/stories/Icons"
import { Title } from "@/stories/Title"
export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const { id } = await params

    const categoryOptions = [
      { title: 'همۀ لباس‌ها' },
      { title: 'بالا پوش' },
      { title: 'پایین پوش' },
    ];
  
    // const handleCategoryChange = (selectedCategory: string) => {
    //   console.log('Selected category:', selectedCategory);
    // };
    return (
    
        <main className="flex flex-col gap-8 w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="sticky top-0 z-10 bg-white pb-5">
      <MyClosetHeader isMyClosetEmpty={true}/>
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
      <div className="px-8 py-6 flex justify-center w-full h-full bg-green-600">
        {/* <ClosetSlider
       /> */}
      </div>

      <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
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
        subImages={["img.svg", "img.svg", "img.svg"]}
        matchPercent={50}
        />
      </div>

<div className="sticky z-10 bottom-0 w-full py-2.5 bg-white">
        <BottomNavigation />
      </div>
      </main>
       
        )
  }