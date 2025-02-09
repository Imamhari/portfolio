import React from "react";
import Navbar from './components/Navbar';
import Home from './pages/home/page';
import About from './pages/about/page';
import Projects from './pages/projects/page';
import Skills from './pages/skills/page';
import Contact from './pages/contact/page';



export default function Page() {
  return (
    <main>
      <Navbar/>
      <div className=" bg-[#e9e9e9] mx-2  p-4">
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      </div>
    </main>
  );
}
