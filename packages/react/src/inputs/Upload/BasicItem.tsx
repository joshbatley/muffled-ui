import { PaperClipIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ClickableElement } from '../../inputs/Button';
import { Tooltip } from '../../feedback/Tooltip';
import { Box, Text } from '../../data';
import { AcceptedFile } from './Utils';

export type BasicItemProps = {
  file: AcceptedFile;
  handleDelete: (key: string) => void;
};

export const BasicItem: React.FC<BasicItemProps> = ({ file, handleDelete }) => {
  let { bytes, name } = file.meta;
  let hasError = (file.errors?.length || 0) > 0;
  let errorMessage = hasError && file.errors!.reduce((acc, curr) => acc += curr.message + ' ', '');
  return (
    <Tooltip disabled={!hasError} as='li' tooltip={errorMessage}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        px="1"
        borderRadius="1"
        opacity={{ ':hover button': 1 }}
        color={hasError ? 'error' : 'base'}
      >
        <Box display="flex" alignContent="center" gap="2">
          <PaperClipIcon widths={16} height={16} />
          <Text as="span">{name}</Text>
          {!hasError && <Text as="span" fontSize={1} lineHeight={1}>{bytes}</Text>}
        </Box>
        <Box display="flex" alignItems="center">
          <ClickableElement opacity={hasError ? 1 : 0} onClick={() => handleDelete(file.key)}>
            <TrashIcon width={16} height={16} />
          </ClickableElement>
        </Box>
      </Box>
    </Tooltip>
  );
};
