"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  useCreatePortalJoinRequestMutation,
  useSingleUserQuery,
} from "@/redux/api/baseApi";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { toast } from "@/components/ui/use-toast";

const PublicProfile = ({ params }: { params: { profileId: string } }) => {
  const { profileId } = params;
  console.log(profileId);
  const { data: singleUser } = useSingleUserQuery({ profileId });
  const [setPortalRequestData, { isLoading }] =
    useCreatePortalJoinRequestMutation();
  const formattedBirthdate = singleUser?.payload?.birthdate
    ? format(parseISO(singleUser.payload.birthdate), "PPP")
    : "Empty";

  const handleCreatePortalRequest = async () => {
    try {
      await setPortalRequestData().unwrap();
      toast({
        title: "Create portal request please wait..",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="relative w-full h-[70px]">
        <Image
          src={
            "https://images.unsplash.com/photo-1709805619372-40de3f158e83?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          layout="fill"
          className="object-cover"
          alt={"banner"}
        />
        <div className="w-full h-full bg-gradient-to-b from-[#5eaaf5ab] to-[#ffffff] absolute top-0"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-0">
        <h1 className="text-xl md:text-2xl font-bold mb-2">
          {singleUser?.payload?.name}
        </h1>
        <div className="space-y-3 md:space-y-5 mb-8">
          <p className="text-gray-500">
            Present your personal profile publicly show you details
          </p>
          <div className="bg-gray-200 w-full h-[2px]"></div>

          <div className="col-span-12 md:col-span-9 bg-white sm:p-0  w-full">
            <h2 className="text-lg md:text-xl font-semibold mb-1">Profile</h2>
            <p className="text-gray-500 mb-6 text-[15px]">
              This is how others will see you on the site.
            </p>

            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="Empty"
                  className="mt-1 w-full border-none bg-gray-50 rounded-sm "
                  value={singleUser?.payload?.name}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  type="text"
                  placeholder="Empty"
                  value={singleUser?.payload?.email}
                  className="mt-1 w-full border-none bg-gray-50 rounded-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <Input
                  type="text"
                  placeholder="Empty"
                  value={singleUser?.payload?.phone}
                  className="mt-1 w-full border-none bg-gray-50 rounded-sm"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <Input
                  type="text"
                  placeholder="Empty"
                  className="mt-1 w-full border-none bg-gray-50 rounded-sm"
                  value={singleUser?.payload?.address}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Department
                </label>
                <Input
                  type="text"
                  placeholder="Empty"
                  className="mt-1 w-full border-none bg-gray-50 rounded-sm"
                  value={singleUser?.payload?.department}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Birthdate
                </label>
                <Input
                  type="text"
                  placeholder="Empty"
                  className="mt-1 w-full border-none bg-gray-50 rounded-sm"
                  value={formattedBirthdate}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <Input
                  type="text"
                  placeholder="Empty"
                  value={singleUser?.payload?.role}
                  className="mt-1 w-full border-none bg-gray-50 rounded-sm"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm mb-1 font-medium text-gray-700">
                  Profile picture
                </label>
                <div className=" w-[170px] sm:w-[170px] bg-gray-100 border-2  rounded-md h-[107px] cursor-pointer border-gray-300 flex justify-center items-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={singleUser?.payload?.profileImage || ""}
                      alt="Notice Image"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-x-4">
                <Link href="/">
                  <Button className="text-xs mt-4">Go backwards</Button>
                </Link>

                {singleUser?.payload?.role === "user" && (
                  <Button
                    onClick={handleCreatePortalRequest}
                    className="text-xs mt-4 bg-red-400 hover:bg-red-500"
                  >
                    {isLoading ? "Loading..." : "Join"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;
