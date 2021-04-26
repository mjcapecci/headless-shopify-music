module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-blue-800': '#243B53',
        'dark-blue-900': '#102A43',
        'modal-backdrop': 'rgba(0, 0, 0, 0.94)',
        'nav-active-modal': '#444',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
