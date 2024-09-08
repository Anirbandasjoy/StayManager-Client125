/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
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
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Navbar from "@/components/dashboard/sidebar/Navbar";
import { useAllUserQuery, useDeleteUserMutation } from "@/redux/api/baseApi";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import {
  MdOutlineAccountCircle,
  MdOutlineDelete,
  MdOutlineNoAccounts,
} from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import DeleteModal from "@/components/modal/DeleteAlertModal";
import { toast } from "@/components/ui/use-toast";
import UserRoleUpdateModal from "@/components/dashboard/users/UserRoleUpdateModal";

const Page = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [openRemoveUserModal, setRemoveUserModal] = useState<boolean>(false);
  const [openUpdaRoleModal, setUpdateRoleModal] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const [updateUserId, setUpdateUserId] = useState<string>("");

  const [page, setPage] = useState<number>(1);
  const limit = 6;

  const {
    data,
    isLoading,
    isError,
    error,
    refetch: alluserRefetch,
  } = useAllUserQuery({
    searchValue,
    page,
    limit,
  });
  const [setRemoveData] = useDeleteUserMutation();

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

  const handleChange = (value: string) => {
    if (value === "default") {
      setSearchValue("");
    } else {
      setSearchValue(value);
    }
  };

  // Handle pagination button clicks
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const totalPages = data?.payload.pagination.totalPages ?? 1;

  const handleRemoveUser = (userId: string) => {
    setUserId(userId);
    setRemoveUserModal(true);
  };

  const confrimDeleteUser = async () => {
    try {
      await setRemoveData({ userId });
      alluserRefetch();
      toast({
        title: "Deleted",
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Not Deleted user.",
        description: "There was a problem with your request.",
      });
    }
  };

  const updateRole = (userId: string) => {
    setUpdateUserId(userId);

    setUpdateRoleModal(true);
  };

  return (
    <>
      <div className="relative">
        <div>
          <Navbar />
        </div>
        <div className="sm:absolute my-2  relative sm:my-0 lg:right-44 2xl:right-52 xl:right-48 md:right-32 top-4">
          <Select onValueChange={handleChange}>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="student">Student</SelectItem>
            </SelectContent>
          </Select>
          <h1 className="text-lg absolute px-4 right-0 bg-red-400 p-[6px] top-0 text-white cursor-pointer">
            {data?.payload?.users?.length}
          </h1>
        </div>
      </div>
      <Table className="mt-2">
        <TableHeader className="text-xl font-bold bg-blue-200 rounded-lg text-gray-700 my-4">
          <TableRow>
            <TableHead className="text-lg w-[180px] font-medium text-gray-600">
              User
            </TableHead>
            <TableHead className="text-lg font-medium text-gray-600">
              Role
            </TableHead>
            <TableHead className="text-lg font-medium text-gray-600">
              Mobail no
            </TableHead>
            <TableHead className="text-lg text-center font-medium text-gray-600">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.payload.users.map((user, index: number) => (
            <TableRow
              key={index}
              className={`${index % 2 !== 0 ? "bg-blue-50" : ""}`}
            >
              <TableCell className="w-[300px]">
                <div className="flex items-center gap-2 ">
                  {user?.profileImage ? (
                    <Link href={`/profile/${user?._id}`}>
                      <img
                        className="h-12 w-12 rounded-full cursor-pointer"
                        src={user?.profileImage}
                        alt="user profile"
                      />
                    </Link>
                  ) : (
                    <Link
                      href={`/profile/${user?._id}`}
                      className="w-12 h-12 bg-gray-200 text-gray-600 rounded-full flex justify-center items-center cursor-pointer"
                    >
                      {user?.name?.slice(0, 2)}
                    </Link>
                  )}
                  <ul className="text-start">
                    <Link
                      href={`/profile/${user?._id}`}
                      className="hover:underline text-xs cursor-pointer block"
                    >
                      {user?.name}
                    </Link>
                    <Link
                      href={`/profile/${user?._id}`}
                      className="hover:underline text-xs cursor-pointer block"
                    >
                      {user?.email}
                    </Link>
                  </ul>
                </div>
              </TableCell>
              <TableCell>{user?.role}</TableCell>
              <TableCell>{user?.phone}</TableCell>
              <TableCell className="text-center">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <BsThreeDots className="ml-auto  text-2xl cursor-pointer text-gray-600" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Users Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href={`/profile/${user?._id}`}>
                      <DropdownMenuItem className="cursor-pointer flex items-center gap-1">
                        <MdOutlineAccountCircle className="text-xl" />
                        <h1 className="font-medium">See profile</h1>
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem
                      onClick={() => updateRole(user?._id)}
                      className="cursor-pointer flex items-center gap-1"
                    >
                      <MdOutlineNoAccounts className="text-xl" />
                      <h1 className="font-medium">Change role</h1>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleRemoveUser(user?._id)}
                      className="cursor-pointer flex items-center gap-1"
                    >
                      <AiTwotoneDelete className="text-xl" />
                      <h1 className="font-medium">Remove user</h1>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="mt-2">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer"
              onClick={() => handlePageChange(page > 1 ? page - 1 : 1)}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={() => handlePageChange(index + 1)}
                className={`${
                  page === index + 1
                    ? "bg-blue-500 text-white font-semibold cursor-pointer"
                    : ""
                }`}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              className="cursor-pointer"
              onClick={() =>
                handlePageChange(page < totalPages ? page + 1 : totalPages)
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <DeleteModal
        open={openRemoveUserModal}
        setOpen={setRemoveUserModal}
        onConfrim={confrimDeleteUser}
      />
      <UserRoleUpdateModal
        open={openUpdaRoleModal}
        setOpen={setUpdateRoleModal}
        userId={updateUserId}
      />
    </>
  );
};

export default Page;
