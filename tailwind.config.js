/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
      extend: {
         fontFamily: {
          'bodoni': ['"Bodoni Moda"', 'cursive'],
          'bodoni-cursive': ['"Bodoni Moda"', 'cursive'],
        },
        colors: {
          'sage-canopy': '#989069',
          'honey-reed': '#cec19f',
          'porcelain-haze': '#cec19e',
          'coral-dust': '#c28573',
          'plum-husk': '#814b4b',
          //
          'pink': '#e5c5c1',
          'blush': '#f4e1e0',
          'salmon-pink': '#bf897f',
          'soft-sandstone': '#dac2b2',
          'pearl': '#F5F1E8',
          'charcoal': '#5E5C6C'
        },
         dropShadow: {
          'depth': [
            '0 1px 1px rgb(0 0 0 / 0.3)'
          ],
      },
      },
    },
  plugins: [],
}

