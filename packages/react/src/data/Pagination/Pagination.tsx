import styled from 'styled-components';
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

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 38px;
  line-height: 1rem;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[3]};
`;

export const Pagination: React.FC<PaginationProps> = ({
  limit, skip, setSkip, itemCount, hidePageSizeControls, setSize,
}) => {
  let to = (skip + limit > itemCount) ? itemCount : skip + limit;
  return (
    <Container>
      <Text color="mutedForeground">
        {skip + 1} to {to} of {itemCount} results
      </Text>
      <Box display="flex" justifyContent="space-between" gridColumnGap="8">
        {!hidePageSizeControls && (<RowControls onChange={setSize} />)}
        <PaginationControls itemCount={itemCount} limit={limit} skip={skip} setSkip={setSkip} />
      </Box>
    </Container>
  );
};
