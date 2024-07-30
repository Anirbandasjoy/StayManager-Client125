"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./Product.module.css";
import { Pagination } from "swiper/modules";

import { useEffect, useRef, useState } from "react";
import SwiperNavButton from "../home/roooms/SwipperNavButton";
import { products } from "@/product";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
const Rooms = () => {
  const SlideRef = useRef<Swiper | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const handlePrev = () => {
    SlideRef.current?.swiper.slidePrev();
  };

  const handleNext = () => {
    SlideRef.current?.swiper.slideNext();
  };

  useEffect(() => {
    const swiperInstance = SlideRef.current?.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }
  }, []);
  return (
    <div className="mb-20 container">
      <div className="mb-8 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer hover:underline">
          <h1 className="text-xl md:text-[20px] font-[500] text-gray-600">
            View All
          </h1>
          <IoIosArrowForward className="text-[20px]" />
        </div>
        <SwiperNavButton
          onPrev={handlePrev}
          onNext={handleNext}
          isPrevDisabled={isBeginning}
          isNextDisabled={isEnd}
        />
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
        ref={SlideRef}
      >
        {products?.map((product) => {
          return (
            <SwiperSlide
              key={product.id}
              className=" bg-red-300 p-4 rounded-sm"
            >
              <div className="">
                <div className="w-full md:min-h-[20rem] h-[3.7rem]">
                  <Image
                    className="w-full h-full"
                    src={product.thumbnail}
                    alt="thumbnail"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Rooms;
