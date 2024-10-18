/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       colors: {
        primary: "#10151f",
        secondary: "#475467",
        accent: {
          DEFAULT: "#7edad2",
          hover: "#79d3cc",
        },
       },
      },
    },
  },
  plugins: [],
};
