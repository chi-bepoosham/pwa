import React from "react";
import {ArrowRightIcon, RecycleIcon, StarIcon} from "@/stories/Icons";
import Image from "next/image";


export interface ClosetSliderProps {
    imageUrl: string;
    matchPercent: number;
}


export const ClosetSlider = (props: ClosetSliderProps) => {
    const {imageUrl, matchPercent} = props;

    // const handleImageChange = (index) => {
    //     setSelectedImage(index);
    // };


    return (
        <div className="relative flex justify-center items-center">
            <div
                className="relative w-fit h-fit flex flex-col justify-start items-center border-2 border-secondary rounded-xl p-2 bg-white">
                <div className="flex flex-row justify-between w-full">
                    <i className="bg-secondary-100 rounded-2xl p-1">
                        <RecycleIcon size={28}/>
                    </i>
                    <div className="flex flex-row items-start text-secondary">
                        <StarIcon size={12}/>
                        <StarIcon size={24}/>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image
                        src={imageUrl}
                        alt="image"
                        width={128}
                        height={128}
                        className="object-cover !w-full !h-full"
                        loading="lazy"
                    />


                    <div className="flex flex-row justify-between bg-primary rounded-t-lg rounded-b-2xl w-full p-2">
                        <div className="flex flex-col">
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
                        <i className="bg-secondary rounded-3xl text-white">
                            <ArrowRightIcon size={24}/>
                        </i>
                    </div>

                </div>

            </div>
            <div className="absolute -z-20 w-full h-full flex justify-center bg-secondary-50 rounded-2xl -rotate-[6deg]">
            </div>
        </div>
    )
}