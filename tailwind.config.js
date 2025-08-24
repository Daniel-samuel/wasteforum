/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        'lufga': ['Lufga', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'sans': ['Lufga', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      width: {
        84: "350px",
      },

      height: {
        97: "700px",
      },
    },
  },
  plugins: [],
};
