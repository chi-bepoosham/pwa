import React from 'react';
import Image from 'next/image';
import { CorrectIcon, FalseIcon } from '@/stories/Icons';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export interface HintSliderProps {
  slides: { picture: string; matchRate: number; isCorrect: boolean }[];
}

export const HintSlider = (props: HintSliderProps) => {
  const { slides } = props;

  return (
    <div className="relative w-full max-w-[800px]">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        slidesPerGroup={2}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 border-2 border-secondary rounded-2xl">
              <div
                className="text-white flex justify-center items-center absolute top-2 left-2 bg-white/10 backdrop-blur rounded-full z-10 w-10 h-10">
                {slide.matchRate}%
              </div>

              <Image
                width="128"
                height="128"
                className="w-full h-full absolute object-cover rounded-xl"
                src={slide.picture}
                alt="rating-amount"
              />

              <div
                className={clsx(
                  'absolute z-10 h-12 flex justify-center items-center bottom-2 left-2 bg-secondary/60 backdrop-blur rounded-xl px-3',
                  slide.isCorrect ? 'border-2 border-[#07A537]' : 'border-2 border-[#E93B55]',
                )}
              >
                {slide.isCorrect ? (
                  <div className="flex flex-row justify-center items-center gap-4">
                    <i className="text-[#07A537] bg-white rounded-lg p-1">
                      <CorrectIcon size={28} />
                    </i>
                    <span className="text-white font-semibold text-xl">حـالت درست</span>
                  </div>
                ) : (
                  <div className="flex flex-row justify-center items-center gap-4">
                    <i className="text-[#E93B55] bg-white rounded-lg p-1">
                      <FalseIcon size={28} />
                    </i>
                    <span className="text-white font-semibold text-xl">حـالت نـادرست</span>
                  </div>
                )}
              </div>

              <div className="absolute w-full h-full bg-secondary-50 -rotate-[3deg] -z-10 rounded-2xl"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
