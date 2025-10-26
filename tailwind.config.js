import colors from 'tailwindcss/colors'

const primaryColor = colors.stone

/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,jsx,md,mdx}"
]

export const theme = {
  extend: {
    colors: {
      primary: {
        DEFAULT: primaryColor[600],
        "50": primaryColor[50],
        "100": primaryColor[100],
        "200": primaryColor[200],
        "300": primaryColor[300],
        "400": primaryColor[400],
        "500": primaryColor[500],
        "600": primaryColor[600],
        "700": primaryColor[700],
        "800": primaryColor[800],
        "900": primaryColor[900],
      }
    },
    // fontFamily: {
    //   'sans': ['Montserrat', 'sans-serif'],
    //   'serif': ['Playfair Display', 'serif'],
    // },
  },
}
export const plugins = [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
]
