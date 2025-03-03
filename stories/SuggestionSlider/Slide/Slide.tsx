import React from "react";
import Image from "next/image";

export interface SlideProps {
    imageUrl: string;
    className?: string;
}

export const Slide = (props: SlideProps) => {
    const {imageUrl, className = ""} = props;
    return (
        <div className={`flex items-center justify-center p-4 rounded-xl shadow-md bg-white ${className}`}>
            <Image
                src={imageUrl}
                alt="Slide Image"
                width={64}
                height={64}
                className="object-contain"
            />
        </div>
    );
};
