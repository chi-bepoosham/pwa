"use client"

import React from 'react';
import {Button, Input} from "@heroui/react";
import {PatternFormat} from "react-number-format";
import {Control, Controller, useController,} from "react-hook-form";
import {LoginByPhoneOtpFormType} from "@/types/LoginByPhoneOtpForm.type";


export interface PhoneNumberInputProps {
    control: Control<LoginByPhoneOtpFormType, any>;
    changeNumber: () => void;
}

export const PhoneNumberInput = (props: PhoneNumberInputProps) => {

    const {
        control,
        changeNumber,
    } = props


    const hasTokenSentField = useController({control, name: "hasTokenSent"})
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
                    color="default"
                    variant="flat"
                    placeholder="09127077707"
                    labelPlacement="outside"
                    description="شماره خود را به صورت 09212728307 وارد کنید"
                    type="tel"

                    startContent={(
                        hasTokenSent
                            ?
                            (
                                <Button
                                    size="sm"
                                    color="secondary"
                                    variant="light"
                                    onPress={changeNumber}
                                >
                                    تغییر شماره
                                </Button>
                            )
                            :
                            null
                    )}

                    customInput={Input}
                    getInputRef={field.ref}
                    name={field.name}

                    format="#### ### ####"
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

