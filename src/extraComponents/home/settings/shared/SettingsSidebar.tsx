"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SettingsSidebar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="col-span-12 md:col-span-3 ">
      <ul className="space-y-2">
        <li
          className={`text-gray-500 text-sm font-semibold  rounded-sm py-2 px-3 cursor-pointer ${
            pathname === "/settings" ? "bg-gray-100" : ""
          }`}
        >
          <Link href="/settings">Profile</Link>
        </li>
        <li
          className={`text-gray-500 text-sm font-semibold  rounded-sm py-2 px-3 cursor-pointer ${
            pathname === "/settings/account" ? "bg-gray-100" : ""
          }`}
        >
          <Link href="/settings/account">Account</Link>
        </li>
        <li
          className={`text-gray-500 text-sm font-semibold  rounded-sm py-2 px-3 cursor-pointer ${
            pathname === "/settings/appearance" ? "bg-gray-100" : ""
          }`}
        >
          <Link href="/settings/appearance">Appearance</Link>
        </li>
        <li className="text-gray-500 text-sm font-semibold  rounded-sm py-2 px-3 cursor-pointer">
          Notifications
        </li>
        <li className="text-gray-500 text-sm font-semibold  rounded-sm py-2 px-3 cursor-pointer">
          Display
        </li>
      </ul>
    </div>
  );
};

export default SettingsSidebar;
