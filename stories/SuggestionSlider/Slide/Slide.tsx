import React from "react";
import Image from "next/image";

export interface SlideProps {
    imageUrl: string;
}

export const Slide = (props: SlideProps) => {
    const {imageUrl} = props;
    return (
        <div className="flex items-center justify-center p-4 rounded-xl  bg-white">
            <Image
                src={imageUrl}
                alt="Slide Image"
                width={64}
                height={64}
                className="object-cover w-full"
            />
        </div>
    );
};
