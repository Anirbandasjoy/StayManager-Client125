"use client";
import Template from "@/app/Template";
import NoticeCard from "@/components/dashboard/notice/NoticeCard";
import NavbarWrapper from "@/components/home/NavbarWrapper";
import NoticeCardLoading from "@/components/loading/NoticeCardLoading";
import { useFindNoticeQuery } from "@/redux/api/baseApi";
import isStudent from "@/utils/auth/isStudent";
import Image from "next/image";

const HomeNotice = () => {
  const { data, isLoading, refetch: noticeRefetch } = useFindNoticeQuery();

  const notice = data?.payload || [];
  return (
    <Template>
      <NavbarWrapper />
      <div className=" flex flex-col gap-4 ">
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
    </Template>
  );
};

export default isStudent(HomeNotice);
