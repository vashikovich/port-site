import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gray/100': '#0A0A0A',
        'gray/90': '#424242',
        'gray/80': '#616161',
        'gray/70': '#757575',
        'gray/60': '#9E9E9E',
        'gray/50': '#C2C2C2',
        'gray/40': '#E0E0E0',
        'gray/30': '#EDEDED',
        'gray/20': '#F5F5F5',
        'gray/10': '#FFFFFF',
        'primary-main': '#3B24AD'
      }
    },
  },
  plugins: [],
};
export default config;
