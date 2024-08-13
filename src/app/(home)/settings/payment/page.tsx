import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { months, years } from "@/helper/common";
import Image from "next/image";
import React from "react";

const Payment = () => {
  return (
    <div className="col-span-12 md:col-span-9 bg-white sm:p-0 p-4 md:px-8  w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-1">Payment</h2>
      <p className="text-gray-500 mb-6 text-[15px]">
        Update your account settings. Set your preferred language and timezone.
      </p>
      <div className="max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
        <div className="flex space-x-4 mb-4">
          <button className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
            <span role="img" aria-label="Card">
              💳
            </span>{" "}
            Card
          </button>
          <button className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
            <span role="img" aria-label="Paypal">
              🅿️
            </span>{" "}
            Paypal
          </button>
          <button className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
            <Image
              src="https://download.logo.wine/logo/BKash/BKash-Icon-Logo.wine.png"
              width={5}
              height={5}
              alt="bikashImage"
            />
            Bikash
          </button>
        </div>
        <form className="space-y-8">
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-700">
              Name
            </label>
            <Input id="name" placeholder="Frist Last" className="w-full" />
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium text-gray-700">
              Card number
            </label>
            <Input
              id="car_number"
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-full"
            />
          </div>
          <div className="flex space-x-4 ">
            <div className="w-4/12">
              <label className="block mb-1 text-sm font-medium text-gray-700 ">
                Expires
              </label>
              <Select>
                <SelectTrigger id="expires" className="">
                  <SelectValue placeholder="January" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {months?.map((value, index) => {
                      return (
                        <SelectItem key={index} value={value?.value}>
                          {value?.name}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-5/12">
              <label className="block mb-1 text-sm font-medium text-gray-700 ">
                Year
              </label>
              <Select>
                <SelectTrigger id="year" className="">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {years?.map((value, index) => {
                      return (
                        <SelectItem
                          key={index}
                          value={value?.value?.toString()}
                        >
                          {value?.name}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                CVC
              </label>
              <Input id="cvc" placeholder="CVC" className="w-full" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
