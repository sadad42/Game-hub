import React from 'react'
import { game } from '../../hooks/useGame'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';

interface Props {
  game: game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card>
      <Image src={game.background_image}/>
      <CardBody>
        <Heading>{game.name}</Heading>
        {game.parent_platform.map(({platform}) => <Text>{platform.name}</Text>)}
      </CardBody>
    </Card>
  )
}

export default GameCard