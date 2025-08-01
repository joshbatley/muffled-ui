import { x } from '@xstyled/styled-components';
import { StepIcon } from './StepIcon';
import { useStepperContext } from './StepperContext';
import { Direction, WithChildren } from '../../types';
import { Text } from '../../data';

export type StepLabelProps = {
  icon?: React.ReactNode;
  idx?: number;
  state?: 'completed' | 'active' | 'default';
  error?: boolean;
} & WithChildren;

const Line = ({ direction, ...props }: { direction: Direction } & React.HTMLAttributes<HTMLDivElement>) => (
  <x.div
    left="calc(-50% + 30px)"
    right="calc(50% + 30px)"
    bg="primary"
    opacity={0.2}
    flex="1 1 auto"
    w="1px"
    h={direction === 'vertical' ? '100%' : '1px'}
    {...props}
  />
);

const AlternativeLine = ({ direction, ...props }: { direction: Direction } & React.HTMLAttributes<HTMLDivElement>) => (
  <x.div
    left="calc(-50% + 30px)"
    right="calc(50% + 30px)"
    position="absolute"
    bg="primary"
    opacity={0.2}
    top={3}
    flex="1 1 auto"
    h={direction === 'vertical' ? '100%' : '1px'}
    {...props}
  />
);

const Label = ({ alternativeLabel, ...props }: { alternativeLabel: boolean } & React.HTMLAttributes<HTMLDivElement>) => (
  <x.div
    display="flex"
    alignItems="center"
    justifyContent="center"
    position="relative"
    fontSize={0}
    lineHeight={0}
    flexDirection={alternativeLabel ? 'column' : undefined}
    flex={alternativeLabel ? '1 1 0%' : undefined}
    marginLeft={(!alternativeLabel ? { '> :not([hidden]) ~ :not([hidden])': '0.5rem' } : undefined)}
    {...props}
  />
);

const LineContainer = ({ direction, ...props }: { direction: Direction } & React.HTMLAttributes<HTMLDivElement>) => (
  <x.div
    flex="1 1 auto"
    display="flex"
    w="1px"
    alignItems="center"
    ml={3}
    mr={3}
    mt={direction === 'vertical' ? 3 : undefined}
    mb={direction === 'vertical' ? 3 : undefined}
    {...props}
  />
);

export const StepLabel: React.FC<StepLabelProps> = ({
  icon, children, idx = 0, state, error,
}) => {
  let { direction, alternativeLabel, noOfItems } = useStepperContext();

  if (alternativeLabel) {
    return (
      <Label alternativeLabel={alternativeLabel}>
        {idx !== 0 && <AlternativeLine direction={direction} />}
        <StepIcon number={idx + 1} icon={icon} state={state} error={error} />
        {children}
      </Label>
    );
  }
  return (
    <>
      <Label alternativeLabel={false}>
        <StepIcon number={idx + 1} icon={icon} state={state} error={error} />
        <Text opacity={state === 'default' ? '0.6' : '1'}>{children}</Text>
      </Label>
      {idx !== noOfItems && (
        <LineContainer direction={direction}>
          <Line direction={direction} />
        </LineContainer>
      )}
    </>
  );
};
