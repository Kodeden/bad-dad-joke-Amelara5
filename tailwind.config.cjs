/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "dark-sienna": "#220901",
        "blood-red": "#621708",
        "dark-red": "#941B0C",
        rust: "#BC3908",
        "bright-yellow-crayola": "#F6AA1C",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
