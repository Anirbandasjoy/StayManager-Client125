import Banner from "@/extraComponents/home/Banner";
import RoomDetailsCom from "@/extraComponents/rooms/RoomDetails";
import { useFindSingleRoomQuery } from "@/redux/api/baseApi";
import React from "react";

const RoomDetails = ({ params }: { params: { roomId: string } }) => {
  const { roomId } = params;

  return (
    <>
      <RoomDetailsCom roomId={roomId} />
    </>
  );
};

export default RoomDetails;
