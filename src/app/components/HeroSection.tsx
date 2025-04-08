"use client";
import { IBM_Plex_Mono, Courier_Prime, Merriweather } from 'next/font/google';
import { Typewriter } from "react-simple-typewriter";
import DownloadCv from './atoms/DownloadCv';
import SocialMedia from './atoms/SocialMedia';
import StatsCard from './atoms/StatsCard';


const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '700'] })
const courierPrime = Courier_Prime({ subsets: ['latin'], weight: ['400', '700'] })
const merriWeather = Merriweather({ subsets: ['latin'], weight: ['400', '700'] })
const HeroSection = () => {
  return (
    <section className="flex xl:pt-[150px]  space-x-5 text-black dark:text-white px-3 relative  ">
  <div className="flex flex-col gap-6 max-w-2xl">
    <h1 className={`${ibmPlexMono.className} text-[50px] font-bold leading-tight`}>
      Hey, I&apos;m <span className="text-orange-500">Imam Hari</span>
    </h1>
    <h2 className={`${courierPrime.className} text-3xl font-medium text-gray-700 dark:text-gray-300`}>
      I&apos;m a{" "}
      <span className="text-orange-600 font-semibold">
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
    <p className={`${merriWeather.className} text-lg text-black dark:text-white text-justify font-bold`}>
    &quot;I don’t just write code; I build interactive and efficient digital experiences. With a passion for innovation, I create modern, responsive interfaces focused on user comfort and seamless functionality.&quot;
    </p>
    <div className="flex flex-col space-y-3 items-center md:items-start">
    <SocialMedia/>
    <DownloadCv/>
    <StatsCard/>
    </div>
  </div>
  
</section>

  );
};

export default HeroSection;
