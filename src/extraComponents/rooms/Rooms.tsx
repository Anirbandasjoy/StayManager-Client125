"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import SwiperNavButton from "../home/roooms/SwipperNavButton";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { FaDollarSign } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { BiPurchaseTag } from "react-icons/bi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useCurrentUserQuery, useFindAllRoomsQuery } from "@/redux/api/baseApi";
import RoomCardLoading from "../loading/RoomCardLoading";
import RoomStausHomePageRoomCard from "./RoomStausHomePageRoomCard";
import LoginAlertModal from "../modal/LoginAlertModal";

const Rooms = () => {
  const { data: roomData, isLoading } = useFindAllRoomsQuery();
  const SlideRef = useRef<any | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [openLoginAlertModal, setLoginAlertModal] = useState<boolean>(false);
  const { data: user } = useCurrentUserQuery();

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

  if (isLoading) {
    return (
      <div className="mb-20 container mx-auto">
        <div className="mb-4 flex justify-between items-center">
          <div className="bg-gray-300 h-[1rem] rounded-sm w-[8rem] animate-pulse"></div>
          <div className="flex gap-2 items-center">
            <div className="w-9 h-9 bg-gray-300 animate-pulse"></div>
            <div className="w-9 h-9 bg-gray-300 animate-pulse"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <RoomCardLoading key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-20 container mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer hover:underline">
          <Link
            href="/rooms"
            className="text-xl md:text-[20px] font-[500] text-gray-600"
          >
            View All
          </Link>
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
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1040: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {roomData?.payload?.map((product) => {
          return (
            <SwiperSlide key={product?._id} className="rounded-sm">
              <div>
                <div className="w-full md:h-[16rem] h-[15rem] rounded-sm">
                  <Image
                    className="w-full h-full"
                    src={product?.roomImage}
                    alt="thumbnail"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="mt-2">
                <div className="flex items-end gap-1">
                  <GoStarFill className="text-[24px] text-yellow-400" />
                  <h1 className="font-semibold clear-start text-[16px] text-gray-600">
                    4.9
                  </h1>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2 cursor-pointer">
                          <IoBedOutline className="text-lg text-blue-600" />
                          <RoomStausHomePageRoomCard
                            roomId={product?._id}
                            sitNumber={1}
                            text="text-blue-600"
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-400 text-white z-50">
                        <p>Sit one status</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2 cursor-pointer">
                          <IoBedOutline className="text-lg text-red-300" />
                          <RoomStausHomePageRoomCard
                            roomId={product?._id}
                            sitNumber={2}
                            text="text-red-300"
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-400 text-white z-50">
                        <p>Sit two status</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2 cursor-pointer">
                          <IoBedOutline className="text-lg text-green-400" />
                          <RoomStausHomePageRoomCard
                            roomId={product?._id}
                            sitNumber={3}
                            text="text-green-400"
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-400 text-white z-50">
                        <p>Sit three status</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <FaDollarSign />
                      {product?.sitRent} <span>BDT</span>
                    </div>
                    {user ? (
                      <Link href={`/rooms/${product?._id}`}>
                        <Button
                          className="text-xs rounded-sm px-3 hover:text-gray-600 text-gray-200 py-1 bg-blue-500 hover:border hover:border-blue-500 space-x-1"
                          variant="outline"
                        >
                          <BiPurchaseTag />
                          <span>Explore</span>
                        </Button>
                      </Link>
                    ) : (
                      <div onClick={() => setLoginAlertModal(true)}>
                        <Button
                          className="text-xs rounded-sm px-3 hover:text-gray-600 text-gray-200 py-1 bg-blue-500 hover:border hover:border-blue-500 space-x-1"
                          variant="outline"
                        >
                          <BiPurchaseTag />
                          <span>Explore</span>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <LoginAlertModal
        open={openLoginAlertModal}
        setOpen={setLoginAlertModal}
      />
    </div>
  );
};

export default Rooms;
