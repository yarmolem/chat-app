import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'

import theme from './theme'
import RootRouter from './router/RootRouter'
import AuthState from './context/auth/AuthState'
import SocketState from './context/socket/SocketState'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <AuthState>
          <SocketState>
            <RootRouter />
          </SocketState>
        </AuthState>
      </Router>
    </ChakraProvider>
  )
}

export default App
