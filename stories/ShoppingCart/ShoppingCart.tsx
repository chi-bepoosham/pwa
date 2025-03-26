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
        <div className="flex flex-col gap-10 w-full items-center p-4 rounded-2xl group/pitem">
            <div className="flex flex-row justify-between items-center w-full">
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
            </div>


            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex items-center gap-4 rounded-xl py-2 px-4 w-fit">
                    {count === 0 ? (
                        <button
                            onClick={() => increaseCount()}
                            className="flex items-center gap-2 text-primary font-medium text-lg px-4 py-2 rounded-lg border border-primary transition-colors hover:bg-primary hover:text-white hover:transition duration-500 "
                        >
                            <PlusIcon size={24}/>
                            افزودن به سبد خرید
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={() => increaseCount()}
                                className="flex items-center justify-center text-primary w-8 h-8 rounded-lg transition-colors"
                            >
                                <PlusIcon size={28}/>
                            </button>
                            <span className="text-xl font-medium text-primary w-6 text-center">
                                {count}
                            </span>
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors">
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
                <div className="flex flex-row justify-center items-center gap-2">
                    <NumericFormat
                        value={price}
                        displayType="text"
                        type="text"
                        decimalSeparator="."
                        thousandSeparator=","
                        allowNegative={false}
                        className="text-primary text-xl font-bold"
                    />
                    <span className="text-primary-500">
                    تومان
                </span>
                </div>


            </div>

        </div>

    )
}