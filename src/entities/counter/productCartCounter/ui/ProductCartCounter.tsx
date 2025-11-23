import { useAddToCart } from '@/shared/hooks/useAddToCart';
import { Button } from '@/shared/ui/Button';
import { Counter } from '@/shared/ui/Counter';
import classNames from 'classnames';
import { useCallback, useMemo } from 'react';
import { useProductCount } from '../model/hooks/useCount';
import './ProductCartCounter.module.css';

type ProductCounterProps = {
  product: Product;
};

export const ProductCartCounter = ({ product }: ProductCounterProps) => {
  const { count, handleCount, handleCountMinus, handleCountPlus } = useProductCount();
  const { addProductToCart } = useAddToCart();

  const addProductToCartCallback = useCallback(
    () => addProductToCart({ ...product, count }),
    [product, count, addProductToCart],
  );

  const toCartButtonMemo = useMemo(
    () => <Button onClick={addProductToCartCallback}>В корзину</Button>,
    [addProductToCartCallback],
  );

  return (
    <div className={classNames('product__btn-wrap')}>
      <Counter
        count={count}
        onMinus={handleCountMinus}
        onPlus={handleCountPlus}
        onChange={handleCount}
        additionalContent={toCartButtonMemo}
      />
    </div>
  );
};
