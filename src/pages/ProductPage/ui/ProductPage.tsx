import { Product } from '@/widgets/Product';
import { WithProtection } from '@shared/store/HOCs/WithProtection';
import { ButtonBack } from '@shared/ui/ButtonBack';
import { useLocation } from 'react-router-dom';

export const ProductPage = WithProtection(() => {
  const location = useLocation();
  const productId = location.pathname.split('/').at(-1) || '';
  return (
    <>
      <ButtonBack />
      <Product productId={productId} />
    </>
  );
});
