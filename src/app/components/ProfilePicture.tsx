import React from "react";
import Image from "next/image";

function ProfilePicture() {
  return (
    <div className="z-40 flex justify-center">
      <div className="hidden md:block">
        {/* gambar default */}
        <Image
          src="/profile-light.png"
          width={600}
          height={300}
          alt="profile picture"
          priority
          className="block dark:hidden"
        />
        <Image
          src="/profile-dark.png"
          width={600}
          height={300}
          alt="profile picture"
          priority
          className="hidden dark:block"
        />
      </div>
      <div className="block md:hidden">
        {/* gambar default */}
        <Image
          src="/profile-light.png"
          width={300}
          height={300}
          alt="profile picture"
          priority
          className="block dark:hidden"
        />
        <Image
          src="/profile-dark.png"
          width={300}
          height={300}
          alt="profile picture"
          priority
          className="hidden dark:block"
        />
      </div>
    </div>
  );
}

export default ProfilePicture;
