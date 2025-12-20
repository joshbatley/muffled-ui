import type { Meta, StoryObj } from "@storybook/react-vite"

import { Popover, PopoverTrigger, PopoverContent, Button } from "@muffled-ui/ui-web"

const meta = {
  title: "ui-web/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div style={{ display: "grid", gap: 8 }}>
          <div>Place any content here.</div>
          <div style={{ opacity: 0.7 }}>It can be interactive.</div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
