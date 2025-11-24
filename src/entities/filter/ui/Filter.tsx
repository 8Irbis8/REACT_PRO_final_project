import { productsActions, productsSelectors } from '@/shared/store/slices/products';
import { useAppDispatch, useAppSelector } from '@shared/store/utils';
import { Sort } from '@shared/ui/Sort';
import { memo, useCallback } from 'react';

export const Filter = memo(() => {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(productsSelectors.getSort);

  const setSort = useCallback(
    (newSort: string) => {
      dispatch(productsActions.setSort(newSort as Sort));
    },
    [dispatch],
  );

  const sortOptions = [
    { title: 'Дешевые', value: 'low-price' },
    { title: 'Дорогие', value: 'high-price' },
    { title: 'Новые', value: 'newest' },
    { title: 'Старые', value: 'oldest' },
  ];

  return <Sort value={sort} options={sortOptions} onChange={setSort} />;
});

Filter.displayName = 'Filter';
