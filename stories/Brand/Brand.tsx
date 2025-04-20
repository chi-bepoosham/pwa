import React from "react";
import {sacramento} from "@/lib/font";


export interface BrandProps {
    titleEn: string;
    titleFa: string;
}


export const Brand = (props: BrandProps) => {
    const {titleEn, titleFa} = props;
    return (
        <div>
            <span
                className={`leading-3 text-secondary-100 font-normal text-2xl md:text-4xl text-nowrap ${sacramento.className}`}>{titleEn}</span>
            {titleFa && <p className="leading-3 text-sm text-secondary font-semibold">{titleFa}</p>}
        </div>
    )
}