import { MdErrorOutline } from "react-icons/md";

interface ErrorFrameProps {
  error: Error | null;
}

export const ErrorFrame = ({ error }: ErrorFrameProps) => {
  return (
    <section
      data-cy="error-frame"
      className="mt-5 w-full px-3 flex flex-col items-center gap-3"
    >
      <MdErrorOutline size={50} />
      <span className="text-center">{error?.message}</span>
    </section>
  );
};
