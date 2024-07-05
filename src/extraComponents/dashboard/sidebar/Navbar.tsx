"use client";

import { BellRing } from "lucide-react";
import { useState } from "react";

import DropDownMenu from "@/extraComponents/share/DropDownMenu";
const Navbar = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <div className="py-4 bg-blue-300 rounded-sm dark:bg-gray-800 ">
      <div>
        <nav className="w-full  lg:max-w-4xl mx-auto xl:max-w-6xl 2xl:max-w-7xl px-4 lg:px-0">
          <div className=" flex flex-wrap items-center justify-between mx-auto lg:px-8">
            <h1 className="font-sans text-xl font-bold">Stay Manager</h1>
            <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
              <div className="flex items-center justify-center gap-4 ">
                <BellRing className="mr-2 h-6 w-6 cursor-pointer" />
                <DropDownMenu
                  isOpenModal={isOpenModal}
                  setIsOpenModal={setIsOpenModal}
                />
              </div>
            </div>
            <div
              className={`items-center sm:ml-[78px] hidden sm:block ml-0 z-10 mt-4 sm:mt-0 justify-between duration-700 w-full md:flex md:w-auto `}
              id="navbar-sticky"
            ></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
