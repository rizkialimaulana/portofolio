/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "ltr-linear-infinite": "move-bg 10s linear infinite",
      },
      keyframes: {
        "move-bg": {
          "0%": { "background-position": "0 0" },
          "100%": { "background-position": "256px 0" },
        },
      },
      fontFamily: {
        Vogue: ["Vogue", "sans-serif"],
        Conthrax: ["Conthrax", "sans-serif"],
        Louis: ["Louis", "sans-serif"],
        Stretch: ["Stretch", "sans-serif"],
        Barcelona: ["Barcelona", "sans-serif"],
      },
    },
    textFillColor: (theme) => theme("borderColor"),
    textStrokeColor: (theme) => theme("borderColor"),
    textStrokeWidth: (theme) => theme("borderWidth"),
    paintOrder: {
      fsm: { paintOrder: "fill stroke markers" },
      fms: { paintOrder: "fill markers stroke" },
      sfm: { paintOrder: "stroke fill markers" },
      smf: { paintOrder: "stroke markers fill" },
      mfs: { paintOrder: "markers fill stroke" },
      msf: { paintOrder: "markers stroke fill" },
    },
  },

  variants: {
    textFillColor: ["responsive"],
    textStrokeColor: ["responsive"],
    textStrokeWidth: ["responsive"],
    paintOrder: ["responsive"],
  },
  plugins: [
    require("tailwindcss-text-fill-stroke")(),
    require("tailwind-scrollbar"),
  ],
};
