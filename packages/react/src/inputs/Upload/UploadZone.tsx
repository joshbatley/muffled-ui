import { useCallback, forwardRef } from 'react';
import { x } from '@xstyled/styled-components';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { Text, List, Box } from '../../data';
import { TileItem } from './TileItem';
import { BasicItem } from './BasicItem';
import { BaseUploader, BaseUploaderProps } from './BaseUploader';
import { AcceptedFile } from './Utils';

export type UploadZoneProps = {
  showAsTile?: boolean;
  bottomText?: string;
} & Omit<BaseUploaderProps, 'container' | 'renderUploader'>;

const Container = forwardRef<HTMLDivElement, { isDragActive: boolean; }>(({ isDragActive, ...rest }, ref) => (
  <x.div
    w="100%"
    display="flex"
    flexDirection="column"
    textAlign="center"
    justifyContent="center"
    alignItems="center"
    cursor="pointer"
    borderRadius="3"
    borderColor={isDragActive ? 'accent' : 'border'}
    bg={isDragActive ? 'muted' : 'background'}
    borderWidth="4px"
    borderStyle="dashed"
    padding="5 2"
    margin={{ '> :not([hidden]) ~ :not([hidden])': '1 0' }}
    ref={ref}
    {...rest}
  />
));

export const UploadZone: React.FC<UploadZoneProps> = ({
  showAsTile,
  filesRender,
  bottomText = 'Support for a single or bulk upload.',
  ...rest
}) => {
  let Uploader = useCallback((isDragActive: boolean) => (
    <>
      <Box color="foreground" animation={isDragActive ? 'bounce' : 'none'}><ArrowUpTrayIcon width={30} height={30}  /></Box>
      {isDragActive ? <Text fontWeight="700" color="base">And drop your file to upload</Text> :
        <Text>
          Drag and drop, or <Text as="span" color="primary">click to find</Text> a file
        </Text>
      }
      <Text fontSize="1" lineHeight="1"
        color={isDragActive ? 'baseAccent' : 'baseHighlight'}>{bottomText}</Text>
    </>
  ), [bottomText]);

  let defaultRender = useCallback((files: AcceptedFile[], handleDelete: any) => (
    <List mt={{ '': 2, ' > :not([hidden]) ~ :not([hidden])': 2 }} mb={{ ' > :not([hidden]) ~ :not([hidden])':2 }} margin={{ ':empty': 0 }}>
      {files.map(file => showAsTile ? (
        <TileItem key={file.key} file={file} handleDelete={handleDelete} />
      ) : (
        <BasicItem key={file.key} file={file} handleDelete={handleDelete} />
      ))}
    </List>
  ), [showAsTile]);

  return (
    <BaseUploader
      {...rest}
      container={Container}
      renderUploader={Uploader}
      filesRender={filesRender || defaultRender}
    />
  );
};
