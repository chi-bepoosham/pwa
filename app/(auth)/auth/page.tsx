import React from "react";
import {Logo} from "@/stories/Logo";
import {CometStarVector} from "@/stories/Vectors";
import {LoginByPhoneOtpForm} from "@/stories/LoginByPhoneOtpForm";
import {MinorButton} from "@/stories/MinorButton";
import {GoogleIcon} from "@/stories/Icons";

export default function Page() {
    return (
        <div className="relative flex justify-center items-center h-screen"
        >
            {/*<div className="flex flex-col items-center justify-center w-full gap-5">*/}
            {/*    <Logo*/}
            {/*        withLogoType={true}*/}
            {/*    />*/}
            {/*    <div className="flex flex-row justify-center items-center w-full gap-4">*/}
            {/*        <i className="text-white">*/}
            {/*            <CometStarVector/>*/}
            {/*        </i>*/}
            {/*        <h2>ورود و ثــبت‌نـــام</h2>*/}
            {/*        <i className="text-white rotate-180">*/}
            {/*            <CometStarVector/>*/}
            {/*        </i>*/}
            {/*    </div>*/}
            {/*</div>*/}


            <div className="absolute flex flex-col items-center justify-center">
                {/*<div>*/}
                {/*    <LoginByPhoneOtpForm*/}
                {/*        reset={}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div className="flex flex-row items-center justify-center w-full">*/}
                {/*    <i className="text-white">*/}
                {/*        <CometStarVector/>*/}
                {/*    </i>*/}
                {/*    <h4 className="text-secondary-100">*/}
                {/*        یــا*/}
                {/*    </h4>*/}
                {/*    <i className="text-white rotate-180">*/}
                {/*        <CometStarVector/>*/}
                {/*    </i>*/}
                {/*</div>*/}
                <div>
                    <MinorButton
                        size="lg"
                        variant="solid"
                        buttonTitle="ورود بـــــا حســــاب گــــــوگل"
                        radius="md"
                        isLoading={false}
                        icon={<GoogleIcon size={28}/>}
                        color="primary"
                    />
                </div>


            </div>
        </div>


    );
}
