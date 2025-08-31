import { MagicStarsIcon } from '@/stories/Icons';
import { TryOnClothVector } from '@/stories/Vectors';
import React from 'react';

export const Fitting = () => {
  return (
    <div className="flex justify-center items-center  bg-primary rounded-3xl w-full h-28 us:max-w-[calc(100%-10px)] sm:max-w-[630px] shrink-0 mx-auto">
      <div className="grid grid-cols-3 justify-between items-center relative overflow-hidden h-full p-2">
        <div className="absolute w-32 h-32 top-6 -right-16 bg-white/5 rounded-2xl z-0" />
        <div className="col-span-2 flex flex-row-reverse justify-center items-start gap-2 relative text-white">
          <span className="text-right font-light text-lg" dir="rtl">
            تــو اتـــاق خــودت لباســارو پـــــورو کــــن!
          </span>
          <MagicStarsIcon size={24} />
        </div>
        <div className="flex justify-center items-center col-span-1 h-full w-full">
          <TryOnClothVector />
        </div>
      </div>
    </div>
  );
};
