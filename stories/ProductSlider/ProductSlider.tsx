"use client";

import React, {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Controller, Thumbs} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import {Image} from "@heroui/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@/stories/Icons";
import {Swiper as SwiperType} from "swiper";

export interface ProductSliderProps {
    images: string[];
}

export const ProductSlider: React.FC<ProductSliderProps> = ({images}) => {
    const swiperRef = useRef<SwiperType | null>(null);
    // const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <div className="w-full flex flex-row items-center justify-center">
            <div className="flex items-center">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="h-fit flex justify-center items-center border-3 border-secondary rounded-2xl bg-white text-secondary hover:bg-secondary hover:text-white transition duration-500"
                >
                    <ChevronRightIcon size={36}/>
                </button>

                <Swiper
                    modules={[Navigation, Pagination, Controller, Thumbs]}
                    pagination={false}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    // thumbs={{ swiper: thumbsSwiper }}
                    className="max-w-xs"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center items-center">
                                <Image
                                    src={image}
                                    alt={`product-${index}`}
                                    width={300}
                                    height={300}
                                    radius="lg"
                                    className="w-full h-full"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="h-fit flex justify-center items-center border-3 border-secondary rounded-2xl bg-white text-secondary hover:bg-secondary hover:text-white transition duration-500"
                >
                    <ChevronLeftIcon size={36}/>
                </button>
            </div>

            {/*<Swiper*/}
            {/*    modules={[Thumbs]}*/}
            {/*    onSwiper={setThumbsSwiper}*/}
            {/*    slidesPerView={3}*/}
            {/*    watchSlidesProgress*/}
            {/*    className="max-w-sm"*/}
            {/*>*/}
            {/*    {images.map((image, index) => (*/}
            {/*        <SwiperSlide key={index}>*/}
            {/*            <div className="cursor-pointer border border-transparent hover:border-secondary transition duration-300 rounded-lg">*/}
            {/*                <Image*/}
            {/*                    src={image}*/}
            {/*                    alt={`thumbnail-${index}`}*/}
            {/*                    width={80}*/}
            {/*                    height={80}*/}
            {/*                    radius="lg"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </SwiperSlide>*/}
            {/*    ))}*/}
            {/*</Swiper>*/}
        </div>
    );
};
