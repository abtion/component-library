import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks"

import {
  addContrastColors,
  getColorVariables,
} from "@abtion-oss/design-system-colors"
import colors from "../colors.json"
import MuffibookTheme from "./MuffibookTheme"
import SourceLinks from "./SourceLinks"

const cssRoot = document.querySelector(":root")
const cssVariables = getColorVariables(addContrastColors(colors))

Object.entries(cssVariables).forEach(([name, value]) =>
  cssRoot.style.setProperty(name, value)
)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: MuffibookTheme,
    source: {
      state: "open",
    },
    page: () => (
      <>
        <Title />
        <SourceLinks />
        <Subtitle />
        <Description />
        <Primary />
        <Controls />
        <Stories />
      </>
    ),
  },
}
