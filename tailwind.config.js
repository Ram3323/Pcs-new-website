/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        katibeh: ['Katibeh', 'sans-serif'],
        marko: ['Marko One', 'sans-serif'],
        markazi: ['Markazi Text', 'serif'],
        merienda: ['Merienda One', 'cursive'],
      },
    },
  },
  plugins: [],
}

