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
          "primary": "#FF4081",
          "secondary": "#FF5722",
          "accent": "#00BCD4",
          "neutral": "#212121",
          "info": "#FFD600",
        },
      },
    ],

  },
  plugins: [require("daisyui")],
}

