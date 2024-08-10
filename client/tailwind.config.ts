import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          Default:'#22B7DD',
          light:'#4EC5E4',
          dark:'#22B7DD',
        },
        secondary:{
          Default:'#22B7DD',
          light:'',
          dark:'',
        },
        neutral:{
          Default:'#22B7DD',
          light:'',
          dark:'',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "button-gradient": "linear-gradient(90deg, var(--tw-gradient-stops)",
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Menlo', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
