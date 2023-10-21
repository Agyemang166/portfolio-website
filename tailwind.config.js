/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titleFonts : ['Great Vibes',' sans-serif'],
        h1Fonts : ['Lato',' sans-serif'],
        pFonts: ['Young Serif', 'serif'],
        Fonts:['Barlow Condensed', 'sans-serif']
      },
      colors: {
        bodyColor: '#4CC790',
      },
      boxShadow: {
        shadowOne: "1px 4px 1px #1c1e22, -5px -5px 1px #262a2e",
      },
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },
    },
  },
  plugins: [],
}

