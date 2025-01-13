import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'rgba(var(--color-primary))',
        secondary: 'rgba(var(--color-secondary))',
        'dark-blue': 'rgba(var(--color-dark-blue))',

        'main-bg': 'rgba(var(--color-main-bg))',
      },
    },
  },
  darkMode: 'selector',
};
