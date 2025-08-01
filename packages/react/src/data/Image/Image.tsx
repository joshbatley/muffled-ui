import { useState } from 'react';
import { x } from '@xstyled/styled-components';
import type {
  FlexboxesProps,
  GridsProps,
  LayoutProps,
  OrderProps,
  PositionProps,
  SpaceProps,
  SizingProps,
  BordersProps,
  BackgroundsProps,
} from '@xstyled/styled-components';

export type ImageProps =
  {
    fallback?: React.ReactNode;
  }
  & React.ComponentPropsWithoutRef<'img'>
  & FlexboxesProps
  & GridsProps
  & LayoutProps
  & OrderProps
  & PositionProps
  & SpaceProps
  & SizingProps
  & BordersProps
  & BackgroundsProps;

export const ImageComp: React.FC<ImageProps> = ({ fallback, ...rest }) => {
  let [hasError, setError] = useState(false);

  return (hasError && fallback) ? <>{fallback}</> : (
    <x.img onError={() => setError(true)} {...rest} />
  );
};
