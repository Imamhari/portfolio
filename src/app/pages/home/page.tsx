import React from "react";
import HeroSection from "@/app/components/HeroSection";
import Lanyard from "@/app/components/Lanyard/Lanyard";

// import ParticlesBackground from "@/app/components/ui/ParticlesBackground";

function Home() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex flex-col-reverse lg:flex-row items-center justify-between"
    >

      {/* Konten Halaman */}
     
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen relative">
          <div className=" w-full h-screen xl:w-auto items-center">
            <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
          </div>
            <div>

            <HeroSection />
            </div>
          
        </div>
    </section>
  );
}

export default Home;
