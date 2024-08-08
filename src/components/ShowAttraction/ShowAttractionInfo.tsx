import { socialIcons } from "~/lib/constants";
import { SearchAttraction } from "~/types";
import Image from "next/image";

interface ShowAttractionInfoProps {
  selectedAttraction: SearchAttraction;
}

export const ShowAttractionInfo = ({
  selectedAttraction,
}: ShowAttractionInfoProps) => {
  return (
    <span
      data-cy="show-attraction-info"
      className="flex items-center gap-4 flex-wrap justify-center"
    >
      <span className="w-24 h-24 sm:w-32 sm:h-32 rounded-full relative">
        <Image
          className="rounded-full object-cover"
          fill
          sizes="100%"
          priority
          src={selectedAttraction.images[0].url}
          alt={selectedAttraction.name}
        />
      </span>

      <span className="flex flex-col gap-2">
        <h5>{selectedAttraction.name}</h5>

        {selectedAttraction?.externalLinks && (
          <span className="flex gap-2">
            {socialIcons.map(
              item =>
                selectedAttraction.externalLinks[item.name] && (
                  <a
                    key={item.name}
                    href={selectedAttraction.externalLinks[item.name][0].url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.icon}
                  </a>
                ),
            )}
          </span>
        )}
      </span>
    </span>
  );
};
