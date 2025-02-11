import React from "react";
import Image from "next/image";

export default function Education() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Education</h2>
      <div className="flex justify-center gap-10 p-7">
        <Image
          src="/pancasila.png"
          width={300}
          height={300}
          alt="profile picture"
          priority
          
        />

        <Image
          src="/revou.png"
          width={300}
          height={300}
          alt="profile picture"
          priority
         
        />
      </div>
    </div>
  );
}
