"use client";
import { useState, useRef, useEffect } from "react";
import Experiences from "@/app/components/Experiences";
import { Source_Code_Pro, Courier_Prime } from "next/font/google";
import Education from "@/app/components/Education";
import Certificate from "@/app/components/Certificate";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function About() {
  const [activeTab, setActiveTab] = useState("experiences");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const containerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: "experiences", label: "Experiences" },
    { id: "education", label: "Education" },
    { id: "certificate", label: "Certificate" },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const activeButton = container.querySelector(
      `button[data-id="${activeTab}"]`
    ) as HTMLElement;
    if (activeButton) {
      setIndicatorStyle({
        width: `${activeButton.offsetWidth}px`,
        transform: `translateX(${activeButton.offsetLeft}px)`,
      });
    }
  }, [activeTab]);

  return (
    <section
      id="about"
      className="flex p-0 md:p-[70px] pt-[50px] md:mx-[7vh] text-black dark:text-white flex-col space-y-5 relative mx-2 "
    >
      <h1
        className={`${sourceCodePro.className} w-full text-start text-[50px] font-bold leading-tight items-center `}
      >
        About Me
      </h1>
      <h3 className={`${courierPrime.className} py-7 text-sm xl:text-xl text-justify xl:mx-5`}>
        Hi there! 👋🏼 I'm Imam Hari Maulana, a Front End Developer based in
        Bekasi, Indonesia. I specialize in building responsive and user-friendly
        web interfaces using JavaScript, TypeScript, React JS, Next JS, and
        Tailwind CSS. With less than a year of experience, I bring strong
        problem-solving skills, attention to detail, and a passion for crafting
        clean, efficient code. After completing intensive training at RevoU,
        I’ve worked on various projects that focus on delivering great user
        experiences. I'm driven by user-centered design and always eager to
        learn and grow in a collaborative environment. Currently open to new
        opportunities in front-end development and excited to contribute to
        innovative, tech-driven teams.
      </h3>

      {/* TabsSection */}
      <div className="flex flex-col items-center justify-center w-full mt-10">
        <div
          ref={containerRef}
          className="relative flex bg-white rounded-2xl gap-2 p-1"
        >
          <span
            style={indicatorStyle}
            className="absolute top-1 bottom-1 left-0 rounded-2xl bg-orange-400 transition-all duration-300"
          ></span>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              data-id={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative z-10 px-4 py-1 rounded-2xl font-semibold transition-all duration-300 transform
                ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-black hover:text-orange-500/50"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="w-full">
          {activeTab === "experiences" && <Experiences />}
          {activeTab === "education" && <Education />}
          {activeTab === "certificate" && <Certificate />}
        </div>
      </div>
    </section>
  );
}

export default About;
