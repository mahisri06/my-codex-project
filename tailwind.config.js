/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#060816',
        panel: 'rgba(14, 24, 52, 0.72)',
        accent: '#8a8bff',
        cyan: '#46d5ff'
      },
      boxShadow: {
        glow: '0 12px 30px rgba(87, 101, 255, 0.24)'
      }
    }
  },
  plugins: []
};
