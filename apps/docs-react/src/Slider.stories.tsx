import type { Meta, StoryObj } from "@storybook/react-vite"

import { Slider } from "@muffled-ui/ui-web"

const meta = {
  title: "ui-web/Slider",
  component: Slider,
  tags: [],
  parameters: { layout: "centered" },
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 260 }}>
      <Slider {...args} />
    </div>
  ),
}
