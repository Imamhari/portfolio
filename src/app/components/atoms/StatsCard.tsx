import { Award, CircleCheckBig, Handshake } from "lucide-react";

import {
  Source_Code_Pro,
  JetBrains_Mono,
  Courier_Prime,
} from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const stats = [
  {
    icon: <Award className="w-12 h-12 text-white bg-orange-500 rounded-full p-1"/>,
    number: "-1",
    label: "Years of Experience",
  },
  {
    icon: <CircleCheckBig className="w-12 h-12 text-white bg-orange-500 rounded-full p-1"/>,
    number: "3+",
    label: "Projects Completed",
  },
  {
    icon: <Handshake className="w-12 h-12 text-white bg-orange-500 rounded-full p-1"/>,
    number: "3+",
    label: "Projects Collaborated",
  },
];

function StatsCard() {
  return (
    <div className=" flex items-center justify-between gap-5 pt-12 w-full">
      {stats.map((stat, index) => (
        <div key={index} className="bg-[#3f4346] w-[200px] h-[70px] flex gap-3 px-2 rounded-lg shadow-md text-white max-w-[200px] justify-center items-center hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <div className="flex ">{stat.icon}</div>
          <div className="flex flex-col justify-center text-sm text-center">
            <div className={`${jetBrainsMono.className} text-orange-500 font-bold`}>{stat.number}</div>
            <div className={`${courierPrime.className}`}>{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCard;
