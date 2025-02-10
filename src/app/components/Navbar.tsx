"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky p-4 text-white dark:text-black w-full top-0 bg-[#090c2c] dark:bg-[#e9e9e9]">
      <div className="container ml-auto mr-7 flex justify-between items-center py-3 pl-6">
        <div>Logo</div>
        {/* Navigation */}
        <div className="flex items-center gap-16">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.name}
                className={`relative px-2 transition duration-300 ${
                  pathname === item.path
                    ? "text-white dark:text-black"
                    : "text-gray-400 hover:text-white"
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
