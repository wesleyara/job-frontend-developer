import { ImagesPerRatioTypes } from "~/types";
import Autoplay from "embla-carousel-autoplay";
import { useWidth } from "essentials-utils";
import Image from "next/image";
import { Dispatch, SetStateAction, useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface ShowAttractionCarouselProps {
  ratioSelected: string;
  imagesPerRatio: ImagesPerRatioTypes[];
  selected: ImagesPerRatioTypes | undefined;
  setRatioSelected: Dispatch<SetStateAction<string>>;
}

export const ShowAttractionCarousel = ({
  ratioSelected,
  imagesPerRatio,
  selected,
  setRatioSelected,
}: ShowAttractionCarouselProps) => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const [width, height] = selected?.ratio?.split("_")?.map(Number) || [0, 0];

  const widthSize = useWidth();
  const multiplier = widthSize > 400 ? 80 : 60;
  const ajustedWidth =
    width >= 16 ? width * (multiplier / 4) : width * multiplier;
  const ajustedHeight =
    width >= 16 ? height * (multiplier / 4) : height * multiplier;

  return (
    <span className="flex flex-col items-center gap-4 mt-4 w-full relative">
      <h5>Coleção de imagens</h5>
      <select
        onChange={e => setRatioSelected(e.target.value)}
        value={ratioSelected}
        className="p-2 border border-gray-300 rounded-md bg-white"
      >
        <option value="">Selecione</option>
        {imagesPerRatio.map((item: any) => (
          <option key={item.ratio} value={item.ratio}>
            {item.title}
          </option>
        ))}
      </select>

      {ratioSelected && selected && (
        <span className="flex flex-col items-center">
          <Carousel
            plugins={[plugin.current]}
            className="sm:w-[500px] w-[300px]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {selected.images.map(image => (
                <CarouselItem
                  key={image.url}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={image.url}
                    alt={"Carousel image"}
                    width={ajustedWidth}
                    height={ajustedHeight}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {widthSize > 640 && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>
        </span>
      )}
    </span>
  );
};
