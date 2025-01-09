import prelinePlugin from 'preline/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [prelinePlugin],
};
