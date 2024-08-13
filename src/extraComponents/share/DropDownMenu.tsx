"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  BellRing,
  Github,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Newspaper,
  Settings,
  User,
  Users,
} from "lucide-react";
import { useCurrentUserQuery } from "@/redux/api/baseApi";
import { useState } from "react";
import LogOutModal from "../modal/LogOutModal";

const DropDownMenu = () => {
  // currentUser get hook
  const { data } = useCurrentUserQuery();
  const [openLogOutModal, setOpenLogOutModal] = useState<boolean>(false);
  console.log({ currentUser: data });
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="">
          {data?.payload ? (
            <Avatar className="">
              {data?.payload?.profileImage === null ? (
                <AvatarFallback className="bg-gray-200">
                  {data?.payload?.name?.slice(0, 2)}
                </AvatarFallback>
              ) : (
                <AvatarImage
                  src={data?.payload?.profileImage}
                  alt={data?.payload?.name}
                />
              )}
            </Avatar>
          ) : (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="cursor-pointer">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <Link href={`/profile/${data?.payload?._id}`}>Profile</Link>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <Link href="/dashboard">Dashboard</Link>
              {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <Link href="/settings">Settings</Link>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/dashboard/create-notice">
              <DropdownMenuItem className="cursor-pointer">
                <Newspaper className="mr-2 h-4 w-4" />
                <span>Create Notice</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="cursor-pointer">
              <Users className="mr-2 h-4 w-4" />
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <BellRing className="mr-2 h-4 w-4" />
              <span>Notifications</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setOpenLogOutModal(true)}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <h1>Log out</h1>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <LogOutModal open={openLogOutModal} setOpen={setOpenLogOutModal} />
    </div>
  );
};

export default DropDownMenu;
