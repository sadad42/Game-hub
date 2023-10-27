import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./gamecard/GameCard";


const GameGrid = () => {
  const {games,error} = useGame();
 
  return (
    <>
       {error && <Text>{error}</Text>}
      <SimpleGrid>
     {games.map((game) => (<GameCard key={game.id} game={game}/>))}
    </SimpleGrid>
    </>
  )
}

export default GameGrid