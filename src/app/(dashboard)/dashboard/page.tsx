import NoticeCard from "@/extraComponents/dashboard/notice/NoticeCard";
import Navbar from "@/extraComponents/dashboard/sidebar/Navbar";
import React from "react";

const DashboardHome = () => {
  return (
    <div>
      <Navbar />

      <NoticeCard notice="hello" />
    </div>
  );
};

export default DashboardHome;
