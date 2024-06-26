const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./nuxt.config.ts", "./content/**/*.md"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
          },
        },
      },
      backgroundImage: {
        hero: "url('/hero-bg.svg')",
        features: "url('/hero-bg.svg')",
        "footer-left": "url('/footer-left.svg')",
        "footer-right": "url('/footer-right.svg')",
      },
      fontFamily: {
        sans: ["Graphik", ...defaultTheme.fontFamily.sans],
        serif: ["Georgia", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        rmblue: {
          50: "#edf9ff",
          100: "#d6efff",
          200: "#b5e6ff",
          300: "#83d8ff",
          400: "#48c0ff",
          500: "#1e9eff",
          600: "#067fff",
          700: "#006bff",
          800: "#0852c5",
          900: "#0d489b",
          950: "#0e2c5d",
        },
        rmwhite: {
          50: "#f4f2ff",
          100: "#eeecff",
          200: "#d8d4ff",
          300: "#bbb2ff",
          400: "#9a86ff",
          500: "#7a55fd",
          600: "#6931f6",
          700: "#5b20e1",
          800: "#4b1abd",
          900: "#40179b",
          950: "#250c69",
        },
        rmgray: {
          50: "#f7f7f7",
          100: "#e6e6e6",
          200: "#dfdfdf",
          300: "#c8c8c8",
          400: "#adadad",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
