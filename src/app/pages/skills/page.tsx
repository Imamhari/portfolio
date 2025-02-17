import React from "react";
import Image from "next/image";

function Skills() {
  return (
    <section id="skills" className="relative ">
      <div className="m-50 ">
      <Image
        src="/profile-light.png"
        width={300}
        height={30}
        alt="profile picture"
        priority
      />
      </div>
      
    </section>
  );
}

export default Skills;
