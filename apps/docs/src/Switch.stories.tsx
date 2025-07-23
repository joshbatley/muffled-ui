import { StoryObj } from '@storybook/react';
import { Box, Switch, Typography } from '@muffled-ui/react';
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
          <Typography>Use me</Typography>
          <Switch checked={check} {...rest} onChange={() => setCheck(!check)} />
          <br /><br />
          <Typography>Default</Typography>
          <Switch {...rest} onChange={() => { }} />
          <br /><br />
          <Typography>Disabled</Typography>
          <Switch disabled {...rest} />
          <br /><br />
          <Typography>Disabled Checked</Typography>
          <Switch disabled checked {...rest} onChange={() => { }} />
        </Box>
      </Box>
    );
  },
};
