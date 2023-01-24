/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js, jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'rich-blue': '#333078',
        'deep-blue': '#13112E',
        'brown-medium': '#5A544D',
        'light-medium': '#EEEEEE'
      },
      maxHeight: { '640': '40rem' },
      width: {
        '1399': '1399px'
      }
    }
  },
  plugins: []
}
