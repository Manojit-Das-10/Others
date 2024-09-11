module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1024px', // Laptop screens
      },
      colors: {
        'dark-bg': '#1e1e1e',
        'light-gray': '#9ca3af',
        'primary': 'rgba(255, 255, 255, 0.03)',  // Tailwind's default blue for accents
        'gray': 'rgba(54, 60, 67, 1)',
        'ultra-gray':'rgba(97, 97, 97, 0.82)',
        'deep-gray': 'linear-gradient(180deg, #373E44 -100%, #191B1F 100%)',
        
      },
      boxShadow: {
        'custom-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.33)',  // Custom shadow
      },
    },
  },
  plugins: [],
};
