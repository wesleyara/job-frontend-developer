import { ReactNode } from "react";

interface ShowAttractionProps {
  children: ReactNode;
}

export const ShowAttractionRoot = ({ children }: ShowAttractionProps) => {
  return (
    <section className="flex flex-col items-center gap-5 mt-10 border-2 border-gray-300 rounded-lg bg-white py-10 w-[90%] max-w-[600px]">
      {children}
    </section>
  );
};
