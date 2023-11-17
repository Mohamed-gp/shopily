/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container :{
        center: true,
      },
      colors:{
        "maingreen" : "#00b207",
        "bodybg" : "#F2F2F2",
      }
    },
  },
  plugins: [],
}
