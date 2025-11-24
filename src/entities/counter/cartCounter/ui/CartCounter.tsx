import { Counter } from '@/shared/ui/Counter';
import { memo } from 'react';
import { useCartCount } from '../model/hooks/useCount';

type CartCounterProps = {
  productId: string;
};

export const CartCounter = memo(({ productId }: CartCounterProps) => {
  const { count, stock, handleSetCount, handleIncrement, handleDecrement } =
    useCartCount(productId);

  return (
    <Counter
      count={count}
      onMinus={handleDecrement}
      onPlus={handleIncrement}
      onChange={handleSetCount}
      plusDisabled={count >= stock}
    />
  );
});

CartCounter.displayName = 'CartCounter';
