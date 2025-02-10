"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="relative w-14 h-7 bg-[#e9e9e9] dark:bg-[#090c2c] rounded-full flex items-center px-1 transition-all border border-orange-500"
    >
      <div
        className={`w-6 h-6 flex items-center justify-center bg-white text-orange-600 dark:bg-black dark:text-white rounded-full shadow-md transform transition-all ${
          isDarkMode ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDarkMode ? <Moon size={14} /> : <Sun size={14} />}
      </div>
    </button>
  );
}
