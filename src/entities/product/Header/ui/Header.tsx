import { Rating } from '@shared/ui/Rating';
import classNames from 'classnames';
import s from './Header.module.css';

type ProductHeaderProps = {
  name: string;
  rating: number;
};

export const ProductHeader = ({ name, rating }: ProductHeaderProps) => (
  <>
    <h1 className={classNames(s['header-title'])}>{name}</h1>
    <p className="acticul">
      Артикул: <b>2388907</b>
    </p>
    <Rating rating={rating} />
  </>
);
