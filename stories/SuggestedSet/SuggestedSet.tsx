import React from "react";
import Image from "next/image";
import {Button} from "@heroui/react";
import {ArrangeIcon} from "@/stories/Icons";

export interface SuggestedSetProps {
    mainImage: string;
    subImages: string[];
    matchPercent: number;
}


export const SuggestedSet = (props: SuggestedSetProps) => {
    const {subImages, mainImage, matchPercent} = props;
    return (
        <div
            className="flex items-center justify-center relative
        w-56 h-56 rounded-[90px] border border-primary-100
        after:absolute after:w-48 after:h-48 after:rounded-[80px] after:border-2 after:border-primary after:bg-primary-200"
        >
            <Image
                src={mainImage}
                alt="product-suggested-set-image"
                width={128}
                height={128}
                className="object-cover z-20 after:!w-full after:!h-full"
                loading="lazy"
            />
            <div
                className="absolute top-2 -left-8 z-10 bg-[#FFD6B3] w-[72px] aspect-square border border-secondary rounded-[28px] flex justify-center items-center p-2"
            >
                <Image
                    src={subImages[subImages.length - 2]}
                    alt="product-suggested-set-image"
                    width={128}
                    height={128}
                    className="object-cover !w-full !h-full"
                    loading="lazy"
                />
            </div>
            <div
                className="absolute -bottom-6 -right-10 z-10 bg-white w-24 aspect-square border border-secondary rounded-[40px] flex justify-center items-center"
            >
                <Image
                    src={subImages[subImages.length - 1]}
                    alt="product-suggested-set-image"
                    width={128}
                    height={128}
                    className="object-cover !w-full !h-full"
                    loading="lazy"
                />


            </div>
            <div
                className="cursor-pointer absolute z-10 top-5 -right-32 bg-secondary-50 backdrop-blur rounded-t-lg rounded-b-2xl w-fit h-fit flex flex-row justify-center items-center p-2 gap-2"
            >
                <div className="flex flex-col">
                <span className="text-secondary font-bold">
                    {matchPercent}%
                </span>
                    <span className="text-secondary font-bold">
                    ست با استایل شما
                </span>
                </div>
                <div className="flex">
                    <Button
                        className="!p-1 !min-w-0 rounded-2xl bg-secondary text-white"
                        startContent={<ArrangeIcon size={36}/>}
                    />
                </div>

            </div>

        </div>

    )
}