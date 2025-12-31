import type { Meta, StoryObj } from "@storybook/react-vite"

import { Textarea } from "@muffled-ui/react"

const meta = {
  title: "react/Textarea",
  component: Textarea,
  tags: [],
  parameters: { layout: "centered" },
  args: {
    placeholder: "Write something...",
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Disabled" },
}

export const Invalid: Story = {
  args: { "aria-invalid": true, defaultValue: "Invalid" },
}
