"use client";
import React from "react";
import {Logo} from "@/stories/Logo";
import {CometStarVector} from "@/stories/Vectors";
import {LoginByPhoneOtpForm} from "@/stories/LoginByPhoneOtpForm";
import {MinorButton} from "@/stories/MinorButton";
import {GoogleIcon} from "@/stories/Icons";

export default function Page() {

    const handleReset = () => {
        console.log("فرم ریست شد");
    };


    return (
        <div className="flex flex-col justify-center items-center h-screen"
        >
            <div className="flex flex-col items-center justify-center h-full w-full gap-5">
                <Logo
                    withLogoType={true}
                />
                <div className="flex flex-row justify-center items-center w-full gap-4">
                    <i className="">
                        <CometStarVector/>
                    </i>
                    <h2 className="text-nowrap">ورود و ثــبت‌نـــام</h2>
                    <i className=" rotate-180">
                        <CometStarVector/>
                    </i>
                </div>
            </div>


            <div
                className="flex flex-col items-center justify-between w-full h-full rounded-t-3xl p-4 bg-white">
                <div className="h-full">
                    <LoginByPhoneOtpForm reset={handleReset}/>

                </div>
                <div className="flex flex-row items-center justify-center w-full h-full gap-4">
                    <i className="text-secondary-300">
                        <CometStarVector/>
                    </i>
                    <h4 className="text-secondary">
                        یــا
                    </h4>
                    <i className="text-secondary-300 rotate-180">
                        <CometStarVector/>
                    </i>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <MinorButton
                        size="lg"
                        variant="bordered"
                        buttonTitle="ورود بـــــا حســــاب گــــــوگل"
                        radius="md"
                        isLoading={false}
                        icon={<GoogleIcon size={28}/>}
                        color="success"
                    />
                </div>


            </div>
        </div>


    );
}
