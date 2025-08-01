import { x } from '@xstyled/styled-components';
import type {
  ColorProps, SpaceProps, LayoutProps, BoxShadowProps, BordersProps, TypographyProps, SizingProps,
} from '@xstyled/styled-components';
import { forwardRef } from 'react';

export type BaseInputProps = ColorProps & SpaceProps & LayoutProps & BoxShadowProps
  & BordersProps & TypographyProps & SizingProps
  & React.ComponentPropsWithRef<'input'>;

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(({ ...rest }, ref) => (
  <x.input
    ref={ref}
    w="100%"
    outline="2px solid transparent"
    outlineOffset="2px"
    bg="transparent"
    color={{ _: 'foreground', placeholder: 'mutedForeground' }}
    padding="1 3"
    fontSize={1}
    lineHeight={1}
    h="8"
    {...rest}
  />
));
