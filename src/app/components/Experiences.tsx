"use client";
import styles from "../styles/autoplaySlider.module.css";
const experiences = [
  {
    title: "Front End Engineer Associate(Project-Based) at RevoU",
    date: "Nov, 2024 - Present • 3 months",
    location: "Remote",
  },
  {
    title: "Machine Operator at Eihoukiki Co., Ltd",
    date: "Nov, 2020 - Nov, 2023 • 3 years",
    location: "Saitama, Japan",
  },
  {
    title: "Project Engineer at PT. Yokogawa Indonesia",
    date: "Jan, 2019 - Apr, 2019 • 3 months",
    location: "jakarta, Indonesia",
  },
  {
    title: "Front End Engineer Associate(Project-Based) at RevoU",
    date: "Nov, 2024 - Present • 3 months",
    location: "Remote",
  },
  {
    title: "Machine Operator at Eihoukiki Co., Ltd",
    date: "Nov, 2020 - Nov, 2023 • 3 years",
    location: "Saitama, Japan",
  },
  {
    title: "Project Engineer at PT. Yokogawa Indonesia",
    date: "Jan, 2019 - Apr, 2019 • 3 months",
    location: "jakarta, Indonesia",
  },
];

export default function Experiences() {
  return (
    <div className="w-full mx-auto">
  <h2 className="text-2xl font-bold mb-4 text-center">Experiences</h2>

  <div className={`${styles.slider} overflow-hidden relative`}>
    <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#e9e9e9]/100 via-transparent to-transparent dark:from-[#090c2c]/100  z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#e9e9e9]/100 via-transparent to-transparent dark:from-[#090c2c]/100 z-10 pointer-events-none" />
    <div className={`${styles.slidetrack} relative flex gap-4`}>
      {/* Looping semua experience dalam satu track */}
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`${styles.slide} border border-gray-600 p-4 rounded-lg shadow-lg bg-gray-300 dark:bg-gray-800 text-white w-[300px] h-auto flex-shrink-0`}
        >
          <h3 className="font-semibold text-lg truncate text-black dark:text-white">
            {exp.title}
          </h3>
          <p className="text-black dark:text-gray-300 text-sm">{exp.date}</p>
          <p className="text-black dark:text-gray-400 text-sm italic">
            {exp.location}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}
