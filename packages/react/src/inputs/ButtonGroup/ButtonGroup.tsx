import { WithChildren } from '../../types';
import { x } from '@xstyled/styled-components';

export const ButtonGroup: React.FC<WithChildren> = ({ children }) => (
  <x.div
    borderRadius={{ 'button:last-of-type': '0 3 3 0', 'button:first-of-type': '3 0 0 3', '> button': 0 }}
    position={{ '> button': 'relative' }}
    marginRight={{ '> button': '-1px' }}
  >
    {children}
  </x.div>
);
