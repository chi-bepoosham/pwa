import React from "react";
import {Button} from "@heroui/react";
import {BookmarkIcon, OrdersIcon, ShapeIcon, StarIcon} from "@/stories/Icons";


export interface SocialProps {
}

export const DashboardItems = (props: SocialProps) => {
    const {} = props
    return (
        <div className="flex flex-row-reverse gap-6 justify-center">
            <Button
                variant="bordered"
                className="w-40 h-40 flex flex-col items-center justify-center border-2 border-[#68BAA6] rounded-2xl bg-[#68BAA6]/10 focus:bg-[#68BAA6] active:text-white active:transition active:duration-500"
            >
                <i className="mb-2">
                    <BookmarkIcon size={36}/>
                </i>
                <span className="text-lg font-bold">
                    نشان ‌شده‌ها
                </span>
                <StarIcon size={20}/>
            </Button>

            <Button
                variant="bordered"
                className="w-40 h-40 flex flex-col items-center justify-center border-2 border-[#68BAA6] rounded-2xl bg-[#68BAA6]/10 focus:bg-[#68BAA6] active:text-white active:transition active:duration-500"
            >
                <i className="mb-2">
                    <ShapeIcon size={36}/>
                </i>
                <span className="text-lg font-bold">
                    تصویر فرم بدن
                </span>
                <StarIcon size={20}/>
            </Button>

            <Button
                variant="bordered"
                className="w-40 h-40 flex flex-col items-center justify-center border-2 border-[#68BAA6] rounded-2xl bg-[#68BAA6]/10 focus:bg-[#68BAA6] active:text-white active:transition active:duration-500"
            >
                <i className="mb-2">
                    <OrdersIcon size={36}/>
                </i>
                <span className="text-lg font-bold">
                    سـفارشــات
                </span>
                <StarIcon size={20}/>
            </Button>
        </div>
    );
};