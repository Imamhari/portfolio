"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import { MoveUpRight, Github } from "lucide-react";
import {
  Source_Code_Pro,
  JetBrains_Mono,
  Courier_Prime,
} from "next/font/google";

import ProjectSliderButtons from "@/app/components/ui/ProjectSliderButtons";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const projectList = [
  {
    num: "01",
    category: "full-stack",
    title: "Laut Lestari",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, tempore ad fugiat facere perspiciatis voluptatem, laudantium temporibus nisi laborum odit repudiandae vitae exercitationem consequuntur veniam illo earum? Ad, voluptatem sapiente.",
    stack: [
      { name: "Next JS," },
      { name: "Flask," },
      { name: "Typescript," },
      { name: "Python," },
      { name: "Tailwind CSS," },
      { name: "MySQL" },
    ],
    image: "/assets/Laut-Lestari.png",
    live: "https://lautlestari.netlify.app/",
    github: "https://github.com/diikafirmansyah/FSSE-jan24_group-i_gfp_FE",
  },
  {
    num: "02",
    category: "front-end",
    title: "Delish!",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, tempore ad fugiat facere perspiciatis voluptatem, laudantium temporibus nisi laborum odit repudiandae vitae exercitationem consequuntur veniam illo earum? Ad, voluptatem sapiente.",
    stack: [
      { name: "Next JS," },
      { name: "Typescript," },
      { name: "Tailwind CSS," },
      { name: "ShadCN" },
    ],
    image: "/assets/delish.png",
    live: "https://frontend-delish-app.vercel.app/",
    github: "https://github.com/tobiasagyasta/frontend-delish-app",
  },
  {
    num: "03",
    category: "front-end",
    title: "SahabatAjar.id",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, tempore ad fugiat facere perspiciatis voluptatem, laudantium temporibus nisi laborum odit repudiandae vitae exercitationem consequuntur veniam illo earum? Ad, voluptatem sapiente.",
    stack: [
      { name: "Next JS," },
      { name: "Typescript," },
      { name: "Tailwind CSS," },
      { name: "ShadCN" },
    ],
    image: "/assets/Sahabat-ajar.png",
    live: "https://sahabatajar.vercel.app/",
    github: "https://github.com/tobiasagyasta/lms-frontend",
  },
];

function Projects() {
  const [project, setProject] = useState(projectList[0]);

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current project index
    setProject(projectList[currentIndex]);
  };
  return (
    <section
      id="projects"
      className="flex p-0 md:p-[70px] pt-[50px] md:mx-[7vh] text-black dark:text-white flex-col space-y-5 my-[7vh] relative "
    >
      <h1
        className={`${sourceCodePro.className} w-full text-start text-[50px] font-bold leading-tight items-center`}
      >
        My Projects
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="container mx-auto"
      >
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[80%] xl:h-[460px] flex flex-col xl:justify-beetween order-2 xl:order-none">
            <div className="flex flex-col gap-[20px]">
              {/* outline number */}
              <div
                className={`${jetBrainsMono.className} text-8xl font-extrabold text-transparent text-outline`}
              >
                {project.num}
              </div>
              {/* project category */}
              <h2
                className={`${courierPrime.className} text-[30px] md:text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize`}
              >
                {project.category}
              </h2>
              {/* project description */}
              <p
                className={`${courierPrime.className} text-[13px] text-justify text-gray-600 dark:text-gray-400 font-medium group-hover:text-accent  transition-all duration-500`}
              >
                {project.description}
              </p>
              {/* project stack */}
              <ul className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`${courierPrime.className} text-[15px] text-green-500`}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-orange-300"></div>
              <div className="flex gap-4">
                {/* live project button */}
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[40px] h-[40px] dark:bg-gray-700 bg-gray-400 rounded-full flex justify-center  items-center group">
                        <MoveUpRight className="hover:text-orange-500 transition duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p
                          className={`${courierPrime.className} border rounded-[5px] py-[2px] px-3 transition duration-500 dark:bg-gray-200 bg-gray-500 text-black`}
                        >
                          Live Project
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[40px] h-[40px] dark:bg-gray-700 bg-gray-400 rounded-full flex justify-center  items-center group mt-[2px]">
                        <Github className="hover:text-orange-500 transition duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p
                          className={`${courierPrime.className} border rounded-[5px] py-[2px] px-3 transition duration-500 dark:bg-gray-200 bg-gray-500 text-black`}
                        >
                          Github Repository
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projectList.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-gray-300">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt="project image"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <ProjectSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-green-500 text:primary hover:bg-green-500-hover text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles="text-white hover:text-orange-500 transition duration-500"
              />
            </Swiper>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
