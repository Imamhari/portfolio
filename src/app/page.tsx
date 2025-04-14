import Navbar from "./components/Navbar";
import DarkModeToggleMobile from "./components/ui/DarkModeToggleMobile";
import About from "./pages/about/page";
import Contact from "./pages/contact/page";
import Home from "./pages/home/page";
import Projects from "./pages/projects/page";
import Skills from "./pages/skills/page";

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className=" bg-[#e9e9e9] dark:bg-[#090c2c] mx-2 X  ">
        <div className="fixed md:hidden  z-50">
          <DarkModeToggleMobile />
        </div>
        <div className="3xl:mx-[20vh]">
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </main>
  );
}
