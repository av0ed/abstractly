import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./ui-component-library/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px", // max width 100%; padding 16px; columns 4; column gap 16px
      md: "768px", // max width 100%; padding 32px; columns 6; column gap 32px
      lg: "1440px", // max width 1280px; padding 32px; columns 12; column gap 32px
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-haze":
          "linear-gradient(148deg, #F9FAFB 8.89%, #D2D6DB 100.48%)",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
      },
      spacing: {
        "0.375": "1.5px",
      },
    },
  },
  plugins: [],
};
export default config;
