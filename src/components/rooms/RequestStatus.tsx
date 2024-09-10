const RequestStatus = ({
  roomBookingExistData,
  sitNumber,
}: {
  roomBookingExistData: any;
  sitNumber: number;
}) => {
  return (
    <h1 className="text-gray-600">
      {roomBookingExistData?.payload?.sitNumber === sitNumber
        ? roomBookingExistData?.payload?.status === "pending"
          ? "Cencel"
          : roomBookingExistData?.payload?.status === "cancel"
          ? "Rejected"
          : roomBookingExistData?.payload?.status === "success"
          ? "Booked"
          : "booking"
        : "booking"}
    </h1>
  );
};

export default RequestStatus;
