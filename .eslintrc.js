module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest-dom/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  rules: {
    // enable additional rules
    "linebreak-style": ["error", "unix"],
    camelcase: ["error"],

    // Allow console.log
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.js"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": 0,
      },
    },
    {
      files: ["./*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": 0,
      },
    },
    {
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-floating-promises": ["error"],
      },
    },
  ],
  ignorePatterns: ["coverage/**/*", "storybook-static/**/*"],
}
