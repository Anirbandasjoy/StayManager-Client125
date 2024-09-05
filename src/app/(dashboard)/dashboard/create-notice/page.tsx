"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/dashboard/sidebar/Navbar";
import { isImage, uploadImage } from "@/helper/common";
import {
  useCreateNoticeMutation,
  useFindNoticeQuery,
} from "@/redux/api/baseApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { BiSolidCloudUpload } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { ThreeDot } from "react-loading-indicators";
const CreateNotice = () => {
  const [imageURL, setImageURL] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [noticetext, setNoticeText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [setNotice, { data: noticeData }] = useCreateNoticeMutation();
  const { refetch: noticeRefetch } = useFindNoticeQuery();
  const router = useRouter();
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

  const handleCreateNotice = async () => {
    try {
      setLoading(true);
      let mainImageURL = "";
      if (imageURL && imageFile) {
        mainImageURL = await uploadImage(imageFile);
      }

      const noticeData = {
        caption: noticetext,
        noticeImage: mainImageURL,
      };

      console.log(noticeData);
      await setNotice(noticeData).unwrap();
      setImageURL("");
      setNoticeText("");
      setImageFile(null);
      toast({
        title: "Create a New Comment",
      });
      noticeRefetch();
      router.push("/dashboard/notice");
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Fail Process, please try again.",
        description: "There was a problem with your request.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center max-w-2xl  flex-col sm:flex-row gap-4 sm:gap-6 items-end">
        <div className="mt-5  w-full ">
          <h1 className="text-lg font-semibold">Post Notice</h1>
          <Textarea
            className="border-2 border-gray-300 mt-1 resize-none h-[107px]"
            value={noticetext}
            onChange={(e) => setNoticeText(e.target.value)}
          />
        </div>
        <div
          className=" w-[170px] sm:w-[230px] bg-gray-100 border-2  rounded-md h-[107px] cursor-pointer border-gray-300 flex justify-center items-center"
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
      <div className="mt-6 space-x-3 max-w-2xl  ">
        <Button variant="outline" onClick={() => router.push("/dashboard")}>
          Discard
        </Button>
        {noticetext && !loading ? (
          <Button onClick={handleCreateNotice}>Save Post</Button>
        ) : (
          <Button className="cursor-not-allowed bg-gray-500 hover:bg-gray-400">
            {loading ? (
              <ThreeDot color="#32cd32" size="small" text="" textColor="" />
            ) : (
              "Save Post"
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CreateNotice;
