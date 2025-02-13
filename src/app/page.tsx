import React from "react";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/home/page";
import About from "./pages/about/page";
import Projects from "./pages/projects/page";
import Skills from "./pages/skills/page";
import Contact from "./pages/contact/page";
import DarkModeToggleMobile from "@/app/components/ui/DarkModeToggleMobile";

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className=" bg-[#e9e9e9] dark:bg-[#090c2c] mx-2  p-4">
        <div className="fixed md:hidden  z-50">
          <DarkModeToggleMobile />
        </div>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
