import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import StarRatings from "react-star-ratings";
import TimeAgo from "../dashboard/notice/TimeAgo";

const Review = ({ review }: { review: any }) => {
  return (
    <div className="mt-7 overflow-auto">
      <div className="flex flex-col gap-6">
        <div className="flex gap-3">
          <div>
            <Avatar className="cursor-pointer">
              <AvatarFallback>
                {review?.user?.name?.slice(0, 2) || "An"}
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className="text-sm font-semibold">{review?.user?.name}</h1>
            <p className="text-xs">
              <TimeAgo date={review?.createdAt} />
              {/* <TimeAgo date={review?.date} /> */}
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
    </div>
  );
};

export default Review;
