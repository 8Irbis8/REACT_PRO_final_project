import { Modal } from '@/shared/modal/ui/Modal';
import { useCallback, useState } from 'react';
import { Card } from './Card';

type CardProps = {
  product: Product;
};

export const CardModal = ({ product }: CardProps) => {
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
        <Card product={product} />
      </Modal>
    </>
  );
};
