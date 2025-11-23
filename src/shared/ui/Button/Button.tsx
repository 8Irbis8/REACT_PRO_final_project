import classNames from 'classnames';
import s from './Button.module.css';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  wide?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = 'primary',
  wide = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  const buttonClass = classNames(
    s.button,
    s[`button_type_${variant}`],
    { [s.button_type_wide]: wide },
    className,
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
