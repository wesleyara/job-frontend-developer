import { ReactNode } from "react";

interface SearchRootProps {
  children: ReactNode;
}

export const SearchRoot = ({ children }: SearchRootProps) => {
  return (
    <div className="flex items-center justify-center gap-1">{children}</div>
  );
};
