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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
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
import LoginAlertModal from "../modal/LoginAlertModal";

const DropDownMenu = () => {
  // currentUser get hook
  const { data: user } = useCurrentUserQuery();
  const [openLogOutModal, setOpenLogOutModal] = useState<boolean>(false);
  const [openLoginAlertModa, setLoginAlertModal] = useState<boolean>(false);
  console.log({ currentUser: user });
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="">
          {user?.payload ? (
            <Avatar className="">
              {user?.payload?.profileImage === null ? (
                <AvatarFallback className="bg-gray-200">
                  {user?.payload?.name?.slice(0, 2)}
                </AvatarFallback>
              ) : (
                <AvatarImage
                  src={user?.payload?.profileImage}
                  alt={user?.payload?.name}
                />
              )}
            </Avatar>
          ) : (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="cursor-pointer">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {user ? (
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <Link href={`/profile/${user?.payload?._id}`}>Profile</Link>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setLoginAlertModal(true)}
              >
                <User className="mr-2 h-4 w-4" />
                <h1>Profile</h1>
              </DropdownMenuItem>
            )}
            {user?.payload?.role === "admin" && (
              <DropdownMenuItem className="cursor-pointer">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <Link href="/dashboard">Dashboard</Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <Link href="/settings">Settings</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {user?.payload?.role === "admin" && (
              <Link href="/dashboard/create-notice">
                <DropdownMenuItem className="cursor-pointer">
                  <Newspaper className="mr-2 h-4 w-4" />
                  <span>Create Notice</span>
                </DropdownMenuItem>
              </Link>
            )}
            <DropdownMenuItem className="cursor-pointer">
              <Users className="mr-2 h-4 w-4" />
              <span>Team</span>
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
          {user ? (
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setOpenLogOutModal(true)}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <h1>Log out</h1>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <Link href="/login">Log in</Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <LogOutModal open={openLogOutModal} setOpen={setOpenLogOutModal} />
      <LoginAlertModal open={openLoginAlertModa} setOpen={setLoginAlertModal} />
    </div>
  );
};

export default DropDownMenu;
