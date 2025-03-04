"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRightIcon, StarIcon, ChevronLeftIcon } from "@/stories/Icons";
import { sacramento } from "@/lib/font";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export interface SuggestionSliderProps {
    slides: { imageUrl: string; name: string }[];
}

export const SuggestionSlider = ({ slides }: SuggestionSliderProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!slides || slides.length === 0) {
        return <div>No slides available</div>;
    }

    return (
        <div className="w-full max-w-md mx-auto bg-primary-50 rounded-3xl flex flex-col items-center select-none">
            <div className="w-full flex flex-row-reverse justify-center items-center text-center bg-white rounded-t-2xl rounded-b-lg p-8 m-6">
                <span className="text-md text-secondary font-semibold select-none text-nowrap">
                    پیشنهاداتی جذاب‌تر برای رسیدن به استایلی جذاب‌تر...
                </span>
                <div className="flex flex-row items-start text-primary">
                    <StarIcon size={12} />
                    <StarIcon size={24} />
                </div>
            </div>

            <div className="w-full relative flex justify-between mt-8">
                <button className=" flex justify-center items-center rounded-l-xl bg-primary-100 text-secondary hover:bg-primary hover:text-white transition duration-500">
                    <ChevronRightIcon size={36} />
                </button>

                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    centeredSlides
                    spaceBetween={16}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="w-full max-w-[300px]"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`flex flex-col items-center justify-center rounded-xl p-4 transition-all duration-300 w-full h-full ${
                                    activeIndex === index
                                        ? "bg-primary text-white"
                                        : "bg-white text-black shadow-md opacity-40"
                                }`}
                            >
                                <Image
                                    width={128}
                                    height={128}
                                    src={slide.imageUrl}
                                    alt={slide.name}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className=" flex justify-center items-center rounded-r-xl bg-primary-100 text-secondary hover:bg-primary hover:text-white transition duration-500">
                    <ChevronLeftIcon size={36} />
                </button>
            </div>

            <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 text-4xl font-semibold text-secondary ${sacramento.className}`}
            >
                {slides[activeIndex].name}
            </motion.div>
        </div>
    );
};
