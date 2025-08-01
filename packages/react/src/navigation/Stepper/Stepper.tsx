import { x } from '@xstyled/styled-components';
import { StepperContext } from './StepperContext';
import { WithChildren } from '../../types';
import { Children, isValidElement, cloneElement } from 'react';

type StepperPropsVertical = {
  step: number;
  direction?: 'vertical';
} & WithChildren;

type StepperPropsHorizontal = {
  step: number;
  direction?: 'horizontal';
  alternativeLabel?: boolean;
} & WithChildren;

export type StepperProps = StepperPropsVertical | StepperPropsHorizontal;

const parseChildren = (children: React.ReactNode, step: number): any[] => {
  return Children.toArray(children).map((node, idx) => {
    if (!isValidElement(node)) {
      return null;
    }
    let completed = step > idx && 'completed';
    let active = step === idx && 'active';
    return {
      state: completed || active || 'default',
      idx,
      ...node.props,
      node,
    };
  });
};

const StyledDiv = ({ direction, ...props }: { direction: 'vertical' | 'horizontal' } & React.HTMLAttributes<HTMLDivElement>) => (
  <x.div
    display="flex"
    position="relative"
    flexDirection={direction === 'vertical' ? 'column' : undefined}
    h={direction === 'vertical' ? '100%' : undefined}
    alignItems={direction === 'vertical' ? 'flex-start' : undefined}
    {...props}
  />
);

export const Stepper: React.FC<StepperProps> = ({
  children, direction = 'horizontal', step, ...rest
}) => {
  let alternativeLabel = rest.hasOwnProperty('alternativeLabel') ? (rest as StepperPropsHorizontal).alternativeLabel : false;
  let items = parseChildren(children, step);
  return (
    <StepperContext.Provider value={{
      noOfItems: items.length - 1, activeStep: step, direction, alternativeLabel,
    }}>
      <StyledDiv direction={direction}>
        {items.map(({ node, ...itemRest }) => cloneElement(node, { ...itemRest }))}
      </StyledDiv>
    </StepperContext.Provider>
  );
};
