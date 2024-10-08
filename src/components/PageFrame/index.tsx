"use client";

import { useData } from "~/context/DataContext";
import { YoutubeDetailsType } from "~/types";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { ErrorFrame } from "../ErrorFrame";
import { Loading } from "../Loading";
import { PlayVideoModal } from "../PlayVideoModal";
import { Search } from "../Search";
import { SelectAttraction } from "../SelectAttraction";
import { ShowAttraction } from "../ShowAttraction";
import { ViewYoutube } from "../ViewYoutube";

export const PageFrame = () => {
  const {
    searchQuery,
    dataTicketSearch,
    dataYoutubeVideosDetails,
    selectedAttraction,
    isLoadingTicketSearch,
    isLoadingYoutubeVideos,
    isLoadingYoutubeVideosDetails,
    errorTicketSearch,
    errorYoutubeVideos,
    errorYoutubeVideosDetails,
    handleChange,
    handleSelectAttraction,
  } = useData();

  const [ratioSelected, setRatioSelected] = useState<string>("");
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [videoSelected, setVideoSelected] = useState<YoutubeDetailsType>();

  const enableToRender = dataTicketSearch && dataTicketSearch.length > 0;

  const render = () => {
    if (isLoadingTicketSearch) {
      return <Loading />;
    }

    if (errorTicketSearch || errorYoutubeVideos || errorYoutubeVideosDetails) {
      return (
        <ErrorFrame
          error={
            errorTicketSearch || errorYoutubeVideos || errorYoutubeVideosDetails
          }
        />
      );
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

      const selected = imagesPerRatio.find(
        (item: any) => item.ratio === ratioSelected,
      );

      return (
        <>
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

          <span className="flex mt-5">
            {isLoadingYoutubeVideos || isLoadingYoutubeVideosDetails ? (
              <Loading />
            ) : (
              !!dataYoutubeVideosDetails && (
                <ViewYoutube.Root>
                  {dataYoutubeVideosDetails?.map((item, index) => (
                    <ViewYoutube.Card
                      key={item.id}
                      item={item}
                      index={index}
                      setModalOpen={setModalOpen}
                      setVideoSelected={setVideoSelected}
                    />
                  ))}
                </ViewYoutube.Root>
              )
            )}
          </span>
        </>
      );
    }

    if (enableToRender) {
      return (
        <div className="flex flex-col gap-3 mt-5 overflow-auto md:w-[600px] w-[90%]">
          {dataTicketSearch.map(item => (
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
        <Search.Button icon={FaSearch} aria-label="Search Button" />
      </Search.Root>

      {render()}

      {videoSelected && (
        <PlayVideoModal
          item={videoSelected}
          isOpen={modalOpen}
          setIsOpen={setModalOpen}
        />
      )}
    </main>
  );
};
