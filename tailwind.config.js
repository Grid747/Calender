module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {

        '5xl': '0 25px 25px rgba(0, 0, 0, 0.60)',

      }

    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [],
};
