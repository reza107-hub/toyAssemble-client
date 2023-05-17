/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: [
      {
        colors: {

          "Emphasis": "#FF4081",
          "Links": "#FF5722",
          "Headings": "#00BCD4",
          "Text": "#212121",
          "Borders": "#FFD600",
        },
      },
    ],

  },
  plugins: [require("daisyui")],
}

