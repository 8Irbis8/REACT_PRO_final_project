import { DeliveryInfo } from '@/entities/product/DeliveryInfo';
import { ProductDescription } from '@/entities/product/Description';
import { ProductHeader } from '@/entities/product/Header';
import { ProductMainInfo } from '@/entities/product/MainInfo';
import { useGetProductQuery } from '@/shared/store/api/product';
import QualitySVG from '@shared/assets/icons/quality.svg?react';
import TruckSVG from '@shared/assets/icons/truck.svg?react';
import { ReviewList } from '@widgets/ReviewList/ui/ReviewList';
import { memo } from 'react';

type TProductProps = {
  productId: string;
};

export const Product = memo(({ productId }: TProductProps) => {
  const { data: product } = useGetProductQuery({ id: productId });

  if (!product) {
    return <p>Товар не найден</p>;
  }

  return (
    <>
      <ProductHeader name={product.name} rating={3} />
      <ProductMainInfo product={product} />

      <DeliveryInfo
        icon={<TruckSVG />}
        title="Доставка по всему Миру!"
        items={['Доставка курьером — от 399 ₽', 'Доставка в пункт выдачи — от 199 ₽']}
      />

      <DeliveryInfo
        icon={<QualitySVG />}
        title="Гарантия качества"
        items={[
          'Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.',
        ]}
      />

      <ProductDescription />
      <ReviewList product={product} />
    </>
  );
});

Product.displayName = 'Product';
