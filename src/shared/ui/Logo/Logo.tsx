import { Link } from 'react-router-dom';
import LogoIcon from './assets/logo.svg?react';
import s from './Logo.module.css';

export const Logo = () => {
  return (
    <Link to="/">
      <LogoIcon className={s['logo__pic']} />
    </Link>
  );
};
