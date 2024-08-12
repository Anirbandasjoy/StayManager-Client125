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

const Accout = () => {
  const [date, setDate] = useState<Date>();
  return (
    <div className="col-span-12 md:col-span-9 bg-white sm:p-0 p-4 md:px-8  w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-1">Account</h2>
      <p className="text-gray-500 mb-6 text-[15px]">
        Update your account settings. Set your preferred language and timezone.
      </p>

      <div className="space-y-8">
        <form>
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Name
            </Label>
            <Input id="name" placeholder="Your name" className="w-full" />
            <p className="text-gray-500 text-xs">
              This is the name that will be displayed on your profile and in
              emails.
            </p>
          </div>

          {/* Date of Birth Field */}
          <div className="space-y-2 mt-6">
            <Label htmlFor="dob" className="text-sm font-medium">
              Date of birth
            </Label>
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <p className="text-gray-500 text-xs">
              Your date of birth is used to calculate your age.
            </p>
          </div>

          {/* Language Field */}
          <div className="space-y-2 mt-6 w-4/12">
            <Label htmlFor="language" className="text-sm font-medium">
              Language
            </Label>
            <Select>
              <SelectTrigger id="language" className="">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="bangla">Bangla</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-gray-500 text-xs">
              This is the language that will be used in the dashboard.
            </p>
          </div>

          {/* Update Account Button */}
          <Button className="mt-6 w-full md:w-auto">Update account</Button>
        </form>
      </div>
    </div>
  );
};

export default Accout;
