"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { isImage, uploadImage } from "@/helper/common";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";

interface ProfileUpdateIinputTypes {
  name: string;
  phone: string;
  address: string;
  department: string;
  role: string;
  profileImage: string;
  birthdate: string;
}

const Settings = () => {
  const { data: loginUser, refetch: loginUserRefetch } = useCurrentUserQuery();
  const { refetch: singleUserRefetch } = useSingleUserQuery({
    profileId: loginUser?.payload?._id || "",
  });
  const [date, setDate] = useState<any>(loginUser?.payload?.birthdate || "");
  const [imageURL, setImageURL] = useState<string>(
    loginUser?.payload?.profileImage || ""
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [setUserInformation] = useUpdateUserInformationMutation();

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
      birthdate: loginUser?.payload?.birthdate || "",
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
        profileImage: image || data.profileImage,
        birthdate: date,
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
        title: `Something went wrong ${error.message}`,
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="col-span-12 md:col-span-9  sm:p-0 p-4 md:px-8  w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-1">Profile</h2>
      <p className="text-gray-500 mb-6 text-[15px] dark:text-gray-400">
        This is how others will see you on the site.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
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
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Email
          </label>
          <Input
            type="text"
            value={loginUser?.payload?.email}
            className="mt-1 w-full"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
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
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
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
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
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
        <div className="space-y-2 mb-4">
          <Label htmlFor="dob" className="text-sm font-medium dark:text-white">
            Date of birth
          </Label>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <p className="text-gray-500 text-xs dark:text-gray-400">
            Your date of birth is used to calculate your age.
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Role
          </label>
          <Input
            type="text"
            value={loginUser?.payload?.role}
            className="mt-1 w-full"
            readOnly
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm mb-1 font-medium text-gray-700 dark:text-white">
            Profile picture
          </label>
          <div
            className=" w-[170px] sm:w-[170px] bg-gray-100 dark:bg-zinc-950 dark:border-gray-700 border-2  rounded-md h-[107px] cursor-pointer border-gray-300 flex justify-center items-center"
            onClick={handleSelectNoticeImage}
          >
            {imageURL ? (
              <div className="relative w-[166px] h-[103px]">
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  alt="profile picture"
                  className=" rounded-md"
                  src={imageURL}
                />
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteSelectedImage();
                  }}
                  className="absolute cursor-pointer flex justify-center items-center bg-red-600 -top-2 -right-2 text-white rounded-full h-5 w-5"
                >
                  <GrClose className="h-3 w-3" />
                </span>
              </div>
            ) : (
              <div>
                <div className="text-center">
                  <BiSolidCloudUpload className="mx-auto text-3xl text-gray-400" />
                  <div className="text-sm font-semibold text-gray-500">
                    Upload photo
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG or JPG{" "}
                  </p>
                </div>
              </div>
            )}
          </div>
          <input
            type="file"
            id="noticeImage"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <Button
          className=" mt-4 text-xs px-6 dark:bg-zinc-950 dark:border dark:border-gray-700 dark:text-white"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Update Profile"}
        </Button>
      </form>
    </div>
  );
};

export default Settings;
