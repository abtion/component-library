import React from "react"
import Card from "."
import { render } from "@testing-library/react"
import EnvelopeIcon from "@heroicons/react/20/solid/EnvelopeIcon"

describe(Card, () => {
  it("renders name, description and children", () => {
    const { getByText } = render(
      <Card icon=<EnvelopeIcon /> name="cardName" description="cardDescription">
        <p>child paragraph</p>
      </Card>,
    )

    expect(getByText("cardName")).toBeInTheDocument()
    expect(getByText("cardDescription")).toBeInTheDocument()
    expect(getByText("child paragraph")).toBeInTheDocument()
  })

  it("renders a learnMore link", () => {
    const { getByRole } = render(
      <Card
        icon=<EnvelopeIcon />
        name="cardName"
        description="cardDescription"
        learnMoreUrl="/support"
      >
        <p>child paragraph</p>
      </Card>,
    )
    expect(getByRole("link")).toHaveTextContent("Learn more >")
  })
})
