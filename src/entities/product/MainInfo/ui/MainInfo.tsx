import { cartSelectors } from '@shared/store/slices/cart';
import { useAppSelector } from '@shared/store/utils';
import { CartCounter } from '@shared/ui/CartCounter';
import { Price } from '@shared/ui/Price';
import { ProductCartCounter } from '@shared/ui/ProductCartCounter/ui/ProductCartCounter';
import classNames from 'classnames';
import { memo } from 'react';
import { ProductLikeButton } from '../../LikeButton';
import s from './Maininfo.module.css';

type ProductMainInfoProps = {
  product: Product;
};

export const ProductMainInfo = memo(({ product }: ProductMainInfoProps) => {
  const { id, images, description, price, discount } = product;
  const cartProducts = useAppSelector(cartSelectors.getCartProducts);
  const isProductInCart = cartProducts.some((p) => p.id === id);
  const finalPrice = price - discount;
  const hasDiscount = discount > 0;

  return (
    <div className={classNames(s['product'])}>
      <div className={classNames(s['product__img-wrapper'])}>
        <img src={images} alt={description} />
      </div>
      <div className={classNames(s['product__desc'])}>
        <Price value={finalPrice} oldValue={hasDiscount ? price : undefined} size="big" />

        {isProductInCart ? (
          <CartCounter productId={id} />
        ) : (
          <ProductCartCounter product={product} />
        )}

        <ProductLikeButton product={product} />
      </div>
    </div>
  );
});

ProductMainInfo.displayName = 'ProductMainInfo';
