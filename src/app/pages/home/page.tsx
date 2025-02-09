import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div className="space-y-7">
      <h1 className="text-black text-center">HI, YOU FOUND ME!!</h1>
      <div className="flex justify-between mx-40 p-20">
        <h2 className="text-black">Hello</h2>
        <Image
          src="/profile.jpg"
          width={250}
          height={300}
          alt="profile picture"
          priority
          className="rounded-[30%] border-4 border-[#090c2c] hover:scale-110 cursor-pointer transition duration-300 ease-in-out border-opacity-70 shadow-profile
"
        />
      </div>
    </div>
  );
}

export default Home;
