import { MagicStarsIcon } from '@/stories/Icons';
import { BannerVector } from '@/stories/Vectors';
import React from 'react';

export const Fitting = () => {
  return (
    <div className="flex justify-center items-center  bg-primary rounded-3xl w-full h-28 us:max-w-[calc(100%-10px)] sm:max-w-[630px] shrink-0 mx-auto">
      <div className="absolute w-32 h-32 top-36 -right-6 bg-white/5 rounded-2xl z-0" />
      <div className="grid grid-cols-3 justify-between items-center relative overflow-hidden h-full p-2">
        <div className="col-span-2 flex flex-row-reverse justify-center items-start gap-2 relative text-white">
          <span className="text-right font-light text-lg" dir="rtl">
            هــرروز شیک‌تــر از دیــروز!
          </span>
          <MagicStarsIcon size={24} />
        </div>
        <div className="flex justify-center items-center col-span-1 h-full w-full">
          <BannerVector />
        </div>
      </div>
    </div>
  );
};
