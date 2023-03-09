/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        "bounce-once": "error-bounce 0.3s linear forwards",
      },
      keyframes: {
        "error-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10%)" },
        },
      },
    },
  },
  plugins: [],
};
