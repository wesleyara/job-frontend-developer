"use client";

import { FaSearch } from "react-icons/fa";

import { Search } from "../Search";

export const PageFrame = () => {
  return (
    <main className="h-[100vh] flex flex-col items-center justify-center bg-[#ebebeb]">
      <Search.Root>
        <Search.Input />
        <Search.Button icon={FaSearch} onClick={() => console.log("teste")} />
      </Search.Root>
    </main>
  );
};
