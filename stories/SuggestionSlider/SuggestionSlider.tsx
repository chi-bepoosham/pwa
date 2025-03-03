import React, { useState } from "react";
import { Slide } from "./Slide";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export interface SuggestionSliderProps {
    slides: { imageUrl: string; name: string }[];
}

export const SuggestionSlider = ({ slides }: SuggestionSliderProps) => {
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
        <div className="w-full max-w-md mx-auto bg-indigo-50 p-4 rounded-2xl shadow-lg flex flex-col items-center">
            <div className="w-full text-center bg-white p-2 rounded-lg border border-blue-400 shadow">
                <span className="text-sm text-gray-700">✨ پیشنهاداتی جذاب‌تر برای رسیدن به استایلی جذاب‌تر...</span>
            </div>

            <div className="flex items-center gap-2 mt-4">
                <button onClick={prevSlide} className="p-2 rounded-full bg-gray-300 hover:bg-gray-400">
                    <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
                </button>

                <div className="flex gap-2">
                    {slides.map((slide, index) => (
                        <Slide
                            key={index}
                            imageUrl={slide.imageUrl}
                            className={index === activeIndex ? "bg-blue-600 p-2" : "bg-white"}
                        />
                    ))}
                </div>

                <button onClick={nextSlide} className="p-2 rounded-full bg-gray-300 hover:bg-gray-400">
                    <ChevronRightIcon className="w-6 h-6 text-gray-700" />
                </button>
            </div>

            <div className="mt-4 text-lg font-semibold text-gray-700">{slides[activeIndex].name}</div>
        </div>
    );
};

