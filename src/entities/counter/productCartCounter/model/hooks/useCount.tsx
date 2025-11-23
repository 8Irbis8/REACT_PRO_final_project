import { usePreviousValue } from '@/shared/hooks/usePreviousValue';
import { ChangeEvent, useState } from 'react';

const MIN_COUNT = 1;
const MAX_COUNT = 99;

export const useProductCount = () => {
  const [count, setCount] = useState(1);
  const previousCount = usePreviousValue(count);
  console.log(previousCount)
  
  const handleCount = (e: ChangeEvent<HTMLInputElement>) => {
    const newCount = +e.target.value;
    const validCount =
      newCount > MAX_COUNT ? MAX_COUNT : newCount < MIN_COUNT ? MIN_COUNT : newCount;
    setCount(validCount);
  };
  const handleCountMinus = () => {
    const newCount = count - 1;
    const validCount = newCount < MIN_COUNT ? MIN_COUNT : newCount;
    setCount(validCount);
  };
  const handleCountPlus = () => {
    const newCount = count + 1;
    const validCount = newCount > MAX_COUNT ? MAX_COUNT : newCount;
    setCount(validCount);
  };
  return { count, handleCount, handleCountMinus, handleCountPlus };
};
