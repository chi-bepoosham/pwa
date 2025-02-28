import React from 'react';
import Image from "next/image";

interface ProductCardProps {
    imageUrl: string;
    title: string;
    price: string;
    description: string;
    variant: "borderd" | "flat";
}

export const ProductCard = (props: ProductCardProps) => {
    const {imageUrl, title, price, description} = props
    return (
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
                width="128"
                height="128"
                className="w-full h-48 object-cover"
                src={imageUrl}
                alt={title}
            />
            <div className="p-4 flex">
                <h2 className="text-xl text-primary font-semibold">{title}</h2>
            </div>

            <div className="mt-3 flex flex-row justify-between">
                <span className="text-lg text-secondary font-bold">{price} تومان</span>
                <p className="text-secondary mt-1 font-bold">{description}</p>

            </div>
        </div>
    );
};

