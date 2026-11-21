/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      keyframes: {
        string: {
          "0%, 100%": { transform: "translateY(-50%)" },
          "15%": { transform: "translateY(calc(-50% + 2px))" },
          "30%": { transform: "translateY(calc(-50% - 2px))" },
          "45%": { transform: "translateY(calc(-50% + 1px))" },
          "60%": { transform: "translateY(calc(-50% - 1px))" },
        },
      },
      animation: {
        string: "string 0.6s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
