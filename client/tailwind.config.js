/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       screens: {
        "max-sm": { max: "375px" },
      },
    },
  },
  plugins: [
  require("tailwindcss-animate")
],

};
