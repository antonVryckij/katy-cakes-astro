import prelinePlugin from 'preline/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {},
  },
  plugins: [prelinePlugin],
};
