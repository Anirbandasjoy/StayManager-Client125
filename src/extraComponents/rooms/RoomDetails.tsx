"use client";
import {
  useCreateReviewMutation,
  useFindSingleRoomQuery,
} from "@/redux/api/baseApi";
import Image from "next/image";
import { IoBedOutline, IoPersonAddOutline } from "react-icons/io5";
import { PiEmptyThin } from "react-icons/pi";
import Banner from "../home/Banner";
import Review from "./Review";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const RoomDetailsCom = ({ roomId }: { roomId: string }) => {
  const { data: singleRoom } = useFindSingleRoomQuery({ id: roomId });
  const [rating, setRating] = useState<number | null | string>(null);
  const [message, setMessage] = useState<string>("");
  const [hover, setHover] = useState<null | any>(null);
  const [setReviewData, { data: reviewResponse, isLoading }] =
    useCreateReviewMutation();

  const handleCreateReview = () => {
    console.log({ roomId, message, rating });
    try {
      setReviewData({ roomId, message, rating }).unwrap();
      toast({
        title: "Create a new Review.",
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Invalid Creadential.",
        description: "There was a problem with your request.",
      });
    }
  };
  console.log(reviewResponse);
  return (
    <div className="mb-10">
      <Banner
        imageURL={singleRoom?.payload?.roomImage || ""}
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
                      Sit One
                    </h2>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <IoBedOutline className="text-lg text-blue-600" />
                      <h1 className="text-xs font-semibold text-blue-600">
                        {singleRoom?.payload?.sitOne === null
                          ? "Avilable"
                          : "booked"}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="h-24 cursor-pointer w-36 border-2 border-red-200 flex justify-center items-center">
                  <div>
                    <h2 className="text-[16px] mb-1 text-center text-gray-600">
                      Sit Two
                    </h2>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <IoBedOutline className="text-lg text-red-400" />
                      <h1 className="text-xs font-semibold text-red-400">
                        {singleRoom?.payload?.sitOne === null
                          ? "Avilable"
                          : "booked"}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="h-24 cursor-pointer w-36 border-2 border-green-200 flex justify-center items-center">
                  <div>
                    <h2 className="text-[16px] mb-1 text-center text-gray-600">
                      Sit Three
                    </h2>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <IoBedOutline className="text-lg text-green-400" />
                      <h1 className="text-xs font-semibold text-green-400">
                        {singleRoom?.payload?.sitOne === null
                          ? "Avilable"
                          : "booked"}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={singleRoom?.payload?.roomImage || ""}
              alt="image"
              width={650}
              height={500}
            />
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center gap-1">
            <h1 className="text-blue-400  text-nowrap">
              Please provide feedback
            </h1>
            <div className="w-full bg-gray-200 h-[2px] "></div>
          </div>
          <div className="flex items-center gap-1 mt-3">
            {Array.from({ length: 5 }).map((start, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <input
                    style={{ display: "none" }}
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className="cursor-pointer"
                    size={50}
                    color={
                      currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          <div className="mt-5 w-full sm:w-4/12 ">
            <Textarea
              className="border-2 border-blue-400 "
              placeholder="Send you feedback..."
              value={message}
              onChange={(e: any) => setMessage(e.target.value)}
            />
            {message === "" || rating === null ? (
              <Button className="bg-blue-400 text-white w-[5rem] mt-2 cursor-pointer hover:bg-blue-400">
                Submit
              </Button>
            ) : (
              <Button
                onClick={handleCreateReview}
                className="bg-blue-600 text-white mt-2 w-[5rem] cursor-pointer hover:bg-blue-500"
              >
                {isLoading ? (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                ) : (
                  "Submit"
                )}
              </Button>
            )}
          </div>
          <h1 className="mt-10">All Reviews</h1>

          <Review review={"hello"} />
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsCom;
