/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      accentColor: {
        "accent-red": "#7B2A21",
      },
    },
  },
  plugins: [require("tailwind-children"), require("@tailwindcss/typography")],
}
