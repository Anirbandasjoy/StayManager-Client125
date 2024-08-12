import SettingsSidebar from "@/extraComponents/home/settings/shared/SettingsSidebar";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="w-full ">
        <div className="relative w-full h-[70px]">
          <Image
            src={
              "https://images.unsplash.com/photo-1709805619372-40de3f158e83?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            layout="fill"
            className="object-cover"
            alt={"banner"}
          />
          <div className="w-full h-full bg-gradient-to-b from-[#5eaaf5ab] to-[#ffffff] absolute top-0"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 py-4 border-2 border-gray-100 shadow-sm rounded-md">
        <div>
          <h1 className="text-xl md:text-2xl font-bold mb-2">Settings</h1>
          <div className="space-y-3 md:space-y-5 mb-8">
            <p className="text-gray-500">
              Manage your account settings and set e-mail preferences.
            </p>
            <div className="bg-gray-200 w-full h-[2px]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-2 w-full container ">
          <SettingsSidebar />
          {children}
        </div>
      </div>
    </div>
  );
}
