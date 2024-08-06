import { ReactNode } from "react";

interface ViewYoutubeRootProps {
  children: ReactNode;
}

export const ViewYoutubeRoot = ({ children }: ViewYoutubeRootProps) => {
  return (
    <section className="flex flex-col gap-3 w-[90%] mx-auto max-w-[400px] items-center">
      {children}
    </section>
  );
};
