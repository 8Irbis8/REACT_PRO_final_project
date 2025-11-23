// components/ProductLikeButton.tsx
import { LikeButton } from '@shared/ui/LikeButton';
import { useOptimisticLike } from '../model/hooks/useOptimisticLike';

type TProductLikeButtonProps = {
  product: Product;
};

export const ProductLikeButton = ({ product }: TProductLikeButtonProps) => {
  const { toggleLike, optimisticLike } = useOptimisticLike(product);
  console.log(optimisticLike);
  return <LikeButton isActive={optimisticLike} onClick={toggleLike} />;
};
