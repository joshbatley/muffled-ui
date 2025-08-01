import { useState } from 'react';
import { x } from '@xstyled/styled-components';
import type { LayoutProps, SizingProps } from '@xstyled/styled-components';
import { WithChildren } from '../../types';

type MediaComponent = 'video' | 'audio' | 'picture' | 'iframe' | 'img' | 'div';

export type CardMediaProps = {
  imageUrl?: string;
  as: MediaComponent
  image?: string;
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
} & WithChildren & LayoutProps & SizingProps;

const MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
const IMAGE_COMPONENTS = ['picture', 'img'];

export const CardMedia: React.FC<CardMediaProps> = ({
  children, as, image, src, fallback, ...rest
}) => {
  let [errored, setError] = useState(false);
  let isImageComponent = IMAGE_COMPONENTS.indexOf(as) !== -1;
  let isMediaComponent = MEDIA_COMPONENTS.indexOf(as) !== -1;
  let showBgImagine = !isMediaComponent && image !== undefined;

  return errored ? <>{fallback}</> : (
    <x.div
      as={as}
      onError={() => setError(true)}
      src={src}
      objectFit={isImageComponent ? 'cover' : 'unset'}
      display="block"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage={showBgImagine && image ? `url("${image}")` : undefined}
      {...rest}
    >
      {children}
    </x.div>
  );
};
