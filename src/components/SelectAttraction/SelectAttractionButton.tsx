"use client";

import { ButtonHTMLAttributes } from "react";

interface SelectAttractionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SelectAttractionButton = ({
  ...rest
}: SelectAttractionButtonProps) => {
  return (
    <button {...rest} data-cy="select-attraction-button" className="btn">
      Selecionar
    </button>
  );
};
