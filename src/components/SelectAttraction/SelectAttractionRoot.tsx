import { ReactNode } from "react";

interface SelectAttractionRootProps {
  children: ReactNode;
}

export const SelectAttractionRoot = ({
  children,
}: SelectAttractionRootProps) => {
  return (
    <div className="flex flex-col border border-gray-300 rounded-md bg-white">
      {children}
    </div>
  );
};
