import classNames from 'classnames';
import s from './Price.module.css';

type PriceProps = {
  value: number;
  oldValue?: number;
  currency?: string;
  size?: 'small' | 'medium' | 'big';
  className?: string;
};

export const Price = ({
  value,
  oldValue,
  currency = '₽',
  size = 'medium',
  className,
}: PriceProps) => {
  const hasDiscount = oldValue && oldValue > value;

  const priceClass = classNames(s.price, s[`price_${size}`], className);

  const discountPriceClass = classNames(s.price, s.price_discount, s[`price_${size}`]);

  const oldPriceClass = classNames(s.price_old, s[`price_${size}`], s.price_right);

  if (hasDiscount) {
    return (
      <div className={classNames(s['price-wrap'], s[`price-${size}`])}>
        <span className={oldPriceClass}>
          {oldValue} {currency}
        </span>
        <span className={discountPriceClass}>
          {value} {currency}
        </span>
      </div>
    );
  }

  return (
    <span className={priceClass}>
      {value} {currency}
    </span>
  );
};
