/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      vsm: "300px",
    },
    fontFamily: {
      inter: "Inter, sans-serif",
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        gray_b: "#D3D6DA",
      },
      colors: {
        gen: "#D3D6DA",
      },
      backgroundColor: {
        blackDis: "#efefef4d",
        whiteDis: "#fff",
      },
    },
  },
  plugins: [],
};
