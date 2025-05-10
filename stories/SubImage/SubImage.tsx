import React from 'react';
import Image from 'next/image';
import { ScrollShadow } from "@heroui/react";

export interface SubImageProps {
    subImageUrl: string;
    percentNumber: number;
}

export const SubImage = (props: SubImageProps) => {
    const { subImageUrl, percentNumber } = props;
    return (
        <ScrollShadow
            orientation="horizontal"
            className="w-full"
            hideScrollBar
        >
            <div className='w-full max-w-36 aspect-square flex justify-center items-center relative border-2 border-secondary rounded-2xl shrink-0'>
                <div className='bg-white/5 backdrop-blur rounded-2xl flex justify-center items-center text-secondary absolute top-2 left-2 p-1.5 aspect-square shrink-0'>
                    {percentNumber}%
                </div>
                <div className="w-full h-full">
                    <Image
                        width="128"
                        height="128"
                        className="w-full object-cover shrink-0"
                        src={subImageUrl}
                        alt="image"
                    />
                </div>
            </div>
        </ScrollShadow>
    )
}
