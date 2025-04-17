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
  { icon: "/assets/icons/icons8-visual-studio.svg", alt: "Visual-studio" },
  { icon: "/assets/icons/icons8-github.svg", alt: "Github" },
  { icon: "/assets/icons/icons8-git.svg", alt: "Git" },
  { icon: "/assets/icons/icons8-command-line-50.png", alt: "Command-line" },
  { icon: "/assets/icons/icons8-npm.svg", alt: "Npm" },
  { icon: "/assets/icons/icons8-trello.svg", alt: "Trello" },
  { icon: "/assets/icons/icons8-postman-inc-70.png", alt: "Postman" },
  { icon: "/assets/icons/icons8-figma.svg", alt: "Figma" },
];

function Tools() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 xl:mx-5">
      {icons.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-[100px] h-[100px] bg-slate-200 dark:bg-blue-950 rounded-lg shadow-lg text-white max-w-[100px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer m-2"
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

export default Tools;
