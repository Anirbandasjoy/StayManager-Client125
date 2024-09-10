import { useFindRoomReviewQuery } from "@/redux/api/baseApi";
import React from "react";
import { GoStarFill } from "react-icons/go";

const AvarageRoomRating = ({ roomId }: { roomId: string }) => {
  const {
    data: roomReviewData,
    refetch: reviewRefetch,
    isLoading: reviewLoading,
  } = useFindRoomReviewQuery({ roomId });

  const calculateAverageRating = (reviews: Array<{ rating: number }>) => {
    if (!reviews || reviews.length === 0) return "00";
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1);
  };

  const reviews = roomReviewData?.payload || [];
  const averageRating = calculateAverageRating(reviews);

  return (
    <div className="flex items-end gap-1">
      <GoStarFill className="text-[24px] text-yellow-400" />
      <h1 className="font-semibold text-[16px] text-gray-600">
        {reviewLoading ? "Loading..." : averageRating}
      </h1>
    </div>
  );
};

export default AvarageRoomRating;
