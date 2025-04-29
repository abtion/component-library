import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"
import tsParser from "@typescript-eslint/parser"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  globalIgnores(["coverage/**/*", "storybook-static/**/*"]),
  {
    extends: compat.extends(
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:jest-dom/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "plugin:storybook/recommended",
    ),

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },

      parser: tsParser,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "linebreak-style": ["error", "unix"],
      camelcase: ["error"],

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: ["**/*.js"],

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
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },

    rules: {
      "@typescript-eslint/no-floating-promises": ["error"],
    },
  },
])
