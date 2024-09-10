"use client";
import NoticeCard from "@/components/dashboard/notice/NoticeCard";
import NoticeCardLoading from "@/components/loading/NoticeCardLoading";
import { useFindSaveNoticeQuery } from "@/redux/api/baseApi";
import isAuth from "@/utils/auth/isAuth.";
import Image from "next/image";
import React from "react";

const Save = () => {
  const {
    data: saveNotice,
    isLoading,
    error,
    refetch: noticeRefetch,
  } = useFindSaveNoticeQuery();

  const notice = saveNotice?.payload || [];

  return (
    <div>
      <div className="relative w-full h-[70px]">
        <Image
          src={
            "https://images.unsplash.com/photo-1709805619372-40de3f158e83?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          layout="fill"
          className="object-cover"
          alt={"banner"}
        />
        <div className="w-full h-full bg-gradient-to-b from-[#5eaaf5ab] to-[#ffffff] absolute top-0"></div>
      </div>

      <div className="flex flex-col gap-4 p-4 min-h-[calc(100vh-120px)]">
        {/* Show loading state */}
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <NoticeCardLoading key={index} />
            ))}
          </div>
        ) : (
          <>
            {/* If no notices are found, show "Not Found" */}
            {notice.length === 0 ? (
              <div className="flex justify-center items-center h-[calc(100vh-120px)]">
                <div className="text-center">
                  <h1 className="text-5xl font-bold text-gray-800 mb-4">
                    Not Found
                  </h1>
                  <p className="text-xl text-gray-600">
                    Sorry, there are no saved notices to display.
                  </p>
                </div>
              </div>
            ) : (
              // Otherwise, render the notices
              notice.map((noticeItem) => (
                <NoticeCard
                  key={noticeItem._id}
                  notice={noticeItem.notice}
                  noticeRefetch={noticeRefetch}
                />
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default isAuth(Save);
