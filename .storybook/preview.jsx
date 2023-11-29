import { Title, Subtitle, Description, Primary, Controls, Stories, DocsContext } from '@storybook/blocks';

import prepareColorVariables from "../utils/prepareColorVariables"
import colors from "../colors.json"
import MuffibookTheme from "./MuffibookTheme"
import { useContext } from 'react';


const cssRoot = document.querySelector(":root")
const cssVariables = prepareColorVariables(colors).cssVariables

Object.entries(cssVariables).forEach(([name, value]) =>
  cssRoot.style.setProperty(name, value)
)

const SourceLink = () => {
  const { attachedCSFFile: { meta: { component } } } = useContext(DocsContext)

  console.log(useContext(DocsContext))

  if (!component) {
    return null
  }

  const { name } = component

  return (
    <>
      <h3>Sources</h3>
      <ul>
        <li><a href={`https://github.com/abtion/component-library/blob/main/components/${name}/index.tsx`} target="_BLANK">TS</a></li>
        <li><a href={`https://github.com/abtion/component-library/blob/main/components/${name}/index.scss`} target="_BLANK">CSS</a></li>
        <li><a href={`https://github.com/abtion/component-library/blob/main/components/${name}/index.test.tsx`} target="_BLANK">Tests</a></li>
      </ul>
    </>
  )
}

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
    page: (...args) => (
      <>
        <Title />
        <SourceLink />
        <Subtitle />
        <Description />
        <Primary />
        <Controls />
        <Stories />
      </>
    ),
  },
}
