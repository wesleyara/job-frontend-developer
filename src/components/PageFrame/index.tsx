"use client";

import { useData } from "~/context/DataContext";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";

import { Search } from "../Search";
import { SelectAttraction } from "../SelectAttraction";

export const PageFrame = () => {
  const {
    searchQuery,
    ticketSearchData,
    ticketSearchIsLoading,
    handleSearch,
    handleChange,
    handleClear,
  } = useData();

  return (
    <main className="h-[100vh] flex flex-col items-center justify-center bg-[#ebebeb]">
      <Search.Root>
        <Search.Input onChange={handleChange} value={searchQuery} />
        <Search.Button icon={FaSearch} onClick={handleSearch} />
        {searchQuery && <Search.Button icon={MdClear} onClick={handleClear} />}
      </Search.Root>
    </main>
  );
};
