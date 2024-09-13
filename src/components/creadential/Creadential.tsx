import { MdShowChart, MdContentCopy } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "../ui/input";

import { toast } from "../ui/use-toast";

const Credentials = () => {
  const handleCopy = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast({
          title: "Copied to clipboard!",
        });
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="py-2 mt-2 h-10 px-3 w-full rounded-md bg-transparent border-2 text-gray-600  flex items-center justify-center gap-1 cursor-pointer">
            <MdShowChart className="text-xl dark:text-gray-200" />
            <span className="font-bold sm:text-sm text-xs dark:text-gray-200 text-nowrap">
              Show Credentials
            </span>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-gray-200 dark:bg-zinc-950 dark:border dark:border-gray-700 dark:text-gray-200">
          <h1 className="text-center font-medium text-xl dark:text-white text-gray-600">
            Credentials
          </h1>
          <div className="space-y-4">
            {/* Admin Email */}
            <div className="flex flex-col gap-1 relative">
              <label className="text-sm" htmlFor="admin-email">
                Admin Email
              </label>
              <Input id="admin-email" value="admin@gmail.com" readOnly />
              <MdContentCopy
                className="absolute right-3 top-[35px] text-gray-500 cursor-pointer hover:text-gray-700"
                onClick={() => handleCopy("admin@gmail.com")}
              />
            </div>

            {/* Admin Password */}
            <div className="flex flex-col gap-1 relative">
              <label className="text-sm" htmlFor="admin-password">
                Admin Password
              </label>
              <Input id="admin-password" value="12345A@" readOnly />
              <MdContentCopy
                className="absolute right-3 top-[35px] text-gray-500 cursor-pointer hover:text-gray-700"
                onClick={() => handleCopy("12345A@")}
              />
            </div>
          </div>

          <div className="flex items-center gap-1 my-1">
            <div className="w-full bg-gray-500 h-[1px]"></div>
            <h2 className="text-sm text-nowrap">Students</h2>
            <div className="w-full bg-gray-500 h-[1px]"></div>
          </div>

          <div className="space-y-4">
            {/* Student Email */}
            <div className="flex flex-col gap-1 relative">
              <label className="text-sm" htmlFor="student-email">
                Student Email
              </label>
              <Input id="student-email" value="joy600508@gmail.com" readOnly />
              <MdContentCopy
                className="absolute right-3 top-[35px] text-gray-500 cursor-pointer hover:text-gray-700"
                onClick={() => handleCopy("joy600508@gmail.com")}
              />
            </div>

            {/* Student Password */}
            <div className="flex flex-col gap-1 relative">
              <label className="text-sm" htmlFor="student-password">
                Student Password
              </label>
              <Input id="student-password" value="12345A@" readOnly />
              <MdContentCopy
                className="absolute right-3 top-[35px] text-gray-500 cursor-pointer hover:text-gray-700"
                onClick={() => handleCopy("12345A@")}
              />
            </div>
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-700 text-white hover:bg-gray-800 hover:text-white">
              Close
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Toast message */}
    </>
  );
};

export default Credentials;
