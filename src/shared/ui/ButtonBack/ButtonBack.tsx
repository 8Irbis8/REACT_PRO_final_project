import BackSvg from '@/shared/assets/icons/back.svg?react';
import { useNavigate } from 'react-router-dom';

export const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      <BackSvg />
    </button>
  );
};
