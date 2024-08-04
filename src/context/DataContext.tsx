"use client";

import { useQuery } from "@tanstack/react-query";
import { useToast } from "~/components/ui/use-toast";
import { HttpClient } from "~/lib/httpClient";
import { SearchAttraction } from "~/types";
import {
  ChangeEvent,
  createContext,
  FormEvent,
  ReactNode,
  useContext,
  useState,
} from "react";

interface DataContextType {
  searchQuery: string;
  ticketSearchData: SearchAttraction[];
  selectedAttraction: SearchAttraction | undefined;
  ticketSearchIsLoading: boolean;
  ticketSearchError: Error | null;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (e: FormEvent) => void;
  handleSelectAttraction: (item: SearchAttraction) => void;
}

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext({} as DataContextType);

export const DataProvider = ({ children }: DataProviderProps) => {
  const httpClient = new HttpClient();

  const { toast } = useToast();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAttraction, setSelectedAttraction] =
    useState<SearchAttraction>();
  const [enabled, setEnabled] = useState(false);

  const {
    data: ticketSearchData,
    isLoading: ticketSearchIsLoading,
    error: ticketSearchError,
  } = useQuery({
    queryKey: ["ticket_search"],
    queryFn: async () => {
      const data = await httpClient.get(
        "ticket",
        `/attractions.json?keyword=${searchQuery}`,
      );

      if (!data?._embedded?.attractions) {
        throw new Error(
          `Não existe nenhum dado para ser exibido para ${searchQuery}`,
        );
      }

      toast({
        title: "Sucesso, dados carregados!",
      });

      return data._embedded.attractions;
    },
    enabled,
    retry: false,
  });

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    if (searchQuery.trim() === "") {
      return toast({
        title: "Erro, campo de busca vazio!",
      });
    }

    setEnabled(true);
    setSelectedAttraction(undefined);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setEnabled(false);
  };

  const handleSelectAttraction = (item: SearchAttraction) => {
    setSearchQuery("");
    setSelectedAttraction(item);
  };

  return (
    <DataContext.Provider
      value={{
        searchQuery,
        ticketSearchData,
        selectedAttraction,
        ticketSearchIsLoading,
        ticketSearchError,
        handleChange,
        handleSearch,
        handleSelectAttraction,
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
