/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your custom brand names
        brand: {
          dark: '#0B0B0C',
          card: '#141416',
          gold: '#D4AF37',
          goldLight: '#F3E5AB',
        },
        // Adding 'primary' here immediately satisfies what globals.css is looking for
        primary: {
          500: '#F3E5AB', // This fixes focus:ring-primary-500 in image_e873ce.png
          600: '#D4AF37', // This fixes bg-primary-600
          700: '#AA8413', // This fixes hover:bg-primary-700
        }
      },
    },
  },
  plugins: [],
}