import { Courier_Prime } from "next/font/google";
import { FaDownload } from "react-icons/fa6";

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function DownloadCv() {
  return (
    <button
      className="rounded-md bg-slate-800 py-2 px-4 w-[20vh] border border-orange-600 flex justify-center text-center text-sm text-white transition-all shadow-md hover:shadow-[inset_0_6px_10px_rgb(251,140,0)] focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  "
      type="button"
    >
      <a
        href="https://drive.google.com/file/d/1QRviB9ZOqSb3oKQtgyqd-LNACybvs8j4/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className={`${courierPrime.className} text-[15px] font-medium text-[#e9e9e9] hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500 flex  items-center gap-3`}
      >
        Download CV
        <FaDownload size={20} className="ml-1" />
      </a>
    </button>
  );
}

export default DownloadCv;
