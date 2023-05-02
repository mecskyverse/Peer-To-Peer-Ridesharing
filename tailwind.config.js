/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: ["index.html",
    "./src/**/*.{jsx, tsx, js, ts}"],
  theme: {
    extend: {
      colors: {
        'project-black': '#080609',
        'logo-white': '#F7E9E9',
        'nav-white':'#E1CACA',
        'Blockchain-feature-background':'#1A1A1A',
        'form-text':'#e52e71'
      }
    },
  },
  plugins: [],
}

