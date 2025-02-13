"use client"
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
import { MoveUpRight, Github } from 'lucide-react';
import { JetBrains_Mono, Courier_Prime } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] });
const courierPrime = Courier_Prime({ subsets: ['latin'], weight: ['400', '700'] });

const projectList = [
  {
    num: "01",
    category: "full-stack",
    title: "Laut Lestari",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, tempore ad fugiat facere perspiciatis voluptatem, laudantium temporibus nisi laborum odit repudiandae vitae exercitationem consequuntur veniam illo earum? Ad, voluptatem sapiente.",
    stack: [{ name:"Next JS,"}, { name:"Flask,"}, { name:"Typescript,"}, { name:"Python,"}, { name:"Tailwind CSS,"}, { name:"MySQL"}],
    image: "/public/assets/Laut-Lestari.png",
    live:"https://lautlestari.netlify.app/",
    github:"https://github.com/diikafirmansyah/FSSE-jan24_group-i_gfp_FE",
  },
  {
    num: "02",
    category: "front-end",
    title: "Delish!",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, tempore ad fugiat facere perspiciatis voluptatem, laudantium temporibus nisi laborum odit repudiandae vitae exercitationem consequuntur veniam illo earum? Ad, voluptatem sapiente.",
    stack: [{ name:"Next JS"}, { name:"Typescript"}, { name:"Tailwind CSS"}, { name:"ShadCN"}],
    image: "/public/assets/delish.png",
    live:"https://frontend-delish-app.vercel.app/",
    github:"https://github.com/tobiasagyasta/frontend-delish-app",
  },
  {
    num: "03",
    category: "front-end",
    title: "SahabatAjar.id",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, tempore ad fugiat facere perspiciatis voluptatem, laudantium temporibus nisi laborum odit repudiandae vitae exercitationem consequuntur veniam illo earum? Ad, voluptatem sapiente.",
    stack: [{ name:"Next JS,"}, { name:"Typescript"}, { name:"Tailwind CSS"}, { name:"ShadCN"}],
    image: "/public/assets/Sahabat-ajar.png",
    live:"https://sahabatajar.vercel.app/",
    github:"https://github.com/tobiasagyasta/lms-frontend",
  }
]

function Projects() {
  const [project, setProject] = useState(projectList[0])
  return (
    <motion.section id="projects" initial={{opacity:0}} animate={{opacity:1}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-beetween order-2 xl:order-none">
              <div>
                {/* outline number */}
                <div className={`${jetBrainsMono.className} text-8xl font-extrabold text-transparent text-outline`}>{project.num}</div>
                {/* project category */}
                <h2 className={`${courierPrime.className} text-[30px] md:text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize`}>{project.category}</h2>
                {/* project description */}
                <p className={`${courierPrime.className} text-[13px] text-justify text-gray-600 dark:text-gray-400 font-medium group-hover:text-accent  transition-all duration-500`}>{project.description}</p>
                {/* project stack */}
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className={`${courierPrime.className} text-[15px] text-green-500`}>{item.name}</li>
                    )
                  })}
                </ul>
                {/* border */}
                <div className="border border-orange-300"></div>
                <div className="flex gap-2 mt-[2px]">
                  {/* live project button */}
                <Link href={project.live} target="_blank" rel="noopener noreferrer" className="" >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[40px] h-[40px] dark:bg-gray-700 bg-gray-400 rounded-full flex justify-center  items-center group">
                        <MoveUpRight className="hover:text-orange-500 transition duration-500"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className={`${courierPrime.className} border rounded-[5px] py-[2px] px-3 dark:bg-gray-200 bg-gray-500 text-black`}>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github} target="_blank" rel="noopener noreferrer" className="" >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[40px] h-[40px] dark:bg-gray-700 bg-gray-400 rounded-full flex justify-center  items-center group mt-[2px]">
                        <Github className="hover:text-orange-500 transition duration-500"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className={`${courierPrime.className} border rounded-[5px] py-[2px] px-3 dark:bg-gray-200 bg-gray-500 text-black`}>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                </div>
              </div>
            </div>
            <div className="w-full">slider</div>
          </div>
        </div>
    </motion.section>
  );
}

export default Projects;
