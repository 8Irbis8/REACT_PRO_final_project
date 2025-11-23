import LikeSvg from '@shared/assets/icons/like.svg?react';
import classNames from 'classnames';
import { memo } from 'react';
import { Button } from '../Button';
import s from './LikeButton.module.css';

type TLikeButtonProps = {
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export const LikeButton = memo(
  ({ isActive = false, onClick, disabled = false, className }: TLikeButtonProps) => {
    return (
      <Button
        className={classNames(s['card__favorite'], className, {
          [s['card__favorite_is-active']]: isActive,
          [s['card__favorite_disabled']]: disabled,
        })}
        onClick={onClick}
        disabled={disabled}
        type="button"
      >
        <LikeSvg />
      </Button>
    );
  },
);

LikeButton.displayName = 'LikeButton';
