import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'
import platforms from '../data/platforms'

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
  const {data: genres} = useGenres();
  const genre = genres?.results.find(g => g.id === gameQuery.genreid);
  const {data: Platforms} = usePlatforms();
  const platform = Platforms?.results.find(p => p.id === gameQuery.platformid)
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading