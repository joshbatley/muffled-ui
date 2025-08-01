import { x } from '@xstyled/styled-components';
import type { BorderProps, SpaceProps } from '@xstyled/styled-components';
import { forwardRef } from 'react';

export type CardContentProps = SpaceProps & BorderProps & React.ComponentPropsWithRef<'div'>;

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(({ children, ...rest }, ref) => (
  <x.div
    ref={ref}
    pt={2}
    pb={2}
    pl={3}
    pr={3}
    {...rest}
  >
    {children}
  </x.div>
));
