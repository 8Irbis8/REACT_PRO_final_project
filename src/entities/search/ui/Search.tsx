import { SearchInput } from '@/shared/ui/SearchInput/SearchInput';
import { useCallback } from 'react';
import { useProductsSearchForm } from '../model/hooks/useProductSearchForm';

export const Search = () => {
  const { searchValue, setSearchValue } = useProductsSearchForm();

  const handleClearSearch = useCallback(() => {
    setSearchValue('');
  }, [setSearchValue]);

  return (
    <SearchInput
      value={searchValue}
      onChange={setSearchValue}
      onClear={handleClearSearch}
      placeholder="Поиск"
    />
  );
};
