import { useData } from "~/context/DataContext";
import { ReactNode } from "react";

interface SearchRootProps {
  children: ReactNode;
}

export const SearchRoot = ({ children }: SearchRootProps) => {
  const { handleSearch } = useData();

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-center gap-1"
    >
      {children}
    </form>
  );
};
