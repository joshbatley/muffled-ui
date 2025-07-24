import { SimpleSelect } from '../../inputs';
import { Box } from '../Box';
import { Text } from '../Typography';

export const RowControls = () => (
  <Box display="flex">
    <Text>Rows Per page</Text>
    <SimpleSelect initialSelectedItem="10" values={['10', '20', '30', '40', '50']}  />
  </Box>
);
