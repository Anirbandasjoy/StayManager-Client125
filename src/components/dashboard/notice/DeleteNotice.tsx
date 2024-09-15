"use client";

import { toast } from "@/components/ui/use-toast";
import { useDeleteNoticeMutation } from "@/redux/api/baseApi";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteNotice = ({
  noticeId,
  noticeRefetch,
}: {
  noticeId: string;
  noticeRefetch: any;
}) => {

  const [setDeleteNotice] = useDeleteNoticeMutation();

  const handleDeleteNotice = async () => {
    try {
      await setDeleteNotice({ noticeId }).unwrap();
      noticeRefetch();
      toast({
        title: "Deleted",
        description: "The notice has been successfully deleted.",
      });
  
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <div className="flex gap-1 items-center cursor-pointer" onClick={handleDeleteNotice}>
          <RiDeleteBin6Line />
          Delete
        </div>
  );
};

export default DeleteNotice;
