const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),

      backgroundColor: '#F8F8F8',
      backgroundColorPink: '#4361EE',
      inputColor: '#1B263B',
      textColor: '#1B263B',
    }),
    colors: (theme) => ({
      grayOne: '#757B86',
      grayTwo: '#F5F7FE',
      white: '#FFFFFF',
      textColor: '#1B263B',
      backgroundColorPink: '#4361EE',
    }),
  },

  plugins: [nextui()],
};
