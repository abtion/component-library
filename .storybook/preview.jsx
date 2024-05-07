import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks"

import prepareColorVariables from "../utils/prepareColorVariables"
import colors from "../colors.json"
import MuffibookTheme from "./MuffibookTheme"
import SourceLinks from "./SourceLinks"

const cssRoot = document.querySelector(":root")
const cssVariables = prepareColorVariables(colors).cssVariables

Object.entries(cssVariables).forEach(([name, value]) =>
  cssRoot.style.setProperty(name, value)
)

export const parameters = {
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
