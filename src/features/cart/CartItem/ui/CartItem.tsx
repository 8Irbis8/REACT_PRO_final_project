import { CartCounter } from '@/entities/counter/cartCounter';
import TrashIcon from '@shared/assets/icons/trash.svg?react';
import { cartActions } from '@shared/store/slices/cart';
import { Button } from '@shared/ui/Button';
import { Price } from '@shared/ui/Price';
import classNames from 'classnames';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './CartItem.module.css';

type CartItemProps = {
  product: CartProduct;
};

export const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useDispatch();
  const { id, name, images, price, discount } = product;

  const handleDelete = useCallback(() => {
    dispatch(cartActions.deleteCartProduct(id));
  }, [dispatch, id]);

  const finalPrice = price - discount;

  const productLink = `/products/${id}`;

  return (
    <div className={classNames(s['cart-item'])}>
      <div className={classNames(s['cart-item__desc'])}>
        <img src={images} alt={name} className={classNames(s['cart-item__image'])} />

        <div className={classNames(s['cart-item__content'])}>
          <div className={classNames(s['cart-item__row'])}>
            <Link className={classNames(s['cart-item__title'])} to={productLink}>
              <h2>{name}</h2>
            </Link>

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
};
