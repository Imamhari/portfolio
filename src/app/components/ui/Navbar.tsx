"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import Image from 'next/image'
import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], weight: ['400', '700'] })

function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About ", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky p-4 text-white dark:text-black w-full top-0 bg-[#090c2c] dark:bg-[#e9e9e9] z-50">
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
           className="hidden dark:block "
          />
        </div>
        {/* Navigation */}
        <div className="flex items-center gap-16">
        <ul className={`${sourceCodePro.className} flex text-md font-semibold mt-6`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.name}
                className={`relative px-6 pb-[20px] pt-[10px] transition duration-300 ${
                  pathname === item.path
                    ? "text-[#090c2c] dark:text-[#e9e9e9] bg-[#e9e9e9] dark:bg-[#090c2c] rounded-t-md"
                    : "text-[#e9e9e9] dark:text-[#090c2c]  hover:text-orange-600 dark:hover:text-orange-600"
                }`}
              >
                {item.name}
                {pathname === item.name && (
                  <span className="absolute bottom-0 left-0 w-full h-1" />
                )}
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
