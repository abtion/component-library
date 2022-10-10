import React from "react"
import EnvelopeIcon from "@heroicons/react/20/solid/EnvelopeIcon"

import Input from "~/components/Input"
import Button from "~/components/Button"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Examples/InputGroup",
}

export const CombinedInputAndButton = (): JSX.Element => (
  <div className="flex">
    <Input
      variant="default"
      size="md"
      className="rounded-l-md"
      placeholder="Type here"
    />
    <Button variant="primary" size="md" className="rounded-r-md -ml-px">
      Submit
    </Button>
  </div>
)

export const InputWithIcon = (): JSX.Element => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <EnvelopeIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
    </div>
    <Input
      variant="default"
      size="md"
      className="pl-10"
      placeholder="Type here"
    />
  </div>
)
