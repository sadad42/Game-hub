import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APICLIENT, { FetchResponse } from "../services/api-client"
import { Platform } from "./usePlatforms";

const ApiClient = new APICLIENT<Game>('/games')

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1}) => 
    ApiClient.getAll({
      params: {
        genres: gameQuery.genreid,
        parent_platforms: gameQuery.platformid,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      },
    }),
    getNextPageParam: (lastPage,allPages) => {
      return lastPage.next? allPages.length + 1 : undefined
    },
     staleTime: 24*60*60*1000 //24hrs
  })
export default useGames;