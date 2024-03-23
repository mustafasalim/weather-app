/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        product: {
          "blue-light": "#8FB2F5",
        },
        base: {
          white: "#ffffff",
          gray: {
            900: "#13131A",
            800: "#16161F",
            700: "#1C1C27",
            600: "#22222F",
            500: "#3B3B54",
            400: "#7F7F98",
            300: "#ABABC4",
            200: "#BFBFD4",
            100: "#FAFAFA",
          },
        },
      },
      fontSize: {
        "heading-hg": [
          "96px",
          {
            lineHeight: "100%",
            fontWeight: 800,
          },
        ],
        "heading-xl": [
          "48px",
          {
            lineHeight: "120%",
            fontWeight: 800,
          },
        ],
        "heading-lg": [
          "32px",
          {
            lineHeight: "140%",
            fontWeight: 700,
          },
        ],
        "heading-md": [
          "20px",
          {
            lineHeight: "140%",
            fontWeight: 700,
          },
        ],
        "heading-sm": [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: 700,
          },
        ],
        "heading-xs": [
          "14px",
          {
            lineHeight: "140%",
            fontWeight: 700,
          },
        ],
        lg: [
          "20px",
          {
            lineHeight: "140%",
            fontWeight: 600,
          },
        ],
        md: [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: 600,
          },
        ],
        sm: [
          "14px",
          {
            lineHeight: "140%",
            fontWeight: 600,
          },
        ],
        xs: [
          "12px",
          {
            lineHeight: "140%",
            fontWeight: 700,
          },
        ],
      },
      backgroundImage: {
        "home-background": "url('./images/home-background.png')",
      },
    },
  },
  plugins: [],
}
