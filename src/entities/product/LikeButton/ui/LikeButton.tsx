import {
  IErrorResponse,
  useDeleteLikeProductMutation,
  useSetLikeProductMutation,
} from '@/shared/store/api/product';
import { userSelectors } from '@/shared/store/slices/user';
import { useAppSelector } from '@shared/store/utils';
import { LikeButton } from '@shared/ui/LikeButton';
import { useOptimistic } from 'react';
import { toast } from 'react-toastify';

type TProductLikeButtonProps = {
  product: Product;
};

export const ProductLikeButton = ({ product }: TProductLikeButtonProps) => {
  const accessToken = useAppSelector(userSelectors.getAccessToken);
  const user = useAppSelector(userSelectors.getUser);

  const [setLike] = useSetLikeProductMutation();
  const [deleteLike] = useDeleteLikeProductMutation();

  const currentIsLike = product?.likes.some((l) => l.userId === user?.id);

  // Используем useOptimistic для мгновенного обновления UI
  const [optimisticLike, setOptimisticLike] = useOptimistic(
    currentIsLike,
    (_state, newLike: boolean) => newLike,
  );

  const toggleLike = async () => {
    if (!accessToken) {
      toast.warning('Вы не авторизованы');
      return;
    }

    const newLikeValue = !currentIsLike;

    setOptimisticLike(newLikeValue);

    try {
      let response;
      if (currentIsLike) {
        response = await deleteLike({ id: `${product.id}` });
      } else {
        response = await setLike({ id: `${product.id}` });
      }

      if (response.error) {
        const error = response.error as IErrorResponse;
        toast.error(error.data.message);
      }
    } catch (error) {
      console.error('Failed to toggle like:', error);
    }
  };

  return <LikeButton isActive={optimisticLike} onClick={toggleLike} />;
};
