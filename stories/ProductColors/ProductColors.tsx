"use client";

import React, {useRef} from "react";
import {ScrollShadow} from "@heroui/react";

export interface ProductColorsProps {
    colors: string[];
    onSelect: (color: string) => void;
}

export const ProductColors: React.FC<ProductColorsProps> = (props: ProductColorsProps) => {

    const {colors, onSelect} = props;

    const scrollContainerRef = useRef<HTMLDivElement>(null);


    const handleWheelScroll = (event: React.WheelEvent<HTMLDivElement>) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += event.deltaY * 1.5;
        }
    };


    return (
            <ScrollShadow
                size={5}
                hideScrollBar
                visibility="auto"
                orientation="horizontal"
                className="w-full flex justify-center"
            >
                <div
                    ref={scrollContainerRef}
                    onWheel={handleWheelScroll}
                    className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
                >
                    {colors.map((color) => (
                        <div
                            key={color}
                            className="w-10 h-10 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all shrink-0"


                            onClick={() => onSelect(color)}
                        >
                            <div
                                className="w-8 h-8 rounded-full"
                                style={{backgroundColor: color}}
                            />
                        </div>
                    ))}
                </div>
            </ScrollShadow>
    );
};
