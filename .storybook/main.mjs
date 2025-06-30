import path from "path"
import { cascadeLayerPrefixer } from "../utils/cascadeLayerPrefixer"
import { referencer } from "../utils/referencer"

export default {
  stories: ["../stories/Introduction.mdx", "../stories/**/*stories*"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-a11y",
    "@storybook/addon-webpack5-compiler-swc",
  ],

  staticDirs: ["./static"],

  webpackFinal: (config) => {
    return {
      ...config,
      entry: [
        ...config.entry,

        // Load fonts and tailwind classes AFTER component styling
        // This allows overriding default component styling using tailwind
        "./main.scss",
      ],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "~": path.resolve(__dirname, ".."),
        },
      },
      module: {
        ...config.module,
        rules: [
          {
            test: /\.scss$/,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: [
                      referencer({
                        referencePath: path.resolve(__dirname, "../main.scss"),
                        fileNameMatcher: /\/components\/.+/,
                      }),
                      `@tailwindcss/postcss`,
                      cascadeLayerPrefixer({
                        layerName: "components",
                        fileNameMatcher: /\/components\/.+/,
                      }),
                    ],
                  },
                },
              },
              "sass-loader",
            ],
          },
          ...config.module.rules,
        ],
      },
      plugins: [...config.plugins],
    }
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
}
