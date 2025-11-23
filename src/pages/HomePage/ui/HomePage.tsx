import { InfiniteScroll } from '@/features/infinite-scroll/ui/InfiniteScroll';
import { WithProtection } from '@/shared/store/HOCs/WithProtection';
import { WithQuery } from '@/shared/store/HOCs/WithQuery';
import { useProducts } from '@/shared/store/hooks/useProducts';
import { CardList } from '@/widgets/CardList';

const CardListWithQuery = WithQuery(CardList);

export const HomePage = WithProtection(() => {
  const { products, isLoading, isError, error } = useProducts();

  return (
    <>
      <CardListWithQuery
        title="Лакомства"
        isLoading={isLoading}
        isError={isError}
        products={products}
        error={error}
      />
      <InfiniteScroll />
    </>
  );
});
