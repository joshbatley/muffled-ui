import styled from 'styled-components';
import { SimpleSelect } from '../../inputs';
import { Box } from '../Box';
import { Text } from '../Text';

export type RowControlsProps = {
  onChange: (size: number) => void;
};

const StyledText = styled(Text)`
  white-space: nowrap;
`;

export const RowControls: React.FC<RowControlsProps> = ({ onChange }) => (
  <Box display="inline-flex" alignItems="center" gridColumnGap="2">
    <StyledText>Rows per page</StyledText>
    <SimpleSelect onChange={(i) => onChange(parseInt(i))} initialSelectedItem="10" values={['10', '20', '30', '40', '50']}  />
  </Box>
);
