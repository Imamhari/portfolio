import React from "react";
import ProfilePicture from "@/app/components/ProfilePicture";
import HeroSection from "@/app/components/HeroSection";
import ParticlesBackground from "@/app/components/ui/ParticlesBackground";

function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
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
  </div>
  );
}

export default Home;
