import React from "react";
import {Card} from "@heroui/card";
import Image from "next/image";
import {sacramento} from "@/lib/font";
import {StarIcon} from "@/stories/Icons";


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
            className="border-2 border-secondary w-80 flex items-center"
        >

            <div className="relative w-full h-full">
                <Image
                    src={imageUrl}
                    alt="Celebrity Card"
                    width={128}
                    height={128}
                    className="w-full h-full object-fill"
                />
            </div>
            <div className="absolute bottom-8 w-full h-1/5  backdrop-blur bg-secondary/70">
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