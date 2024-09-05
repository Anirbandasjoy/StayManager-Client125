import React from "react";

const ReviewLoading = () => {
  return (
    <div className="max-w-sm w-full  p-4">
      <div className="animate-pulse flex space-x-4">
        {/* Avatar Loader */}
        <div className="rounded-full bg-gray-300 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          {/* Name Loader */}
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          {/* Time & Review Text Loader */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
      {/* Star Rating Loader */}
      <div className="mt-4 flex space-x-2 ml-14">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="h-6  rounded-full bg-gray-300 animate-pulse w-6"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ReviewLoading;
