import styled from 'styled-components';

export type TableRowProps = {
  active?: boolean;
  onClick?: (event: React.MouseEvent) => void;
} & React.ComponentPropsWithRef<'tr'>;

export const TableRow = styled.tr<TableRowProps>`
  ${({ onClick, theme }) => typeof onClick === 'function' && `
    cursor: pointer;
    :hover {
      background: ${theme.colors.accent};
    }
  `}
  ${({ active, theme }) => active && `
    cursor: pointer;
    background: ${theme.colors.accent};
  `}
`;
