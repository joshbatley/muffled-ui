import { forwardRef } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { ClickableElement, OutlineButton } from '../../../inputs/Button';
import { Box, Text } from '../../../data';

export type DateInputProps = {
  placeholder?: string;
  value?: string | null;
  onClick: () => void;
  clear?: () => void;
  showClear?: boolean;
};

export const DateInput = forwardRef<HTMLButtonElement, DateInputProps>(({
  value,
  placeholder,
  onClick,
  clear,
  showClear,
}, ref) => {
  let handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    clear?.();
  };

  let displayValue = value ?
    (<Text as="span">{value}</Text>) :
    (<Text as="span" color="mutedForeground">{placeholder}</Text>);

  return (
    <OutlineButton w="100%" fontWeight="400" lineHeight="inherit" justifyContent="space-between" ref={ref} onClick={onClick}>
      <Box display="flex" alignContent="center" ml={{ ' > :not([hidden]) ~ :not([hidden])': '1' }} mr={{ ' > :not([hidden]) ~ :not([hidden])': 4 }} >
        <Box color="primary" mr="2" >
          <CalendarIcon width={16} height={16} />
        </Box>
        {displayValue}
      </Box>
      {showClear && value && (
        <ClickableElement color="foreground" opacity={{ ':hover': 0.3 }} onClick={handleClear} as="a">
          Clear
        </ClickableElement>
      )}
    </OutlineButton>
  );
});

