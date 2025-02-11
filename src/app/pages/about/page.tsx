import React from "react";
import Experiences from '@/app/components/Experiences';
import Education from "@/app/components/Education";
import GithubContributions from '@/app/components/GithubContributions';

function About() {
  return (
    <section id="about" className="flex p-[70px] pt-[50px] md:mx-[7vh]  text-black dark:text-white flex-col space-y-5 relative ">
      <h1 className="w-full text-center text-[50px] font-bold leading-tight items-center ">
        About Me
      </h1>
      <p className="py-7 font-semibold text-md text-justify">
        Hi there!👋🏼 I&apos;m Imam Hari Maulana, I&apos;m currently living in
        Bekasi, Indonesia. I am a software engineer with a solid foundation in
        problem-solving, attention to detail, and a high commitment to
        delivering quality solutions. My background as a machine operator has
        equipped me with a unique perspective on workflow optimization and the
        ability to perform under pressure—skills I now apply to software
        development. After completing intensive training at RevoU, I gained
        expertise in JavaScript, TypeScript, React JS, Next JS, Python, Flask,
        and MySQL, enabling a smooth transition into software engineering. With
        a combination of technical expertise, analytical thinking, and strong
        collaboration skills, I am ready to tackle challenges in any software
        project. My dedication to user-centered design and process optimization
        drives my desire to contribute meaningfully to innovative and
        technology-driven companies.
      </p>
      <div className="flex flex-col gap-10">
        <Experiences/>
        <GithubContributions/>
        <Education/>
      </div>
    </section>
  );
}

export default About;
