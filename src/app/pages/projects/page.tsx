"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import { Globe, Github } from 'lucide-react';
import { JetBrains_Mono, Courier_Prime } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] });
const courierPrime = Courier_Prime({ subsets: ['latin'], weight: ['400', '700'] });

const projectList = [
  {
    num: "01",
    category: "full-stack",
    title: "Laut Lestari",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, tempore ad fugiat facere perspiciatis voluptatem, laudantium temporibus nisi laborum odit repudiandae vitae exercitationem consequuntur veniam illo earum? Ad, voluptatem sapiente.",
    stack: [{ name:"Next JS"}, { name:"Flask"}, { name:"Typescript"}, { name:"Python"}, { name:"Tailwind CSS"}, { name:"MySQL"}],
    image: "/public/assets/Laut-Lestari.png",
    live:"",
    github:"",
  },
  {
    num: "02",
    category: "front-end",
    title: "Delish!",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, tempore ad fugiat facere perspiciatis voluptatem, laudantium temporibus nisi laborum odit repudiandae vitae exercitationem consequuntur veniam illo earum? Ad, voluptatem sapiente.",
    stack: [{ name:"Next JS"}, { name:"Typescript"}, { name:"Tailwind CSS"}, { name:"ShadCN"}],
    image: "/public/assets/delish.png",
    live:"",
    github:"",
  },
  {
    num: "03",
    category: "front-end",
    title: "SahabatAjar.id",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, tempore ad fugiat facere perspiciatis voluptatem, laudantium temporibus nisi laborum odit repudiandae vitae exercitationem consequuntur veniam illo earum? Ad, voluptatem sapiente.",
    stack: [{ name:"Next JS"}, { name:"Typescript"}, { name:"Tailwind CSS"}, { name:"ShadCN"}],
    image: "/public/assets/Sahabat-ajar.png",
    live:"",
    github:"",
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
                <h2 className={`${courierPrime.className} text-[42px] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize`}>{project.category}</h2>
              </div>
            </div>
            <div className="w-full">slider</div>
          </div>
        </div>
    </motion.section>
  );
}

export default Projects;
