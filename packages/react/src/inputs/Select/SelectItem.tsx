import { useMemo } from 'react';
import styled from 'styled-components';
import { ListItem } from '../../data';
import { useSelectContext } from './SelectContext';
import { WithChildren } from '../../types';

export type SelectItemProps = {
  item: any;
  index: number;
} & WithChildren;

const Item = styled(ListItem) <{ changeBg: boolean; }>`
  cursor: pointer;
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[4]}`};
  background: ${({ changeBg, theme }) => changeBg ? theme.colors.muted : 'inherit'};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  border-radius: ${({ theme }) => theme.radii[3]};
  margin: 0px ${({ theme }) => theme.space[1]};
`;

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
    <Item
      changeBg={selectedItem === item}
      key={key}
      {...itemProps}
    >
      {itemText}
    </Item>
  );
};
