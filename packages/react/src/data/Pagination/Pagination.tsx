import styled from 'styled-components';
import { PaginationControls } from './PaginationControls';
import { Typography } from '../Typography';
import { RowControls } from './RowControls';
import { Box } from '../Box';

export type PaginationProps = {
  limit: number;
  skip: number;
  itemCount: number;
  setSkip: (skip: number) => void;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 38px;
  line-height: 1rem;
`;

export const Pagination: React.FC<PaginationProps> = ({
  limit, skip, setSkip, itemCount,
}) => {
  let to = (skip + limit > itemCount) ? itemCount : skip + limit;
  return (
    <Container>
      <Typography color="mutedForeground">
        {skip + 1} to {to} of {itemCount} results
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <RowControls />
        <PaginationControls itemCount={itemCount} limit={limit} skip={skip} setSkip={setSkip} />
      </Box>
    </Container>
  );
};
