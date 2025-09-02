'use client';

import { capitalizeWords } from '@/lib/capitalizeWords';
import { ArrowBoldLeftIcon, MagicStarsIcon } from '@/stories/Icons';
import SwiperCarouselLoading from '@/stories/SwiperCarousel/loading';
import { CelebrityType } from '@/types/CelebrityType.type';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CelebrityTitle } from '../CelebrityTitle';

interface SwiperCarouselProps {
  celebrities?: CelebrityType[];
  error?: Error;
  isLoading?: boolean;
}

export const SwiperCarousel: React.FC<SwiperCarouselProps> = ({
  celebrities = [],
  error,
  isLoading = false,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const initialTitle = capitalizeWords(celebrities[0]?.title || '');
  const [activeTitle, setActiveTitle] = useState(initialTitle);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayDelay, setAutoplayDelay] = useState(4000);

  const handleNext = () => {
    swiperRef.current?.slideNext();
    resetAutoplayDelay();
  };

  const resetAutoplayDelay = () => {
    setAutoplayDelay(8000);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    setActiveTitle(capitalizeWords(celebrities[swiper.realIndex]?.title || ''));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoplayDelay(4000);
    }, 8000);

    return () => clearTimeout(timer);
  }, [autoplayDelay]);

  if (isLoading) {
    return <SwiperCarouselLoading />;
  }

  if (error) {
    return (
      <div className="w-full max-w-screen-sm mx-auto text-center text-red-500">
        خطا در بارگذاری اطلاعات سلبریتی‌ها
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-screen-sm mx-auto">
      <div className="flex justify-center my-4">
        <div className="flex flex-row gap-2">
          {celebrities.map((_, index) => (
            <div
              key={index}
              className={`w-6 h-1 rounded-full ${
                index === activeIndex ? 'bg-white' : 'bg-white/20'
              }`}
            ></div>
          ))}
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
      >
        {celebrities.map((celeb) => (
          <SwiperSlide key={celeb.id} className="flex justify-center">
            <div className="relative w-full h-[60vh] rounded-3xl overflow-hidden">
              <Image
                src={`https://core.chibepoosham.app${celeb.image}`}
                alt="Celebrity Card"
                width={128}
                height={128}
                className="w-full h-full object-cover object-top rounded-3xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between items-center mt-4 text-white">
        <div className="flex items-center justify-center gap-2 w-full">
          <div className="h-32 bg-primary w-1 rounded-3xl"></div>
          <div className="flex flex-col gap-2 items-start w-full py-2">
            <div className="flex justify-between w-full items-center pr-6">
              <span className="text-xs">ســلبریـتی هـم‌استـــایل</span>
              <div className="flex justify-center gap-4">
                <Button
                  isIconOnly
                  className="w-4"
                  variant="flat"
                  color="default"
                  onPress={handleNext}
                >
                  <ArrowBoldLeftIcon size={24} />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MagicStarsIcon size={20} />
              <CelebrityTitle title={activeTitle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
