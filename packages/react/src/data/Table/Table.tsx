import { forwardRef } from 'react';
import styled from 'styled-components';
import { Box } from '../Box';

export type TableProps = {
  containerClasses?: string;
  footer?: React.ReactNode;
} & React.ComponentPropsWithRef<'table'>;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii[3]};
  contain: paint;
`;

const StyledTable = styled.table`
  width: 100%;
  position: relative;
  border-collapse: collapse;
  > :not([hidden]) ~ :not([hidden]) & :not(:last-child) {
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.colors.border}
  }
`;

export const Table = forwardRef<HTMLTableElement, TableProps>(({ children, containerClasses, footer, ...rest }, ref) => (
  <Box>
    <Container>
      <StyledTable ref={ref} {...rest}>
        {children}
      </StyledTable>

    </Container>
    {footer}
  </Box>
));
