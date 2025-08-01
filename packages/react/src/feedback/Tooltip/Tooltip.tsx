import { Ref, useState } from 'react';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import { x } from '@xstyled/styled-components';
import { Portal } from '../../utils';
import { AsProp, WithChildren } from '../../types';

export type TooltipProps = {
  tooltip: React.ReactNode;
  direction?: Placement;
  as?: AsProp;
  disabled?: boolean;
} & WithChildren;

export const Tooltip: React.FC<TooltipProps> = ({
  tooltip, children, direction = 'top', as: Component = 'div', disabled,
}) => {
  let [showTooltip, setTooltip] = useState(false);
  let [wrappedRef, setWrappedRef] = useState(null);
  let [popperRef, setPopperRef] = useState(null);
  let { styles, attributes } = usePopper(wrappedRef, popperRef, {
    placement: direction,
  });

  let handleMouseEnter = () => setTooltip(true);
  let handleMouseLeave = () => setTooltip(false);

  return (
    <>
      <Component
        style={{ cursor: 'pointer' }}
        ref={setWrappedRef as Ref<HTMLDivElement>}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Component>
      {(!disabled && showTooltip) && (
        <Portal>
          <x.div
            ref={setPopperRef as Ref<HTMLDivElement>}
            borderRadius={2}
            boxShadow="base.0"
            border="border.1"
            padding="2 3"
            zIndex={10}
            fontSize={1}
            lineHeight={1}
            background="background"
            style={styles.popper}
            {...attributes.popper}
          >
            {tooltip}
          </x.div>
        </Portal>
      )
      }
    </>
  );
};
