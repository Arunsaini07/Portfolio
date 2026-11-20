/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        obsidian: {
          950: '#09090B',
          900: '#111114',
          850: '#16161B',
          800: '#1D1D23',
        },
        alabaster: {
          50: '#F6F5F2',
          100: '#ECEAE4',
          200: '#DFDCD4',
        },
        copper: {
          400: '#F09A5E',
          500: '#D97736',
          600: '#B85B20',
        },
      },
    },
  },
  plugins: [],
}
