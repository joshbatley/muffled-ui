import { x } from '@xstyled/styled-components';
import type {
  ColorProps, SpaceProps, LayoutProps, BoxShadowProps, BordersProps, OrderProps, GridsProps, FlexboxesProps, PositionProps, TypographyProps, SizingProps, BackgroundsProps, EffectsProps, AnimationProps,
} from '@xstyled/styled-components';
import { AsProp } from '../../types';
import { forwardRef } from 'react';

export type BoxProps = BackgroundsProps & SizingProps & ColorProps & SpaceProps & LayoutProps & BoxShadowProps
  & BordersProps & OrderProps & GridsProps & FlexboxesProps & PositionProps & TypographyProps & EffectsProps & AnimationProps
  & {
  onClick?: (e: React.MouseEvent) => void;
  as?: AsProp;
} & React.ComponentPropsWithRef<'div'>;

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ children, ...rest }, ref) => (
  <x.div ref={ref} {...rest}>{children}</x.div>
));
