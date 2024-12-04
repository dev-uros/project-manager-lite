/** @type {import('tailwindcss').Config} */
import primeUIPlugin from 'tailwindcss-primeui'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [primeUIPlugin],
}
