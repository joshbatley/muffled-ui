import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Box, Text } from '../../data';
import { ClickableElement, OutlineButton, OutlineButtonProps } from '../Button';
import { useSelectContext } from './SelectContext';

export type SelectButtonProps = {
  isClearable?: boolean;
  isFilterable?: boolean;
  placeholder?: string;
} & OutlineButtonProps;

export const SelectButton: React.FC<SelectButtonProps> = ({
  isClearable,
  children,
  isFilterable,
  placeholder,
  ...rest
}) => {
  let {
    getToggleButtonProps, itemToString, selectedItem, clearSelection,
  } = useSelectContext();

  let buttonText = children ||
    (itemToString && itemToString(selectedItem)) ||
    (selectedItem && selectedItem.value) ||
    placeholder;

  let isClearableActive = isClearable && selectedItem;

  let handleClear = (e: any) => {
    e.stopPropagation();
    clearSelection();
  };

  return (
    <OutlineButton
      w="100%"
      bg="background"
      border={{ '': 'border.1', '&:focus': 'input.1' }}
      justifyContent="space-between"
      {...getToggleButtonProps()}
      {...rest}
    >
      <Text fontWeight="normal" color={!selectedItem ? 'mutedForeground' : 'default'}>{buttonText}</Text>
      <Box display="flex" alignItems="center" mr={{ '>': 4, '> :last-child': 0 }}>
        {isClearableActive &&
          <ClickableElement color="foreground" opacity={{ ':hover': 0.3 }} onClick={handleClear} as="a">
            Clear
          </ClickableElement>
        }
        <ChevronUpDownIcon height={16} width={16} />
      </Box>
    </OutlineButton>
  );
};
