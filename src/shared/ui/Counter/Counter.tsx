import classNames from 'classnames';
import { ChangeEvent } from 'react';
import s from './Counter.module.css';

type CounterProps = {
  count: number;
  isNumShow?: boolean;
  onMinus: () => void;
  onPlus: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  minusDisabled?: boolean;
  plusDisabled?: boolean;
  className?: string;
  additionalContent?: React.ReactNode;
};

export const Counter = ({
  count,
  onMinus,
  onPlus,
  onChange,
  isNumShow = true,
  minusDisabled = false,
  plusDisabled = false,
  additionalContent,
  className,
}: CounterProps) => {
  return (
    <div className={classNames(s['button-count'], className)}>
      <button
        onClick={onMinus}
        className={classNames(s['button-count__minus'])}
        disabled={minusDisabled}
      >
        -
      </button>
      {isNumShow && (
        <input
          onChange={onChange}
          type="number"
          className={classNames(s['button-count__num'])}
          value={count}
        />
      )}
      <button
        onClick={onPlus}
        className={classNames(s['button-count__plus'])}
        disabled={plusDisabled}
      >
        +
      </button>
      {additionalContent}
    </div>
  );
};
