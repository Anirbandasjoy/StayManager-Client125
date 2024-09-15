"use client";
import { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
  font: string;
  setFont: (font: string) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");
  const [font, setFont] = useState<string>("poppins");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    const storedFont = localStorage.getItem("font") || "poppins";
    setTheme(storedTheme);
    setFont(storedFont);
    applyPreferences(storedTheme, storedFont);
  }, [theme, font]);

  const applyPreferences = (theme: string, font: string) => {
    const html = document.documentElement;
    document.body.style.fontFamily = font;
    html.classList.remove("light", "dark");
    html.classList.add(theme);
  };

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyPreferences(newTheme, font);
  };

  const changeFont = (newFont: string) => {
    setFont(newFont);
    localStorage.setItem("font", newFont);
    applyPreferences(theme, newFont);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: changeTheme, font, setFont: changeFont }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
