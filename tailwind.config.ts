import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-ubuntu)"],
      },
      colors: {
        custom: {
          candy: {
            "50": "#fff2f9",
            "100": "#fed5ed",
            "200": "#fec1e4",
            "300": "#fea5d7",
            "400": "#fd93d0",
            "500": "#fd78c4",
            "600": "#e66db2",
            "700": "#b4558b",
            "800": "#8b426c",
            "900": "#6a3252",
          },
          lime: {
            "50": "#eaffe7",
            "100": "#beffb3",
            "200": "#9eff8f",
            "300": "#72ff5c",
            "400": "#57ff3c",
            "500": "#2dff0b",
            "600": "#29e80a",
            "700": "#20b508",
            "800": "#198c06",
            "900": "#136b05",
          },
          gum: {
            "50": "#efe6fd",
            "100": "#ceb0fa",
            "200": "#b78af7",
            "300": "#9654f4",
            "400": "#8133f1",
            "500": "#6200ee",
            "600": "#5900d9",
            "700": "#4600a9",
            "800": "#360083",
            "900": "#290064",
          },
          "blue-berry": {
            300: "#323842",
            600: "#151A2A",
            900: "#07061D",
          },
          background: "#030712",
          pistachio: "#D3FFCC",
          cream: "#E2DFCD",
          foam: "#D7DAE2",
        },
      },
    },
  },
  plugins: [],
};
export default config;
