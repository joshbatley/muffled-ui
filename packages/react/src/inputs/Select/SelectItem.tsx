import { ListItem } from '../../data';
import { useSelectContext } from './SelectContext';
import { WithChildren } from '../../types';

export type SelectItemProps = {
  item: any;
  index: number;
} & WithChildren;

export const SelectItem: React.FC<SelectItemProps> = ({ children, item, index }) => {
  let {
    getItemProps,
    selectedItem,
    itemToString,
  } = useSelectContext();

  let itemText = children ||
    (itemToString && itemToString(item)) ||
    (item && item.value);

  let { key, ...itemProps } = getItemProps({
    key: item.value,
    item,
    index,
  });

  return (
    <ListItem
      bg={selectedItem === item ? 'muted' : 'inherit'}
      p="1 4"
      cursor="pointer"
      fontSize="1"
      lineHeight="1"
      borderRadius="3"
      margin="0px 1"
      key={key}
      {...itemProps}
    >
      {itemText}
    </ListItem>
  );
};
