"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isImage, uploadImage } from "@/helper/common";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { useCreateRoomsMutation, useFindAllRoomsQuery } from "@/redux/api/baseApi";

const CreateRoom = () => {
  const [imageURL, setImageURL] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [roomRate, setRoomRate] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [createRoom, { isSuccess }] = useCreateRoomsMutation()

  const handleSelectNoticeImage = () => {
    fileInputRef.current?.click();
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

  const { data } = useFindAllRoomsQuery()
  console.log(data?.payload);
  const roomsArray = data?.payload


  const handleRoomSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)

    if (!imageFile) {
      console.log("Insert Image");
      setLoading(false)
      return;
    }

    try {
      const imageUrl = await uploadImage(imageFile);
      console.log("Uploaded Image URL:", imageUrl);

      const data = {
        sitRent: roomRate,
        roomImage: imageUrl,
      }
      createRoom({ ...data })
      setImageURL("");
      setRoomRate('');
      setImageFile(null);
      setLoading(false);

    } catch (error) {
      console.error("Failed to upload image:", error);
      setLoading(false);
    }

  };

  return (
    <div className="border-2 border-blue-400 h-[calc(100vh-120px)] screen mt-2 p-2 overflow-y-scroll">
      <div>
        <div className="flex justify-between mb-4 lg:mb-0">
          <h1 className="font-semibold mb-1 text-blue-400 text-nowrap ">
            Create New Room
          </h1>
          <Input
            className="border-2 border-gray-300 sm:w-60 w-36"
            placeholder="Filter rooms.."
          />
        </div>
        <form className="flex gap-2 " onSubmit={handleRoomSave}>
          <div className="w-52 flex flex-col justify-between">
            <Input
              className="border-2 border-gray-300"
              placeholder="Write sit rent"
              value={roomRate}
              onChange={(e) => setRoomRate(e.target.value)}
            />
            <Button type="submit" className="w-6/12">
              {
                loading ? "Loading ..." : "Save"
              }
            </Button>
          </div>
          <div
            className="bg-gray-100 w-7/12 sm:w-2/12 border-2 rounded-md h-[107px] cursor-pointer border-gray-300 flex justify-center items-center"
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
              </div>
            ) : (
              <BiSolidCloudUpload className="text-4xl text-gray-300 " />
            )}
            <input
              type="file"
              id="noticeImage"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        </form>
      </div>
      <div className="mt-4">
        <Table>
          <TableCaption>List of recent rooms.</TableCaption>
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
            {
              roomsArray?.map((room, index) => (
                <>
                  <TableRow key={index}>
                    <TableCell>
                      <Image
                        src={room.roomImage}
                        alt="image"
                        width={100}
                        height={50}
                        className="rounded-none cursor-pointer"
                      />
                    </TableCell>

                    <TableCell>
                      {room.sitRent}
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Image
                          src="https://i.ibb.co/vL3p03J/Whats-App-Image-2024-03-15-at-9-20-37-PM-Photoroom.jpg"
                          alt="image"
                          width={35}
                          height={35}
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

                    <TableCell className="text-right cursor-pointer">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">Action</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="flex flex-col">
                          <button className="btn m-1">Edit</button>
                          <button className="btn m-1">Delete</button>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>

                </>
              ))
            }

          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CreateRoom;
