import { forwardRef, useCallback } from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { OutlineButton } from '../../inputs/Button';
import { List } from '../../data';
import { BasicItem } from './BasicItem';
import { BaseUploader, BaseUploaderProps } from './BaseUploader';
import { AcceptedFile } from './Utils';
import { x } from '@xstyled/styled-components';

export type UploadButtonProps = {
  buttonText?: boolean;
} & Omit<BaseUploaderProps, 'container' | 'renderUploader'>;

const Container = forwardRef<HTMLDivElement, { isDragActive: boolean; }>(({ isDragActive, ...rest }, ref) => (
  <x.div ref={ref} {...rest} />
));

export const UploadButton: React.FC<UploadButtonProps> = ({
  buttonText = 'Upload file', ...rest
}) => {
  let Uploader = useCallback((_: boolean, open: () => void) => (
    <OutlineButton onClick={open}>
      <ArrowUpTrayIcon width={16} height={16} />
      <span>{buttonText}</span>
    </OutlineButton>
  ), [buttonText]);

  let defaultRender = useCallback((files: AcceptedFile[], handleDelete: any) => (
    <List mt={{ '': 2, ' > :not([hidden]) ~ :not([hidden])': 2 }} mb={{ ' > :not([hidden]) ~ :not([hidden])':2 }} margin={{ ':empty': 0 }}>
      {files.map(file => (
        <BasicItem key={file.key} file={file} handleDelete={handleDelete} />
      ))}
    </List>
  ), []);

  return (
    <BaseUploader
      container={Container}
      {...rest}
      options={{
        noClick: true,
        noKeyboard: true,
      }}
      renderUploader={Uploader}
      filesRender={defaultRender}
    />
  );
};
