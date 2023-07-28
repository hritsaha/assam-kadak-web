/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'leaf-pattern':"url('../src/images/leaf_pattern.jpg')",
        'poster-item':"url(../src/images/poster_item.png)"
      },
      fontFamily:{
        'inter' : [ 'Inter Tight', 'sans-serif']
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}

