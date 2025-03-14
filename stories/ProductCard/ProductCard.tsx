import React from 'react';
import Image from "next/image";
import clsx from 'clsx';
import Link from "next/link";
import {ArrowRightIcon} from "@/stories/Icons";

interface ProductCardProps {
    imageUrl: string;
    title: string;
    price: string;
    description: string;
    variant: "bordered" | "solid";
    colors: string[];
    withArrow?: boolean;
    isCloset?: boolean;
}

export const ProductCard = (props: ProductCardProps) => {
    const {imageUrl, title, price, description, variant, colors, withArrow} = props;

    return (
        <Link href="/">
            <div className={clsx(
                "w-60 h-[350px] rounded-xl overflow-hidden relative",
                variant === "bordered"
                    ? "border-2 border-secondary bg-white"
                    : "bg-secondary-50 border-none"
            )}>
                <div className={clsx(
                    "absolute top-1.5 left-1.5 p-1.5 rounded-2xl",
                    withArrow ? "flex justify-center items-center bg-secondary-100" : "grid grid-cols-2 gap-0.5 bg-secondary-100"
                )}>
                    {withArrow ? (
                        <i className="rotate-45">
                            <ArrowRightIcon size={24}/>
                        </i>
                    ) : (
                        colors.slice(0, 4).map((color, index) => (
                            <span
                                key={index}
                                className="w-4 h-4 rounded-full"
                                style={{backgroundColor: color}}
                            />
                        ))
                    )}
                </div>
                <div className="flex flex-col justify-between h-full">
                    <Image
                        width="128"
                        height="128"
                        className="w-full object-cover"
                        src={imageUrl}
                        alt={title}
                    />
                    <div className={clsx("px-3 gap-1 flex flex-col items-start",
                        variant === "bordered"
                            ? "bg-secondary-50 rounded-lg m-2"
                            : "bg-white rounded-lg m-2"
                    )}>
                        <div className="p-4 flex items-center gap-1">
                            <span className="text-lg text-primary font-bold">{price}</span>
                            <span className="text-primary-900 text-sm">تومان</span>
                        </div>

                        <div className="flex flex-row items-start justify-between w-full">
                            <h2 className="text-xl truncate font-semibold ">{title}</h2>
                            <p className="text-secondary truncate font-bold">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
