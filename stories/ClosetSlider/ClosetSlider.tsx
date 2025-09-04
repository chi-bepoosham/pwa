'use client';

import { MyClothesType } from '@/types/MyClothesResponse.type';
import React, { useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import { Autoplay, EffectCreative, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ClosetCard } from '../ClosetCard/ClosetCard';
import { Title } from '../Title';
// import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';
// import { MinorButton } from '../MinorButton';

export interface ClosetSliderProps {
  userName: string;
  category: string;
  items: MyClothesType[];
  initialId?: number | null;
  onDelete: (id: number) => void;
  onActiveChange?: (item: MyClothesType) => void;
}

export const ClosetSlider = ({
  items,
  userName,
  category,
  initialId,
  onDelete,
  onActiveChange,
}: ClosetSliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayDelay, setAutoplayDelay] = useState(20000);
  const [activeTitle, setActiveTitle] = useState(items.length > 0 ? items[0].title : '');

  // const handleNext = () => {
  //   swiperRef.current?.slideNext();
  //   resetAutoplayDelay();
  // };

  // const handlePrev = () => {
  //   swiperRef.current?.slidePrev();
  //   resetAutoplayDelay();
  // };

  const handleSlideChange = (swiper: SwiperType) => {
    const current = items[swiper.realIndex];
    setActiveIndex(swiper.realIndex);
    setActiveTitle(current.title);

    onActiveChange?.(current);
  };

  // const resetAutoplayDelay = () => {
  //   setAutoplayDelay(8000); // Reset to a longer delay after manual navigation
  // };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoplayDelay(20000); // Reset to original delay after the longer delay
    }, 8000);

    return () => clearTimeout(timer);
  }, [autoplayDelay]);

  useEffect(() => {
    if (initialId && items.length > 0 && swiperRef.current) {
      const index = items.findIndex((i) => i.id === initialId);
      if (index >= 0) {
        swiperRef.current.slideToLoop(index, 0);
        setActiveIndex(index);
        setActiveTitle(items[index].title);
        onActiveChange?.(items[index]);
      }
    }
  }, [initialId, items]);

  return (
    <div className="w-full max-w-screen-sm flex flex-col gap-5 justify-center items-center">
      <div>
        <Title text={category} description={activeTitle} />
      </div>
      <Swiper
        className="w-full"
        modules={[Navigation, EffectCreative, Autoplay]}
        spaceBetween={50}
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        effect="creative"
        creativeEffect={{
          prev: {
            translate: ['-150%', 0, -500],
            rotate: [0, 0, -5],
          },
          next: {
            translate: ['150%', 0, -500],
            rotate: [0, 0, -5],
          },
        }}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive, isPrev, isNext }) => (
              <div
                className={`transition-opacity duration-300 ${
                  isActive || isPrev || isNext ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <ClosetCard
                  userName={userName}
                  variant={isActive ? 'primary' : 'secondary'}
                  imageUrl={item.image}
                  matchPercentage={item.match_percentage}
                  isSliderActive={isActive}
                  onDelete={() => onDelete(item.id)}
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
              className={`w-6 h-1 rounded-full ${
                index === activeIndex ? 'bg-black' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* <div className="xs:w-[calc(100%+100px)] flex flex-row justify-between items-center pt-6 gap-1">
        <MinorButton
          variant="ghost"
          color="secondary"
          buttonTitle={<ChevronRightIcon size={24} />}
          isIconOnly
          onClick={handlePrev}
        />
        <span className="text-secondary truncate">لباسایی که باهاش ست میشه...</span>
        <MinorButton
          variant="ghost"
          color="secondary"
          buttonTitle={<ChevronLeftIcon size={24} />}
          isIconOnly
          onClick={handleNext}
        />
      </div> */}
    </div>
  );
};
