import React from "react";
import ProfilePicture from "@/app/components/ProfilePicture";
import HeroSection from "@/app/components/HeroSection";
// import ParticlesBackground from "@/app/components/ui/ParticlesBackground";



function Home() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex justify-center">
       
    {/* Particles Background */}
    {/* <div className="absolute inset-0 ">
      <ParticlesBackground />
    </div> */}

    {/* Konten Halaman */}
    <div className="relative z-10 flex space-y-7 m-0 xl:m-20">
      <div className="flex flex-col md:flex-row justify-center  gap-8">
        <ProfilePicture />
        <HeroSection />
      </div>
    </div>
  </section>
  );
}

export default Home;
