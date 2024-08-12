"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isImage } from "@/helper/common";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { BiSolidCloudUpload } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

const Settings = () => {
  const [imageURL, setImageURL] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const handleSelectNoticeImage = () => {
    const noticeImage = document.getElementById(
      "noticeImage"
    ) as HTMLInputElement;
    noticeImage.click();
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && isImage(file)) {
      setImageFile(file);
      const imageURL = URL.createObjectURL(file);
      setImageURL(imageURL);
    }
    e.target.value = "";
  };
  const handleDeleteSelectedImage = () => {
    setImageURL("");
    setImageFile(null);
  };
  return (
    <div>
      <div className="w-full ">
        <div className="relative w-full h-[70px]">
          <Image
            src={
              "https://images.unsplash.com/photo-1709805619372-40de3f158e83?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            layout="fill"
            className="object-cover"
            alt={"banner"}
          />
          <div className="w-full h-full bg-gradient-to-b from-[#5eaaf5ab] to-[#ffffff] absolute top-0"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 py-4 border-2 border-gray-100 shadow-sm rounded-md">
        <div>
          <h1 className="text-xl md:text-2xl font-bold mb-2">Settings</h1>
          <div className="space-y-3 md:space-y-5 mb-8">
            <p className="text-gray-500">
              Manage your account settings and set e-mail preferences.
            </p>
            <div className="bg-gray-200 w-full h-[2px]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-2 ">
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 ">
            <ul className="space-y-4">
              <li className="text-gray-500 text-sm font-semibold bg-gray-100 rounded-sm py-2 px-3 cursor-pointer">
                Profile
              </li>
              <li className="text-gray-500 text-sm font-semibold  py-1 px-3 rounded-sm cursor-pointer">
                Account
              </li>
              <li className="text-gray-500 text-sm font-semibold py-1 px-3 rounded-sm cursor-pointer">
                Appearance
              </li>
              <li className="text-gray-500 text-sm font-semibold py-1 px-3 rounded-sm cursor-pointer">
                Notifications
              </li>
              <li className="text-gray-500 text-sm font-semibold py-1 px-3 rounded-sm cursor-pointer">
                Display
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="col-span-12 md:col-span-9 bg-white sm:p-0 p-4 md:px-8  ">
            <h2 className="text-lg md:text-xl font-semibold mb-1">Profile</h2>
            <p className="text-gray-500 mb-6 text-[15px]">
              This is how others will see you on the site.
            </p>

            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full "
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  type="text"
                  value="joy600508@gmail.com"
                  className="mt-1 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <Input
                  type="text"
                  placeholder="Your phone number"
                  className="mt-1 w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <Input
                  type="text"
                  placeholder="Your address"
                  className="mt-1 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Department
                </label>
                <Input
                  type="text"
                  placeholder="Your department"
                  className="mt-1 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <Input type="text" value="User" className="mt-1 w-full" />
              </div>
              <div className="mb-6">
                <label className="block text-sm mb-1 font-medium text-gray-700">
                  Profile picture
                </label>
                <div
                  className=" w-[170px] sm:w-[170px] bg-gray-100 border-2  rounded-md h-[107px] cursor-pointer border-gray-300 flex justify-center items-center"
                  onClick={handleSelectNoticeImage}
                >
                  {imageURL ? (
                    <div className="relative w-full h-full">
                      <div
                        className="absolute -top-2 z-30 bg-red-400 p-1 text-white rounded-full -right-2"
                        onClick={handleDeleteSelectedImage}
                      >
                        <GrClose className="text-xs" />
                      </div>
                      <Image
                        src={imageURL}
                        alt="Notice Image"
                        fill
                        style={{ objectFit: "cover" }}
                      />

                      {/* <div className="flex justify-center items-center h-full w-full">
                <Riple color="#32cd32" size="large" text="" textColor="" />
              </div> */}
                    </div>
                  ) : (
                    <BiSolidCloudUpload className="text-4xl text-gray-300 " />
                  )}
                  <input
                    type="file"
                    id="noticeImage"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </div>

                <Button variant="outline" className="mt-2 text-xs">
                  Add Photo
                </Button>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <Button className="text-xs mt-4">Update profile</Button>
                </div>
                <div>
                  <h1 className="block text-sm mb-1 font-medium text-gray-400">
                    Last login <span className="text-red-400">1h ago</span>
                  </h1>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
