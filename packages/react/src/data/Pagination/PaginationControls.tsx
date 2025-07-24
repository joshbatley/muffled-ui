import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import { OutlineButton } from '../../inputs/Button';
import { Box } from '../Box';
import { Text } from '../Text';

export type PaginationProps = {
  skip: number;
  limit: number;
  itemCount: number;
  setSkip: (skip: number) => void;
};

export const PaginationControls: React.FC<PaginationProps> = ({
  skip, limit, itemCount, setSkip,
}) => {
  let currentPage = skip === 0 ? 1 : Math.floor(skip / limit + 1);
  let totalPages = Math.ceil(itemCount / limit);

  return (
    <Box display="inline-flex" alignItems="center" gridColumnGap="2">
      <Text>Page {currentPage} of {totalPages}</Text>
        <OutlineButton
      verticalAlign="bottom"
        disabled={currentPage === 1}
        onClick={() => setSkip(0)}
          paddingX={11}
      >
        <ChevronDoubleLeftIcon width={18} height={18} />
      </OutlineButton>
       <OutlineButton
        verticalAlign="bottom"
        onClick={() => setSkip(skip - limit)}
        disabled={currentPage === 1}
          paddingX={11}
      >
        <ChevronLeftIcon width={18} height={18} />
      </OutlineButton>


      <OutlineButton
        verticalAlign="bottom"
        onClick={() => setSkip(skip + limit)}
        disabled={currentPage === totalPages}
          paddingX={11}
      >
        <ChevronRightIcon width={18} height={18} />
      </OutlineButton>

      <OutlineButton
        verticalAlign="bottom"
        onClick={() => setSkip(itemCount - limit)}
        disabled={currentPage === totalPages}
        paddingX={11}
      >
        <ChevronDoubleRightIcon width={18} height={18} />
      </OutlineButton>
    </Box>
  );
};
