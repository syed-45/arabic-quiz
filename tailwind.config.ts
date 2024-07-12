import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        "fade-out": {
          "100%" : {opacity:"100%"},
          "0%" : {opacity:"0%"}
        },
        "slide-down" : {
          "100%" : {translate:"0 0",opacity:"100%"},
          "50%" : {opacity:"20%"},
          "0%" : {translate:"0 -30%",opacity:"0%"}
        },
      },
      animation: {
        "fade-out": "fade-out 1s",
        "slide-down": "slide-down 1s",
      },
    },
  },
  plugins: [],
}
export default config
