"use client";

import { useData } from "~/context/DataContext";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { ErrorFrame } from "../ErrorFrame";
import { Search } from "../Search";
import { SelectAttraction } from "../SelectAttraction";
import { ShowAttraction } from "../ShowAttraction";

export const PageFrame = () => {
  const {
    searchQuery,
    ticketSearchData,
    selectedAttraction,
    ticketSearchIsLoading,
    ticketSearchError,
    handleChange,
    handleSelectAttraction,
  } = useData();

  const [ratioSelected, setRatioSelected] = useState<string>("");
  const [seeMore, setSeeMore] = useState<boolean>(false);

  const enableToRender = ticketSearchData && ticketSearchData.length > 0;

  const render = () => {
    if (ticketSearchIsLoading) {
      return <p className="mt-10">Carregando...</p>;
    }

    if (ticketSearchError) {
      return <ErrorFrame error={ticketSearchError} />;
    }

    if (selectedAttraction) {
      const imagesPerRatio: any = [];

      selectedAttraction.images.forEach(image => {
        const ratio = image.ratio;
        const find = imagesPerRatio.find((item: any) => item.ratio === ratio);

        if (find) {
          find.images.push(image);
        } else {
          imagesPerRatio.push({
            ratio,
            images: [image],
          });
        }
      });

      console.log(imagesPerRatio);

      const selected = imagesPerRatio.find(
        (item: any) => item.ratio === ratioSelected,
      );

      return (
        <ShowAttraction.Root onClick={() => setSeeMore(prev => !prev)}>
          {!seeMore ? (
            <>
              <ShowAttraction.Info selectedAttraction={selectedAttraction} />
              <ShowAttraction.Badges
                classifications={selectedAttraction.classifications}
              />
            </>
          ) : (
            <ShowAttraction.Carousel
              setRatioSelected={setRatioSelected}
              selected={selected}
              imagesPerRatio={imagesPerRatio}
              ratioSelected={ratioSelected}
            />
          )}
        </ShowAttraction.Root>
      );
    }

    if (enableToRender) {
      return (
        <div className="flex flex-col gap-3 mt-5 overflow-auto md:w-[600px] w-[90%]">
          {ticketSearchData.map(item => (
            <SelectAttraction.Root key={item.id}>
              <SelectAttraction.Content item={item} />
              <SelectAttraction.Button
                onClick={() => handleSelectAttraction(item)}
              />
            </SelectAttraction.Root>
          ))}
        </div>
      );
    }
  };

  return (
    <main className="flex flex-col items-center my-24">
      <Search.Root>
        <Search.Input onChange={handleChange} value={searchQuery} />
        <Search.Button icon={FaSearch} />
      </Search.Root>

      {render()}
    </main>
  );
};
