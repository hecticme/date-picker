/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus'])
    })
  ],
};
