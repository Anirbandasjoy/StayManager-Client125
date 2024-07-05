"use client";
import Link from "next/link";
import { useState } from "react";
import DropDownMenu from "../share/DropDownMenu";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-blue-300 p-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-gray-700 text-2xl font-bold hover:text-gray-200 transition duration-300 font-sans">
            Stay Manager
          </h1>
        </Link>
        <button
          className="text-gray-800 block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
        <div className="flex items-center gap-8">
          <div
            className={`md:flex md:items-center ${
              isOpen
                ? "block absolute bg-blue-400 w-full top-16 left-0 p-4"
                : "hidden"
            }`}
          >
            <Link href="/rooms">
              <h1 className="text-gray-800 block mt-4 md:inline-block md:mt-0 md:ml-4 hover:text-gray-200 transition duration-300 cursor-pointer font-bold">
                Rooms
              </h1>
            </Link>
            <Link href="/bookings">
              <h1 className="text-gray-800 block mt-4 md:inline-block md:mt-0 md:ml-4 hover:text-gray-200 transition duration-300 cursor-pointer font-bold">
                Bookings
              </h1>
            </Link>
            <Link href="/students">
              <h1 className="text-gray-800 block mt-4 md:inline-block md:mt-0 md:ml-4 hover:text-gray-200 transition duration-300 cursor-pointer font-bold">
                Students
              </h1>
            </Link>
          </div>
          <div className="cursor-pointer">
            <DropDownMenu
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
