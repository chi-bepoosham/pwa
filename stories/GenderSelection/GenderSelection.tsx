"use client";

import React, {useState} from "react";
import {WomenGenderIcon, MenGenderIcon} from "@/stories/Icons";

export interface GenderSelectionProps {

}

export const GenderSelection = (props: GenderSelectionProps) => {
    const {} = props;
    const [selected, setSelected] = useState<string | null>(null);
    const options = [
        {
            label: "آقا", icon: <MenGenderIcon size={20}/>, key: "men"

        },
        {
            label: "خانم", icon: <WomenGenderIcon size={20}/>, key: "women"
        }
        ,
        // {
        //     label: "دیگر", icon: <OtherGenderIcon size={20}/>, key: "other"
        // }
    ]
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">انتخاب جنسیت</h2>
            <div className="flex gap-5">
                {options.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => setSelected(option.key)}
                        className={`flex w-32 items-center justify-center p-3 border rounded-lg cursor-pointer transition duration-500 select-none ${
                            selected === option.key
                                ? "bg-secondary border-secondary text-white"
                                : "border-[#68BAA6]"
                        }`}
                    >
                        <div className="flex flex-row gap-2">
                            <span className="text-xl">{option.label}</span>
                            <div
                                className="mr-2 bg-[#68BAA6]/40 w-7 h-7 rounded-lg flex justify-center items-center p-0.5">{option.icon}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
