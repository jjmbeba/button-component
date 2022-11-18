/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':'Poppins',
        'noto':'Noto Sans JP',
        'ubuntu':'Ubuntu Mono'
      },
      boxShadow:{
        'default':'0px 2px 3px rgba(51, 51, 51, 0.2)'
      }
    },
  },
  plugins: [],
}
