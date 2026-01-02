import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  Button,
} from '@muffled-ui/react'

const meta = {
  title: 'react/Item',
  component: Item,
  tags: [],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <ItemGroup style={{ width: 420 }} className="gap-4">
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
      <Item variant="outline">
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
      <Item variant="muted">
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
    </ItemGroup>
  ),
}
