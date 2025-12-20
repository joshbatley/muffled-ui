import type { Meta, StoryObj } from "@storybook/react-vite"

import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@muffled-ui/ui-web"

const meta = {
  title: "ui-web/InputOTP",
  component: InputOTP,
  tags: [],
  parameters: { layout: "centered" },
} satisfies Meta<typeof InputOTP>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    maxLength: 6,
    children: null,
  },
  render: () => (
    <InputOTP maxLength={6} aria-label="One-time password">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}
