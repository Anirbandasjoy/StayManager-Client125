import { existBookingResponse } from "@/helper/type";
import React from "react";

const RoomStatus = ({
  roomBookingExistData,
  sitNumber,
}: {
  roomBookingExistData: any;
  sitNumber: number;
}) => {
  return (
    <h1 className="text-xs font-semibold text-blue-600">
      {roomBookingExistData?.payload?.sitNumber === sitNumber
        ? roomBookingExistData?.payload?.status === "pending"
          ? "Pending"
          : roomBookingExistData?.payload?.status === "cancel"
          ? "Rejected"
          : roomBookingExistData?.payload?.status === "success"
          ? "Booked"
          : "booking"
        : "Avilable"}
    </h1>
  );
};

export default RoomStatus;
