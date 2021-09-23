module.exports = {
  mode: 'jit',
  purge: ['../public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Roboto Mono',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
      ],
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
