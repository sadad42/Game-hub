import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Platform{
  id: number,
  name: string,
  slug: string
}

 export interface game {
  id: number,
  name: string,
  background_image: string,
  parent_platform: {platform: Platform}[]
}

interface fetchGameResponse{
  count: number,
  result: game[]
}
const useGame = () => {
  const [games, setGames] = useState<game[]>([]);
  const [error, setError] = useState('');
  
  const controller = new AbortController();
  useEffect(() => {
    apiClient.get<fetchGameResponse>('/games', {signal: controller.signal})
    .then(res => setGames(res.data.result))
    .catch(err => {if (err instanceof CanceledError) return; 
      setError(err.message)})
    return () => controller.abort();
  }, []
  )
  return{ games,error}
}

export default useGame;