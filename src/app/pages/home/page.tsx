import React from "react";
import ProfilePicture from "@/app/components/ProfilePicture";
import HeroSection from "@/app/components/HeroSection";
import ParticlesBackground from "@/app/components/ui/ParticlesBackground";
import DarkModeToggleMobile from "@/app/components/ui/DarkModeToggleMobile";


function Home() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
       <div className="fixed flex justify-end md:hidden w-[560px] z-50">
              <DarkModeToggleMobile  />
              </div>
    {/* Particles Background */}
    <div className="absolute inset-0 ">
      <ParticlesBackground />
    </div>

    {/* Konten Halaman */}
    <div className="relative z-10 flex flex-col space-y-7">
      <div className="flex justify-center p-20 gap-8">
        <ProfilePicture />
        <HeroSection />
      </div>
    </div>
  </section>
  );
}

export default Home;
