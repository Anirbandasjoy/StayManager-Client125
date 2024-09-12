/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useFindAllRoomsQuery } from "@/redux/api/baseApi";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FcEngineering,
  FcExpired,
  FcPackage,
  FcRegisteredTrademark,
} from "react-icons/fc";
import RoomPiChart from "./RoomPiChart";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const RoomChart = () => {
  const { data } = useFindAllRoomsQuery();
  const [availableSit, setAvailableSit] = useState<number>(0);
  const [bookingSit, setBookingSit] = useState<number>(0);
  const roomData = data?.payload || [];

  useEffect(() => {
    let availableCount = 0;
    let bookingCount = 0;

    roomData.forEach((room) => {
      if (room.sitOne === null) {
        availableCount++;
      } else {
        bookingCount++;
      }

      if (room.sitTwo === null) {
        availableCount++;
      } else {
        bookingCount++;
      }

      if (room.sitThere === null) {
        availableCount++;
      } else {
        bookingCount++;
      }
    });

    setAvailableSit(availableCount);
    setBookingSit(bookingCount);
  }, [roomData]);

  return (
    <div className="mt-4 h-[calc(100vh-110px)] overflow-auto">
      <h1 className="text-xl font-medium text-gray-600 mb-3">
        Rooms - Statistics
      </h1>
      <div className="flex items-center flex-col lg:gap-0 gap-6 lg:flex-row">
        <div className="flex-1 cursor-pointer">
          <RoomPiChart
            totalRooms={roomData?.length}
            totalSeat={roomData?.length * 3}
            aseat={availableSit}
            bseat={bookingSit}
          />
          <div className="flex justify-center items-center gap-4">
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 bg-[#0088FE]"></div>
              <h1 className="text-xs">total room</h1>
            </div>
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 bg-[#00C49F]"></div>
              <h1 className="text-xs">total sit</h1>
            </div>
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 bg-[#FFBB28]"></div>
              <h1 className="text-xs">aviable seat</h1>
            </div>
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 bg-[#FF8042]"></div>
              <h1 className="text-xs">booked seat</h1>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
            <motion.div
              className="shadow-lg p-4 rounded-lg cursor-pointer flex flex-col gap-7 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <FcRegisteredTrademark className="text-3xl" />
              <div>
                <p className="text-5xl text-gray-600">{roomData.length}</p>
                <h1 className="text-lg text-gray-600">Total rooms</h1>
              </div>
            </motion.div>

            <motion.div
              className="shadow-lg p-4 rounded-lg cursor-pointer flex flex-col gap-7 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <FcEngineering className="text-3xl" />
              <div>
                <p className="text-5xl text-gray-600">{roomData.length * 3}</p>
                <h1 className="text-lg text-gray-600">Total seats</h1>
              </div>
            </motion.div>

            <motion.div
              className="shadow-lg p-4 rounded-lg cursor-pointer flex flex-col gap-7 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <FcPackage className="text-3xl" />
              <div>
                <p className="text-5xl text-gray-600">{availableSit}</p>
                <h1 className="text-lg text-gray-600">Available seats</h1>
              </div>
            </motion.div>

            <motion.div
              className="shadow-lg p-4 rounded-lg cursor-pointer flex flex-col gap-7 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <FcExpired className="text-3xl" />
              <div>
                <p className="text-5xl text-gray-600">{bookingSit}</p>
                <h1 className="text-lg text-gray-600">Already Booked seats</h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <User /> */}
    </div>
  );
};

export default RoomChart;
