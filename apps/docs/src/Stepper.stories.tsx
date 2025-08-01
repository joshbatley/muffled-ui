import { StoryObj } from '@storybook/react';
import { Box, StepLabel, Stepper } from '@muffled-ui/react';

export default {
  title: 'Navigation/Stepper',
  component: Stepper,
  args: {
    step: 1,
    alternativeLabel: false,
  },
};

export const Showcase: StoryObj<typeof Stepper> = {
  render: ({ ...rest }: any) => (
    <>
      <Box h="300px">
        <Stepper {...rest}>
          <StepLabel>Select campaign settings</StepLabel>
          <StepLabel>Create an ad group</StepLabel>
          <StepLabel>Create an ad</StepLabel>
        </Stepper>
      </Box>
      <Box h="300px">
        <Stepper {...rest}>
          <StepLabel>Select campaign settings</StepLabel>
          <StepLabel error>Create an ad group</StepLabel>
          <StepLabel>Create an ad</StepLabel>
        </Stepper>
      </Box>
    </>
  ),
};

