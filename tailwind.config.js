/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['"Great Vibes", serif'],
        poppins: ['"Poppins", serif'],
      },
    },
  },
  plugins: [],
};
