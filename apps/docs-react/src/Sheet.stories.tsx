import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  Button,
} from "@muffled-ui/react"

const meta = {
  title: "react/Sheet",
  component: Sheet,
  tags: [],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const RightSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open sheet</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here.</SheetDescription>
        </SheetHeader>
        <div className="p-4">Your content</div>
        <SheetFooter>
          <Button variant="secondary">Cancel</Button>
          <Button>Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const LeftSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="p-4">Left side content</div>
      </SheetContent>
    </Sheet>
  ),
}
