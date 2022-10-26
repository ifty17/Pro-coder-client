/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#96b526",

          secondary: "#c969ef",

          accent: "#58d89f",

          neutral: "#31273F",

          "base-100": "#324552",

          info: "#94C5E6",

          success: "#78E3A6",

          warning: "#F6DA5A",

          error: "#F94380",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
