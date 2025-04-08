"use client";
import { useState } from "react";
import Experiences from "@/app/components/Experiences";
import { Source_Code_Pro } from "next/font/google";
import Education from "@/app/components/Education";
import Certificate from "@/app/components/Certificate";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function About() {
  const [activeTab, setActiveTab] = useState("experiences");

  const tabs = [
    { id: "experiences", label: "Experiences" },
    { id: "education", label: "Education" },
    { id: "certificate", label: "Certificate" },
  ];
  return (
    <section
      id="about"
      className="flex p-0 md:p-[70px] pt-[50px] md:mx-[7vh] text-black dark:text-white flex-col space-y-5 relative "
    >
      <h1
        className={`${sourceCodePro.className} w-full text-start text-[50px] font-bold leading-tight items-center`}
      >
        About Me
      </h1>
      <p className="py-7 font-semibold text-md text-justify">
        Hi there!👋🏼 I&apos;m Imam Hari Maulana, I&apos;m currently living in
        Bekasi, Indonesia. I am a software engineer with a solid foundation in
        problem-solving, attention to detail, and a high commitment to
        delivering quality solutions. My background as a machine operator has
        equipped me with a unique perspective on workflow optimization and the
        ability to perform under pressure—skills I now apply to software
        development. After completing intensive training at RevoU, I gained
        expertise in JavaScript, TypeScript, React JS, Next JS, Python, Flask,
        and MySQL, enabling a smooth transition into software engineering. With
        a combination of technical expertise, analytical thinking, and strong
        collaboration skills, I am ready to tackle challenges in any software
        project. My dedication to user-centered design and process optimization
        drives my desire to contribute meaningfully to innovative and
        technology-driven companies.
      </p>

      {/* TabsSection */}
      <div className="flex flex-col items-center justify-center w-full mt-10">
        <div className="flex bg-white rounded-2xl gap-2 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1 rounded-2xl font-semibold transition-all duration-300
                  ${
                    activeTab === tab.id
                    ? "bg-orange-400 text-whitw"
                    : "text-black hover:bg-orange-500/50"
                  }
               `}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {activeTab === "experiences" && <Experiences />}
        {activeTab === "education" && <Education />}
        {activeTab === "certificate" && <Certificate />}
      </div>
    </section>
  );
}

export default About;
