import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { ClickableElement } from '../../inputs/Button';
import { WithChildren } from '../../types';
import { Box } from '../Box';

type AccordionSummaryProps = {
  isOpen?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & WithChildren;

type SummaryProps = AccordionSummaryProps & React.ComponentProps<typeof ClickableElement>;

const Summary = ({ isOpen, ...props }: SummaryProps) => (
  <ClickableElement
    w="100%"
    padding="2 3"
    borderBottom="border.1"
    borderLeft="border.1"
    borderRight="border.1"
    bg="background"
    alignContent="flex-start"
    justifyContent="flex-start"
    borderRadius={{ _: '0', '&:first-of-type': '3 3 0 0', '&:last-of-type': !isOpen ? '0 0 3 3' : '0' }}
    borderTop={{ '&:first-of-type': 'border.1' }}
    boxShadow={{  '&:focus': 'none'  }}
    {...props}
  />
);

type IconProps = {
  isOpen?: boolean;
} & React.ComponentProps<typeof ChevronRightIcon>;

const Icon = ({ isOpen, ...props }: IconProps) => (
  <Box mr="3">
  <ChevronRightIcon
    style={{
      transitionProperty: 'all',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '150ms',
      transform: isOpen ? 'rotate(90deg)' : undefined,
    }}
    {...props}
  />
  </Box>
);

export const AccordionSummary: React.FC<AccordionSummaryProps> = ({ isOpen, onClick, children }) => (
  <Summary isOpen={isOpen} onClick={onClick}>
    <Icon
      width={16}
      height={16}
      isOpen={isOpen}
    />
    {children}
  </Summary>
);
