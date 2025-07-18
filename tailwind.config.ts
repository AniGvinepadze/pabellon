import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#EBE5D3",
        secondaryTextColor: "#37292B",
      },
      screens: {
        "max-1400": {
          max: "1400px",
        },
        "max-1350": {
          max: "1350px",
        },
        "max-1250": {
          max: "1250px",
        },
        "max-1100": {
          max: "1250px",
        },
        "max-1200": {
          max: "1200px",
        },
        "max-1150": {
          max: "1150px",
        },

        "max-1050": {
          max: "1050px",
        },
        "max-1000": {
          max: "1000px",
        },
        "max-950": {
          max: "950px",
        },
        "max-900": {
          max: "900px",
        },
        "max-850": {
          max: "850px",
        },
        "max-800": {
          max: "800px",
        },
        "max-750": {
          max: "750px",
        },
        "max-700": {
          max: "700px",
        },
        "max-650": {
          max: "650px",
        },
        "max-600": {
          max: "600px",
        },
        "max-550": {
          max: "550px",
        },
        "max-500": {
          max: "500px",
        },
        "max-450": {
          max: "450px",
        },
        "max-400": {
          max: "400px",
        },
        "max-350": {
          max: "350px",
        },
        "max-300": {
          max: "300px",
        },
      },
      backgroundImage: {
        hero: "url('/assets/WALNUT2.png')",
        ilialake: "url('/assets/ILIA-LAKE 1.svg')",
        footerBg: "url('/assets/32.svg')",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        serif: ["var(--font-noto-serif)"],
      },
    },
  },
  plugins: [],
};
export default config;
