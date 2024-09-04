import { MdOutlineDashboardCustomize, MdOutlineBathroom } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiCandles } from "react-icons/bi";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { PiStudentDuotone } from "react-icons/pi";
import Link from "next/link";
import Menu from "./Menu";
import { IoMdPaper } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="z-50">
      <div className="border-gray-300  z-50 bg-gray-200 dark:bg-gray-900  border-r dark:border-gray-700 ">
        <Link href="/">
          <h1 className="text-lg font-sans font-bold text-center bg-blue-300 dark:text-gray-600 py-2 text-gray-500">
            Stay Manager
          </h1>
        </Link>

        <div className=" mt-10 pl-1 flex flex-col justify-between h-[calc(100vh-95px)]  sm:h-[calc(100vh-100px)]">
          <div className="flex flex-col gap-4">
            <Menu
              menuName="Dashboard"
              path="/dashboard"
              Icon={MdOutlineDashboardCustomize}
            />
            <Menu menuName="Notice" path="/dashboard/notice" Icon={IoMdPaper} />

            <Menu
              menuName="Rooms"
              path="/dashboard/rooms"
              Icon={MdOutlineBathroom}
            />
            <Menu
              menuName="Bookings"
              path="/dashboard/bookings"
              Icon={BiCandles}
            />
            <Menu
              menuName="Students"
              path="/dashboard/students"
              Icon={PiStudentDuotone}
            />

            <Menu
              menuName="Users"
              path="/dashboard/users"
              Icon={AiOutlineUsergroupAdd}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Menu
              menuName="Settings"
              path="/dashboard/settings"
              Icon={IoSettingsOutline}
            />
            {/* <Menu menuName="Logout" path="" Icon={IoLogOutOutline} /> */}

            <AlertDialog>
              <AlertDialogTrigger>
                <div className="flex items-center gap-3 hover:bg-gray-300 dark:hover:bg-gray-800 py-2 pl-3  cursor-pointer">
                  <IoLogOutOutline className="text-gray-700 dark:text-gray-400 text-[18px]" />
                  <h1 className="text-[14px] font-bold text-gray-700 dark:text-gray-400">
                    Logout
                  </h1>
                </div>
              </AlertDialogTrigger>
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
                  <AlertDialogAction className="w-full">Yes</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
