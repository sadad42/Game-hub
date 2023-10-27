import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Theme from './theme'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <ColorModeScript initialColorMode={Theme.config.initialColorMode}/>
    <App />
    </ChakraProvider>
   
  </React.StrictMode>,
)
