import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge, Avatar, AvatarImage, AvatarFallback } from "@muffled-ui/react"

const meta = {
  title: "react/Badge",
  component: Badge,
  tags: [],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Badge",
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Badge {...args} variant="default">Default</Badge>
      <Badge {...args} variant="secondary">Secondary</Badge>
      <Badge {...args} variant="destructive">Destructive</Badge>
      <Badge {...args} variant="outline">Outline</Badge>
    </div>
  ),
}

export const Positions: Story = {
  render: (args) => (
    <div>
      <Badge variant="destructive"  position="N" tag {...args}>
        <Avatar>
          <AvatarImage alt="User" src="https://i.pravatar.cc/100?img=1" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </Badge>
    </div>
  ),
}
