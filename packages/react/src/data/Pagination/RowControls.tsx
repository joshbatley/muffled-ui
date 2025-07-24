import { SimpleSelect } from '../../inputs';
import { Box } from '../Box';
import { Typography } from '../Typography';

export const RowControls = () => (
  <Box display="flex">
    <Typography>Rows Per page</Typography>
    <SimpleSelect initialSelectedItem="10" values={['10', '20', '30', '40', '50']}  />
  </Box>
);
