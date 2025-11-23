// components/ProductLikeButton.tsx
import { LikeButton } from '@shared/ui/LikeButton';
import { memo } from 'react';
import { useOptimisticLike } from '../model/hooks/useOptimisticLike';

type TProductLikeButtonProps = {
  product: Product;
};

export const ProductLikeButton = memo(({ product }: TProductLikeButtonProps) => {
  const { toggleLike, optimisticLike } = useOptimisticLike(product);

  return <LikeButton isActive={optimisticLike} onClick={toggleLike} />;
});

ProductLikeButton.displayName = 'ProductLikeButton';
