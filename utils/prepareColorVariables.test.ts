import prepareColorVariables from "./prepareColorVariables"

describe(prepareColorVariables, () => {
  const jsonColors = {
    dark: "#000",
    light: "#FFF",
    neutral: {
      DEFAULT: "#313131",
      "50": "#F1F1F1",
      "800": "#313131",
    },
    primary: {
      DEFAULT: "#00ABAB",
      "400": "#00ABAB",
      "900": "#003333",
    },
  }

  describe("returned cssVariables", () => {
    it("is a correct list of css variables based on the provided colors", () => {
      const result = prepareColorVariables(jsonColors)

      expect(result.cssVariables).toEqual({
        "--color-dark": "0 0 0",
        "--color-light": "255 255 255",
        "--color-neutral": "49 49 49",
        "--color-neutral-50": "241 241 241",
        "--color-neutral-800": "49 49 49",
        "--color-primary": "0 171 171",
        "--color-primary-400": "0 171 171",
        "--color-primary-900": "0 51 51",
      })
    })
  })

  describe("returned tailwindConfig", () => {
    it("includes all the colors set to their corresponding css variables", () => {
      const result = prepareColorVariables(jsonColors)

      expect(result.tailwindConfig).toMatchObject({
        dark: {
          DEFAULT: "rgb(var(--color-dark) / <alpha-value>)",
        },
        light: {
          DEFAULT: "rgb(var(--color-light) / <alpha-value>)",
        },
        neutral: {
          "50": "rgb(var(--color-neutral-50) / <alpha-value>)",
          "800": "rgb(var(--color-neutral-800) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-neutral) / <alpha-value>)",
        },
        primary: {
          "400": "rgb(var(--color-primary-400) / <alpha-value>)",
          "900": "rgb(var(--color-primary-900) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
        },
      })
    })

    it("includes computed contrast colors for variants", () => {
      const result = prepareColorVariables(jsonColors)

      expect(result.tailwindConfig).toMatchObject({
        neutral: {
          "50-contrast": "rgb(var(--color-dark) / <alpha-value>)",
          "800-contrast": "rgb(var(--color-light) / <alpha-value>)",
          contrast: "rgb(var(--color-light) / <alpha-value>)",
        },
        primary: {
          "400-contrast": "rgb(var(--color-light) / <alpha-value>)",
          "900-contrast": "rgb(var(--color-light) / <alpha-value>)",
          contrast: "rgb(var(--color-light) / <alpha-value>)",
        },
      })
    })
  })

  describe("when a contrast color has been manually specified", () => {
    const jsonColorsWithContrast = {
      ...jsonColors,
      neutral: {
        ...jsonColors.neutral,
        contrast: "#FFF",
      },
      primary: {
        ...jsonColors.primary,
        "400-contrast": "#000",
      },
    }

    it("adds the contrast colors to the returned cssVariables", () => {
      const result = prepareColorVariables(jsonColorsWithContrast)

      expect(result.cssVariables).toMatchObject({
        "--color-neutral-contrast": "255 255 255",
        "--color-primary-400-contrast": "0 0 0",
      })
    })

    it("uses the contrast colors in the generated tailwindConfig", () => {
      const result = prepareColorVariables(jsonColorsWithContrast)

      expect(result.tailwindConfig).toMatchObject({
        neutral: {
          contrast: "rgb(var(--color-neutral-contrast) / <alpha-value>)",
        },
        primary: {
          "400-contrast":
            "rgb(var(--color-primary-400-contrast) / <alpha-value>)",
        },
      })
    })
  })
})
