import RoomChart from "@/components/dashboard/dashboard/RoomChart";
import Navbar from "@/components/dashboard/sidebar/Navbar";
import React from "react";

const DashboardHome = () => {
  return (
    <div>
      <Navbar />
      <RoomChart />
    </div>
  );
};

export default DashboardHome;
