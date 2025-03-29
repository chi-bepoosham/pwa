import {MinorButton} from "@/stories/MinorButton";
import React from "react";
import {CometStarVector} from "@/stories/Vectors";
import {ArrowRightIcon} from "@/stories/Icons";
import {LoginByPhoneOtpForm} from "@/stories/LoginByPhoneOtpForm";
import {Banner} from "@/stories/Banner";

export default function Page() {
    return (
        <div className="bg-white w-full h-screen flex flex-col justify-between items-center overflow-hidden">
            <div className="w-full h-full">
                <MinorButton
                    size="sm"
                    variant="bordered"
                    radius="md"
                    isLoading={false}
                    icon={<ArrowRightIcon size={28}/>}
                    color="success"
                />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="flex flex-row justify-center items-center gap-4">
                    <i className="text-secondary-300">
                        <CometStarVector/>
                    </i>
                    <h2 className="text-secondary font-semibold">
                        کــد تـــایید را وارد کــنید
                    </h2>
                    <i className="text-secondary-300 rotate-180">
                        <CometStarVector/>
                    </i>

                </div>
                <h3>
                    کد 5 رقمی به شمارۀ 09388505929 ارسال شد.
                </h3>
            </div>
            <div className="bg-secondary w-full h-full">
                {/*<LoginByPhoneOtpForm reset={}/>*/}
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center gap-3">
                <MinorButton
                    size="lg"
                    variant="bordered"
                    buttonTitle="تایید و ادامه"
                    radius="md"
                    isLoading={false}
                    color="success"
                />
                <h4 className="text-primary">
                    اصلاح شماره موبایل
                </h4>
            </div>
            <div className="w-full h-full text-primary">
                <Banner
                    withStar={true}
                    textColor="text-primary"
                    starColor="text-primary"
                />
            </div>


        </div>
    )
}