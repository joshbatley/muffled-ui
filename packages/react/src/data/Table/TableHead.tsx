import { forwardRef } from 'react';
import styled from 'styled-components';

export type TableHeadProps = {
  headers?: string[];
  sticky?: boolean;
} & React.ComponentPropsWithRef<'thead'>;

const Thead = styled.thead<TableHeadProps>`
  text-align: left;
  background: ${({ theme }) => theme.colors.offsetBackground};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  ${({ sticky, theme }) => sticky && `
    position: sticky;
    top: 0;
    box-shadow: ${theme.shadows.base[1]};
  `}
`;

const TableHeadItem = styled.th`
  padding: ${({ theme }) => theme.space[3]};
  font-weight: 600;
  letter-spacing: 0.025em;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(({ children, headers, sticky, ...rest }, ref) => {
  if (!headers) {
    return (
      <Thead sticky={sticky} ref={ref} {...rest}>{children}</Thead>
    );
  }
  return (
    <Thead sticky={sticky} ref={ref}>
      <tr>
        {headers.map(h => (
          <TableHeadItem key={h}>{h}</TableHeadItem>
        ))}
      </tr>
    </Thead>
  );
});
