import { x } from '@xstyled/styled-components';
import type { SizingProps, SpaceProps, BordersProps, BackgroundsProps, EffectsProps, PositionProps, ZIndexProps } from '@xstyled/styled-components';

type ListProps = React.ComponentPropsWithRef<'ul'> & SizingProps & SpaceProps & BordersProps & EffectsProps & BackgroundsProps & PositionProps & ZIndexProps;

export const List: React.FC<ListProps> = (props) => (
  <x.ul
    listStylePosition="inside"
    listStyleType="none"
    {...props}
  />
);
