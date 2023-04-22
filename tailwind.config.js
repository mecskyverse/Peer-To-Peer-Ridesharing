/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: ["index.html",
    "./src/**/*.{jsx, tsx, js, ts}"],
  theme: {
    extend: {
      colors: {
        'project-black': '#080609',
        'logo-white': '#F7E9E9',
        'nav-white':'#E1CACA'
      }
    },
  },
  plugins: [],
}

