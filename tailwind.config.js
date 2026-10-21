/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--ink) / <alpha-value>)',
        teal: 'rgb(var(--teal) / <alpha-value>)',
        'teal-deep': '#0b5d57',
        mint: 'rgb(var(--mint) / <alpha-value>)',
        paper: 'rgb(var(--paper) / <alpha-value>)',
        soft: 'rgb(var(--soft) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        deep: 'rgb(var(--deep) / <alpha-value>)',
        line: 'rgb(var(--line) / 0.14)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}
