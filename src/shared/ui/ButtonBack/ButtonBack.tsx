import BackSvg from '@/shared/assets/icons/back.svg?react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const ButtonBack = () => {
  const navigate = useNavigate();
  const onClickHandle = useCallback(() => navigate(-1), [navigate]);
  return (
    <button onClick={onClickHandle}>
      <BackSvg />
    </button>
  );
};
