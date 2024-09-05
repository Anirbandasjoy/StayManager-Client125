/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Navbar from "@/components/dashboard/sidebar/Navbar";
import { useAllUserQuery } from "@/redux/api/baseApi";

const Page = (): JSX.Element => {
  const { data, isLoading, isError } = useAllUserQuery();

  if (isLoading) {
    return <div className="m-20 text-xl font-bold">Loading....</div>;
  }

  if (isError) {
    return (
      <div className="mt-20 text-xl font-bold text-red-500">
        An Error Detected....!!
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Table className="mt-2">
        <TableHeader className="text-xl font-bold bg-blue-200 rounded-lg text-gray-700 my-4">
          <TableRow>
            <TableHead>USER</TableHead>
            <TableHead>ROLE</TableHead>
            <TableHead>MOBILE NO</TableHead>
            <TableHead>ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.payload.users.map((user, index: number) => (
            <TableRow
              key={index}
              className={`${index % 2 !== 0 ? "bg-blue-50" : ""}`}
            >
              <TableCell>
                <div className="flex items-center gap-2 p-2">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={user.profileImage}
                    alt="user profile"
                  />
                  <ul className="text-start">
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                  </ul>
                </div>
              </TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>Option</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Users Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>See Profile</DropdownMenuItem>
                    <DropdownMenuItem>Payment History</DropdownMenuItem>
                    <DropdownMenuItem>Change Role</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default Page;
