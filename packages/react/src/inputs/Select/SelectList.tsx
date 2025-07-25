import styled from 'styled-components';
import { List } from '../../data';
import { useSelectContext } from './SelectContext';
import { WithChildren } from '../../types';

const StyledList = styled(List)`
  padding-top: ${({ theme }) => theme.space[1]};
  padding-bottom: ${({ theme }) => theme.space[1]};
  border-radius: ${({ theme }) => theme.radii[3]};
  box-shadow: ${({ theme }) => theme.shadows.base[4]};
  border: ${({ theme }) => theme.borders.border[1]};
  background: ${({ theme }) => theme.colors.background};
  margin-top: ${({ theme }) => theme.space[2]};
  position: absolute;
  min-width: 100%;
  z-index:1000;

  :hover li {
    background: ${({ theme }) => theme.colors.background};
  }

  li:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;

export const SelectList: React.FC<WithChildren> = ({ children }) => {
  let { isOpen } = useSelectContext();

  if (!isOpen) {
    return null;
  }

  return (
    <StyledList>
      {children}
    </StyledList>
  );
};
