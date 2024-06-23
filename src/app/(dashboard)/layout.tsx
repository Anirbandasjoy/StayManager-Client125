"use client";
import Sidebar from "@/extraComponents/dashboard/sidebar/Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sideOpen, setSideOpen] = useState(false);
  return (
    <div>
      <div className="flex min-h-screen z-50">
        <div
          className={`sm:w-4/12  lg:w-3/12 xl:w-2/12 w-6/12 duration-500 absolute sm:static ${
            sideOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0 "
          } `}
        >
          <Sidebar />
        </div>
        <div className="w-full px-4 ">
          <div className="flex justify-between items-center mt-5 sm:hidden">
            <h1 className="text-lg font-semibold dark:text-gray-300">
              StayManager
            </h1>
            <div
              className="cursor-pointer"
              onClick={() => setSideOpen(!sideOpen)}
            >
              {sideOpen ? (
                <IoMdClose className="text-xl dark:text-gray-300" />
              ) : (
                <RxHamburgerMenu className="text-xl dark:text-gray-300" />
              )}
            </div>
          </div>
          <div className="mt-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
