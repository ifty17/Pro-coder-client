/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#99e25d",

          secondary: "#0460d8",

          accent: "#7783dd",

          neutral: "#201A2D",

          "base-100": "#2E2C44",

          info: "#1B90E4",

          success: "#0E713E",

          warning: "#F0B351",

          error: "#F86388",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
