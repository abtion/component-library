import postcss from "postcss"

// PostCSS plugin for wrapping matching CSS files in a cascade layer
export const cascadeLayerPrefixer = ({ fileNameMatcher, layerName } = {}) => ({
  postcssPlugin: "postcss-layer",
  Once(root) {
    // Ignore files that don't match the file matcher
    if (!fileNameMatcher?.test(root.source.input.file)) {
      return
    }

    // Create a new layer rule
    const layerRule = postcss.atRule({ name: "layer", params: layerName })

    // Move all other rules into the layer rule
    root.each((node) => {
      // Only actual rules (not atrules)
      if (node.type === "rule") {
        layerRule.append(node)
      }
    })

    // Append layer rule
    root.append(layerRule)
  },
})
