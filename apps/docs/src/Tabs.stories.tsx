import { StoryObj } from '@storybook/react';
import { TabPane, Tabs } from '@muffled-ui/react';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    backgrounds: {
      default: 'White',
    },
  },
};

let arr = Array(5)
  .fill(null)
  .map(() => Math.random().toString().substring(10, 5));

export const Showcase: StoryObj<typeof Tabs> = {
  render: ({ ...rest }) => (
    <Tabs value={arr[arr.length - 1]} {...rest}>
      {arr.map((i, idx) => (
        <TabPane key={i} value={i} tab={`Tab button ${idx}`} width="100%">
          Content {idx}
        </TabPane>
      ))}
    </Tabs>
  ),
};
