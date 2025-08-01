import { x } from '@xstyled/styled-components';
import type { ColorProps, LayoutProps, TypographyProps } from '@xstyled/styled-components';
import React from 'react';

export type HeadingProps = {
  children?: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & ColorProps & TypographyProps & LayoutProps;

export const Title: React.FC<HeadingProps> = ({
  children,
  as = 'h1',
  fontWeight = 'bold',
  fontSize,
  ...rest
}) => {

  const determineFontSize = () => {
    if (fontSize) return fontSize;

    switch (as) {
      case 'h1': return 5;
      case 'h2': return 4;
      case 'h3': return 3;
      case 'h4': return 2;
      case 'h5': return 1;
      case 'h6': return 0;
      default: return 5;
    }
  };

  return (
    <x.h1
      as={as}
      fontWeight={fontWeight}
      fontSize={determineFontSize()}
      {...rest}
    >
      {children}
    </x.h1>
  );
};
