import { x } from '@xstyled/styled-components';

export type CircleProgressProps = {
  height?: string | number;
  width?: string | number;
  percentage?: number;
};

export const CircleProgress: React.FC<CircleProgressProps> = ({ height = 50, width = 50, percentage = 0 }) => {
  let circumference = 2 * Math.PI * ((50 - 4) / 2);
  let strokeDasharray = circumference.toFixed(3);
  let strokeDashoffset = `${(((100 - percentage) / 100) * circumference).toFixed(3)}px`;

  return (
    <x.svg
      viewBox="25 25 50 50"
      height={height}
      width={width}
      stroke="currentColor"
      transform="rotate(-90deg)"
    >
      <x.circle
        cx="50"
        cy="50"
        r="23"
        fill="none"
        strokeWidth="4"
        opacity="0.1"
        color="foreground"
      />
      <x.circle
        cx="50"
        cy="50"
        r="23"
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDashoffset={strokeDashoffset}
        strokeDasharray={strokeDasharray}
        color="foreground"
      />
    </x.svg>
  );
};
