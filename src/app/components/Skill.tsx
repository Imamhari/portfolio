import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import { Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const icons = [
  { icon: "/assets/icons/icons8-html-5.svg", alt: "Html-5" },
  { icon: "/assets/icons/icons8-css3.svg", alt: "Css-3" },
  { icon: "/assets/icons/icons8-javascript.svg", alt: "Javascript" },
  { icon: "/assets/icons/icons8-typescript.svg", alt: "Typescript" },
  { icon: "/assets/icons/icons8-react.svg", alt: "React.js" },
  { icon: "/assets/icons/icons8-nextjs.svg", alt: "Next.js" },
  { icon: "/assets/icons/icons8-bootstrap.svg", alt: "Bootstrap" },
  { icon: "/assets/icons/icons8-tailwindcss.svg", alt: "Tailwind-css" },
];

function Skill() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 xl:mx-5">
      {icons.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center rounded-lg bg-slate-200 dark:bg-blue-950 shadow-md text-white w-[100px] h-[100px] max-w-[100px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer m-2"
        >
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger>
                <img src={item.icon} alt={item.alt} />
              </TooltipTrigger>
              <TooltipContent>
                <p
                  className={`${courierPrime.className} border rounded-[5px] py-[2px] px-3 transition duration-500 dark:bg-gray-200 bg-gray-500 text-black`}
                >
                  {item.alt}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ))}
    </div>
  );
}

export default Skill;
