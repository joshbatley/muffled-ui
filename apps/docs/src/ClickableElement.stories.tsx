import { StoryObj } from '@storybook/react';
import { ClickableElement } from '@muffled-ui/react';

export default {
  title: 'Inputs/Buttons/ClickableElement',
  component: ClickableElement,
  args: {
    children: 'Click me',
  },
};

export const Showcase: StoryObj<typeof ClickableElement> = {
  render: ({ children, ...rest }) => (
    <div>
      You can click this and it will work{' '}
      <ClickableElement {...rest}>{children}</ClickableElement>. No really
    </div>
  ),
};
