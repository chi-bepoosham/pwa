import React from "react";
import {NumbersIcon} from "@/stories/Icons";


export interface NumberProps {
    number: number;
}


export const Number = (props: NumberProps) => {
    const {number} = props;
    return (
        <div className="relative z-10">
            <i className="absolute">
                <NumbersIcon size={20}/>
            </i>
        </div>
    )
}