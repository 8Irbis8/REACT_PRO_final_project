import { ChangeEvent } from 'react';

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
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select value={value} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};
