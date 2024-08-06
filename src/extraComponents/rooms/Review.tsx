import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import StarRatings from "react-star-ratings";

const Review = ({ review }: { review: any }) => {
  return (
    <div className="mt-7 overflow-auto">
      <div className="flex flex-col gap-6">
        <div className="flex gap-3">
          <div>
            <Avatar className="cursor-pointer">
              <AvatarFallback>
                {review?.reviewerName?.slice(0, 2) || "An"}
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h1 className="text-sm font-semibold">
              {review?.reviewerName || "Anirban das joy"}
            </h1>
            <p className="text-xs">
              10m ago
              {/* <TimeAgo date={review?.date} /> */}
            </p>
            <h2 className="mt-2 text-sm max-w-[28rem] text-justify">
              {review?.comment || "hello i text comment herer"}
            </h2>
            <div className="mt-2">
              <StarRatings
                rating={review?.rating | 4}
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
