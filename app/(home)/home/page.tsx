import { BodyForm } from "@/stories/BodyForm"
import MainHeader from "./components/header/main-header"
import { Celebrities } from "@/stories/Celebrities"
import { SuggestionSlider } from "@/stories/SuggestionSlider"
import { BottomNavigation } from "@/stories/BottomNavigation"
import Link from "next/link"

export default function Home() {
  const celebritiesData = [
    {fullName: "صالح", avata: "/124.jpeg", id:"1"},
    {fullName: "ایلیا", avata: "https://i.pravatar.cc", id: "2"},
    {fullName: "dsvcs", avata: "https://i.pravatar.cc", id: "3"},
    {fullName: "csdcs", avata: "https://i.pravatar.cc", id: "4"},
  ]

  const suggestionSliderData = [
    {imageUrl: "/124.jpeg", name: "tie"},
    {imageUrl: "/124.jpeg", name: "tie"},
    {imageUrl: "/124.jpeg", name: "tie"},
    {imageUrl: "/124.jpeg", name: "tie"},
  ]

  return (
    <main className="flex flex-col w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="w-full">
        <MainHeader />
      </div>
      <div className="w-full flex-grow flex flex-col gap-4 pb-16">
      
<div className="w-full flex justify-center items-center">
          <BodyForm />
        </div>
        
        
        <div className="w-full flex justify-center items-center px-8">
          <Celebrities
            description="سلبریتی دیگر"
            number={4}
            celebrities={celebritiesData}
          />
        </div>
        <div className="w-full flex justify-center items-center px-8">
          <SuggestionSlider
            slides={suggestionSliderData}
          />
        </div>
      </div>
      <div className="sticky z-10 bottom-0 w-full py-2.5 bg-white">
      <BottomNavigation />
    </div>
    </main>
  )
}
