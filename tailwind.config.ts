import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#002E7A",
        bridge: "#1FAF38",
        ink: "#071426"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(7, 20, 38, 0.12)"
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
