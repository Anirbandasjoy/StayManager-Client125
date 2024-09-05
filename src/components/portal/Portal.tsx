"use client";
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
  useAccepetPortalRequestMutation,
  useCencelBookingRequestMutation,
  useFindAllPostalRequestQuery,
} from "@/redux/api/baseApi";
import Image from "next/image";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";

import BookingRequestActionModal from "../dashboard/bookings/BookingRequestActionModal";
import TimeAgo from "../dashboard/notice/TimeAgo";
import { useState } from "react";

const PortalRequest = () => {
  const { data: portalRequest, refetch } = useFindAllPostalRequestQuery();
  const [portalPendingRequest, setPortalPendingRequest] = useState<any>([]);
  const [setPortalRequest] = useAccepetPortalRequestMutation();
  const [setBookingRequestCencel] = useCencelBookingRequestMutation();
  const handleConfrimRequest = async (userId: string) => {
    try {
      await setPortalRequest({ userId: userId });
      toast({
        title: "Confrim request",
      });
      refetch();
    } catch (error) {
      console.log(error);
      toast({
        title: "Something was wrong",
      });
    }
  };

  const handleBookingRequestCelcel = async (roomId: string) => {
    try {
      await setBookingRequestCencel({ roomId });
      toast({
        title: "Cencel request",
      });
      refetch();
    } catch (error) {
      console.log(error);
      toast({
        title: "Something was wrong",
      });
    }
  };

  //

  return (
    <div className="">
      {portalRequest?.payload?.length === 0 ? (
        <h1 className="text-red-400">Not Found Pending Booking Request</h1>
      ) : (
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead className="w-[300px]">Status</TableHead>
              <TableHead className="w-[300px] ">User</TableHead>
              <TableHead className="w-[300px]">Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {portalRequest?.payload?.map((req: any, index) => {
              return (
                <TableRow key={req._id}>
                  <TableCell className="font-medium ">{index + 1}</TableCell>
                  <TableCell>{req?.status}</TableCell>
                  <TableCell>
                    <Link
                      href={`/profile/${req?.user?._id}`}
                      className="flex items-center gap-2"
                    >
                      <Image
                        src="https://i.ibb.co/vL3p03J/Whats-App-Image-2024-03-15-at-9-20-37-PM-Photoroom.jpg"
                        alt="image"
                        width={20}
                        height={20}
                        className="rounded-full cursor-pointer"
                      />
                      <div>
                        <h1 className="text-sm hover:underline cursor-pointer">
                          {req?.user?.name}
                        </h1>
                        <p className="text-xs hover:underline cursor-pointer">
                          {req?.user?.email}
                        </p>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <TimeAgo date={req?.createdAt} />
                  </TableCell>
                  <TableCell className="text-right ">
                    <BookingRequestActionModal
                      roomId={req?.user?._id}
                      handleConfrimRequest={handleConfrimRequest}
                      handleBookingRequestCelcel={handleBookingRequestCelcel}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default PortalRequest;
