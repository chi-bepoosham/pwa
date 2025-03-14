import React from "react";
import Image from "next/image";
import {Divider} from "@heroui/react";
import {sacramento} from "@/lib/font";


export interface ShoppingCartProps {
    material: string;
    shop: string;
    size: string;
    colorCode: string;
    colorName: string;
    image: string;
    price: number;

}


export const ShoppingCart = (props: ShoppingCartProps) => {
    const {
        image,
        material,
         price,
        size,
        colorCode,
        colorName,
        shop,
    } = props;
    return (
        <div className="flex items-center gap-4 p-4 rounded-2xl group/pitem">
            <div
                className="relative w-24 h-24 rounded-xl overflow-hidden flex justify-center items-center group-odd/pitem:bg-[#68BAA6] group-even/pitem:bg-primary">
                <Image
                    width={128}
                    height={128}
                    src={image}
                    alt=""
                    className="w-20 h-20 object-cover"
                />
            </div>
            <div className="flex flex-col">
                <span className="text-secondary">{material}</span>

                <div className="flex items-center gap-4 text-sm mt-2">
                    <span className="text-secondary-300">
                        {shop}
                    </span>

                    <Divider
                        orientation="vertical"
                        className="h-5 text-secondary"
                    />

                    <span className="font-semibold text-secondary-300">{size}</span>
                    <Divider
                        orientation="vertical"
                        className="h-5"
                    />
                    <div className="flex items-center gap-1">
                        <span className={`text-2xl text-secondary-300 ${sacramento.className}`}>{colorName}</span>
                        <span className="w-4 h-4 rounded-full" style={{backgroundColor: colorCode}}></span>
                    </div>


                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between">

                </div>

            </div>
        </div>

    )
}