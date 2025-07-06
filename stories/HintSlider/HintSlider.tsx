import React from 'react';
import Image from 'next/image';
import { CorrectIcon, FalseIcon } from '@/stories/Icons';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export interface HintSliderProps {
  slides: { picture: string; matchRate: number; isCorrect: boolean }[];
}

export const HintSlider = (props: HintSliderProps) => {
  const { slides } = props;

  return (
    <div className="relative w-full select-none flex flex-col gap-8">
      <Swiper
        slidesPerView="auto"
        spaceBetween={0}
        freeMode
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='!w-fit mx-2'>
            <div className="relative overflow-hidden bg-white w-full h-64 border-2 border-secondary rounded-2xl">
              {/*
              <div className="text-white flex justify-center items-center absolute top-2 left-2 bg-black/30 backdrop-blur rounded-full z-10 w-10 h-10">
                {slide.matchRate}%
              </div>
              */}

              <Image
                width="512"
                height="512"
                className="w-full h-full object-contain rounded-xl"
                src={slide.picture}
                alt="rating-amount"
              />

              <div
                className={clsx(
                  'absolute z-10 h-12 flex justify-center items-center bottom-2 left-2 bg-secondary/60 backdrop-blur rounded-xl px-1',
                  slide.isCorrect ? 'border-2 border-[#07A537]' : 'border-2 border-[#E93B55]'
                )}
              >
                <div className="flex flex-row justify-center items-center gap-2">
                    <i className={clsx("bg-white rounded-lg p-1", slide.isCorrect ? "text-[#07A537]" : "text-[#E93B55]")}>
                      {slide.isCorrect ? <CorrectIcon size={24} /> : <FalseIcon size={24} />}
                    </i>
                    <span className="text-white font-semibold text-base truncate">
                      {slide.isCorrect ? "حـالت درست" : "حـالت نـادرست"}
                    </span>
                </div>
              </div>

              <div className="absolute w-full h-full bg-secondary-50 -rotate-[3deg] -z-10 rounded-2xl"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ToDo:make a pagination for slider */}
    </div>
  );
};
