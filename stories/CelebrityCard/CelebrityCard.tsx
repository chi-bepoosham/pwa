import React from "react";
import {Card} from "@heroui/card";
import Image from "next/image";
import {sacramento} from "@/lib/font";
import {ArrowRightIcon, StarIcon} from "@/stories/Icons";


export interface CelebrityCardProps {
    celebrityName: string;
    imageUrl: string;
}


export const CelebrityCard = (props: CelebrityCardProps) => {
    const {imageUrl, celebrityName} = props;
    return (
        <Card
            shadow="none"
            radius="lg"
            className="border-2 border-secondary w-64 flex items-center select-none"
        >
            <div className="absolute top-2 left-2 bg-secondary-100 rounded-xl p-1.5 z-10 cursor-pointer flex justify-center items-center">
                <i className="rotate-45">
                    <ArrowRightIcon size={28}/>
                </i>
            </div>

            <div className="relative w-full h-full">
                <Image
                    src={imageUrl}
                    alt="Celebrity Card"
                    width={128}
                    height={128}
                    className="w-full h-full"
                />
            </div>
            <div className="absolute bottom-7 w-full backdrop-blur bg-secondary/70 rounded-t-lg rounded-b-2xl">
                <div className="text-white flex flex-col items-center py-5">
                    <div className="text-xl flex flex-row items-center">
                        <div className="flex flex-row items-start text-white">
                            <StarIcon size={12}/>
                            <StarIcon size={24}/>
                        </div>
                        ســلبریـتی هـم‌استـــایل
                    </div>
                    <h3 className={`text-2xl ${sacramento.className}`}>
                        {celebrityName}
                    </h3>
                </div>
            </div>
        </Card>
    )
}