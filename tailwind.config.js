/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#7D7D7D",
        "light-gray": "#E5E5E5",
        "almost-white": "#F3F3F3",
      },
      fontFamily: {
        custom: ["Libre Baskerville", "sans-serif"],
      },
      fontSize: {
        "9xl": ["12.5rem", "9.375rem"],
        "6xl": ["3.5rem", "4rem"],
        "4xl": ["1.5rem", "1.8125rem"],
        "3xl": ["1.125rem", "1.375rem"],
        "2xl": [".9375rem", "1.1875rem"],
        xl: [".875rem", "1.75rem"],
        lg: [".8125rem", "1.0625rem"],
        base: [".75rem", ".9375rem"],
        sm: ".625rem",
        xs: [".5625rem", ".5rem"],
      },
      letterSpacing: {
        widest: ".15625em",
        wider: ".13393em",
        wide: ".125em",
      },
      backdropOpacity: {
        75: ".7546",
      },
      padding: {
        "29px": "29px",
        "27px": "27px",
        "23px": "23px",
      },
      margin: {
        "100px": "6.25rem",
      },
      inset: {
        "410px": "25.625rem",
      },
      height: {
        1325: "82.8125rem",
      },
      maxWidth: {
        445: "27.8125rem",
        350: "21.875rem",
        310: "19.375rem",
      },
      maxHeight: {
        235: "14.6865rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
