"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import DarkModeToggle from "./ui/DarkModeToggle";
import Image from "next/image";
import { Source_Code_Pro } from "next/font/google";
import { FaHouseChimney } from "react-icons/fa6";
import { FaRegUser, FaBriefcase, FaCode } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const navItems = [
  { name: "Home", icon: <FaHouseChimney />, path: "#home" },
  { name: "About Me", icon: <FaRegUser />, path: "#about" },
  { name: "Projects", icon: <FaBriefcase />, path: "#projects" },
  { name: "Skills", icon: <FaCode />, path: "#skills" },
  { name: "Contact", icon: <IoMdMail />, path: "#contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      navItems.forEach((item) => {
        const section = document.querySelector(item.path);
        if (section) {
          const sectionTop =
            section.getBoundingClientRect().top + window.scrollY;
          const sectionBottom = sectionTop + section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = item.path;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Jalankan saat pertama kali dimuat
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* navbar atas  */}
      <nav className="sticky p-4 text-white dark:text-black w-full top-0 bg-[#090c2c] dark:bg-[#e9e9e9] z-50 hidden md:block  ">
        <div className="mx-auto mr-7 flex justify-between items-center py-2 pl-[15vh]">
          <div className="hidden xl:block">
            <Image
              src="/logo-light.png"
              width={60}
              height={30}
              alt="profile picture"
              priority
              className="block dark:hidden"
            />
            <Image
              src="/logo-dark.png"
              width={60}
              height={30}
              alt="profile picture"
              priority
              className="hidden dark:block"
            />
          </div>
          {/* Navigation */}
          <div className="flex items-center justify-between w-full xl:max-w-[700px]">
            <div className="flex items-center gap-16">
              <ul
                className={`${sourceCodePro.className} flex text-md font-semibold mt-6`}
              >
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`relative px-6 pb-[20px] pt-[10px] transition duration-300 ${
                        activeSection === item.path
                          ? "text-[#090c2c] dark:text-[#e9e9e9] bg-[#e9e9e9] dark:bg-[#090c2c] rounded-t-md"
                          : "text-[#e9e9e9] dark:text-[#090c2c] hover:text-orange-600 dark:hover:text-orange-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <DarkModeToggle />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-1rem)] h-3 bg-[#e9e9e9] dark:bg-[#090c2c] rounded-t-lg"></div>
      </nav>

      {/* navbar bawah */}
      <nav className="fixed bottom-0 w-full h-[70px] bg-[#090c2c] dark:bg-[#e9e9e9] z-50 md:hidden flex justify-center items-center px-[5vh]">
        <ul className="flex justify-between w-[700px]">
          {navItems.map((item) => (
            <li key={item.name} className="relative w-[70px] h-[60px] z-10 ">
              <Link
                href={item.path}
                className={`relative items-center w-[90%] h-[100%] text-center flex justify-center  ${
                  activeSection === item.path
                    ? "text-[#e9e9e9] dark:text-[#090c2c] bg-[#090c2c] dark:bg-[#e9e9e9] rounded-full border-4 border-[#e9e9e9] dark:border-[#090c2c] translate-y-[-35px]"
                    : "text-[#e9e9e9] dark:text-[#090c2c] hover:text-orange-600 dark:hover:text-orange-600"
                }`}
              >
                <div className="relative block leading-[75px] text-center duration-[0.5s] text-[1.5em] ">
                  {item.icon}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
