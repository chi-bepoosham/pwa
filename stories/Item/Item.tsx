import React from 'react';
import { Divider } from '@heroui/react';
import Image from 'next/image';
import { sacramento } from '@/lib/font';
import { NumericFormat } from 'react-number-format';

export interface ItemProps {
  image: string;
  title: string;
  material: string;
  count: number;
  price: number;
  size: string;
  colorName: string;
  colorCode: string;
}

export const Item = (props: ItemProps) => {
  const { image, title, material, count, price, size, colorName, colorCode } = props;
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl group/pitem">
      <div className="relative w-24 h-24 rounded-xl overflow-hidden flex justify-center items-center group-odd/pitem:bg-primary group-even/pitem:bg-[#68BAA6]">
        <Image
          width={128}
          height={128}
          src={image}
          alt={title}
          unoptimized
          quality={100}
          className="w-20 h-20 object-cover"
        />
        <span className="absolute flex justify-center items-center bottom-2 left-2 border-2 border-white bg-secondary-100 w-6 aspect-square backdrop-blur text-white rounded-lg">
          {count}
        </span>
      </div>

      <div className="flex flex-col">
        <span className="text-lg text-secondary-300">{title}</span>
        <span className="text-secondary">{material}</span>

        <div className="flex items-center gap-4 text-sm mt-2">
          <NumericFormat
            value={price}
            displayType="text"
            type="text"
            decimalSeparator="."
            thousandSeparator=","
            allowNegative={false}
            className="text-secondary text-xl font-bold"
          />
          تومان
          <Divider orientation="vertical" className="h-5 text-secondary" />
          <span className="font-semibold">{size}</span>
          <Divider orientation="vertical" className="h-5" />
          <div className="flex items-center gap-1">
            <span className={`text-2xl ${sacramento.className}`}>{colorName}</span>
            <span className="w-4 h-4 rounded-full" style={{ backgroundColor: colorCode }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
