import { x } from '@xstyled/styled-components';
import type { FlexboxesProps, LayoutProps, SpaceProps, ColorProps } from '@xstyled/styled-components';
import { forwardRef } from 'react';

export type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
} & LayoutProps & FlexboxesProps & SpaceProps & ColorProps & React.ComponentPropsWithRef<'div'>;

export const Card = forwardRef<HTMLDivElement, CardProps>(({ children, ...rest }, ref) => (
  <x.div
    ref={ref}
    bg="background"
    borderRadius={3}
    boxShadow="base.0"
    border="border.1"
    overflow="hidden"
    {...rest}
  >
    {children}
  </x.div>
));
