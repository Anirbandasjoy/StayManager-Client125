"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isImage } from "@/helper/common";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { BiSolidCloudUpload } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CreateRooom = () => {
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
    <div className=" border-2 border-blue-400 h-[calc(100vh-120px)] screen mt-2 p-2">
      <div className="">
        <div className="flex justify-between mb-4 lg:mb-0">
          <h1 className="font-semibold mb-1 text-blue-400 text-nowrap ">
            Create New Room
          </h1>
          <Input
            className="border-2 border-gray-300 sm:w-60 w-36"
            placeholder="Filter rooms.."
          />
        </div>
        <div className="flex gap-2 ">
          <div className="w-52 flex flex-col justify-between">
            <Input
              className="border-2 border-gray-300"
              placeholder="Write sir rent"
            />
            <Button className="w-6/12">Save</Button>
          </div>
          <div
            className="  bg-gray-100 w-7/12 sm:w-2/12 border-2 rounded-md h-[107px] cursor-pointer border-gray-300 flex justify-center items-center"
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
        </div>
      </div>
      <div className="mt-4">
        <Table>
          <TableCaption> List of recent rooms.</TableCaption>
          <TableHeader className="bg-blue-300">
            <TableRow>
              <TableHead>Picture</TableHead>
              <TableHead>Sit rent</TableHead>
              <TableHead>Sit One</TableHead>
              <TableHead>Sit Two</TableHead>
              <TableHead>Sit Three</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>not avlible</TableCell>
              <TableCell>500</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    src="https://i.ibb.co/vL3p03J/Whats-App-Image-2024-03-15-at-9-20-37-PM-Photoroom.jpg"
                    alt="image"
                    width={20}
                    height={20}
                    className="rounded-full cursor-pointer"
                  />
                  <div>
                    <h1 className="text-sm hover:underline cursor-pointer">
                      Anirban das joy
                    </h1>
                    <p className="text-xs hover:underline cursor-pointer">
                      joy600508@gmail.com
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>Empty</TableCell>
              <TableCell>Empty</TableCell>
              <TableCell className="text-right cursor-pointer">...</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CreateRooom;
