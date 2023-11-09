import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APICLIENT from "../services/api-client";


const ApiClient = new APICLIENT<Platform>('/platforms/lists/parents')

 export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery({
  queryKey: ['platform'],
  queryFn: ApiClient.getAll,
  staleTime: 24*60*60*1000,//24hrs

})

export default usePlatforms;