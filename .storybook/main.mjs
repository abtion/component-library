import path from "path"

export default {
  stories: ["../stories/Introduction.mdx", "../stories/**/*stories*"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-a11y",
    "@storybook/addon-webpack5-compiler-swc",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          {
            test: /\.css$/,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: { plugins: ["@tailwindcss/postcss"] },
                },
              },
            ],
          },
        ],
      },
    },
  ],

  staticDirs: ["./static"],

  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "~": path.resolve(__dirname, ".."),
        },
      },
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
