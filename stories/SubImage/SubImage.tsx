import Image from 'next/image';
import React from 'react';

export interface SubImageProps {
  subImageUrl: string;
  percentNumber: number;
}

export const SubImage = ({ subImageUrl, percentNumber }: SubImageProps) => {
  return (
    <div className="w-full max-w-36 aspect-square flex overflow-hidden justify-center items-center relative border-2 border-secondary rounded-3xl shrink-0">
      <div className="bg-white/5 border border-white backdrop-blur-md rounded-[40px] flex justify-center items-center text-secondary absolute top-2 left-2 p-2 aspect-square shrink-0">
        {percentNumber}%
      </div>
      <div className="w-full h-full ">
        <Image
          width="128"
          height="128"
          className="w-full object-cover h-full"
          src={'https://core.chibepoosham.app/' + subImageUrl}
          alt="image"
        />
      </div>
    </div>
  );
};
