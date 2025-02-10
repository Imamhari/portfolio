"use client";
import { IBM_Plex_Mono } from 'next/font/google';
import { Typewriter } from "react-simple-typewriter";
import DownloadCv from './DownloadCv';


const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '700'] })

const HeroSection = () => {
  return (
    <section className="flex p-[30px] pt-[150px] space-x-5 text-black dark:text-white px-3 relative ">
  <div className="flex flex-col gap-6 max-w-2xl">
    <h1 className={`${ibmPlexMono.className} text-[50px] font-bold leading-tight`}>
      Hey, I&apos;m <span className="text-blue-500">Imam Hari</span>
    </h1>
    <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300">
      I&apos;m a{" "}
      <span className="text-blue-500 font-semibold">
        <Typewriter
          words={["Frontend Developer", "Web Developer", "Software Engineer", "Tech Enthusiast"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={150}
          deleteSpeed={150}
          delaySpeed={2000}
        />
      </span>
    </h2>
    <p className="text-lg text-gray-600 dark:text-gray-400 text-justify">
    &quot;I don’t just write code; I build interactive and efficient digital experiences. With a passion for innovation, I create modern, responsive interfaces focused on user comfort and seamless functionality.&quot;
    </p>
    <DownloadCv/>
  </div>
  
</section>

  );
};

export default HeroSection;
