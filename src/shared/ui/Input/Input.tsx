import classNames from 'classnames';
import { InputHTMLAttributes } from 'react';
import s from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}

export const Input = ({
  label,
  error,
  className,
  fullWidth = false,
  id,
  ref,
  ...props
}: InputProps) => {
  const inputId = id || props.name;

  return (
    <div className={classNames(s.container, { [s.fullWidth]: fullWidth })}>
      {label && (
        <label htmlFor={inputId} className={s.label}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={classNames(
          s.input,
          { [s.error]: error },
          { [s.fullWidth]: fullWidth },
          className,
        )}
        {...props}
      />
      {error && <span className={s.errorText}>{error}</span>}
    </div>
  );
};
