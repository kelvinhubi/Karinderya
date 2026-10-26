/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#F7EBE1",
        primaryText: "#1F1F1F",
        secondaryText: "#707070",
        accent: "#E04E0C",
        success: "#27AE60",
        warning: "#FFB703",
        danger: "#b10000ea",
      },
    },
  },
  plugins: [],
};
