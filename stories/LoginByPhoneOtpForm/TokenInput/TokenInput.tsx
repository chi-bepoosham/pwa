"use client"

import React from 'react';
import {InputOtp} from "@heroui/react";
import {Control, Controller, useWatch} from "react-hook-form";
import {LoginByPhoneOtpFormType} from "@/types/LoginByPhoneOtpForm.type";
import {Resend} from "@/stories/LoginByPhoneOtpForm/Resend";


export interface PhoneNumberInputProps {
    control: Control<LoginByPhoneOtpFormType, any>;

    done: () => void;
}

export const TokenInput = (props: PhoneNumberInputProps) => {

    const {
        control,
        done,
    } = props

    const hasTokenSent = useWatch({control, name: "hasTokenSent"})

    if (!hasTokenSent) {
        return (
            <div className="flex gap-1 h-16"/>
        )
    }


    return (
        <Controller
            name="token"
            control={control}
            render={({field, fieldState, formState}) => (
                <div className="flex gap-1 justify-between">
                    <InputOtp
                        length={4}
                        fullWidth
                        size="lg"
                        radius="lg"
                        color="default"
                        variant="flat"
                        classNames={{segmentWrapper: "flex-row-reverse justify-center"}}

                        value={field.value}
                        onChange={field.onChange}

                        isInvalid={fieldState.invalid}
                        errorMessage={fieldState.error?.message}

                        isDisabled={formState.isLoading || formState.isSubmitting || formState.disabled || field.disabled}

                        onComplete={done}
                    />
                    <Resend
                        control={control}
                    />
                </div>
            )}
        />
    )
}