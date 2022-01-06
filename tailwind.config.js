module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {backgroundImage: {

      'chronos': "url('/src/files/Chronos.png')"
    },
},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
