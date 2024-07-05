"use client"
import NoticeCard from "@/extraComponents/dashboard/notice/NoticeCard";
import Navbar from "@/extraComponents/dashboard/sidebar/Navbar";
import { useFindNoticeQuery } from "@/redux/api/baseApi";
import React from "react";

const DashboardHome = () => {
  const {data, isLoading} = useFindNoticeQuery();
  if(isLoading){
    return <h1>Loading...</h1>
  }
  const notice = data?.payload || [] 
  return (
    <div>
      <Navbar />
      <div className="md:h-[calc(100vh-100px)] h-[calc(100vh-150px)] flex flex-col gap-4 overflow-auto">
      {
        notice?.map((notice) => (
          <NoticeCard key={notice?._id} notice={notice} />
        ))
      }
      </div>
    </div>
  );
};

export default DashboardHome;
