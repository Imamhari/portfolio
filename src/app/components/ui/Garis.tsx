import { LoaderPinwheel } from "lucide-react";

export default function Garis() {
  return (
    {/* Icon */}
          <div className="relative flex flex-col items-center">
            <LoaderPinwheel className="text-orange-500 w-8 "/>
            {/* Garis */}
            <div
              className="w-[4px] h-[300px] bg-gradient-to-b from-orange-500 to-transparent"
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }}
            ></div>
            
          </div>
  )
}