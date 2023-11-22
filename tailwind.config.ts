import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a855f7",
          secondary: "#22d3ee",
          accent: "#fde047",
          neutral: "#e5e7eb",
          "base-100": "#1c1917",
          info: "#93c5fd",
          success: "#86efac",
          warning: "#fef08a",
          error: "#fb7185",
        },
      },
    ],
  },

  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
export default config;
