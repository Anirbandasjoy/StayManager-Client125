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
import DateComponent from "@/helper/dateFormetter/DateFormet";
import { useFindAllBookingRequestQuery } from "@/redux/api/baseApi";
import Image from "next/image";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";

const BookingRequest = () => {
  const { data: bookingRequest } = useFindAllBookingRequestQuery();
  console.log(bookingRequest);
  return (
    <div className="">
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
          {bookingRequest?.payload?.map((req) => {
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
                  <DateComponent dateString={req?.user?.createdAt} />
                </TableCell>
                <TableCell>{req?.room?.sitRent} BDT</TableCell>
                <TableCell className="text-right ">
                  <BsThreeDots className="ml-auto text-2xl cursor-pointer text-gray-600" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookingRequest;
