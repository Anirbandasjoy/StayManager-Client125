import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import StarRatings from "react-star-ratings";
import TimeAgo from "../dashboard/notice/TimeAgo";
import { RiChatDeleteLine } from "react-icons/ri";
import {
  useCurrentUserQuery,
  useDeleteReviewMutation,
  useFindRoomReviewQuery,
} from "@/redux/api/baseApi";
import { useState } from "react";
import DeleteModal from "../modal/DeleteAlertModal";
import { toast } from "../ui/use-toast";

const Review = ({ review, roomId }: { review: any; roomId: string }) => {
  const { data: user } = useCurrentUserQuery();
  const [reviewDeleteModal, setRevewDeleteModal] = useState<boolean>(false);
  const [setDeleteReview, { data: reviewDeleteResponse }] =
    useDeleteReviewMutation();
  const { refetch: roomReviewRefetch } = useFindRoomReviewQuery({ roomId });

  const handleShowReviewDeleteModal = () => {
    setRevewDeleteModal(true);
  };

  const handleDeleteReview = async () => {
    try {
      await setDeleteReview({ reviewId: review?._id });
      toast({
        title: "Delete Review",
      });
      roomReviewRefetch();
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Unauthorize Request.",
        description: "There was a problem with your request.",
      });
    }
  };
  console.log(reviewDeleteResponse);
  return (
    <div className="mt-7 overflow-auto">
      <div className="flex flex-col gap-6">
        <div className="flex gap-3">
          <div className="">
            <Avatar className="cursor-pointer">
              <AvatarFallback>
                {review?.user?.name?.slice(0, 2) || "An"}
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <div className="relative  inline-block">
              <h1 className="text-sm font-semibold">{review?.user?.name}</h1>
              {user?.payload?._id === review?.user?._id ||
                (user?.payload?.role === "admin" && (
                  <RiChatDeleteLine
                    onClick={handleShowReviewDeleteModal}
                    className="absolute -right-7 top-0 text-xl cursor-pointer z-50"
                  />
                ))}
            </div>
            <p className="text-xs">
              <TimeAgo date={review?.createdAt} />
            </p>
            <h2 className="mt-2 text-sm max-w-[28rem] text-justify">
              {review?.message || "hello i text review here"}
            </h2>
            <div className="mt-2">
              <StarRatings
                rating={review?.rating}
                starRatedColor="purple"
                numberOfStars={5}
                starDimension="24px"
                starSpacing="2px"
                name="rating"
              />
            </div>
          </div>
        </div>
      </div>
      <DeleteModal
        open={reviewDeleteModal}
        setOpen={setRevewDeleteModal}
        onConfrim={handleDeleteReview}
      />
    </div>
  );
};

export default Review;
