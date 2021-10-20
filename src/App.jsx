import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'

import theme from './theme'
import AuthState from './context/auth/AuthState'
import RootRouter from './router/RootRouter'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <AuthState>
          <RootRouter />
        </AuthState>
      </Router>
    </ChakraProvider>
  )
}

export default App
