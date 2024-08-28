"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { isImage, uploadImage } from "@/helper/common";
import {
  useCurrentUserQuery,
  useSingleUserQuery,
  useUpdateUserInformationMutation,
} from "@/redux/api/baseApi";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { BiSolidCloudUpload } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

interface ProfileUpdateIinputTypes {
  name: string;
  phone: string;
  address: string;
  department: string;
  role: string;
  profileImage: string;
}

const Settings = () => {
  const { data: loginUser, refetch: loginUserRefetch } = useCurrentUserQuery();
  const { refetch: singleUserRefetch } = useSingleUserQuery({
    profileId: loginUser?.payload?._id || "",
  });
  const [imageURL, setImageURL] = useState<string>(
    loginUser?.payload?.profileImage || ""
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [setUserInformation, { data: updateResponse }] =
    useUpdateUserInformationMutation();
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

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProfileUpdateIinputTypes>({
    defaultValues: {
      name: loginUser?.payload?.name || "",
      phone: loginUser?.payload?.phone || "",
      address: loginUser?.payload?.address || "",
      department: loginUser?.payload?.department || "",
      profileImage: loginUser?.payload?.profileImage || "",
    },
  });

  const onSubmit: SubmitHandler<ProfileUpdateIinputTypes> = async (data) => {
    try {
      setIsLoading(true);
      let image;
      if (imageFile) {
        image = await uploadImage(imageFile);
      }
      await setUserInformation({
        name: data?.name,
        address: data?.address,
        department: data?.department,
        phone: data?.phone,
        profileImage: image,
      });
      toast({
        title: `Successfully Updated`,
      });
      loginUserRefetch();
      singleUserRefetch();
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
      toast({
        title: `omting was rong ${error.message}`,
      });
      setIsLoading(false);
    }
  };
  console.log(updateResponse);

  return (
    <div className="col-span-12 md:col-span-9 bg-white sm:p-0 p-4 md:px-8  w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-1">Profile</h2>
      <p className="text-gray-500 mb-6 text-[15px]">
        This is how others will see you on the site.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>

          <Controller
            name="name"
            control={control}
            rules={{
              required: "Name is required field",
            }}
            render={({ field }) => (
              <>
                <Input
                  {...field}
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full "
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </span>
                )}
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            type="text"
            value={loginUser?.payload?.email}
            className="mt-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <Controller
            name="phone"
            control={control}
            rules={{
              pattern: {
                value: /^(\+8801|01)[3-9]\d{8}$/,
                message: "Please enter a valid Bangladeshi phone number",
              },
            }}
            render={({ field }) => (
              <>
                <Input
                  {...field}
                  type="text"
                  placeholder="Your phone number"
                  defaultValue={loginUser?.payload?.phone}
                  className="mt-1 w-full"
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </span>
                )}
              </>
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <>
                <Input
                  {...field}
                  type="text"
                  placeholder="Your address"
                  className="mt-1 w-full"
                  defaultValue={loginUser?.payload?.address}
                />
                {errors.address && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.address.message}
                  </span>
                )}
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Department
          </label>
          <Controller
            name="department"
            control={control}
            render={({ field }) => (
              <>
                <Input
                  {...field}
                  type="text"
                  placeholder="Your department"
                  className="mt-1 w-full"
                  defaultValue={loginUser?.payload?.department}
                />
                {errors.department && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.department.message}
                  </span>
                )}
              </>
            )}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <Input
            type="text"
            value={loginUser?.payload?.role}
            className="mt-1 w-full"
          />
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
        </div>

        <div className="flex justify-between items-center">
          <div>
            <Button className="text-xs mt-4">
              {isLoading ? "Loading..." : "Update profile"}
            </Button>
          </div>
          <div>
            <h1 className="block text-sm mb-1 font-medium text-gray-400">
              Last login <span className="text-red-400">1h ago</span>
            </h1>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
