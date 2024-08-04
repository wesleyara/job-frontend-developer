"use client";

import { ButtonHTMLAttributes, ElementType } from "react";

interface SearchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

export const SearchButton = ({ icon: Icon, ...rest }: SearchButtonProps) => {
  return (
    <button {...rest} className="p-3 bg-blue-500 text-white rounded-md">
      <Icon />
    </button>
  );
};
