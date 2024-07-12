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

const DropDownMenu = ({
  isOpenModal,
  setIsOpenModal,
}: {
  isOpenModal: boolean;
  setIsOpenModal: any;
}) => {
  const { data } = useCurrentUserQuery();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {
            data?.payload ? <Avatar>
            {data?.payload?.profileImage === null ? (
              <AvatarFallback>
                {data?.payload?.name?.slice(0, 2)}
              </AvatarFallback>
            ) : (
              <AvatarImage
                src={data?.payload?.profileImage}
                alt={data?.payload?.name}
              />
            )}
          </Avatar> :  <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
          }
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="cursor-pointer">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <Link href="/dashboard">Dashboard</Link>
              {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <Link href="/dashboard/settings">Settings</Link>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Newspaper className="mr-2 h-4 w-4" />
              <span>New Notice</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Users className="mr-2 h-4 w-4" />
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BellRing className="mr-2 h-4 w-4" />
              <span>Notifications</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsOpenModal(!isOpenModal)}>
            <LogOut className="mr-2 h-4 w-4" />
            <h1>Log out</h1>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <AlertDialog open={isOpenModal} onOpenChange={setIsOpenModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              Are you absolutely sure?
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter className=" text-left">
            <AlertDialogCancel className="text-center w-full">
              No
            </AlertDialogCancel>
            <AlertDialogAction className="w-full" onClick={handleLogOut}>
              Yes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog> */}
    </div>
  );
};

export default DropDownMenu;
