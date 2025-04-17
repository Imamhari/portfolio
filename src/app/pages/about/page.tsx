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
      className="flex flex-col space-y-5 p-0 pt-[50px] md:p-[70px] md:pt-2 relative mx-2 xl:mx-0 h-full text-black dark:text-white md:mt-20 xl:mb-[20vh]"
    >
      <div className="relative flex flex-col md:flex-row items-start md:items-stretch w-full">
        <div className="relative hidden md:flex flex-col justify-start items-center  gap-4 pt-10">
          <h1 className={`${sourceCodePro.className} text-lg tracking-widest rotate-[-90deg] `}>
            ABOUT.
          </h1>
          <div className="w-px h-36 bg-gray-900 dark:bg-gray-400 mt-6"></div>
        </div>
        <div>
        <h1 className={`${sourceCodePro.className} text-lg block md:hidden tracking-widest`}>
            ABOUT. <hr className="w-24 h-1 bg-gray-900 dark:bg-gray-400" />
          </h1>
        <h3
          className={`${courierPrime.className} w-full hidden md:block  font-bold leading-tight text-[30px] z-50`}
        >
          Crafting not just websites, but first impressions.
        </h3>

        <p
          className={`${courierPrime.className} py-7 text-sm xl:text-xl text-justify xl:mx-5`}
        >
          Hi there! 👋🏼 I'm Imam Hari Maulana, a Front End Developer based in
          Bekasi, Indonesia. I specialize in building responsive and
          user-friendly web interfaces using JavaScript, TypeScript, React JS,
          Next JS, and Tailwind CSS. With less than a year of experience, I
          bring strong problem-solving skills, attention to detail, and a
          passion for crafting clean, efficient code. After completing intensive
          training at RevoU, I’ve worked on various projects that focus on
          delivering great user experiences. I'm driven by user-centered design
          and always eager to learn and grow in a collaborative environment.
          Currently open to new opportunities in front-end development and
          excited to contribute to innovative, tech-driven teams.
        </p>
        </div>
      </div>

      {/* TabsSection */}
      <div className="flex flex-col items-center justify-center w-full mt-10">
        <div
          ref={containerRef}
          className="relative flex bg-white rounded-2xl  p-1"
        >
          <span
            style={indicatorStyle}
            className="absolute top-1 bottom-1 left-0 rounded-2xl  bg-orange-400 transition-all duration-300"
          ></span>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              data-id={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${sourceCodePro.className} relative z-10 px-4 py-1 rounded-2xl font-semibold transition-all duration-300 transform text-sm md:text-base
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
