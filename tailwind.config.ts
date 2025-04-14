import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        '2xl': '1536px', // sudah default, tapi kita definisikan eksplisit
        '3xl': '1800px', // custom breakpoint untuk layar ekstra besar
      },
    },
  },
  plugins: [],
};
export default config;
