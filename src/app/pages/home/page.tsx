import React from "react";
import HeroSection from "@/app/components/HeroSection";
import Lanyard from "@/app/components/Lanyard/Lanyard";

// import ParticlesBackground from "@/app/components/ui/ParticlesBackground";

function Home() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden flex justify-between"
    >

      {/* Konten Halaman */}
     
        <div className="flex flex-col md:flex-row justify-between ">
          <div className=" w-full md:w-[95vh]">
            <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
          </div>
          <div className="">
            <HeroSection />
          </div>
        </div>
    </section>
  );
}

export default Home;
