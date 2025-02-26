import React from "react";
import {Input} from "@heroui/react";

export interface MinoreInputProps {
    type?: "email" | "text";
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MinoreInput = ({type = "text", placeholder, onChange}: MinoreInputProps) => {
    return (
        <Input
            type={type}
            placeholder={placeholder || (type === "email" ? "ایمیل خود را وارد کنید" : "نام و نام‌خانوادگی")}
            onChange={onChange}
            className="w-96  border border-secondary-50  rounded-xl text-secondary hover:border-secondary focus:border-secondary"
        />
    );
};
