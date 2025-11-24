import { CartItem } from '@/features/cart/CartItem';
import { Modal } from '@/shared/ui/Modal';
import { Product } from '@/widgets/Product';
import classNames from 'classnames';
import { memo, useCallback, useState } from 'react';
import s from './CartList.module.css';

type CartListProps = {
  products: CartProduct[];
};
export const CartList = memo(({ products }: CartListProps) => {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const selectProductForShow = useCallback((id: string) => setSelectedProductId(id), []);
  const closeModal = useCallback(() => setSelectedProductId(null), []);
  return (
    <div className={classNames(s['cart-list'])}>
      {products.map((p) => (
        <CartItem product={p} key={p.id} onClick={selectProductForShow} />
      ))}
      <Modal isOpen={!!selectedProductId} onClose={closeModal}>
        <Product productId={selectedProductId ?? ''} />
      </Modal>
    </div>
  );
});

CartList.displayName = 'CartList';
