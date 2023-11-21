/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "red",
        secondary: "white",
        "red-cake": "#e03444",
      },
      fontFamily: {
        serif: ["serif"],
      },
      fontSize: {
        "2xl": "12.5rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
