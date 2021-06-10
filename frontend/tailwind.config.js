const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'media', // or 'media' or 'class' 
    theme: {
      container: {
        center: true,
      },
      extend: {
        colors: {
          "primary": "#141C2C",
          "accent": "#8b5bff"
        },
        spacing: {
          "navbar-height": "80px"
        }
      },
    },
    variants: {
      container: [],
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
};
