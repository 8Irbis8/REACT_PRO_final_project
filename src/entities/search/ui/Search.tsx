import { SearchInput } from '@/shared/ui/SearchInput/SearchInput';
import { useProductsSearchForm } from '../model/hooks/useProductSearchForm';

export const Search = () => {
  const { searchValue, setSearchValue } = useProductsSearchForm();

  const handleClearSearch = () => {
    setSearchValue('');
  };

  return (
    <SearchInput
      value={searchValue}
      onChange={setSearchValue}
      onClear={handleClearSearch}
      placeholder="Поиск"
    />
  );
};
