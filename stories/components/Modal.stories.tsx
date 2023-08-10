import React from "react"
import { StoryFn, Meta } from "@storybook/react"

import Modal from "~/components/Modal/src"
import ModalTop from "~/components/ModalTop/src"
import ModalContent from "~/components/ModalContent/src"
import { Router } from "react-router"
import { Routes, Route } from "react-router-dom"
import { createMemoryHistory } from "history"
import { action } from "@storybook/addon-actions"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/🔎 Modal",
  component: Modal,
  parameters: {
    docs: {
      inlineStories: false,
    },
    actions: { argTypesRegex: null },
  },
} as Meta<typeof Modal>

const baseProps = {
  size: "md" as const,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Modal> = (args) => {
  return (
    <Modal {...args}>
      <ModalTop>Top</ModalTop>
      <ModalContent>Content</ModalContent>
    </Modal>
  )
}

export const WithCloseHandler = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithCloseHandler.args = {
  ...baseProps,
  onClose: action("onClose"),
}

export const WithReturnUrl = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithReturnUrl.args = {
  ...baseProps,
  returnUrl: "url",
}
WithReturnUrl.decorators = [
  (Story) => {
    const history = createMemoryHistory()

    return (
      <Router navigator={history} location={history.location}>
        <Routes>
          <Route path="/*" element={<Story />} />
        </Routes>
      </Router>
    )
  },
]

export const Unclosable = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unclosable.args = {
  ...baseProps,
}
