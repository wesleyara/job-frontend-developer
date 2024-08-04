"use client";

import { useData } from "~/context/DataContext";
import { FaSearch } from "react-icons/fa";

import { Search } from "../Search";
import { SelectAttraction } from "../SelectAttraction";

export const PageFrame = () => {
  const {
    searchQuery,
    ticketSearchData,
    ticketSearchIsLoading,
    handleSearch,
    handleChange,
  } = useData();

  const enableToRender = ticketSearchData && ticketSearchData.length > 0;

  return (
    <main className="flex flex-col items-center my-24">
      <Search.Root>
        <Search.Input onChange={handleChange} value={searchQuery} />
        <Search.Button icon={FaSearch} onClick={handleSearch} />
      </Search.Root>

      {ticketSearchIsLoading ? (
        <p className="mt-10">Carregando...</p>
      ) : (
        enableToRender && (
          <div className="flex flex-col gap-3 mt-5 overflow-auto md:w-[600px] w-[90%]">
            {ticketSearchData.map(item => (
              <SelectAttraction.Root key={item.id}>
                <SelectAttraction.Content item={item} />
                <SelectAttraction.Button />
              </SelectAttraction.Root>
            ))}
          </div>
        )
      )}
    </main>
  );
};
