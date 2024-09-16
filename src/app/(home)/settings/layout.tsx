"use client";
import NavbarWrapper from "@/components/home/NavbarWrapper";
import SettingsSidebar from "@/components/home/settings/shared/SettingsSidebar";
import isAuth from "@/utils/auth/isAuth.";

const SettingsLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <NavbarWrapper />
      <div className="container mx-auto px-4 md:px-8 py-4 border-2 border-gray-100 dark:border-gray-700 shadow-sm rounded-md">
        <div>
          <h1 className="text-xl md:text-2xl font-bold mb-2">Settings</h1>
          <div className="space-y-3 md:space-y-5 mb-8">
            <p className="text-gray-500 dark:text-gray-300">
              Manage your account settings and set e-mail preferences.
            </p>
            <div className="bg-gray-200 dark:bg-gray-700 w-full h-[2px]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-2 w-full container">
          <SettingsSidebar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default isAuth(SettingsLayout);
