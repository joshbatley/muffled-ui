import type { Meta, StoryObj } from "@storybook/react-vite"

import { Progress } from "@muffled-ui/ui-web"

const meta = {
  title: "ui-web/Progress",
  component: Progress,
  tags: [],
  parameters: { layout: "centered" },
  args: {
    value: 33,
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 260 }}>
      <Progress {...args} />
    </div>
  ),
}
