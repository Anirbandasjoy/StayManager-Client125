"use client";
import { Button } from "@/components/ui/button";
import {
  useCreatePortalJoinRequestMutation,
  useCurrentUserQuery,
  useUserALlBookingRequestQuery,
} from "@/redux/api/baseApi";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { toast } from "@/components/ui/use-toast";
import Template from "@/app/Template";

const PublicProfile = ({ params }: { params: { profileId: string } }) => {
  const { profileId } = params;
  console.log(profileId);
  const { data: singleUser } = useCurrentUserQuery();
  const [setPortalRequestData, { isLoading }] =
    useCreatePortalJoinRequestMutation();
  const formattedBirthdate = singleUser?.payload?.birthdate
    ? format(parseISO(singleUser.payload.birthdate), "PPP")
    : "Empty";
  const { data: bookingData } = useUserALlBookingRequestQuery();

  const handleCreatePortalRequest = async () => {
    try {
      await setPortalRequestData().unwrap();
      toast({
        title: "Create portal request please wait..",
      });
    } catch (error: any) {
      if (error.data?.statusCode === 400)
        toast({
          variant: "destructive",
          title: "User Alredy send request.",
          description: "please wait for few time. accepet your request",
        });
      console.log(error);
    }
  };
  console.log({ bookingData });
  return (
    <Template>
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
      <section className="w-full overflow-hidden ">
        <div className="flex flex-col">
          {/* <!-- Cover Image --> */}
          <figure className="w-full h-48 md:h-80 flex justify-center items-center overflow-hidden">
            <Image
              width={500}
              height={300}
              layout="responsive"
              quality={75}
              priority={true}
              // placeholder="blur"
              src={
                singleUser?.payload?.backgroundImage ||
                "https://images.unsplash.com/photo-1709805619372-40de3f158e83?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="User Cover"
              className="items-center justify-center w-full"
            />
          </figure>

          {/* <!-- Profile Image --> */}
          <div className="sm:w-[80%] xs:w-[90%] mx-auto flex flex-col md:flex-row justify-center text-center">
            <Image
              width={100}
              height={100}
              src={
                singleUser?.payload?.profileImage ||
                "https://avatar.iran.liara.run/public"
              }
              alt="User Profile"
              className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
            />

            {/* <!-- FullName --> */}
            <div className="w-full text-center md:text-left my-4 xs:pl-4 text-gray-800 md:ms-6 lg:text-4xl text-3xl  xs:text-xl font-serif">
              {singleUser?.payload?.name}
            </div>
          </div>

          <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            {/* <!-- Detail --> */}
            <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
              <div className="w-full flex flex-col md:flex-row gap-2 justify-center">
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg">
                        First Name
                      </dt>
                      <dd className="text-lg font-semibold">
                        {singleUser?.payload?.name}
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg">Role</dt>
                      <dd className="text-lg font-semibold">
                        {singleUser?.payload?.role}
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg">
                        Date Of Birth
                      </dt>
                      <dd className="text-lg font-semibold">
                        {" "}
                        {formattedBirthdate}{" "}
                      </dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg">
                        Department
                      </dt>
                      <dd className="text-lg font-semibold mb-4">
                        {singleUser?.payload?.department}
                      </dd>
                      <hr className="md:hidden" />
                    </div>
                  </dl>
                </div>
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg">
                        Location
                      </dt>
                      <dd className="text-lg font-semibold">
                        {singleUser?.payload?.address}
                      </dd>
                    </div>

                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg">
                        Phone Number
                      </dt>
                      <dd className="text-lg font-semibold mb-3">
                        {singleUser?.payload?.phone}
                      </dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg">Email</dt>
                      <dd className="text-lg font-semibold">
                        {singleUser?.payload?.email}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="space-x-4">
                <Link href="/">
                  <Button className="text-xs mt-4">Go backwards</Button>
                </Link>

                {singleUser?.payload?.role === "user" && (
                  <>
                    {bookingData?.payload?.some(
                      (booking) =>
                        booking?.user?._id === singleUser?.payload?._id &&
                        booking?.status === "success"
                    ) ? (
                      <Button
                        onClick={handleCreatePortalRequest}
                        className="text-xs mt-4 bg-red-400 hover:bg-red-500"
                      >
                        {isLoading ? "Loading..." : "Join request"}
                      </Button>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Template>
  );
};

export default PublicProfile;
