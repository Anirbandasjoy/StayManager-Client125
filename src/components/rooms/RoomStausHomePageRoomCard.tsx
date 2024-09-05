import { useExistBookingRequestQuery } from "@/redux/api/baseApi";

const RoomStausHomePageRoomCard = ({
  roomId,
  sitNumber,
  text,
}: {
  roomId: string;
  sitNumber: number;
  text: string;
}) => {
  const { data: roomBookingExistData } = useExistBookingRequestQuery({
    roomId,
  });
  return (
    <h1 className={`text-xs font-semibold ${text}`}>
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

export default RoomStausHomePageRoomCard;
