import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  Button,
} from "@muffled-ui/react"

const meta = {
  title: "react/Drawer",
  component: Drawer,
  tags: [],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>Brief description in the drawer.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">Place content here.</div>
        <DrawerFooter>
          <Button variant="secondary">Cancel</Button>
          <Button>Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}
