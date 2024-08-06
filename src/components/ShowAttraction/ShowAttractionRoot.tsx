import { ButtonHTMLAttributes, ReactNode } from "react";
import { CiCircleMore } from "react-icons/ci";

interface ShowAttractionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const ShowAttractionRoot = ({
  children,
  ...rest
}: ShowAttractionProps) => {
  return (
    <section className="flex flex-col items-center gap-5 mt-10 border-2 border-gray-300 rounded-lg bg-white py-10 w-[90%] max-w-[600px] relative">
      <button {...rest} className="absolute top-2 right-2 p-2 rounded-md">
        <CiCircleMore size={24} />
      </button>
      {children}
    </section>
  );
};
