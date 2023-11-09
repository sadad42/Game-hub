
import apiClient from "../services/api-client";
import APICLIENT from "../services/api-client";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";

const ApiClient = new APICLIENT<Genre>('/genres');

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: ApiClient.getAll,
  staleTime: 24*60*60*1000,//24hrs
  
})

export default useGenres;