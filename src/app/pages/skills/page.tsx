import React from "react";
import { IconCloud } from "@/app/components/magicui/icon-cloud";
import { Source_Code_Pro } from "next/font/google";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const slugs = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "tailwind",
  "git",
  "github",
  "vercel",
  "netlify",
  "python",
  "flask",
  "mysql",
  "mongodb",
  "nodejs",
  "docker",
];

function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section id="skills" className="relative">
      <h1
        className={`${sourceCodePro.className} w-full text-center text-[50px] font-bold leading-tight items-center`}
      >
        Skills
      </h1>
      <div className="flex flex-col xl:flex-row justify-center gap-20 items-center p-12">
        <div className="scale-150 xl:scale-[200%]">
          <IconCloud images={images}/>
        </div>
        <h3>hsjdnajsi</h3>
      </div>
    </section>
  );
}

export default Skills;
