/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
      extend: {
         fontFamily: {
          'comfortaa': ['Comfortaa', 'sans-serif'],
        },
        colors: {
          'sage-canopy': '#989069',
          'honey-reed': '#cec19f',
          'porcelain-haze': '#cec19e',
          'coral-dust': '#c28573',
          'plum-husk': '#814b4b',
        },
         dropShadow: {
          'depth': [
            '0 4px 4px rgb(0 0 0 / 0.3)',
            '0 4px 4px rgb(0 0 0 / 0.2)'
          ],
      },
      },
    },
  plugins: [],
}

