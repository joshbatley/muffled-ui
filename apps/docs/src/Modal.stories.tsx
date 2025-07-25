import { useState } from 'react';
import { StoryObj } from '@storybook/react';
import {
  Modal,
  OutlineButton,
  Box,
  PrimaryButton,
  Text,
  Input,
  Label,
  Password,
} from '@muffled-ui/react';

export default {
  title: 'Feedback/Modal',
  component: Modal,
  args: {
    title: 'This is a modal header',
  },
};

export const Showcase: StoryObj<typeof Modal> = {
  render: ({ title, children, ...rest }) => {
    let [open, setOpen] = useState(false);

    return (
      <>
        <OutlineButton onClick={() => setOpen(!open)}>Open</OutlineButton>
        <Modal
          {...rest}
          open={open}
          title={title}
          handleClose={() => setOpen(!open)}
        >
          <Box
            width="400px"
            pt="0"
            pb="4"
            px="4"
            display="flex"
            flexDirection="column"
          >
            <Text color="mutedForeground">Make changes to your profile here. Click save when you're done.</Text>
            <Label value="Email">
              <Input placeholder="Email" />
            </Label>
            <Label value="Password">
              <Password placeholder="Password" />
            </Label>
            <PrimaryButton mt="5">Update</PrimaryButton>
          </Box>
        </Modal>
      </>
    );
  },
};
