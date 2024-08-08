import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { YoutubeDetailsType } from "~/types";
import { Dispatch, SetStateAction } from "react";

interface PlayVideoModalProps {
  item: YoutubeDetailsType;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const PlayVideoModal = ({
  item,
  isOpen,
  setIsOpen,
}: PlayVideoModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex mx-auto items-center justify-center p-4">
        <DialogPanel className="space-y-4 border border-gray-300 bg-white p-12 max-w-[768px] w-[90%] text-center rounded-md relative">
          <button
            data-cy="close-youtube-modal"
            className="absolute top-2 right-3"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
          <DialogTitle className="text-lg">{item.snippet.title}</DialogTitle>

          <iframe
            data-cy="youtube-player"
            src={`https://www.youtube.com/embed/${item.id}`}
            title={item.snippet.title}
            className="inset-0 w-full h-[200px] sm:h-[400px]"
            allowFullScreen
          />
        </DialogPanel>
      </div>
    </Dialog>
  );
};
