import { InputHTMLAttributes } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const SearchInput = ({ ...rest }: SearchInputProps) => {
  return (
    <input
      {...rest}
      data-cy="search-input"
      type="text"
      placeholder="Busque o artista"
      className="py-2 px-3 rounded-md outline-none"
    />
  );
};
