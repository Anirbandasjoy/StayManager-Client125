"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { uploadImage } from "@/helper/common";
import React, { ChangeEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Picker from "emoji-picker-react";
import { BiComment } from "react-icons/bi";
import { BsEmojiFrown } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { LuSend } from "react-icons/lu";
import { RiAttachment2 } from "react-icons/ri";
import Image from "next/image";
const CommentModal = ({handleGetNoticeId, noticeId} : {handleGetNoticeId : any, noticeId : string | null}) => {
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [commetImageUploadLoading, setCommentImageUpLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  // console.log({inputStr})
  // console.log({selectedImage})
  // console.log()
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {" "}
        <div className="flex items-center gap-1 cursor-pointer w-full hover:bg-gray-100 dark:hover:bg-gray-700 py-1 justify-center rounded-sm duration-200 px-4" onClick={handleGetNoticeId}>
          <BiComment className="text-[21px] w-full text-gray-500 dark:text-gray-300" />
          <p className="text-[17px] font-bold text-gray-500 dark:text-gray-300">
            Comment
          </p>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <h1 className="text-lg text-center">This Post Comment Here...</h1>
        <div className="w-full h-[1px] bg-gray-400"></div>
        <div className="min-h-96">
          <div>
            <form className="w-full">
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
                        <span className="text-sm" onClick={handleFileSelect}>
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
              <h1 className="w-full whitespace-nowrap">All Comments 10</h1>
            </div>
            <div className="w-full sm:w-10/12 h-[2px] ml-2 dark:h-[1px] dark:bg-gray-700 bg-gray-300"></div>
          </div>
        </div>
        <AlertDialogFooter className="absolute right-0">
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CommentModal;
