"use client";
import NoticeCard from "@/extraComponents/dashboard/notice/NoticeCard";
import Navbar from "@/extraComponents/dashboard/sidebar/Navbar";
import NoticeCardLoading from "@/extraComponents/loading/NoticeCardLoading";
import { useFindNoticeQuery } from "@/redux/api/baseApi";
import React from "react";

const Notice = () => {
  const { data, isLoading, refetch: noticeRefetch } = useFindNoticeQuery();

  const notice = data?.payload || [];
  return (
    <div>
      <Navbar />

      <div className="md:h-[calc(100vh-100px)] h-[calc(100vh-150px)] flex flex-col gap-4 overflow-auto">
        {isLoading ? (
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => {
              return <NoticeCardLoading key={index} />;
            })}
          </div>
        ) : (
          <>
            {notice?.map((notice: any) => (
              <NoticeCard
                key={notice?._id}
                notice={notice}
                noticeRefetch={noticeRefetch}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Notice;
