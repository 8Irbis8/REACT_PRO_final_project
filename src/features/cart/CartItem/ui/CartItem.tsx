import { CartCounter } from '@/entities/counter/cartCounter';
import TrashIcon from '@shared/assets/icons/trash.svg?react';
import { cartActions } from '@shared/store/slices/cart';
import { Button } from '@shared/ui/Button';
import { Price } from '@shared/ui/Price';
import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import s from './CartItem.module.css';

type CartItemProps = {
  product: CartProduct;
  onClick: (productId: string) => void;
};

export const CartItem = memo(({ product, onClick }: CartItemProps) => {
  const dispatch = useDispatch();
  const { id, name, images, price, discount } = product;

  const handleDelete = useCallback(() => {
    dispatch(cartActions.deleteCartProduct(id));
  }, [dispatch, id]);

  const finalPrice = price - discount;

  const handleTitleClick = useCallback(() => onClick(product.id), [product, onClick]);
  return (
    <div className={classNames(s['cart-item'])}>
      <div className={classNames(s['cart-item__desc'])}>
        <img src={images} alt={name} className={classNames(s['cart-item__image'])} />

        <div className={classNames(s['cart-item__content'])}>
          <div className={classNames(s['cart-item__row'])}>
            <button
              onClick={handleTitleClick}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: 'inherit',
                textDecoration: 'underline',
                cursor: 'pointer',
                font: 'inherit',
              }}
            >
              {product?.name}
            </button>
            <div className={classNames(s['cart-item__controls'])}>
              <CartCounter productId={id} />

              <Price value={finalPrice} oldValue={discount > 0 ? price : undefined} size="big" />
            </div>

            <Button
              variant="secondary"
              onClick={handleDelete}
              className={classNames(s['cart-item__btn-trash'])}
              aria-label={`Удалить ${name} из корзины`}
            >
              <TrashIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

CartItem.displayName = 'CartItem';
