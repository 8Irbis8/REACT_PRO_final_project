import {
  IErrorResponse,
  useDeleteLikeProductMutation,
  useSetLikeProductMutation,
} from '@/shared/store/api/product';
import { userSelectors } from '@/shared/store/slices/user';
import { useAppSelector } from '@shared/store/utils';
import { startTransition, useCallback, useMemo, useOptimistic, useState } from 'react';
import { toast } from 'react-toastify';

export const useOptimisticLike = (product: Product) => {
  const accessToken = useAppSelector(userSelectors.getAccessToken);
  const user = useAppSelector(userSelectors.getUser);

  const [setLike] = useSetLikeProductMutation();
  const [deleteLike] = useDeleteLikeProductMutation();

  const currentIsLike = useMemo(
    () => product?.likes.some((l) => l.userId === user?.id),
    [product?.likes, user?.id],
  );

  const [isLiked, setIsLiked] = useState(currentIsLike);

  // Используем useOptimistic для мгновенного обновления UI
  const [optimisticLike, setOptimisticLike] = useOptimistic(
    isLiked,
    (_state, newLike: boolean) => newLike,
  );

  const toggleLike = useCallback(async () => {
    if (!accessToken) {
      toast.warning('Вы не авторизованы');
      return;
    }
    startTransition(async () => {
      setOptimisticLike(!isLiked);

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
        } else startTransition(async () => setIsLiked(!isLiked));
      } catch (error) {
        console.error('Failed to toggle like:', error);
      }
    });
  }, [accessToken, currentIsLike, isLiked, product, deleteLike, setLike, setOptimisticLike]);

  return {
    toggleLike,
    optimisticLike,
  };
};
