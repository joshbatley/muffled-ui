import { WithChildren } from '../../types';
import { x } from '@xstyled/styled-components';

export const InputGroup: React.FC<WithChildren> = ({ children }) => (
  <x.div
    position={{ '> div': 'relative' }}
    borderRadius={{ '> div': 0, 'div:first-of-type': '3 3 0 0', 'div:last-of-type': '0 0 3 3' }}
    zIndex={{ 'div:focus-within': 20 }}
    mt={{ '> :not(div:first-of-type)': '-1px' }}>
    {children}
  </x.div>
);
