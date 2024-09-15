import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import TimeAgo from "@/components/dashboard/notice/TimeAgo";
import { useUserALlBookingRequestQuery } from "@/redux/api/baseApi";
import Image from "next/image";
import Link from "next/link";
import NavbarWrapper from "../NavbarWrapper";

const BookingsCom = () => {
  const { data: roomBookingAllRequest } = useUserALlBookingRequestQuery();
  console.log(roomBookingAllRequest);

  return (
    <div>
      <div className="w-full">
        <NavbarWrapper />
      </div>
      <div className="container min-h-screen">
        <h1 className="text-xl font-medium ml-4 my-2 text-gray-600 dark:text-gray-100">
          My Schedule
        </h1>

        {roomBookingAllRequest?.payload?.length === 0 ? (
          <p className="text-center text-gray-600 mt-4">No bookings found.</p>
        ) : (
          <div>
            <Table>
              <TableCaption>A list of your recent Schedule.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Sit no</TableHead>
                  <TableHead className="w-[300px]">Status</TableHead>
                  <TableHead className="w-[300px] ">User</TableHead>
                  <TableHead className="w-[300px]">Date</TableHead>
                  <TableHead className="w-[300px]">Rent</TableHead>
                  <TableHead className="text-right">Room</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roomBookingAllRequest?.payload?.map((req) => (
                  <TableRow key={req._id}>
                    <TableCell className="font-medium">
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
                    <TableCell className="text-right">
                      <Link href={`/rooms/${req?.room?._id}`}>
                        <Image
                          src={req?.room?.roomImage}
                          alt="image"
                          width={40}
                          height={40}
                          className="rounded-md cursor-pointer"
                        />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingsCom;
