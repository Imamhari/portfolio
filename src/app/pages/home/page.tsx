import React from "react";
import ProfilePicture from "@/app/components/ProfilePicture";
import HeroSection from "@/app/components/HeroSection";

function Home() {
  return (
    <div className="space-y-7">
      <div className="flex justify-center p-20 gap-8 ">
        <ProfilePicture />
        <HeroSection />
      </div>
    </div>
  );
}

export default Home;
