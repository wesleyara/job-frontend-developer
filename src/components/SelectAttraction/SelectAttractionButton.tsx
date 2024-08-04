"use client";

import { ButtonHTMLAttributes } from "react";

interface SelectAttractionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SelectAttractionButton = ({
  ...rest
}: SelectAttractionButtonProps) => {
  return (
    <button {...rest} className="btn">
      Selecionar
    </button>
  );
};
