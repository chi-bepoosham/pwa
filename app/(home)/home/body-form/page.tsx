import { BottomNavigation } from "@/stories/BottomNavigation"
import BdFormHeader from "./components/bd-form-header/bd-form-header"
import { BodyType } from "@/stories/BodyType"

export default function Page() {
  return (
    <main className="flex flex-col w-full h-screen overflow-y-auto overflow-x-hidden">
        <div className="sticky top-0 z-20 w-full p-4 bg-white">
            <BdFormHeader/>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center px-6 py-10">
            <BodyType
            title="فرم بدن ساعت شنی"
            selectedType="reverseTriangle"
            number={1}
            strength="لورم ایپسوم متن ساختگی با تولید سادگی
نـــامفهوم از صنعت چاپ و بـا استفاده از طراحان!"
weaknessPoints="لـــــورم ایپسوم مــــتن ساختگی با تـــولید سادگی!"
            />

<BodyType
            title="فرم بدن ساعت شنی"
            selectedType="rectangle"
            number={2}
            strength="لورم ایپسوم متن ساختگی با تولید سادگی
نـــامفهوم از صنعت چاپ و بـا استفاده از طراحان!"
weaknessPoints="لـــــورم ایپسوم مــــتن ساختگی با تـــولید سادگی!"
            />
            <BodyType
            title="فرم بدن ساعت شنی"
            selectedType="circle"
            number={3}
            strength="لورم ایپسوم متن ساختگی با تولید سادگی
نـــامفهوم از صنعت چاپ و بـا استفاده از طراحان!"
weaknessPoints="لـــــورم ایپسوم مــــتن ساختگی با تـــولید سادگی!"
            />
            <BodyType
            title="فرم بدن ساعت شنی"
            selectedType="triangle"
            number={4}
            strength="لورم ایپسوم متن ساختگی با تولید سادگی
نـــامفهوم از صنعت چاپ و بـا استفاده از طراحان!"
weaknessPoints="لـــــورم ایپسوم مــــتن ساختگی با تـــولید سادگی!"
            />
            <BodyType
            title="فرم بدن ساعت شنی"
            selectedType="hourglass"
            number={5}
            strength="لورم ایپسوم متن ساختگی با تولید سادگی
نـــامفهوم از صنعت چاپ و بـا استفاده از طراحان!"
weaknessPoints="لـــــورم ایپسوم مــــتن ساختگی با تـــولید سادگی!"
            />

        </div>


</main>
  )
} 