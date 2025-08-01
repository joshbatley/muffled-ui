import { PhotoIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Text, ImageComp, Box } from '../../data';
import { ClickableElement } from '../../inputs/Button';
import { Tooltip } from '../../feedback/Tooltip';
import { AcceptedFile } from './Utils';

export type TileItemProps = {
  file: AcceptedFile;
  handleDelete: (key: string) => void;
};

const fallback = (
  <Box w="12" h="12" display="flex" alignItems="center" justifyContent="center" color="baseHighlight"
    borderRadius="2" bg="background.2">
    <PhotoIcon width={30} height={30} />
  </Box>
);

export const TileItem: React.FC<TileItemProps> = ({ file, handleDelete }) => {
  let { name, bytes, type, extension } = file.meta;
  let imgSrc = URL.createObjectURL(file.file);
  let hasError = (file.errors?.length || 0) > 0;
  let errorMessage = hasError && file.errors!.reduce((acc, curr) => acc += curr.message + ' ', '');
  let meta = [bytes, type, extension].filter(Boolean).join(' - ');

  return (
    <Tooltip disabled={!hasError} as='li' tooltip={errorMessage}>
      <Box
        display="flex"
        alignItems="center"
        p="2"
        overflow="hidden"
        borderRadius="3"
        border={hasError ? 'error.1' : 'background2.1'}
        color={hasError ? 'error' : 'base'}
        opacity={{ ':hover button': 1 }}
      >
        <ImageComp w="12" h="12" objectFit="cover" borderRadius="2" bg="background" src={imgSrc as string} fallback={fallback} />
        <Box display="flex" flexDirection="column" ml="2">
          <Text as="span" fontWeight="700">{name}</Text>
          <Text fontSize="0" lineHeight="0" color="baseHighlight">{meta}</Text>
        </Box>
        <Box display="flex" flexGrow="1" alignItems="center" justifyContent="end">
          <ClickableElement opacity={hasError ? 1 : 0} onClick={() => handleDelete(file.key)}>
            <TrashIcon width={16} height={16} />
          </ClickableElement>
        </Box>
      </Box>
    </Tooltip>
  );
};
