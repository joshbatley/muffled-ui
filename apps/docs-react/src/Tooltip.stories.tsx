import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tooltip, TooltipTrigger, TooltipContent, Button } from "@muffled-ui/react"

const meta = {
  title: "react/Tooltip",
  component: Tooltip,
  tags: [],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>Tooltip content</TooltipContent>
    </Tooltip>
  ),
}
