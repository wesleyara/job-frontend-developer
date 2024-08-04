interface ErrorFrameProps {
  error: Error | null;
}

export const ErrorFrame = ({ error }: ErrorFrameProps) => {
  return <div className="mt-5 w-full px-3 text-center">{error?.message}</div>;
};
