import { LoadMore } from '@shared/ui/LoadMore';
import { useRef } from 'react';
import { useInfiniteScroll } from '../model/hooks/useInfiniteScroll';

export const InfiniteScroll = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isEndOfList, isFetching } = useInfiniteScroll({ ref });

  return (
    <LoadMore
      ref={ref}
      isEndOfList={isEndOfList}
      isFetching={isFetching}
      endOfListText="Конец списка!"
    />
  );
};
