"use client"

import React from 'react';
import {Control, useWatch} from "react-hook-form";
import {LoginByPhoneOtpFormType} from "@/types/LoginByPhoneOtpForm.type";


export interface PhoneOtpLabelProps {
    control: Control<LoginByPhoneOtpFormType>;
}

export const Label = (props: PhoneOtpLabelProps) => {

    const {
        control,
    } = props

    const hasTokenSent = useWatch({control, name: "hasTokenSent" as keyof LoginByPhoneOtpFormType})

    if (hasTokenSent) {
        return (
            <div className="py-2">
                <label>
                    کد ارسال شده را وارد کنید
                </label>
            </div>
        )
    }
    return (
        <div className="py-2 text-nowrap">
            <label>
                لطفا شماره تلفن خود را در کادر زیر وارد کنید.
            </label>
        </div>
    )


}

