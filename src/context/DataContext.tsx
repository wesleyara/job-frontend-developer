"use client";

import { useQuery } from "@tanstack/react-query";
import { useToast } from "~/components/ui/use-toast";
import { HttpClient } from "~/lib/httpClient";
import { SearchAttraction } from "~/types";
import {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

interface DataContextType {
  searchQuery: string;
  ticketSearchData: SearchAttraction[];
  ticketSearchIsLoading: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  handleClear: () => void;
}

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext({} as DataContextType);

export const DataProvider = ({ children }: DataProviderProps) => {
  const httpClient = new HttpClient();

  const { toast } = useToast();

  const [searchQuery, setSearchQuery] = useState("");
  const [enabled, setEnabled] = useState(false);

  const { data: ticketSearchData, isLoading: ticketSearchIsLoading } = useQuery(
    {
      queryKey: ["ticket_search"],
      queryFn: async () => {
        const data = await httpClient.get(
          "ticket",
          `/attractions.json?keyword=${searchQuery}`,
        );

        toast({
          title: "Sucesso, dados carregados!",
        });

        return data._embedded.attractions;
      },
      enabled,
    },
  );

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      return toast({
        title: "Erro, campo de busca vazio!",
      });
    }

    setEnabled(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setEnabled(false);
  };

  const handleClear = () => {
    setSearchQuery("");
    setEnabled(false);
  };

  return (
    <DataContext.Provider
      value={{
        searchQuery,
        ticketSearchData,
        ticketSearchIsLoading,
        handleChange,
        handleSearch,
        handleClear,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }

  return context;
};
