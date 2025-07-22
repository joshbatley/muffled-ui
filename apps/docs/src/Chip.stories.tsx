import { StoryObj } from '@storybook/react';
import { Chip } from '@muffled-ui/react';

export default {
  title: 'Feedback/Chip',
  component: Chip,
  args: {
    children: 'Chip',
  },
};

export const Showcase: StoryObj<typeof Chip> = {
  render: ({ children }) => (
    <>
      <Chip>{children}</Chip>
      <br />
      <br />
      <Chip destructive>{children}</Chip>
    </>),
};

