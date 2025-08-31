'use client';

import { capitalizeWords } from '@/lib/capitalizeWords';
import { ArrowBoldLeftIcon, MagicStarsIcon } from '@/stories/Icons';
import SwiperCarouselLoading from '@/stories/SwiperCarousel/loading';
import { CelebrityType } from '@/types/BodyType.type';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
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
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) =>
          setActiveTitle(capitalizeWords(celebrities[swiper.realIndex]?.title || ''))
        }
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} inline-block w-10 h-2 rounded-full bg-gray-400"></span>`;
          },
        }}
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
                  onPress={() => swiperRef.current?.slideNext()}
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
