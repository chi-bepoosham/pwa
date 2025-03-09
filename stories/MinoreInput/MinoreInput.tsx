"use client";
import React, {useState} from "react";
import {Input} from "@heroui/react";

export interface MinoreInputProps {
    type?: "email" | "fullName" | "phone";
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MinoreInput = (props: MinoreInputProps) => {
    const {type = "fullName", placeholder, onChange} = props;

    const [value, setValue] = useState(type === "phone" ? "+98" : "");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value;

        if (type === "phone") {
            newValue = newValue.replace(/[^0-9+]/g, "");

            if (!newValue.startsWith("+98")) {
                newValue = "+98";
            }
        }

        setValue(newValue);
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <Input
            type={type === "phone" ? "tel" : type}
            placeholder={placeholder || (type === "email" ? "ایمیل خود را وارد کنید" : "نام و نام‌خانوادگی")}
            value={value}
            onChange={handleChange}
            className="w-96 border border-secondary-50 rounded-xl text-secondary hover:border-secondary focus:border-secondary"
        />
    );
};
