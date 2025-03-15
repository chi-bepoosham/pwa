import React from "react";
import {ArrowRightIcon, RecycleIcon, StarIcon} from "@/stories/Icons";
import Image from "next/image";
import clsx from "clsx";


export interface ClosetSliderProps {
    imageUrl: string;
    matchPercent: number;
    isSubImage: boolean;
    subMatchPercent: number;
    subImageUrls: string[];
}


export const ClosetSlider = (props: ClosetSliderProps) => {
    const {
        imageUrl,
        matchPercent,
        isSubImage,
        subMatchPercent
    } = props;

    // const handleImageChange = (index) => {
    //     setSelectedImage(index);
    // };


    return (
        <div
            className={clsx("relative w-fit h-fit flex flex-col justify-start items-center border-2 border-secondary rounded-xl bg-white select-none",
                isSubImage ? "flex justify-center items-center p-0" : "p-2"
            )}
        >
            {isSubImage && (
                <div
                    className="absolute top-4 left-4 bg-white/5 backdrop-blur rounded-xl text-secondary font-semibold flex justify-center items-center border-2 border-white p-1.5"
                >
                    {subMatchPercent}%
                </div>
            )}


            {!isSubImage && (
                <div className="flex flex-row justify-between w-full">
                    <i className="bg-secondary-100 rounded-2xl p-1">
                        <RecycleIcon size={28}/>
                    </i>
                    <div className="flex flex-row items-start text-secondary">
                        <StarIcon size={12}/>
                        <StarIcon size={24}/>
                    </div>
                </div>)}
            <div className="flex flex-col justify-center items-center">
                <Image
                    src={imageUrl}
                    alt="image"
                    width={128}
                    height={128}
                    className="object-cover !w-full !h-full"
                    loading="lazy"
                />

                {!isSubImage && (
                    <div className="flex flex-row justify-between bg-primary rounded-t-lg rounded-b-2xl w-full p-1.5">
                        <div className="flex flex-col truncate">
                            <span className="text-white font-bold flex flex-row items-center gap-2 text-large">
                                {matchPercent}%
                                <h4 className="text-secondary font-semibold">
                                   درصد
                                </h4>
                            </span>
                            <span className="text-white text-large">
                                مناسب با فرم بدن شما!
                            </span>

                        </div>
                        <i className="bg-secondary rounded-3xl text-white flex shrink-0 w-fit h-fit p-1 -rotate-45">
                            <ArrowRightIcon size={24}/>
                        </i>
                    </div>
                )}

            </div>

        </div>


    )
}