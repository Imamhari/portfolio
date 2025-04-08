import { FaDownload } from "react-icons/fa6";

function DownloadCv() {
  return (
    <button
      className="rounded-md bg-slate-800 py-2 px-4 border border-orange-600 text-center text-sm text-white transition-all shadow-md hover:shadow-[inset_0_6px_10px_rgb(251,140,0)] focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  "
      type="button"
    >
      <a
        href="https://docs.google.com/document/d/1LMTTMo8XyKlVlLvghRihS9RzjaJJ_9u0/edit?usp=drive_link&ouid=115166616640608674343&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-[#e9e9e9] hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-500 flex justify-center gap-3"
      >
        Download CV
        <FaDownload size={20} className="ml-1" />
      </a>
    </button>
  );
}

export default DownloadCv;
