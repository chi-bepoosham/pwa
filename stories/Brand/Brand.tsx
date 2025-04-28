import React from "react";
import {sacramento} from "@/lib/font";


export interface BrandProps {
    titleEn: string;
    titleFa: string;
    titleEnColor?: string;
    titleFaColor?: string;
}


export const Brand = (props: BrandProps) => {
    const {titleEn, titleFa, titleEnColor = "text-secondary-100", titleFaColor = "text-secondary"} = props;
    return (
        <div>
            <span
                className={`leading-3 ${titleEnColor} font-normal text-2xl md:text-4xl text-nowrap ${sacramento.className}`}>{titleEn}</span>
            {titleFa && <p className={`leading-3 text-sm ${titleFaColor} font-semibold`}>{titleFa}</p>}
        </div>
    )
}