/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        'custom': '15px 15px 20px 20px rgba(0,0,0,0.1),inset 15px 15px 10px 20px rgba(0,0,0,0.1),inset -15px -15px 37px 0px rgba(200,200,200,0.1),-15px -15px 40px 0px rgba(200,200,200,0.1);'
      }
    },
    colors: {
      primary: "#1E2140",
      white: "#FCFCFC",
      black: "#171717"
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    },
  },
  plugins: [],
}

