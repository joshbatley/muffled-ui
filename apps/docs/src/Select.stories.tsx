import { StoryObj } from '@storybook/react';
import { Box, SimpleSelect } from '@muffled-ui/react';

export default {
  title: 'Inputs/Select',
  component: SimpleSelect,
  args: {
    placeholder: 'My Simple Select Menu',
  },
  argTypes: {
    values: { table: { disable: true } },
  },
};

const values = [
  'hello',
  'worlds',
  'yeah us to',
  'some more options',
  'Selectable value',
];

export const Showcase: StoryObj<typeof SimpleSelect> = {
  render: ({ ...rest }) => (
    <Box w="33.3%">
      <SimpleSelect {...rest} values={values} />
      <br />
      <SimpleSelect {...rest} values={values} disabled />
      <br />
      <SimpleSelect
        {...rest}
        values={values}
        isClearable
        initialSelectedItem="Selectable value"
      />
      <br />
      <SimpleSelect {...rest} values={values} isFilterable />
    </Box>),
};

