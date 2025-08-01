import styled from '@xstyled/styled-components';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export type StepIconProps = {
  error?: boolean;
  state?: 'completed' | 'active' | 'default';
  icon?: React.ReactNode;
  number: number;
};

const ErrorComp = styled(ExclamationTriangleIcon)`
  width: 24px;
  height: 24px;
  color: destructive;
`;

const DefaultSvg = styled.svg<{ state: 'completed' | 'active' | 'default' }>`
  width: 30px;
  height: 30px;
  color: primary;
  opacity: ${({ state }) => state === 'default' ? '0.6' : '1'};
`;

const DefaultText = styled.text`
  font-weight: 700;
  font-size: 0;
  line-height: 0;
`;


const Checkmark = styled(CheckCircleIcon)`
  color: primary;
  width: 30px;
  height: 30px;
`;

const InnerCircle = styled.circle`
  color: background;
`;

export const StepIcon: React.FC<StepIconProps> = ({
  state = 'default', icon, number, error,
}) => {
  if (icon) {
    return <>{icon}</>;
  }

  if (error) {
    return (
      <ErrorComp />
    );
  }

  if (state === 'active' || state === 'default') {
    return (
      <DefaultSvg fill='currentColor' state={state}>
        <circle cx="50%" cy="50%" r="12" />
        <InnerCircle cx="50%" cy="50%" r="10" />
        <DefaultText x="50%" y="65%" textAnchor="middle">{number}</DefaultText>
      </DefaultSvg>
    );
  }

  return (
    <Checkmark />
  );
};
