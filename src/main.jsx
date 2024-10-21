import * as React from 'react'
import { ChakraProvider,ColorModeScript,extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes"

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ colors,config })

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode="dark" />
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)