import { Category } from "@/stories/Category"
import MyClosetHeader from "../../components/my-closet-header/my-closet-header"
import { ClosetSlider } from "@/stories/ClosetSlider"
import { BottomNavigation } from "@/stories/BottomNavigation"
import { SuggestedSet } from "@/stories/SuggestedSet"
export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const { id } = await params
    return (
    
        <main className="flex flex-col gap-8 w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="sticky top-0 z-10 bg-white pb-5">
      <MyClosetHeader/>
      </div>
      <div className="w-full">
        <Category
        theme='light'
        />
      </div>
      <div className="px-8 py-6 flex justify-center w-full bg-primary">
        <ClosetSlider/>
      </div>
      <div className="w-full h-full flex justify-center">
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