"use client";
import {
  useCreateReviewMutation,
  useExistBookingRequestQuery,
  useFindRoomReviewQuery,
  useFindSingleRoomQuery,
} from "@/redux/api/baseApi";
import Image from "next/image";
import { IoBedOutline, IoPersonAddOutline } from "react-icons/io5";
import Banner from "../home/Banner";
import Review from "./Review";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ReviewLoading from "../loading/ReviewLoading";
import RoomDetailsLoading from "../loading/RoomDetailsLoading";
import RequestModal from "./RequestModal";
import RoomStatus from "./RoomStatus";
import RequestStatus from "./RequestStatus";

const RoomDetailsCom = ({ roomId }: { roomId: string }) => {
  const [openRequestModal, setopenRequestModal] = useState<boolean>(false);
  const [sitNumber, setSitNumber] = useState<number>(0);
  const {
    data: singleRoom,
    isLoading: roomLoading,
    refetch: singRoomRefetch,
  } = useFindSingleRoomQuery({
    id: roomId,
  });
  const { data: roomBookingExistData, refetch: roomBookingExistRefetch } =
    useExistBookingRequestQuery({
      roomId,
    });
  const [rating, setRating] = useState<number | null | string>(null);
  const [message, setMessage] = useState<string>("");
  const [hover, setHover] = useState<null | any>(null);
  const [setReviewData, { data: reviewResponse, isLoading }] =
    useCreateReviewMutation();
  const {
    data: roomReviewData,
    refetch: reviewRefetch,
    isLoading: reviewLoading,
  } = useFindRoomReviewQuery({ roomId });

  const handleCreateReview = () => {
    try {
      setReviewData({ roomId, message, rating }).unwrap();
      toast({
        title: "Create a new Review.",
      });
      reviewRefetch();
      setMessage("");
      setRating(null);
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Invalid Creadential.",
        description: "There was a problem with your request.",
      });
    }
  };

  const handleBookingReqInfo = (st: number) => {
    setopenRequestModal(true);
    setSitNumber(st);
  };

  console.log(roomBookingExistData);
  return (
    <div className="mb-10">
      <Banner
        imageURL={singleRoom?.payload?.roomImage || ""}
        headingText="Explore this room."
        subheadingText="Pleas explore my hostel all rooms and purches your chouse room"
      />
      <div className="container">
        {roomLoading ? (
          <RoomDetailsLoading />
        ) : (
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
                    <div
                      className="flex gap-2 "
                      onClick={() => handleBookingReqInfo(1)}
                    >
                      <div className="flex-1 bg-blue-200 py-3 px-3 text-white rounded-sm flex items-center gap-2 cursor-pointer ">
                        <IoBedOutline className="text-xl font-bold text-gray-600" />
                        <h1 className="text-gray-600">Sit number one</h1>
                      </div>
                      <div className="bg-transparent border-2 border-blue-300 py-3 px-3 text-white rounded-sm flex items-center gap-2 cursor-pointer md:w-48">
                        <IoPersonAddOutline className="text-xl font-bold text-gray-600" />
                        <RequestStatus
                          roomBookingExistData={roomBookingExistData}
                          sitNumber={1}
                        />
                      </div>
                    </div>
                    <div
                      className="flex gap-2 "
                      onClick={() => handleBookingReqInfo(2)}
                    >
                      <div className="flex-1 bg-blue-200 py-3 px-3 text-white rounded-sm flex items-center gap-2 cursor-pointer ">
                        <IoBedOutline className="text-xl font-bold text-gray-600" />
                        <h1 className="text-gray-600">Sit number two</h1>
                      </div>
                      <div className="bg-transparent border-2 border-blue-100 py-3 px-3 md:w-48 text-white rounded-sm flex items-center gap-2 cursor-pointer ">
                        <IoPersonAddOutline className="text-xl font-bold text-gray-600" />
                        <RequestStatus
                          roomBookingExistData={roomBookingExistData}
                          sitNumber={2}
                        />
                      </div>
                    </div>
                    <div
                      className="flex gap-2 "
                      onClick={() => handleBookingReqInfo(3)}
                    >
                      <div className="flex-1 bg-blue-200 py-3 px-3 text-white rounded-sm flex items-center gap-2 cursor-pointer ">
                        <IoBedOutline className="text-xl font-bold text-gray-600" />
                        <h1 className="text-gray-600">Sit number three</h1>
                      </div>
                      <div className="bg-transparent border-2 border-blue-300 py-3 md:w-48 px-3 text-white rounded-sm flex items-center gap-2 cursor-pointer ">
                        <IoPersonAddOutline className="text-xl font-bold text-gray-600" />
                        <RequestStatus
                          roomBookingExistData={roomBookingExistData}
                          sitNumber={3}
                        />
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
                        <RoomStatus
                          roomBookingExistData={roomBookingExistData}
                          sitNumber={1}
                        />
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
                        <RoomStatus
                          roomBookingExistData={roomBookingExistData}
                          sitNumber={2}
                        />
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
                        <RoomStatus
                          roomBookingExistData={roomBookingExistData}
                          sitNumber={3}
                        />
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
        )}

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
          {reviewLoading ? (
            <div className="mt-5">
              {Array.from({ length: 3 }).map((_, index) => {
                return <ReviewLoading key={index} />;
              })}
            </div>
          ) : (
            <>
              {roomReviewData?.payload?.map((review: any) => {
                return <Review review={review} key={review?._id} />;
              })}
            </>
          )}
        </div>
      </div>
      <RequestModal
        sitNumber={sitNumber}
        roomId={roomId}
        singRoomRefetch={singRoomRefetch}
        roomBookingExistRefetch={roomBookingExistRefetch}
        open={openRequestModal}
        setOpen={setopenRequestModal}
      />
    </div>
  );
};

export default RoomDetailsCom;
