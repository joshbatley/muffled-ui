import { SimpleSelect } from '../../inputs';
import { Box } from '../Box';
import { Text } from '../Text';

export type RowControlsProps = {
  onChange: (size: number) => void;
};

export const RowControls: React.FC<RowControlsProps> = ({ onChange }) => (
  <Box display="inline-flex" alignItems="center" gap="2">
    <Text whiteSpace="nowrap">Rows per page</Text>
    <SimpleSelect onChange={(i) => onChange(parseInt(i))} initialSelectedItem="10" values={['10', '20', '30', '40', '50']}  />
  </Box>
);
