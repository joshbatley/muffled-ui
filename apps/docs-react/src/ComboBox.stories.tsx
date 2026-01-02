import type { Meta, StoryObj } from '@storybook/react-vite'
import { Combobox } from '@muffled-ui/react'

const meta = {
  title: 'react/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A searchable dropdown component built with Radix UI Command and Popover primitives.',
      },
    },
  },
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default combobox with framework selection
 */
export const Default: Story = {}

/**
 * Multiple comboboxes to show state independence
 */
export const Multiple: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <label className="text-sm font-medium mb-2 block">Primary Framework</label>
        <Combobox />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Secondary Framework</label>
        <Combobox />
      </div>
    </div>
  ),
}

/**
 * Combobox in a form layout
 */
export const InForm: Story = {
  render: () => (
    <div className="w-[400px] space-y-4 p-6 border rounded-lg">
      <h3 className="text-lg font-semibold">Project Setup</h3>
      <div className="space-y-2">
        <label htmlFor="project-name" className="text-sm font-medium">
          Project Name
        </label>
        <input
          id="project-name"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="my-awesome-project"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Framework
        </label>
        <Combobox />
      </div>
      <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md">
        Create Project
      </button>
    </div>
  ),
}
