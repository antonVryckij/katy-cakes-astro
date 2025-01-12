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
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'dark-blue': 'var(--color-dark-blue)',

        'main-bg': 'var(--color-main-bg)',
      },
    },
  },
  darkMode: 'selector',
};
