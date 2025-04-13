"use client";

import { useState, useRef, useEffect } from "react";
import { Source_Code_Pro, Courier_Prime } from "next/font/google";
import Tools from "@/app/components/Tools";
import Skill from "@/app/components/Skill";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Skills() {
  const [activeTab, setActiveTab] = useState("skills");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const containerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: "skills", label: "Skills" },
    { id: "tools", label: "Tools" },
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
      id="skills"
      className="flex flex-col space-y-5 p-0 pt-[50px] md:p-[70px] md:pt-2 relative mx-2 xl:mx-0 h-full text-black dark:text-white "
    >
      <div className="relative flex flex-col md:flex-row items-start md:items-stretch w-full min-h-[60vh]">
        <div className="relative hidden md:flex flex-col justify-start items-center  gap-4 pt-[20px]">
          <h1 className="text-lg tracking-widest rotate-[-90deg] text-gray-300">
            SKILLS.
          </h1>
          <div className="w-px h-36 bg-gray-400 mt-6"></div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 items-start justify-center w-full  xl:mx-5 gap-10">
          <div>
            <h3
              className={`${courierPrime.className} w-full  font-bold leading-tight text-[30px] z-50`}
            >
              Tech stack that delivers <br /> results with style.
            </h3>
            <p className={`${sourceCodePro.className} w-full text-start  font-normal leading-tight items-center justify-center mt-5`}>
              As a growing developer, I have acquired a solid foundation in core
              web development technologies. With a strong passion for learning,
              I continuously strive to deepen my skills and expand my knowledge
              in this field.
            </p>

            {/* Tabs Section */}
            <div
              ref={containerRef}
              className="flex flex-col items-start w-full mt-10"
            >
              <div className="relative flex bg-white rounded-2xl gap-2 p-1">
                {/* Indicator */}
                <div
                  className="absolute top-1 bottom-1 left-0 rounded-2xl bg-orange-400 transition-all duration-300"
                  style={indicatorStyle}
                />

                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    data-id={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative z-10 px-4 py-1 rounded-2xl font-semibold transition-all duration-300
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
            </div>
          </div>

          <div>
            {activeTab === "skills" && <Skill />}
            {activeTab === "tools" && <Tools />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
