"use client";
import NoticeCard from "@/extraComponents/dashboard/notice/NoticeCard";
import { useFindNoticeQuery } from "@/redux/api/baseApi";
import Image from "next/image";

const HomeNotice = () => {
  const { data, isLoading, refetch: noticeRefetch } = useFindNoticeQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const notice = data?.payload || [];
  return (
    <div>
      <div className="w-full ">
        <div className="relative w-full h-[70px] ">
          <Image
            src={
              "https://images.unsplash.com/photo-1709805619372-40de3f158e83?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            layout="fill"
            className="object-cover"
            alt={"banner"}
          />
          {/* <div className="w-full h-full  bg-gradient-to-b from-[#5eaaf590] absolute top-0"></div> */}
          <div className="w-full h-full bg-gradient-to-b  from-[#5eaaf5ab] to-[#ffffff] absolute top-0"></div>
        </div>
      </div>
      <div className=" flex flex-col gap-4 ">
        {notice?.map((notice) => (
          <NoticeCard
            key={notice?._id}
            notice={notice}
            noticeRefetch={noticeRefetch}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeNotice;
