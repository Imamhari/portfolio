import React from "react";
import ProfilePicture from '@/app/components/ProfilePicture';

function Home() {
  return (
    <div className="space-y-7">
      <h1 className="text-black text-center">HI, YOU FOUND ME!!</h1>
      <div className="flex justify-between mx-36 p-20">
        <h2 className="text-black">Hello</h2>
        <ProfilePicture/>
      </div>
    </div>
  );
}

export default Home;
