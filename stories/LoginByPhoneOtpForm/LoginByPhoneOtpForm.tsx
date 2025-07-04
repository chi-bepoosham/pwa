"use client"

import React, {useEffect} from 'react';
import {ErrorOption, FieldPath, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {LoginByPhoneOtpFormType} from "@/types/LoginByPhoneOtpForm.type";
import {PhoneNumberInput} from "@/stories/LoginByPhoneOtpForm/PhoneNumberInput";
import {TokenInput} from "@/stories/LoginByPhoneOtpForm/TokenInput";
import {Label} from "@/stories/LoginByPhoneOtpForm/Label";
import {Submit} from "@/stories/LoginByPhoneOtpForm/Submit";
import { InfoIcon } from '../Icons';
import { addToast } from '@heroui/react';


type T = LoginByPhoneOtpFormType


export interface LoginByPhoneOtpFormProps {
    submit?: (
        data: T,
        setError: (name: (FieldPath<LoginByPhoneOtpFormType> | `root.${string}` | "root"), error: ErrorOption) => void,
        resetToken: () => void,
    ) => Promise<void>;
    data?: T;
    reset: () => void;
}


const schema = z.object({
    phone: z.string({message: "شماره وارد شده معتبر نیست"})
        .regex(/^9\d{9}|^9\d{2} \d{3} \d{4}$/, "شماره وارد شده معتبر نیست")
        .transform((val) => (val.replaceAll(" ", ""))),
    token: z.union([
        z.string({message: "کد تایید نادرست است"}).regex(/[0-9]{4}/, "کد تایید نادرست است"),
        z.string({message: "کد تایید نادرست است"}).length(0),
    ]),
})

const initialData: T = {
    phone: "",
    token: "",
    hasTokenSent: false,
}

export const LoginByPhoneOtpForm = (props: LoginByPhoneOtpFormProps) => {

    const {
        submit,
        data,
        reset: resetForm,
    } = props


    const defaultValues = async () => {
        return data ? data : initialData
    }

    const {
        handleSubmit,
        control,
        setError,
        setValue,
        // watch,
        // reset,
        resetField,
        // setFocus,
    } = useForm<LoginByPhoneOtpFormType>(
        {
            resolver: zodResolver(schema),
            defaultValues,
        }
    );

    const resetToken = () => {
        resetField("token")
    }

    const onSubmit = async (data: T) => {
        if (submit) await submit(data, setError, resetToken)
        else await builtinSubmit(data)
        // reset(data)
    }

    const builtinSubmit = async (data: T) => {
        addToast({
            title: 'Submit Handler not implement!',
            color: "danger",
        })
    }


    useEffect(() => {
        setValue("hasTokenSent", data?.hasTokenSent || false)
    }, [data?.hasTokenSent]);


    return (
        <form
            className="flex flex-col gap-0 w-72"
            // onReset={() => reset()}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Label
                control={control}
            />
            <PhoneNumberInput
                control={control}
                changeNumber={resetForm}
            />
            <div className="flex flex-row justify-start items-start gap-2 mt-4">
              <InfoIcon size={30} />
              <p className="text-sm text-right text-black">
                استفاده از چی‌ بپوشم به معنی پذیرش{' '}
                <a
                  href="/terms"
                  className="text-primary hover:underline"
                >
                  قوانین و مقررات
                </a>{' '}
                این سرویس می‌باشد.
              </p>

            </div>
            <TokenInput
                control={control}
                done={() => handleSubmit(onSubmit)()}
            />
            <Submit
                control={control}
            />
        </form>
    )

}