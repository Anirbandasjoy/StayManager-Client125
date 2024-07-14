"use client";
import {
  BiComment,
  BiEdit,
  BiLike,
  BiShare,
  BiSolidComment,
  BiSolidLike,
} from "react-icons/bi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuBookmarkPlus } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import { DateTimeFormatOptions } from "@/helper/type";
import Image from "next/image";
import ShareNotice from "./ShareNotice";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { uploadImage } from "@/helper/common";
import React, { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Picker from "emoji-picker-react";

import { BsEmojiFrown } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import { RiAttachment2 } from "react-icons/ri";
import {
  useCreateCommentMutation,
  useCreateReactMutation,
  useGetNoticeCommentQuery,
  useGetReactQuery,
} from "@/redux/api/baseApi";
import { toast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TimeAgo from "./TimeAgo";
import ImageModal from "./ImageModal";
const NoticeCard = ({ notice }: { notice?: any }) => {

  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [commetImageUploadLoading, setCommentImageUpLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [noticeId, setNoticeId] = useState<string | null>(null);
  const [showImageModal, setShowImageModal] = useState<boolean>(false)

  const [setCommentData, { data: commentPostResponse }] =
    useCreateCommentMutation();
  const {
    data: comments,
    isLoading: commentLoading,
    refetch: commentRefetch,
  } = useGetNoticeCommentQuery({ noticeId });



  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "";

    const options: DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const onEmojiClick = (emojiObject: { emoji: string }): void => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
  const handleFileSelect = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && isImage(file)) {
      setCommentImageUpLoading(true);
      const commentImageURL = await uploadImage(file);
      console.log(commentImageURL);
      setSelectedImage(commentImageURL);
      setCommentImageUpLoading(false);
    }
    event.target.value = "";
  };
  const isImage = (file: File): boolean => {
    return file.type.startsWith("image/");
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
  };



  const handleGetNoticeId = (id: string) => {
    setNoticeId(id);
  };

  useEffect(() => {
    handleGetNoticeId(notice?._id)
  }, [notice?._id])

  const handleCreateComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const commentData = {
        noticeId,
        inputStr,
        selectedImage,
      };
      await setCommentData(commentData).unwrap();
      toast({
        title: "Create a New Comment",
      });
      setInputStr("");
      setSelectedImage("");
      commentRefetch();
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Fail Process, please try again.",
        description: "There was a problem with your request.",
      });
    }
  };
  const allComments = comments?.payload || [];


  const [createReact] = useCreateReactMutation()
  const LikeOnclick = async (noticeId: string) => {
    await createReact({ noticeId }).unwrap();
    console.log(data)
  }

  const { data } = useGetReactQuery(notice?._id)
  const likedArray = data?.payload


  return (
    <div className="">
      <div className="bg-white lg:max-w-4xl mx-auto rounded-md pb-4 dark:border dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 space-y-3">
          <div className="flex justify-between">
            <Link
              href={`/profile/${notice?.profileId?.email}`}
              className="flex gap-3 "
            >
              <div className="relative">
                {notice?.profileId?.profileImage ? (
                  <div className="w-11 h-11">
                    <Image
                      className="w-full h-full rounded-full object-cover cursor-pointer"
                      src={notice?.profileId?.profileImage}
                      alt="profile"
                      width={44}
                      height={44}
                    />
                  </div>
                ) : (
                  <div className="font-bold capitalize bg-blue-600 h-10 w-10 rounded-full text-sm flex justify-center items-center text-white">
                    Ad
                  </div>
                )}
                {notice?.profileId?.isVerified === "verified" && (
                  <FcApproval className="text-[17px] absolute -bottom-1 right-[1px]" />
                )}
              </div>
              <div className="relative">
                <h1 className="font-semibold text-gray-600 dark:text-gray-300">
                  {notice?.profileId?.fullName}
                </h1>
                <h2 className="text-xs text-gray-600 dark:text-gray-300">
                  {formatDate(notice?.profileId?.createdAt)}
                </h2>
                {notice?.status === "approved" && (
                  <div className="flex gap-1 absolute -right-24 -top-1">
                    <AiOutlineCheckCircle className="text-red-500 text-[14px]" />
                    <h1 className="text-xs text-red-500">Verified News</h1>
                  </div>
                )}
              </div>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="mr-2">
                  <BsThreeDots className="sm:text-3xl text-xl cursor-pointer text-gray-600 dark:text-gray-300" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <div className="flex gap-1 items-center cursor-pointer">
                    <LuBookmarkPlus />
                    Save
                  </div>
                </DropdownMenuItem>
                <>
                  <DropdownMenuItem>
                    <Link
                      href={`/edit-post/${notice?._id}`}
                      className="flex gap-1 items-center cursor-pointer"
                    >
                      <BiEdit />
                      Edit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex gap-1 items-center cursor-pointer">
                      <RiDeleteBin6Line />
                      Delete
                    </div>
                  </DropdownMenuItem>
                </>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {notice?.caption}
            </h1>
          </div>
        </div>
        <div className="w-full space-y-3 ">
          {/* <img
            className="w-full h-full bg-cover"
            src="https://images.unsplash.com/photo-1718973818150-9c0c855d33b0?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Notice"
          /> */}
        </div>
        <div className="mt-8 mb-2">
          <div className="flex justify-between px-8">
            <div className="flex gap-1 items-center">
              <BiSolidLike className="text-green-400" />

              <Dialog>

                {/*_________ Liked Length Here ____________ */}

                <DialogTrigger>
                  <p className="text-xs text-gray-600">
                    {
                      likedArray?.length
                    }
                    <span className="cursor-pointer hover:underline ml-[2px]">
                      others
                    </span>
                  </p>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <h1 className="text-green-500 font-bold">ALL</h1>
                    </DialogTitle>
                    <div className="w-full h-[1px] bg-gray-500"></div>
                    <DialogDescription className="h-96 overflow-auto">
                      hello
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex gap-1 items-center">
              <BiComment className="text-green-400" />
              <Dialog>
                <DialogTrigger >
                  <p className="text-xs text-gray-600">
                    {allComments?.length}
                    <span className="cursor-pointer hover:underline ml-[2px]">
                      others
                    </span>
                  </p>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <h1 className="text-blue-500 font-bold font-serif">
                        All Commenter
                      </h1>
                    </DialogTitle>
                    <div className="w-full h-[1px] bg-gray-500"></div>
                    <DialogDescription className="h-96 overflow-auto">
                      <div className="mt-3">
                        <div className="flex flex-col gap-6">
                          {allComments?.length === 0 ? <div><h1>No Comments in this post</h1></div> : allComments &&
                            allComments?.map((comment) => (
                              <div className="flex gap-3" key={comment?._id}>
                                <div className="cursor-pointer relative">
                                  {comment?.user?.profileImage === null ? (
                                    <AvatarFallback>
                                      {comment?.user?.name?.slice(0, 2)}
                                    </AvatarFallback>
                                  ) : (
                                    <Avatar>
                                      <AvatarImage
                                        src={comment?.user?.profileImage}
                                        alt={comment?.user?.name}
                                      />
                                    </Avatar>
                                  )}
                                  <BiSolidComment className="absolute text-lg bg-slate-300 rounded-full p-[2px] right-[1px] -bottom-[3px] text-blue-500" />
                                </div>
                                <div>
                                  <h1 className="text-sm font-semibold hover:underline cursor-pointer">
                                    {comment?.user?.name}
                                  </h1>
                                  <p className="text-xs">
                                    <TimeAgo date={comment?.createdAt} />
                                  </p>

                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex gap-1 items-center cursor-pointer">
              <BiShare className="text-green-400" />
              <p className="text-xs text-gray-600">12</p>
            </div>
          </div>
        </div>
        <div className="sm:px-4 w-11/12 mx-auto h-[1px] bg-gray-200 dark:bg-gray-700"></div>
        <div className="sm:px-4 mt-2 flex gap-6 sm:gap-0 items-center justify-between ">

          {/* _________________ Like Button _________________  */}
          <button onClick={() => LikeOnclick(notice?._id)} className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 py-1 justify-start rounded-sm duration-200 px-4">
            <BiLike className="text-[21px] text-gray-500 dark:text-gray-300" />
            <p className="text-[17px] font-bold text-gray-500 dark:text-gray-300">
              Like
            </p>
          </button>
          <div className="relative">
            <AlertDialog>
              <AlertDialogTrigger>
                {" "}
                <div
                  className="flex items-center gap-1 cursor-pointer w-full hover:bg-gray-100 dark:hover:bg-gray-700 py-1 justify-center rounded-sm duration-200 px-4"

                >
                  <BiComment className="text-[21px] w-full text-gray-500 dark:text-gray-300" />
                  <p className="text-[17px] font-bold text-gray-500 dark:text-gray-300">
                    Comment
                  </p>
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <h1 className="text-lg text-center">
                  This Post Comment Here...
                </h1>
                <div className="w-full h-[1px] bg-gray-400"></div>
                <div className="h-[27rem] overflow-auto">
                  <div>
                    <form className="w-full" onSubmit={handleCreateComment}>
                      <div className="relative ">
                        <textarea
                          value={inputStr}
                          onChange={(e) => setInputStr(e.target.value)}
                          className="sm:py-5 py-4 mt-3 resize-none bg-[#ecf0f1] px-3 sm:px-5  border-gray-300 border  dark:text-white dark:bg-gray-800 dark:border-gray-600  outline-none sm:text-sm text-xs rounded-md  w-full sm:h-40 h-40"
                          placeholder="Write your comment"
                        ></textarea>
                        <div className="relative">
                          <div className="absolute z-50 sm:bottom-16 bottom-14 sm:left-6 left-4">
                            {selectedImage && (
                              <Image
                                src={selectedImage}
                                alt="Selected Image"
                                className="w-12 h-12 rounded-md cursor-pointer"
                                width={48}
                                height={48}
                              />
                            )}
                            <div className="absolute top-0 right-0">
                              {selectedImage && (
                                <span
                                  className="text-sm cursor-pointer"
                                  onClick={handleDeleteImage}
                                >
                                  <IoMdClose className="text-lg bg-white text-gray-600 rounded-sm p-[1px]" />
                                </span>
                              )}
                              {commetImageUploadLoading && (
                                <div className="absolute bottom-2 left-1">
                                  <AiOutlineLoading3Quarters className="animate-spin text-xl" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="absolute bottom-5 sm:bottom-7 sm:w-full w-11/12 right-4 sm:right-5 dark:text-gray-300 text-gray-500">
                          <div className="w-full  flex justify-between ">
                            <div className="flex items-center gap-3 sm:ml-10">
                              <div
                                className="flex items-center space-x-1 cursor-pointer"
                                onClick={() => {
                                  setShowPicker((val) => !val);
                                  console.log("Picker Toggled");
                                }}
                              >
                                <BsEmojiFrown className="sm:text-xl text-gray-500 dark:text-gray-300 cursor-pointer" />
                                <span className="text-sm">Emoji</span>
                              </div>

                              <div className="flex items-center space-x-1 cursor-pointer">
                                <RiAttachment2
                                  className="sm:text-xl text-gray-500 dark:text-gray-300 cursor-pointer"
                                  onClick={handleFileSelect}
                                />
                                <span
                                  className="text-sm"
                                  onClick={handleFileSelect}
                                >
                                  Attach
                                </span>

                                {/* Hidden file input element */}
                                <input
                                  type="file"
                                  id="fileInput"
                                  style={{ display: "none" }}
                                  onChange={handleFileChange}
                                />
                              </div>
                            </div>
                            {inputStr === "" ? (
                              <button disabled className="cursor-not-allowed">
                                <LuSend className="sm:text-xl   " />
                              </button>
                            ) : (
                              <button>
                                <LuSend className="sm:text-xl  cursor-pointer" />
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="absolute  left-0-0">
                          {showPicker && <Picker onEmojiClick={onEmojiClick} />}
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="sm:text-[16px]  w-full  flex flex-col sm:flex-row gap-2 sm:gap-0 items-center mt-4 text-[13px] dark:text-gray-300 text-gray-500">
                    <div className="flex-1">
                      <h1 className="w-full whitespace-nowrap">
                        All Comments 10
                      </h1>
                    </div>
                    <div className="w-full sm:w-10/12 h-[2px] ml-2 dark:h-[1px] dark:bg-gray-700 bg-gray-300"></div>
                  </div>
                  {/* show all comments */}
                  <div className="mt-3 overflow-auto ">
                    <div className="flex flex-col gap-6">
                      {allComments &&
                        allComments?.map((comment) => (
                          <div className="flex gap-3" key={comment?._id}>
                            <div>
                              {comment?.user?.profileImage === null ? (
                                <AvatarFallback>
                                  {comment?.user?.name?.slice(0, 2)}
                                </AvatarFallback>
                              ) : (
                                <Avatar>
                                  <AvatarImage
                                    src={comment?.user?.profileImage}
                                    alt={comment?.user?.name}
                                  />
                                </Avatar>
                              )}
                            </div>
                            <div>
                              <h1 className="text-sm font-semibold">
                                {comment?.user?.name}
                              </h1>
                              <p className="text-xs">
                                <TimeAgo date={comment?.createdAt} />
                              </p>
                              <h2 className="mt-2 text-sm">{comment?.text}</h2>
                              <div className="mt-2">
                                {
                                  (comment?.commentImage === "" || comment?.commentImage === null) ? "" : <div className="cursor-pointer" onClick={() => setShowImageModal(!showImageModal)}><Image src={comment?.commentImage} alt="commentImage" width={100} height={100} /></div>
                                }
                              </div>

                              {
                                comment?.commentImage === "" || null ? "" : <ImageModal image={comment?.commentImage} showImageModal={showImageModal} setShowImageModal={setShowImageModal} />
                              }
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <AlertDialogFooter className="absolute right-0">
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div>
            <ShareNotice />
          </div>
        </div>
        <div className="sm:px-4 w-11/12 mx-auto h-[1px] mt-2 bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div >
  );
};

export default NoticeCard;
