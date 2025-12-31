import type { Meta, StoryObj } from "@storybook/react-vite"

import { ThemeToggle } from "@muffled-ui/react"

const meta = {
  title: "react/ThemeToggle",
  component: ThemeToggle,
  tags: [],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ThemeToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <ThemeToggle />
  ),
}
