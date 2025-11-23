import { Button } from '@/shared/ui/Button';
import { Rating } from '@/shared/ui/Rating';
import classNames from 'classnames';
import { ChangeEvent, useCallback, useState } from 'react';
import s from './ReviewForm.module.css';

export const ReviewForm = () => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    console.log('Отправка: ', { reviewText, rating });
  }, [reviewText, rating]);

  return (
    <form className={s['form']}>
      <Rating isEdit rating={rating} onChange={setRating} />
      <textarea
        className={classNames(s['input'], s['textarea'])}
        name="text"
        id="text"
        placeholder="Напишите текст отзыва"
        value={reviewText}
        onChange={handleChange}
      ></textarea>
      <Button
        type="submit"
        className={classNames(s['form__btn'], s['pramary'])}
        onClick={handleClick}
      >
        Отправить отзыв
      </Button>
    </form>
  );
};
