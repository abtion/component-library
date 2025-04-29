import { getTailwindColors } from "@abtion-oss/design-system-colors"
import colors from "./colors.json"
import aspectRatio from "@tailwindcss/aspect-ratio"

export const content = [
  "./components/**/*.{js,jsx,ts,tsx,scss,css}",
  "./stories/**/*.tsx",
  "./public/index.ejs",
  ".storybook/SourceLinks.jsx",
]
export const theme = {
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
}
export const plugins = [aspectRatio]
