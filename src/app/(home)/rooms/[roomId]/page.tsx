import { Button } from "@/components/ui/button";
import Banner from "@/extraComponents/home/Banner";
import Image from "next/image";
import React from "react";
import { IoBedOutline, IoPersonAddOutline } from "react-icons/io5";
import { PiEmptyThin } from "react-icons/pi";

const RoomDetails = ({ params }: { params: { roomId: string } }) => {
  const { roomId } = params;
  return (
    <div className="mb-10">
      <Banner
        imageURL="https://plus.unsplash.com/premium_photo-1684164600683-6ecb6c9c0eb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        headingText="Explore this room."
        subheadingText="Pleas explore my hostel all rooms and purches your chouse room"
      />
      <div className="container">
        <div className="flex gap-2 flex-col-reverse md:flex-row">
          <div className="flex-1 font-semibold text-gray-600">
            <div className="flex flex-col justify-between  md:h-[433px]">
              <div>
                <div className="flex  gap-2 items-center">
                  <h1 className="text-xl text-nowrap">
                    See details in this room{" "}
                  </h1>
                  <div className="w-full h-[2px] bg-gray-300"></div>
                </div>
                <div className="mt-2 space-y-2">
                  <div className="flex gap-2 ">
                    <div className="flex-1 bg-blue-200 py-3 px-3 text-white rounded-sm flex items-center gap-2 cursor-pointer ">
                      <IoBedOutline className="text-xl font-bold text-gray-600" />
                      <h1 className="text-gray-600">Sit number one</h1>
                    </div>
                    <div className="bg-transparent border-2 border-blue-300 py-3 px-3 text-white rounded-sm flex items-center gap-2 cursor-pointer md:w-48">
                      <IoPersonAddOutline className="text-xl font-bold text-gray-600" />
                      <h1 className="text-gray-600">Booking</h1>
                    </div>
                  </div>
                  <div className="flex gap-2 ">
                    <div className="flex-1 bg-blue-200 py-3 px-3 text-white rounded-sm flex items-center gap-2 cursor-pointer ">
                      <IoBedOutline className="text-xl font-bold text-gray-600" />
                      <h1 className="text-gray-600">Sit number two</h1>
                    </div>
                    <div className="bg-transparent border-2 border-blue-100 py-3 px-3 md:w-48 text-white rounded-sm flex items-center gap-2 cursor-pointer ">
                      <PiEmptyThin className="text-xl font-bold text-gray-600" />
                      <h1 className="text-gray-300">Booked</h1>
                    </div>
                  </div>
                  <div className="flex gap-2 ">
                    <div className="flex-1 bg-blue-200 py-3 px-3 text-white rounded-sm flex items-center gap-2 cursor-pointer ">
                      <IoBedOutline className="text-xl font-bold text-gray-600" />
                      <h1 className="text-gray-600">Sit number three</h1>
                    </div>
                    <div className="bg-transparent border-2 border-blue-300 py-3 md:w-48 px-3 text-white rounded-sm flex items-center gap-2 cursor-pointer ">
                      <IoPersonAddOutline className="text-xl font-bold text-gray-600" />
                      <h1 className="text-gray-600">Booking</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-2">
                <div className="h-24 cursor-pointer w-36 border-2 border-blue-200 flex justify-center items-center">
                  <div>
                    <h2 className="text-[16px] mb-1 text-center text-gray-600">
                      total
                    </h2>
                    <div className="flex  items-center gap-2 cursor-pointer">
                      <IoBedOutline className="text-xl text-gray-600" />
                      <h1 className="text-sm font-semibold text-gray-600">
                        3 bed
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="h-24 cursor-pointer w-36 border-2 border-red-200 flex justify-center items-center">
                  <div>
                    <h2 className="text-[16px] mb-1 text-center text-gray-600">
                      Empty
                    </h2>
                    <div className="flex  items-center gap-2 cursor-pointer">
                      <IoBedOutline className="text-xl text-gray-600" />
                      <h1 className="text-sm font-semibold text-gray-600">
                        2 bed
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="h-24 cursor-pointer w-36 border-2 border-green-200 flex justify-center items-center">
                  <div>
                    <h2 className="text-[16px] mb-1 text-center text-gray-600">
                      Booked
                    </h2>
                    <div className="flex  items-center gap-2 cursor-pointer">
                      <IoBedOutline className="text-xl text-gray-600" />
                      <h1 className="text-sm font-semibold text-gray-600">
                        1 bed
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="https://plus.unsplash.com/premium_photo-1684164600683-6ecb6c9c0eb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
              width={650}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
