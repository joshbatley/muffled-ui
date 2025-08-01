import { x, useTheme } from '@xstyled/styled-components';
import type { LayoutProps, SpaceProps, SizingProps } from '@xstyled/styled-components';

export type SkeletonProps = {
  variant?: 'text' | 'rectangle' | 'circle';
} & LayoutProps & SpaceProps & SizingProps;

export const Skeleton: React.FC<SkeletonProps> = ({ variant = 'rectangle', ...rest }) => {
  const theme = useTheme();

  const getVariantProps = () => {
    switch (variant) {
      case 'circle':
        return {
          borderRadius: 8,
        };
      case 'rectangle':
        return {
          borderRadius: 3,

        };
      case 'text':
        return {
          display: 'inline-flex',
          borderRadius: 3,
        };
      default:
        return {};
    }
  };

  return (
    <x.div
      animation="pulse"
      bg="modalBackdrop"
      {...getVariantProps()}
      {...rest}
    >
      &nbsp;
    </x.div>
  );
};
