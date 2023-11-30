import { useContext } from "react"
import { DocsContext } from "@storybook/blocks"

export default function SourceLinks() {
  const {
    attachedCSFFile: {
      meta: { component, parameters: { sourceLinks } },
    },
  } = useContext(DocsContext)

  if (!component || !sourceLinks || !Object.keys(sourceLinks).length > 0) {
    return null
  }

  const { name } = component
  const sourcePrefix  = `https://github.com/abtion/component-library/blob/main/components/${name}`

  return (
    <>
      <h3>Sources</h3>
      <ul>
        {Object.entries(sourceLinks).map(([type, fileName]) => (
          <li><a href={`${sourcePrefix}/${fileName}`} target="_BLANK" style={{textTransform: "capitalize"}}>{type}</a></li>
        ))}
      </ul>
    </>
  )
}
