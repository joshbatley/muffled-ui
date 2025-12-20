import type { Meta, StoryObj } from "@storybook/react-vite"

import { ThemeToggle } from "@muffled-ui/ui-web"

const meta = {
  title: "ui-web/ThemeToggle",
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
