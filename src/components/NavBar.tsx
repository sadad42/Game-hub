import { HStack, Image } from '@chakra-ui/react'
import skull from '../assets/skull.webp'
import ColorModeSwitch from './ColorModeSwitch'


const NavBar = () => {
  return (
    <HStack justifyContent= "space-between" padding= '10px'>
      <Image src={skull} boxSize='60px'/>
      <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar