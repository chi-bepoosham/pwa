"use client"

import React from 'react';
import {Control, useController, useWatch, useFormState} from "react-hook-form";
import {LoginByPhoneOtpFormType} from "@/types/LoginByPhoneOtpForm.type";
import {Button} from "@heroui/react";
import {KeyboardArrowLeft} from "@mui/icons-material";


export interface PhoneOtpLabelProps {
    control: Control<LoginByPhoneOtpFormType, any>;
}

export const Submit = <T, >(props: PhoneOtpLabelProps) => {

    const {
        control,
    } = props

    const formState = useFormState({control})
    const hasTokenSent = useWatch({control, name: "hasTokenSent"})

    if (hasTokenSent) {
        return (
            <Button
                type="submit"
                color="primary"
                variant="shadow"
                size="lg"
                isDisabled={formState.disabled}
                isLoading={formState.isLoading || formState.isValidating || formState.isSubmitting}
                endContent={<KeyboardArrowLeft/>}
            >
                ورود
            </Button>
        )
    }
    return (
        <Button
            type="submit"
            color="primary"
            variant="shadow"
            size="lg"
            isDisabled={formState.disabled}
            isLoading={formState.isLoading || formState.isValidating || formState.isSubmitting}
            endContent={<KeyboardArrowLeft/>}
        >
            ادامه
        </Button>
    )


}

