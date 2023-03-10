/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      ivy: ['Gloock', 'serif'],
      tt: ['Raleway', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "#FF6600",
        secondary: "#C5B20A",
      },
    },
    screens: {
      sm: "360px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
