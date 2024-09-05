import Template from "@/app/Template";
import Banner from "@/components/home/Banner";
import RoomDetailsCom from "@/components/rooms/RoomDetails";
import { useFindSingleRoomQuery } from "@/redux/api/baseApi";
import React from "react";

const RoomDetails = ({ params }: { params: { roomId: string } }) => {
  const { roomId } = params;

  return (
    <Template>
      <RoomDetailsCom roomId={roomId} />
    </Template>
  );
};

export default RoomDetails;
