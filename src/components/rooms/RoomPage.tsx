"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCurrentUserQuery, useFindAllRoomsQuery } from "@/redux/api/baseApi";
import Image from "next/image";
import Link from "next/link";
import { BiPurchaseTag } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import RoomCardLoading from "../loading/RoomCardLoading";
import AvarageRoomRating from "./AvarageRoomRating";
import LoginAlertModal from "../modal/LoginAlertModal";
import { useState } from "react";

const RoomPage = () => {
  const { data: roomData, isLoading } = useFindAllRoomsQuery();
  const [openLoginAlertModal, setLoginAlertModal] = useState<boolean>(false);
  const { data: user } = useCurrentUserQuery();
  if (isLoading) {
    return (
      <div className="mb-20 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <RoomCardLoading key={index} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
      {roomData?.payload?.map((product) => {
        return (
          <div
            key={product?._id}
            className="border border-gray-300 shadow rounded-md p-4"
          >
            <div>
              <div className="w-full md:h-[14rem] h-[15rem] rounded-sm overflow-hidden">
                <Image
                  className="w-full h-full hover:scale-125 duration-500 transition transform"
                  src={product?.roomImage}
                  alt="thumbnail"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="mt-2">
              <AvarageRoomRating roomId={product?._id} />
              <div className="mt-3 flex justify-between items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 cursor-pointer">
                        <IoBedOutline className="text-lg text-blue-600" />
                        <h1 className="text-xs font-semibold text-blue-600">
                          {product?.sitOne === null ? "Avilable" : "booked"}
                        </h1>
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
                        <h1 className="text-xs font-semibold text-red-300">
                          {product?.sitTwo === null ? "Avilable" : "booked"}
                        </h1>
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
                        <h1 className="text-xs font-semibold text-green-400">
                          {product?.sitThere === null ? "Avilable" : "booked"}
                        </h1>
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
                        className="text-xs dark:bg-zinc-950 dark:text-gray-200 dark:border dark:border-gray-700 rounded-sm px-3  text-gray-600 py-1 bg-yellow-300 hover:border hover:border-yellow-400 space-x-1"
                        variant="outline"
                      >
                        <BiPurchaseTag />
                        <span>Explore</span>
                      </Button>
                    </Link>
                  ) : (
                    <div onClick={() => setLoginAlertModal(true)}>
                      <Button
                        className="text-xs dark:bg-zinc-950 dark:text-gray-200 dark:border dark:border-gray-700 rounded-sm px-3  text-gray-600 py-1 bg-yellow-300 hover:border hover:border-yellow-400 space-x-1"
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
            <LoginAlertModal
              open={openLoginAlertModal}
              setOpen={setLoginAlertModal}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RoomPage;
