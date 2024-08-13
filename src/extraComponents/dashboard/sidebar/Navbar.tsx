"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { BellRing } from "lucide-react";

import DropDownMenu from "@/extraComponents/share/DropDownMenu";
import Notifications from "../notifications/Notification";
const Navbar = () => {
  return (
    <div className="py-4 bg-blue-300 rounded-sm dark:bg-gray-800 ">
      <div>
        <nav className="w-full  lg:max-w-4xl mx-auto xl:max-w-6xl 2xl:max-w-7xl px-4 lg:px-0">
          <div className=" flex flex-wrap items-center justify-between mx-auto lg:px-8">
            <h1 className="font-sans text-xl font-bold">Stay Manager</h1>
            <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
              <div className="flex items-center justify-center gap-4 ">
                <Sheet>
                  <SheetTrigger>
                    {" "}
                    <BellRing className="mr-2 h-6 w-6 cursor-pointer" />
                  </SheetTrigger>
                  <SheetContent>
                    <div>
                      <h1 className="text-lg font-semibold">Notifications</h1>
                    </div>
                    <div className="mt-3">
                      <Tabs defaultValue="all" className="w-[400px]">
                        <TabsList>
                          <TabsTrigger value="all">All</TabsTrigger>
                          <TabsTrigger value="unread">Unread</TabsTrigger>
                        </TabsList>
                        <TabsContent value="all">
                          <Notifications />
                        </TabsContent>
                        <TabsContent value="unread">Unread content</TabsContent>
                      </Tabs>
                    </div>
                  </SheetContent>
                </Sheet>

                <DropDownMenu />
              </div>
            </div>
            <div
              className={`items-center sm:ml-[78px] hidden sm:block ml-0 z-10 mt-4 sm:mt-0 justify-between duration-700 w-full md:flex md:w-auto `}
              id="navbar-sticky"
            ></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
