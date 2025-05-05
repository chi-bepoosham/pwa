"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCreative, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import 'swiper/css/autoplay';
import { ClosetCard } from "../ClosetCard/ClosetCard";
import { Title } from "../Title";
import { MinorButton } from "../MinorButton";
import { ChevronLeftIcon, ChevronRightIcon } from "../Icons";

export interface ClosetSliderProps {
  items: Array<{
    variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
    imageUrl: string;
    matchPercentage: string;
  }>;
}

export const ClosetSlider = ({ items }: ClosetSliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="w-full max-w-80 flex flex-col gap-5 justify-center items-center">
      <div>
        <Title
          text="All clothes"
          description="کـــاپشـن ضـــدآب کتــان مـــدل زارا"
        />
      </div>
      <Swiper
        className="w-full"
        modules={[Navigation, EffectCreative, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-150%", 0, -500],
            rotate: [0, 0, -15],
          },
          next: {
            shadow: true,
            translate: ["150%", 0, -500],
            rotate: [0, 0, 15],
          },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className={`transition-all duration-300 ${isActive ? 'scale-100' : 'scale-90'}`}>
                <ClosetCard
                  variant={item.variant}
                  imageUrl={item.imageUrl}
                  matchPercentage={item.matchPercentage}
                  isSliderActive={isActive}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <div className="flex flex-row gap-2">
          {items.map((_, index) => (
            <div 
              key={index}
              className={`w-6 h-1 rounded-full ${index === activeIndex ? 'bg-black' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
      
        <div className="w-[calc(100%+100px)] flex flex-row justify-between items-center pt-6">
          <MinorButton
            variant="ghost"
            color="secondary"
            buttonTitle={<ChevronRightIcon size={24} />}
            isIconOnly
            onClick={handlePrev}
          />
          <span className="text-secondary truncate">
            لباسایی که باهاش ست میشه...
          </span>
          <MinorButton
            variant="ghost"
            color="secondary"
            buttonTitle={<ChevronLeftIcon size={24} />}
            isIconOnly
            onClick={handleNext}
          />
        </div>
     
      
    </div>
  );
};
