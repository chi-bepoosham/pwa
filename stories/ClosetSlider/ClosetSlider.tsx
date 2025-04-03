'use client';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, RecycleIcon, StarIcon } from '@/stories/Icons';
import Image from 'next/image';
import clsx from 'clsx';
import { sacramento } from '@/lib/font';


export interface ClosetSliderProps {
  imageUrls: string[];
  matchPercent: number;
  isSubImage: boolean;
  subMatchPercent: number;
  subImageUrl: string;
  onDeleteImage: (index: number) => void;
  titleEn: string;
  titleFa: string;
}

export const ClosetSlider = (props: ClosetSliderProps) => {
  const {
    imageUrls,
    matchPercent,
    isSubImage,
    subMatchPercent,
    subImageUrl,
    onDeleteImage,
    titleEn,
    titleFa,
  } = props;


  const [selectedImageIndex, setSelectedImageIndex] = useState(0);


  const handleNextImage = () => {
    const ii = selectedImageIndex + 1;
    if (ii >= imageUrls.length || ii < 0) return;
    setSelectedImageIndex(ii);
  };


  const handlePrevImage = () => {
    const ii = selectedImageIndex - 1;
    if (ii >= imageUrls.length || ii < 0) return;
    setSelectedImageIndex(ii);
  };


  const handleDelete = () => {
    const isConfirmed = window.confirm('آیا مطمئنید می‌خواهید این تصویر را حذف کنید؟');
    if (isConfirmed) {
      onDeleteImage(selectedImageIndex);
    }
  };


  useEffect(() => {
    if (imageUrls.length === 0) return;
    if (selectedImageIndex >= imageUrls.length) {
      setSelectedImageIndex(imageUrls.length - 1);
    }
  }, [imageUrls]);


  return (
    <div className="flex flex-col gap-12 justify-center items-center select-none w-full h-full">
      <div className="flex flex-col justify-center items-center gap-2">
        <span className={`text-4xl text-secondary-300 ${sacramento.className}`}>
          {titleEn}
        </span>
        <span className="text-secondary text-xl">
          {titleFa}
        </span>

      </div>
      <div
        className={clsx('relative flex flex-col justify-start items-center border-2 border-secondary rounded-xl bg-white select-none',
          isSubImage ? 'flex justify-center items-center p-0' : 'p-2',
        )}>


        {isSubImage && (
          <div
            className="absolute top-4 left-4 bg-white/5 backdrop-blur rounded-xl text-secondary font-semibold flex justify-center items-center border-2 border-white p-1.5">
            {subMatchPercent}%
          </div>
        )}

        {!isSubImage && (
          <div className="flex flex-row justify-between w-full">
            <button
              onClick={handleDelete}
              className="bg-secondary-100 rounded-2xl p-1">
              <RecycleIcon size={28} />
            </button>
            <div className="flex flex-row items-start text-secondary">
              <StarIcon size={12} />
              <StarIcon size={24} />
            </div>
          </div>
        )}

        <div className="flex flex-col justify-center items-center">

          <Image
            src={isSubImage ? subImageUrl : imageUrls[selectedImageIndex]}
            alt="image"
            width={128}
            height={128}
            className="object-cover !w-full !h-full"
            loading="lazy"
          />

          {!isSubImage && (
            <div
              className="flex flex-row justify-between bg-primary rounded-t-xl rounded-b-2xl w-full p-1.5">
              <div className="flex flex-col truncate">
                <span className="text-white font-bold flex flex-row items-center gap-2 text-large">
                  {matchPercent}%
                  <h4 className="text-secondary font-semibold">درصد</h4>
                </span>
                <span className="text-white text-large">مناسب با فرم بدن شما!</span>
              </div>
              <i className="bg-secondary rounded-3xl text-white flex shrink-0 w-fit h-fit p-1 -rotate-45">
                <ArrowRightIcon size={24} />
              </i>
            </div>
          )}
        </div>
      </div>

      {!isSubImage && (
        <div className="flex flex-row justify-center items-center w-full gap-8">
          <i onClick={handlePrevImage}
             className="cursor-pointer border border-secondary-100 rounded-2xl p-1.5 hover:text-white hover:bg-secondary hover:transition duration-500">
            <ChevronRightIcon size={28} />
          </i>
          <span className="text-secondary text-large font-semibold">
                        لباسایی که باهاش ست میشه...
          </span>
          <i
            onClick={handleNextImage}
            className="cursor-pointer border border-secondary-100 rounded-2xl p-1.5 hover:text-white hover:bg-secondary hover:transition duration-500"
          >
            <ChevronLeftIcon size={28} />
          </i>
        </div>
      )}
    </div>
  );
};
