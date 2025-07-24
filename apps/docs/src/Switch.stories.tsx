import { StoryObj } from '@storybook/react';
import { Box, Switch, Text } from '@muffled-ui/react';
import { useState } from 'react';

export default {
  title: 'Inputs/Switch',
  component: Switch,
  args: {
    disabled: false,
  },
};

export const Showcase: StoryObj<typeof Switch> = {
  render: ({ disabled, ...rest }) => {
    let [check, setCheck] = useState<boolean>(false);
    return (
      <Box spaceXBetween="2">
        <Box spaceXBetween="2">
          <Text>Use me</Text>
          <Switch checked={check} {...rest} onChange={() => setCheck(!check)} />
          <br /><br />
          <Text>Default</Text>
          <Switch {...rest} onChange={() => { }} />
          <br /><br />
          <Text>Disabled</Text>
          <Switch disabled {...rest} />
          <br /><br />
          <Text>Disabled Checked</Text>
          <Switch disabled checked {...rest} onChange={() => { }} />
        </Box>
      </Box>
    );
  },
};
