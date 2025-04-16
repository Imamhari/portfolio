"use client";
import dynamic from "next/dynamic";
import {
  IBM_Plex_Mono,
  Courier_Prime,
  Source_Code_Pro,
} from "next/font/google";
import { Typewriter } from "react-simple-typewriter";
import DownloadCv from "@/app/components/atoms/DownloadCv";
import SocialMedia from "@/app/components/atoms/SocialMedia";
import StatsCard from "@/app/components/atoms/StatsCard";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Lanyard = dynamic(() => import("@/app/components/Lanyard/Lanyard"), {
  ssr: false,
  loading: () => <div></div>,
});

function Home() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex flex-col-reverse lg:flex-row items-center justify-between"
    >
      {/* Konten Halaman */}

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen relative">
        <div className=" w-full h-screen xl:w-auto items-center">
          <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
        </div>
        <div className="flex flex-col md:pt-[70px] xl:pt-[150px] text-black dark:text-white relative lg:mr-[10vh]">
          <div className="flex flex-col gap-6 xl:max-w-2xl w-full mx-auto  md:justify-center md:items-start ">
            <h1
              className={`${ibmPlexMono.className} text-4xl xl:text-5xl  font-bold leading-tight text-center md:text-left`}
            >
              Hey, I&apos;m <span className="text-orange-500">Imam Hari</span>
            </h1>

            <h2
              className={`${courierPrime.className} text-lg md:text-3xl font-medium text-gray-700 dark:text-gray-300  text-left`}
            >
              I&apos;m a{" "}
              <span className="text-orange-600 font-semibold">
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "Web Developer",
                    "Software Engineer",
                    "Tech Enthusiast",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={150}
                  delaySpeed={2000}
                />
              </span>
            </h2>
            <p
              className={`${sourceCodePro.className} text-base md:text-lg text-black dark:text-white text-justify mx-auto xl:mx-0  font-bold`}
            >
              &quot;I don’t just write code, I build interactive and efficient
              digital experiences. With a passion for innovation, I create
              modern, responsive interfaces focused on user comfort and seamless
              functionality.&quot;
            </p>
            <div className="flex flex-col space-y-3 xl:items-start justify-center items-center w-full">
              <SocialMedia />
              <DownloadCv />
              <StatsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
