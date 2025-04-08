import Navbar from "./components/Navbar";
import DarkModeToggleMobile from "./components/ui/DarkModeToggleMobile";
import About from "./pages/about/page";
import Home from "./pages/home/page";
import Projects from "./pages/projects/page";

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className=" bg-[#e9e9e9] dark:bg-[#090c2c] mx-2  ">
        <div className="fixed md:hidden  z-50">
          <DarkModeToggleMobile />
        </div>
        <Home />
        <About />
        <Projects />
        {/* <Skills /> */}
        {/* <Contact /> */}
      </div>
    </main>
  );
}