import { XMarkIcon } from '@heroicons/react/24/solid';
import { ClickableElement, ClickableElementProps } from '../../inputs/Button/ClickableElement';

export const CloseBtn: React.FC<ClickableElementProps> = ({ onClick }) => (
  <ClickableElement
    float="right"
    padding="1 2"
    onClick={onClick}
  >
    <XMarkIcon width={16} height={16} />
  </ClickableElement>
);
