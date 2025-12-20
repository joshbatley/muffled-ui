import type { Meta, StoryObj } from "@storybook/react-vite"

import { Avatar, AvatarImage, AvatarFallback } from "@muffled-ui/ui-web"

const meta = {
  title: "ui-web/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage alt="User" src="https://i.pravatar.cc/100?img=1" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
}

export const FallbackOnly: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>CD</AvatarFallback>
    </Avatar>
  ),
}
