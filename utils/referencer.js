import postcss from "postcss"
import path from "path"

// PostCSS plugin for wrapping matching CSS files in a cascade layer
export const referencer = ({ fileNameMatcher, referencePath } = {}) => ({
  postcssPlugin: "postcss-referencer",
  Once(root) {
    // Ignore files that don't match the file matcher
    if (!fileNameMatcher?.test(root.source.input.file)) {
      return
    }

    const relativeReferencePath = path.relative(
      path.dirname(root.source.input.file),
      referencePath,
    )

    // Create a references rule
    const referenceRule = postcss.atRule({
      name: "reference",
      params: `"${relativeReferencePath}"`,
    })

    // Prepend references rule
    root.prepend(referenceRule)
  },
})
