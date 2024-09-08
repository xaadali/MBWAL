import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '0px',
        // => @media (min-width: 0px) { ... }

        'xm': '400px',
        // => @media (min-width: 400px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1440px',
        // => @media (min-width: 1280px) { ... }
        // lg1: "1440px",
        // => @media (min-width: 1100px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
        '4xl': '2100px',
        // => @media (min-width: 2100px) { ... }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        // CustomFont: ["Gmarket Sans"],
      },
      colors: {
        primary: "#3d83df",
        lightColor: "#FFFBA0",
        bgNavbar:"#FFFBA0",
        textColor:"#18191F",
        textDarkColor:"#3d83df",
        linearColorOne:"#3d83df",
        linearColorTwo:"#FFFDDB",
        linearColorThree:"#BAA732"
      },
      keyframes: {
        rotate: {
          "0%": {
            backgroundPosition: "0 0"
          },
          "50%": {
            backgroundPosition: "400% 0"
          },
          "100%": {
            backgroundPosition: "0 0"
          },
        },
        btnanimate: {
          "0%": {
            backgroundPosition: "0 0",
          },
          "100%": {
            backgroundPosition: "400%",
          }
        },
        CardBorderanimate: {
          "0%": {
            transform: "scaleX(0)",
            transformOrigin: "left"
          },
          "50%":
          {
            transform: "scaleX(1)",
            transformOrigin: "left",
          },
          "50.1%":
          {
            transform: "scaleX(1)",
            transformOrigin: "right"
          },
          "100%":
          {
            transform: "scaleX(0)",
            transformOrigin: " right"
          }
        }
      },
      animation: {
        borderAnimation: "rotate 20s linear infinite",
        buttonAnimation: "btnanimate 8s linear infinite",
        cardborderanimation: "CardBorderanimate 4s linear infinite"
      },
    },
  },
  plugins: [],
};
export default config;
