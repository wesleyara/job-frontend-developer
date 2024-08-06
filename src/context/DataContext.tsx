"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "~/components/ui/use-toast";
import { HttpClient } from "~/lib/httpClient";
import { SearchAttraction, YoutubeDetailsType } from "~/types";
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
  dataTicketSearch: SearchAttraction[];
  selectedAttraction: SearchAttraction | undefined;
  isLoadingTicketSearch: boolean;
  errorTicketSearch: Error | null;
  dataYoutubeVideosDetails: YoutubeDetailsType[] | undefined;
  isLoadingYoutubeVideos: boolean;
  isLoadingYoutubeVideosDetails: boolean;
  errorYoutubeVideos: Error | null;
  errorYoutubeVideosDetails: Error | null;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (e: FormEvent) => void;
  handleSelectAttraction: (item: SearchAttraction) => void;
}

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext({} as DataContextType);

export const DataProvider = ({ children }: DataProviderProps) => {
  const queryClient = useQueryClient();
  const httpClient = new HttpClient();

  const { toast } = useToast();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAttraction, setSelectedAttraction] =
    useState<SearchAttraction>();

  const {
    data: dataTicketSearch,
    isLoading: isLoadingTicketSearch,
    error: errorTicketSearch,
    refetch: refetchTicketSearch,
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
    enabled: false,
    retry: false,
  });

  const {
    data: dataYoutubeVideos,
    isLoading: isLoadingYoutubeVideos,
    error: errorYoutubeVideos,
  } = useQuery({
    queryKey: ["youtube_videos"],
    queryFn: async () => {
      if (!selectedAttraction) {
        throw new Error("Selecione uma atração para buscar vídeos");
      }

      const data = await httpClient.get(
        "youtube",
        `/search?part=snippet&maxResults=5&q=${selectedAttraction.name}&type=video`,
      );

      if (!data?.items) {
        throw new Error(
          `Não existe nenhum dado para ser exibido para ${selectedAttraction.name}`,
        );
      }

      const videoIds = data.items.map((item: any) => item.id.videoId).join(",");

      return videoIds;
    },
    enabled: !!selectedAttraction,
    retry: false,
  });

  const {
    data: dataYoutubeVideosDetails,
    isLoading: isLoadingYoutubeVideosDetails,
    error: errorYoutubeVideosDetails,
  } = useQuery<YoutubeDetailsType[]>({
    queryKey: ["youtube_videos_details"],
    queryFn: async () => {
      if (!selectedAttraction) {
        throw new Error("Selecione uma atração para buscar vídeos");
      }

      const data = await httpClient.get(
        "youtube",
        `/videos?id=${dataYoutubeVideos}&part=snippet,contentDetails,statistics,status`,
      );

      if (!data?.items) {
        throw new Error(
          `Não existe nenhum dado para ser exibido para ${selectedAttraction.name}`,
        );
      }

      return data.items;
    },
    enabled: !!dataYoutubeVideos,
    retry: false,
  });

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    if (searchQuery.trim() === "") {
      return toast({
        title: "Erro, campo de busca vazio!",
      });
    }

    setSelectedAttraction(undefined);
    queryClient.removeQueries({
      queryKey: ["ticket_search"],
      exact: true,
    });
    queryClient.removeQueries({
      queryKey: ["youtube_videos"],
      exact: true,
    });
    queryClient.removeQueries({
      queryKey: ["youtube_videos_details"],
      exact: true,
    });
    refetchTicketSearch();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSelectAttraction = (item: SearchAttraction) => {
    setSearchQuery("");
    setSelectedAttraction(item);
  };

  return (
    <DataContext.Provider
      value={{
        searchQuery,
        dataTicketSearch,
        selectedAttraction,
        isLoadingTicketSearch,
        errorTicketSearch,
        dataYoutubeVideosDetails,
        isLoadingYoutubeVideos,
        isLoadingYoutubeVideosDetails,
        errorYoutubeVideos,
        errorYoutubeVideosDetails,
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
