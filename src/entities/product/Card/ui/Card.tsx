import { CartCounter } from '@/entities/counter/cartCounter';
import { ProductLikeButton } from '@/entities/product/LikeButton';
import { useAddToCart } from '@/shared/hooks/useAddToCart';
import { cartSelectors } from '@/shared/store/slices/cart';
import { useAppSelector } from '@/shared/store/utils';
import { Button } from '@/shared/ui/Button';
import { Price } from '@/shared/ui/Price';
import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import s from './Card.module.css';

type CardProps = {
  product: Product;
};
export const Card = memo(({ product }: CardProps) => {
  const { discount, price, name, tags, id, images } = product;
  const cartProducts = useAppSelector(cartSelectors.getCartProducts);
  const isProductInCart = cartProducts.some((p) => p.id === id);
  const { addProductToCart } = useAddToCart();

  const addProductToCartHandler = useCallback(
    () => addProductToCart({ ...product, count: 1 }),
    [addProductToCart, product],
  );
  return (
    <article className={s['card']}>
      <div className={classNames(s['card__sticky'], s['card__sticky_type_top-left'])}>
        <span className={s['card__discount']}>{discount}</span>
        {tags.length > 0 &&
          tags.map((t) => (
            <span key={t} className={classNames(s['tag'], s['tag_type_new'])}>
              {t}
            </span>
          ))}
      </div>
      <div className={classNames(s['card__sticky'], s['card__sticky_type_top-right'])}>
        <ProductLikeButton product={product} />
      </div>
      <Link className={s['card__link']} to={`/products/${id}`}>
        <img src={images} alt={name} className={s['card__image']} loading="lazy" />
        <div className={s['card__desc']}>
          <Price oldValue={price} value={discount} size="small" />
          <h3 className={s['card__name']}>{name}</h3>
        </div>
      </Link>
      {isProductInCart ? (
        <CartCounter productId={id} />
      ) : (
        <Button
          onClick={addProductToCartHandler}
          disabled={isProductInCart}
          className={classNames(s['card__cart'], s['card__btn'], s['card__btn_type_primary'])}
        >
          В корзину
        </Button>
      )}
    </article>
  );
});

Card.displayName = 'Card';
