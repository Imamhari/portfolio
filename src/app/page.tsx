'use client';
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import DarkModeToggleMobile from "./components/ui/DarkModeToggleMobile";
import About from "./pages/about/page";
import Contact from "./pages/contact/page";
import Home from "./pages/home/page";
import Projects from "./pages/projects/page";
import Skills from "./pages/skills/page";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();
  
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  
    return () => {
      lenis.destroy();
    };
  }, []);  

  return (
    <main>
      <Navbar />
      <div className="bg-[#e9e9e9] dark:bg-[#090c2c] mx-2 scroll-smooth">
        <div className="fixed md:hidden z-50">
          <DarkModeToggleMobile />
        </div>
        <div className="3xl:mx-[20vh]">
          <div id="home" className="scroll-mt-24">
            <Home />
          </div>
          <div id="about" className="scroll-mt-24">
            <About />
          </div>
          <div id="projects" className="scroll-mt-24">
            <Projects />
          </div>
          <div id="skills" className="scroll-mt-24">
            <Skills />
          </div>
          <div id="contact" className="scroll-mt-24">
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
