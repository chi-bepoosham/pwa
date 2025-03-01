import React from "react";
import { Card, CardBody } from "@heroui/card";
import { TryOnClothVector } from "@/stories/Vectors";
import { StarIcon } from "@/stories/Icons";

export interface FittingProps {}

export const Fitting = (props: FittingProps) => {
    const {} = props;
    return (
        <Card
            isPressable
            disableAnimation={true}
            className="bg-primary"
            radius="lg"
        >
            <CardBody
                className="flex flex-row justify-between  items-center"
            >
                <div className="flex flex-row-reverse justify-center items-start relative">
          <span className="text-white font-semibold text-lg">
            تو اتاق خودت لباسارو پرو کن!
          </span>
                    <div className="flex flex-row items-start text-white top-0 -right-2">
                        <StarIcon size={12}/>
                        <StarIcon size={24}/>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <TryOnClothVector />
                </div>
            </CardBody>
        </Card>
    );
};
