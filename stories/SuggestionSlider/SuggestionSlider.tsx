import React, {useState} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import {ChevronIcon} from "@/stories/Icons";
import {sacramento} from "@/lib/font";


export interface SuggestionSliderProps {
    slides: { imageUrl: string; name: string }[];
}

export const SuggestionSlider = ({slides}: SuggestionSliderProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const prevSlide = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    };

    if (!slides || slides.length === 0) {
        return <div>No slides available</div>;
    }

    return (
        <div className="w-full max-w-md mx-auto bg-primary-50  p-4 rounded-2xl  flex flex-col items-center">
            <div className="w-full text-center bg-white p-2 rounded-lg border border-primary">
                <span className="text-md text-secondary font-semibold select-none">
                     پیشنهاداتی جذاب‌تر برای رسیدن به استایلی جذاب‌تر...
                </span>
            </div>

            <div className="flex mt-8">
                <button
                    onClick={prevSlide}
                    className="rounded-l-xl bg-primary-100 text-secondary hover:bg-primary hover:text-white hover:transition duration-500"
                >
                    <ChevronIcon size={36}/>
                </button>

                <div className="relative flex items-center w-60 justify-center overflow-hidden">
                    {slides.map((slide, index) => {
                        const position = index - activeIndex;
                        let scale = 0.8;
                        let opacity = 0.5;
                        let zIndex = -1;
                        let bgColor = "bg-white";

                        if (position === 0) {
                            scale = 1.1;
                            opacity = 1;
                            zIndex = 2;
                            bgColor = "bg-primary-900";
                        } else if (position === -1 || position === 1) {
                            scale = 0.9;
                            opacity = 0.7;
                            zIndex = 1;
                        }

                        return (
                            <motion.div
                                key={index}
                                animate={{
                                    x: position * 80,
                                    scale: scale,
                                    opacity: opacity,
                                    zIndex: zIndex,
                                }}
                                transition={{type: "spring", stiffness: 300, damping: 20}}
                                className={`absolute p-2 rounded-lg shadow-md ${bgColor}`}
                            >
                                <Image
                                    width={128}
                                    height={128}
                                    src={slide.imageUrl}
                                    alt={slide.name}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                <button
                    onClick={nextSlide}
                    className="rotate-180 rounded-l-xl bg-primary-100 text-secondary hover:bg-primary hover:text-white hover:transition duration-500"
                >
                    <ChevronIcon size={36}/>
                </button>
            </div>

            <motion.div
                key={activeIndex}
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.3}}
                className={`mt-4 text-4xl font-semibold text-secondary ${sacramento.className}`}
            >
                {slides[activeIndex].name}
            </motion.div>
        </div>
    );
};
