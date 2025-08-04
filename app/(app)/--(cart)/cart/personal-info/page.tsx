"use client";
import { MinorInput } from "@/stories/MinorInput"
import PersonalHeader from "./components/personal-header/personal-header"
import { InfoIcon } from "@/stories/Icons"
import { MinorButton } from "@/stories/MinorButton"
import { useRouter } from 'next/navigation';
import { AddAddress } from "@/stories/AddressBox/AddAddress";
import { Divider } from "@heroui/react";


export default function Page() {


  const router = useRouter();


  const handleGoForward = () => {
    router.push("/cart/personal-info/payments");
  }


    return (
        <div className="flex flex-col w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="sticky top-0 z-10 bg-white pb-5">
        <PersonalHeader />
      </div>
      
      
      
      <div className="w-full h-full flex flex-col gap-y-10">

     
     
      <div className="w-full flex  flex-col gap-y-5 justify-start items-center px-10">
            <MinorInput
            isMultieline
            label="نام کامل گیرنده"
            placeholder="نام و نام خانوادگی گیرنده را در این قسمت وارد کنید."
            type="fullName"
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

          
          
          <div className="w-full flex  flex-col gap-y-5 justify-start items-center px-10">
            <MinorInput
            isMultieline
            label="شماره تلفن گیرنده"
            placeholder=""
            type="phone"
            />

            <div className="flex flex-row justify-start w-full items-center gap-2">
              <i className="text-secondary-300">
                <InfoIcon size={20}/>
              </i>
              <p className="text-secondary-300">
              شماره تلفن همراه تحویل‌گیرنده سفارش را در این قسمت وارد کنید.
              </p>
            </div>
</div>



<div className="w-full px-4">
  <AddAddress/>

</div>

<div className="w-full px-10">
<MinorInput
isMultieline
            label="توضیحات شما"
            placeholder="توضیحات"
            type="description"
            />
</div>

<Divider
className="w-full my-5"
orientation="horizontal"
/>

<div className="w-full h-full bg-pink-600">
  {/* Final Price */}
</div>

      </div>




      <div className="sticky bottom-0 z-10 bg-white p-5">
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
            <p>...waiting for total price</p>
          </div>
        </div>
      </div>
        
        </div>
    )
}

