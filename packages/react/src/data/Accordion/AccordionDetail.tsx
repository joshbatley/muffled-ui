import { x } from '@xstyled/styled-components';
import { forwardRef } from 'react';

export const AccordionDetail = forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>((props, ref) => (
  <x.div
    ref={ref}
    bg="background"
    padding="3 2"
    borderBottom="border.1"
    borderLeft="border.1"
    borderRight="border.1"
    boxShadow="inner"
    {...props}
  />
));

export const DetailsGrouping = forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'>>((props, ref) => (
  <x.div
    ref={ref}
    borderRadius={{ '&:last-of-type div': '0 0 3 3' }}
    {...props}
  />
));
