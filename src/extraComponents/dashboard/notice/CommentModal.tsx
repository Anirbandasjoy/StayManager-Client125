import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { BiComment } from "react-icons/bi";

const CommentModal = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {" "}
        <div className="flex items-center gap-1 cursor-pointer w-full hover:bg-gray-100 dark:hover:bg-gray-700 py-1 justify-center rounded-sm duration-200 px-4">
          <BiComment className="text-[21px] w-full text-gray-500 dark:text-gray-300" />
          <p className="text-[17px] font-bold text-gray-500 dark:text-gray-300">
            Comment
          </p>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <h1 className="text-lg text-center">Indivisual Post Here...</h1>
        <div className="w-full h-[1px] bg-gray-400"></div>
        <div className="min-h-96">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message" className="text-gray-500 mb-2 ml-1">
              Write your Comment
            </Label>
            <Textarea
              className="resize-y h-10"
              placeholder="Type your comment here."
            />
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
