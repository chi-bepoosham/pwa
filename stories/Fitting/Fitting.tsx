import React from "react";
import {Card, CardBody} from "@heroui/card";
import {SquareVector, TryOnClothVector} from "@/stories/Vectors";
import {StarIcon} from "@/stories/Icons";

export interface FittingProps {
}

export const Fitting = (props: FittingProps) => {
    const {} = props;





    return (
        <Card
            isPressable
            disableAnimation={true}
            className="bg-primary w-96"
            radius="lg"
        >
            <CardBody
                className="flex flex-row justify-between items-center relative overflow-hidden"
            >
                <div className="flex flex-row-reverse justify-center items-start relative">
                    <span className="text-white font-semibold text-lg" dir="rtl">
            تو اتاق خودت لباسارو پرو کن!
                    </span>
                    <div className="flex flex-row items-start text-white">
                        <StarIcon size={12}/>
                        <StarIcon size={24}/>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <TryOnClothVector/>
                </div>
                <div className="absolute -bottom-20 -right-32 fill-green-950 z-50">
                    <SquareVector/>
                </div>
            </CardBody>

        </Card>
    );
};
