'use client';

import { SetType } from '@/types/MyClothesResponse.type';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';
import { MinorButton } from '../MinorButton';
import { SubImage } from '../SubImage';

interface ItemSetsSwiperProps {
  sets: SetType[];
}

export const ItemSetsSwiper: React.FC<ItemSetsSwiperProps> = ({ sets }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [autoplayDelay, setAutoplayDelay] = useState(4000);

  if (!sets || sets.length === 0) return null;
  const handleNext = () => {
    swiperRef.current?.slideNext();
    resetAutoplayDelay();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
    resetAutoplayDelay();
  };

  const resetAutoplayDelay = () => {
    setAutoplayDelay(8000);
  };
  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center">
      <div className="w-full flex flex-row justify-around items-center gap-6">
        <MinorButton
          variant="faded"
          color="secondary"
          buttonTitle={<ChevronRightIcon size={24} />}
          isIconOnly
          onClick={handlePrev}
        />
        <span className="text-secondary">لباسایی که باهاش ست میشه...</span>
        <MinorButton
          variant="faded"
          color="secondary"
          buttonTitle={<ChevronLeftIcon size={24} />}
          isIconOnly
          onClick={handleNext}
        />
      </div>

      <Swiper
        className="w-full"
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
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
      >
        {sets.map((set) => (
          <SwiperSlide key={set.id}>
            <div className="flex justify-center gap-4 overflow-x-auto">
              {set.clothes.map((clothe) => (
                <div key={clothe.id}>
                  <SubImage
                    subImageUrl={clothe.image}
                    percentNumber={clothe.match_percentage || 0}
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
