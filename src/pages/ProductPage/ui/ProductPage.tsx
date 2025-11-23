import { Product } from '@/widgets/Product';
import { WithProtection } from '@shared/store/HOCs/WithProtection';
import { ButtonBack } from '@shared/ui/ButtonBack';

export const ProductPage = WithProtection(() => {
  return (
    <>
      <ButtonBack />
      <Product />
    </>
  );
});
