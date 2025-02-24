"use client"

import React from 'react';
import {Control, useWatch} from "react-hook-form";
import {LoginByPhoneOtpFormType} from "@/types/LoginByPhoneOtpForm.type";


export interface PhoneOtpLabelProps {
    control: Control<LoginByPhoneOtpFormType, any>;
}

export const Label = <T, >(props: PhoneOtpLabelProps) => {

    const {
        control,
    } = props

    const hasTokenSent = useWatch({control, name: "hasTokenSent"})

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
        <div className="py-2">
            <label>
                شماره موبایل خود را وارد کنید
            </label>
        </div>
    )


}

