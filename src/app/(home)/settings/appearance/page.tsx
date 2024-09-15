"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { useTheme } from "@/context/theme.context";

const Appearance = () => {
  const { theme, setTheme, font, setFont } = useTheme();
  const [language, setLanguage] = useState<string>("english");
  const [selectedTheme, setSelectedTheme] = useState<string>(theme);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "english";
    setLanguage(storedLanguage);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("language", language);
    localStorage.setItem("theme", selectedTheme);
    setTheme(selectedTheme);
    applyPreferences();
    toast({
      title: "Updated appearance.",
    });
  };

  const applyPreferences = () => {
    document.body.style.fontFamily = font;
  };

  return (
    <div className="col-span-12 md:col-span-9 sm:p-0 p-4 md:px-8 w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-1">Appearance</h2>
      <p className="text-gray-500 mb-6 text-[15px]">
        Customize the appearance of the app. Automatically switch between day
        and night themes.
      </p>

      <div className="space-y-8">
        <form onSubmit={handleSubmit}>
          {/* Font Field */}
          <div className="space-y-2 mt-6 w-4/12">
            <Label htmlFor="font" className="text-sm font-medium">
              Font
            </Label>
            <Select onValueChange={setFont} value={font}>
              <SelectTrigger id="font">
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="roboto">Roboto</SelectItem>
                <SelectItem value="open-sans">Open Sans</SelectItem>
                <SelectItem value="lato">Lato</SelectItem>
                <SelectItem value="montserrat">Montserrat</SelectItem>
                <SelectItem value="helvetica">Helvetica</SelectItem>
                <SelectItem value="arial">Arial</SelectItem>
                <SelectItem value="times-new-roman">Times New Roman</SelectItem>
                <SelectItem value="georgia">Georgia</SelectItem>
                <SelectItem value="courier-new">Courier New</SelectItem>
                <SelectItem value="verdana">Verdana</SelectItem>
                <SelectItem value="poppins">Poppins</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-gray-500 text-xs dark:text-gray-300">
              Set the font you want to use on the website.
            </p>
          </div>

          {/* Language Field */}
          <div className="space-y-2 mt-6 w-6/12">
            <Label htmlFor="language" className="text-sm font-medium">
              Language
            </Label>
            <Select onValueChange={setLanguage} value={language}>
              <SelectTrigger id="language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="bangla">Bangla</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-gray-500 text-xs dark:text-gray-300">
              This is the language that will be used in the dashboard.
            </p>
          </div>

          {/* Theme Field */}
          <div className="mt-6">
            <h2 className="text-lg font-medium">Theme</h2>
            <p className="text-sm text-gray-500 mb-3 dark:text-gray-300">
              Select the theme for the website.
            </p>
            <div className="flex space-x-4">
              <div
                onClick={() => setSelectedTheme("light")}
                className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center ${
                  selectedTheme === "light"
                    ? "border-black dark:border-gray-400"
                    : "border-gray-300 dark:border-gray-700"
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
                onClick={() => setSelectedTheme("dark")}
                className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center ${
                  selectedTheme === "dark"
                    ? "border-black dark:border-gray-400"
                    : "border-gray-300 dark:border-gray-700"
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

          {/* Update Preferences Button */}
          <Button
            type="submit"
            className="mt-6 w-full dark:bg-zinc-950 dark:text-white dark:border-gray-700 border md:w-auto"
          >
            Update preferences
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Appearance;
