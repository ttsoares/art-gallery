// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,jsx,ts,tsx,css}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        bsd: ["bsd", "sans-serif"],
        outf: ["outf", "sans-serif"],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
      colors: {
        p_orange: "rgb(213, 150, 108)",
        p_dark: "rgb(21, 21, 21)",
        p_gray: "rgb(68, 68, 68)",
      },
    },
  },
  variants: {},
  plugins: [],
};
