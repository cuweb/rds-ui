module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        'soft-red': '#f9e6e9',
        'soft-blue': '#e6f7ff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
