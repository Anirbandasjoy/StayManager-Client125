"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  useCreateRoomsMutation,
  useFindAllRoomsQuery,
} from "@/redux/api/baseApi";
import { toast } from "@/components/ui/use-toast";
import BookingRequestActionModal from "../bookings/BookingRequestActionModal";

import Link from "next/link";
import { FcHighPriority, FcOk } from "react-icons/fc";
import { BsThreeDots } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { RiEditBoxLine } from "react-icons/ri";
import DeleteModal from "@/components/modal/DeleteAlertModal";

const CreateRoom = () => {
  const [imageURL, setImageURL] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [roomRate, setRoomRate] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [openDeleteModal, setDeleteModal] = useState<boolean>(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  const [createRoom, { isSuccess }] = useCreateRoomsMutation();

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

  const { data } = useFindAllRoomsQuery();
  console.log(data?.payload);
  const roomsArray = data?.payload;

  const handleRoomSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!imageFile) {
      console.log("Insert Image");
      toast({
        title: "Insert an Image",
      });
      setLoading(false);
      return;
    }

    try {
      const imageUrl = await uploadImage(imageFile);
      console.log("Uploaded Image URL:", imageUrl);

      const data = {
        sitRent: roomRate,
        roomImage: imageUrl,
      };
      createRoom({ ...data });
      setImageURL("");
      setRoomRate("");
      setImageFile(null);
      setLoading(false);

      toast({
        title: "New Room Added",
      });
    } catch (error) {
      console.error("Failed to upload image:", error);
      toast({
        title: "An Error Detected",
      });
      setLoading(false);
    }
  };

  const handleDeleteSitBookingUser = (roomId: string, sitNumber: number) => {
    console.log({ roomId, sitNumber });
  };

  const TableCellContent = (seat: any) => {
    const user = seat?.seat; // Adjusted this line
    return user && Object.keys(user).length > 0 ? (
      <TableCell>
        <Link
          href={`/profile/${user?._id}`}
          className="flex items-center gap-2"
        >
          {user?.profileImage ? (
            <Image
              src={user?.profileImage}
              alt="Profile Image"
              width={35}
              height={35}
              className="rounded-full cursor-pointer"
            />
          ) : (
            <div className="w-[35px] h-[35px] flex justify-center items-center font-medium rounded-full bg-gray-200 text-gray-700 ">
              {user?.name?.slice(0, 2)}
            </div>
          )}
          <div>
            <h1 className="text-sm hover:underline cursor-pointer">
              {user?.name}
            </h1>
            <p className="text-xs hover:underline cursor-pointer">
              {user?.email}
            </p>
          </div>
        </Link>
      </TableCell>
    ) : (
      <TableCell>Empty</TableCell>
    );
  };

  const handleDeleteRoom = async (roomId: string) => {
    setSelectedRoomId(roomId);
    setDeleteModal(true);
  };

  const deleteConfrim = async () => {
    console.log({ selectedRoomId });
  };

  return (
    <div className="border-2 border-blue-400 h-[calc(100vh-120px)] screen mt-2 overflow-y-scroll">
      <div className="sticky top-0 bg-white z-10 p-4">
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
              {loading ? "Loading ..." : "Save"}
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
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteSelectedImage();
                  }}
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
        <Table className="sticky">
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
            {roomsArray?.map((room, index) => (
              <TableRow key={index}>
                <TableCell>
                  {room?.roomImage && (
                    <Image
                      src={room?.roomImage}
                      alt="Room Image"
                      width={100}
                      height={50}
                      className="rounded-none cursor-pointer"
                    />
                  )}
                </TableCell>
                <TableCell>{room?.sitRent}</TableCell>
                <TableCellContent seat={room?.sitOne} />
                <TableCellContent seat={room?.sitTwo} />
                <TableCellContent seat={room?.sitThere} />
                <TableCell className="text-right cursor-pointer">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <BsThreeDots className="ml-auto text-2xl cursor-pointer text-gray-600" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="cursor-pointer flex items-center gap-1"
                        onClick={() => handleDeleteRoom(room?._id)}
                      >
                        <AiOutlineDelete className="text-xl" />
                        <h1 className="font-medium">Delete room</h1>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer flex items-center gap-1">
                        <RiEditBoxLine className="text-xl" />
                        <h1 className="font-medium">Edit room</h1>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDeleteSitBookingUser(room?._id, 1)}
                        className="cursor-pointer flex items-center gap-1"
                      >
                        <AiOutlineDelete className="text-xl" />
                        <h1 className="font-medium">Delte sitOne user</h1>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDeleteSitBookingUser(room?._id, 2)}
                        className="cursor-pointer flex items-center gap-1"
                      >
                        <AiOutlineDelete className="text-xl" />
                        <h1 className="font-medium">Delte sitTwo user</h1>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDeleteSitBookingUser(room?._id, 3)}
                        className="cursor-pointer flex items-center gap-1"
                      >
                        <AiOutlineDelete className="text-xl" />
                        <h1 className="font-medium">Delte sitThree user</h1>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <DeleteModal
          open={openDeleteModal}
          setOpen={setDeleteModal}
          onConfrim={deleteConfrim}
        />
      </div>
    </div>
  );
};

export default CreateRoom;
