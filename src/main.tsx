import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import TodoLogo from "./components/TodoLogo";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ChakraProvider>
     <TodoLogo/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
