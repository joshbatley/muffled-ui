import type { Meta, StoryObj } from '@storybook/react-vite'

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@muffled-ui/react'

const meta = {
  title: 'react/Accordion',
  component: Accordion,
  tags: [],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    type: 'single',
  },
  render: () => (
    <Accordion type="single" collapsible style={{ width: 360 }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to WAI-ARIA best practices.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>Yes. It has sensible defaults.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
