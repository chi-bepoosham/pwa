import React from "react";
import {NumbersIcon} from "@/stories/Icons";


export interface NumberProps {
    number: number;
}


export const Number = (props: NumberProps) => {
    const {number} = props;
    return (
        <div className="relative">
            <div
                className="absolute -top-3 -left-3 flex justify-center items-center text-secondary font-bold text-3xl border-3 border-secondary rounded-3xl w-14 aspect-square"
            >
                {number}
            </div>
                <NumbersIcon size={60}/>

        </div>
    )
}