const { getTailwindColors } = require("@abtion-oss/design-system-colors")
const colors = require("./colors.json")

module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx,scss,css}",
    "./stories/**/*.tsx",
    "./public/index.ejs",
    ".storybook/SourceLinks.jsx",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      transparent: "transparent",
      white: "white",
      black: "black",
      current: "currentColor",
      ...getTailwindColors(colors),
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
