"use client";
import { useState } from "react";
import Threads from "@/app/components/background/Threads";
import Image from "next/image";
import { Source_Code_Pro, Courier_Prime } from "next/font/google";

import { motion } from "framer-motion";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Contact() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <section
      id="contact"
      className="flex flex-col space-y-5 p-0 pt-[50px] md:p-[70px] relative mx-2 xl:mx-0 h-screen text-black dark:text-white"
    >
      <div className="absolute left-0 top-0 right-0 bottom-0 w-full h-full">
        <Threads amplitude={2.7} distance={1.2} enableMouseInteraction={true} />
      </div>
      <div className="md:mx-[7vh]">
        <h1
          className={`${sourceCodePro.className} w-full text-start text-[50px] font-bold leading-tight items-center `}
        >
          Contact
        </h1>
        <div>
          <div>
            <Image
              src="/mail-dark.png"
              width={500}
              height={100}
              alt="icon mail"
              className=" hidden dark:block"
            />
            <Image
              src="/mail-light.png"
              width={500}
              height={100}
              alt="icon mail"
              className=" block dark:hidden"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;
