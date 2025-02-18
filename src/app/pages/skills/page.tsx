import React from "react";
import { Source_Code_Pro } from "next/font/google";





const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});


function Skills() {
  

  return (
    <section id="skills" className="flex p-0 md:p-[70px] pt-[50px] md:mx-[7vh] text-black dark:text-white flex-col mb-0 xl:mb-10 space-y-5 relative">
      <h1
        className={`${sourceCodePro.className} w-full text-start text-[50px] mb-20 font-bold leading-tight items-center`}
      >
        Skills
      </h1>
      <div className="flex flex-col xl:flex-row justify-between gap-20 items-center p-12">
      <h3>hsjdnajsi</h3>
        <div className="scale-150">
          
        </div>
        
      </div>
    </section>
  );
}

export default Skills;
