import { x } from '@xstyled/styled-components';
import { WithChildren } from '../../types';

type WrapperProps = {
  style?: React.CSSProperties;
  skip?: boolean;
} & WithChildren;

export const Wrapper: React.FC<WrapperProps> = ({
  children, skip, style,
}) => skip ? <>{children}</> : (
  <x.div
    overflow="hidden"
    fontSize={1}
    lineHeight={1}
    fontFamily="mono"
    border="border.1"
    boxShadow="base.1"
    borderRadius={3}
    background="offsetBackground"
    style={style}
  >
    {children}
  </x.div>
);
