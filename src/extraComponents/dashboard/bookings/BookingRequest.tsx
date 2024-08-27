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
  useBookingMutation,
  useFindAllBookingRequestQuery,
} from "@/redux/api/baseApi";
import Image from "next/image";
import Link from "next/link";
import TimeAgo from "../notice/TimeAgo";
import BookingRequestActionModal from "./BookingRequestActionModal";
import { toast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

const BookingRequest = () => {
  const { data: bookingRequest, refetch } = useFindAllBookingRequestQuery();
  const [bookingRequestPending, setBookingRequestPending] = useState<any>([]);
  const [setBookingRequestConfrim] = useBookingMutation();
  const handleConfrimRequest = async (roomId: string) => {
    try {
      await setBookingRequestConfrim({ id: roomId });
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
    console.log("clicked", roomId);
  };

  const handleBookingRequestCelcel = (roomId: string) => {
    console.log("Cencel booking request", roomId);
  };

  useEffect(() => {
    if (bookingRequest?.payload) {
      const pendingBookings = bookingRequest.payload.filter(
        (data) => data.status === "pending"
      );
      setBookingRequestPending(pendingBookings);
    }
  }, [bookingRequest?.payload]);

  return (
    <div className="">
      {bookingRequestPending?.length === 0 ? (
        <h1 className="text-red-400">Not Found Pending Booking Request</h1>
      ) : (
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Sit no</TableHead>
              <TableHead className="w-[300px]">Status</TableHead>
              <TableHead className="w-[300px] ">User</TableHead>
              <TableHead className="w-[300px]">Date</TableHead>
              <TableHead className="w-[300px]">Rent</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookingRequestPending?.map((req: any) => {
              return (
                <TableRow key={req._id}>
                  <TableCell className="font-medium ">
                    0{req?.sitNumber}
                  </TableCell>
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
                    <TimeAgo date={req?.user?.createdAt} />
                  </TableCell>
                  <TableCell>{req?.room?.sitRent} BDT</TableCell>
                  <TableCell className="text-right ">
                    <BookingRequestActionModal
                      roomId={req?._id}
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

export default BookingRequest;
