import { Payments } from "@/stories/Payments";
import PaymentHeader from "./components/paymen-header/paymen-header";

export default function Page() {
    return (
        <div className="flex flex-col w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="sticky top-0 z-10 bg-white pb-5">
        <PaymentHeader/>
      </div>

<div className="w-full flex justify-start items-center px-10">
    <Payments/>
</div>


      {/* Payment Modal */}
        </div>
    )
}
