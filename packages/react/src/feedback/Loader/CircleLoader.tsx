import { x } from '@xstyled/styled-components';

export type CircleLoaderProps = {
  height?: string | number;
  width?: string | number;
  destructive?: boolean;
};

export const CircleLoader: React.FC<CircleLoaderProps> = ({ height = 50, width = 50, destructive = false, ...rest }) => (
  <x.svg
    viewBox="25 25 50 50"
    height={height}
    width={width}
    animation="spin"
    stroke="currentColor"
    {...rest}
  >
    <x.circle
      cx="50"
      cy="50"
      r="20"
      fill="none"
      strokeWidth="4"
      color={destructive ? 'destructiveForeground' : 'primaryForeground'}
    />
    <x.circle
      cx="50"
      cy="50"
      r="20"
      fill="none"
      strokeWidth="4"
      strokeDashoffset="-50"
      strokeDasharray="60"
      strokeLinecap="round"
      color={destructive ? 'destructive' : 'primary'}
    />
  </x.svg>
);

