"use client";
import React from "react";
import {useState} from "react";
import Image from "next/image";
import {Divider} from "@heroui/react";
import {sacramento} from "@/lib/font";
import {MinusIcon, PlusIcon, RecycleIcon} from "@/stories/Icons";
import {NumericFormat} from "react-number-format";


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


    const [count, setCount] = useState(1);

    const increaseCount = () => {
        const r = count + 1
        if (r > 10000) setCount(10000);
        else setCount(r)
    }

    const decreaseCount = () => {
        const r = count - 1
        if (r <= 1) setCount(1);
        else setCount(r)
    }

    const emptyCart = () => {
        const r = count - 1
        if (r === 1) setCount(0);
        else setCount(r)
    }


    return (
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full items-start rounded-2xl group/pitem">
            <div className="flex flex-row justify-between items-center w-full">
                <div
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex justify-center items-center group-odd/pitem:bg-[#68BAA6] group-even/pitem:bg-primary">
                    <Image
                        width={128}
                        height={128}
                        src={image}
                        alt=""
                        className="w-full h-16 sm:h-20 object-cover shrink-0"
                    />
                </div>


                <div className="flex flex-col flex-grow ms-4">
                    <span className="text-secondary text-sm sm:text-base">{material}</span>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm mt-2">
                        <span className="text-secondary-300">
                            {shop}
                        </span>

                        <Divider
                            orientation="vertical"
                            className="h-4 sm:h-5 text-secondary hidden sm:block"
                        />

                        <span className="font-semibold text-secondary-300">{size}</span>
                        <Divider
                            orientation="vertical"
                            className="h-4 sm:h-5 hidden sm:block"
                        />
                        <div className="flex items-center gap-1">
                            <span className={`text-xl sm:text-2xl text-secondary-300 ${sacramento.className}`}>{colorName}</span>
                            <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full" style={{backgroundColor: colorCode}}></span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-0">
                <div className="flex items-center gap-2 sm:gap-4 rounded-xl py-1 sm:py-2 px-2 sm:px-4 w-fit">
                    {count === 0 ? (
                        <button
                            onClick={() => increaseCount()}
                            className="flex items-center gap-1 text-primary font-medium text-base sm:text-lg px-3 sm:px-4 py-1 sm:py-2 rounded-lg border border-primary transition-colors hover:bg-primary hover:text-white hover:transition duration-500 text-nowrap"
                        >
                            <PlusIcon size={24}/>
                            افزودن به سبد خرید
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={() => increaseCount()}
                                className="flex items-center justify-center text-primary w-7 h-7 sm:w-8 sm:h-8 rounded-lg transition-colors"
                            >
                                <PlusIcon size={28}/>
                            </button>
                            <span className="text-lg sm:text-xl font-medium text-primary w-5 sm:w-6 text-center">
                                {count}
                            </span>
                            <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg transition-colors">
                                {count === 1 ? (
                                    <button onClick={() => emptyCart()}>
                                        <RecycleIcon size={28}/>
                                    </button>
                                ) : (
                                    <button onClick={() => decreaseCount()}>
                                        <MinusIcon size={28}/>
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>
                <div className="flex flex-row justify-center items-center gap-1 sm:gap-2">
                    <NumericFormat
                        value={price}
                        displayType="text"
                        type="text"
                        decimalSeparator="."
                        thousandSeparator=","
                        allowNegative={false}
                        className="text-primary text-lg sm:text-xl font-bold"
                    />
                    <span className="text-primary-500 text-sm sm:text-base">
                    تومان
                    </span>
                </div>
            </div>
        </div>
    )
}