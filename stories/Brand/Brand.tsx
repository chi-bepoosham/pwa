import React from "react";
import {sacramento} from "@/lib/font";


export interface BrandProps {
    titleEn: string;
    titleFa: string;
    titleEnColor?: string;
    titleFaColor?: string;
    titleEnIcon?: React.ReactNode;
    titleFaIcon?: React.ReactNode;
    className?: string;
}


export const Brand = (props: BrandProps) => {
    const {
        titleEn,
        titleFa,
        titleEnColor = "text-secondary-100",
        titleFaColor = "text-secondary",
        titleEnIcon,
        titleFaIcon,
        className
    } = props;
    return (
        <div className={className}>
            <div className="flex items-center gap-2">
                <span
                    className={`leading-3 ${titleEnColor} font-normal text-2xl md:text-4xl text-nowrap ${sacramento.className}`}>{titleEn}</span>
                {titleEnIcon && titleEnIcon}
            </div>
            {titleFa && (
                <div className="flex items-center gap-2">
                    {titleFaIcon && titleFaIcon}
                    <p className={`leading-3 text-sm ${titleFaColor} font-semibold`}>{titleFa}</p>
                </div>
            )}
        </div>
    )
}