import { StoryObj } from '@storybook/react';
import { Panel } from '@muffled-ui/react';
import { CenteredWidget } from '@muffled-ui/react';

export default {
  title: 'Layout/Centered Widget',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Showcase: StoryObj<typeof CenteredWidget> = {
  render: () => (
    <CenteredWidget>
      <Panel height="29" p="2">
        123
      </Panel>
    </CenteredWidget>
  ),
};
