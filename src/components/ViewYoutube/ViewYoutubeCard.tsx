"use client";

import { YoutubeDetailsType } from "~/types";
import Image from "next/image";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaPlay, FaRegComment } from "react-icons/fa";
import { GrView } from "react-icons/gr";

interface ViewYoutubeCardProps {
  item: YoutubeDetailsType;
}

export const ViewYoutubeCard = ({ item }: ViewYoutubeCardProps) => {
  const [playHover, setPlayHover] = useState<boolean>(false);
  const [currentVideo, setCurrentVideo] = useState<string>("");

  const handleMouseEnter = (id: string) => {
    setCurrentVideo(id);
    setPlayHover(true);
  };

  const handleMouseLeave = () => {
    setCurrentVideo("");
    setPlayHover(false);
  };

  const showPlay = (id: string) => {
    return playHover && currentVideo === id;
  };

  const renderCounters = (count: string) => {
    const countNumber = Number(count);

    if (countNumber > 1000000000) {
      return `${(countNumber / 1000000000).toFixed(1)} bi`;
    }

    if (countNumber > 1000000) {
      return `${(countNumber / 1000000).toFixed(1)} mi`;
    }

    if (countNumber > 1000) {
      return `${(countNumber / 1000).toFixed(1)} mil`;
    }

    return countNumber;
  };

  return (
    <article
      key={item.id}
      className="flex flex-col gap-3 p-3 rounded-md border border-gray-300 bg-white w-full items-center"
    >
      <span
        className="relative cursor-pointer"
        onMouseEnter={() => handleMouseEnter(item.id)}
        onMouseLeave={() => handleMouseLeave()}
      >
        <FaPlay
          className={`play-tooltip ${showPlay(item.id) ? "show" : ""}`}
          size={40}
          color="#fff"
        />
        <Image
          src={item.snippet.thumbnails.medium.url}
          alt={item.snippet.title}
          width={320}
          height={180}
        />
      </span>
      <h3 className="text-lg font-bold">{item.snippet.title}</h3>
      <span className="flex gap-5">
        <span className="flex gap-1 items-center justify-center">
          <GrView /> {renderCounters(item.statistics.viewCount)}
        </span>
        <span className="flex gap-1 items-center justify-center">
          <AiFillLike /> {renderCounters(item.statistics.likeCount)}
        </span>
        <span className="flex gap-1 items-center justify-center">
          <FaRegComment /> {renderCounters(item.statistics.commentCount)}
        </span>
      </span>
      {item.snippet.description && (
        <span className="text-center">
          {item.snippet.description.slice(0, 100)}...
        </span>
      )}
    </article>
  );
};
