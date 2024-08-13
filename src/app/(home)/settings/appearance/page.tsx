"use client";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

const Appearance = () => {
  const [date, setDate] = useState<Date>();
  const [theme, setTheme] = useState("light");
  return (
    <div className="col-span-12 md:col-span-9 bg-white sm:p-0 p-4 md:px-8  w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-1">Appearance</h2>
      <p className="text-gray-500 mb-6 text-[15px]">
        Customize the appearance of the app. Automatically switch between day
        and night themes.
      </p>

      <div className="space-y-8">
        <form>
          {/* Name Field */}
          <div className="space-y-2 mt-6 w-4/12">
            <Label htmlFor="font" className="text-sm font-medium">
              Font
            </Label>
            <Select>
              <SelectTrigger id="font" className="">
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inter">Inter</SelectItem>
                <SelectItem value="poppins">Poppins</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-gray-500 text-xs">
              Set the font you want to use in the dashboard.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-medium">Theme</h2>
            <p className="text-sm text-gray-500 mb-3">
              Select the theme for the dashboard.
            </p>
            <div className="flex space-x-4">
              <div
                onClick={() => setTheme("light")}
                className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center ${
                  theme === "light" ? "border-black" : "border-gray-300"
                }`}
              >
                <div className="w-16 h-10 bg-gray-100 rounded-md mb-2">
                  <div className="w-full h-full flex flex-col justify-between p-1">
                    <div className="bg-gray-300 h-2 rounded"></div>
                    <div className="bg-gray-300 h-2 rounded"></div>
                    <div className="bg-gray-300 h-2 rounded"></div>
                  </div>
                </div>
                <span className="text-sm font-medium">Light</span>
              </div>

              <div
                onClick={() => setTheme("dark")}
                className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center ${
                  theme === "dark" ? "border-black" : "border-gray-300"
                }`}
              >
                <div className="w-16 h-10 bg-gray-800 rounded-md mb-2">
                  <div className="w-full h-full flex flex-col justify-between p-1">
                    <div className="bg-gray-600 h-2 rounded"></div>
                    <div className="bg-gray-600 h-2 rounded"></div>
                    <div className="bg-gray-600 h-2 rounded"></div>
                  </div>
                </div>
                <span className="text-sm font-medium">Dark</span>
              </div>
            </div>
          </div>

          {/* Update Account Button */}
          <Button className="mt-6 w-full md:w-auto">Update preferences</Button>
        </form>
      </div>
    </div>
  );
};

export default Appearance;
