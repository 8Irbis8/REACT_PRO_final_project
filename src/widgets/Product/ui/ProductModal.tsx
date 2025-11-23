import { Modal } from '@/shared/modal/ui/Modal';
import { memo, useCallback, useState } from 'react';
import { Product } from './Product';

type TProductProps = {
  product: Product;
};

export const ProductModal = memo(({ product }: TProductProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerModal = useCallback(() => setIsOpen((prev) => !prev), []);
  return (
    <>
      {!isOpen && (
        <button
          onClick={triggerModal}
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
      )}
      <Modal isOpen={isOpen} onClose={triggerModal}>
        <Product productId={product?.id} />
      </Modal>
    </>
  );
});

ProductModal.displayName = 'ProductModal';
