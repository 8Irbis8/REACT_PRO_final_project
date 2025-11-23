import { Alert, CircularProgress, Stack } from '@mui/material';
import { RefObject } from 'react';

type LoadMoreProps = {
  ref: RefObject<HTMLDivElement>;
  isEndOfList: boolean;
  isFetching: boolean;
  endOfListText?: string;
};

export const LoadMore = ({
  ref,
  isEndOfList,
  isFetching,
  endOfListText = 'End of list!',
}: LoadMoreProps) => {
  return (
    <Stack ref={ref} direction="row" justifyContent="center" alignItems="center" sx={{ my: 5 }}>
      {isFetching && <CircularProgress />}
      {isEndOfList && <Alert severity="success">{endOfListText}</Alert>}
    </Stack>
  );
};
