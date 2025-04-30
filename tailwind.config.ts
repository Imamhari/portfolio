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
      keyframes: {
        bounceDot: {
          '0%, 100%': {
            transform: 'translateY(0)',
            opacity: "0",
          },
          '30%': {
            transform: 'translateY(-0.3rem)',
            opacity: "1",
          },
          '60%': {
            transform: 'translateY(0)',
            opacity: "1",
          },
        },
      },
      animation: {
        'bounce-dot-1': 'bounceDot 1.5s infinite',
        'bounce-dot-2': 'bounceDot 1.5s infinite 0.2s',
        'bounce-dot-3': 'bounceDot 1.5s infinite 0.4s',
      },
    },
  },
  plugins: [],
};
export default config;
