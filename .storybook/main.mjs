import path from "path"
import { cascadeLayerPrefixer } from "../utils/cascadeLayerPrefixer"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

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
                      tailwindcss,
                      cascadeLayerPrefixer({
                        layerName: "components",
                        fileNameMatcher: /\/components\/.+/,
                      }),
                      autoprefixer,
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
