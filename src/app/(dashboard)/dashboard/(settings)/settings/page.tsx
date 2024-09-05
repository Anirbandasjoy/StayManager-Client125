import ToggleButton from "@/components/dashboard/settings/ToggleBtn";
import React from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { LiaLanguageSolid } from "react-icons/lia";
import { TbHelpOctagon } from "react-icons/tb";
import { GrConfigure } from "react-icons/gr";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdOutlineLock, MdOutlinePayment } from "react-icons/md";
const Settings = () => {
  return (
    <div>
      <h1 className="text-xl font-bold tracking-wide mb-14">Settings</h1>

      <div className="xl:w-9/12 w-full mx-auto bg-gray-400 h-[1px] mb-4"></div>
      <div className="flex justify-center flex-col lg:flex-row gap-12 lg:gap-96">
        <div className=" flex flex-col gap-5">
          <div className="flex gap-2 items-center cursor-pointer">
            <FaRegEdit className="text-lg text-gray-700" />
            <h1 className="tracking-wide font-semibold text-[16px] text-gray-700">
              Edit Profile
            </h1>
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex gap-2 items-center cursor-pointer">
              <BsFillCloudSunFill className="text-lg text-gray-700" />
              <h1 className="tracking-wide font-semibold text-[16px] text-gray-700">
                Change Theme
              </h1>
            </div>
            <div>
              <ToggleButton />
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="flex gap-2 items-center cursor-pointer">
              <LiaLanguageSolid className="text-lg text-gray-700" />
              <h1 className="tracking-wide font-semibold text-[16px] text-gray-700">
                Language
              </h1>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="bangla">Bangla</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <MdOutlineLock className="text-lg text-gray-700" />
            <h1 className="tracking-wide font-semibold text-[16px] text-gray-700">
              Security
            </h1>
          </div>
        </div>
      </div>

      {/* second part */}

      <div className="flex justify-center flex-col lg:flex-row gap-16 lg:gap-[29.9rem] mt-20">
        <div className=" flex flex-col gap-5">
          <div className="flex gap-2 items-center cursor-pointer">
            <TbHelpOctagon className="text-lg text-gray-700" />
            <h1 className="tracking-wide font-semibold text-[16px] text-gray-700">
              help
            </h1>
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex gap-2 items-center cursor-pointer">
              <GrConfigure className="text-lg text-gray-700" />
              <h1 className="tracking-wide font-semibold text-[16px] text-gray-700">
                Tearms and conditions
              </h1>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="flex gap-2 items-center cursor-pointer">
              <LiaLanguageSolid className="text-lg text-gray-700" />
              <h1 className="tracking-wide font-semibold text-[16px] text-gray-700">
                Language
              </h1>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="bangla">Bangla</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <MdOutlinePayment className="text-lg text-gray-700" />
            <h1 className="tracking-wide font-semibold text-[16px] text-gray-700">
              Payment
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
