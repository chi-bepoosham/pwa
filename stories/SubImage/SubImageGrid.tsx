import React from 'react';
import { ScrollShadow } from "@heroui/react";
import { SubImage } from './SubImage';

export interface SubImageGridProps {
    images: Array<{
        url: string;
        percentNumber: number;
    }>;
    className?: string;
}

export const SubImageGrid = ({ images, className = '' }: SubImageGridProps) => {
    return (
        <ScrollShadow
            size={10}
            orientation="horizontal"
            className={`w-full ${className}`}
            hideScrollBar={false}
        >
            <div className="flex justify-center">
                {images.map((image, index) => (
                    <div key={index} className="min-w-[200px] px-5">
                        <SubImage
                            subImageUrl={image.url}
                            percentNumber={image.percentNumber}
                        />
                    </div>
                ))}
            </div>
        </ScrollShadow>
    );
};