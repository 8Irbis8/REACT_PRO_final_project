import { ChangeEvent, useCallback, useMemo } from 'react';

type SortOption = {
  title: string;
  value: string;
};

type SortProps = {
  value: string;
  options: SortOption[];
  onChange: (value: string) => void;
};

export const Sort = ({ value, options, onChange }: SortProps) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  const memoOptions = useMemo(
    () =>
      options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      )),
    [options],
  );

  return (
    <select value={value} onChange={handleChange}>
      {memoOptions}
    </select>
  );
};
