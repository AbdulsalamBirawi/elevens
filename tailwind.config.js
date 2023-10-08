/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primery: "#495843",
        primeryLight: "#849679",
        secondary: "#e3dccc",
        tertiary: "#A29585",
        gray1: "#333333",
        gray4: "#BDBDBD",
      },
      backgroundColor: {
        "pagination-dot-color": "#79A379", // Change to your desired color
      },
      gradientColorStops: {
        "primery-black": "var(--primery-color), black", // Replace '--primary-color' with your primary color
      },
      fontFamily: {
        Aeulis: "Aeulis Alt Medium",
        Copperplate: "Copperplate Gothic BT",
      },
    },
  },
  plugins: [],
};
