import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // untuk mengecek preferensi sistem pengguna
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)){
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }else{
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if(isDarkMode){
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }else{
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  }
  return {isDarkMode, toggleDarkMode};
}