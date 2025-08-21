import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Nature-inspired color palette for biophilic design
        sage: {
          25: '#fafbf9',
          50: '#f7f9f5',
          100: '#eff3ea',
          200: '#dce6d1',
          300: '#c3d3b0',
          400: '#a5bc87',
          500: '#88a164',
          600: '#6d844c',
          700: '#56683d',
          800: '#465535',
          900: '#3c482e',
        },
        earth: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8dcc9',
          300: '#d7c4a1',
          400: '#c4a573',
          500: '#b4904f',
          600: '#a67c42',
          700: '#8a6537',
          800: '#715331',
          900: '#5d452a',
        },
        forest: {
          50: '#f0f7f4',
          100: '#dcede3',
          200: '#bbdcc9',
          300: '#8fc4a7',
          400: '#5fa680',
          500: '#3d8b63',
          600: '#2b714e',
          700: '#235a40',
          800: '#1e4835',
          900: '#1a3c2d',
        },
        stone: {
          50: '#f8f8f7',
          100: '#efeeec',
          200: '#dddbd6',
          300: '#c8c4bb',
          400: '#b1ab9e',
          500: '#9c9485',
          600: '#8c8275',
          700: '#756d62',
          800: '#615a52',
          900: '#524c45',
        },
        moss: {
          50: '#f6f8f4',
          100: '#eaf0e5',
          200: '#d6e2cd',
          300: '#b7cea8',
          400: '#94b37d',
          500: '#749758',
          600: '#597943',
          700: '#476038',
          800: '#3b4e30',
          900: '#32422a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
export default config