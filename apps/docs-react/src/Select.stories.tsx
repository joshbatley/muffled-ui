import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectLabel,
  SelectGroup,
  SelectSeparator,
} from "@muffled-ui/ui-web"

const meta = {
  title: "ui-web/Select",
  component: Select,
  tags: [],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Select>
      <SelectTrigger style={{width: 200}}>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  ),
}
