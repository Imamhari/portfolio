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
        '3xl': '2000px', // custom breakpoint untuk layar ekstra besar
      },
      boxShadow: {
        shadowLeftDark: "4.1px -5px 0 0 rgb(9, 12, 44)",
        shadowRightDark: "-4.1px -5px 0 0 rgb(9, 12, 44)",
        shadowLeftLight: "4.1px -5px 0 0 rgb(233, 233, 233)",
        shadowRightLight: "-4.1px -5px 0 0 rgb(233, 233, 233)",
      },
    },
  },
  plugins: [],
};
export default config;
