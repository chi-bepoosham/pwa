"use client"

import React, {useState} from 'react';
import {Button, Tooltip} from "@heroui/react";
import {Control, useController, useFormState, useWatch} from "react-hook-form";
import {toast} from "react-toastify";
import {RefreshRounded} from "@mui/icons-material";
import {LoginByPhoneOtpFormType} from "@/types/LoginByPhoneOtpForm.type";
import {axiosCore} from "@/lib/axios";


export interface ResendOtpProps {
    control: Control<LoginByPhoneOtpFormType>;

    isDisabled?: boolean;
}

export const Resend = (props: ResendOtpProps) => {

    const {
        control,
    } = props

    const formState = useFormState({control})

    const phone = useWatch({control, name: "phone" as keyof LoginByPhoneOtpFormType})

    const tokenField = useController({control, name: "token" as keyof LoginByPhoneOtpFormType})



    const axios = axiosCore()
    const [isLoading, setLoading] = useState(false)

    const resetToken = () => {
        tokenField.field.onChange("")
    }

    const onSendAgain = async () => {
        setLoading(true)
        try {
            resetToken()
            await axios.post('/auth/phoneOtp', {phone: phone})
            toast.success("کد یکبار مصرف ارسال شد")
            setLoading(false)
            return
        } catch  {
            toast.error("کمی صبر کنید و مجدد تلاش کنید!")
            setLoading(false)
            throw ""
        }
    }

    return (
        <div className="py-2">
            <Tooltip
                content="ارسال مجدد کد"
            >
                <Button
                    color="secondary"
                    variant="flat"
                    size="lg"
                    radius="sm"
                    isIconOnly
                    isDisabled={formState.isLoading || formState.isValidating || formState.isSubmitting || formState.disabled}
                    isLoading={isLoading}
                    onPress={onSendAgain}

                >
                    <RefreshRounded/>
                </Button>
            </Tooltip>
        </div>
    )


}

