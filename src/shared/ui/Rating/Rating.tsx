import Star from '@shared/assets/icons/star.svg?react';
import { memo, useMemo } from 'react';
type TRating = {
  rating?: number;
  isEdit?: boolean;
  onChange?: (rating: number) => void;
};
export const Rating = memo(({ rating = 0, isEdit = false, onChange }: TRating) => {
  const memoRating = useMemo(
    () =>
      [...Array(5)].map((_e, i) => (
        <span key={i} style={{ cursor: isEdit ? 'pointer' : 'default' }}>
          <Star onClick={() => onChange?.(i)} fill={i <= rating ? 'gold' : 'gray'} />
        </span>
      )),
    [onChange, isEdit, rating],
  );
  return <div>{memoRating}</div>;
});

Rating.displayName = 'Rating';
