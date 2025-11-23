import classNames from 'classnames';
import s from './DeliveryInfo.module.css';

type DeliveryInfoProps = {
  icon: React.ReactNode;
  title: string;
  items: string[];
};

export const DeliveryInfo = ({ icon, title, items }: DeliveryInfoProps) => (
  <div className={classNames(s['product__delivery'])}>
    {icon}
    <div className={classNames(s['product__right'])}>
      <h3 className={classNames(s['product__name'])}>{title}</h3>
      {items.map((item, index) => (
        <p key={index} className={classNames(s['product__text'])}>
          {item}
        </p>
      ))}
    </div>
  </div>
);
