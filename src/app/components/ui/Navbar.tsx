"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import Image from 'next/image';
import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], weight: ['400', '700'] });

const navItems = [
  { name: "Home", path: "#home" },
  { name: "About Me", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Skills", path: "#skills" },
  { name: "Contact", path: "#contact" },
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
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
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
    <nav className="sticky p-4 text-white dark:text-black w-full top-0 bg-[#090c2c] dark:bg-[#e9e9e9] z-50 hidden md:block ">
      <div className="mx-auto mr-7 flex justify-between items-center py-3 pl-[15vh]">
        <div>
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
        <div className="flex items-center gap-16">
          <ul className={`${sourceCodePro.className} flex text-md font-semibold mt-6`}>
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
          <DarkModeToggle />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-1rem)] h-3 bg-[#e9e9e9] dark:bg-[#090c2c] rounded-t-lg"></div>
    </nav>
  );
}

export default Navbar;
