import { x } from '@xstyled/styled-components';
import { PaginationControls } from './PaginationControls';
import { Text } from '../Text';
import { RowControls } from './RowControls';
import { Box } from '../Box';

export type PaginationProps = {
  limit: number;
  skip: number;
  itemCount: number;
  setSkip: (skip: number) => void;
  hidePageSizeControls?: boolean;
  setSize: (size: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  limit, skip, setSkip, itemCount, hidePageSizeControls, setSize,
}) => {
  let to = (skip + limit > itemCount) ? itemCount : skip + limit;
  return (
    <x.div
      w="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      minHeight="38px"
      lineHeight="1rem"
      padding="3"
    >
      <Text color="mutedForeground">
        {skip + 1} to {to} of {itemCount} results
      </Text>
      <Box display="flex" justifyContent="space-between" gap="8">
        {!hidePageSizeControls && (<RowControls onChange={setSize} />)}
        <PaginationControls itemCount={itemCount} limit={limit} skip={skip} setSkip={setSkip} />
      </Box>
    </x.div>
  );
};
