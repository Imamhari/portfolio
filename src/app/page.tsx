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
      <div className="bg-[#e9e9e9] dark:bg-[#090c2c] mx-2 scroll-smooth">
        <div className="fixed md:hidden z-50">
          <DarkModeToggleMobile />
        </div>
          <div id="home" className="md:scroll-mt-24">
            <Home />
          </div>
        <div className=" 2xl:mx-[7vw] 3xl:mx-[20vw]">
          <div id="about" className="md:scroll-mt-24">
            <About />
          </div>
          <div id="projects" className="md:scroll-mt-24">
            <Projects />
          </div>
          <div id="skills" className="md:scroll-mt-24">
            <Skills />
          </div>
          <div id="contact" className="md:scroll-mt-24">
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
