import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          800: "#131B2E",
          700: "#1B2540",
        },
        navy: {
          DEFAULT: "#10192F",
        },
        accent: {
          DEFAULT: "#2954E5",
          50: "#EEF2FE",
          100: "#DCE4FD",
          200: "#B7C7FB",
          400: "#5A78EE",
          600: "#2245D0",
          700: "#1B37A8",
        },
        lavender: {
          DEFAULT: "#EDEBFB",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          soft: "#F7F8FC",
          mist: "#F1F3FA",
        },
        line: {
          DEFAULT: "#E4E7F0",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "Manrope",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1240px",
      },
      borderRadius: {
        xl2: "1.25rem",
        card: "1rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
