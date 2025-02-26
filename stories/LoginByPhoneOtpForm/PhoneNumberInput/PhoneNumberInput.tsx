"use client"

import React from 'react';
import {Divider, Input} from "@heroui/react";
import {PatternFormat} from "react-number-format";
import {Control, Controller, useController,} from "react-hook-form";
import {LoginByPhoneOtpFormType} from "@/types/LoginByPhoneOtpForm.type";
import {InfoIcon} from "@/stories/Icons";
import Link from "next/link";


export interface PhoneNumberInputProps {
    control: Control<LoginByPhoneOtpFormType>;
    changeNumber: () => void;
}

export const PhoneNumberInput = (props: PhoneNumberInputProps) => {

    const {
        control,
    } = props


    const hasTokenSentField = useController({control, name: "hasTokenSent" as keyof LoginByPhoneOtpFormType});
    const hasTokenSent = hasTokenSentField.field.value


    return (
        <Controller
            name="phone"
            control={control}
            render={({field, fieldState, formState}) => (
                <PatternFormat
                    fullWidth
                    size="lg"
                    radius="sm"
                    color="secondary"
                    variant="bordered"
                    placeholder="127077707"
                    labelPlacement="outside"
                    description={(
                        <div className="flex flex-row gap-2">
                            <InfoIcon size={25}/>
                            <p className="text-secondary">
                                 استفاده از چی بپوشم به معنی پذیرش
                                <Link className="text-primary px-1" href="/">
                                    قوانین و مقررات
                                </Link>
                                این سرویس می باشد.
                            </p>
                        </div>
                    )}


                    type="tel"

                    endContent={(
                        <div dir="ltr" className="flex flex-row items-center justify-start">
                            +98
                            <Divider orientation="vertical" className="h-4 mx-2" />
                        </div>
                    )}

                    customInput={Input}
                    getInputRef={field.ref}
                    name={field.name}

                    format="### ### ####"
                    allowEmptyFormatting
                    mask=" "

                    value={field.value}
                    onChange={field.onChange}

                    isInvalid={fieldState.invalid}
                    errorMessage={fieldState.error?.message}

                    isReadOnly={hasTokenSent || formState.isLoading || formState.isSubmitting || formState.disabled || field.disabled}
                />
            )}
        />
    )
}

