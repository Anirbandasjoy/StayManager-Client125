'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import Navbar from "@/extraComponents/dashboard/sidebar/Navbar";
import { useAllUserQuery } from "@/redux/api/baseApi";


const page = (): JSX.Element => {


  return (
    <>
      <Navbar />
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Mobile No</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow >
            <TableCell>
              <div className="flex items-center gap-2 p-2">
                <img className="h-12 w-12 rounded-full" src="https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png" alt="" />
                <ul className=" text-start">
                  <li>Name SIrname</li>
                  <li>Namelastname@mail.com</li>
                </ul>
              </div>
            </TableCell>
            <TableCell>Student</TableCell>
            <TableCell>012345789</TableCell>
            <TableCell>

              <DropdownMenu>
                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>See Profile</DropdownMenuItem>
                  <DropdownMenuItem>Payment Histry</DropdownMenuItem>
                  <DropdownMenuItem>Chenge Roll</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

            </TableCell>
          </TableRow>
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
  )
}

export default page;