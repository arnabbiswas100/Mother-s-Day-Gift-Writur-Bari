/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["'Cormorant Garamond'", "serif"],
        playfair: ["'Playfair Display'", "serif"],
        noto: ["'Noto Serif Bengali'", "serif"],
      },
      colors: {
        spring: { light: "#e8f5e2", mid: "#c8e6c1", dark: "#4a7c59" },
        monsoon: { light: "#2d3a4a", mid: "#1a2535", dark: "#0d1520" },
        autumn: { light: "#f5e6d0", mid: "#d4956a", dark: "#7a4a2a" },
        winter: { light: "#f0f4f8", mid: "#d8e4ec", dark: "#8a9db5" },
      },
    },
  },
  plugins: [],
};
