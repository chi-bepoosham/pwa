import { CorrectIcon, FalseIcon } from '@/stories/Icons';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface HintSliderProps {
  slides: { picture: string; matchRate: number; isCorrect: boolean }[];
}

export const HintSlider = ({ slides }: HintSliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const groupedSlides = [];
  for (let i = 0; i < slides.length; i += 2) {
    groupedSlides.push(slides.slice(i, i + 2));
  }

  return (
    <div className="relative w-full flex flex-col gap-4 ">
      <Swiper
        className="w-full"
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {groupedSlides.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center gap-6">
              {group.map((slide, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden bg-white w-40 h-56 border-2 border-secondary rounded-2xl flex-shrink-0"
                >
                  <Image
                    width="512"
                    height="512"
                    className="w-full h-full object-cover rounded-xl"
                    src={slide.picture}
                    alt="rating-amount"
                  />

                  <div
                    className={clsx(
                      'absolute z-10 h-12 flex justify-center items-center bottom-2 left-2 bg-secondary/40 backdrop-blur rounded-xl p-2',
                      slide.isCorrect ? 'border-1 border-[#07A537]' : 'border-1 border-[#E93B55]'
                    )}
                  >
                    <div className="flex flex-row justify-center items-center gap-2">
                      <i
                        className={clsx(
                          'bg-white rounded-lg p-1',
                          slide.isCorrect ? 'text-[#07A537]' : 'text-[#E93B55]'
                        )}
                      >
                        {slide.isCorrect ? <CorrectIcon size={24} /> : <FalseIcon size={24} />}
                      </i>
                      <span className="text-white font-semibold text-xs truncate">
                        {slide.isCorrect ? 'حـالت درست' : 'حـالت نـادرست'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <div className="flex flex-row gap-2">
          {groupedSlides.map((_, index) => (
            <div
              key={index}
              className={`w-6 h-1 rounded-full ${
                index === activeIndex ? 'bg-black' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
