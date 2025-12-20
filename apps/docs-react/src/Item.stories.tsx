import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  Button,
} from "@muffled-ui/ui-web"

const meta = {
  title: "ui-web/Item",
  component: Item,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <ItemGroup style={{ width: 420 }}>
      <Item>
        <ItemMedia variant="icon">🔔</ItemMedia>
        <ItemContent>
          <ItemTitle>Notification</ItemTitle>
          <ItemDescription>Here is a short description.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="secondary">Snooze</Button>
          <Button size="sm">View</Button>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item variant="outline" size="sm">
        <ItemMedia variant="image">
          <img alt="thumb" src="https://picsum.photos/80/80" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Outline Item</ItemTitle>
          <ItemDescription>Smaller, outlined style</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="ghost">Action</Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  ),
}
