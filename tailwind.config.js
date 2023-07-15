/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
    },
    fontFamily: {
      inter: "Inter, sans-serif",
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
