import { forwardRef } from 'react';
import { x } from '@xstyled/styled-components';
import type {
  BordersProps, ColorProps, FlexboxesProps, LayoutProps, PositionProps, SpaceProps, TypographyProps, BoxShadowProps, BackgroundsProps, SizingProps, EffectsProps,
} from '@xstyled/styled-components';
import { AsProp } from '../../types';

export type BaseButtonProps = {
  type?: 'button' | 'reset' | 'submit';
  as?: AsProp;
}  & EffectsProps & LayoutProps & BordersProps & PositionProps & ColorProps & SpaceProps & TypographyProps & FlexboxesProps & BoxShadowProps & BackgroundsProps & SizingProps & Omit<React.ComponentPropsWithoutRef<'button'>, 'Color'>;

export const BaseButton: React.ForwardRefExoticComponent<React.PropsWithoutRef<BaseButtonProps> & React.RefAttributes<HTMLButtonElement>> = forwardRef<HTMLButtonElement, BaseButtonProps>(({
  children, disabled, ...rest
}, ref) => {
  return (
    <x.button
      ref={ref}
      disabled={disabled}
      display="inline-flex"
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      userSelect="none"
      borderRadius={3}
      px={3}
      py={11}
      fontSize={1}
      lineHeight={1}
      fontWeight={500}
      marginLeft={{ '> :not([hidden]) ~ :not([hidden])': '0.5rem' }}
      cursor={{ '&:disabled': 'not-allowed' }}
      {...rest}
    >
      {children}
    </x.button>
  );
});

