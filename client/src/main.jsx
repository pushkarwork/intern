import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css'
import App from './App.jsx'
import { ColorModeScript } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
});
createRoot(document.getElementById('root')).render(
  <StrictMode>


    <App />

  </StrictMode>,
)
