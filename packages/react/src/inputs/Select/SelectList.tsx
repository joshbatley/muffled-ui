import { List } from '../../data';
import { useSelectContext } from './SelectContext';
import { WithChildren } from '../../types';

export const SelectList: React.FC<WithChildren> = ({ children }) => {
  let { isOpen } = useSelectContext();

  if (!isOpen) {
    return null;
  }

  return (
    <List
      pt="1" pb="1"
      borderRadius="3"
      boxShadow="base.4"
      border="border.1"
      bg={{ '': 'background', '&:hover li': 'background', '& li:hover': 'accent' }}
      mt="2"
      position="absolute"
      minWidth="100%"
      zIndex="1000"
    >
      {children}
    </List>
  );
};
