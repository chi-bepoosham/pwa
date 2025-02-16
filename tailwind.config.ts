import {heroui} from "@heroui/react";






export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'us': '320px',
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1680px',
        '4xl': '1920px',
        '5xl': '2250px',
        '6xl': '2500px',
        '7xl': '2750px',
        '8xl': '3000px',
      }
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#FBFCFF",
            foreground: "#000000",
            primary: {
              DEFAULT: "#4141F9",
              50: "rgba(65,65,249,0.1)",
              100: "rgba(65,65,249,0.2)",
              200: "rgba(65,65,249,0.3)",
              300: "rgba(65,65,249,0.4)",
              400: "rgba(65,65,249,0.5)",
              500: "rgba(65,65,249,0.6)",
              600: "rgba(65,65,249,0.7)",
              700: "rgba(65,65,249,0.8)",
              800: "rgba(65,65,249,0.9)",
              900: "rgba(65,65,249,1)",
            },
            secondary: {
              DEFAULT: "#0C0D11",
              50: "rgba(12,13,17,0.1)",
              100: "rgba(12,13,17,0.2)",
              200: "rgba(12,13,17,0.3)",
              300: "rgba(12,13,17,0.4)",
              400: "rgba(12,13,17,0.5)",
              500: "rgba(12,13,17,0.6)",
              600: "rgba(12,13,17,0.7)",
              700: "rgba(12,13,17,0.8)",
              800: "rgba(12,13,17,0.9)",
              900: "rgba(12,13,17,1)",
            },
          },
        },
        dark: {
          colors: {
            background: "#0C0E16",
            foreground: "#000000",
            primary: {
              DEFAULT: "rgba(72,72,255,1)",
              50: "rgba(72,72,255,0.1)",
              100: "rgba(72,72,255,0.2)",
              200: "rgba(72,72,255,0.3)",
              300: "rgba(72,72,255,0.4)",
              400: "rgba(72,72,255,0.5)",
              500: "rgba(72,72,255,0.6)",
              600: "rgba(72,72,255,0.7)",
              700: "rgba(72,72,255,0.8)",
              800: "rgba(72,72,255,0.9)",
              900: "rgba(72,72,255,1)",
            },
            secondary: {
              DEFAULT: "rgba(255,159,52,1)",
              50: "rgba(255,159,52,0.1)",
              100: "rgba(255,159,52,0.2)",
              200: "rgba(255,159,52,0.3)",
              300: "rgba(255,159,52,0.4)",
              400: "rgba(255,159,52,0.5)",
              500: "rgba(255,159,52,0.6)",
              600: "rgba(255,159,52,0.7)",
              700: "rgba(255,159,52,0.8)",
              800: "rgba(255,159,52,0.9)",
              900: "rgba(255,159,52,1)",
            },
          },
        },
      },
    }),
  ],
};
