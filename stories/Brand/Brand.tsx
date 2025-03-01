import React from "react";
import {sacramento} from "@/lib/font";


export interface BrandProps {
    titleEn: string;
    titleFa: string;
}


export const Brand = (props: BrandProps) => {
    const {titleEn, titleFa} = props;
    return (
        <div className="flex flex-col items-start text-center">
            <span
                className={`text-secondary-100 font-semibold text-4xl text-nowrap ${sacramento.className}`}>{titleEn}</span>
            {titleFa && <p className="text-2xl text-secondary font-semibold">{titleFa}</p>}
        </div>
    )
}