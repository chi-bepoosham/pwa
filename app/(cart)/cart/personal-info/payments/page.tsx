"use client"
import { Payments } from "@/stories/Payments";
import PaymentHeader from "./components/paymen-header/paymen-header";
import { Divider } from "@heroui/react";
import { MinorInput } from "@/stories/MinorInput";
import { InfoIcon } from "@/stories/Icons";
import { MinorButton } from "@/stories/MinorButton";
import { useRouter } from 'next/navigation';
import { AddressItem } from "@/stories/AddressBox/AddressItem";
import { FinalPrice } from "@/stories/FinalPrice";

export default function Page() {

  const router = useRouter();


  const handleGoForward = () => {
    router.push("/");
  }



    return (
        <div className="flex flex-col w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="sticky top-0 z-10 bg-white pb-5">
        <PaymentHeader/>
      </div>

<div className="w-full flex justify-start items-center px-10">
    <Payments/>
</div>
<Divider
className="w-full my-5"
orientation="horizontal"
/>
<div className="w-full flex  flex-col gap-y-5 justify-start items-center px-10">
  <MinorInput
  label="کد تخفیف"
  placeholder="کد تخفیف مورد نظر خود را در این قسمت وارد کنید."
  type="discount"
  />

  <div className="flex flex-row justify-start w-full items-center gap-2">
    <i className="text-secondary-300">
      <InfoIcon size={20}/>
    </i>
    <p className="text-secondary-300">
    نام شخص تحویل‌گیرندۀ سفارش را در این قسمت وارد کنید.
    </p>
  </div>

</div>

<Divider
className="w-full my-5"
orientation="horizontal"
/>

<div className="w-full">
  {/*Address*/}
  <AddressItem/>
</div>

<Divider
className="w-full my-5"
orientation="horizontal"
/>

<div className="w-full h-full flex justify-center items-center">
  {/* Final Price */}
  <FinalPrice/>
</div>


<div className="sticky z-10 bottom-0 w-full py-2.5 bg-white">
        <div className="flex flex-row justify-between items-center w-full max-w-md mx-auto gap-1">
          <MinorButton
            variant="solid"
            color="primary"
            buttonTitle="ادامه فرآیند خرید"
            className="px-4 py-5"
            onClick={handleGoForward}
          />
          <div className="flex flex-col justify-center items-center gap-3 text-nowrap">
            <p>جمع سبد خرید</p>
            <p>waiting for total price</p>
          </div>
        </div>
      </div>
</div>
    )
}
