'use client';
import React from 'react';
import { Slider } from '@heroui/react';


export interface PriceRangeProps {
}

export const PriceRange = (props: PriceRangeProps) => {
  const {} = props;


  return (
    <div className="flex flex-row w-full mx-10 justify-between items-end bg-pink-700">
      <div className="flex flex-col justify-center items-center bg-green-700">
        <span className="text-secondary font-semibold">
          35.000.000
        </span>
        <span className="text-secondary-300">
          تومان
        </span>
      </div>
      <Slider
        className="relative bg-red-700"
        classNames={{
          base: [
            'w-full',
            'after:',
            'before:',
          ],
          filler: [
            'bg-primary',
            'h-[4px]',
          ],
          labelWrapper: 'mb-6',
          label: 'font-semibold text-secondary text-xl',
          value: 'hidden',
          thumb: [
            '',
            'relative w-6 h-6 bg-primary rounded-full flex items-center justify-center z-20',
            'after:content-[\'\'] after:w-3 after:h-3 after:bg-white after:rounded-full',
          ],
          track: [
            '',
            '',
            'bg-secondary',
            'h-[2px]',
          ],
          trackWrapper: [
            'relative',
            'after:absolute after:rounded-full after:h-6 after:w-6 after:border-5 after:border-[#D9D9D9] after:right-0 after:bg-secondary',
            'before:absolute before:rounded-full before:h-6 before:w-6 before:border-5 before:border-[#D9D9D9] before:left-0 before:bg-secondary before:z-10',
          ],
        }}
        radius="full"
        defaultValue={[2000000, 5000000]}
        disableThumbScale={true}
        formatOptions={{ style: 'currency', currency: 'IRT' }}
        name="price-range"
        label="بازۀ قیمت"
        maxValue={35000000}
        minValue={500000}
        showOutline={false}
        showSteps={false}
        showTooltip={true}
        step={50000}
        tooltipProps={{
          offset: 10,
          placement: 'bottom',
          classNames: {
            base: ['bg-transparent', 'shadow-none'],
            content: [
              'py-1',
              'px-3',
              'text-primary',
              'font-bold',
              'text-lg',
              'bg-white',
              'rounded-lg',
              'border',
              'border-white',
            ],
            arrow: ['hidden'],
          },
        }}
      ></Slider>
      <div className="flex flex-col justify-center items-center bg-blue-700">
          <span className="text-secondary font-semibold">
            500.000
          </span>
        <span className="text-secondary-300">
            تومان
          </span>
      </div>
    </div>
  );
};
